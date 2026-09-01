import React, { useState, useMemo } from 'react';
import { 
  Sparkles, ShieldCheck, Camera, Droplets, Zap, Car, Building2, 
  Flame, Compass, Users, Waves, Trophy, Trees, 
  GraduationCap, ShoppingBag, ArrowUpCircle, Layers, CheckCircle2,
  Leaf, HeartHandshake, Home, Store
} from 'lucide-react';

export const AmenitiesGrid = ({ amenities }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  if (!amenities || amenities.length === 0) return null;

  // Smart high-precision Lucide icon mapper
  const getAmenityIcon = (name = '', category = '') => {
    const text = (name + ' ' + category).toLowerCase();
    
    if (text.includes('cctv') || text.includes('camera') || text.includes('surveillance')) return <Camera size={21} strokeWidth={2.2} />;
    if (text.includes('security') || text.includes('rfid') || text.includes('gating') || text.includes('approval') || text.includes('vda') || text.includes('rera') || text.includes('verified')) return <ShieldCheck size={21} strokeWidth={2.2} />;
    if (text.includes('fire') || text.includes('hydrant') || text.includes('safety') || text.includes('fighting')) return <Flame size={21} strokeWidth={2.2} />;
    if (text.includes('water') || text.includes('stp') || text.includes('recycling') || text.includes('rainwater') || text.includes('drainage') || text.includes('plumbing')) return <Droplets size={21} strokeWidth={2.2} />;
    if (text.includes('power') || text.includes('backup') || text.includes('solar') || text.includes('electricity') || text.includes('dual-source')) return <Zap size={21} strokeWidth={2.2} />;
    if (text.includes('parking') || text.includes('car') || text.includes('visitor parking')) return <Car size={21} strokeWidth={2.2} />;
    if (text.includes('swimming') || text.includes('pool') || text.includes('deck')) return <Waves size={21} strokeWidth={2.2} />;
    if (text.includes('tennis') || text.includes('sports') || text.includes('court') || text.includes('arena') || text.includes('gym') || text.includes('fitness')) return <Trophy size={21} strokeWidth={2.2} />;
    if (text.includes('garden') || text.includes('park') || text.includes('terrace') || text.includes('green') || text.includes('landscaping') || text.includes('plantation')) return <Trees size={21} strokeWidth={2.2} />;
    if (text.includes('amusement') || text.includes('resort') || text.includes('club house') || text.includes('clubhouse') || text.includes('atrium') || text.includes('boulevard')) return <Sparkles size={21} strokeWidth={2.2} />;
    if (text.includes('school') || text.includes('education') || text.includes('college') || text.includes('campus')) return <GraduationCap size={21} strokeWidth={2.2} />;
    if (text.includes('retail') || text.includes('arcade') || text.includes('store') || text.includes('showroom') || text.includes('commercial') || text.includes('shopping')) return <ShoppingBag size={21} strokeWidth={2.2} />;
    if (text.includes('lift') || text.includes('elevator') || text.includes('escalator')) return <ArrowUpCircle size={21} strokeWidth={2.2} />;
    if (text.includes('road') || text.includes('infrastructure') || text.includes('connectivity') || text.includes('corridor')) return <Layers size={21} strokeWidth={2.2} />;
    if (text.includes('vastu') || text.includes('direction') || text.includes('layout')) return <Compass size={21} strokeWidth={2.2} />;
    if (text.includes('management') || text.includes('community') || text.includes('center') || text.includes('estate')) return <HeartHandshake size={21} strokeWidth={2.2} />;
    if (text.includes('structure') || text.includes('earthquake') || text.includes('rcc') || text.includes('formwork') || text.includes('monolithic') || text.includes('facade') || text.includes('building') || text.includes('housing')) return <Building2 size={21} strokeWidth={2.2} />;

    return <Sparkles size={21} strokeWidth={2.2} />;
  };

  // Group into categories
  const categories = useMemo(() => {
    const set = new Set(amenities.map(a => a.category).filter(Boolean));
    return ['ALL', ...Array.from(set)];
  }, [amenities]);

  const filteredAmenities = activeCategory === 'ALL' 
    ? amenities 
    : amenities.filter(a => a.category === activeCategory);

  return (
    <section 
      id="amenities" 
      style={{ 
        background: '#FFFFFF', 
        borderRadius: '24px', 
        padding: '2.75rem 2.5rem', 
        border: '1px solid rgba(226, 232, 240, 0.9)', 
        boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.06)', 
        marginBottom: '3rem',
        position: 'relative'
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '2rem', borderBottom: '1px solid #F1F5F9', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(197, 160, 89, 0.12)', color: 'var(--gold, #C5A059)', border: '1px solid rgba(197, 160, 89, 0.3)', padding: '0.25rem 0.85rem', borderRadius: '9999px', fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', width: 'fit-content' }}>
          <Sparkles size={12} /> Curated Lifestyle & Ecosystem
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginTop: '0.2rem' }}>
          <div>
            <h3 style={{ fontSize: '2.1rem', color: '#0F172A', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', fontWeight: 700 }}>
              World-Class Amenities & Infrastructure
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#64748B', marginTop: '0.35rem', maxWidth: '680px', lineHeight: 1.5 }}>
              Engineered for generational durability, sustainable health & wellness, active recreation, and 24x7 smart multi-tier security.
            </p>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F8FAFC', padding: '0.4rem 0.9rem', borderRadius: '10px', border: '1px solid #E2E8F0', fontSize: '0.82rem', color: '#334155', fontWeight: 600 }}>
            <CheckCircle2 size={16} style={{ color: 'var(--success, #10B981)' }} />
            <span><strong>{amenities.length} Verified</strong> Landmark Features</span>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        {categories.length > 2 && (
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px dashed #E2E8F0' }}>
            {categories.map((cat) => {
              const count = cat === 'ALL' ? amenities.length : amenities.filter(a => a.category === cat).length;
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: isSelected ? 700 : 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    background: isSelected ? 'var(--brand, #0F294A)' : '#F8FAFC',
                    color: isSelected ? '#FFFFFF' : '#475569',
                    border: isSelected ? '1px solid var(--brand, #0F294A)' : '1px solid #E2E8F0',
                    boxShadow: isSelected ? '0 4px 12px rgba(15, 41, 74, 0.25)' : 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <span>{cat === 'ALL' ? 'All Amenities' : cat}</span>
                  <span style={{ 
                    fontSize: '0.7rem', 
                    background: isSelected ? 'rgba(255, 255, 255, 0.2)' : '#E2E8F0',
                    color: isSelected ? '#FFFFFF' : '#64748B',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '9999px',
                    fontWeight: 700
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Modern Luxury Amenities Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
        {filteredAmenities.map((item, idx) => {
          const iconElement = getAmenityIcon(item.name, item.category);

          return (
            <div 
              key={idx} 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.1rem 1.25rem',
                background: '#F8FAFC',
                borderRadius: '14px',
                border: '1.5px solid #E2E8F0',
                boxShadow: '0 2px 6px rgba(15, 23, 42, 0.02)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.borderColor = 'var(--gold, #C5A059)';
                e.currentTarget.style.boxShadow = '0 12px 24px -4px rgba(15, 41, 74, 0.12), 0 0 0 1px rgba(197, 160, 89, 0.3)';
                const iconBadge = e.currentTarget.querySelector('.amenity-icon-badge');
                if (iconBadge) {
                  iconBadge.style.transform = 'scale(1.08) rotate(3deg)';
                  iconBadge.style.boxShadow = '0 6px 16px rgba(15, 41, 74, 0.35), 0 0 12px rgba(197, 160, 89, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = '#F8FAFC';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = '0 2px 6px rgba(15, 23, 42, 0.02)';
                const iconBadge = e.currentTarget.querySelector('.amenity-icon-badge');
                if (iconBadge) {
                  iconBadge.style.transform = 'scale(1) rotate(0deg)';
                  iconBadge.style.boxShadow = '0 3px 8px rgba(15, 41, 74, 0.2)';
                }
              }}
            >
              {/* Luxury Icon Badge */}
              <div 
                className="amenity-icon-badge"
                style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '12px', 
                  background: 'linear-gradient(135deg, #091527 0%, #0F294A 60%, #173B68 100%)', 
                  color: '#F5E7C8', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  boxShadow: '0 3px 8px rgba(15, 41, 74, 0.2)',
                  border: '1.2px solid rgba(197, 160, 89, 0.35)',
                  flexShrink: 0,
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {iconElement}
              </div>

              {/* Text content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {item.category && (
                  <span style={{ 
                    display: 'block', 
                    fontSize: '0.69rem', 
                    color: 'var(--gold, #C5A059)', 
                    textTransform: 'uppercase', 
                    fontWeight: 700, 
                    letterSpacing: '0.08em',
                    lineHeight: 1.2,
                    marginBottom: '0.15rem'
                  }}>
                    {item.category}
                  </span>
                )}
                <strong style={{ 
                  display: 'block', 
                  fontSize: '0.91rem', 
                  color: '#0F172A', 
                  fontWeight: 700, 
                  lineHeight: 1.35 
                }}>
                  {item.name}
                </strong>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Assurance Strip */}
      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem 1.5rem', 
        background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)', 
        borderRadius: '14px', 
        border: '1px solid #E2E8F0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
          <ShieldCheck size={16} style={{ color: 'var(--success, #10B981)' }} />
          <span>VDA & UP-RERA Authorized Standards</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
          <Leaf size={16} style={{ color: 'var(--success, #10B981)' }} />
          <span>Eco-Conscious Green Building Architecture</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
          <Zap size={16} style={{ color: 'var(--gold, #C5A059)' }} />
          <span>24x7 Multi-Grid Power & Water Infrastructure</span>
        </div>
      </div>
    </section>
  );
};
