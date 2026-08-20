import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { ZoomIn, Download, Car, Check } from 'lucide-react';

export const FloorPlanSwitcher = ({ project }) => {
  const [activeConfigIndex, setActiveConfigIndex] = useState(0);
  const { openLightbox, openEnquiryModal, openSiteVisitModal } = useModal();

  if (!project || !project.configurations || project.configurations.length === 0) return null;

  const activeCfg = project.configurations[activeConfigIndex] || project.configurations[0];

  return (
    <div className="floor-plan-module" style={{ background: '#FFF', borderRadius: 'var(--r-xl)', padding: '2.5rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', marginBottom: '2.5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <span className="eyebrow">ARCHITECTURAL BLUEPRINTS</span>
        <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', margin: 0 }}>Floor Plans & Layouts</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginTop: '0.25rem' }}>
          Explore precision Vastu-compliant layout plans with certified RERA carpet area dimensions
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
        {project.configurations.map((cfg, idx) => (
          <button
            key={cfg.id || idx}
            onClick={() => setActiveConfigIndex(idx)}
            className={`btn btn-sm ${activeConfigIndex === idx ? 'btn-primary' : 'btn-ghost-warm'}`}
            style={{ borderRadius: 'var(--r-pill)' }}
          >
            {cfg.bhkType} ({cfg.superBuiltupArea} Sq.Ft.)
          </button>
        ))}
      </div>

      {/* Detail Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
        {/* Image Frame */}
        <div 
          style={{ position: 'relative', background: '#0F172A', borderRadius: 'var(--r-lg)', overflow: 'hidden', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-in', minHeight: '320px' }}
          onClick={() => openLightbox(activeCfg.floorPlanUrl, `${project.title} — ${activeCfg.title}`, `${activeCfg.superBuiltupArea} Sq. Ft. (${activeCfg.bhkType})`)}
        >
          <img 
            src={activeCfg.floorPlanUrl} 
            alt={activeCfg.title} 
            style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain', borderRadius: 'var(--r-sm)' }}
          />
          <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(0,0,0,0.7)', color: '#FFF', padding: '0.35rem 0.75rem', borderRadius: 'var(--r-pill)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <ZoomIn size={14} />
            <span>Click to Zoom</span>
          </div>
        </div>

        {/* Info Box */}
        <div>
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="badge badge-brand" style={{ marginBottom: '0.5rem' }}>{activeCfg.bhkType} Configuration</span>
            <h4 style={{ fontSize: '1.5rem', color: 'var(--ink)', margin: '0.25rem 0' }}>{activeCfg.title}</h4>
            <p style={{ fontSize: '1rem', color: 'var(--ink-muted)' }}>
              Estimated Price: <strong style={{ color: 'var(--brand)' }}>{activeCfg.priceEstimate || 'Price On Request'}</strong>
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', background: 'var(--sand-muted)', padding: '1.25rem', borderRadius: 'var(--r-md)', marginBottom: '1.75rem', border: '1px solid var(--border)' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', textTransform: 'uppercase', display: 'block' }}>Super Built-up Area</span>
              <strong style={{ fontSize: '1.1rem', color: 'var(--ink)' }}>{activeCfg.superBuiltupArea} Sq. Ft.</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', textTransform: 'uppercase', display: 'block' }}>Carpet Area (RERA)</span>
              <strong style={{ fontSize: '1.1rem', color: 'var(--brand)' }}>{activeCfg.carpetArea} Sq. Ft.</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', textTransform: 'uppercase', display: 'block' }}>Bedrooms</span>
              <strong style={{ fontSize: '1rem', color: 'var(--ink)' }}>{activeCfg.bedrooms} Master Beds</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', textTransform: 'uppercase', display: 'block' }}>Bathrooms & Balconies</span>
              <strong style={{ fontSize: '1rem', color: 'var(--ink)' }}>{activeCfg.bathrooms} Baths | {activeCfg.balconies} Balconies</strong>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <button 
              className="btn btn-primary" 
              onClick={() => openEnquiryModal(project.title, `Floor Plan PDF for ${activeCfg.title}`)}
            >
              <Download size={16} /> Download PDF
            </button>
            <button 
              className="btn btn-ghost-warm" 
              onClick={() => openSiteVisitModal(project.title)}
            >
              <Car size={16} /> Inspect Sample Flat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
