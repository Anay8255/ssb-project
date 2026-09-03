import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { useModal } from '../context/ModalContext';
import { Search, MapPin, ShieldCheck, ArrowRight, Download, Sparkles, Building2, Layers } from 'lucide-react';

export const ProjectsPage = () => {
  const { projects } = useStore();
  const { openEnquiryModal, openSiteVisitModal } = useModal();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');

  const filtered = projects.filter(p => {
    const matchesFilter = filter === 'ALL' || p.category.toUpperCase() === filter || p.status.toUpperCase() === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.city?.toLowerCase().includes(search.toLowerCase()) ||
      p.locationName?.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="fade-in" style={{ paddingBottom: '6rem' }}>
      {/* Editorial Luxury Hero */}
      <section className="subpage-hero" style={{ padding: '7rem 0 4.5rem', background: 'transparent', color: '#FFF' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(224, 84, 43, 0.15)', color: 'var(--gold)', padding: '0.35rem 0.95rem', borderRadius: 'var(--r-pill)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(224, 84, 43, 0.3)' }}>
            <Sparkles size={13} /> 100% UP-RERA VERIFIED PORTFOLIO
          </div>
          <h1 className="subpage-hero-title" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', color: '#FFFFFF', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1rem' }}>
            Flagship Landmarks & Living Spaces
          </h1>
          <p className="subpage-hero-desc" style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6, margin: '0 auto' }}>
            Explore our signature residential integrated townships, modern commercial complexes, and master-planned high-streets across Uttar Pradesh.
          </p>
        </div>
      </section>

      {/* Filter & Search Toolbar (Natural scrolling, not sticky) */}
      <div style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border)', padding: '1.5rem 0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.25rem' }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'ALL', label: 'All Developments' },
              { id: 'RESIDENTIAL', label: 'Residential' },
              { id: 'COMMERCIAL', label: 'Commercial' },
              { id: 'ONGOING', label: 'Ongoing Work' },
              { id: 'COMPLETED', label: 'Completed' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                style={{
                  borderRadius: 'var(--r-pill)',
                  padding: '0.55rem 1.15rem',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  border: filter === tab.id ? '1px solid var(--brand)' : '1px solid var(--border)',
                  background: filter === tab.id ? 'var(--brand)' : '#F8FAFC',
                  color: filter === tab.id ? '#FFFFFF' : 'var(--ink)',
                  boxShadow: filter === tab.id ? '0 4px 12px rgba(224, 84, 43, 0.3)' : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div style={{ position: 'relative', minWidth: '280px' }}>
            <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-muted)' }} />
            <input
              type="text"
              placeholder="Search by development or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '2.6rem', fontSize: '0.88rem', borderRadius: 'var(--r-pill)', background: '#F8FAFC' }}
            />
          </div>
        </div>
      </div>

      {/* Project Listings Grid */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--ink-muted)' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.25rem' }}>No developments match your search or filter criteria.</p>
            <button className="btn btn-primary" onClick={() => { setFilter('ALL'); setSearch(''); }} style={{ borderRadius: 'var(--r-pill)' }}>
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2.5rem' }}>
            {filtered.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => navigate(`/projects/${project.slug}`)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--r-2xl, 24px)',
                  overflow: 'hidden',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  boxShadow: '0 10px 30px -10px rgba(15, 23, 42, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 25px 45px -12px rgba(15, 23, 42, 0.15)';
                  const img = e.currentTarget.querySelector('.project-card-image');
                  if (img) img.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(15, 23, 42, 0.06)';
                  const img = e.currentTarget.querySelector('.project-card-image');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Visual Image Header */}
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden', background: '#0F172A' }}>
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
                    className="project-card-image"
                  />

                  {/* Subtle Gradient Scrim */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(0,0,0,0.7) 100%)' }} />

                  {/* Top Badges */}
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
                    <span className="badge badge-brand" style={{ fontSize: '0.72rem', letterSpacing: '0.04em' }}>
                      {project.status.toUpperCase()}
                    </span>
                    <span style={{
                      background: 'rgba(15, 23, 42, 0.85)',
                      color: '#FFF',
                      backdropFilter: 'blur(8px)',
                      padding: '0.25rem 0.7rem',
                      borderRadius: 'var(--r-pill)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom RERA Badge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '0.85rem',
                    right: '0.85rem',
                    background: 'rgba(15, 23, 42, 0.88)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFF',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--r-pill)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}>
                    <ShieldCheck size={13} color="var(--gold)" />
                    <span>RERA: {project.reraNumber}</span>
                  </div>
                </div>

                {/* Content & Specs */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                      <MapPin size={13} />
                      <span>{project.locationName}</span>
                    </div>

                    <h3 style={{ fontSize: '1.65rem', marginBottom: '0.5rem', color: 'var(--ink)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}>
                      {project.title}
                    </h3>

                    <p style={{ fontSize: '0.92rem', color: 'var(--ink-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      {project.tagline || project.description?.substring(0, 120) + '...'}
                    </p>
                  </div>

                  <div>
                    {/* Pricing & Area Highlight Bar */}
                    <div style={{
                      padding: '1rem 1.25rem',
                      background: '#F8FAFC',
                      borderRadius: 'var(--r-xl, 16px)',
                      marginBottom: '1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      border: '1px solid rgba(226, 232, 240, 0.9)'
                    }}>
                      <div>
                        <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--ink-muted)', display: 'block', fontWeight: 700, letterSpacing: '0.04em' }}>Starting Price</span>
                        <strong style={{ fontSize: '1.2rem', color: 'var(--brand)', fontFamily: 'var(--font-heading)' }}>{project.priceDisplay || 'On Request'}</strong>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--ink-muted)', display: 'block', fontWeight: 700, letterSpacing: '0.04em' }}>Land Parcel</span>
                        <strong style={{ fontSize: '1rem', color: 'var(--ink)' }}>{project.totalLandArea || 'Master Planned'}</strong>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.75rem' }}>
                      <button
                        type="button"
                        className="btn btn-primary"
                        style={{ width: '100%', justifyContent: 'center', borderRadius: 'var(--r-pill)', padding: '0.75rem 1.25rem', fontWeight: 700 }}
                      >
                        <span>Explore Blueprint & Plans</span>
                        <ArrowRight size={15} />
                      </button>

                      <button
                        type="button"
                        className="btn btn-outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          openEnquiryModal(project.title, 'Official Brochure Download');
                        }}
                        style={{ borderRadius: 'var(--r-pill)', padding: '0.75rem 0.95rem', background: '#FFFFFF' }}
                        title="Download Official Brochure (PDF)"
                      >
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
