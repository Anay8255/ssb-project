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
  Ruler, Calendar, Award, Compass, Layers, Video, FileText, Check
} from 'lucide-react';

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const { getProjectBySlug } = useStore();
  const { openSiteVisitModal, openEnquiryModal, openLightbox } = useModal();
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
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
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="fade-in" style={{ paddingBottom: '6rem' }}>

      {/* 1. Ultra-Luxury Sticky Sub-Navigation Bar */}
      <div
        style={{
          position: 'fixed',
          top: isStickyNavVisible ? '0' : '-80px',
          left: 0,
          right: 0,
          background: 'rgba(15, 23, 42, 0.94)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          zIndex: 999,
          transition: 'top 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '68px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h4 style={{ color: '#FFF', margin: 0, fontSize: '1.1rem', fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
              {project.title}
            </h4>
            <span className="badge badge-brand" style={{ fontSize: '0.7rem' }}>
              {project.status}
            </span>
          </div>

          {/* Nav Items */}
          <nav style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', padding: '0.25rem 0' }} className="no-scrollbar">
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
                style={{
                  background: activeSection === item.id ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                  color: activeSection === item.id ? 'var(--gold)' : '#CBD5E1',
                  border: 'none',
                  borderRadius: 'var(--r-pill)',
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Quick CTA */}
          <div style={{ display: 'flex', gap: '0.65rem' }}>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => openSiteVisitModal(project.title)}
              style={{ borderRadius: 'var(--r-pill)', fontWeight: 600, fontSize: '0.82rem' }}
            >
              <Car size={14} /> Book VIP Visit
            </button>
          </div>
        </div>
      </div>

      {/* 2. Cinematic Panoramic Hero Section */}
      <section style={{
        position: 'relative',
        color: '#FFF',
        padding: '9rem 0 5.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        background: `linear-gradient(180deg, rgba(10, 17, 32, 0.75) 0%, rgba(10, 17, 32, 0.5) 45%, rgba(10, 17, 32, 0.88) 100%), url(${currentHeroImg}) center/cover no-repeat`,
        transition: 'background-image 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        minHeight: '620px',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Subtle Luxury Pattern Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>

          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#94A3B8', marginBottom: '1.75rem', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
            <Link to="/" style={{ color: '#CBD5E1' }}>Home</Link>
            <ChevronRight size={13} />
            <Link to="/projects" style={{ color: '#CBD5E1' }}>Projects</Link>
            <ChevronRight size={13} />
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{project.title}</span>
          </div>

          <div style={{ maxWidth: '900px' }}>
            {/* Authority Badges */}
            <div style={{ display: 'flex', gap: '0.65rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="badge badge-brand" style={{ padding: '0.4rem 0.9rem', fontSize: '0.78rem', letterSpacing: '0.06em' }}>
                {project.category.toUpperCase()}
              </span>
              <span style={{
                background: 'rgba(34, 197, 94, 0.2)',
                color: '#4ADE80',
                border: '1px solid rgba(74, 222, 128, 0.35)',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--r-pill)',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backdropFilter: 'blur(8px)'
              }}>
                <ShieldCheck size={14} /> UP-RERA VERIFIED
              </span>
              <span style={{
                background: 'rgba(255, 255, 255, 0.12)',
                color: '#F8FAFC',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--r-pill)',
                fontSize: '0.75rem',
                fontWeight: 600,
                backdropFilter: 'blur(8px)'
              }}>
                {project.status.toUpperCase()}
              </span>
            </div>

            {/* Display Title */}
            <h1 style={{
              fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
              color: '#FFFFFF',
              marginBottom: '0.75rem',
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.85)'
            }}>
              {project.title}
            </h1>

            {/* Location & Tagline */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--gold)', fontSize: '1.2rem', marginBottom: '2.5rem', fontWeight: 600, textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}>
              <MapPin size={20} />
              <span>{project.fullAddress || project.locationName}</span>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1.1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => openSiteVisitModal(project.title)}
                style={{
                  borderRadius: 'var(--r-pill)',
                  padding: '0.9rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  boxShadow: '0 8px 25px -3px rgba(224, 84, 43, 0.6)'
                }}
              >
                <Car size={18} /> Book VIP Chauffeur Tour
              </button>

              <button
                className="btn btn-ghost-warm btn-lg"
                onClick={() => openEnquiryModal(project.title, 'Brochure Dossier')}
                style={{
                  borderRadius: 'var(--r-pill)',
                  padding: '0.9rem 1.85rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  background: 'rgba(15, 23, 42, 0.7)',
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <Download size={18} /> Instant E-Brochure (PDF)
              </button>

              {(project.videoWalkthroughUrl || project.videoUrl) && (
                <button
                  type="button"
                  onClick={() => scrollToAnchor('walkthrough-video')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#FFF',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    cursor: 'pointer',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    padding: '0.5rem 1rem'
                  }}
                >
                  <span style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(224, 84, 43, 0.85)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 15px rgba(224, 84, 43, 0.5)'
                  }}>
                    <Play size={16} fill="#FFF" />
                  </span>
                  <span>Watch Walkthrough Film</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Hero Slider Controls */}
        {heroImages.length > 1 && (
          <>
            <button
              onClick={prevHeroSlide}
              aria-label="Previous Perspective"
              style={{
                position: 'absolute',
                left: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(15, 23, 42, 0.75)',
                color: '#FFF',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '50%',
                width: '46px',
                height: '46px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                zIndex: 3,
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextHeroSlide}
              aria-label="Next Perspective"
              style={{
                position: 'absolute',
                right: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(15, 23, 42, 0.75)',
                color: '#FFF',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '50%',
                width: '46px',
                height: '46px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                zIndex: 3,
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Bottom Slide Indicator Reel */}
            <div style={{
              position: 'absolute',
              bottom: '1.75rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '0.5rem',
              zIndex: 3,
              background: 'rgba(15, 23, 42, 0.75)',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--r-pill)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}>
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setHeroSlideIndex(idx)}
                  style={{
                    width: heroSlideIndex === idx ? '26px' : '8px',
                    height: '8px',
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
      <div className="container" style={{ paddingTop: '3.5rem' }}>

        {/* Floating Glass Executive Metric HUD */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '1.25rem',
          background: '#FFFFFF',
          padding: '2rem 2.25rem',
          borderRadius: 'var(--r-2xl, 24px)',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.05)',
          marginBottom: '3rem',
          transform: 'translateY(-2rem)'
        }}>
          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 700, letterSpacing: '0.06em', display: 'block', marginBottom: '0.25rem' }}>
              Investment Value
            </span>
            <strong style={{ fontSize: '1.35rem', color: 'var(--brand)', fontFamily: 'var(--font-heading)' }}>
              {project.priceDisplay || 'Price On Request'}
            </strong>
          </div>

          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 700, letterSpacing: '0.06em', display: 'block', marginBottom: '0.25rem' }}>
              Land Extent
            </span>
            <strong style={{ fontSize: '1.25rem', color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}>
              {project.totalLandArea || 'Master Planned'}
            </strong>
          </div>

          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 700, letterSpacing: '0.06em', display: 'block', marginBottom: '0.25rem' }}>
              Project Status
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }}></span>
              <strong style={{ fontSize: '1.15rem', color: 'var(--ink)' }}>
                {project.status}
              </strong>
            </div>
          </div>

          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 700, letterSpacing: '0.06em', display: 'block', marginBottom: '0.25rem' }}>
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
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--r-2xl, 24px)',
            padding: '3rem',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.05)',
            marginBottom: '3rem'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(224, 84, 43, 0.08)', color: 'var(--brand)', padding: '0.35rem 0.85rem', borderRadius: 'var(--r-pill)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                <Sparkles size={13} /> The Architectural Vision
              </div>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--ink)', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                About {project.title}
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--ink)', marginTop: '1.25rem', lineHeight: 1.7, fontWeight: 400 }}>
                {project.description || `${project.title} represents a premier hallmark in contemporary real estate, engineered for sustainable high-value appreciation, pristine living, and master-planned connectivity.`}
              </p>

              {/* Highlight Pillars */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(224, 84, 43, 0.1)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--ink)' }}>Vastu Compliant</strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--ink-muted)' }}>Optimum orientation & energy</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(34, 197, 94, 0.1)', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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
            <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', color: '#FFF', padding: '2.5rem', borderRadius: 'var(--r-xl, 20px)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                DEVELOPER EXCELLENCE
              </span>
              <h3 style={{ fontSize: '1.75rem', color: '#FFF', fontFamily: 'var(--font-heading)', margin: '0 0 1rem 0' }}>
                Shree Sai Baba Group
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Over 18+ years of engineering benchmark delivery across eastern Uttar Pradesh, committed to RCC structural strength, timely handovers, and transparent customer trust.
              </p>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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

        {/* 9. Cinematic 4K Walkthrough Video Showcase */}
        {/* 9. Official Guided Walkthrough Film — Single Frame Cinema Showcase */}
        {(project.videoWalkthroughUrl || project.videoUrl) && (
          <section
            id="walkthrough-video"
            style={{
              background: 'linear-gradient(135deg, #091527 0%, #0F294A 60%, #153A66 100%)',
              borderRadius: '20px',
              padding: '1.85rem 2.25rem',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              boxShadow: '0 20px 50px -10px rgba(11, 19, 42, 0.45)',
              marginBottom: '3rem',
              color: '#FFFFFF',
              position: 'relative',
              overflow: 'hidden'
            }}
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

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              alignItems: 'center'
            }}>
              {/* Left: Cinema Video Player (Constrained 16:9) */}
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
                    <iframe
                      src={project.videoWalkthroughUrl || project.videoUrl}
                      title={`${project.title} Official Walkthrough Video`}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* Right: Walkthrough Details & Fast Action */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(197, 160, 89, 0.16)', color: '#F5E7C8', border: '1px solid rgba(197, 160, 89, 0.35)', padding: '0.2rem 0.65rem', borderRadius: '9999px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                  <Video size={12} /> 4K Guided Tour
                </div>

                <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
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
                    <Car size={14} /> Book In-Person VIP Tour
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
                    <Download size={14} /> WhatsApp Full Video
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
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--r-2xl, 24px)',
              padding: '3rem',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.05)',
              marginBottom: '3rem'
            }}
          >
            <div style={{ marginBottom: '2.25rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.75rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(224, 84, 43, 0.08)', color: 'var(--brand)', padding: '0.35rem 0.85rem', borderRadius: 'var(--r-pill)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                <Award size={13} /> Engineering & Material Discipline
              </div>
              <h3 style={{ fontSize: '2.2rem', color: 'var(--ink)', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
                Architectural Specifications
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--ink-muted)', marginTop: '0.35rem', maxWidth: '650px', lineHeight: 1.5 }}>
                Certified engineering standards, premium material grades & structural guarantees per official sanction.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {project.specifications.structure && (
                <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                    🏗️ Structural Framework
                  </span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.structure}</p>
                </div>
              )}
              {project.specifications.rooms && (
                <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                    🛋️ Rooms & Corridors
                  </span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.rooms} | {project.specifications.commonArea}</p>
                </div>
              )}
              {project.specifications.kitchen && (
                <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                    🍳 Kitchen & Pantry
                  </span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.kitchen}</p>
                </div>
              )}
              {project.specifications.doorWindow && (
                <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                    🚪 Doors & Glazed Windows
                  </span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.doorWindow}</p>
                </div>
              )}
              {project.specifications.electrical && (
                <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                    ⚡ Electrical & Power Backup
                  </span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.electrical}</p>
                </div>
              )}
              {project.specifications.toiletBathroom && (
                <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                    🚿 Sanitary & Plumbing
                  </span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.toiletBathroom}</p>
                </div>
              )}
              {project.specifications.finishing && (
                <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                    🎨 Exterior Texture & Paint
                  </span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.finishing}</p>
                </div>
              )}
              {project.specifications.staircase && (
                <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--r-xl, 16px)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                    🪜 Staircase & Fire Safety
                  </span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{project.specifications.staircase}</p>
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
        <div style={{
          background: 'linear-gradient(135deg, #0A1120 0%, #1E293B 100%)',
          color: '#FFF',
          padding: '4rem 3rem',
          borderRadius: 'var(--r-2xl, 24px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
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
            <h3 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#FFF', fontFamily: 'var(--font-heading)', margin: '0 0 1rem 0', lineHeight: 1.2 }}>
              Experience {project.title} in Person
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
              Inspect ongoing structural work, sample apartment layouts, and private campus surroundings with a complimentary chauffeur pickup.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => openSiteVisitModal(project.title)}
                style={{ borderRadius: 'var(--r-pill)', padding: '0.9rem 2.25rem', fontWeight: 700, fontSize: '1rem' }}
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
                  padding: '0.9rem 2rem',
                  fontSize: '1rem'
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

