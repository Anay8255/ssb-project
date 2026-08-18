/**
 * SSB INFRA — INTERACTIVE MASTER PLAN & UNIT EXPLORER ENGINE
 * Renders vector layouts with clickable interactive units & live inventory status
 */

class MasterPlanViewer {
  constructor(containerId, projectId) {
    this.container = document.getElementById(containerId);
    this.projectId = projectId;
    this.units = window.store.getUnitsByProject(projectId);
  }

  render() {
    if (!this.container) return;

    const isPlotted = this.projectId === 'prj_pratham';
    
    let svgContent = '';
    if (isPlotted) {
      svgContent = this.generatePlottedSvg();
    } else {
      svgContent = this.generateApartmentTowerSvg();
    }

    this.container.innerHTML = `
      <div class="master-plan-container">
        <div class="plan-toolbar">
          <div>
            <h3 style="font-size: 1.35rem; margin-bottom: 0.25rem;">Interactive Master Layout Plan</h3>
            <p style="font-size: 0.85rem; color: var(--color-text-muted);">Click on any tower or plot to view real-time availability, carpet area & pricing</p>
          </div>
          <div class="plan-legend">
            <div class="legend-item"><span class="legend-dot available"></span> Available</div>
            <div class="legend-item"><span class="legend-dot hold"></span> On Hold</div>
            <div class="legend-item"><span class="legend-dot sold"></span> Booked / Sold</div>
          </div>
        </div>

        <div class="svg-master-viewport">
          ${svgContent}
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  generateApartmentTowerSvg() {
    // Generate an interactive architectural vector floor / tower map
    return `
      <svg viewBox="0 0 1000 550" xmlns="http://www.w3.org/2000/svg" style="background: #0E1A29; border-radius: 12px; box-shadow: inset 0 0 40px rgba(0,0,0,0.5);">
        <defs>
          <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#1E293B"/>
            <stop offset="100%" stop-color="#334155"/>
          </linearGradient>
          <pattern id="parkGrass" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="#064E3B"/>
            <circle cx="10" cy="10" r="1.5" fill="#047857"/>
          </pattern>
        </defs>

        <!-- Entry Road & Boundary -->
        <rect x="0" y="480" width="1000" height="70" fill="url(#roadGrad)" />
        <line x1="0" y1="515" x2="1000" y2="515" stroke="#F8FAFC" stroke-dasharray="15,15" stroke-width="2"/>
        <text x="500" y="525" fill="#94A3B8" font-size="14" font-weight="700" text-anchor="middle" letter-spacing="2">60 FT WIDE SECTOR RING ROAD (MAIN ACCESS)</text>

        <!-- Central Park & Pool -->
        <rect x="340" y="80" width="320" height="340" rx="16" fill="url(#parkGrass)" stroke="#059669" stroke-width="2"/>
        <circle cx="500" cy="200" r="60" fill="#0284C7" stroke="#38BDF8" stroke-width="4"/>
        <text x="500" y="205" fill="#FFF" font-size="12" font-weight="700" text-anchor="middle">INFINITY POOL</text>
        <text x="500" y="320" fill="#6EE7B7" font-size="14" font-weight="700" text-anchor="middle">CENTRAL BOTANICAL GARDENS</text>

        <!-- Clubhouse -->
        <rect x="420" y="370" width="160" height="50" rx="8" fill="#B45309" stroke="#F59E0B" stroke-width="2"/>
        <text x="500" y="400" fill="#FFF" font-size="12" font-weight="700" text-anchor="middle">LUXURY CLUBHOUSE</text>

        <!-- Tower A Units (Left Wing) -->
        <g id="tower-a-group">
          <rect x="50" y="50" width="240" height="390" rx="12" fill="#1B263B" stroke="#C5A880" stroke-width="2"/>
          <text x="170" y="85" fill="#C5A880" font-size="16" font-weight="800" text-anchor="middle">TOWER A (ROYAL WING)</text>

          <!-- Flat 301 -->
          <g class="unit-hotspot" data-unit-id="unt_101" transform="translate(70, 110)">
            <rect width="95" height="130" rx="8" fill="#10B981" fill-opacity="0.85" stroke="#FFF" stroke-width="1.5"/>
            <text x="47" y="50" fill="#FFF" font-size="12" font-weight="700" text-anchor="middle">A-301</text>
            <text x="47" y="70" fill="#E2E8F0" font-size="10" text-anchor="middle">2 BHK (1150sft)</text>
            <text x="47" y="95" fill="#FFF" font-size="9" font-weight="800" text-anchor="middle">AVAILABLE</text>
          </g>

          <!-- Flat 302 -->
          <g class="unit-hotspot" data-unit-id="unt_102" transform="translate(175, 110)">
            <rect width="95" height="130" rx="8" fill="#F59E0B" fill-opacity="0.85" stroke="#FFF" stroke-width="1.5"/>
            <text x="47" y="50" fill="#FFF" font-size="12" font-weight="700" text-anchor="middle">A-302</text>
            <text x="47" y="70" fill="#E2E8F0" font-size="10" text-anchor="middle">2 BHK (1150sft)</text>
            <text x="47" y="95" fill="#FFF" font-size="9" font-weight="800" text-anchor="middle">ON HOLD</text>
          </g>

          <!-- Flat 401 -->
          <g class="unit-hotspot" data-unit-id="unt_103" transform="translate(70, 260)">
            <rect width="95" height="145" rx="8" fill="#64748B" fill-opacity="0.85" stroke="#FFF" stroke-width="1.5"/>
            <text x="47" y="55" fill="#FFF" font-size="12" font-weight="700" text-anchor="middle">A-401</text>
            <text x="47" y="75" fill="#E2E8F0" font-size="10" text-anchor="middle">3 BHK (1620sft)</text>
            <text x="47" y="105" fill="#FFF" font-size="9" font-weight="800" text-anchor="middle">BOOKED</text>
          </g>

          <!-- Flat 402 -->
          <g class="unit-hotspot" data-unit-id="unt_104" transform="translate(175, 260)">
            <rect width="95" height="145" rx="8" fill="#10B981" fill-opacity="0.85" stroke="#FFF" stroke-width="1.5"/>
            <text x="47" y="55" fill="#FFF" font-size="12" font-weight="700" text-anchor="middle">A-402</text>
            <text x="47" y="75" fill="#E2E8F0" font-size="10" text-anchor="middle">3 BHK (1620sft)</text>
            <text x="47" y="105" fill="#FFF" font-size="9" font-weight="800" text-anchor="middle">AVAILABLE</text>
          </g>
        </g>

        <!-- Tower B Units (Right Wing) -->
        <g id="tower-b-group">
          <rect x="710" y="50" width="240" height="390" rx="12" fill="#1B263B" stroke="#C5A880" stroke-width="2"/>
          <text x="830" y="85" fill="#C5A880" font-size="16" font-weight="800" text-anchor="middle">TOWER B (SIGNATURE)</text>

          <!-- Flat 101 -->
          <g class="unit-hotspot" data-unit-id="unt_105" transform="translate(730, 110)">
            <rect width="95" height="130" rx="8" fill="#475569" fill-opacity="0.85" stroke="#FFF" stroke-width="1.5"/>
            <text x="47" y="50" fill="#FFF" font-size="12" font-weight="700" text-anchor="middle">B-101</text>
            <text x="47" y="70" fill="#E2E8F0" font-size="10" text-anchor="middle">2 BHK (1150sft)</text>
            <text x="47" y="95" fill="#FFF" font-size="9" font-weight="800" text-anchor="middle">SOLD OUT</text>
          </g>

          <!-- Flat 102 -->
          <g class="unit-hotspot" data-unit-id="unt_106" transform="translate(835, 110)">
            <rect width="95" height="130" rx="8" fill="#10B981" fill-opacity="0.85" stroke="#FFF" stroke-width="1.5"/>
            <text x="47" y="50" fill="#FFF" font-size="12" font-weight="700" text-anchor="middle">B-102</text>
            <text x="47" y="70" fill="#E2E8F0" font-size="10" text-anchor="middle">3 BHK (1620sft)</text>
            <text x="47" y="95" fill="#FFF" font-size="9" font-weight="800" text-anchor="middle">AVAILABLE</text>
          </g>
        </g>
      </svg>
    `;
  }

  generatePlottedSvg() {
    return `
      <svg viewBox="0 0 1000 550" xmlns="http://www.w3.org/2000/svg" style="background: #0E1A29; border-radius: 12px; box-shadow: inset 0 0 40px rgba(0,0,0,0.5);">
        <!-- Roads -->
        <rect x="0" y="240" width="1000" height="70" fill="#334155"/>
        <line x1="0" y1="275" x2="1000" y2="275" stroke="#F8FAFC" stroke-dasharray="15,15" stroke-width="2"/>
        <text x="500" y="282" fill="#94A3B8" font-size="12" font-weight="700" text-anchor="middle">40 FT MAIN BOULEVARD ROAD</text>

        <!-- North Sector Plots -->
        <g class="unit-hotspot" data-unit-id="unt_201" transform="translate(100, 60)">
          <rect width="160" height="150" rx="6" fill="#10B981" fill-opacity="0.85" stroke="#FFF" stroke-width="2"/>
          <text x="80" y="60" fill="#FFF" font-size="16" font-weight="800" text-anchor="middle">PLOT #12</text>
          <text x="80" y="85" fill="#E2E8F0" font-size="12" text-anchor="middle">1000 Sq.Ft. | East Facing</text>
          <text x="80" y="115" fill="#FFF" font-size="11" font-weight="800" text-anchor="middle">AVAILABLE (₹32L)</text>
        </g>

        <g class="unit-hotspot" data-unit-id="unt_202" transform="translate(300, 60)">
          <rect width="220" height="150" rx="6" fill="#F59E0B" fill-opacity="0.85" stroke="#FFF" stroke-width="2"/>
          <text x="110" y="60" fill="#FFF" font-size="16" font-weight="800" text-anchor="middle">PLOT #14 (CORNER)</text>
          <text x="110" y="85" fill="#E2E8F0" font-size="12" text-anchor="middle">1800 Sq.Ft. | NE Facing</text>
          <text x="110" y="115" fill="#FFF" font-size="11" font-weight="800" text-anchor="middle">ON HOLD (₹57.6L)</text>
        </g>

        <!-- South Sector Plots -->
        <g class="unit-hotspot" data-unit-id="unt_203" transform="translate(100, 340)">
          <rect width="180" height="150" rx="6" fill="#10B981" fill-opacity="0.85" stroke="#FFF" stroke-width="2"/>
          <text x="90" y="60" fill="#FFF" font-size="16" font-weight="800" text-anchor="middle">PLOT #18</text>
          <text x="90" y="85" fill="#E2E8F0" font-size="12" text-anchor="middle">1200 Sq.Ft. | Park Facing</text>
          <text x="90" y="115" fill="#FFF" font-size="11" font-weight="800" text-anchor="middle">AVAILABLE (₹38.4L)</text>
        </g>

        <g class="unit-hotspot" data-unit-id="unt_204" transform="translate(320, 340)">
          <rect width="160" height="150" rx="6" fill="#475569" fill-opacity="0.85" stroke="#FFF" stroke-width="2"/>
          <text x="80" y="60" fill="#FFF" font-size="16" font-weight="800" text-anchor="middle">PLOT #22</text>
          <text x="80" y="85" fill="#E2E8F0" font-size="12" text-anchor="middle">1000 Sq.Ft. | West</text>
          <text x="80" y="115" fill="#FFF" font-size="11" font-weight="800" text-anchor="middle">SOLD OUT</text>
        </g>
      </svg>
    `;
  }

  attachEventListeners() {
    const hotspots = this.container.querySelectorAll('.unit-hotspot');
    hotspots.forEach(spot => {
      spot.addEventListener('click', (e) => {
        const unitId = spot.getAttribute('data-unit-id');
        this.openUnitModal(unitId);
      });
    });
  }

  openUnitModal(unitId) {
    const unit = window.store.state.units.find(u => u.id === unitId);
    if (!unit) return;

    const project = window.store.getProjectBySlug(this.projectId) || window.store.state.projects.find(p => p.id === unit.projectId);

    let statusBadge = `<span class="badge badge-success">Available for Booking</span>`;
    if (unit.status === 'HOLD') statusBadge = `<span class="badge badge-warning">On Token Hold (48 Hrs)</span>`;
    if (unit.status === 'SOLD' || unit.status === 'BOOKED') statusBadge = `<span class="badge badge-danger">Sold / Booked</span>`;

    const formattedPrice = "₹" + (unit.totalPrice / 100000).toFixed(2) + " Lakhs";

    const modalHtml = `
      <div class="modal-overlay" id="unit-preview-modal" style="display: flex;">
        <div class="modal-card" style="max-width: 580px; width: 90%; background: #FFF; border-radius: var(--radius-xl); padding: 2rem; border: 1px solid var(--color-gold-border); box-shadow: var(--shadow-2xl); position: relative;">
          <button class="modal-close-btn" onclick="document.getElementById('unit-preview-modal').remove()" style="position: absolute; top: 1.25rem; right: 1.25rem; background: transparent; border: none; font-size: 1.5rem; cursor: pointer; color: var(--color-text-muted);">&times;</button>
          
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; padding-right: 1.5rem;">
            <div>
              <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-gold-dark); font-weight: 700; letter-spacing: 0.05em;">${project ? project.title : 'SSB Infra'}</span>
              <h3 style="font-size: 1.6rem; color: var(--color-primary);">${unit.unitNumber}</h3>
            </div>
            ${statusBadge}
          </div>

          <div style="background: var(--color-bg); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); margin-bottom: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div>
              <span style="font-size: 0.75rem; color: var(--color-text-muted); text-transform: uppercase;">Unit Type</span>
              <strong style="display: block; font-size: 1rem; color: var(--color-text-title);">${unit.unitType}</strong>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--color-text-muted); text-transform: uppercase;">Super Area</span>
              <strong style="display: block; font-size: 1rem; color: var(--color-text-title);">${unit.areaSqFt} Sq. Ft.</strong>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--color-text-muted); text-transform: uppercase;">Facing / Vastu</span>
              <strong style="display: block; font-size: 1rem; color: var(--color-text-title);">${unit.facing}</strong>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--color-text-muted); text-transform: uppercase;">Total Estimate</span>
              <strong style="display: block; font-size: 1.2rem; color: var(--color-gold-dark);">${formattedPrice}</strong>
            </div>
          </div>

          <div style="display: flex; gap: 1rem;">
            <button class="btn btn-primary" style="flex: 1;" onclick="window.openEnquiryModal('${project ? project.id : ''}', '${unit.unitNumber}')">
              ⚡ Enquire About This Unit
            </button>
            <button class="btn btn-navy" style="flex: 1;" onclick="window.openSiteVisitModal('${project ? project.id : ''}')">
              🚗 Book Free Site Visit
            </button>
          </div>
        </div>
      </div>
    `;

    // Remove any existing preview modals
    const existing = document.getElementById('unit-preview-modal');
    if (existing) existing.remove();

    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }
}

window.MasterPlanViewer = MasterPlanViewer;
