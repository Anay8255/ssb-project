import React, { useState } from 'react';
import { MapPin, Copy, Check, Plane, Compass, Train, Hospital, GraduationCap, Building2 } from 'lucide-react';
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
    navigator.clipboard?.writeText(project.fullAddress || project.locationName || 'Lucknow, Uttar Pradesh');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const transitData = [
    {
      id: 'expressway',
      category: 'transit',
      icon: <Compass size={17} style={{ color: '#F59E0B' }} />,
      title: "Direct Arterial Highway Access",
      time: "2 Mins",
      detail: "Strategic prime growth corridor with wide multilane connectivity"
    },
    {
      id: 'transit-hub',
      category: 'transit',
      icon: <Train size={17} style={{ color: '#3B82F6' }} />,
      title: "Metro & Key Railway Junctions",
      time: "15 Mins",
      detail: "Direct high-speed corridor to central business districts"
    },
    {
      id: 'airport',
      category: 'transit',
      icon: <Plane size={17} style={{ color: '#10B981' }} />,
      title: "Chaudhary Charan Singh International Airport",
      time: "25 Mins",
      detail: "Signal-free expressway transit corridor"
    },
    {
      id: 'hospital',
      category: 'civic',
      icon: <Hospital size={17} style={{ color: '#EF4444' }} />,
      title: "Premier Multi-Speciality Medical Centers",
      time: "10 Mins",
      detail: "24x7 emergency medical & trauma healthcare facilities"
    },
    {
      id: 'commercial',
      category: 'commercial',
      icon: <Building2 size={17} style={{ color: '#8B5CF6' }} />,
      title: "Financial Hubs & High-Street Retail",
      time: "5 Mins",
      detail: "High-density residential catchments & commercial avenues"
    }
  ];

  const filteredTransit = activeCategory === 'all' 
    ? transitData 
    : transitData.filter(item => item.category === activeCategory);

  return (
    <section 
      id="location-hub"
      className="project-card-section"
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(197, 160, 89, 0.12)', color: 'var(--gold, #C5A059)', border: '1px solid rgba(197, 160, 89, 0.3)', padding: '0.25rem 0.85rem', borderRadius: 'var(--r-pill)', fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            <MapPin size={13} /> Strategic Growth Corridor
          </div>
          <h3 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.2rem)', color: 'var(--ink)', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
            Strategic Location & Transit Intelligence
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--ink-muted)', marginTop: '0.35rem', maxWidth: '680px', lineHeight: 1.5 }}>
            {project.fullAddress || project.locationName || 'High-visibility arterial corridor with direct access to expressways, airports, and commercial centers.'}
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
            padding: '0.5rem 1.15rem',
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
      <div className="location-hub-grid">
        
        {/* Modern Map Container */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          borderRadius: 'var(--r-xl, 18px)', 
          overflow: 'hidden', 
          border: '1px solid var(--border)', 
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          background: '#F8FAFC'
        }}>
          <div style={{
            background: '#F1F5F9',
            padding: '0.65rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
              <strong style={{ fontSize: '0.78rem', color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Live GPS Pinpoint
              </strong>
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', fontWeight: 500 }}>
              {project.geoCoordinates ? `${project.geoCoordinates.lat}° N, ${project.geoCoordinates.lng}° E` : 'Lucknow, UP'}
            </span>
          </div>

          <div style={{ position: 'relative', flex: 1, minHeight: '340px' }}>
            <iframe
              title={`${project.title} Map Location`}
              src={embedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '340px', display: 'block', width: '100%', height: '100%' }}
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
            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {[
                { id: 'all', label: 'All Destinations' },
                { id: 'transit', label: 'Expressways & Transit' },
                { id: 'civic', label: 'Healthcare & Civic' },
                { id: 'commercial', label: 'Commercial Hubs' }
              ].map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    border: activeCategory === cat.id ? '1px solid var(--brand, #0F294A)' : '1px solid var(--border)',
                    background: activeCategory === cat.id ? 'var(--brand, #0F294A)' : '#F8FAFC',
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

            {/* Transit List Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {filteredTransit.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    background: '#F8FAFC',
                    borderRadius: 'var(--r-md, 12px)',
                    border: '1px solid var(--border)',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '8px',
                      background: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border)',
                      flexShrink: 0
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.88rem', color: 'var(--ink)', display: 'block' }}>
                        {item.title}
                      </strong>
                      <span style={{ fontSize: '0.76rem', color: 'var(--ink-muted)' }}>
                        {item.detail}
                      </span>
                    </div>
                  </div>

                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--brand, #0F294A)',
                    background: 'rgba(15, 41, 74, 0.08)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: 'var(--r-pill)',
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ paddingTop: '0.5rem' }}>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => openSiteVisitModal(project.title)}
              style={{ borderRadius: 'var(--r-pill)', width: '100%', justifyContent: 'center', padding: '0.65rem' }}
            >
              <MapPin size={14} /> Schedule Free Cab Pickup to Location
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
