/**
 * SSB INFRA — NRI & GLOBAL INVESTOR DESK ENGINE
 * Handles real-time currency conversion (USD, AED, GBP, EUR, CAD, INR) and NRI Consultation Scheduling
 */

class NriCornerModule {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.rates = {
      INR: 1,
      USD: 0.012,
      AED: 0.044,
      GBP: 0.0094,
      EUR: 0.011,
      CAD: 0.016
    };
    this.activeCurrency = 'USD';
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="currency-converter-card">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h3 style="font-size: 1.45rem; color: var(--color-primary); margin-bottom: 0.25rem;">Global Currency Valuation Estimator</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted);">View verified property values across major international currencies</p>
          </div>
          <div class="currency-toggle-grid">
            <button class="curr-btn ${this.activeCurrency === 'USD' ? 'active' : ''}" onclick="window.nriInstance.setCurrency('USD')">🇺🇸 USD ($)</button>
            <button class="curr-btn ${this.activeCurrency === 'AED' ? 'active' : ''}" onclick="window.nriInstance.setCurrency('AED')">🇦🇪 AED (د.إ)</button>
            <button class="curr-btn ${this.activeCurrency === 'GBP' ? 'active' : ''}" onclick="window.nriInstance.setCurrency('GBP')">🇬🇧 GBP (£)</button>
            <button class="curr-btn ${this.activeCurrency === 'EUR' ? 'active' : ''}" onclick="window.nriInstance.setCurrency('EUR')">🇪🇺 EUR (€)</button>
            <button class="curr-btn ${this.activeCurrency === 'CAD' ? 'active' : ''}" onclick="window.nriInstance.setCurrency('CAD')">🇨🇦 CAD ($)</button>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-top: 2rem;" id="nri-converted-grid">
          <!-- Converted prices injected dynamically -->
        </div>
      </div>
    `;

    this.renderConvertedCards();
  }

  setCurrency(curr) {
    this.activeCurrency = curr;
    this.render();
  }

  renderConvertedCards() {
    const grid = document.getElementById('nri-converted-grid');
    if (!grid) return;

    const rate = this.rates[this.activeCurrency] || 1;
    const projects = window.store.state.projects;

    const symbols = { USD: '$', AED: 'AED ', GBP: '£', EUR: '€', CAD: 'CA$' };
    const sym = symbols[this.activeCurrency] || '$';

    grid.innerHTML = projects.map(p => {
      const convertedVal = Math.round(p.startingPrice * rate).toLocaleString('en-US');
      return `
        <div style="background: var(--color-bg); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);">
          <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-gold-dark); font-weight: 700;">${p.projectType.replace(/_/g, ' ')}</span>
          <h4 style="font-size: 1.15rem; color: var(--color-primary); margin: 0.25rem 0 0.75rem 0;">${p.title}</h4>
          
          <div style="margin-bottom: 1rem;">
            <span style="font-size: 0.75rem; color: var(--color-text-muted); display: block;">INR Baseline: ${p.priceDisplay}</span>
            <strong style="font-size: 1.4rem; color: var(--color-primary); font-family: var(--font-heading);">${sym}${convertedVal}</strong>
          </div>

          <button class="btn btn-navy btn-sm" style="width: 100%;" onclick="window.openEnquiryModal('${p.id}', 'NRI Consultation - ${this.activeCurrency}')">
            Schedule NRI Video Tour
          </button>
        </div>
      `;
    }).join('');
  }
}

window.NriCornerModule = NriCornerModule;
