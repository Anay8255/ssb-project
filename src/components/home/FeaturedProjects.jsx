import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import { useModal } from '../../context/ModalContext';
import { 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Download, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';

export const FeaturedProjects = () => {
  const { projects } = useStore();
  const { openEnquiryModal } = useModal();
  const navigate = useNavigate();
  
  const [filter, setFilter] = useState('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Drag / Swipe handling
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragThreshold = 40;

  // Responsive cardsPerView detection
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category?.toUpperCase() === filter || p.status?.toUpperCase() === filter);

  const maxIndex = Math.max(0, filteredProjects.length - cardsPerView);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  // Ensure currentIndex stays within bounds when resizing or filtering
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  const goToNext = useCallback(() => {
    if (filteredProjects.length <= cardsPerView) return;
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [filteredProjects.length, cardsPerView, maxIndex]);

  const goToPrev = useCallback(() => {
    if (filteredProjects.length <= cardsPerView) return;
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [filteredProjects.length, cardsPerView, maxIndex]);

  // Auto-slide timer (4.5s)
  useEffect(() => {
    if (!isAutoPlay || isPaused || filteredProjects.length <= cardsPerView) return;

    const timer = setInterval(() => {
      goToNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isAutoPlay, isPaused, filteredProjects.length, cardsPerView, goToNext]);

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > dragThreshold) {
      goToNext();
    } else if (distance < -dragThreshold) {
      goToPrev();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setTouchStart(e.clientX);
    setTouchEnd(e.clientX);
    setIsPaused(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const distance = touchStart - touchEnd;
      if (distance > dragThreshold) {
        goToNext();
      } else if (distance < -dragThreshold) {
        goToPrev();
      }
    }
    setIsDragging(false);
    setIsPaused(false);
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
    setIsPaused(false);
  };

  const getStatusBadge = (status) => {
    const s = (status || '').toLowerCase();
    if (s.includes('complete') || s.includes('delivered')) {
      return (
        <span className="luxury-status-badge status-delivered">
          <span className="luxury-badge-dot dot-emerald" />
          <span>Delivered &amp; Ready</span>
        </span>
      );
    }
    if (s.includes('ongoing') || s.includes('construction')) {
      return (
        <span className="luxury-status-badge status-ongoing">
          <span className="luxury-badge-dot dot-amber" />
          <span>Under Construction</span>
        </span>
      );
    }
    return (
      <span className="luxury-status-badge status-upcoming">
        <span className="luxury-badge-dot dot-blue" />
        <span>Upcoming Launch</span>
      </span>
    );
  };

  const formatPriceDisplay = (project) => {
    if (project.priceDisplay && project.priceDisplay.toLowerCase().includes('delivered')) {
      return { label: 'STATUS', value: 'Delivered & Handed Over', isHighlight: true };
    }
    if (project.priceDisplay && project.priceDisplay.toLowerCase().includes('request')) {
      return { label: 'PRICING', value: 'Price on Request', isHighlight: false };
    }
    return { label: 'STARTING AT', value: project.priceDisplay || '₹56 Lakhs Onwards', isHighlight: true };
  };

  const isNavDisabled = filteredProjects.length <= cardsPerView;
  const totalDots = maxIndex + 1;

  return (
    <section className="featured-section" id="featured-projects-section">
      <div className="container">
        {/* Section Top Header */}
        <div className="featured-header-box">
          <div className="featured-header-left">
            <div className="featured-badge-pill">
              <Sparkles size={13} className="text-brand" />
              <span>PREMIER PROPERTY SHOWCASE</span>
            </div>
            <h2 className="featured-main-heading">
              Signature Real Estate Developments
            </h2>
            <p className="featured-sub-heading">
              UP-RERA verified master-planned residential townships and prime commercial hubs in Varanasi &amp; Lucknow.
            </p>
          </div>

          {/* Header Controls: Slide Nav & Auto Play Status */}
          <div className="featured-header-nav-wrap">
            <button 
              type="button" 
              className={`featured-autoplay-pill ${!isAutoPlay || isPaused ? 'paused' : ''}`}
              onClick={() => setIsAutoPlay(prev => !prev)}
              title={isAutoPlay ? (isPaused ? "Paused on hover" : "Auto-sliding active (click to pause)") : "Auto-slide paused (click to play)"}
            >
              <span className={`featured-pulse-dot ${!isAutoPlay || isPaused ? 'paused' : ''}`} />
              <span>{isAutoPlay ? (isPaused ? 'Paused' : 'Auto 3-Card Slide') : 'Manual Slide'}</span>
              {isAutoPlay ? <Pause size={12} /> : <Play size={12} />}
            </button>

            <div className="featured-header-nav-controls">
              <button
                type="button"
                className="featured-nav-btn prev"
                onClick={goToPrev}
                disabled={isNavDisabled}
                aria-label="Previous developments slide"
                title="Previous Slide"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="featured-nav-counter">
                <span>{currentIndex + 1}</span>
                <span className="featured-nav-divider">/</span>
                <span>{Math.max(1, totalDots)}</span>
              </div>
              <button
                type="button"
                className="featured-nav-btn next"
                onClick={goToNext}
                disabled={isNavDisabled}
                aria-label="Next developments slide"
                title="Next Slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Category & Status Filter Tabs */}
        <div className="featured-filter-row-wrap">
          <div className="featured-filter-pills-row">
            {[
              { id: 'ALL', label: 'All Developments' },
              { id: 'RESIDENTIAL', label: 'Residential' },
              { id: 'COMMERCIAL', label: 'Commercial' },
              { id: 'ONGOING', label: 'Under Construction' },
              { id: 'COMPLETED', label: 'Ready Possession' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`featured-filter-btn ${filter === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Card Slide Carousel Container */}
        <div className="featured-slider-container">
          {/* Floating Side Arrow: Prev */}
          {!isNavDisabled && (
            <button
              type="button"
              className="featured-side-arrow prev"
              onClick={goToPrev}
              aria-label="Previous slide"
              title="Previous Developments"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Viewport */}
          <div 
            className={`featured-slider-viewport ${isDragging ? 'is-dragging' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {/* Sliding Track (3 Cards per View on Desktop) */}
            <div 
              className="featured-slider-track"
              style={{
                '--current-index': currentIndex,
                '--cards-per-view': cardsPerView,
                '--slide-gap': '1.5rem'
              }}
            >
              {filteredProjects.map((project) => {
                const priceInfo = formatPriceDisplay(project);
                return (
                  <div 
                    key={project.id} 
                    className="featured-slide-item"
                  >
                    <div 
                      className="luxury-project-card"
                      onClick={() => navigate(`/projects/${project.slug}`)}
                    >
                      {/* Card Image Header */}
                      <div className="luxury-card-media">
                        <img 
                          src={project.featuredImage} 
                          alt={project.title} 
                          loading="lazy"
                          className="luxury-card-img"
                          draggable={false}
                        />
                        
                        <div className="luxury-card-gradient-overlay" />

                        {/* Top Badges */}
                        <div className="luxury-card-top-bar">
                          {getStatusBadge(project.status)}
                          <span className="luxury-category-pill">
                            {project.category}
                          </span>
                        </div>
                        
                        {/* Bottom RERA Pill */}
                        <div className="luxury-card-rera-pill">
                          <ShieldCheck size={12} className="text-gold" />
                          <span>RERA: {project.reraNumber?.split('/')[0] || project.reraNumber}</span>
                        </div>
                      </div>

                      {/* Card Information Body */}
                      <div className="luxury-card-body">
                        <div>
                          {/* Location Row */}
                          <div className="luxury-card-location">
                            <MapPin size={13} className="text-brand flex-shrink-0" />
                            <span className="truncate">{project.locationName}</span>
                          </div>

                          {/* Title */}
                          <h3 className="luxury-card-title">
                            {project.title}
                          </h3>

                          {/* Tagline */}
                          <p className="luxury-card-tagline">
                            {project.tagline || project.description?.substring(0, 110) + '...'}
                          </p>
                        </div>

                        <div>
                          {/* Specs Metric Strip */}
                          <div className="luxury-specs-strip">
                            <div className="luxury-spec-col">
                              <span className="luxury-spec-label">{priceInfo.label}</span>
                              <strong className={`luxury-spec-value ${priceInfo.isHighlight ? 'text-brand' : 'text-slate'}`}>
                                {priceInfo.value}
                              </strong>
                            </div>
                            <div className="luxury-spec-col text-right">
                              <span className="luxury-spec-label">LAND AREA</span>
                              <strong className="luxury-spec-value text-dark">
                                {project.totalLandArea || 'Master Planned'}
                              </strong>
                            </div>
                          </div>

                          {/* Action Button Bar */}
                          <div className="luxury-card-actions">
                            <button 
                              type="button"
                              className="luxury-explore-btn"
                            >
                              <span>Explore Development</span>
                              <ArrowRight size={14} className="luxury-arrow-icon" />
                            </button>
                            
                            <button 
                              type="button"
                              className="luxury-brochure-icon-btn" 
                              onClick={(e) => {
                                e.stopPropagation();
                                openEnquiryModal(project.title, 'Brochure Download');
                              }}
                              title="Download Official Brochure"
                              aria-label="Download Official Brochure"
                            >
                              <Download size={15} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Floating Side Arrow: Next */}
          {!isNavDisabled && (
            <button
              type="button"
              className="featured-side-arrow next"
              onClick={goToNext}
              aria-label="Next slide"
              title="Next Developments"
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>

        {/* Dots Pagination Indicator */}
        {totalDots > 1 && (
          <div className="featured-dots-nav">
            {Array.from({ length: totalDots }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`featured-dot-btn ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                title={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
