import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { ZoomIn, Eye, Sparkles, Image as ImageIcon, Layers } from 'lucide-react';

export const ProjectGallery = ({ project }) => {
  const { openLightbox } = useModal();
  const [activeCategory, setActiveCategory] = useState('All');

  if (!project || !project.gallery || project.gallery.length === 0) return null;

  const rawGallery = project.gallery;
  
  // Format items nicely
  const galleryItems = rawGallery.map((item, idx) => {
    if (typeof item === 'string') {
      return {
        url: item,
        title: `Project View ${idx + 1}`,
        category: 'Exterior'
      };
    }
    return item;
  });

  const categories = ['All', ...Array.from(new Set(galleryItems.map(i => i.category || 'General')))];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(i => i.category === activeCategory);

  return (
    <section 
      id="gallery" 
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.25rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.75rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(224, 84, 43, 0.08)', color: 'var(--brand)', padding: '0.35rem 0.85rem', borderRadius: 'var(--r-pill)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            <ImageIcon size={13} /> High-Resolution Visual Showcase
          </div>
          <h3 style={{ fontSize: '2.2rem', color: 'var(--ink)', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
            Architectural Gallery & Drone Perspectives
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--ink-muted)', marginTop: '0.35rem', maxWidth: '650px', lineHeight: 1.5 }}>
            Browse certified project elevations, aerial drone photography, blueprint schematics, and construction finishes ({galleryItems.length} curated images).
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map(cat => {
            const count = cat === 'All' ? galleryItems.length : galleryItems.filter(i => i.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  borderRadius: 'var(--r-pill)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  padding: '0.5rem 1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  border: isActive ? '1px solid var(--brand)' : '1px solid var(--border)',
                  background: isActive ? 'var(--brand)' : '#F8FAFC',
                  color: isActive ? '#FFFFFF' : 'var(--ink)',
                  boxShadow: isActive ? '0 4px 12px rgba(224, 84, 43, 0.3)' : 'none'
                }}
              >
                {cat} <span style={{ opacity: 0.8, marginLeft: '0.25rem', fontSize: '0.75rem' }}>({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Editorial Responsive Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {filteredItems.map((item, idx) => (
          <div
            key={item.url + idx}
            onClick={() => openLightbox(item.url, `${project.title} — ${item.title || `View ${idx + 1}`}`, item.category || project.title)}
            style={{
              position: 'relative',
              borderRadius: 'var(--r-xl, 16px)',
              overflow: 'hidden',
              background: '#0F172A',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              cursor: 'zoom-in',
              boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s ease',
              aspectRatio: '4/3'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 15px 30px -8px rgba(0, 0, 0, 0.15)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px -3px rgba(0, 0, 0, 0.05)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1)';
            }}
          >
            <img
              src={item.url}
              alt={item.title || `Gallery Image ${idx + 1}`}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'block'
              }}
            />

            {/* Gradient Scrim */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(10, 17, 32, 0.92) 0%, rgba(10, 17, 32, 0.2) 50%, rgba(10, 17, 32, 0) 100%)',
              pointerEvents: 'none'
            }} />

            {/* Top Category Badge */}
            {item.category && (
              <div style={{
                position: 'absolute',
                top: '0.85rem',
                left: '0.85rem',
                background: 'rgba(15, 23, 42, 0.85)',
                color: '#FFF',
                backdropFilter: 'blur(8px)',
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--r-pill)',
                fontSize: '0.72rem',
                fontWeight: 700,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                letterSpacing: '0.04em'
              }}>
                {item.category}
              </div>
            )}

            {/* Bottom Details Bar */}
            <div style={{
              position: 'absolute',
              bottom: '0.85rem',
              left: '0.85rem',
              right: '0.85rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pointerEvents: 'none'
            }}>
              <p style={{
                color: '#FFFFFF',
                fontSize: '0.9rem',
                fontWeight: 600,
                margin: 0,
                textShadow: '0 2px 6px rgba(0,0,0,0.8)',
                maxWidth: '82%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
                {item.title || `View ${idx + 1}`}
              </p>

              <span style={{
                background: 'linear-gradient(135deg, var(--brand) 0%, #C4431C 100%)',
                color: '#FFF',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(224, 84, 43, 0.5)',
                flexShrink: 0
              }}>
                <ZoomIn size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
