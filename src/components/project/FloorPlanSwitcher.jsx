import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { SEED_DATA } from '../../data/seedData';
import { ZoomIn, Download, Car, ChevronLeft, ChevronRight, Layers, Compass, Eye, ShieldCheck, CheckCircle2, Ruler } from 'lucide-react';

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

  const handleTabChange = (idx) => {
    setActiveConfigIndex(idx);
    setActiveSlideIndex(0);
  };

  return (
    <section 
      id="floor-plans" 
      className="project-section-card"
    >
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(224, 84, 43, 0.08)', color: 'var(--brand)', padding: '0.35rem 0.85rem', borderRadius: 'var(--r-pill)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            <Ruler size={13} /> Precision Architectural Blueprints
          </div>
          <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', color: 'var(--ink)', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Floor Plans & Spatial Configurations
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--ink-muted)', marginTop: '0.35rem', maxWidth: '650px', lineHeight: 1.5 }}>
            Engineered for optimum natural light, cross-ventilation, and 100% Vastu compliance with certified UP-RERA carpet areas.
          </p>
        </div>

        {/* Global Blueprint Action */}
        <div style={{ display: 'flex', gap: '0.75rem', width: 'auto' }}>
          <button 
            type="button" 
            className="btn btn-outline btn-sm"
            onClick={() => openEnquiryModal(project.title, `All Floor Plans PDF Dossier`)}
            style={{ borderRadius: 'var(--r-pill)', fontWeight: 600 }}
          >
            <Download size={14} /> Full Plan Dossier
          </button>
        </div>
      </div>

      {/* Luxury Configuration Navigation Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {project.configurations.map((cfg, idx) => {
          const isActive = activeConfigIndex === idx;
          return (
            <button
              key={cfg.id || idx}
              type="button"
              onClick={() => handleTabChange(idx)}
              style={{
                borderRadius: 'var(--r-pill)',
                padding: '0.55rem 1.15rem',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: isActive ? '1px solid var(--brand)' : '1px solid var(--border)',
                background: isActive ? 'linear-gradient(135deg, var(--brand) 0%, #C4431C 100%)' : '#F8FAFC',
                color: isActive ? '#FFFFFF' : 'var(--ink)',
                boxShadow: isActive ? '0 6px 20px -4px rgba(224, 84, 43, 0.4)' : 'none',
                transform: isActive ? 'translateY(-1px)' : 'none'
              }}
            >
              <span>{cfg.bhkType}</span>
              <span style={{ 
                background: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.06)', 
                padding: '0.12rem 0.45rem', 
                borderRadius: 'var(--r-pill)', 
                fontSize: '0.72rem',
                fontWeight: 500
              }}>
                {cfg.superBuiltupArea} Sq.Ft.
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Studio Viewport & Spec Sheet Grid */}
      <div className="floor-plan-grid">
        
        {/* Left Column: Architectural Blueprint Studio Canvas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div 
            className="floor-plan-canvas"
            onClick={() => openLightbox(currentImage, `${project.title} — ${activeCfg.title} (Plan ${activeSlideIndex + 1}/${images.length})`, `${activeCfg.superBuiltupArea} Sq. Ft. (${activeCfg.bhkType})`)}
          >
            {/* Top Studio Indicator */}
            <div style={{
              position: 'absolute',
              top: '0.85rem',
              left: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              zIndex: 3
            }}>
              <span style={{
                background: 'rgba(15, 23, 42, 0.85)',
                color: '#CBD5E1',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--r-pill)',
                fontSize: '0.68rem',
                fontWeight: 600,
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)',
                letterSpacing: '0.04em'
              }}>
                CAD VIEW · {activeSlideIndex + 1} OF {images.length}
              </span>
            </div>

            {/* Top Right Certified Badge */}
            <div style={{
              position: 'absolute',
              top: '0.85rem',
              right: '0.85rem',
              background: 'rgba(34, 197, 94, 0.15)',
              color: '#4ADE80',
              border: '1px solid rgba(74, 222, 128, 0.3)',
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--r-pill)',
              fontSize: '0.68rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              backdropFilter: 'blur(8px)',
              zIndex: 3
            }}>
              <ShieldCheck size={12} /> RERA APPROVED
            </div>

            {/* High-Resolution Blueprint Image */}
            <img 
              key={currentImage}
              src={currentImage} 
              alt={`${activeCfg.title} Layout Schematic`} 
              style={{ 
                maxWidth: '92%', 
                maxHeight: '340px', 
                objectFit: 'contain', 
                borderRadius: 'var(--r-md)',
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
                transition: 'transform 0.4s ease, opacity 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            />

            {/* Slideshow Controls (shown if more than 1 image) */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous Floor Plan Slide"
                  style={{
                    position: 'absolute',
                    left: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(15, 23, 42, 0.85)',
                    color: '#FFF',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(8px)',
                    zIndex: 4,
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--brand)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(15, 23, 42, 0.85)'; }}
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next Floor Plan Slide"
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(15, 23, 42, 0.85)',
                    color: '#FFF',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(8px)',
                    zIndex: 4,
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--brand)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(15, 23, 42, 0.85)'; }}
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}

            {/* Click to Zoom Pill */}
            <div style={{ 
              position: 'absolute', 
              bottom: '0.85rem', 
              right: '0.85rem', 
              background: 'rgba(15, 23, 42, 0.85)', 
              color: '#FFF', 
              padding: '0.35rem 0.75rem', 
              borderRadius: 'var(--r-pill)', 
              fontSize: '0.72rem', 
              fontWeight: 600,
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.35rem', 
              border: '1px solid rgba(255, 255, 255, 0.2)', 
              backdropFilter: 'blur(8px)',
              pointerEvents: 'none'
            }}>
              <ZoomIn size={13} color="var(--gold)" />
              <span>Click to Zoom</span>
            </div>
          </div>

          {/* Multi-Angle Thumbnail Reel */}
          {images.length > 1 && (
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center', padding: '0.25rem 0', flexWrap: 'wrap' }}>
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveSlideIndex(idx)}
                  style={{
                    width: '64px',
                    height: '46px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    border: activeSlideIndex === idx ? '2px solid var(--brand)' : '1px solid var(--border)',
                    padding: 0,
                    cursor: 'pointer',
                    background: '#0F172A',
                    opacity: activeSlideIndex === idx ? 1 : 0.65,
                    transition: 'all 0.2s ease',
                    boxShadow: activeSlideIndex === idx ? '0 0 10px rgba(224, 84, 43, 0.4)' : 'none'
                  }}
                >
                  <img src={img} alt={`Angle ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Architectural Metrics & Specifications Card */}
        <div className="floor-plan-specs-card">
          <div>
            {/* Title & Category Badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="badge badge-brand" style={{ fontSize: '0.72rem' }}>
                {activeCfg.bhkType} ARCHITECTURAL PLAN
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', fontWeight: 600 }}>
                {project.title}
              </span>
            </div>

            <h4 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.65rem)', color: 'var(--ink)', margin: '0 0 0.4rem 0', fontFamily: 'var(--font-heading)' }}>
              {activeCfg.title}
            </h4>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.45rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--ink-muted)' }}>Estimated Investment:</span>
              <strong style={{ fontSize: '1.25rem', color: 'var(--brand)', fontFamily: 'var(--font-heading)' }}>
                {activeCfg.priceDisplay || activeCfg.priceEstimate || 'Price On Request'}
              </strong>
            </div>

            {/* Architectural Area Metric Table */}
            <div className="floor-plan-matrix">
              <div>
                <span style={{ fontSize: '0.68rem', color: 'var(--ink-muted)', textTransform: 'uppercase', fontWeight: 700, display: 'block', letterSpacing: '0.05em' }}>
                  Saleable / Super Area
                </span>
                <strong style={{ fontSize: '1.15rem', color: 'var(--ink)' }}>
                  {activeCfg.superBuiltupArea} <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>Sq. Ft.</span>
                </strong>
              </div>

              <div>
                <span style={{ fontSize: '0.68rem', color: 'var(--brand)', textTransform: 'uppercase', fontWeight: 700, display: 'block', letterSpacing: '0.05em' }}>
                  RERA Carpet Area
                </span>
                <strong style={{ fontSize: '1.15rem', color: 'var(--brand)' }}>
                  {activeCfg.carpetArea} <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>Sq. Ft.</span>
                </strong>
              </div>

              {activeCfg.balconyArea && (
                <div>
                  <span style={{ fontSize: '0.68rem', color: 'var(--ink-muted)', textTransform: 'uppercase', fontWeight: 700, display: 'block', letterSpacing: '0.05em' }}>
                    Balcony Space
                  </span>
                  <strong style={{ fontSize: '1.05rem', color: 'var(--ink)' }}>
                    {activeCfg.balconyArea} <span style={{ fontSize: '0.78rem', fontWeight: 500 }}>Sq. Ft.</span>
                  </strong>
                </div>
              )}

              <div>
                <span style={{ fontSize: '0.68rem', color: 'var(--ink-muted)', textTransform: 'uppercase', fontWeight: 700, display: 'block', letterSpacing: '0.05em' }}>
                  Configuration
                </span>
                <strong style={{ fontSize: '1rem', color: 'var(--ink)' }}>
                  {activeCfg.bedrooms > 0 ? `${activeCfg.bedrooms} Bed` : 'Commercial'} · {activeCfg.bathrooms} Bath
                </strong>
              </div>
            </div>

            {/* Design Highlights & Vastu Checklist */}
            {activeCfg.highlight && (
              <div style={{ background: 'rgba(224, 84, 43, 0.05)', borderRadius: 'var(--r-md)', padding: '0.85rem 1.15rem', border: '1px solid rgba(224, 84, 43, 0.15)', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--brand)', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '0.2rem' }}>
                  📐 Architectural Highlights
                </span>
                <p style={{ fontSize: '0.85rem', color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>
                  {activeCfg.highlight}
                </p>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="floor-plan-cta-grid">
            <button 
              type="button"
              className="btn btn-primary" 
              onClick={() => openEnquiryModal(project.title, `Official Blueprint PDF for ${activeCfg.title}`)}
              style={{ justifyContent: 'center', padding: '0.7rem 1rem', fontSize: '0.85rem' }}
            >
              <Download size={15} /> Download Blueprint
            </button>
            <button 
              type="button"
              className="btn btn-outline" 
              onClick={() => openSiteVisitModal(project.title)}
              style={{ justifyContent: 'center', padding: '0.7rem 1rem', background: '#FFFFFF', fontSize: '0.85rem' }}
            >
              <Car size={15} /> Inspect Sample Unit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
