import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { useModal } from '../context/ModalContext';
import { SEED_DATA } from '../data/seedData';
import { ReraHub } from '../components/project/ReraHub';
import { MasterPlanViewer } from '../components/project/MasterPlanViewer';
import { FloorPlanSwitcher } from '../components/project/FloorPlanSwitcher';
import { ProjectGallery } from '../components/project/ProjectGallery';
import { MilestoneTracker } from '../components/project/MilestoneTracker';
import { AmenitiesGrid } from '../components/project/AmenitiesGrid';
import { ProjectLocationMap } from '../components/project/ProjectLocationMap';
import {
  MapPin, ShieldCheck, Car, Download, ArrowLeft, CheckCircle2,
  ChevronRight, ChevronLeft, Phone, Play, Sparkles, Building2,
  Ruler, Calendar, Award, Compass, Layers, Video, FileText, Check,
  ZoomIn, Maximize2, Eye
} from 'lucide-react';

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const { getProjectBySlug } = useStore();
  const { openSiteVisitModal, openEnquiryModal, openLightbox } = useModal();
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [isStickyNavVisible, setIsStickyNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const rawProject = getProjectBySlug(slug);
  const seedProject = SEED_DATA.projects.find(p => p.slug === slug || p.id === slug || p.id === rawProject?.id);
  const project = rawProject ? {
    ...seedProject,
    ...rawProject,
    gallery: seedProject?.gallery || rawProject?.gallery,
    heroImages: seedProject?.heroImages || rawProject?.heroImages,
    masterPlanUrl: seedProject?.masterPlanUrl || rawProject?.masterPlanUrl,
    videoWalkthroughUrl: seedProject?.videoWalkthroughUrl || rawProject?.videoWalkthroughUrl,
    siteVideos: seedProject?.siteVideos || rawProject?.siteVideos,
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

  const nextHeroSlide = () => setHeroSlideIndex((prev) => (prev + 1) % heroImages.length);
  const prevHeroSlide = () => setHeroSlideIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  const scrollToAnchor = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="fade-in project-detail-page-wrapper">

      {/* 1. Ultra-Luxury Sticky Sub-Navigation Bar */}
      <div
        className="project-sticky-nav"
        style={{
          top: isStickyNavVisible ? '0' : '-80px'
        }}
      >
        <div className="container project-sticky-nav-inner">
          <div className="project-sticky-nav-brand">
            <h4>{project.title}</h4>
            <span className="badge badge-brand" style={{ fontSize: '0.7rem' }}>
              {project.status}
            </span>
          </div>

          {/* Nav Items */}
          <nav className="project-sticky-nav-menu no-scrollbar">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'master-plan', label: 'Master Plan' },
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
                onClick={() => scrollToAnchor(item.id)}
                className={`project-sticky-nav-item ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Quick CTA */}
          <div className="project-sticky-nav-cta">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => openSiteVisitModal(project.title)}
              style={{ borderRadius: 'var(--r-pill)', fontWeight: 600, fontSize: '0.8rem', whiteSpace: 'nowrap' }}
            >
              <Car size={14} /> VIP Visit
            </button>
          </div>
        </div>
      </div>

      {/* 2. Transparent Full Background Cover Hero Section */}
      <section className="project-detail-hero">
        {/* Full-Bleed Background Image Cover */}
        <div 
          className="project-hero-bg"
          style={{ backgroundImage: `url(${currentHeroImg})` }} 
        />

        {/* Ultra-Light Transparent Gradient Scrim */}
        <div className="project-hero-scrim" />

        {/* Subtle Luxury Pattern Overlay */}
        <div className="project-hero-pattern" />

        {/* Top-Right Perspective & Fullscreen Pill */}
        <div className="project-hero-top-tools">
          <span style={{
            background: 'rgba(15, 23, 42, 0.65)',
            color: '#FFF',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            padding: '0.35rem 0.85rem',
            borderRadius: 'var(--r-pill)',
            fontSize: '0.75rem',
            fontWeight: 600,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <Sparkles size={12} color="var(--gold)" />
            {heroSlideIndex + 1} / {heroImages.length} Perspectives
          </span>

          <button
            type="button"
            onClick={() => openLightbox(currentHeroImg, `${project.title} — Perspective ${heroSlideIndex + 1}`, 'Hero Perspective')}
            style={{
              background: 'rgba(15, 23, 42, 0.65)',
              color: '#FFF',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: 'var(--r-pill)',
              padding: '0.35rem 0.85rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              cursor: 'pointer',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              transition: 'all 0.2s ease'
            }}
          >
            <ZoomIn size={13} /> Fullscreen
          </button>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>

          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '1.25rem', textShadow: '0 2px 8px rgba(0,0,0,0.8)', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#F1F5F9' }}>Home</Link>
            <ChevronRight size={13} />
            <Link to="/projects" style={{ color: '#F1F5F9' }}>Projects</Link>
            <ChevronRight size={13} />
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{project.title}</span>
          </div>

          {/* Content Area */}
          <div style={{ maxWidth: '850px' }}>
            {/* Authority Badges */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{
                background: 'rgba(255, 255, 255, 0.12)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.28)',
                padding: '0.4rem 0.95rem',
                borderRadius: 'var(--r-pill)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)'
              }}>
                {project.category?.toUpperCase() || 'DEVELOPMENT'}
              </span>
              <span style={{
                background: 'rgba(34, 197, 94, 0.16)',
                color: '#4ADE80',
                border: '1px solid rgba(74, 222, 128, 0.4)',
                padding: '0.4rem 0.95rem',
                borderRadius: 'var(--r-pill)',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)'
              }}>
                <ShieldCheck size={14} /> UP-RERA VERIFIED
              </span>
              <span style={{
                background: 'rgba(255, 255, 255, 0.12)',
                color: '#F8FAFC',
                border: '1px solid rgba(255, 255, 255, 0.28)',
                padding: '0.4rem 0.95rem',
                borderRadius: 'var(--r-pill)',
                fontSize: '0.75rem',
                fontWeight: 600,
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)'
              }}>
                {project.status?.toUpperCase() || 'AVAILABLE'}
              </span>
            </div>

            {/* Display Title */}
            <h1 className="project-hero-title">
              {project.title}
            </h1>

            {/* Location & Tagline */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', marginBottom: '1.75rem', fontWeight: 600, textShadow: '0 2px 12px rgba(0, 0, 0, 0.85)', flexWrap: 'wrap' }}>
              <MapPin size={18} style={{ flexShrink: 0 }} />
              <span>{project.fullAddress || project.locationName}</span>
            </div>

            {/* Transparent Action Buttons */}
            <div className="project-hero-actions">
              <button
                type="button"
                onClick={() => openSiteVisitModal(project.title)}
                className="project-hero-action-btn"
              >
                <Car size={18} /> Book VIP Chauffeur Tour
              </button>

              <button
                type="button"
                onClick={() => openEnquiryModal(project.title, 'Brochure Dossier')}
                className="project-hero-action-btn"
              >
                <Download size={18} /> Instant E-Brochure (PDF)
              </button>

              {(project.videoWalkthroughUrl || project.videoUrl || (project.siteVideos && project.siteVideos.length > 0)) && (
                <button
                  type="button"
                  onClick={() => scrollToAnchor('walkthrough-video')}
                  className="project-hero-action-btn"
                  style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <span style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'rgba(224, 84, 43, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 10px rgba(224, 84, 43, 0.5)',
                    flexShrink: 0
                  }}>
                    <Play size={13} fill="#FFF" />
                  </span>
                  <span>Watch Walkthrough Film</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Hero Slider Edge Controls */}
        {heroImages.length > 1 && (
          <>
            <button
              onClick={prevHeroSlide}
              aria-label="Previous Perspective"
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(15, 23, 42, 0.8)',
                color: '#FFF',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                zIndex: 3,
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
              }}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={nextHeroSlide}
              aria-label="Next Perspective"
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(15, 23, 42, 0.8)',
                color: '#FFF',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                zIndex: 3,
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
              }}
            >
              <ChevronRight size={22} />
            </button>

            {/* Bottom Slide Indicator Reel */}
            <div style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '0.45rem',
              zIndex: 3,
              background: 'rgba(15, 23, 42, 0.85)',
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--r-pill)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.18)'
            }}>
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setHeroSlideIndex(idx)}
                  style={{
                    width: heroSlideIndex === idx ? '24px' : '7px',
                    height: '7px',
                    borderRadius: 'var(--r-pill)',
                    background: heroSlideIndex === idx ? 'var(--brand)' : 'rgba(255, 255, 255, 0.4)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {/* 3. Main Luxury Content Canvas */}
      <div className="container" style={{ paddingTop: '1.5rem' }}>

        {/* Floating Glass Executive Metric HUD */}
        <div className="project-metric-hud">
          <div className="project-metric-cell">
            <span className="project-metric-label">
              Investment Value
            </span>
            <strong style={{ fontSize: '1.35rem', color: 'var(--brand)', fontFamily: 'var(--font-heading)' }}>
              {project.priceDisplay || 'Price On Request'}
            </strong>
          </div>

          <div className="project-metric-cell">
            <span className="project-metric-label">
              Land Extent
            </span>
            <strong style={{ fontSize: '1.25rem', color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}>
              {project.totalLandArea || 'Master Planned'}
            </strong>
          </div>

          <div className="project-metric-cell">
            <span className="project-metric-label">
              Project Status
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }}></span>
              <strong style={{ fontSize: '1.15rem', color: 'var(--ink)' }}>
                {project.status}
              </strong>
            </div>
          </div>

          <div className="project-metric-cell">
            <span className="project-metric-label">
              UP-RERA Registration
            </span>
            <strong style={{ fontSize: '1.05rem', color: 'var(--ink)', fontWeight: 700 }}>
              {project.reraNumber}
            </strong>
          </div>
        </div>

        {/* Overview & Project Architectural Philosophy */}
        <section
          id="overview"
          className="project-section-card"
        >
          <div className="project-overview-grid">
            <div className="project-overview-content">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(224, 84, 43, 0.08)', color: 'var(--brand)', padding: '0.35rem 0.85rem', borderRadius: 'var(--r-pill)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem', width: 'fit-content' }}>
                <Sparkles size={13} /> The Architectural Vision
              </div>
              <h2 className="project-overview-title">
                About {project.title}
              </h2>
              <p style={{ fontSize: '1.02rem', color: 'var(--ink)', marginTop: '1.15rem', lineHeight: 1.7, fontWeight: 400 }}>
                {project.description || `${project.title} represents a premier hallmark in contemporary real estate, engineered for sustainable high-value appreciation, pristine living, and master-planned connectivity.`}
              </p>

              {/* Highlight Pillars */}
              <div className="project-highlight-pillars">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: 'rgba(224, 84, 43, 0.1)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--ink)' }}>Vastu Compliant</strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--ink-muted)' }}>Optimum orientation & energy</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: 'rgba(34, 197, 94, 0.1)', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--ink)' }}>RERA Certified</strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--ink-muted)' }}>100% Clear statutory approvals</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Quick Spec Highlight Card */}
            <div className="project-developer-card">
              <span style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                DEVELOPER EXCELLENCE
              </span>
              <h3 style={{ fontSize: '1.65rem', color: '#FFF', fontFamily: 'var(--font-heading)', margin: '0 0 0.85rem 0' }}>
                Shree Sai Baba Group
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Over 18+ years of engineering benchmark delivery across eastern Uttar Pradesh, committed to RCC structural strength, timely handovers, and transparent customer trust.
              </p>

              <div className="project-developer-desk-row">
                <div>
                  <span style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase' }}>Direct VIP Desk</span>
                  <strong style={{ display: 'block', fontSize: '1rem', color: '#FFF' }}>+91 98189 28893</strong>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => openSiteVisitModal(project.title)}
                  style={{ borderRadius: 'var(--r-pill)' }}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Official UP-RERA Compliance Assurance Hub */}
        <ReraHub project={project} />

        {/* 5. Master Layout & Campus Circulation Map */}
        <MasterPlanViewer projectId={project.slug || project.id} project={project} />

        {/* 6. Studio CAD Floor Plans & Configurations */}
        <FloorPlanSwitcher project={project} />

        {/* 7. Magazine Architectural Photo & Drone Gallery */}
        <ProjectGallery project={project} />

        {/* 8. Curated World-Class Amenities Grid */}
        <AmenitiesGrid amenities={project.amenities} />

        {/* 9. Cinematic 4K Walkthrough & Live Site Video Showcase */}
        {(project.videoWalkthroughUrl || project.videoUrl || (project.siteVideos && project.siteVideos.length > 0)) && (
          <section
            id="walkthrough-video"
            className="walkthrough-video-card"
          >
            {/* Top Champagne Gold Accent Line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #C5A059 0%, #F5E7C8 50%, #C5A059 100%)'
            }} />

            <div style={{ marginBottom: '1.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', paddingBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(197, 160, 89, 0.16)', color: '#F5E7C8', border: '1px solid rgba(197, 160, 89, 0.35)', padding: '0.25rem 0.85rem', borderRadius: 'var(--r-pill)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                  <Video size={13} /> {project.siteVideos?.length ? 'On-Site Drone & Ground Video Footage' : '4K Guided Tour'}
                </div>
                <h3 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
                  {project.slug === 'pratham' ? 'Pratham Site Inspection & Real Footage' : `${project.title} Video Showcase`}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#CBD5E1', marginTop: '0.35rem', maxWidth: '650px', lineHeight: 1.5 }}>
                  {project.slug === 'pratham' 
                    ? 'Watch official on-ground and aerial video footage captured directly at the Pratham site in Lucknow.' 
                    : `Take an immersive cinematic flight through ${project.title}'s elevation, floor plates, landscaping, and infrastructure.`}
                </p>
              </div>

              {project.slug === 'pratham' && (
                <div style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#4ADE80', border: '1px solid rgba(74, 222, 128, 0.4)', padding: '0.4rem 0.9rem', borderRadius: 'var(--r-pill)', fontSize: '0.78rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem', backdropFilter: 'blur(8px)' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E' }}></span>
                  VERIFIED REAL SITE VIDEO
                </div>
              )}
            </div>

            {/* Video Playlist Clips Switcher (if multiple clips present) */}
            {project.siteVideos && project.siteVideos.length > 1 && (
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {project.siteVideos.map((clip, cIdx) => {
                  const isCurrent = (selectedVideoUrl || project.siteVideos[0].url) === clip.url;
                  return (
                    <button
                      key={cIdx}
                      type="button"
                      onClick={() => setSelectedVideoUrl(clip.url)}
                      style={{
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--r-pill)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: isCurrent ? '1px solid var(--gold)' : '1px solid rgba(255, 255, 255, 0.2)',
                        background: isCurrent ? 'var(--gold)' : 'rgba(255, 255, 255, 0.08)',
                        color: isCurrent ? '#0F172A' : '#FFF',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        backdropFilter: 'blur(8px)'
                      }}
                    >
                      <Play size={12} fill={isCurrent ? '#0F172A' : '#FFF'} />
                      <span>{clip.title}</span>
                      {clip.tag && (
                        <span style={{ opacity: 0.8, fontSize: '0.7rem', background: isCurrent ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
                          {clip.tag}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            <div className="walkthrough-video-grid">
              {/* Left: Cinema Video Player */}
              <div>
                <div style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(197, 160, 89, 0.35)',
                  background: '#000',
                  boxShadow: '0 14px 32px -6px rgba(0, 0, 0, 0.6), 0 0 15px rgba(197, 160, 89, 0.15)',
                  position: 'relative'
                }}>
                  {/* Status Badges */}
                  <div style={{
                    position: 'absolute',
                    top: '0.6rem',
                    left: '0.65rem',
                    right: '0.65rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 10,
                    pointerEvents: 'none'
                  }}>
                    <span style={{
                      background: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: '#F5E7C8',
                      border: '1px solid rgba(197, 160, 89, 0.4)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '5px',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em'
                    }}>
                      4K UHD 60FPS
                    </span>
                    <span style={{
                      background: 'rgba(239, 68, 68, 0.9)',
                      color: '#FFF',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '5px',
                      fontSize: '0.66rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#FFF' }} /> OFFICIAL
                    </span>
                  </div>

                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    {(() => {
                      const currentUrl = selectedVideoUrl || project.siteVideos?.[0]?.url || project.videoWalkthroughUrl || project.videoUrl;
                      const isDirectVideo = currentUrl && (currentUrl.endsWith('.mp4') || currentUrl.includes('.mp4') || currentUrl.startsWith('/'));

                      if (isDirectVideo) {
                        return (
                          <video
                            key={currentUrl}
                            src={currentUrl}
                            controls
                            playsInline
                            preload="metadata"
                            poster={project.featuredImage || heroImages[0]}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              backgroundColor: '#000'
                            }}
                          >
                            Your browser does not support HTML5 video streaming.
                          </video>
                        );
                      }

                      return (
                        <iframe
                          src={currentUrl}
                          title={`${project.title} Official Walkthrough Video`}
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                          allowFullScreen
                        />
                      );
                    })()}
                  </div>
                </div>
              </div>

              {/* Right: Walkthrough Details & Fast Action */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(197, 160, 89, 0.16)', color: '#F5E7C8', border: '1px solid rgba(197, 160, 89, 0.35)', padding: '0.2rem 0.65rem', borderRadius: '9999px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                  <Video size={12} /> 4K Guided Tour
                </div>

                <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  Official Guided Walkthrough Film
                </h3>

                <p style={{ fontSize: '0.86rem', color: '#CBD5E1', margin: '0.4rem 0 1rem', lineHeight: 1.5 }}>
                  Take a flight through {project.title}'s elevation, floor plates, landscaping, and master plan connectivity in high-definition video.
                </p>

                {/* 2 Quick Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.5rem 0.8rem', borderRadius: '9px' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '7px', background: 'rgba(197, 160, 89, 0.2)', color: '#F5E7C8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Building2 size={14} />
                    </div>
                    <strong style={{ fontSize: '0.8rem', color: '#FFF' }}>Exterior Elevation & Campus Infrastructure</strong>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.5rem 0.8rem', borderRadius: '9px' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '7px', background: 'rgba(197, 160, 89, 0.2)', color: '#F5E7C8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Compass size={14} />
                    </div>
                    <strong style={{ fontSize: '0.8rem', color: '#FFF' }}>Sample Flat Architecture & Internal Layouts</strong>
                  </div>
                </div>

                {/* Dual CTAs */}
                <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => openSiteVisitModal(project.title)}
                    style={{
                      background: 'linear-gradient(135deg, #C5A059 0%, #E8D5B5 50%, #C5A059 100%)',
                      color: '#0F172A',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      padding: '0.55rem 1.15rem',
                      borderRadius: '9999px',
                      border: 'none',
                      boxShadow: '0 4px 14px rgba(197, 160, 89, 0.35)'
                    }}
                  >
                    <Car size={14} /> Book VIP Tour
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => openEnquiryModal(project.title, 'Walkthrough Video HD')}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: '#FFFFFF',
                      borderColor: 'rgba(255, 255, 255, 0.25)',
                      fontSize: '0.82rem',
                      padding: '0.55rem 1rem',
                      borderRadius: '9999px'
                    }}
                  >
                    <Download size={14} /> WhatsApp Video
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 10. Milestone Tracker */}
        <MilestoneTracker project={project} />

        {/* 11. Certified Architectural Specifications Section */}
        {project.specifications && (
          <section
            id="specifications"
            className="project-section-card"
          >
            <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(224, 84, 43, 0.08)', color: 'var(--brand)', padding: '0.35rem 0.85rem', borderRadius: 'var(--r-pill)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                <Award size={13} /> Engineering & Material Discipline
              </div>
              <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', color: 'var(--ink)', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
                Architectural Specifications
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--ink-muted)', marginTop: '0.35rem', maxWidth: '650px', lineHeight: 1.5 }}>
                Certified engineering standards, premium material grades & structural guarantees per official sanction.
              </p>
            </div>

            <div className="specifications-grid">
              {project.specifications.structure && (
                <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                    🏗️ Structural Framework
                  </span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.structure}</p>
                </div>
              )}
              {project.specifications.rooms && (
                <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                    🛋️ Rooms & Corridors
                  </span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.rooms} | {project.specifications.commonArea}</p>
                </div>
              )}
              {project.specifications.kitchen && (
                <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                    🍳 Kitchen & Pantry
                  </span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.kitchen}</p>
                </div>
              )}
              {project.specifications.doorWindow && (
                <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                    🚪 Doors & Glazed Windows
                  </span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.doorWindow}</p>
                </div>
              )}
              {project.specifications.electrical && (
                <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                    ⚡ Electrical & Power Backup
                  </span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.electrical}</p>
                </div>
              )}
              {project.specifications.toiletBathroom && (
                <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                    🚿 Sanitary & Plumbing
                  </span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.toiletBathroom}</p>
                </div>
              )}
              {project.specifications.finishing && (
                <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                    🎨 Exterior Texture & Paint
                  </span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.finishing}</p>
                </div>
              )}
              {project.specifications.staircase && (
                <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                    🪜 Staircase & Fire Safety
                  </span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.staircase}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 12. Location & Commute Intelligence Map */}
        <div id="location-hub">
          <ProjectLocationMap project={project} />
        </div>

        {/* 13. VIP Chauffeur Tour & Booking Action Banner */}
        <div className="vip-invitation-banner">
          {/* Ambient Glow */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(224, 84, 43, 0.25) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '750px', margin: '0 auto' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
              EXCLUSIVE INVITATION
            </span>
            <h3 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#FFF', fontFamily: 'var(--font-heading)', margin: '0 0 1rem 0', lineHeight: 1.2 }}>
              Experience {project.title} in Person
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '1rem', margin: '0 auto 2.25rem auto', lineHeight: 1.6 }}>
              Inspect ongoing structural work, sample apartment layouts, and private campus surroundings with a complimentary chauffeur pickup.
            </p>
            <div className="vip-invitation-actions">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => openSiteVisitModal(project.title)}
                style={{ borderRadius: 'var(--r-pill)', padding: '0.85rem 2rem', fontWeight: 700, fontSize: '0.95rem' }}
              >
                <Car size={18} /> Schedule VIP Chauffeur Tour
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
                <Phone size={18} /> Call Concierge: +91 98189 28893
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
