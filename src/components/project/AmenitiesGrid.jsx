import React from 'react';
import { Sparkles } from 'lucide-react';

export const AmenitiesGrid = ({ amenities }) => {
  if (!amenities || amenities.length === 0) return null;

  return (
    <div style={{ background: '#FFF', borderRadius: 'var(--r-xl)', padding: '2.5rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', marginBottom: '2.5rem' }}>
      <div style={{ marginBottom: '1.75rem' }}>
        <span className="eyebrow">WORLD-CLASS AMENITIES</span>
        <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', margin: 0 }}>Enriched Living Ecosystem</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginTop: '0.25rem' }}>
          Crafted for wellness, active leisure, secure childhoods and sustainable community living.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
        {amenities.map((item, idx) => (
          <div 
            key={idx} 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.25rem',
              background: 'var(--sand-muted)',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--border)'
            }}
          >
            <div style={{ fontSize: '1.8rem', width: '48px', height: '48px', borderRadius: '50%', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-xs)' }}>
              {item.icon}
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--ink)' }}>{item.name}</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
