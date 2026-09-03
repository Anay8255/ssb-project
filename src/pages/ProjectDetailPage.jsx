import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { useModal } from '../context/ModalContext';
import { SEED_DATA } from '../data/seedData';
import { ReraHub } from '../components/project/ReraHub';
import { FloorPlanSwitcher } from '../components/project/FloorPlanSwitcher';
import { ProjectGallery } from '../components/project/ProjectGallery';
import { MilestoneTracker } from '../components/project/MilestoneTracker';
import { AmenitiesGrid } from '../components/project/AmenitiesGrid';
import { ProjectLocationMap } from '../components/project/ProjectLocationMap';
import {
  MapPin, ShieldCheck, Car, Download, ChevronRight, ChevronLeft, 
  Phone, Play, Sparkles, Building2, Calendar, Award, Compass, 
  Video, CheckCircle2, Landmark, Layers, ZoomIn, MessageSquare, ArrowRight,
  Store, Zap
} from 'lucide-react';

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const { getProjectBySlug } = useStore();
  const { openSiteVisitModal, openEnquiryModal, openLightbox } = useModal();
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [isStickyNavVisible, setIsStickyNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const rawProject = getProjectBySlug(slug);
  const seedProject = SEED_DATA.projects.find(p => p.slug === slug || p.id === slug || p.id === rawProject?.id);
  const project = rawProject ? {
    ...seedProject,
    ...rawProject,
    gallery: seedProject?.gallery || rawProject?.gallery,
    heroImages: seedProject?.heroImages || rawProject?.heroImages,
    masterPlanUrl: seedProject?.masterPlanUrl || rawProject?.masterPlanUrl,
    videoWalkthroughUrl: seedProject?.videoWalkthroughUrl || rawProject?.videoWalkthroughUrl,
    configurations: seedProject?.configurations || rawProject?.configurations,
    amenities: seedProject?.amenities || rawProject?.amenities,
    specifications: seedProject?.specifications || rawProject?.specifications
  } : seedProject;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 480) {
        setIsStickyNavVisible(true);
      } else {
        setIsStickyNavVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!project) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>Project Not Found</h2>
        <p style={{ color: 'var(--ink-muted)', marginBottom: '2rem' }}>The requested development could not be found or may have moved.</p>
        <Link to="/projects" className="btn btn-primary">
          Back to Projects Portfolio
        </Link>
      </div>
    );
  }

  const heroImages = (project.heroImages && project.heroImages.length > 0)
    ? project.heroImages
    : [project.featuredImage].filter(Boolean);

  const currentHeroImg = heroImages[heroSlideIndex] || heroImages[0] || project.featuredImage;

  const nextHeroSlide = (e) => {
    e?.stopPropagation();
    setHeroSlideIndex((prev) => (prev + 1) % heroImages.length);
  };
  
  const prevHeroSlide = (e) => {
    e?.stopPropagation();
    setHeroSlideIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const scrollToAnchor = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="editorial-project-page fade-in">

      {/* 1. Ultra-Luxury Sticky Sub-Navigation Bar */}
      <div className={`editorial-sticky-subnav ${isStickyNavVisible ? 'visible' : ''}`}>
        <div className="container editorial-sticky-subnav-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <h4 style={{ color: '#FFF', margin: 0, fontSize: '1.05rem', fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
              {project.title}
            </h4>
            <span className="badge badge-brand" style={{ fontSize: '0.68rem', padding: '0.2rem 0.6rem' }}>
              {project.status}
            </span>
          </div>

          {/* Subnav Pills Track */}
          <nav className="editorial-subnav-track">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'floor-plans', label: 'Floor Plans' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'amenities', label: 'Amenities' },
              { id: 'specifications', label: 'Specs' },
              { id: 'location-hub', label: 'Location' },
              { id: 'rera-compliance', label: 'RERA' }
            ].map(item => (
              <button
                key={item.id}
                type="button"
                className={`editorial-subnav-btn ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToAnchor(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Subnav CTA */}
          <div style={{ flexShrink: 0 }}>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => openSiteVisitModal(project.title)}
              style={{ borderRadius: 'var(--r-pill)', fontWeight: 600, fontSize: '0.82rem', whiteSpace: 'nowrap' }}
            >
              <Car size={14} /> Book VIP Visit
            </button>
          </div>
        </div>
      </div>

      {/* 2. Executive Hero Header (Luxury Transparent Slideshow with 3D Tour & Minimized Text) */}
      <header className="editorial-hero-header">
        {/* Transparent Architectural Background Slideshow Render */}
        <div 
          className="editorial-hero-bg-layer" 
          style={{ backgroundImage: `url(${currentHeroImg})` }} 
        />
        <div className="editorial-hero-gradient-overlay" />

        {/* Floating Slideshow Navigation Arrows */}
        {heroImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevHeroSlide}
              className="hero-slider-floating-btn hero-slider-floating-prev"
              aria-label="Previous Perspective"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={nextHeroSlide}
              className="hero-slider-floating-btn hero-slider-floating-next"
              aria-label="Next Perspective"
            >
              <ChevronRight size={22} />
            </button>

            {/* Bottom-right Perspective Counter Reel */}
            <div className="hero-perspective-reel">
              <span style={{ fontSize: '0.72rem', color: 'var(--gold, #C5A059)', fontWeight: 700, letterSpacing: '0.06em' }}>
                PERSPECTIVE {heroSlideIndex + 1} OF {heroImages.length}
              </span>
            </div>
          </>
        )}

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>

          {/* Breadcrumb Navigation */}
          <div className="editorial-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={12} />
            <Link to="/projects">Projects</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--gold, #C5A059)', fontWeight: 600 }}>{project.title}</span>
          </div>

          {/* Unified Authority Ribbon */}
          <div className="editorial-authority-bar">
            <span style={{ color: '#F5E7C8', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              {project.category} LANDMARK
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.75rem' }}>·</span>
            <span style={{ color: '#4ADE80', fontSize: '0.72rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <ShieldCheck size={13} /> UP-RERA VERIFIED
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.75rem' }}>·</span>
            <span style={{ color: '#CBD5E1', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase' }}>
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h1 className="editorial-title">
            {project.title}
          </h1>

          {/* Location */}
          <div className="editorial-location">
            <MapPin size={16} style={{ color: 'var(--gold, #C5A059)', flexShrink: 0 }} />
            <span>{project.fullAddress || project.locationName}</span>
          </div>

          {/* Executive Action Deck (2x2 Compact Grid on Mobile, Row on Desktop) */}
          <div className="editorial-action-deck">
            <button
              className="btn btn-primary"
              onClick={() => openSiteVisitModal(project.title)}
              style={{
                borderRadius: 'var(--r-pill)',
                padding: '0.82rem 1.65rem',
                fontSize: '0.9rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #C5A059 0%, #E8D5B5 50%, #C5A059 100%)',
                color: '#0F172A',
                border: 'none',
                boxShadow: '0 6px 20px -4px rgba(197, 160, 89, 0.5)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem'
              }}
            >
              <Car size={16} /> VIP Site Tour
            </button>

            {(project.videoWalkthroughUrl || project.videoUrl) && (
              <button
                type="button"
                className="btn"
                onClick={() => setIsVideoModalOpen(true)}
                style={{
                  borderRadius: 'var(--r-pill)',
                  padding: '0.82rem 1.65rem',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1.5px solid var(--gold, #C5A059)',
                  color: '#FFFFFF',
                  boxShadow: '0 6px 20px -4px rgba(0, 0, 0, 0.5), 0 0 12px rgba(197, 160, 89, 0.25)',
                  backdropFilter: 'blur(8px)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--gold, #C5A059) 0%, #E8D5B5 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Play size={10} fill="#0F172A" color="#0F172A" style={{ marginLeft: '1px' }} />
                </span>
                <span>Watch 3D Tour</span>
              </button>
            )}

            <button
              className="btn btn-outline"
              onClick={() => openEnquiryModal(project.title, 'Brochure Dossier')}
              style={{
                borderRadius: 'var(--r-pill)',
                padding: '0.82rem 1.45rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                background: 'rgba(15, 23, 42, 0.8)',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                backdropFilter: 'blur(8px)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem'
              }}
            >
              <Download size={15} /> E-Brochure (PDF)
            </button>

            <button
              className="btn btn-ghost"
              onClick={() => openEnquiryModal(project.title, 'WhatsApp Official Desk')}
              style={{
                borderRadius: 'var(--r-pill)',
                padding: '0.82rem 1.45rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                background: 'rgba(37, 211, 102, 0.18)',
                border: '1px solid rgba(37, 211, 102, 0.4)',
                color: '#4ADE80',
                backdropFilter: 'blur(8px)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem'
              }}
            >
              <MessageSquare size={15} style={{ color: '#4ADE80' }} /> WhatsApp
            </button>
          </div>

        </div>
      </header>

      {/* 3D Tour Video Lightbox Modal */}
      {isVideoModalOpen && (
        <div className="video-lightbox-backdrop" onClick={() => setIsVideoModalOpen(false)}>
          <div className="video-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="video-lightbox-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444', display: 'inline-block', boxShadow: '0 0 8px #EF4444' }} />
                <span style={{ color: '#F5E7C8', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em' }}>
                  {project.title.toUpperCase()} — 4K 3D ARCHITECTURAL TOUR
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFF',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 700
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: '#000' }}>
              <iframe
                src={`${project.videoWalkthroughUrl || project.videoUrl}?autoplay=1`}
                title={`${project.title} 3D Tour Video`}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content Body Container */}
      <div className="container" style={{ paddingTop: '2rem' }}>

        {/* 5. Strategic Positioning & Developer Excellence ("About Pratham") */}
        <section id="overview" className="editorial-card-section" style={{ marginBottom: '2rem' }}>
          <div className="editorial-overview-grid">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(197, 160, 89, 0.12)', color: 'var(--gold, #C5A059)', border: '1px solid rgba(197, 160, 89, 0.3)', padding: '0.25rem 0.85rem', borderRadius: 'var(--r-pill)', fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                <Sparkles size={12} /> Strategic Commercial Vision
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)', color: '#0F172A', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                About {project.title}
              </h2>
              <p style={{ fontSize: '0.98rem', color: '#475569', marginTop: '1rem', lineHeight: 1.7, fontWeight: 400 }}>
                {project.description || `${project.title} marks SSB Group's strategic capital expansion into Lucknow with a mixed-use commercial development engineered for high footfall, expansive frontage, and long-term asset value.`}
              </p>

              {/* 4 Commercial Pillars */}
              <div className="commercial-pillars-grid">
                <div className="pillar-item-card">
                  <div className="pillar-icon-box">
                    <Store size={18} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.92rem', color: '#0F172A' }}>High-Street Frontage</strong>
                    <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Ground & first floor double-height retail</span>
                  </div>
                </div>

                <div className="pillar-item-card">
                  <div className="pillar-icon-box">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.92rem', color: '#0F172A' }}>Corporate Suites</strong>
                    <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Grade-A offices & high-speed lifts</span>
                  </div>
                </div>

                <div className="pillar-item-card">
                  <div className="pillar-icon-box">
                    <Zap size={18} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.92rem', color: '#0F172A' }}>100% Dual Power</strong>
                    <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Uninterrupted power & multi-tier security</span>
                  </div>
                </div>

                <div className="pillar-item-card">
                  <div className="pillar-icon-box">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.92rem', color: '#0F172A' }}>RERA Approved</strong>
                    <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Sanctioned under UPRERAPRJ519082</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Developer Legacy Card */}
            <div className="editorial-developer-card">
              <span style={{ fontSize: '0.72rem', color: 'var(--gold, #C5A059)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                DEVELOPER CREDENTIALS
              </span>
              <h3 style={{ fontSize: '1.6rem', color: '#FFF', fontFamily: 'var(--font-heading)', margin: '0 0 0.75rem 0' }}>
                Shree Sai Baba Group
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Over 18+ years of engineering excellence across Uttar Pradesh, delivering master-planned townships, commercial centers, and residential communities with 100% timely delivery.
              </p>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)', paddingTop: '1.15rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase' }}>Direct Concierge Desk</span>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: '#FFF' }}>+91 98189 28893</strong>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => openSiteVisitModal(project.title)}
                  style={{
                    borderRadius: 'var(--r-pill)',
                    padding: '0.55rem 1.35rem',
                    background: 'linear-gradient(135deg, #C5A059 0%, #E8D5B5 50%, #C5A059 100%)',
                    color: '#0F172A',
                    fontWeight: 700,
                    border: 'none'
                  }}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Integrated Executive Metric HUD Grid */}
        <div className="editorial-hud-grid">
          <div className="editorial-hud-tile">
            <span className="editorial-hud-label">
              <Landmark size={14} style={{ color: 'var(--gold, #C5A059)' }} /> Investment Value
            </span>
            <strong className="editorial-hud-value gold-accent">
              {project.priceDisplay || 'Price On Request'}
            </strong>
            <span className="editorial-hud-sub">Lucknow Growth Zone</span>
          </div>

          <div className="editorial-hud-tile">
            <span className="editorial-hud-label">
              <Layers size={14} style={{ color: 'var(--gold, #C5A059)' }} /> Land Extent
            </span>
            <strong className="editorial-hud-value">
              {project.totalLandArea || '15 Acres Commercial'}
            </strong>
            <span className="editorial-hud-sub">Integrated Commercial Hub</span>
          </div>

          <div className="editorial-hud-tile">
            <span className="editorial-hud-label">
              <Sparkles size={14} style={{ color: '#10B981' }} /> Project Status
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
              <strong className="editorial-hud-value">
                {project.status}
              </strong>
            </div>
            <span className="editorial-hud-sub">Priority Commercial Launch</span>
          </div>

          <div className="editorial-hud-tile">
            <span className="editorial-hud-label">
              <ShieldCheck size={14} style={{ color: '#059669' }} /> UP-RERA Sanction
            </span>
            <strong className="editorial-hud-value" style={{ fontSize: '1.05rem' }}>
              {project.reraNumber}
            </strong>
            <span className="editorial-hud-sub">100% Statutory Clear</span>
          </div>
        </div>

        {/* 6. Official UP-RERA Compliance Hub */}
        <ReraHub project={project} />

        {/* 7. Studio CAD Floor Plans & Configurations */}
        <FloorPlanSwitcher project={project} />

        {/* 9. Architectural Photo & Perspective Gallery */}
        <ProjectGallery project={project} />

        {/* 10. Curated World-Class Amenities Grid */}
        <AmenitiesGrid amenities={project.amenities} />

        {/* 11. Construction Milestone Tracker */}
        <MilestoneTracker project={project} />

        {/* 13. Certified Architectural Specifications Section */}
        {project.specifications && (
          <section id="specifications" className="editorial-card-section">
            <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(197, 160, 89, 0.12)', color: 'var(--gold, #C5A059)', border: '1px solid rgba(197, 160, 89, 0.3)', padding: '0.25rem 0.85rem', borderRadius: 'var(--r-pill)', fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                <Award size={13} /> Engineering & Material Discipline
              </div>
              <h3 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.2rem)', color: 'var(--ink)', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
                Architectural Specifications
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--ink-muted)', marginTop: '0.35rem', maxWidth: '650px', lineHeight: 1.5 }}>
                Certified engineering standards, premium material grades & structural guarantees per official UP-RERA sanction.
              </p>
            </div>

            <div className="specifications-grid">
              {project.specifications.structure && (
                <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand, #0F294A)', fontWeight: 700, display: 'block', marginBottom: '0.35rem', letterSpacing: '0.05em' }}>
                    🏗️ Structural Framework
                  </span>
                  <p style={{ fontSize: '0.88rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.structure}</p>
                </div>
              )}
              {project.specifications.rooms && (
                <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand, #0F294A)', fontWeight: 700, display: 'block', marginBottom: '0.35rem', letterSpacing: '0.05em' }}>
                    🛋️ Corridors & Atrium Floors
                  </span>
                  <p style={{ fontSize: '0.88rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.rooms} | {project.specifications.commonArea}</p>
                </div>
              )}
              {project.specifications.doorWindow && (
                <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand, #0F294A)', fontWeight: 700, display: 'block', marginBottom: '0.35rem', letterSpacing: '0.05em' }}>
                    🏢 Glass Facade & Glazing
                  </span>
                  <p style={{ fontSize: '0.88rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.doorWindow}</p>
                </div>
              )}
              {project.specifications.electrical && (
                <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand, #0F294A)', fontWeight: 700, display: 'block', marginBottom: '0.35rem', letterSpacing: '0.05em' }}>
                    ⚡ Dual Power & Lift Backup
                  </span>
                  <p style={{ fontSize: '0.88rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.electrical}</p>
                </div>
              )}
              {project.specifications.toiletBathroom && (
                <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand, #0F294A)', fontWeight: 700, display: 'block', marginBottom: '0.35rem', letterSpacing: '0.05em' }}>
                    🚿 Sanitary & Water Network
                  </span>
                  <p style={{ fontSize: '0.88rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.toiletBathroom}</p>
                </div>
              )}
              {project.specifications.finishing && (
                <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand, #0F294A)', fontWeight: 700, display: 'block', marginBottom: '0.35rem', letterSpacing: '0.05em' }}>
                    🎨 Exterior Texture & Architectural Light
                  </span>
                  <p style={{ fontSize: '0.88rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.finishing}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 14. Location & Commute Intelligence Map */}
        <div id="location-hub">
          <ProjectLocationMap project={project} />
        </div>

        {/* 15. VIP Chauffeur Tour & Booking Action Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #0A1120 0%, #0F294A 60%, #153A66 100%)',
          color: '#FFF',
          padding: '3.5rem 2rem',
          borderRadius: '20px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.4)',
          border: '1px solid rgba(197, 160, 89, 0.35)'
        }}>
          {/* Ambient Glow */}
          <div style={{
            position: 'absolute',
            top: '-40%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(197, 160, 89, 0.25) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '750px', margin: '0 auto' }}>
            <span style={{ fontSize: '0.74rem', color: 'var(--gold, #C5A059)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.65rem' }}>
              EXCLUSIVE INVITATION
            </span>
            <h3 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#FFF', fontFamily: 'var(--font-heading)', margin: '0 0 0.85rem 0', lineHeight: 1.2 }}>
              Experience {project.title} in Person
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.98rem', margin: '0 auto 2rem auto', lineHeight: 1.6, maxWidth: '620px' }}>
              Inspect commercial frontage, floor plate layouts, and private campus surroundings with a complimentary executive chauffeur pickup.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => openSiteVisitModal(project.title)}
                style={{
                  borderRadius: 'var(--r-pill)',
                  padding: '0.85rem 2rem',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  background: 'linear-gradient(135deg, #C5A059 0%, #E8D5B5 50%, #C5A059 100%)',
                  color: '#0F172A',
                  border: 'none',
                  boxShadow: '0 8px 24px -4px rgba(197, 160, 89, 0.45)'
                }}
              >
                <Car size={17} /> Schedule VIP Chauffeur Tour
              </button>
              <a
                href="tel:+919818928893"
                className="btn btn-ghost-warm btn-lg"
                style={{
                  borderRadius: 'var(--r-pill)',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#FFF',
                  borderColor: 'rgba(255,255,255,0.2)',
                  padding: '0.85rem 1.85rem',
                  fontSize: '0.95rem'
                }}
              >
                <Phone size={17} /> Call Concierge: +91 98189 28893
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
