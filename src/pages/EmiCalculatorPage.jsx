import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import { Calculator, Landmark, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const EmiCalculatorPage = () => {
  const { openEnquiryModal } = useModal();

  const [propertyPrice, setPropertyPrice] = useState(5000000); // 50 Lakhs
  const [downPaymentPct, setDownPaymentPct] = useState(20); // 20%
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%
  const [loanTenureYears, setLoanTenureYears] = useState(20); // 20 Years

  // Calculations
  const downPaymentAmount = (propertyPrice * downPaymentPct) / 100;
  const principal = propertyPrice - downPaymentAmount;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = loanTenureYears * 12;

  // Standard EMI formula: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - principal;

  const formatLakhs = (val) => "₹" + (val / 100000).toFixed(2) + " Lakhs";
  const formatRupees = (val) => "₹" + Math.round(val).toLocaleString('en-IN');

  // Generate 5-year amortization schedule
  const schedule = [];
  let currentBalance = principal;
  for (let yr = 1; yr <= Math.min(5, loanTenureYears); yr++) {
    const openBalance = currentBalance;
    let yrInterest = 0;
    let yrPrincipal = 0;

    for (let m = 0; m < 12; m++) {
      const mInterest = currentBalance * monthlyRate;
      const mPrincipal = emi - mInterest;
      yrInterest += mInterest;
      yrPrincipal += mPrincipal;
      currentBalance -= mPrincipal;
    }

    schedule.push({
      year: yr,
      openBalance,
      principalPaid: yrPrincipal,
      interestPaid: yrInterest,
      closingBalance: Math.max(0, currentBalance)
    });
  }

  return (
    <div className="fade-in" style={{ paddingBottom: '5rem' }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #18181B 0%, #27272A 100%)', color: '#FFF', padding: '4.5rem 0 3.5rem', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>FINANCIAL PLANNING TOOL</span>
          <h1 style={{ fontSize: '3rem', color: '#FFF', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            Smart EMI & Home Loan Calculator
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', color: '#A1A1AA', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Calculate your monthly repayment installments, total interest liability, down payment requirements, and loan amortization schedule.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '4rem' }}>
        {/* Calculator Grid */}
        <div style={{ background: '#FFF', borderRadius: 'var(--r-xl)', padding: '2.5rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', marginBottom: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {/* Controls */}
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '2rem' }}>Loan Configuration</h3>

              {/* Property Price */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--ink)' }}>Property Value</span>
                  <span style={{ color: 'var(--brand)', background: 'var(--brand-subtle)', padding: '0.2rem 0.6rem', borderRadius: 'var(--r-sm)', fontSize: '0.9rem' }}>
                    {formatLakhs(propertyPrice)}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1500000" 
                  max="25000000" 
                  step="50000" 
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(parseFloat(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--brand)', height: '6px', cursor: 'pointer' }}
                />
              </div>

              {/* Down Payment */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--ink)' }}>Down Payment ({downPaymentPct}%)</span>
                  <span style={{ color: 'var(--brand)', background: 'var(--brand-subtle)', padding: '0.2rem 0.6rem', borderRadius: 'var(--r-sm)', fontSize: '0.9rem' }}>
                    {formatLakhs(downPaymentAmount)}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="50" 
                  step="5" 
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(parseFloat(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--brand)', height: '6px', cursor: 'pointer' }}
                />
              </div>

              {/* Interest Rate */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--ink)' }}>Interest Rate (% p.a.)</span>
                  <span style={{ color: 'var(--brand)', background: 'var(--brand-subtle)', padding: '0.2rem 0.6rem', borderRadius: 'var(--r-sm)', fontSize: '0.9rem' }}>
                    {interestRate.toFixed(1)}%
                  </span>
                </div>
                <input 
                  type="range" 
                  min="6.5" 
                  max="14.0" 
                  step="0.1" 
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--brand)', height: '6px', cursor: 'pointer' }}
                />
              </div>

              {/* Loan Tenure */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--ink)' }}>Loan Tenure (Years)</span>
                  <span style={{ color: 'var(--brand)', background: 'var(--brand-subtle)', padding: '0.2rem 0.6rem', borderRadius: 'var(--r-sm)', fontSize: '0.9rem' }}>
                    {loanTenureYears} Years
                  </span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="30" 
                  step="1" 
                  value={loanTenureYears}
                  onChange={(e) => setLoanTenureYears(parseFloat(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--brand)', height: '6px', cursor: 'pointer' }}
                />
              </div>
            </div>

            {/* Results Output */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ background: 'var(--sand-muted)', padding: '2rem', borderRadius: 'var(--r-xl)', textAlign: 'center', marginBottom: '1.5rem', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>
                    ESTIMATED MONTHLY EMI
                  </span>
                  <h2 style={{ fontSize: '2.8rem', color: 'var(--brand)', margin: '0.5rem 0 0', fontFamily: 'var(--font-heading)' }}>
                    {formatRupees(emi)}
                  </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.92rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid var(--border-light)' }}>
                    <span style={{ color: 'var(--ink-muted)' }}>Principal Loan Amount:</span>
                    <strong style={{ color: 'var(--ink)' }}>{formatRupees(principal)}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid var(--border-light)' }}>
                    <span style={{ color: 'var(--ink-muted)' }}>Total Interest Payable:</span>
                    <strong style={{ color: 'var(--gold)' }}>{formatRupees(totalInterest)}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid var(--border-light)' }}>
                    <span style={{ color: 'var(--ink-muted)' }}>Total Repayment (Principal + Interest):</span>
                    <strong style={{ color: 'var(--brand)' }}>{formatRupees(totalPayment)}</strong>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button 
                  className="btn btn-primary btn-lg" 
                  style={{ width: '100%', marginBottom: '1rem' }}
                  onClick={() => openEnquiryModal('All Projects', 'Home Loan Pre-Approval Assistance')}
                >
                  <Landmark size={18} /> Apply for Pre-Approved Bank Loan
                </button>
                <p style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', textAlign: 'center', margin: 0, lineHeight: '1.4' }}>
                  Approved by SBI, HDFC, ICICI, Bank of Baroda & PNB. Zero processing fee assistance for SSB Group buyers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Year Amortization Schedule */}
        <div style={{ background: '#FFF', borderRadius: 'var(--r-xl)', padding: '2.5rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.35rem' }}>
            5-Year Indicative Amortization Schedule
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', marginBottom: '1.5rem' }}>
            Yearly breakdown of outstanding principal balance reduction and interest component
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: 'var(--sand-muted)', borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
                  <th style={{ padding: '0.85rem 1rem' }}>Tenure</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Opening Balance</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Principal Paid</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Interest Paid</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Closing Balance</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.year} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>Year {row.year}</td>
                    <td style={{ padding: '0.85rem 1rem', color: 'var(--ink-muted)' }}>{formatRupees(row.openBalance)}</td>
                    <td style={{ padding: '0.85rem 1rem', color: 'var(--success)', fontWeight: 600 }}>{formatRupees(row.principalPaid)}</td>
                    <td style={{ padding: '0.85rem 1rem', color: 'var(--gold)', fontWeight: 600 }}>{formatRupees(row.interestPaid)}</td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--ink)' }}>{formatRupees(row.closingBalance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
