import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { useModal } from '../context/ModalContext';
import { Globe, DollarSign, ShieldCheck, Video, HelpCircle, ArrowRight } from 'lucide-react';

export const NriCornerPage = () => {
  const { projects } = useStore();
  const { openEnquiryModal } = useModal();
  const [activeCurrency, setActiveCurrency] = useState('USD');

  const rates = {
    USD: { rate: 0.012, symbol: '$', label: '🇺🇸 USD ($)' },
    AED: { rate: 0.044, symbol: 'AED ', label: '🇦🇪 AED (د.إ)' },
    GBP: { rate: 0.0094, symbol: '£', label: '🇬🇧 GBP (£)' },
    EUR: { rate: 0.011, symbol: '€', label: '🇪🇺 EUR (€)' },
    CAD: { rate: 0.016, symbol: 'CA$', label: '🇨🇦 CAD ($)' },
    SGD: { rate: 0.016, symbol: 'SG$', label: '🇸🇬 SGD ($)' }
  };

  const curr = rates[activeCurrency] || rates.USD;

  return (
    <div className="fade-in" style={{ paddingBottom: '5rem' }}>
      {/* Hero Header with Exact Background Image from ssbinfraproject.com/investors-nri */}
      <section className="investor-hero">
        <img 
          src="/hero-pratham.jpg" 
          alt="Investors & NRI Services — SSB Group" 
          className="investor-hero-bg-img" 
        />
        <div className="investor-hero-scrim"></div>
        <div className="investor-hero-grain"></div>
        <div className="container investor-hero-container">
          <div className="investor-hero-content">
            <span className="investor-hero-eyebrow">INVESTORS &amp; NRI</span>
            <h1 className="investor-hero-title">
              Invest With Confidence
            </h1>
            <p className="investor-hero-desc">
              A developer with an on-ground team, a delivered track record and documentation you can verify.
            </p>
            <div className="investor-hero-badges">
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">Est. 2013</span>
                <span className="about-hero-stat-lbl">Presence in UP</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">100%</span>
                <span className="about-hero-stat-lbl">RERA Registered</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">FEMA &amp; RBI</span>
                <span className="about-hero-stat-lbl">Compliant</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">Virtual</span>
                <span className="about-hero-stat-lbl">Site Visits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '4rem' }}>
        {/* Multi-Currency Converter */}
        <div style={{ background: '#FFF', padding: '2.5rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <span className="eyebrow">CURRENCY ESTIMATOR</span>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--ink)', margin: 0 }}>International Property Valuation</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginTop: '0.25rem' }}>
                Estimated starting prices converted dynamically into your local currency.
              </p>
            </div>

            {/* Currency Selectors */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {Object.keys(rates).map(cKey => (
                <button
                  key={cKey}
                  onClick={() => setActiveCurrency(cKey)}
                  className={`btn btn-sm ${activeCurrency === cKey ? 'btn-primary' : 'btn-ghost-warm'}`}
                  style={{ borderRadius: 'var(--r-pill)' }}
                >
                  {rates[cKey].label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {projects.map(p => {
              const convertedVal = Math.round(p.startingPrice * curr.rate).toLocaleString('en-US');
              return (
                <div 
                  key={p.id}
                  style={{
                    background: 'var(--sand-muted)',
                    padding: '1.75rem',
                    borderRadius: 'var(--r-lg)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <span className="badge badge-brand" style={{ width: 'fit-content', marginBottom: '0.5rem' }}>
                    {p.category}
                  </span>
                  <h4 style={{ fontSize: '1.3rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>{p.title}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', marginBottom: '1rem' }}>📍 {p.city}</span>

                  <div style={{ marginBottom: '1.5rem', background: '#FFF', padding: '1rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', display: 'block', textTransform: 'uppercase' }}>
                      Baseline: {p.priceDisplay}
                    </span>
                    <strong style={{ fontSize: '1.6rem', color: 'var(--brand)', fontFamily: 'var(--font-heading)' }}>
                      {curr.symbol}{convertedVal}
                    </strong>
                  </div>

                  <button 
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%', marginTop: 'auto' }}
                    onClick={() => openEnquiryModal(p.title, `NRI Virtual Video Tour (${activeCurrency})`)}
                  >
                    <Video size={14} /> Schedule Video Tour
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* FEMA Guidelines & Regulatory Framework */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          <div style={{ background: '#FFF', padding: '2rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <ShieldCheck size={22} />
            </div>
            <h4 style={{ fontSize: '1.3rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>FEMA & RBI Regulatory Clarity</h4>
            <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
              NRIs and OCIs can freely purchase residential and commercial real estate in India under general RBI permissions. No prior approval required. Payments can be seamlessly remitted via standard NRE/NRO accounts.
            </p>
          </div>

          <div style={{ background: '#FFF', padding: '2rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Globe size={22} />
            </div>
            <h4 style={{ fontSize: '1.3rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>Power of Attorney (POA) Support</h4>
            <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
              You don't need to travel to India for purchase. Our legal team assists with consular POA drafting and local registration, ensuring full legal validity while you remain abroad.
            </p>
          </div>

          <div style={{ background: '#FFF', padding: '2rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <DollarSign size={22} />
            </div>
            <h4 style={{ fontSize: '1.3rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>Easy Repatriation of Capital</h4>
            <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
              Sale proceeds of up to two residential properties and full rental yields can be freely repatriated abroad through Authorized Dealer Category-I banks in accordance with Form 15CA/15CB guidelines.
            </p>
          </div>
        </div>

        {/* 1-on-1 Consultation CTA */}
        <div style={{ background: 'linear-gradient(135deg, #18181B 0%, #27272A 100%)', color: '#FFF', padding: '3rem', borderRadius: 'var(--r-xl)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2rem', color: '#FFF', marginBottom: '0.5rem' }}>Book a 1-on-1 NRI Property Consultation</h3>
          <p style={{ color: '#A1A1AA', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
            Connect via Zoom/Google Meet with our Senior NRI Portfolio Manager to review live inventory, drone videos, and tax structures.
          </p>
          <button className="btn btn-primary btn-lg" onClick={() => openEnquiryModal('All Projects', 'NRI 1-on-1 Virtual Consultation')}>
            <Video size={18} /> Schedule Virtual Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
