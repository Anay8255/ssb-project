import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { ShieldCheck, CheckCircle2, Award, Landmark, Building2, HeartHandshake, Car } from 'lucide-react';

export const WhySsbPage = () => {
  const { openSiteVisitModal } = useModal();

  return (
    <div className="fade-in" style={{ paddingBottom: '5rem' }}>
      {/* Hero with Exact Background Image */}
      <section className="why-ssb-hero">
        <img 
          src="/hero-sai-gaon.png" 
          alt="Why SSB Group — Trust, Quality & Locations" 
          className="why-ssb-hero-bg-img" 
        />
        <div className="why-ssb-hero-scrim"></div>
        <div className="why-ssb-hero-grain"></div>
        <div className="container why-ssb-hero-container">
          <div className="why-ssb-hero-content">
            <span className="why-ssb-hero-eyebrow">WHY SSB</span>
            <h1 className="why-ssb-hero-title">
              Trust is the only thing we cannot rebuild.
            </h1>
            <p className="why-ssb-hero-desc">
              Why families, investors and partners across Eastern Uttar Pradesh choose SSB Group.
            </p>
            <div className="why-ssb-hero-badges">
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">13+</span>
                <span className="about-hero-stat-lbl">Years Trust</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">1200+</span>
                <span className="about-hero-stat-lbl">Delivered Units</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">100%</span>
                <span className="about-hero-stat-lbl">RERA Verified</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">ISO</span>
                <span className="about-hero-stat-lbl">9001:2015</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pillars */}
      <div className="container" style={{ paddingTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div style={{ background: '#FFF', padding: '2.5rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <ShieldCheck size={26} />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>100% UP-RERA Compliance</h3>
            <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              Every residential township and commercial space developed by SSB Group is registered with UP-RERA. We provide verified registration certificates, approved architectural blueprints, and clear carpet area metrics before any booking.
            </p>
          </div>

          <div style={{ background: '#FFF', padding: '2.5rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Award size={26} />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>Aluminium Formwork Technology</h3>
            <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              We employ advanced monolithic aluminium formwork construction systems. This delivers enhanced earthquake safety, higher structural lifespan, seamless mirror-finish concrete walls, and significantly faster delivery turnaround.
            </p>
          </div>

          <div style={{ background: '#FFF', padding: '2.5rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Landmark size={26} />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>Nationalized Bank Approvals</h3>
            <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              All our developments are pre-approved for home loans and customized construction-linked payment schemes with India’s leading financial institutions: State Bank of India (SBI), HDFC Bank, ICICI Bank, Bank of Baroda, and Punjab National Bank.
            </p>
          </div>

          <div style={{ background: '#FFF', padding: '2.5rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <CheckCircle2 size={26} />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>Clear Land Titles & Registry</h3>
            <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              We perform rigorous multi-decade legal title investigations on all land acquisitions. Homeowners receive transparent registry documentation, freehold ownership rights, and full civic compliance with Awas Bandhu & Varanasi Development Authority.
            </p>
          </div>

          <div style={{ background: '#FFF', padding: '2.5rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Building2 size={26} />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>High Capital Appreciation</h3>
            <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              Our locations in Varanasi and Lucknow are strategically positioned along major expressways, ring roads, and rapid transit hubs, driving consistent double-digit annual capital growth and attractive rental yields.
            </p>
          </div>

          <div style={{ background: '#FFF', padding: '2.5rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <HeartHandshake size={26} />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>10,000+ Happy Homeowners</h3>
            <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              Over 10,000 families celebrate their milestones across our completed townships. Our dedicated customer relationship desk provides lifelong facility maintenance, property advisory, and resident community governance.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: '#FFF', padding: '3rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>Inspect Our Construction Standards in Person</h3>
          <p style={{ color: 'var(--ink-muted)', marginBottom: '1.5rem' }}>Book a complimentary chauffeur site visit across any of our ongoing developments in Varanasi.</p>
          <button className="btn btn-primary" onClick={() => openSiteVisitModal()}>
            <Car size={16} /> Book Complimentary VIP Site Visit
          </button>
        </div>
      </div>
    </div>
  );
};
