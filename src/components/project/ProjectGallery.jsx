import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { ZoomIn, Eye, Sparkles } from 'lucide-react';

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
    <section style={{ 
      background: '#FFF', 
      borderRadius: 'var(--r-xl)', 
      padding: '2.5rem', 
      border: '1px solid var(--border)', 
      boxShadow: 'var(--shadow-sm)', 
      marginBottom: '2.5rem' 
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
        <div>
          <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={14} color="var(--brand)" /> SEE IT UP CLOSE
          </span>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', margin: '0.25rem 0 0 0' }}>
            Project Photo & Architectural Gallery
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginTop: '0.25rem' }}>
            Browse high-resolution elevations, actual drone perspectives, blueprints and campus infrastructure ({galleryItems.length} photos)
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map(cat => {
            const count = cat === 'All' ? galleryItems.length : galleryItems.filter(i => i.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`btn btn-sm ${isActive ? 'btn-primary' : 'btn-ghost-warm'}`}
                style={{ 
                  borderRadius: 'var(--r-pill)',
                  fontSize: '0.8rem',
                  padding: '0.4rem 0.9rem'
                }}
              >
                {cat} <span style={{ opacity: 0.75, marginLeft: '0.25rem' }}>({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '1.25rem' 
      }}>
        {filteredItems.map((item, idx) => (
          <div
            key={item.url + idx}
            onClick={() => openLightbox(item.url, `${project.title} — ${item.title || `View ${idx + 1}`}`, item.category || project.title)}
            style={{
              position: 'relative',
              borderRadius: 'var(--r-lg)',
              overflow: 'hidden',
              background: '#0F172A',
              border: '1px solid var(--border)',
              cursor: 'zoom-in',
              boxShadow: 'var(--shadow-xs)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              aspectRatio: '4/3',
              group: true
            }}
            className="gallery-card hover-lift"
          >
            <img
              src={item.url}
              alt={item.title || `Gallery Image ${idx + 1}`}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                display: 'block'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            />

            {/* Gradient Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0) 50%)',
              pointerEvents: 'none'
            }} />

            {/* Top Category Badge */}
            {item.category && (
              <div style={{
                position: 'absolute',
                top: '0.75rem',
                left: '0.75rem',
                background: 'rgba(15, 23, 42, 0.75)',
                color: '#FFF',
                backdropFilter: 'blur(6px)',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--r-pill)',
                fontSize: '0.7rem',
                fontWeight: 600,
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}>
                {item.category}
              </div>
            )}

            {/* Bottom Title & Zoom */}
            <div style={{
              position: 'absolute',
              bottom: '0.75rem',
              left: '0.75rem',
              right: '0.75rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              pointerEvents: 'none'
            }}>
              <p style={{
                color: '#FFF',
                fontSize: '0.85rem',
                fontWeight: 600,
                margin: 0,
                textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                maxWidth: '80%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
                {item.title || `View ${idx + 1}`}
              </p>

              <span style={{
                background: 'var(--brand)',
                color: '#FFF',
                borderRadius: '50%',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
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
