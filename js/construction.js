/**
 * SSB INFRA — VISUAL CONSTRUCTION MILESTONE TRACKER
 * Renders stage-by-stage percentage progress bars & monthly photo timeline
 */

class ConstructionTracker {
  constructor(containerId, project) {
    this.container = document.getElementById(containerId);
    this.project = project;
  }

  render() {
    if (!this.container || !this.project) return;

    const milestones = this.project.milestones || [
      { name: "Foundation & Excavation", pct: 100, status: "COMPLETED" },
      { name: "RCC Structure", pct: 85, status: "IN_PROGRESS" },
      { name: "Brickwork & Plaster", pct: 60, status: "IN_PROGRESS" },
      { name: "MEP & Finishing", pct: 30, status: "IN_PROGRESS" }
    ];

    const overallPct = this.project.overallProgressPct || 75;

    const itemsHtml = milestones.map(m => {
      const isDone = m.pct === 100;
      return `
        <div class="milestone-item ${isDone ? 'completed' : ''}">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
            <h5>${m.name}</h5>
            ${isDone ? '<span style="color: var(--color-success); font-weight: 800;">✓</span>' : ''}
          </div>
          <div class="progress-track" style="height: 6px; margin-bottom: 0.35rem;">
            <div class="progress-fill" style="width: ${m.pct}%;"></div>
          </div>
          <span class="milestone-pct">${m.pct}% Complete</span>
        </div>
      `;
    }).join('');

    this.container.innerHTML = `
      <div class="timeline-module">
        <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h3 style="font-size: 1.6rem; color: var(--color-primary);">Live Construction Progress Tracker</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted);">Verified site inspection updates as of <strong>August 2026</strong></p>
          </div>
          <span class="badge badge-success" style="font-size: 0.85rem; padding: 0.5rem 1rem;">
            🟢 On-Schedule for Delivery
          </span>
        </div>

        <div class="overall-progress-bar-wrap">
          <div class="progress-label-row">
            <span>Overall Construction Velocity</span>
            <span style="color: var(--color-primary); font-size: 1.15rem;">${overallPct}% Completed</span>
          </div>
          <div class="progress-track" style="height: 16px;">
            <div class="progress-fill" style="width: ${overallPct}%;"></div>
          </div>
        </div>

        <div class="milestones-grid">
          ${itemsHtml}
        </div>
      </div>
    `;
  }
}

window.ConstructionTracker = ConstructionTracker;
