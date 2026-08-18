/**
 * SSB GROUP — REACTIVE DATA STORE & BUSINESS ENGINE
 * Storage key: ssb_group_official_v3
 */

class DataStore {
  constructor() {
    this.storageKey = 'ssb_group_official_v3';
    this.state = this.loadState();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.company && parsed.projects && parsed.journey && parsed.leadership) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Storage load error, resetting to seed data:", e);
    }
    // Initialize with fresh seed data
    const initial = JSON.parse(JSON.stringify(SEED_DATA));
    this.saveState(initial);
    return initial;
  }

  saveState(stateToSave = null) {
    const toSave = stateToSave || this.state;
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(toSave));
    } catch (e) {
      console.error("Storage save failed:", e);
    }
  }

  // Getters
  getProjects(filterType = 'ALL') {
    if (!this.state.projects) return [];
    if (filterType === 'ALL') return this.state.projects;
    return this.state.projects.filter(p => p.category === filterType || p.status === filterType);
  }

  getProjectBySlug(slug) {
    if (!this.state.projects) return null;
    return this.state.projects.find(p => p.slug === slug);
  }

  getUnitsByProject(projectId) {
    if (!this.state.units) return [];
    return this.state.units.filter(u => u.projectId === projectId);
  }

  getLeads() {
    return this.state.leads || [];
  }

  getSiteVisits() {
    return this.state.siteVisits || [];
  }

  getAuditLogs() {
    return this.state.auditLogs || [];
  }

  // Core Mutation: Add Lead with Automatic Scoring & Notifications
  addLead(leadData) {
    let score = "COLD";
    let priority = "COLD";

    if (leadData.source === "CALLBACK_60S" || leadData.source === "SITE_VISIT_MODAL" || leadData.cabRequired) {
      score = "HOT";
      priority = "HOT";
    } else if (leadData.source === "BROCHURE_DOWNLOAD" || leadData.interestedUnit) {
      score = "HOT";
      priority = "HOT";
    } else {
      score = "WARM";
      priority = "WARM";
    }

    const newLead = {
      id: "lead_" + Date.now(),
      fullName: leadData.fullName,
      email: leadData.email || "",
      phone: leadData.phone,
      source: leadData.source || "WEBSITE_DIRECT",
      status: "NEW",
      priority: priority,
      projectId: leadData.projectId || null,
      projectName: leadData.projectName || "General Enquiry",
      interestedUnit: leadData.interestedUnit || null,
      budgetRange: leadData.budgetRange || "Not Specified",
      notes: leadData.message || "Submitted via online portal.",
      assignedTo: "Rajesh Sharma (Sales Lead)",
      createdAt: new Date().toISOString()
    };

    if (!this.state.leads) this.state.leads = [];
    this.state.leads.unshift(newLead);

    if (leadData.scheduledDate || leadData.source === "SITE_VISIT_MODAL") {
      const newVisit = {
        id: "vis_" + Date.now(),
        leadId: newLead.id,
        customerName: newLead.fullName,
        phone: newLead.phone,
        projectId: newLead.projectId,
        projectName: newLead.projectName,
        scheduledDate: leadData.scheduledDate || new Date().toISOString().split('T')[0],
        timeSlot: leadData.timeSlot || "11:00 AM - 12:30 PM",
        pickupAddress: leadData.pickupAddress || "Varanasi City Pickup",
        cabRequired: !!leadData.cabRequired,
        numberOfVisitors: parseInt(leadData.visitors || 2, 10),
        driverDetails: leadData.cabRequired ? "Cab Requested (Assigning Driver)" : "Self Travel",
        status: "REQUESTED",
        assignedTo: "Rajesh Sharma"
      };
      if (!this.state.siteVisits) this.state.siteVisits = [];
      this.state.siteVisits.unshift(newVisit);
    }

    this.dispatchNotification(newLead);
    this.addAuditLog("System Webhook", "LEAD_CAPTURED", `${newLead.fullName} (${newLead.phone})`, "N/A", newLead.source);
    this.saveState();
    return newLead;
  }

  updateLeadStatus(leadId, newStatus) {
    const lead = this.state.leads.find(l => l.id === leadId);
    if (lead) {
      const oldStatus = lead.status;
      lead.status = newStatus;
      this.addAuditLog("Admin", "LEAD_STATUS_CHANGED", lead.fullName, oldStatus, newStatus);
      this.saveState();
      return true;
    }
    return false;
  }

  updateUnitStatus(unitId, newStatus) {
    const unit = this.state.units.find(u => u.id === unitId);
    if (unit) {
      const oldStatus = unit.status;
      unit.status = newStatus;
      this.addAuditLog("Sales Manager", "UNIT_STATUS_CHANGED", `${unit.unitNumber} (${unit.projectId})`, oldStatus, newStatus);
      this.saveState();
      return true;
    }
    return false;
  }

  assignDriverToVisit(visitId, driverDetails) {
    const visit = this.state.siteVisits.find(v => v.id === visitId);
    if (visit) {
      visit.driverDetails = driverDetails;
      visit.status = "DRIVER_ASSIGNED";
      this.addAuditLog("Logistics Dispatcher", "DRIVER_ASSIGNED", visit.customerName, "Pending", driverDetails);
      this.saveState();
      return true;
    }
    return false;
  }

  addAuditLog(adminUser, action, entity, oldValue, newValue) {
    if (!this.state.auditLogs) this.state.auditLogs = [];
    const now = new Date();
    const formatted = now.toLocaleDateString('en-GB') + ' ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    this.state.auditLogs.unshift({
      id: "aud_" + Date.now(),
      adminUser: adminUser,
      action: action,
      entity: entity,
      oldValue: typeof oldValue === 'object' ? JSON.stringify(oldValue) : String(oldValue),
      newValue: typeof newValue === 'object' ? JSON.stringify(newValue) : String(newValue),
      timestamp: formatted
    });
  }

  dispatchNotification(lead) {
    console.log(`[NOTIFICATION SERVICE] 📲 Triggering WhatsApp to ${lead.phone}: Welcome to SSB Group.`);
    if (window.showToast) {
      window.showToast(`E-Brochure & Project details dispatched to ${lead.phone} via WhatsApp!`, "success");
    }
  }

  resetDatabase() {
    this.state = JSON.parse(JSON.stringify(SEED_DATA));
    this.saveState();
    return true;
  }
}

// Global Singleton Instance
window.store = new DataStore();
