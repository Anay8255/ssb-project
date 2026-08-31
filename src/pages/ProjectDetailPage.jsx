import React, { useState } from 'react';
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
import { MapPin, ShieldCheck, Car, Download, ArrowLeft, CheckCircle2, ChevronRight, ChevronLeft, Phone } from 'lucide-react';

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const { getProjectBySlug } = useStore();
  const { openSiteVisitModal, openEnquiryModal, openLightbox } = useModal();
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  const rawProject = getProjectBySlug(slug);
  const seedProject = SEED_DATA.projects.find(p => p.slug === slug || p.id === slug || p.id === rawProject?.id);
  const project = rawProject ? { ...seedProject, ...rawProject, gallery: seedProject?.gallery || rawProject?.gallery, heroImages: seedProject?.heroImages || rawProject?.heroImages } : seedProject;

  if (!project) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <h2>Project Not Found</h2>
        <p style={{ color: 'var(--ink-muted)', marginBottom: '1.5rem' }}>The requested development could not be found or may have moved.</p>
        <Link to="/projects" className="btn btn-primary">
          Back to Projects
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

  return (
    <div className="fade-in" style={{ paddingBottom: '5rem' }}>
      {/* Hero Banner with Full Photo Backdrop & 100% Transparent Overlay */}
      <section style={{ 
        position: 'relative', 
        color: '#FFF', 
        padding: '7.5rem 0 4.5rem', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        background: `linear-gradient(to right, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.45) 60%, rgba(15, 23, 42, 0.25) 100%), url(${currentHeroImg}) center/cover no-repeat`,
        transition: 'background-image 0.5s ease',
        overflow: 'hidden',
        minHeight: '520px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '1.5rem', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            <Link to="/" style={{ color: '#CBD5E1' }}>Home</Link>
            <ChevronRight size={14} />
            <Link to="/projects" style={{ color: '#CBD5E1' }}>Projects</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{project.title}</span>
          </div>

          {/* 100% Transparent Hero Content */}
          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="badge badge-brand">{project.category}</span>
              <span className="badge badge-success">{project.status.toUpperCase()}</span>
            </div>
            <h1 style={{ fontSize: '3.4rem', color: '#FFF', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)', lineHeight: 1.15, textShadow: '0 3px 15px rgba(0, 0, 0, 0.8)' }}>
              {project.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '2rem', fontWeight: 600, textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}>
              <MapPin size={18} />
              <span>{project.fullAddress || project.locationName}</span>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg" onClick={() => openSiteVisitModal(project.title)}>
                <Car size={18} /> Book Chauffeur Site Tour
              </button>
              <button className="btn btn-ghost-warm btn-lg" onClick={() => openEnquiryModal(project.title, 'Brochure Download')}>
                <Download size={18} /> Instant E-Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Hero Slider Controls (if multiple hero images) */}
        {heroImages.length > 1 && (
          <>
            <button
              onClick={prevHeroSlide}
              aria-label="Previous Hero Image"
              style={{
                position: 'absolute',
                left: '1.25rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(15, 23, 42, 0.65)',
                color: '#FFF',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(6px)',
                zIndex: 2,
                transition: 'background 0.2s'
              }}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={nextHeroSlide}
              aria-label="Next Hero Image"
              style={{
                position: 'absolute',
                right: '1.25rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(15, 23, 42, 0.65)',
                color: '#FFF',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(6px)',
                zIndex: 2,
                transition: 'background 0.2s'
              }}
            >
              <ChevronRight size={22} />
            </button>

            {/* Bottom dots */}
            <div style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '0.4rem',
              zIndex: 2,
              background: 'rgba(15, 23, 42, 0.6)',
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--r-pill)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}>
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setHeroSlideIndex(idx)}
                  style={{
                    width: heroSlideIndex === idx ? '20px' : '7px',
                    height: '7px',
                    borderRadius: 'var(--r-pill)',
                    background: heroSlideIndex === idx ? 'var(--brand)' : 'rgba(255, 255, 255, 0.4)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Main Content Area */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        {/* RERA Compliance Hub */}
        <ReraHub project={project} />

        {/* Key Project Specs Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', background: '#FFF', padding: '1.75rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)', marginBottom: '2.5rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 600, display: 'block' }}>
              {project.priceDisplay === 'Price on Request' ? 'Pricing' : 'Starting Price'}
            </span>
            <strong style={{ fontSize: '1.25rem', color: 'var(--brand)' }}>{project.priceDisplay}</strong>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 600, display: 'block' }}>Total Land Parcel</span>
            <strong style={{ fontSize: '1.2rem', color: 'var(--ink)' }}>{project.totalLandArea}</strong>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 600, display: 'block' }}>Development Status</span>
            <strong style={{ fontSize: '1.2rem', color: 'var(--success)' }}>{project.status}</strong>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 600, display: 'block' }}>UP-RERA Registration</span>
            <strong style={{ fontSize: '1.1rem', color: 'var(--ink)' }}>{project.reraNumber}</strong>
          </div>
        </div>

        {/* Interactive Master Plan with Real-Time Unit Availability */}
        <MasterPlanViewer projectId={project.slug || project.id} project={project} />

        {/* Floor Plan Switcher */}
        <FloorPlanSwitcher project={project} />

        {/* Project Photo & Architectural Gallery */}
        <ProjectGallery project={project} />

        {/* Construction Progress Tracker */}
        <MilestoneTracker project={project} />

        {/* Specifications Section (if available) */}
        {project.specifications && (
          <div style={{ background: '#FFF', padding: '2.5rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', marginBottom: '2.5rem' }}>
            <div style={{ marginBottom: '1.75rem' }}>
              <span className="eyebrow">QUALITY ASSURANCE & MATERIALS</span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', margin: 0 }}>Architectural Specifications</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginTop: '0.25rem' }}>
                Engineering details, premium material standards & construction specifications certified as per official brochure.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {project.specifications.structure && (
                <div style={{ background: 'var(--sand-muted)', padding: '1.25rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>🏗️ Structure</span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>{project.specifications.structure}</p>
                </div>
              )}
              {project.specifications.rooms && (
                <div style={{ background: 'var(--sand-muted)', padding: '1.25rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>🛋️ Rooms & Flooring</span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>{project.specifications.rooms} | {project.specifications.commonArea}</p>
                </div>
              )}
              {project.specifications.kitchen && (
                <div style={{ background: 'var(--sand-muted)', padding: '1.25rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>🍳 Kitchen</span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>{project.specifications.kitchen}</p>
                </div>
              )}
              {project.specifications.doorWindow && (
                <div style={{ background: 'var(--sand-muted)', padding: '1.25rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>🚪 Doors & Windows</span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>{project.specifications.doorWindow}</p>
                </div>
              )}
              {project.specifications.electrical && (
                <div style={{ background: 'var(--sand-muted)', padding: '1.25rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>⚡ Electrical</span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>{project.specifications.electrical}</p>
                </div>
              )}
              {project.specifications.toiletBathroom && (
                <div style={{ background: 'var(--sand-muted)', padding: '1.25rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>🚿 Toilet, Bath & Plumbing</span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>{project.specifications.toiletBathroom}</p>
                </div>
              )}
              {project.specifications.finishing && (
                <div style={{ background: 'var(--sand-muted)', padding: '1.25rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>🎨 Finishing & Paint</span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>{project.specifications.finishing}</p>
                </div>
              )}
              {project.specifications.staircase && (
                <div style={{ background: 'var(--sand-muted)', padding: '1.25rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>🪜 Staircase</span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>{project.specifications.staircase}</p>
                </div>
              )}
            </div>

            {project.developerPartnership && (
              <div style={{ marginTop: '1.5rem', padding: '1rem 1.25rem', background: '#F8FAFC', borderRadius: 'var(--r-md)', border: '1px dashed var(--border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.2rem' }}>🤝</span>
                <span style={{ fontSize: '0.88rem', color: 'var(--ink-muted)' }}>
                  <strong>Development Venture:</strong> {project.developerPartnership}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Interactive Location & Google Map View Section */}
        <ProjectLocationMap project={project} />

        {/* Bottom Booking Action Strip */}
        <div style={{ background: 'linear-gradient(135deg, #18181B 0%, #27272A 100%)', color: '#FFF', padding: '3rem', borderRadius: 'var(--r-xl)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2rem', color: '#FFF', marginBottom: '0.75rem' }}>Schedule an Exclusive Site Walkthrough</h3>
          <p style={{ color: '#A1A1AA', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1rem' }}>
            Inspect ongoing construction, material certifications, sample flat finishes, and view available units in person.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={() => openSiteVisitModal(project.title)}>
              <Car size={18} /> Book Free VIP Chauffeur Cab
            </button>
            <a href="tel:+919818928893" className="btn btn-ghost-warm btn-lg" style={{ background: 'rgba(255,255,255,0.1)', color: '#FFF', borderColor: 'rgba(255,255,255,0.2)' }}>
              <Phone size={18} /> Call Helpline: +91 98189 28893
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
