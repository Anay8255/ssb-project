import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import { useModal } from '../../context/ModalContext';
import { 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Download, 
  Sparkles
} from 'lucide-react';

export const FeaturedProjects = () => {
  const { projects } = useStore();
  const { openEnquiryModal } = useModal();
  const navigate = useNavigate();
  
  const [filter, setFilter] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(0);

  // Responsive cards per view (Desktop = 3, Tablet = 2, Mobile = 1)
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

  const filteredProjects = useMemo(() => {
    if (filter === 'ALL') return projects;
    return projects.filter(p => p.category?.toUpperCase() === filter || p.status?.toUpperCase() === filter);
  }, [filter, projects]);

  // Construct pages of 3 cards at a time
  const pages = useMemo(() => {
    if (!filteredProjects || filteredProjects.length === 0) return [];
    
    if (filteredProjects.length <= cardsPerView) {
      return [filteredProjects];
    }

    const result = [];
    const total = filteredProjects.length;
    for (let i = 0; i < total; i += cardsPerView) {
      const page = [];
      for (let j = 0; j < cardsPerView; j++) {
        page.push(filteredProjects[(i + j) % total]);
      }
      result.push(page);
    }
    return result;
  }, [filteredProjects, cardsPerView]);

  // Reset to initial slide on filter change
  useEffect(() => {
    setCurrentPage(0);
    setIsTransitioning(true);
  }, [filter]);

  // Auto-scroll 3 cards at a time every 4 seconds (right to left, infinite forward loop)
  useEffect(() => {
    if (pages.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentPage(prev => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [pages.length, isPaused]);

  // Seamless infinite loop handler: when reaching the cloned page, jump instantly to page 0
  const handleTransitionEnd = useCallback(() => {
    if (currentPage >= pages.length) {
      setIsTransitioning(false);
      setCurrentPage(0);
    }
  }, [currentPage, pages.length]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 45) {
      // Swiped left: slide to next 3 cards
      setIsTransitioning(true);
      setCurrentPage(prev => prev + 1);
    } else if (distance < -45) {
      // Swiped right: slide to previous 3 cards
      setIsTransitioning(true);
      setCurrentPage(prev => (prev <= 0 ? pages.length - 1 : prev - 1));
    }
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

  // Render clone of page 0 at the end for continuous infinite forward sliding
  const renderedPages = pages.length > 1 ? [...pages, pages[0]] : pages;

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

        {/* 3-Card Auto-Scrolling Slide Carousel Container */}
        <div 
          className="featured-three-card-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="featured-three-card-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
              transition: isTransitioning ? 'transform 0.75s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
            }}
          >
            {renderedPages.map((page, pageIdx) => (
              <div 
                key={`slide-page-${pageIdx}`} 
                className="featured-three-card-page"
              >
                {page.map((project, cardIdx) => {
                  const priceInfo = formatPriceDisplay(project);
                  return (
                    <div 
                      key={`card-${project.id}-${pageIdx}-${cardIdx}`} 
                      className="featured-three-card-col"
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
            ))}
          </div>
        </div>

        {/* Dots Pagination Indicator */}
        {pages.length > 1 && (
          <div className="featured-dots-nav">
            {pages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`featured-dot-btn ${(currentPage % pages.length) === idx ? 'active' : ''}`}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentPage(idx);
                }}
                aria-label={`Go to page ${idx + 1}`}
                title={`Page ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
