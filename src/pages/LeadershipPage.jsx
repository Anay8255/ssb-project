import React from 'react';
import { useStore } from '../context/StoreContext';
import { Award, CheckCircle2, UserCheck, Shield } from 'lucide-react';

export const LeadershipPage = () => {
  const { leadership } = useStore();

  return (
    <div className="fade-in" style={{ paddingBottom: '5rem' }}>
      {/* Header */}
      <section className="subpage-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>EXECUTIVE GOVERNANCE</span>
          <h1 className="subpage-hero-title">
            Leadership & Governance
          </h1>
          <p className="subpage-hero-desc">
            Meet the visionaries, civil engineers, and corporate leaders guiding SSB Group towards regional excellence and enduring architectural heritage.
          </p>
        </div>
      </section>

      {/* Leadership Profiles */}
      <div className="container" style={{ paddingTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3rem' }}>
          {leadership.map((leader, idx) => (
            <div 
              key={idx}
              style={{
                background: '#FFF',
                borderRadius: 'var(--r-xl)',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '360px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={leader.photoUrl} 
                  alt={leader.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span className="eyebrow" style={{ marginBottom: '0.25rem' }}>{leader.designation}</span>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', marginBottom: '1rem' }}>{leader.name}</h3>

                <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7', fontSize: '0.98rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {leader.bio}
                </p>

                <blockquote style={{ background: 'var(--sand-muted)', padding: '1.25rem 1.5rem', borderRadius: 'var(--r-md)', borderLeft: '4px solid var(--brand)', fontStyle: 'italic', color: 'var(--ink)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  "{leader.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Values Strip */}
        <div style={{ marginTop: '4.5rem', background: '#FFF', padding: '3rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="eyebrow">OUR CODE OF GOVERNANCE</span>
            <h3 style={{ fontSize: '2rem', color: 'var(--ink)' }}>Guiding Principles of Corporate Integrity</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>🏛️ Institutional Transparency</h4>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Clear accounting, statutory compliance with Ministry of Corporate Affairs, and zero hidden charges for buyers.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>🏅 Quality Certification</h4>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Strict implementation of ISO 9001:2015 Quality Management Systems across all on-site construction stages.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>🤝 Community Stewardship</h4>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Commitment to civic infrastructure, sustainable rainwater harvesting, green landscaping, and local employment generation in Eastern UP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
