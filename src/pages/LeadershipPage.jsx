import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { ShieldCheck, Award, Users, ArrowRight, Car, Sparkles, Building2, HeartHandshake } from 'lucide-react';

export const LeadershipPage = () => {
  const { openSiteVisitModal } = useModal();

  return (
    <div className="fade-in" style={{ paddingBottom: '6rem' }}>
      {/* Hero Header with Exact Background Image from ssbinfraproject.com/leadership */}
      <section className="leadership-hero">
        <img 
          src="/hero-pratham.jpg" 
          alt="Leadership — SSB Group" 
          className="leadership-hero-bg-img" 
        />
        <div className="leadership-hero-scrim"></div>
        <div className="leadership-hero-grain"></div>
        <div className="container leadership-hero-container">
          <div className="leadership-hero-content">
            <span className="leadership-hero-eyebrow">LEADERSHIP</span>
            <h1 className="leadership-hero-title">
              The People Behind SSB
            </h1>
            <p className="leadership-hero-desc">
              A founder-led company, guided by three decades of combined experience in real estate, finance and delivery.
            </p>
            <div className="leadership-hero-badges">
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">Founded</span>
                <span className="about-hero-stat-lbl">2013</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">13+</span>
                <span className="about-hero-stat-lbl">Years Legacy</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">1200+</span>
                <span className="about-hero-stat-lbl">Delivered Homes</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">100%</span>
                <span className="about-hero-stat-lbl">UP-RERA Approved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Showcase Section */}
      <div className="container" style={{ paddingTop: '5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {/* Leader 1: Mr. Ram Gopal Singh */}
          <div className="leadership-showcase-card">
            <div className="leadership-photo-wrap">
              <img 
                src="/ram-gopal-singh.jpg" 
                alt="Mr. Ram Gopal Singh, Founder, Chairman & Managing Director at SSB Group" 
                className="leadership-photo-img"
              />
            </div>
            <div className="leadership-info-wrap">
              <span className="eyebrow" style={{ color: 'var(--brand)', marginBottom: '0.4rem' }}>
                Founder, Chairman & Managing Director
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)', color: 'var(--ink)', fontFamily: 'var(--font-heading)', marginBottom: '1.25rem' }}>
                Mr. Ram Gopal Singh
              </h2>
              <p style={{ color: 'var(--ink-muted)', lineHeight: '1.75', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                Founded SSB Group in Varanasi in 2013 with a philosophy centred on quality, innovation, professionalism and customer trust. Under his stewardship, the company has transformed from a dedicated local developer into a regional infrastructure force across Eastern Uttar Pradesh.
              </p>
              <blockquote style={{ background: 'var(--sand-muted)', padding: '1.25rem 1.5rem', borderRadius: 'var(--r-md)', borderLeft: '4px solid var(--brand)', fontStyle: 'italic', color: 'var(--ink)', fontSize: '0.98rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                “A home is not a transaction. It is a family's faith placed in your hands — and that faith must be honoured in every brick.”
              </blockquote>
              <div>
                <Link to="/about" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderRadius: 'var(--r-pill)', padding: '0.75rem 1.75rem' }}>
                  Read Founder Story <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Leader 2: Mr. Jitendra Kumar Singh */}
          <div className="leadership-showcase-card" style={{ gridTemplateColumns: '1fr 0.65fr' }}>
            <div className="leadership-info-wrap" style={{ order: 1 }}>
              <span className="eyebrow" style={{ color: 'var(--brand)', marginBottom: '0.4rem' }}>
                Co-Founder & Director
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)', color: 'var(--ink)', fontFamily: 'var(--font-heading)', marginBottom: '1.25rem' }}>
                Mr. Jitendra Kumar Singh
              </h2>
              <p style={{ color: 'var(--ink-muted)', lineHeight: '1.75', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                Varanasi-born and an MBA graduate, with prior executive experience at Chadha Group and a background in the petroleum business. With SSB Group since 2012, spearheading corporate operations, strategic project acquisitions, and statutory compliance across Varanasi and Lucknow.
              </p>
              <blockquote style={{ background: 'var(--sand-muted)', padding: '1.25rem 1.5rem', borderRadius: 'var(--r-md)', borderLeft: '4px solid var(--gold)', fontStyle: 'italic', color: 'var(--ink)', fontSize: '0.98rem', lineHeight: '1.6' }}>
                “Engineering integrity, documented timelines, and long-term customer relationships form the bedrock upon which our communities thrive.”
              </blockquote>
            </div>
            <div className="leadership-photo-wrap" style={{ order: 2 }}>
              <img 
                src="/jitendra-kumar-singh.jpg" 
                alt="Mr. Jitendra Kumar Singh, Co-Founder & Director at SSB Group" 
                className="leadership-photo-img"
              />
            </div>
          </div>
        </div>

        {/* Corporate Values Strip */}
        <div style={{ marginTop: '5rem', background: '#FFF', padding: '3.5rem 3rem', borderRadius: '28px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">OUR CODE OF GOVERNANCE</span>
            <h3 style={{ fontSize: '2.2rem', color: 'var(--ink)', fontFamily: 'var(--font-heading)', marginTop: '0.35rem' }}>
              Guiding Principles of Corporate Integrity
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            <div style={{ background: 'var(--sand)', padding: '2rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Building2 size={24} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>Institutional Transparency</h4>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', lineHeight: '1.65' }}>
                Clear accounting, statutory compliance with Ministry of Corporate Affairs, and zero hidden charges for every buyer.
              </p>
            </div>

            <div style={{ background: 'var(--sand)', padding: '2rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Award size={24} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>Quality Certification</h4>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', lineHeight: '1.65' }}>
                Strict implementation of ISO 9001:2015 Quality Management Systems across all on-site construction stages.
              </p>
            </div>

            <div style={{ background: 'var(--sand)', padding: '2rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <HeartHandshake size={24} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>Community Stewardship</h4>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', lineHeight: '1.65' }}>
                Commitment to civic infrastructure, sustainable rainwater harvesting, green landscaping, and local employment generation in Eastern UP.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Band */}
        <div style={{ marginTop: '4.5rem', background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', color: '#FFF', padding: '3.5rem 2rem', borderRadius: '28px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '2.4rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)', marginBottom: '0.75rem' }}>
              Let's talk.
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Our leadership and advisory team is available across Varanasi and Lucknow to assist your property and investment journey.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn btn-primary" style={{ borderRadius: 'var(--r-pill)', padding: '0.75rem 2rem' }}>
                Explore Projects
              </Link>
              <button className="btn btn-outline" onClick={() => openSiteVisitModal()} style={{ borderRadius: 'var(--r-pill)', padding: '0.75rem 2rem', borderColor: 'rgba(255,255,255,0.3)', color: '#FFF' }}>
                <Car size={16} /> Book a Site Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
