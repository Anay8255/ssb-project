import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useModal } from '../../context/ModalContext';
import { Layers, X, Sparkles, Car } from 'lucide-react';

export const MasterPlanViewer = ({ projectId, project }) => {
  const { openEnquiryModal, openSiteVisitModal, openLightbox } = useModal();

  const masterPlanImg = project?.masterPlanUrl || "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948615341-1i5w1c.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MTUzNDEtMWk1dzFjLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MTYsImV4cCI6MjEwMjMwODYxNn0.n69jhHvyV57zFbr3f4LHGGmV5Wy-k5ohDkRJGatJhqc";

  return (
    <div className="master-plan-container" style={{ background: '#FFF', borderRadius: 'var(--r-xl)', padding: '2rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', marginBottom: '2.5rem' }}>
      <div className="plan-toolbar" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
            <Layers size={18} style={{ color: 'var(--brand)' }} />
            <h3 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--ink)' }}>Master Layout & Site Plan</h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', margin: 0 }}>
            Comprehensive architectural site map displaying tower locations, internal road grid, green landscaping & community zones.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button 
            className="btn btn-ghost-warm btn-sm"
            onClick={() => openLightbox(masterPlanImg, project?.title || 'Master Layout Plan', 'Architectural Site Master Plan')}
          >
            🔍 Zoom Fullscreen
          </button>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => openEnquiryModal(project?.title || 'Master Plan', 'Master Plan & Unit Enquiry')}
          >
            <Car size={14} /> Schedule Site Tour
          </button>
        </div>
      </div>

      {/* Master Plan High-Res Image Viewport */}
      <div 
        className="master-plan-viewport" 
        style={{ 
          overflow: 'hidden', 
          borderRadius: 'var(--r-lg)', 
          border: '1px solid var(--border)',
          background: '#0E1A29',
          boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.4)',
          position: 'relative',
          cursor: 'zoom-in',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onClick={() => openLightbox(masterPlanImg, project?.title || 'Master Layout Plan', 'Architectural Site Master Plan')}
      >
        <img 
          src={masterPlanImg} 
          alt="Master Layout Plan" 
          style={{ 
            width: '100%', 
            maxHeight: '620px', 
            objectFit: 'contain', 
            borderRadius: 'var(--r-md)',
            display: 'block'
          }} 
        />
        
        <div style={{
          position: 'absolute',
          bottom: '1.5rem',
          right: '1.5rem',
          background: 'rgba(15, 23, 42, 0.85)',
          color: '#FFF',
          padding: '0.45rem 0.9rem',
          borderRadius: 'var(--r-pill)',
          fontSize: '0.8rem',
          fontWeight: 600,
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          pointerEvents: 'none'
        }}>
          🔍 Click to open high-resolution plan
        </div>
      </div>
    </div>
  );
};
