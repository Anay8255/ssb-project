import React from 'react';
import { 
  Sparkles, ShieldCheck, Camera, Droplets, Zap, Car, Building2, 
  Flame, Compass, Users, Waves, Trophy, Trees, 
  GraduationCap, ShoppingBag, ArrowUpCircle, Layers, CheckCircle2,
  Store, Eye, Shield, Check
} from 'lucide-react';

export const AmenitiesGrid = ({ amenities }) => {
  if (!amenities || amenities.length === 0) return null;

  // High-precision Lucide icon mapper
  const getAmenityIcon = (name = '', category = '') => {
    const text = (name + ' ' + category).toLowerCase();
    
    if (text.includes('cctv') || text.includes('camera') || text.includes('surveillance')) return <Camera size={20} strokeWidth={2} />;
    if (text.includes('security') || text.includes('rfid') || text.includes('gating') || text.includes('guard')) return <ShieldCheck size={20} strokeWidth={2} />;
    if (text.includes('fire') || text.includes('hydrant') || text.includes('safety')) return <Flame size={20} strokeWidth={2} />;
    if (text.includes('water') || text.includes('stp') || text.includes('rainwater') || text.includes('drainage')) return <Droplets size={20} strokeWidth={2} />;
    if (text.includes('power') || text.includes('backup') || text.includes('electricity') || text.includes('generator')) return <Zap size={20} strokeWidth={2} />;
    if (text.includes('parking') || text.includes('car') || text.includes('vehicle')) return <Car size={20} strokeWidth={2} />;
    if (text.includes('swimming') || text.includes('pool') || text.includes('deck')) return <Waves size={20} strokeWidth={2} />;
    if (text.includes('gym') || text.includes('fitness') || text.includes('sports') || text.includes('court')) return <Trophy size={20} strokeWidth={2} />;
    if (text.includes('garden') || text.includes('park') || text.includes('green') || text.includes('landscaping')) return <Trees size={20} strokeWidth={2} />;
    if (text.includes('atrium') || text.includes('boulevard') || text.includes('plaza') || text.includes('lobby')) return <Sparkles size={20} strokeWidth={2} />;
    if (text.includes('retail') || text.includes('store') || text.includes('showroom') || text.includes('commercial') || text.includes('frontage')) return <Store size={20} strokeWidth={2} />;
    if (text.includes('lift') || text.includes('elevator') || text.includes('escalator')) return <ArrowUpCircle size={20} strokeWidth={2} />;
    if (text.includes('facade') || text.includes('glass') || text.includes('architecture') || text.includes('lighting')) return <Building2 size={20} strokeWidth={2} />;
    if (text.includes('road') || text.includes('circulation') || text.includes('infrastructure')) return <Layers size={20} strokeWidth={2} />;
    
    return <CheckCircle2 size={20} strokeWidth={2} />;
  };

  // Helper for subtitle descriptions
  const getAmenitySubtitle = (name = '', category = '') => {
    const text = (name + ' ' + category).toLowerCase();
    if (text.includes('frontage') || text.includes('retail')) return 'Ground & first floor double-height display';
    if (text.includes('parking')) return 'Wide 40ft circulation & dedicated bays';
    if (text.includes('power') || text.includes('backup')) return 'Uninterrupted 100% dual-source system';
    if (text.includes('lift') || text.includes('elevator')) return 'High-capacity elevators & smart escalators';
    if (text.includes('fire')) return 'Certified multi-tier pressure hydrant network';
    if (text.includes('cctv') || text.includes('security')) return '24×7 high-definition perimeter surveillance';
    if (text.includes('atrium') || text.includes('boulevard')) return 'Grand entrance with designer landscape';
    if (text.includes('facade') || text.includes('glass')) return 'Energy-efficient glazing & LED lighting';
    return 'Built to verified statutory standards';
  };

  return (
    <section 
      id="amenities" 
      className="editorial-card-section"
      style={{ padding: '2.5rem 2rem' }}
    >
      {/* Header Bar */}
      <div style={{ marginBottom: '2rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(197, 160, 89, 0.12)', color: 'var(--gold, #C5A059)', border: '1px solid rgba(197, 160, 89, 0.3)', padding: '0.25rem 0.85rem', borderRadius: '9999px', fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', width: 'fit-content' }}>
          <Sparkles size={12} /> Strategic Commercial Infrastructure
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginTop: '0.2rem' }}>
          <div>
            <h3 style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.1rem)', color: '#0F172A', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', fontWeight: 700 }}>
              Campus Amenities & Engineering Provisions
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#64748B', marginTop: '0.35rem', maxWidth: '680px', lineHeight: 1.5 }}>
              Engineered for high pedestrian footfall, seamless corporate mobility, uninterrupted power, and smart multi-tier security.
            </p>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: '#F8FAFC', padding: '0.4rem 0.95rem', borderRadius: '12px', border: '1px solid #E2E8F0', fontSize: '0.8rem', color: '#334155', fontWeight: 600 }}>
            <CheckCircle2 size={16} style={{ color: '#10B981' }} />
            <span><strong>{amenities.length} Verified</strong> Specifications</span>
          </div>
        </div>
      </div>

      {/* 2x4 on Mobile / 4-Column on Desktop Luxury Card Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '1.15rem' 
      }}>
        {amenities.map((item, idx) => {
          const icon = getAmenityIcon(item.name, item.category);
          const subtitle = getAmenitySubtitle(item.name, item.category);

          return (
            <div 
              key={idx} 
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.95rem',
                padding: '1.25rem 1.15rem',
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 15px rgba(15, 23, 42, 0.03)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'var(--gold, #C5A059)';
                e.currentTarget.style.boxShadow = '0 12px 25px -4px rgba(15, 41, 74, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(15, 23, 42, 0.03)';
              }}
            >
              {/* Gold Top Accent Line on Hover */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #0F294A 0%, var(--gold, #C5A059) 100%)',
                opacity: 0.8
              }} />

              {/* Obsidian Luxury Icon Box */}
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0F294A 0%, #1E3A5F 100%)',
                color: 'var(--gold, #C5A059)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(15, 41, 74, 0.2)'
              }}>
                {icon}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{
                  fontSize: '0.68rem',
                  textTransform: 'uppercase',
                  color: 'var(--gold, #C5A059)',
                  fontWeight: 700,
                  letterSpacing: '0.07em',
                  display: 'block',
                  marginBottom: '0.2rem'
                }}>
                  {item.category || 'INFRASTRUCTURE'}
                </span>
                
                <h4 style={{
                  fontSize: '0.94rem',
                  color: '#0F172A',
                  fontWeight: 700,
                  margin: '0 0 0.25rem 0',
                  lineHeight: 1.25,
                  fontFamily: 'var(--font-heading)'
                }}>
                  {item.name}
                </h4>

                <p style={{
                  fontSize: '0.78rem',
                  color: '#64748B',
                  margin: 0,
                  lineHeight: 1.45,
                  fontWeight: 400
                }}>
                  {subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
