import React, { useState } from 'react';
import { MapPin, Car, Copy, Check, Plane, Train, Hospital, GraduationCap, Compass, ShieldCheck } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export const ProjectLocationMap = ({ project }) => {
  const { openSiteVisitModal } = useModal();
  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  if (!project) return null;

  const embedQuery = encodeURIComponent(
    project.fullAddress || `${project.title}, ${project.locationName || project.city}`
  );
  
  const embedSrc = project.googleMapEmbedUrl 
    ? project.googleMapEmbedUrl 
    : `https://maps.google.com/maps?q=${embedQuery}&z=15&ie=UTF8&iwloc=&output=embed`;

  const handleCopyAddress = () => {
    navigator.clipboard?.writeText(project.fullAddress || project.locationName || 'Babatpur Airport Road, Varanasi, UP');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const transitData = [
    {
      id: 'airport',
      category: 'transit',
      icon: <Plane size={17} className="text-amber-500" />,
      title: "Lal Bahadur Shastri International Airport",
      time: "15 Mins",
      detail: "Direct 4-Lane Babatpur Airport Expressway (NH-56)"
    },
    {
      id: 'ringroad',
      category: 'transit',
      icon: <Compass size={17} className="text-emerald-500" />,
      title: "Harhua Crossing & Varanasi Ring Road",
      time: "5 Mins",
      detail: "Seamless bypass transit across eastern UP"
    },
    {
      id: 'railway',
      category: 'transit',
      icon: <Train size={17} className="text-blue-500" />,
      title: "Varanasi Cantt Railway Junction",
      time: "20 Mins",
      detail: "Direct high-speed arterial corridor connectivity"
    },
    {
      id: 'hospital',
      category: 'health',
      icon: <Hospital size={17} className="text-rose-500" />,
      title: "Heritage & Apex Multi-Speciality Hospitals",
      time: "10 Mins",
      detail: "24x7 emergency medical trauma care access"
    },
    {
      id: 'education',
      category: 'education',
      icon: <GraduationCap size={17} className="text-purple-500" />,
      title: "SHEAT Engineering & Sunbeam Academy",
      time: "8 Mins",
      detail: "Renowned educational and collegiate institutions"
    }
  ];

  const filteredTransit = activeCategory === 'all' 
    ? transitData 
    : transitData.filter(item => item.category === activeCategory);

  return (
    <section 
      id="location-hub"
      className="project-section-card"
    >
      {/* Header Bar */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        flexWrap: 'wrap', 
        gap: '1.25rem', 
        marginBottom: '2rem',
        borderBottom: '1px solid var(--border)',
        paddingBottom: '1.5rem'
      }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(224, 84, 43, 0.08)', color: 'var(--brand)', padding: '0.35rem 0.85rem', borderRadius: 'var(--r-pill)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            <MapPin size={13} /> Strategic Growth Corridor
          </div>
          <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', color: 'var(--ink)', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
            Strategic Location & Transit Hub
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--ink-muted)', marginTop: '0.35rem', maxWidth: '680px', lineHeight: 1.5 }}>
            {project.fullAddress || project.locationName || 'High-visibility arterial corridor with direct access to expressways, airports, and premier civic infrastructure.'}
          </p>
        </div>

        {/* Copy Address Button */}
        <button 
          type="button" 
          onClick={handleCopyAddress}
          className="btn btn-ghost-warm btn-sm"
          style={{ 
            borderRadius: 'var(--r-pill)', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.45rem',
            padding: '0.45rem 1.1rem',
            fontSize: '0.82rem',
            fontWeight: 600,
            border: '1px solid var(--border)'
          }}
        >
          {copied ? <Check size={15} color="var(--success)" /> : <Copy size={15} />}
          <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
        </button>
      </div>

      {/* Main Grid: Interactive Map + Categorized Transit Access */}
      <div className="location-commute-grid">
        
        {/* Modern Map Container */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          borderRadius: 'var(--r-lg)', 
          overflow: 'hidden', 
          border: '1px solid var(--border)', 
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          background: '#F8FAFC',
          minHeight: '340px'
        }}>
          <div style={{
            background: '#F1F5F9',
            padding: '0.65rem 1.15rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border)',
            flexWrap: 'wrap',
            gap: '0.4rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
              <strong style={{ fontSize: '0.78rem', color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Live GPS Pinpoint
              </strong>
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', fontWeight: 500 }}>
              {project.geoCoordinates ? `${project.geoCoordinates.lat}° N, ${project.geoCoordinates.lng}° E` : 'Varanasi, UP'}
            </span>
          </div>

          <div style={{ position: 'relative', flex: 1, minHeight: '300px' }}>
            <iframe
              title={`${project.title} Map Location`}
              src={embedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px', display: 'block', width: '100%', height: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Transit & Commute Section */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.25rem' }}>
          <div>
            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '1.15rem' }}>
              {[
                { id: 'all', label: 'All Destinations' },
                { id: 'transit', label: 'Transit & Airport' },
                { id: 'health', label: 'Healthcare' },
                { id: 'education', label: 'Education' }
              ].map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    border: activeCategory === cat.id ? '1px solid var(--brand)' : '1px solid var(--border)',
                    background: activeCategory === cat.id ? 'var(--brand)' : 'var(--sand-muted)',
                    color: activeCategory === cat.id ? '#FFFFFF' : 'var(--ink)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--r-pill)',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Commute Cards List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {filteredTransit.map(item => (
                <div 
                  key={item.id} 
                  style={{ 
                    background: '#FAFAFA', 
                    padding: '0.8rem 1rem', 
                    borderRadius: 'var(--r-md)', 
                    border: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '8px', 
                      background: '#FFF', 
                      border: '1px solid var(--border)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--ink)', fontWeight: 600 }}>
                        {item.title}
                      </strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', display: 'block', marginTop: '0.05rem' }}>
                        {item.detail}
                      </span>
                    </div>
                  </div>

                  <span style={{ 
                    background: 'var(--sand-muted)', 
                    color: 'var(--brand)', 
                    padding: '0.25rem 0.65rem', 
                    borderRadius: 'var(--r-pill)', 
                    fontSize: '0.78rem', 
                    fontWeight: 700, 
                    border: '1px solid var(--border)',
                    whiteSpace: 'nowrap'
                  }}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Complimentary Chauffeur Site Tour Card */}
          <div style={{ 
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', 
            padding: '1.15rem 1.25rem', 
            borderRadius: 'var(--r-lg)', 
            color: '#FFF', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            flexWrap: 'wrap', 
            gap: '0.85rem' 
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--gold)', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase' }}>
                <ShieldCheck size={13} /> VIP Site Visit
              </div>
              <strong style={{ display: 'block', fontSize: '0.95rem', color: '#FFF', marginTop: '0.15rem' }}>
                Inspect the campus in person
              </strong>
              <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
                Complimentary pickup & drop in an AC Cab.
              </span>
            </div>

            <button 
              type="button" 
              className="btn btn-primary btn-sm"
              onClick={() => openSiteVisitModal(project.title)}
              style={{ 
                borderRadius: 'var(--r-pill)',
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.4rem',
                padding: '0.5rem 1.15rem',
                fontSize: '0.82rem'
              }}
            >
              <Car size={14} /> Book Free Cab
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
