import React, { useState, useEffect, useRef } from 'react';
import { useModal } from '../../context/ModalContext';
import { 
  ZoomIn, Image as ImageIcon, ChevronLeft, ChevronRight, 
  Play, Pause, Maximize2, Layers 
} from 'lucide-react';

export const ProjectGallery = ({ project }) => {
  const { openLightbox } = useModal();
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const thumbnailContainerRef = useRef(null);

  if (!project || !project.gallery || project.gallery.length === 0) return null;

  const rawGallery = project.gallery;
  
  const galleryItems = rawGallery
    .filter(item => {
      const cat = (typeof item === 'object' ? item.category : '').toLowerCase();
      const title = (typeof item === 'object' ? item.title : '').toLowerCase();
      return !cat.includes('floor') && !cat.includes('plan') && !cat.includes('layout') && !title.includes('floor plan') && !title.includes('schematic');
    })
    .map((item, idx) => {
      if (typeof item === 'string') {
        return {
          url: item,
          title: `Architectural Perspective ${idx + 1}`,
          category: 'Exterior'
        };
      }
      return item;
    });

  const categories = ['All', ...Array.from(new Set(galleryItems.map(i => i.category || 'Exterior')))];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(i => i.category === activeCategory);

  // Reset index when category changes
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  // Slide navigation
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  // Autoplay timer
  useEffect(() => {
    let interval = null;
    if (isAutoPlaying && filteredItems.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
      }, 3800);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, filteredItems.length]);

  // Ensure current index is valid if filtered items length changes
  useEffect(() => {
    if (currentIndex >= filteredItems.length) {
      setCurrentIndex(0);
    }
  }, [filteredItems.length, currentIndex]);

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeThumb = thumbnailContainerRef.current.children[currentIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  const currentItem = filteredItems[currentIndex] || filteredItems[0];

  return (
    <section 
      id="gallery" 
      className="editorial-card-section"
      style={{ padding: '2.5rem 2rem' }}
    >
      {/* Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.75rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1.25rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(197, 160, 89, 0.12)', color: 'var(--gold, #C5A059)', border: '1px solid rgba(197, 160, 89, 0.3)', padding: '0.25rem 0.85rem', borderRadius: 'var(--r-pill, 9999px)', fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            <ImageIcon size={13} /> Interactive Visual Showcase
          </div>
          <h3 style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.1rem)', color: '#0F172A', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
            Architectural Gallery & Drone Perspectives
          </h3>
          <p style={{ fontSize: '0.92rem', color: '#64748B', marginTop: '0.35rem', maxWidth: '650px', lineHeight: 1.5 }}>
            Explore 3D certified elevations, layout schematics, and high-street frontage views ({filteredItems.length} perspectives).
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
          {categories.map(cat => {
            const count = cat === 'All' ? galleryItems.length : galleryItems.filter(i => i.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                style={{
                  borderRadius: 'var(--r-pill, 9999px)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  padding: '0.4rem 0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  border: isActive ? '1px solid #0F294A' : '1px solid #E2E8F0',
                  background: isActive ? '#0F294A' : '#F8FAFC',
                  color: isActive ? '#FFFFFF' : '#334155',
                  boxShadow: isActive ? '0 4px 12px rgba(15, 41, 74, 0.25)' : 'none'
                }}
              >
                {cat} <span style={{ opacity: 0.8, marginLeft: '0.2rem', fontSize: '0.72rem' }}>({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Slide Showcase Container */}
      <div 
        style={{
          position: 'relative',
          borderRadius: '18px',
          overflow: 'hidden',
          background: '#0A1120',
          boxShadow: '0 15px 40px -10px rgba(15, 23, 42, 0.3)',
          border: '1.5px solid rgba(197, 160, 89, 0.35)'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main Image Viewport */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(280px, 52vw, 540px)',
            cursor: 'zoom-in',
            overflow: 'hidden'
          }}
          onClick={() => openLightbox(currentItem.url, `${project.title} — ${currentItem.title}`, currentItem.category || project.title)}
        >
          <img
            key={currentItem.url}
            src={currentItem.url}
            alt={currentItem.title || `Perspective ${currentIndex + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              background: '#0A1120',
              transition: 'transform 0.4s ease, opacity 0.3s ease'
            }}
          />

          {/* Vignette Overlay for Crisp Typography */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(10, 17, 32, 0.6) 0%, transparent 25%, transparent 65%, rgba(10, 17, 32, 0.9) 100%)',
            pointerEvents: 'none'
          }} />

          {/* Top Status & Controls Overlay */}
          <div style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            right: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 5
          }}>
            <span style={{
              background: 'rgba(15, 23, 42, 0.85)',
              color: 'var(--gold, #C5A059)',
              border: '1px solid rgba(197, 160, 89, 0.4)',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--r-pill, 9999px)',
              fontSize: '0.74rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)'
            }}>
              {currentItem.category || 'Perspective'} · {currentIndex + 1} of {filteredItems.length}
            </span>

            <div style={{ display: 'flex', gap: '0.45rem' }}>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAutoPlaying(!isAutoPlaying);
                }}
                style={{
                  background: isAutoPlaying ? 'rgba(16, 185, 129, 0.25)' : 'rgba(15, 23, 42, 0.85)',
                  color: isAutoPlaying ? '#4ADE80' : '#FFF',
                  border: isAutoPlaying ? '1px solid rgba(74, 222, 128, 0.45)' : '1px solid rgba(255, 255, 255, 0.2)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.2s ease'
                }}
                title={isAutoPlaying ? 'Pause Autoplay' : 'Start Autoplay'}
                aria-label={isAutoPlaying ? 'Pause Autoplay' : 'Start Autoplay'}
              >
                {isAutoPlaying ? <Pause size={14} /> : <Play size={14} style={{ marginLeft: '1px' }} />}
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openLightbox(currentItem.url, `${project.title} — ${currentItem.title}`, currentItem.category || project.title);
                }}
                style={{
                  background: 'rgba(15, 23, 42, 0.85)',
                  color: '#FFF',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.2s ease'
                }}
                title="Open Fullscreen Lightbox"
                aria-label="Open Fullscreen Lightbox"
              >
                <Maximize2 size={14} />
              </button>
            </div>
          </div>

          {/* Bottom Title & Descriptor Bar */}
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            right: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            zIndex: 5,
            pointerEvents: 'none'
          }}>
            <div>
              <span style={{
                color: 'var(--gold, #C5A059)',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                display: 'block',
                marginBottom: '0.2rem'
              }}>
                {currentItem.category || 'High-Resolution Perspective'}
              </span>
              <h4 style={{
                color: '#FFFFFF',
                fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
                margin: 0,
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                lineHeight: 1.25,
                textShadow: '0 2px 10px rgba(0,0,0,0.85)'
              }}>
                {currentItem.title}
              </h4>
            </div>

            <div style={{
              background: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 'var(--r-pill, 9999px)',
              padding: '0.3rem 0.75rem',
              color: '#CBD5E1',
              fontSize: '0.74rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              backdropFilter: 'blur(8px)'
            }}>
              <ZoomIn size={12} style={{ color: 'var(--gold, #C5A059)' }} />
              <span>Tap to Expand</span>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        {filteredItems.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Slide"
              style={{
                position: 'absolute',
                top: '50%',
                left: '1rem',
                transform: 'translateY(-50%)',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(15, 23, 42, 0.8)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0F294A';
                e.currentTarget.style.borderColor = 'var(--gold, #C5A059)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(15, 23, 42, 0.8)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Slide"
              style={{
                position: 'absolute',
                top: '50%',
                right: '1rem',
                transform: 'translateY(-50%)',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(15, 23, 42, 0.8)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0F294A';
                e.currentTarget.style.borderColor = 'var(--gold, #C5A059)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(15, 23, 42, 0.8)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {/* Bottom Interactive Thumbnail Carousel Strip */}
      {filteredItems.length > 1 && (
        <div style={{ marginTop: '1.25rem' }}>
          <div 
            ref={thumbnailContainerRef}
            style={{
              display: 'flex',
              gap: '0.65rem',
              overflowX: 'auto',
              padding: '0.35rem 0.25rem',
              scrollbarWidth: 'none'
            }}
          >
            {filteredItems.map((item, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={item.url + idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  style={{
                    flexShrink: 0,
                    width: 'clamp(72px, 16vw, 105px)',
                    height: 'clamp(54px, 12vw, 75px)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: isActive ? '2px solid var(--gold, #C5A059)' : '2px solid transparent',
                    background: '#0F172A',
                    cursor: 'pointer',
                    padding: 0,
                    position: 'relative',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    opacity: isActive ? 1 : 0.6,
                    transform: isActive ? 'scale(1.04)' : 'scale(1)',
                    boxShadow: isActive ? '0 4px 14px rgba(197, 160, 89, 0.4)' : '0 2px 6px rgba(0,0,0,0.15)'
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <img
                    src={item.url}
                    alt={`Thumb ${idx + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {isActive && (
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, #C5A059 0%, #F5E7C8 100%)'
                    }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
