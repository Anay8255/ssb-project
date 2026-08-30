import React, { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import { SEED_DATA } from '../../data/seedData';
import { ZoomIn, Download, Car, ChevronLeft, ChevronRight } from 'lucide-react';

export const FloorPlanSwitcher = ({ project }) => {
  const [activeConfigIndex, setActiveConfigIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { openLightbox, openEnquiryModal, openSiteVisitModal } = useModal();

  if (!project || !project.configurations || project.configurations.length === 0) return null;

  const activeCfg = project.configurations[activeConfigIndex] || project.configurations[0];

  // Guaranteed resolution from current state or SEED_DATA definition
  const seedProject = SEED_DATA.projects.find(p => p.id === project?.id || p.slug === project?.slug);
  const seedCfg = seedProject?.configurations?.[activeConfigIndex];

  const images = (activeCfg?.floorPlanImages && activeCfg.floorPlanImages.length > 0)
    ? activeCfg.floorPlanImages
    : (seedCfg?.floorPlanImages && seedCfg.floorPlanImages.length > 0)
    ? seedCfg.floorPlanImages
    : [activeCfg?.floorPlanUrl || seedCfg?.floorPlanUrl].filter(Boolean);

  const currentImage = images[activeSlideIndex] || images[0] || activeCfg.floorPlanUrl;

  const nextSlide = (e) => {
    e?.stopPropagation();
    setActiveSlideIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e?.stopPropagation();
    setActiveSlideIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Reset slide index when changing configuration tabs
  const handleTabChange = (idx) => {
    setActiveConfigIndex(idx);
    setActiveSlideIndex(0);
  };

  return (
    <div className="floor-plan-module" style={{ background: '#FFF', borderRadius: 'var(--r-xl)', padding: '2.5rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', marginBottom: '2.5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <span className="eyebrow">ARCHITECTURAL BLUEPRINTS & GALLERY</span>
        <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', margin: 0 }}>Floor Plans & Layouts</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginTop: '0.25rem' }}>
          Explore precision Vastu-compliant layout plans, exterior elevations & certified RERA carpet area dimensions
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
        {project.configurations.map((cfg, idx) => (
          <button
            key={cfg.id || idx}
            onClick={() => handleTabChange(idx)}
            className={`btn btn-sm ${activeConfigIndex === idx ? 'btn-primary' : 'btn-ghost-warm'}`}
            style={{ borderRadius: 'var(--r-pill)' }}
          >
            {cfg.bhkType} ({cfg.superBuiltupArea} Sq.Ft.)
          </button>
        ))}
      </div>

      {/* Detail Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
        {/* Slideshow Image Frame */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div 
            style={{ 
              position: 'relative', 
              background: '#0F172A', 
              borderRadius: 'var(--r-lg)', 
              overflow: 'hidden', 
              padding: '1.5rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              cursor: 'zoom-in', 
              minHeight: '340px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: 'inset 0 0 25px rgba(0, 0, 0, 0.5)'
            }}
            onClick={() => openLightbox(currentImage, `${project.title} — ${activeCfg.title} (Photo ${activeSlideIndex + 1}/${images.length})`, `${activeCfg.superBuiltupArea} Sq. Ft. (${activeCfg.bhkType})`)}
          >
            <img 
              key={currentImage}
              src={currentImage} 
              alt={`${activeCfg.title} Slide ${activeSlideIndex + 1}`} 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '320px', 
                objectFit: 'contain', 
                borderRadius: 'var(--r-sm)',
                transition: 'opacity 0.3s ease'
              }}
            />

            {/* Slideshow Controls (shown if more than 1 image) */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                  style={{
                    position: 'absolute',
                    left: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(15, 23, 42, 0.75)',
                    color: '#FFF',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(6px)',
                    zIndex: 2,
                    transition: 'background 0.2s'
                  }}
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next Slide"
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(15, 23, 42, 0.75)',
                    color: '#FFF',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(6px)',
                    zIndex: 2,
                    transition: 'background 0.2s'
                  }}
                >
                  <ChevronRight size={20} />
                </button>

                {/* Counter Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(15, 23, 42, 0.8)',
                  color: '#FFF',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--r-pill)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(6px)'
                }}>
                  {activeSlideIndex + 1} / {images.length}
                </div>
              </>
            )}

            {/* Click to Zoom Badge */}
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(0,0,0,0.75)', color: '#FFF', padding: '0.35rem 0.75rem', borderRadius: 'var(--r-pill)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)' }}>
              <ZoomIn size={14} />
              <span>Click to Zoom</span>
            </div>
          </div>

          {/* Thumbnail Strip (if multiple images) */}
          {images.length > 1 && (
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveSlideIndex(idx)}
                  style={{
                    width: '56px',
                    height: '42px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    border: activeSlideIndex === idx ? '2px solid var(--brand)' : '1px solid var(--border)',
                    padding: 0,
                    cursor: 'pointer',
                    background: '#0F172A',
                    opacity: activeSlideIndex === idx ? 1 : 0.6,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <img src={img} alt={`Thumb ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info Box */}
        <div>
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="badge badge-brand" style={{ marginBottom: '0.5rem' }}>{activeCfg.bhkType} Configuration</span>
            <h4 style={{ fontSize: '1.5rem', color: 'var(--ink)', margin: '0.25rem 0' }}>{activeCfg.title}</h4>
            <p style={{ fontSize: '1rem', color: 'var(--ink-muted)' }}>
              Estimated Price: <strong style={{ color: 'var(--brand)' }}>{activeCfg.priceEstimate || 'Price On Request'}</strong>
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', background: 'var(--sand-muted)', padding: '1.25rem', borderRadius: 'var(--r-md)', marginBottom: '1.75rem', border: '1px solid var(--border)' }}>
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', textTransform: 'uppercase', fontWeight: 600, display: 'block' }}>Saleable Area</span>
              <strong style={{ fontSize: '1.1rem', color: 'var(--ink)' }}>{activeCfg.superBuiltupArea} Sq. Ft.</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', textTransform: 'uppercase', fontWeight: 600, display: 'block' }}>Covered / Carpet</span>
              <strong style={{ fontSize: '1.1rem', color: 'var(--brand)' }}>{activeCfg.carpetArea} Sq. Ft. {activeCfg.coveredAreaSqM ? `(${activeCfg.coveredAreaSqM} m²)` : ''}</strong>
            </div>
            {activeCfg.balconyArea && (
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', textTransform: 'uppercase', fontWeight: 600, display: 'block' }}>Balcony Area</span>
                <strong style={{ fontSize: '1.05rem', color: 'var(--ink)' }}>{activeCfg.balconyArea} Sq. Ft.</strong>
              </div>
            )}
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', textTransform: 'uppercase', fontWeight: 600, display: 'block' }}>Bedrooms & Baths</span>
              <strong style={{ fontSize: '1rem', color: 'var(--ink)' }}>{activeCfg.bedrooms} Beds | {activeCfg.bathrooms} Baths</strong>
            </div>
            {activeCfg.balconies && (
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', textTransform: 'uppercase', fontWeight: 600, display: 'block' }}>Balconies</span>
                <strong style={{ fontSize: '1rem', color: 'var(--ink)' }}>{activeCfg.balconies} Wide Balconies</strong>
              </div>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <button 
              className="btn btn-primary" 
              onClick={() => openEnquiryModal(project.title, `Floor Plan PDF for ${activeCfg.title}`)}
            >
              <Download size={16} /> Download PDF
            </button>
            <button 
              className="btn btn-ghost-warm" 
              onClick={() => openSiteVisitModal(project.title)}
            >
              <Car size={16} /> Inspect Sample Flat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
