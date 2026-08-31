import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const AmenitiesGrid = ({ amenities }) => {
  if (!amenities || amenities.length === 0) return null;

  return (
    <section 
      id="amenities" 
      style={{ 
        background: '#FFFFFF', 
        borderRadius: 'var(--r-2xl, 24px)', 
        padding: '3rem', 
        border: '1px solid rgba(226, 232, 240, 0.9)', 
        boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.05)', 
        marginBottom: '3rem',
        position: 'relative'
      }}
    >
      <div style={{ marginBottom: '2.25rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.75rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(224, 84, 43, 0.08)', color: 'var(--brand)', padding: '0.35rem 0.85rem', borderRadius: 'var(--r-pill)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
          <Sparkles size={13} /> Curated Lifestyle & Infrastructure
        </div>
        <h3 style={{ fontSize: '2.2rem', color: 'var(--ink)', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
          World-Class Amenities & Ecosystem
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--ink-muted)', marginTop: '0.35rem', maxWidth: '650px', lineHeight: 1.5 }}>
          Thoughtfully planned infrastructure designed for health, wellness, active recreation, and high security.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
        {amenities.map((item, idx) => (
          <div 
            key={idx} 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.1rem',
              padding: '1.35rem',
              background: '#F8FAFC',
              borderRadius: 'var(--r-xl, 16px)',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.borderColor = 'var(--brand)';
              e.currentTarget.style.boxShadow = '0 12px 25px -5px rgba(224, 84, 43, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = '#F8FAFC';
              e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.9)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.02)';
            }}
          >
            <div style={{ 
              fontSize: '1.75rem', 
              width: '52px', 
              height: '52px', 
              borderRadius: '14px', 
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              flexShrink: 0
            }}>
              {item.icon}
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.98rem', color: 'var(--ink)', fontWeight: 700, marginBottom: '0.15rem' }}>
                {item.name}
              </strong>
              <span style={{ fontSize: '0.72rem', color: 'var(--brand)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.06em' }}>
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
