import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { SEED_DATA } from '../../data/seedData';
import { ZoomIn, Download, Car, ChevronLeft, ChevronRight, Ruler, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const FloorPlanSwitcher = ({ project }) => {
  const [activeConfigIndex, setActiveConfigIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { openLightbox, openEnquiryModal, openSiteVisitModal } = useModal();

  if (!project || !project.configurations || project.configurations.length === 0) return null;

  const activeCfg = project.configurations[activeConfigIndex] || project.configurations[0];

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
      className="project-card-section"
    >
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(197, 160, 89, 0.12)', color: 'var(--gold, #C5A059)', border: '1px solid rgba(197, 160, 89, 0.3)', padding: '0.25rem 0.85rem', borderRadius: 'var(--r-pill)', fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            <Ruler size={13} /> Precision Architectural Blueprints
          </div>
          <h3 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.2rem)', color: 'var(--ink)', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Floor Plans & Spatial Configurations
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--ink-muted)', marginTop: '0.35rem', maxWidth: '650px', lineHeight: 1.5 }}>
            Engineered for optimum efficiency, high-traffic commercial circulation, and certified UP-RERA carpet areas.
          </p>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button 
            type="button" 
            className="btn btn-outline btn-sm"
            onClick={() => openEnquiryModal(project.title, `All Floor Plans PDF Dossier`)}
            style={{ borderRadius: 'var(--r-pill)', fontWeight: 600 }}
          >
            <Download size={14} /> Download PDF Dossier
          </button>
        </div>
      </div>

      {/* Configuration Navigation Tabs */}
      <div style={{ display: 'flex', gap: '0.55rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
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
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                border: isActive ? '1px solid var(--brand, #0F294A)' : '1px solid var(--border)',
                background: isActive ? 'var(--brand, #0F294A)' : '#F8FAFC',
                color: isActive ? '#FFFFFF' : 'var(--ink)',
                boxShadow: isActive ? '0 4px 14px rgba(15, 41, 74, 0.3)' : 'none',
                transform: isActive ? 'translateY(-1px)' : 'none'
              }}
            >
              <span>{cfg.bhkType}</span>
              <span style={{ 
                background: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.06)', 
                padding: '0.15rem 0.45rem', 
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
            style={{ 
              position: 'relative', 
              background: 'linear-gradient(180deg, #0A1120 0%, #0F172A 100%)', 
              borderRadius: 'var(--r-xl, 18px)', 
              overflow: 'hidden', 
              padding: '2.5rem 1.5rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              cursor: 'zoom-in', 
              minHeight: '380px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.6), 0 15px 30px -10px rgba(0, 0, 0, 0.3)',
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
            onClick={() => openLightbox(currentImage, `${project.title} — ${activeCfg.title} (Plan ${activeSlideIndex + 1}/${images.length})`, `${activeCfg.superBuiltupArea} Sq. Ft. (${activeCfg.bhkType})`)}
          >
            {/* Top Studio Indicator */}
            <div style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
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
                fontSize: '0.7rem',
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
              top: '1rem',
              right: '1rem',
              background: 'rgba(34, 197, 94, 0.15)',
              color: '#4ADE80',
              border: '1px solid rgba(74, 222, 128, 0.3)',
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--r-pill)',
              fontSize: '0.7rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              backdropFilter: 'blur(8px)',
              zIndex: 3
            }}>
              <ShieldCheck size={12} /> RERA APPROVED
            </div>

            {/* Blueprint Image */}
            <img 
              key={currentImage}
              src={currentImage} 
              alt={`${activeCfg.title} Layout Schematic`} 
              style={{ 
                maxWidth: '94%', 
                maxHeight: '340px', 
                objectFit: 'contain', 
                borderRadius: 'var(--r-md)',
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
                transition: 'transform 0.4s ease'
              }}
            />

            {/* Slideshow Controls */}
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
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(8px)',
                    zIndex: 4
                  }}
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
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(8px)',
                    zIndex: 4
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Right Column: Spec Matrix Sheet */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.25rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--gold, #C5A059)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
              CONFIGURATION SPECIFICATION
            </span>
            <h4 style={{ fontSize: '1.45rem', color: 'var(--ink)', fontFamily: 'var(--font-heading)', margin: '0 0 0.85rem 0' }}>
              {activeCfg.title}
            </h4>

            {activeCfg.highlight && (
              <p style={{ fontSize: '0.86rem', color: 'var(--ink-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                {activeCfg.highlight}
              </p>
            )}

            {/* Area Matrix Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ background: '#F8FAFC', padding: '0.85rem 1rem', borderRadius: 'var(--r-md, 12px)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 700, display: 'block' }}>
                  Super Built-up Area
                </span>
                <strong style={{ fontSize: '1.15rem', color: 'var(--brand, #0F294A)', fontFamily: 'var(--font-heading)' }}>
                  {activeCfg.superBuiltupArea} Sq.Ft.
                </strong>
              </div>

              <div style={{ background: '#F8FAFC', padding: '0.85rem 1rem', borderRadius: 'var(--r-md, 12px)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 700, display: 'block' }}>
                  Carpet Area (RERA)
                </span>
                <strong style={{ fontSize: '1.15rem', color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}>
                  {activeCfg.carpetArea} Sq.Ft.
                </strong>
              </div>

              {activeCfg.coveredArea && (
                <div style={{ background: '#F8FAFC', padding: '0.85rem 1rem', borderRadius: 'var(--r-md, 12px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 700, display: 'block' }}>
                    Covered Area
                  </span>
                  <strong style={{ fontSize: '1.15rem', color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}>
                    {activeCfg.coveredArea} Sq.Ft.
                  </strong>
                </div>
              )}

              <div style={{ background: '#F8FAFC', padding: '0.85rem 1rem', borderRadius: 'var(--r-md, 12px)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 700, display: 'block' }}>
                  Estimated Price
                </span>
                <strong style={{ fontSize: '1.05rem', color: 'var(--gold, #C5A059)', fontWeight: 700 }}>
                  {activeCfg.priceEstimate || 'Price On Request'}
                </strong>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => openSiteVisitModal(project.title)}
              style={{ borderRadius: 'var(--r-pill)', padding: '0.6rem 1.35rem', fontWeight: 600, flex: '1 1 auto', justifyContent: 'center' }}
            >
              <Car size={15} /> Book Tour for {activeCfg.bhkType}
            </button>
            <button
              type="button"
              className="btn btn-ghost-warm btn-sm"
              onClick={() => openEnquiryModal(project.title, `${activeCfg.title} Plan Dossier`)}
              style={{ borderRadius: 'var(--r-pill)', padding: '0.6rem 1.15rem', border: '1px solid var(--border)' }}
            >
              <Download size={15} /> Download CAD Spec
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
