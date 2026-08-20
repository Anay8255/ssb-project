import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { useModal } from '../context/ModalContext';
import { ReraHub } from '../components/project/ReraHub';
import { MasterPlanViewer } from '../components/project/MasterPlanViewer';
import { FloorPlanSwitcher } from '../components/project/FloorPlanSwitcher';
import { MilestoneTracker } from '../components/project/MilestoneTracker';
import { AmenitiesGrid } from '../components/project/AmenitiesGrid';
import { MapPin, ShieldCheck, Car, Download, ArrowLeft, CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const { getProjectBySlug } = useStore();
  const { openSiteVisitModal, openEnquiryModal, openLightbox } = useModal();

  const project = getProjectBySlug(slug);

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

  return (
    <div className="fade-in" style={{ paddingBottom: '5rem' }}>
      {/* Hero Banner with Gallery Thumbnails */}
      <section style={{ position: 'relative', background: '#0F172A', color: '#FFF', padding: '7.5rem 0 3.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#94A3B8', marginBottom: '1.5rem' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Home</Link>
            <ChevronRight size={14} />
            <Link to="/projects" style={{ color: '#94A3B8' }}>Projects</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{project.title}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="badge badge-brand">{project.category}</span>
                <span className="badge badge-success">{project.status.toUpperCase()}</span>
              </div>
              <h1 style={{ fontSize: '3rem', color: '#FFF', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                {project.title}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', fontWeight: 600 }}>
                <MapPin size={16} />
                <span>{project.fullAddress || project.locationName}</span>
              </div>
              <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                {project.description}
              </p>

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

            {/* Featured Hero Images */}
            <div style={{ position: 'relative' }}>
              <div 
                style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', height: '360px', border: '1px solid rgba(255, 255, 255, 0.15)', cursor: 'zoom-in', boxShadow: 'var(--shadow-lg)' }}
                onClick={() => openLightbox(project.featuredImage, project.title, project.locationName)}
              >
                <img 
                  src={project.featuredImage} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        {/* RERA Compliance Hub */}
        <ReraHub project={project} />

        {/* Key Project Specs Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', background: '#FFF', padding: '1.75rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)', marginBottom: '2.5rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 600, display: 'block' }}>Starting Price</span>
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
        <MasterPlanViewer projectId={project.slug || project.id} />

        {/* Floor Plan Switcher */}
        <FloorPlanSwitcher project={project} />

        {/* Construction Progress Tracker */}
        <MilestoneTracker project={project} />

        {/* Amenities Grid */}
        <AmenitiesGrid amenities={project.amenities} />

        {/* Location & Connectivity Strip */}
        <div style={{ background: '#FFF', padding: '2.5rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', marginBottom: '2.5rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="eyebrow">LOCATION & TRANSIT ADVANTAGE</span>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', margin: 0 }}>Strategic Connectivity</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginTop: '0.25rem' }}>
              Situated along Varanasi's premier growth artery, offering rapid transit to airports, schools & hubs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            <div style={{ background: 'var(--sand-muted)', padding: '1.25rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--ink)' }}>✈️ Lal Bahadur Shastri Airport</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--brand)', fontWeight: 600 }}>15 Mins Drive (Direct Expressway)</span>
            </div>
            <div style={{ background: 'var(--sand-muted)', padding: '1.25rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--ink)' }}>🚆 Varanasi Cantt Junction</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--brand)', fontWeight: 600 }}>20 Mins Drive</span>
            </div>
            <div style={{ background: 'var(--sand-muted)', padding: '1.25rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--ink)' }}>🏥 Heritage & Apex Hospitals</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--brand)', fontWeight: 600 }}>10 Mins Emergency Transit</span>
            </div>
            <div style={{ background: 'var(--sand-muted)', padding: '1.25rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--ink)' }}>🎓 DPS & Sunbeam Schools</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--brand)', fontWeight: 600 }}>Within 4 km Radius</span>
            </div>
          </div>
        </div>

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
