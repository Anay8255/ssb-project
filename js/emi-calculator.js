/**
 * SSB INFRA — SMART EMI & INVESTMENT CALCULATOR LOGIC
 * Dynamic monthly installment calculation, Principal vs Interest split & amortization schedule
 */

class EmiCalculator {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.propertyPrice = 5000000; // 50 Lakhs default
    this.downPaymentPct = 20; // 20%
    this.interestRate = 8.5; // 8.5%
    this.loanTenureYears = 20; // 20 years
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="calculator-wrapper">
        <div class="calc-grid">
          <!-- Left Controls -->
          <div class="calc-controls">
            <h3 style="font-size: 1.5rem; margin-bottom: 2rem; color: var(--color-primary);">Loan Configuration Parameters</h3>

            <!-- Property Price Slider -->
            <div class="slider-group">
              <div class="slider-header">
                <span class="slider-label">Property Value (₹)</span>
                <span class="slider-val-badge" id="lbl-prop-price">₹50.00 Lakhs</span>
              </div>
              <input type="range" class="calc-range" id="rng-prop-price" min="1500000" max="25000000" step="50000" value="${this.propertyPrice}">
            </div>

            <!-- Down Payment Slider -->
            <div class="slider-group">
              <div class="slider-header">
                <span class="slider-label">Down Payment (<span id="lbl-dp-pct">20%</span>)</span>
                <span class="slider-val-badge" id="lbl-dp-amount">₹10.00 Lakhs</span>
              </div>
              <input type="range" class="calc-range" id="rng-dp-pct" min="10" max="50" step="5" value="${this.downPaymentPct}">
            </div>

            <!-- Interest Rate Slider -->
            <div class="slider-group">
              <div class="slider-header">
                <span class="slider-label">Interest Rate (% p.a.)</span>
                <span class="slider-val-badge" id="lbl-interest">8.5%</span>
              </div>
              <input type="range" class="calc-range" id="rng-interest" min="6.5" max="14.0" step="0.1" value="${this.interestRate}">
            </div>

            <!-- Loan Tenure Slider -->
            <div class="slider-group">
              <div class="slider-header">
                <span class="slider-label">Loan Tenure (Years)</span>
                <span class="slider-val-badge" id="lbl-tenure">20 Years</span>
              </div>
              <input type="range" class="calc-range" id="rng-tenure" min="5" max="30" step="1" value="${this.loanTenureYears}">
            </div>
          </div>

          <!-- Right Output Card -->
          <div class="calc-results">
            <div>
              <div class="emi-featured-card">
                <span>Estimated Monthly EMI</span>
                <h2 id="out-emi-monthly">₹34,713</h2>
              </div>

              <div class="breakdown-row">
                <span>Principal Loan Amount:</span>
                <span id="out-principal">₹40,00,000</span>
              </div>
              <div class="breakdown-row">
                <span>Total Interest Payable:</span>
                <span id="out-interest-total">₹43,31,041</span>
              </div>
              <div class="breakdown-row">
                <span>Total Payment (Principal + Interest):</span>
                <span id="out-total-amount">₹83,31,041</span>
              </div>
            </div>

            <div style="margin-top: 2rem;">
              <button class="btn btn-primary" style="width: 100%; margin-bottom: 1rem;" onclick="window.openEnquiryModal('', 'Loan Pre-Approval')">
                🏦 Apply for Pre-Approved Home Loan
              </button>
              <p class="calc-disclaimer">
                <strong>Disclaimer:</strong> Indicative calculation only. Actual loan terms, interest rates, eligibility, and processing fees are determined by the respective financing banks (SBI, HDFC, ICICI, etc.).
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Amortization Schedule Table -->
      <div class="amortization-card">
        <h4 style="font-size: 1.25rem; color: var(--color-primary); margin-bottom: 0.5rem;">5-Year Indicative Amortization Schedule</h4>
        <p style="font-size: 0.85rem; color: var(--color-text-muted);">Yearly breakdown of loan balance reduction and interest component</p>
        
        <div style="overflow-x: auto;">
          <table class="amort-table" id="amort-schedule-table">
            <!-- Rendered dynamically -->
          </table>
        </div>
      </div>
    `;

    this.attachInputs();
    this.calculate();
  }

  attachInputs() {
    const rngPrice = document.getElementById('rng-prop-price');
    const rngDp = document.getElementById('rng-dp-pct');
    const rngRate = document.getElementById('rng-interest');
    const rngTenure = document.getElementById('rng-tenure');

    if (rngPrice) rngPrice.addEventListener('input', (e) => { this.propertyPrice = parseFloat(e.target.value); this.calculate(); });
    if (rngDp) rngDp.addEventListener('input', (e) => { this.downPaymentPct = parseFloat(e.target.value); this.calculate(); });
    if (rngRate) rngRate.addEventListener('input', (e) => { this.interestRate = parseFloat(e.target.value); this.calculate(); });
    if (rngTenure) rngTenure.addEventListener('input', (e) => { this.loanTenureYears = parseFloat(e.target.value); this.calculate(); });
  }

  calculate() {
    const downPaymentAmount = (this.propertyPrice * this.downPaymentPct) / 100;
    const principal = this.propertyPrice - downPaymentAmount;
    const monthlyRate = this.interestRate / 12 / 100;
    const totalMonths = this.loanTenureYears * 12;

    // Standard EMI formula: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - principal;

    // Update Badges & Labels
    const formatLakhs = (val) => "₹" + (val / 100000).toFixed(2) + " Lakhs";
    const formatRupees = (val) => "₹" + Math.round(val).toLocaleString('en-IN');

    document.getElementById('lbl-prop-price').textContent = formatLakhs(this.propertyPrice);
    document.getElementById('lbl-dp-pct').textContent = this.downPaymentPct + "%";
    document.getElementById('lbl-dp-amount').textContent = formatLakhs(downPaymentAmount);
    document.getElementById('lbl-interest').textContent = this.interestRate.toFixed(1) + "%";
    document.getElementById('lbl-tenure').textContent = this.loanTenureYears + " Years";

    document.getElementById('out-emi-monthly').textContent = formatRupees(emi);
    document.getElementById('out-principal').textContent = formatRupees(principal);
    document.getElementById('out-interest-total').textContent = formatRupees(totalInterest);
    document.getElementById('out-total-amount').textContent = formatRupees(totalPayment);

    this.renderAmortization(principal, monthlyRate, emi);
  }

  renderAmortization(principal, monthlyRate, emi) {
    const table = document.getElementById('amort-schedule-table');
    if (!table) return;

    let balance = principal;
    let html = `
      <thead>
        <tr>
          <th>Year</th>
          <th>Opening Balance</th>
          <th>Principal Paid</th>
          <th>Interest Paid</th>
          <th>Closing Balance</th>
        </tr>
      </thead>
      <tbody>
    `;

    const formatRupees = (val) => "₹" + Math.round(val).toLocaleString('en-IN');

    for (let yr = 1; yr <= Math.min(5, this.loanTenureYears); yr++) {
      const openBalance = balance;
      let yrInterest = 0;
      let yrPrincipal = 0;

      for (let m = 0; m < 12; m++) {
        const mInterest = balance * monthlyRate;
        const mPrincipal = emi - mInterest;
        yrInterest += mInterest;
        yrPrincipal += mPrincipal;
        balance -= mPrincipal;
      }

      html += `
        <tr>
          <td><strong>Year ${yr}</strong></td>
          <td>${formatRupees(openBalance)}</td>
          <td style="color: var(--color-success); font-weight: 600;">${formatRupees(yrPrincipal)}</td>
          <td style="color: var(--color-gold-dark); font-weight: 600;">${formatRupees(yrInterest)}</td>
          <td><strong>${formatRupees(Math.max(0, balance))}</strong></td>
        </tr>
      `;
    }

    html += `</tbody>`;
    table.innerHTML = html;
  }
}

window.EmiCalculator = EmiCalculator;
