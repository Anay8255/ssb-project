import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import { useModal } from '../../context/ModalContext';
import { ArrowRight, MapPin, CheckCircle2, ShieldCheck, Download, Sparkles, Building2 } from 'lucide-react';

export const FeaturedProjects = () => {
  const { projects } = useStore();
  const { openEnquiryModal } = useModal();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category.toUpperCase() === filter || p.status.toUpperCase() === filter);

  return (
    <section className="featured-section" style={{ padding: '6rem 0', background: '#F8FAFC' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(224, 84, 43, 0.08)', color: 'var(--brand)', padding: '0.35rem 0.95rem', borderRadius: 'var(--r-pill)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
            <Sparkles size={13} /> CURATED ARCHITECTURAL LANDMARKS
          </div>
          <h2 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontFamily: 'var(--font-heading)', color: 'var(--ink)', marginBottom: '0.85rem', letterSpacing: '-0.02em' }}>
            Signature Real Estate Developments
          </h2>
          <p style={{ maxWidth: '680px', color: 'var(--ink-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Explore our UP-RERA verified master-planned townships, modern high-street retail arcades, and luxury residential towers.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2rem' }}>
            {[
              { id: 'ALL', label: 'All Developments' },
              { id: 'RESIDENTIAL', label: 'Residential' },
              { id: 'COMMERCIAL', label: 'Commercial' },
              { id: 'ONGOING', label: 'Under Construction' },
              { id: 'COMPLETED', label: 'Ready Possession' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                style={{
                  borderRadius: 'var(--r-pill)',
                  padding: '0.55rem 1.15rem',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  border: filter === tab.id ? '1px solid var(--brand)' : '1px solid var(--border)',
                  background: filter === tab.id ? 'var(--brand)' : '#FFFFFF',
                  color: filter === tab.id ? '#FFFFFF' : 'var(--ink)',
                  boxShadow: filter === tab.id ? '0 4px 12px rgba(224, 84, 43, 0.3)' : '0 2px 6px rgba(0,0,0,0.02)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2.5rem' }}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => navigate(`/projects/${project.slug}`)}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--r-2xl, 24px)',
                overflow: 'hidden',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 10px 30px -10px rgba(15, 23, 42, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 25px 45px -12px rgba(15, 23, 42, 0.15)';
                const img = e.currentTarget.querySelector('.project-card-image');
                if (img) img.style.transform = 'scale(1.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(15, 23, 42, 0.06)';
                const img = e.currentTarget.querySelector('.project-card-image');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              {/* Image & Badges */}
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden', background: '#0F172A' }}>
                <img 
                  src={project.featuredImage} 
                  alt={project.title} 
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  className="project-card-image"
                />
                
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.7) 100%)' }} />

                <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <span className="badge badge-brand" style={{ fontSize: '0.72rem', letterSpacing: '0.04em' }}>
                    {project.status.toUpperCase()}
                  </span>
                  <span style={{ 
                    background: 'rgba(15, 23, 42, 0.85)', 
                    color: '#FFF', 
                    backdropFilter: 'blur(8px)', 
                    padding: '0.25rem 0.7rem', 
                    borderRadius: 'var(--r-pill)', 
                    fontSize: '0.72rem', 
                    fontWeight: 600,
                    border: '1px solid rgba(255, 255, 255, 0.2)' 
                  }}>
                    {project.category}
                  </span>
                </div>
                
                <div style={{ 
                  position: 'absolute', 
                  bottom: '0.85rem', 
                  right: '0.85rem', 
                  background: 'rgba(15, 23, 42, 0.88)', 
                  backdropFilter: 'blur(8px)', 
                  color: '#FFF', 
                  padding: '0.35rem 0.75rem', 
                  borderRadius: 'var(--r-pill)', 
                  fontSize: '0.72rem', 
                  fontWeight: 600, 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.35rem',
                  border: '1px solid rgba(255, 255, 255, 0.15)' 
                }}>
                  <ShieldCheck size={13} color="var(--gold)" />
                  <span>RERA: {project.reraNumber}</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                    <MapPin size={13} />
                    <span>{project.locationName}</span>
                  </div>

                  <h3 style={{ fontSize: '1.65rem', marginBottom: '0.5rem', color: 'var(--ink)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}>
                    {project.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--ink-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {project.tagline || project.description?.substring(0, 115) + '...'}
                  </p>
                </div>

                <div>
                  {/* Configurations Strip */}
                  <div style={{ 
                    padding: '1rem 1.25rem', 
                    background: '#F8FAFC', 
                    borderRadius: 'var(--r-xl, 16px)', 
                    marginBottom: '1.5rem', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    border: '1px solid rgba(226, 232, 240, 0.9)' 
                  }}>
                    <div>
                      <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--ink-muted)', display: 'block', fontWeight: 700, letterSpacing: '0.04em' }}>Starting Price</span>
                      <strong style={{ fontSize: '1.2rem', color: 'var(--brand)', fontFamily: 'var(--font-heading)' }}>{project.priceDisplay || 'On Request'}</strong>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--ink-muted)', display: 'block', fontWeight: 700, letterSpacing: '0.04em' }}>Land Area</span>
                      <strong style={{ fontSize: '1rem', color: 'var(--ink)' }}>{project.totalLandArea || 'Master Planned'}</strong>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.75rem' }}>
                    <button 
                      type="button"
                      className="btn btn-primary" 
                      style={{ width: '100%', justifyContent: 'center', borderRadius: 'var(--r-pill)', padding: '0.75rem 1.25rem', fontWeight: 700 }}
                    >
                      <span>Explore Project & Plans</span>
                      <ArrowRight size={14} />
                    </button>
                    
                    <button 
                      type="button"
                      className="btn btn-outline" 
                      onClick={(e) => {
                        e.stopPropagation();
                        openEnquiryModal(project.title, 'Brochure Download');
                      }}
                      style={{ borderRadius: 'var(--r-pill)', padding: '0.75rem 0.95rem', background: '#FFFFFF' }}
                      title="Download Brochure"
                      aria-label="Download Brochure"
                    >
                      <Download size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
