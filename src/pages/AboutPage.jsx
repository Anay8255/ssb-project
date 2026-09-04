import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { useModal } from '../context/ModalContext';
import { ShieldCheck, Award, HeartHandshake, MapPin, Sparkles, Building2, CheckCircle2, Car } from 'lucide-react';
import { InteractiveTimeline } from '../components/home/InteractiveTimeline';

export const AboutPage = () => {
  const { journey, leadership } = useStore();
  const { openSiteVisitModal } = useModal();

  return (
    <div className="fade-in" style={{ paddingBottom: '5rem' }}>
      {/* Hero Header with Exact Background Image */}
      <section className="about-hero">
        <img 
          src="/hero-shree-sai-city.png" 
          alt="About SSB Group — Shree Sai City" 
          className="about-hero-bg-img" 
        />
        <div className="about-hero-scrim"></div>
        <div className="about-hero-grain"></div>
        <div className="container about-hero-container">
          <div className="about-hero-content">
            <span className="about-hero-eyebrow">ABOUT SSB GROUP</span>
            <h1 className="about-hero-title">
              About SSB Group
            </h1>
            <p className="about-hero-desc">
              From a vision born in Varanasi to a growing real-estate presence across Eastern Uttar Pradesh.
            </p>
            <div className="about-hero-badges">
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">13+</span>
                <span className="about-hero-stat-lbl">Years Legacy</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">1200+</span>
                <span className="about-hero-stat-lbl">Delivered Units</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">100%</span>
                <span className="about-hero-stat-lbl">RERA Compliant</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">ISO</span>
                <span className="about-hero-stat-lbl">9001:2015 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section style={{ padding: '5rem 0', background: 'var(--sand)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            <div style={{ background: '#FFF', padding: '2.5rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
              <span className="eyebrow">OUR PURPOSE</span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7', fontSize: '1rem' }}>
                To be Eastern Uttar Pradesh's most trusted and architecturally distinguished real estate institution — elevating regional living standards through sustainable master-planning, modern construction engineering, and unyielding statutory integrity.
              </p>
            </div>

            <div style={{ background: '#FFF', padding: '2.5rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
              <span className="eyebrow">OUR COMMITMENT</span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7', fontSize: '1rem' }}>
                To build thoughtfully engineered residential communities and high-yield commercial hubs that provide lasting pride of ownership, seamless on-time possession, and exponential capital appreciation for every buyer.
              </p>
            </div>
          </div>

          {/* 6 Guiding Pillars */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">FOUNDATIONAL VALUES</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--ink)' }}>Six Principles Guiding Every Site We Build</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '4.5rem' }}>
            <div style={{ background: '#FFF', padding: '2rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <HeartHandshake size={24} />
              </div>
              <h4 style={{ fontSize: '1.3rem', color: 'var(--ink)', marginBottom: '0.4rem' }}>Absolute Trust</h4>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                A legacy rooted in Varanasi and validated by thousands of families who have placed their faith in our handovers.
              </p>
            </div>

            <div style={{ background: '#FFF', padding: '2rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Award size={24} />
              </div>
              <h4 style={{ fontSize: '1.3rem', color: 'var(--ink)', marginBottom: '0.4rem' }}>Decade of Experience</h4>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Over 13+ years of acquiring prime land, master planning, executing civil engineering, and delivering across UP.
              </p>
            </div>

            <div style={{ background: '#FFF', padding: '2rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <ShieldCheck size={24} />
              </div>
              <h4 style={{ fontSize: '1.3rem', color: 'var(--ink)', marginBottom: '0.4rem' }}>Material Quality</h4>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Strict testing discipline, ISO 9001:2015 quality standards, and aluminium formwork construction systems.
              </p>
            </div>

            <div style={{ background: '#FFF', padding: '2rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <MapPin size={24} />
              </div>
              <h4 style={{ fontSize: '1.3rem', color: 'var(--ink)', marginBottom: '0.4rem' }}>Strategic Corridors</h4>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Locations handpicked along arterial ring roads, airport corridors, and high-growth civic infrastructure.
              </p>
            </div>

            <div style={{ background: '#FFF', padding: '2rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Building2 size={24} />
              </div>
              <h4 style={{ fontSize: '1.3rem', color: 'var(--ink)', marginBottom: '0.4rem' }}>Engineering Innovation</h4>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Pioneering monolithic aluminium formwork for seismic resilience, smooth finish, and rapid construction.
              </p>
            </div>

            <div style={{ background: '#FFF', padding: '2rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Sparkles size={24} />
              </div>
              <h4 style={{ fontSize: '1.3rem', color: 'var(--ink)', marginBottom: '0.4rem' }}>Customer First</h4>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Full statutory clarity, clear title registrations, verified RERA certificates, and lifetime post-handover support.
              </p>
            </div>
          </div>

          {/* Historical Journey Interactive Timeline */}
          <InteractiveTimeline />

          {/* Bottom CTA Strip */}
          <div style={{ marginTop: '4.5rem', background: '#FFF', padding: '3rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>Ready to Experience SSB Quality?</h3>
            <p style={{ color: 'var(--ink-muted)', marginBottom: '1.5rem' }}>Schedule a private site walkthrough with our engineering and property specialists.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => openSiteVisitModal()}>
                <Car size={16} /> Book Complimentary Site Tour
              </button>
              <Link to="/projects" className="btn btn-outline">
                Browse Active Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
