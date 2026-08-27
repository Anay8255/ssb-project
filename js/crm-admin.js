/**
 * SSB INFRA — ENTERPRISE ADMIN CMS, KANBAN CRM & LOGISTICS CONTROLLER
 * Full operational management for Leads, Live Inventory, Site Visits, Landing Pages & Audit Logs
 */

class AdminPortal {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.activeTab = 'crm'; // 'crm' | 'inventory' | 'visits' | 'landing' | 'audit'
  }

  render() {
    if (!this.container) return;

    const leads = window.store.getLeads();
    const hotLeads = leads.filter(l => l.priority === 'HOT').length;
    const visits = window.store.getSiteVisits();
    const units = window.store.state.units;
    const availableUnits = units.filter(u => u.status === 'AVAILABLE').length;

    this.container.innerHTML = `
      <div class="admin-layout">
        <!-- Sidebar -->
        <aside class="admin-sidebar">
          <div class="brand-logo" style="display: flex; align-items: center; gap: 0.75rem;">
            <img src="ssb-logo-official.jpg" alt="SSB Infra" style="height: 38px; width: auto; border-radius: 6px; background: #FFF; padding: 3px; object-fit: contain;">
            <div class="brand-text">
              <span class="brand-title" style="display: block; font-weight: 700; color: #FFF; font-size: 1rem; letter-spacing: 0.05em;">SSB INFRA</span>
              <span class="brand-sub" style="display: block; font-size: 0.725rem; color: var(--gold); font-weight: 600; letter-spacing: 0.08em;">OPERATIONS CMS</span>
            </div>
          </div>

          <nav class="admin-nav">
            <div class="admin-nav-item ${this.activeTab === 'crm' ? 'active' : ''}" onclick="window.adminInstance.switchTab('crm')">
              📊 Lead CRM & Pipeline
            </div>
            <div class="admin-nav-item ${this.activeTab === 'inventory' ? 'active' : ''}" onclick="window.adminInstance.switchTab('inventory')">
              🏢 Live Unit Inventory
            </div>
            <div class="admin-nav-item ${this.activeTab === 'visits' ? 'active' : ''}" onclick="window.adminInstance.switchTab('visits')">
              🚗 Site Visit Logistics
            </div>
            <div class="admin-nav-item ${this.activeTab === 'landing' ? 'active' : ''}" onclick="window.adminInstance.switchTab('landing')">
              🚀 Landing Page Builder
            </div>
            <div class="admin-nav-item ${this.activeTab === 'audit' ? 'active' : ''}" onclick="window.adminInstance.switchTab('audit')">
              🛡️ Security & Audit Logs
            </div>
          </nav>

          <div style="padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.8rem; color: rgba(255,255,255,0.5);">
            Logged in as: <strong style="color: var(--color-gold);">Super Admin</strong><br>
            Role: Full Platform Access
          </div>
        </aside>

        <!-- Main Content Panel -->
        <main class="admin-content">
          <!-- Top KPI Stats Row -->
          <div class="admin-stats-row">
            <div class="admin-stat-card">
              <div>
                <span style="font-size: 0.8rem; color: var(--color-text-muted); text-transform: uppercase;">Total Active Leads</span>
                <div class="val">${leads.length}</div>
              </div>
              <span style="font-size: 2rem;">👥</span>
            </div>

            <div class="admin-stat-card">
              <div>
                <span style="font-size: 0.8rem; color: var(--color-text-muted); text-transform: uppercase;">Hot Priority Leads</span>
                <div class="val" style="color: var(--color-danger);">${hotLeads}</div>
              </div>
              <span style="font-size: 2rem;">🔥</span>
            </div>

            <div class="admin-stat-card">
              <div>
                <span style="font-size: 0.8rem; color: var(--color-text-muted); text-transform: uppercase;">Site Visits Scheduled</span>
                <div class="val" style="color: var(--color-info);">${visits.length}</div>
              </div>
              <span style="font-size: 2rem;">🚗</span>
            </div>

            <div class="admin-stat-card">
              <div>
                <span style="font-size: 0.8rem; color: var(--color-text-muted); text-transform: uppercase;">Units Available</span>
                <div class="val" style="color: var(--color-success);">${availableUnits} / ${units.length}</div>
              </div>
              <span style="font-size: 2rem;">📐</span>
            </div>
          </div>

          <!-- Dynamic Active Subview -->
          <div id="admin-subview">
            <!-- Injected below -->
          </div>
        </main>
      </div>
    `;

    this.renderSubview();
  }

  switchTab(tab) {
    this.activeTab = tab;
    this.render();
  }

  renderSubview() {
    const subview = document.getElementById('admin-subview');
    if (!subview) return;

    if (this.activeTab === 'crm') {
      this.renderCrmKanban(subview);
    } else if (this.activeTab === 'inventory') {
      this.renderInventoryManager(subview);
    } else if (this.activeTab === 'visits') {
      this.renderVisitsManager(subview);
    } else if (this.activeTab === 'landing') {
      this.renderLandingPageBuilder(subview);
    } else if (this.activeTab === 'audit') {
      this.renderAuditLogs(subview);
    }
  }

  // 1. KANBAN CRM PIPELINE
  renderCrmKanban(subview) {
    const columns = [
      { id: "NEW", label: "New Leads", color: "#3B82F6" },
      { id: "CONTACTED", label: "Contacted", color: "#8B5CF6" },
      { id: "QUALIFIED", label: "Qualified", color: "#06B6D4" },
      { id: "SITE_VISIT_SCHEDULED", label: "Visit Scheduled", color: "#F59E0B" },
      { id: "NEGOTIATION", label: "Negotiation", color: "#EC4899" },
      { id: "CONVERTED", label: "Booked / Closed", color: "#10B981" }
    ];

    const leads = window.store.getLeads();

    const colsHtml = columns.map(col => {
      const colLeads = leads.filter(l => l.status === col.id);
      const cardsHtml = colLeads.map(lead => `
        <div class="lead-card" id="card-${lead.id}">
          <div class="lead-card-top">
            <span class="badge ${lead.priority === 'HOT' ? 'badge-danger' : 'badge-gold'}">${lead.priority} LEAD</span>
            <span style="font-size: 0.75rem; color: var(--color-text-muted);">${new Date(lead.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
          </div>
          <div class="lead-name">${lead.fullName}</div>
          <div class="lead-phone">📞 ${lead.phone}</div>
          <div class="lead-project-tag">🏢 ${lead.projectName}</div>
          <p style="font-size: 0.8rem; color: var(--color-text-muted); margin: 0.4rem 0;">${lead.notes}</p>
          
          <div style="display: flex; gap: 0.4rem; margin-top: 0.75rem;">
            <select class="form-control" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;" onchange="window.adminInstance.changeLeadStatus('${lead.id}', this.value)">
              <option value="NEW" ${lead.status === 'NEW' ? 'selected' : ''}>Move: New</option>
              <option value="CONTACTED" ${lead.status === 'CONTACTED' ? 'selected' : ''}>Move: Contacted</option>
              <option value="QUALIFIED" ${lead.status === 'QUALIFIED' ? 'selected' : ''}>Move: Qualified</option>
              <option value="SITE_VISIT_SCHEDULED" ${lead.status === 'SITE_VISIT_SCHEDULED' ? 'selected' : ''}>Move: Visit</option>
              <option value="NEGOTIATION" ${lead.status === 'NEGOTIATION' ? 'selected' : ''}>Move: Negotiation</option>
              <option value="CONVERTED" ${lead.status === 'CONVERTED' ? 'selected' : ''}>Move: Converted</option>
            </select>
          </div>
        </div>
      `).join('');

      return `
        <div class="kanban-col">
          <div class="kanban-col-header" style="border-top: 3px solid ${col.color}; padding-top: 0.5rem;">
            <span>${col.label}</span>
            <span class="badge badge-navy">${colLeads.length}</span>
          </div>
          <div class="kanban-cards-wrap">
            ${cardsHtml.length ? cardsHtml : '<div style="font-size: 0.8rem; color: #94A3B8; text-align: center; padding: 1.5rem 0;">No leads</div>'}
          </div>
        </div>
      `;
    }).join('');

    subview.innerHTML = `
      <div class="admin-header">
        <div>
          <h3 style="font-size: 1.6rem; color: var(--color-primary);">Multi-Stage Real Estate Lead CRM</h3>
          <p style="font-size: 0.875rem; color: var(--color-text-muted);">Real-time lead qualification pipeline with automated lead scoring SLAs</p>
        </div>
        <button class="btn btn-navy btn-sm" onclick="window.adminInstance.exportLeadsCsv()">
          📥 Export Leads to CSV
        </button>
      </div>

      <div class="kanban-board">
        ${colsHtml}
      </div>
    `;
  }

  changeLeadStatus(leadId, newStatus) {
    window.store.updateLeadStatus(leadId, newStatus);
    this.render();
    if (window.showToast) window.showToast(`Lead status updated to: ${newStatus}`, "success");
  }

  exportLeadsCsv() {
    const leads = window.store.getLeads();
    let csv = "ID,Full Name,Phone,Email,Project,Status,Priority,Source,Created At\n";
    leads.forEach(l => {
      csv += `"${l.id}","${l.fullName}","${l.phone}","${l.email}","${l.projectName}","${l.status}","${l.priority}","${l.source}","${l.createdAt}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SSB_Infra_Leads_${Date.now()}.csv`;
    a.click();
  }

  // 2. LIVE UNIT INVENTORY MANAGER
  renderInventoryManager(subview) {
    const units = window.store.state.units;

    const rowsHtml = units.map(u => `
      <tr>
        <td><strong>${u.unitNumber}</strong></td>
        <td>${u.projectId}</td>
        <td>${u.unitType}</td>
        <td>${u.areaSqFt} Sq.Ft.</td>
        <td>${u.facing}</td>
        <td><strong>₹${(u.totalPrice / 100000).toFixed(2)} L</strong></td>
        <td>
          <select class="form-control" style="font-size: 0.8rem; padding: 0.35rem;" onchange="window.adminInstance.changeUnitStatus('${u.id}', this.value)">
            <option value="AVAILABLE" ${u.status === 'AVAILABLE' ? 'selected' : ''}>🟢 AVAILABLE</option>
            <option value="HOLD" ${u.status === 'HOLD' ? 'selected' : ''}>🟡 ON HOLD</option>
            <option value="BOOKED" ${u.status === 'BOOKED' ? 'selected' : ''}>🔵 BOOKED</option>
            <option value="SOLD" ${u.status === 'SOLD' ? 'selected' : ''}>⚫ SOLD OUT</option>
            <option value="BLOCKED" ${u.status === 'BLOCKED' ? 'selected' : ''}>🔴 BLOCKED</option>
          </select>
        </td>
      </tr>
    `).join('');

    subview.innerHTML = `
      <div class="admin-header">
        <div>
          <h3 style="font-size: 1.6rem; color: var(--color-primary);">Live Property Inventory & Availability Engine</h3>
          <p style="font-size: 0.875rem; color: var(--color-text-muted);">Real-time status changes sync directly to the public Interactive Master Plan</p>
        </div>
      </div>

      <div class="admin-table-card">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Unit / Plot No.</th>
              <th>Project ID</th>
              <th>Configuration</th>
              <th>Area</th>
              <th>Facing</th>
              <th>Total Cost</th>
              <th>Live Status</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  }

  changeUnitStatus(unitId, newStatus) {
    window.store.updateUnitStatus(unitId, newStatus);
    this.render();
    if (window.showToast) window.showToast(`Unit status updated to: ${newStatus}! Public Master Plan updated.`, "success");
  }

  // 3. SITE VISIT LOGISTICS
  renderVisitsManager(subview) {
    const visits = window.store.getSiteVisits();

    const rowsHtml = visits.map(v => `
      <tr>
        <td><strong>${v.customerName}</strong><br><span style="color: var(--color-text-muted); font-size: 0.75rem;">${v.phone}</span></td>
        <td>${v.projectName}</td>
        <td>${v.scheduledDate}<br><span style="font-size: 0.75rem; color: var(--color-gold-dark);">${v.timeSlot}</span></td>
        <td>${v.pickupAddress}<br><span class="badge ${v.cabRequired ? 'badge-warning' : 'badge-navy'}">${v.cabRequired ? '🚖 Cab Requested' : 'Self Travel'}</span></td>
        <td>
          <input type="text" value="${v.driverDetails}" class="form-control" style="font-size: 0.8rem; padding: 0.35rem;" onblur="window.adminInstance.updateDriver('${v.id}', this.value)">
        </td>
        <td>
          <span class="badge ${v.status === 'CONFIRMED' ? 'badge-success' : 'badge-warning'}">${v.status}</span>
        </td>
      </tr>
    `).join('');

    subview.innerHTML = `
      <div class="admin-header">
        <div>
          <h3 style="font-size: 1.6rem; color: var(--color-primary);">Site Visit Logistics & Chauffeur Dispatch</h3>
          <p style="font-size: 0.875rem; color: var(--color-text-muted);">Manage buyer pickups, driver allocation, and scheduled inspection appointments</p>
        </div>
      </div>

      <div class="admin-table-card">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Project</th>
              <th>Date & Slot</th>
              <th>Pickup Details</th>
              <th>Assigned Driver / Cab Info</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  }

  updateDriver(visitId, driverInfo) {
    window.store.assignDriverToVisit(visitId, driverInfo);
    if (window.showToast) window.showToast("Driver assigned & dispatch alert sent to customer via WhatsApp!", "success");
  }

  // 4. MARKETING LANDING PAGE BUILDER
  renderLandingPageBuilder(subview) {
    const pages = window.store.getLandingPages();

    const listHtml = pages.map(p => `
      <div style="background: #FFF; padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); margin-bottom: 1rem; display: flex; align-items: center; justify-content: space-between;">
        <div>
          <span class="badge badge-success">Published Dynamic Route</span>
          <h4 style="font-size: 1.15rem; margin: 0.25rem 0;">/${p.slug}</h4>
          <p style="font-size: 0.85rem; color: var(--color-text-muted);">${p.heroHeadline}</p>
        </div>
        <a href="#/landing/${p.slug}" class="btn btn-outline btn-sm">Preview Landing Page</a>
      </div>
    `).join('');

    subview.innerHTML = `
      <div class="admin-header">
        <div>
          <h3 style="font-size: 1.6rem; color: var(--color-primary);">CMS Marketing Landing Page Builder</h3>
          <p style="font-size: 0.875rem; color: var(--color-text-muted);">Generate targeted Google/Meta Ads landing pages instantly without coding</p>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
        <!-- Form -->
        <div style="background: #FFF; padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
          <h4 style="margin-bottom: 1.25rem;">Create New Dynamic Campaign Page</h4>
          
          <div class="form-group">
            <label>Target URL Slug (e.g. 3bhk-flats-varanasi-ring-road)</label>
            <input type="text" id="lp-slug" class="form-control" placeholder="e.g. luxury-villas-airport-corridor">
          </div>

          <div class="form-group">
            <label>Page Title (SEO Title)</label>
            <input type="text" id="lp-title" class="form-control" placeholder="e.g. Luxury Villas Near Airport | SSB Infra">
          </div>

          <div class="form-group">
            <label>Hero Headline Banner</label>
            <input type="text" id="lp-headline" class="form-control" placeholder="e.g. Book Your Luxury Villa Today with 0% Stamp Duty">
          </div>

          <div class="form-group">
            <label>Associated Project</label>
            <select id="lp-project" class="form-control">
              <option value="prj_sai_gaon">Sai Gaon (Shivpur)</option>
              <option value="prj_sai_city_housing">Shree Sai City Housing</option>
              <option value="prj_pratham">Pratham Plotted Township</option>
            </select>
          </div>

          <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="window.adminInstance.publishNewLandingPage()">
            🚀 Publish Landing Page Instantly
          </button>
        </div>

        <!-- Active Pages List -->
        <div>
          <h4 style="margin-bottom: 1.25rem;">Live Active Landing Pages</h4>
          ${listHtml}
        </div>
      </div>
    `;
  }

  publishNewLandingPage() {
    const slug = document.getElementById('lp-slug').value.trim();
    const title = document.getElementById('lp-title').value.trim();
    const headline = document.getElementById('lp-headline').value.trim();
    const project = document.getElementById('lp-project').value;

    if (!slug || !title || !headline) {
      alert("Please fill all landing page fields.");
      return;
    }

    window.store.createLandingPage({
      slug: slug,
      title: title,
      heroHeadline: headline,
      projectId: project
    });

    if (window.showToast) window.showToast(`Landing Page /landing/${slug} created and published!`, "success");
    this.render();
  }

  // 5. IMMUTABLE AUDIT LOGS
  renderAuditLogs(subview) {
    const logs = window.store.getAuditLogs();

    const rowsHtml = logs.map(l => `
      <tr>
        <td style="font-family: monospace; font-size: 0.8rem;">${l.timestamp}</td>
        <td><strong>${l.adminUser}</strong></td>
        <td><span class="badge badge-navy">${l.action}</span></td>
        <td>${l.entity}</td>
        <td style="color: var(--color-text-muted); font-family: monospace; font-size: 0.75rem;">${l.oldValue}</td>
        <td style="color: var(--color-success); font-family: monospace; font-size: 0.75rem; font-weight: 700;">${l.newValue}</td>
      </tr>
    `).join('');

    subview.innerHTML = `
      <div class="admin-header">
        <div>
          <h3 style="font-size: 1.6rem; color: var(--color-primary);">Security & Immutable Audit Trail</h3>
          <p style="font-size: 0.875rem; color: var(--color-text-muted);">Cryptographically timestamped log of all pricing, inventory, and lead actions</p>
        </div>
      </div>

      <div class="admin-table-card">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Admin / Actor</th>
              <th>Action Code</th>
              <th>Entity Modified</th>
              <th>Old Value (Diff)</th>
              <th>New Value (Diff)</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  }
}

window.AdminPortal = AdminPortal;
