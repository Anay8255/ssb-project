import React, { createContext, useContext, useState, useEffect } from 'react';
import { SEED_DATA } from '../data/seedData';

const STORAGE_KEY = 'ssb_group_official_v20';

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.company && parsed.projects && parsed.journey && parsed.leadership) {
          // Always ensure latest project assets, specs, gallery and seed definitions are merged in
          const mergedProjects = SEED_DATA.projects.map(seedP => {
            const savedP = parsed.projects.find(p => p.id === seedP.id || p.slug === seedP.slug);
            return savedP ? { 
              ...savedP, 
              ...seedP,
              title: seedP.title,
              tagline: seedP.tagline,
              description: seedP.description,
              priceDisplay: seedP.priceDisplay,
              startingPrice: seedP.startingPrice,
              locationName: seedP.locationName,
              fullAddress: seedP.fullAddress,
              overallProgressPct: seedP.overallProgressPct,
              milestones: seedP.milestones,
              featuredImage: seedP.featuredImage, 
              heroImages: seedP.heroImages, 
              gallery: seedP.gallery,
              masterPlanUrl: seedP.masterPlanUrl, 
              videoWalkthroughUrl: seedP.videoWalkthroughUrl,
              configurations: seedP.configurations,
              specifications: seedP.specifications,
              amenities: seedP.amenities
            } : seedP;
          });
          return { ...parsed, projects: mergedProjects, leadership: SEED_DATA.leadership };
        }
      }
    } catch (e) {
      console.warn("Storage load error, initializing seed data:", e);
    }
    return JSON.parse(JSON.stringify(SEED_DATA));
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Storage save failed:", e);
    }
  }, [state]);

  const addAuditLog = (adminUser, action, entity, oldValue, newValue) => {
    const now = new Date();
    const formatted = now.toLocaleDateString('en-GB') + ' ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const logItem = {
      id: "aud_" + Date.now() + Math.random().toString(36).substring(2, 6),
      adminUser,
      action,
      entity,
      oldValue: typeof oldValue === 'object' ? JSON.stringify(oldValue) : String(oldValue),
      newValue: typeof newValue === 'object' ? JSON.stringify(newValue) : String(newValue),
      timestamp: formatted
    };
    return logItem;
  };

  const addLead = (leadData) => {
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

    let newVisit = null;
    if (leadData.scheduledDate || leadData.source === "SITE_VISIT_MODAL") {
      newVisit = {
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
    }

    const logEntry = addAuditLog("System Webhook", "LEAD_CAPTURED", `${newLead.fullName} (${newLead.phone})`, "N/A", newLead.source);

    setState(prev => ({
      ...prev,
      leads: [newLead, ...(prev.leads || [])],
      siteVisits: newVisit ? [newVisit, ...(prev.siteVisits || [])] : (prev.siteVisits || []),
      auditLogs: [logEntry, ...(prev.auditLogs || [])]
    }));

    return newLead;
  };

  const updateLeadStatus = (leadId, newStatus) => {
    setState(prev => {
      const lead = prev.leads?.find(l => l.id === leadId);
      if (!lead) return prev;
      const oldStatus = lead.status;
      const logEntry = addAuditLog("Admin", "LEAD_STATUS_CHANGED", lead.fullName, oldStatus, newStatus);
      return {
        ...prev,
        leads: prev.leads.map(l => l.id === leadId ? { ...l, status: newStatus } : l),
        auditLogs: [logEntry, ...(prev.auditLogs || [])]
      };
    });
  };

  const updateUnitStatus = (unitId, newStatus) => {
    setState(prev => {
      const unit = prev.units?.find(u => u.id === unitId);
      if (!unit) return prev;
      const oldStatus = unit.status;
      const logEntry = addAuditLog("Sales Manager", "UNIT_STATUS_CHANGED", `${unit.unitNumber} (${unit.projectId})`, oldStatus, newStatus);
      return {
        ...prev,
        units: prev.units.map(u => u.id === unitId ? { ...u, status: newStatus } : u),
        auditLogs: [logEntry, ...(prev.auditLogs || [])]
      };
    });
  };

  const assignDriverToVisit = (visitId, driverDetails) => {
    setState(prev => {
      const visit = prev.siteVisits?.find(v => v.id === visitId);
      if (!visit) return prev;
      const logEntry = addAuditLog("Logistics Dispatcher", "DRIVER_ASSIGNED", visit.customerName, "Pending", driverDetails);
      return {
        ...prev,
        siteVisits: prev.siteVisits.map(v => v.id === visitId ? { ...v, driverDetails, status: "DRIVER_ASSIGNED" } : v),
        auditLogs: [logEntry, ...(prev.auditLogs || [])]
      };
    });
  };

  const resetDatabase = () => {
    const fresh = JSON.parse(JSON.stringify(SEED_DATA));
    setState(fresh);
  };

  const getProjects = (filterType = 'ALL') => {
    if (!state.projects) return [];
    if (filterType === 'ALL') return state.projects;
    return state.projects.filter(p => p.category === filterType || p.status === filterType);
  };

  const getProjectBySlug = (slug) => {
    if (!state.projects) return null;
    return state.projects.find(p => p.slug === slug);
  };

  const getUnitsByProject = (projectId) => {
    if (!state.units) return [];
    return state.units.filter(u => u.projectId === projectId);
  };

  const value = {
    state,
    company: state.company,
    projects: state.projects || [],
    units: state.units || [],
    leads: state.leads || [],
    siteVisits: state.siteVisits || [],
    journey: state.journey || [],
    leadership: state.leadership || [],
    certifications: state.certifications || [],
    auditLogs: state.auditLogs || [],
    addLead,
    updateLeadStatus,
    updateUnitStatus,
    assignDriverToVisit,
    resetDatabase,
    getProjects,
    getProjectBySlug,
    getUnitsByProject
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
