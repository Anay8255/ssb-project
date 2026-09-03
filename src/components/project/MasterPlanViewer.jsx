import React from 'react';
import { useModal } from '../../context/ModalContext';
import { Layers, ZoomIn, Car, Download, Compass, ShieldCheck } from 'lucide-react';

export const MasterPlanViewer = ({ projectId, project }) => {
  const { openEnquiryModal, openSiteVisitModal, openLightbox } = useModal();

  const masterPlanImg = project?.masterPlanUrl || "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948615341-1i5w1c.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MTUzNDEtMWk1dzFjLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MTYsImV4cCI6MjEwMjMwODYxNn0.n69jhHvyV57zFbr3f4LHGGmV5Wy-k5ohDkRJGatJhqc";

  return (
    <section 
      id="master-plan" 
      className="project-card-section"
    >
      {/* Header Bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1.75rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(197, 160, 89, 0.12)', color: 'var(--gold, #C5A059)', border: '1px solid rgba(197, 160, 89, 0.3)', padding: '0.25rem 0.85rem', borderRadius: 'var(--r-pill)', fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            <Layers size={13} /> Integrated Campus Layout
          </div>
          <h3 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.2rem)', color: 'var(--ink)', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
            Master Site Plan & Circulation Map
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--ink-muted)', marginTop: '0.35rem', maxWidth: '650px', lineHeight: 1.5 }}>
            Engineered site circulation displaying wide arterial roads, pedestrian walkways, landscaped green zones, and tower alignments.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
          <button 
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => openLightbox(masterPlanImg, `${project?.title || 'Project'} — Master Site Plan`, 'Certified Architectural Master Layout Map')}
            style={{ borderRadius: 'var(--r-pill)', fontWeight: 600 }}
          >
            <ZoomIn size={14} /> Fullscreen Zoom
          </button>
          <button 
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => openSiteVisitModal(project?.title || 'Master Plan')}
            style={{ borderRadius: 'var(--r-pill)', fontWeight: 600 }}
          >
            <Car size={14} /> Schedule Site Visit
          </button>
        </div>
      </div>

      {/* Architectural Zoning Legends Bar */}
      <div style={{ 
        display: 'flex', 
        gap: '0.75rem', 
        flexWrap: 'wrap', 
        alignItems: 'center', 
        background: '#F8FAFC', 
        padding: '0.75rem 1.15rem', 
        borderRadius: 'var(--r-lg, 16px)', 
        border: '1px solid var(--border)', 
        marginBottom: '1.5rem',
        fontSize: '0.8rem',
        color: 'var(--ink)'
      }}>
        <span style={{ fontWeight: 700, color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Site Zoning:
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'var(--brand, #0F294A)', display: 'inline-block' }}></span>
          <span style={{ fontWeight: 600 }}>Commercial Frontage</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }}></span>
          <span style={{ fontWeight: 600 }}>Landscaped Boulevard</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#3B82F6', display: 'inline-block' }}></span>
          <span style={{ fontWeight: 600 }}>Atrium & Lobbies</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#EAB308', display: 'inline-block' }}></span>
          <span style={{ fontWeight: 600 }}>Access Gates & Multi-Level Parking</span>
        </div>
      </div>

      {/* Master Plan High-Res Studio Viewport */}
      <div 
        style={{ 
          overflow: 'hidden', 
          borderRadius: 'var(--r-xl, 18px)', 
          border: '1px solid rgba(255, 255, 255, 0.12)',
          background: 'linear-gradient(180deg, #0A1120 0%, #0F172A 100%)',
          minHeight: '380px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'zoom-in',
          padding: '2rem 1.5rem',
          boxShadow: 'inset 0 0 50px rgba(0,0,0,0.7), 0 15px 35px -10px rgba(0,0,0,0.3)',
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
        onClick={() => openLightbox(masterPlanImg, `${project?.title || 'Project'} — Master Site Plan`, 'Certified Architectural Master Layout Map')}
      >
        <img 
          src={masterPlanImg} 
          alt={`${project?.title || 'Project'} Master Site Plan`}
          style={{
            maxWidth: '96%',
            maxHeight: '440px',
            objectFit: 'contain',
            borderRadius: 'var(--r-md)',
            filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.6))',
            transition: 'transform 0.4s ease'
          }}
        />

        {/* Hover Cue */}
        <div style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          background: 'rgba(15, 23, 42, 0.85)',
          color: '#F5E7C8',
          border: '1px solid rgba(197, 160, 89, 0.35)',
          padding: '0.35rem 0.75rem',
          borderRadius: 'var(--r-pill)',
          fontSize: '0.72rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}>
          <ZoomIn size={13} /> Click to Inspect High-Resolution Blueprint
        </div>
      </div>
    </section>
  );
};
