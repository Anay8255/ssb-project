import React from 'react';
import { useModal } from '../../context/ModalContext';
import { Layers, ZoomIn, Car, Download, Compass, ShieldCheck, TreePine, Building2, MapPin } from 'lucide-react';

export const MasterPlanViewer = ({ projectId, project }) => {
  const { openEnquiryModal, openSiteVisitModal, openLightbox } = useModal();

  const masterPlanImg = project?.masterPlanUrl || "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948615341-1i5w1c.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MTUzNDEtMWk1dzFjLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MTYsImV4cCI6MjEwMjMwODYxNn0.n69jhHvyV57zFbr3f4LHGGmV5Wy-k5ohDkRJGatJhqc";

  return (
    <section 
      id="master-plan" 
      className="master-plan-container" 
      style={{ 
        background: '#FFFFFF', 
        borderRadius: 'var(--r-2xl, 24px)', 
        padding: '3rem', 
        border: '1px solid rgba(226, 232, 240, 0.9)', 
        boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.05)', 
        marginBottom: '3rem',
        position: 'relative'
      }}
    >
      {/* Header Bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.75rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(224, 84, 43, 0.08)', color: 'var(--brand)', padding: '0.35rem 0.85rem', borderRadius: 'var(--r-pill)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            <Layers size={13} /> Integrated Campus Layout
          </div>
          <h3 style={{ fontSize: '2.2rem', color: 'var(--ink)', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
            Master Site Plan & Circulation Map
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--ink-muted)', marginTop: '0.35rem', maxWidth: '650px', lineHeight: 1.5 }}>
            Engineered site circulation displaying wide arterial roads, pedestrian walkways, landscaped green spines, and tower alignments.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
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
            <Car size={14} /> Schedule Site Walkthrough
          </button>
        </div>
      </div>

      {/* Architectural Zoning Legends Bar */}
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        flexWrap: 'wrap', 
        alignItems: 'center', 
        background: '#F8FAFC', 
        padding: '0.85rem 1.25rem', 
        borderRadius: 'var(--r-lg)', 
        border: '1px solid var(--border)', 
        marginBottom: '1.5rem',
        fontSize: '0.82rem',
        color: 'var(--ink)'
      }}>
        <span style={{ fontWeight: 700, color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.72rem' }}>
          Site Zoning:
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--brand)', display: 'inline-block' }}></span>
          <span style={{ fontWeight: 600 }}>Towers & Frontage</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }}></span>
          <span style={{ fontWeight: 600 }}>Parks & Open Greens</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3B82F6', display: 'inline-block' }}></span>
          <span style={{ fontWeight: 600 }}>Club & Leisure Pavilion</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EAB308', display: 'inline-block' }}></span>
          <span style={{ fontWeight: 600 }}>Main Boulevard & Gatehouse</span>
        </div>
      </div>

      {/* Master Plan High-Res Studio Viewport */}
      <div 
        className="master-plan-viewport" 
        style={{ 
          overflow: 'hidden', 
          borderRadius: 'var(--r-xl, 18px)', 
          border: '1px solid rgba(255, 255, 255, 0.12)',
          background: 'linear-gradient(180deg, #0A1120 0%, #0F172A 100%)',
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.6), 0 15px 30px -10px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          cursor: 'zoom-in',
          padding: '2rem 1.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '480px'
        }}
        onClick={() => openLightbox(masterPlanImg, `${project?.title || 'Project'} — Master Site Plan`, 'Certified Architectural Master Layout Map')}
      >
        <img 
          src={masterPlanImg} 
          alt="Master Layout Plan" 
          style={{ 
            maxWidth: '96%', 
            maxHeight: '620px', 
            objectFit: 'contain', 
            borderRadius: 'var(--r-md)',
            display: 'block',
            filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.6))',
            transition: 'transform 0.4s ease'
          }} 
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        />
        
        {/* Floating Zoom Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '1.5rem',
          right: '1.5rem',
          background: 'rgba(15, 23, 42, 0.88)',
          color: '#FFF',
          padding: '0.45rem 1rem',
          borderRadius: 'var(--r-pill)',
          fontSize: '0.78rem',
          fontWeight: 600,
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          pointerEvents: 'none'
        }}>
          <ZoomIn size={14} color="var(--gold)" />
          <span>Click to Inspect High-Resolution Blueprint</span>
        </div>
      </div>
    </section>
  );
};
