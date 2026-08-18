/**
 * SSB INFRA — FLOOR PLANS & SPECIFICATIONS MODULE
 * Dynamic 1BHK/2BHK/3BHK configuration switcher with zoom preview and area calculations
 */

class FloorPlanModule {
  constructor(containerId, project) {
    this.container = document.getElementById(containerId);
    this.project = project;
    this.activeConfigIndex = 0;
  }

  render() {
    if (!this.container || !this.project.configurations || this.project.configurations.length === 0) return;

    const activeCfg = this.project.configurations[this.activeConfigIndex] || this.project.configurations[0];

    const tabsHtml = this.project.configurations.map((cfg, idx) => `
      <button class="floor-tab ${idx === this.activeConfigIndex ? 'active' : ''}" onclick="window.floorPlanInstance.selectTab(${idx})">
        ${cfg.bhkType} (${cfg.superBuiltupArea} Sq.Ft.)
      </button>
    `).join('');

    this.container.innerHTML = `
      <div class="floor-plan-module">
        <div style="margin-bottom: 2rem;">
          <h3 style="font-size: 1.6rem; color: var(--color-primary);">Floor Plans & Architectural Layouts</h3>
          <p style="font-size: 0.9rem; color: var(--color-text-muted);">Explore precision Vastu-compliant layout plans with carpet area dimensions</p>
        </div>

        <div class="floor-nav-tabs">
          ${tabsHtml}
        </div>

        <div class="floor-detail-grid">
          <div class="floor-image-frame">
            <img src="${activeCfg.floorPlanUrl}" alt="${activeCfg.title}" style="cursor: zoom-in;" onclick="window.openImageLightbox('${activeCfg.floorPlanUrl}')">
            <span style="position: absolute; bottom: 1rem; left: 1.5rem; font-size: 0.8rem; color: var(--color-text-muted);">🔍 Click image to zoom fullscreen</span>
          </div>

          <div class="floor-info-box">
            <div>
              <span class="badge badge-gold" style="margin-bottom: 0.5rem;">${activeCfg.bhkType} Configuration</span>
              <h4 style="font-size: 1.45rem; color: var(--color-primary);">${activeCfg.title}</h4>
              <p style="font-size: 0.95rem; color: var(--color-text-muted); margin-top: 0.25rem;">Estimated Price: <strong style="color: var(--color-gold-dark);">${activeCfg.priceEstimate || 'Price On Request'}</strong></p>
            </div>

            <div class="area-matrix">
              <div class="matrix-cell">
                <span>Super Built-up Area</span>
                <strong>${activeCfg.superBuiltupArea} Sq. Ft.</strong>
              </div>
              <div class="matrix-cell">
                <span>Carpet Area (RERA)</span>
                <strong>${activeCfg.carpetArea} Sq. Ft.</strong>
              </div>
              <div class="matrix-cell">
                <span>Bedrooms</span>
                <strong>${activeCfg.bedrooms} Master Beds</strong>
              </div>
              <div class="matrix-cell">
                <span>Bathrooms & Balconies</span>
                <strong>${activeCfg.bathrooms} Baths | ${activeCfg.balconies} Balconies</strong>
              </div>
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <button class="btn btn-primary" style="flex: 1;" onclick="window.openEnquiryModal('${this.project.id}', '${activeCfg.title}')">
                📥 Download Floor Plan PDF
              </button>
              <button class="btn btn-navy" style="flex: 1;" onclick="window.openSiteVisitModal('${this.project.id}')">
                🚗 Inspect Sample Flat
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  selectTab(idx) {
    this.activeConfigIndex = idx;
    this.render();
  }
}

window.FloorPlanModule = FloorPlanModule;
