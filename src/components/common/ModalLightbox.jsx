import React from 'react';
import { useModal } from '../../context/ModalContext';
import { X, ZoomIn } from 'lucide-react';

export const ModalLightbox = () => {
  const { lightboxOpen, lightboxData, closeLightbox } = useModal();

  if (!lightboxOpen || !lightboxData.src) return null;

  return (
    <div className="modal-overlay" onClick={closeLightbox} style={{ padding: '1rem', zIndex: 2500 }}>
      <div 
        style={{
          position: 'relative',
          maxWidth: '900px',
          width: '100%',
          background: '#0F172A',
          borderRadius: 'var(--r-lg)',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: '#FFF' }}>
          <div>
            <h4 style={{ margin: 0, color: '#FFF', fontSize: '1.1rem' }}>{lightboxData.title || 'Architectural View'}</h4>
            {lightboxData.subtitle && <p style={{ margin: 0, fontSize: '0.8rem', color: '#94A3B8' }}>{lightboxData.subtitle}</p>}
          </div>
          <button 
            onClick={closeLightbox}
            style={{ background: 'rgba(255, 255, 255, 0.1)', border: 'none', color: '#FFF', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Close lightbox"
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020617', minHeight: '380px' }}>
          <img 
            src={lightboxData.src} 
            alt={lightboxData.title || 'Preview'} 
            style={{ maxHeight: '70vh', width: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: 'var(--r-sm)' }}
          />
        </div>
      </div>
    </div>
  );
};
