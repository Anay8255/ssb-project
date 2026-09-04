import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { useModal } from '../context/ModalContext';
import { Search, X, MapPin, ShieldCheck, ArrowRight, Download, Sparkles, Building2, Layers } from 'lucide-react';

export const ProjectsPage = () => {
  const { projects } = useStore();
  const { openEnquiryModal } = useModal();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchesFilter =
        filter === 'ALL' ||
        p.category?.toUpperCase() === filter ||
        p.status?.toUpperCase() === filter;
      const matchesSearch =
        p.title?.toLowerCase().includes(search.toLowerCase()) ||
        p.city?.toLowerCase().includes(search.toLowerCase()) ||
        p.locationName?.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [projects, filter, search]);

  const tabCounts = useMemo(() => {
    return {
      ALL: projects.length,
      RESIDENTIAL: projects.filter(p => p.category?.toUpperCase() === 'RESIDENTIAL').length,
      COMMERCIAL: projects.filter(p => p.category?.toUpperCase() === 'COMMERCIAL').length,
      ONGOING: projects.filter(p => p.status?.toUpperCase() === 'ONGOING').length,
      COMPLETED: projects.filter(p => p.status?.toUpperCase() === 'COMPLETED').length
    };
  }, [projects]);

  const getStatusBadge = (status) => {
    const s = (status || '').toLowerCase();
    if (s.includes('complete') || s.includes('delivered')) {
      return (
        <span className="luxury-status-badge status-delivered">
          <span className="luxury-badge-dot dot-emerald" />
          <span>Ready Possession</span>
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

  return (
    <div className="fade-in" style={{ paddingBottom: '6rem' }}>
      {/* Hero Header */}
      <section className="projects-hero">
        <img 
          src="/hero-sai-gaon.png" 
          alt="Our Projects — SSB Group" 
          className="projects-hero-bg-img" 
        />
        <div className="projects-hero-scrim"></div>
        <div className="projects-hero-grain"></div>
        <div className="container projects-hero-container">
          <div className="projects-hero-content">
            <div className="featured-badge-pill" style={{ background: 'rgba(220, 90, 50, 0.15)', color: '#FF7A50', border: '1px solid rgba(220, 90, 50, 0.3)' }}>
              <Sparkles size={13} />
              <span>PREMIER PROPERTY PORTFOLIO</span>
            </div>
            <h1 className="projects-hero-title">
              Our Projects
            </h1>
            <p className="projects-hero-desc">
              Residential neighbourhoods, group housing, affordable homes and commercial destinations across Eastern Uttar Pradesh.
            </p>
            <div className="projects-hero-badges">
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">4+</span>
                <span className="about-hero-stat-lbl">Active Projects</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">100%</span>
                <span className="about-hero-stat-lbl">UP-RERA Verified</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">Varanasi &amp; Lucknow</span>
                <span className="about-hero-stat-lbl">Growth Corridors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Filter & Search Toolbar */}
      <div className="projects-filter-bar">
        <div className="container projects-filter-container">
          {/* Category Tabs */}
          <div className="projects-filter-tabs">
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
                className={`project-filter-btn ${filter === tab.id ? 'active' : ''}`}
              >
                <span>{tab.label}</span>
                {tabCounts[tab.id] > 0 && (
                  <span className="project-filter-count">{tabCounts[tab.id]}</span>
                )}
              </button>
            ))}
          </div>

          {/* Luxury Search Input Box */}
          <div className="project-search-box">
            <div className="project-search-input-wrap">
              <Search size={17} className="project-search-icon" />
              <input 
                type="text" 
                placeholder="Search by project name or locality..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="project-search-input"
              />
              {search && (
                <button 
                  type="button" 
                  onClick={() => setSearch('')}
                  className="project-search-clear"
                  title="Clear search"
                  aria-label="Clear search query"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Listings Grid */}
      <div className="container" style={{ paddingTop: '2.5rem' }}>
        {/* Results Counter Sub-bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
          <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>
            Showing <strong style={{ color: '#0F172A' }}>{filtered.length}</strong> of {projects.length} Master-Planned Developments
          </span>
          {(filter !== 'ALL' || search) && (
            <button
              type="button"
              onClick={() => { setFilter('ALL'); setSearch(''); }}
              style={{
                background: 'none',
                border: 'none',
                color: '#DC5A32',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Clear Filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--ink-muted)' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.25rem' }}>No developments match your search or filter criteria.</p>
            <button
              className="btn btn-primary"
              onClick={() => { setFilter('ALL'); setSearch(''); }}
              style={{ borderRadius: 'var(--r-pill)' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="projects-grid-layout">
            {filtered.map((project) => {
              const priceInfo = formatPriceDisplay(project);
              return (
                <div
                  key={project.id}
                  className="luxury-project-card"
                  onClick={() => navigate(`/projects/${project.slug}`)}
                >
                  {/* Visual Image Header */}
                  <div className="luxury-card-media">
                    <img
                      src={project.featuredImage}
                      alt={project.title}
                      loading="lazy"
                      className="luxury-card-img"
                      draggable={false}
                    />

                    {/* Gradient Vignette Scrim */}
                    <div className="luxury-card-gradient-overlay" />

                    {/* Top Badges */}
                    <div className="luxury-card-top-bar">
                      {getStatusBadge(project.status)}
                      <span className="luxury-category-pill">
                        {project.category}
                      </span>
                    </div>

                    {/* Bottom RERA Badge */}
                    <div className="luxury-card-rera-pill">
                      <ShieldCheck size={13} className="text-gold" />
                      <span>RERA: {project.reraNumber?.split('/')[0] || project.reraNumber}</span>
                    </div>
                  </div>

                  {/* Content & Specs Body */}
                  <div className="luxury-card-body">
                    <div className="luxury-card-info-top">
                      {/* Location Row */}
                      <div className="luxury-card-location">
                        <MapPin size={13} className="luxury-loc-icon" />
                        <span className="luxury-loc-text">{project.locationName}</span>
                      </div>

                      {/* Title (Standardized 2-line height frame) */}
                      <h3 className="luxury-card-title" title={project.title}>
                        {project.title}
                      </h3>

                      {/* Tagline (Standardized 2-line height frame) */}
                      <p className="luxury-card-tagline">
                        {project.tagline || project.description?.substring(0, 110) + '...'}
                      </p>
                    </div>

                    <div className="luxury-card-info-bottom">
                      {/* Pricing & Area Highlight Bar */}
                      <div className="luxury-specs-strip">
                        <div className="luxury-spec-col">
                          <span className="luxury-spec-label">{priceInfo.label}</span>
                          <strong className={`luxury-spec-value ${priceInfo.isHighlight ? 'text-brand' : 'text-slate'}`}>
                            {priceInfo.value}
                          </strong>
                        </div>
                        <div className="luxury-spec-col text-right">
                          <span className="luxury-spec-label">LAND PARCEL</span>
                          <strong className="luxury-spec-value text-dark">
                            {project.totalLandArea || 'Master Planned'}
                          </strong>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="luxury-card-actions">
                        <button
                          type="button"
                          className="luxury-explore-btn"
                        >
                          <span>Explore Blueprint &amp; Plans</span>
                          <ArrowRight size={14} className="luxury-arrow-icon" />
                        </button>

                        <button
                          type="button"
                          className="luxury-brochure-icon-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            openEnquiryModal(project.title, 'Official Brochure Download');
                          }}
                          title="Download Official Brochure (PDF)"
                          aria-label="Download Official Brochure (PDF)"
                        >
                          <Download size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

