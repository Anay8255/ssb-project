import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { useModal } from '../context/ModalContext';
import { Search, MapPin, ShieldCheck, ArrowRight, Download, SlidersHorizontal } from 'lucide-react';

export const ProjectsPage = () => {
  const { projects } = useStore();
  const { openEnquiryModal } = useModal();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');

  const filtered = projects.filter(p => {
    const matchesFilter = filter === 'ALL' || p.category.toUpperCase() === filter || p.status.toUpperCase() === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.city.toLowerCase().includes(search.toLowerCase()) ||
                          p.locationName.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="fade-in" style={{ paddingBottom: '5rem' }}>
      {/* Header */}
      <section className="subpage-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>RERA APPROVED PORTFOLIO</span>
          <h1 className="subpage-hero-title">
            Our Real Estate Portfolio
          </h1>
          <p className="subpage-hero-desc">
            Discover our premium residential townships, monolithic high-rises, and modern commercial landmarks across Eastern Uttar Pradesh.
          </p>
        </div>
      </section>

      {/* Filter & Search Toolbar */}
      <div style={{ background: '#FFF', borderBottom: '1px solid var(--border)', padding: '1.5rem 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.25rem' }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'ALL', label: 'All Developments' },
              { id: 'RESIDENTIAL', label: 'Residential' },
              { id: 'COMMERCIAL', label: 'Commercial' },
              { id: 'ONGOING', label: 'Under Construction' },
              { id: 'COMPLETED', label: 'Completed / Handed Over' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`btn btn-sm ${filter === tab.id ? 'btn-primary' : 'btn-ghost-warm'}`}
                style={{ borderRadius: 'var(--r-pill)' }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '260px' }}>
            <Search size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-muted)' }} />
            <input 
              type="text" 
              placeholder="Search by project name or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '2.4rem', fontSize: '0.9rem' }}
            />
          </div>
        </div>
      </div>

      {/* Project Listings */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--ink-muted)' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>No projects match your filter criteria.</p>
            <button className="btn btn-primary" onClick={() => { setFilter('ALL'); setSearch(''); }}>
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
                  background: 'var(--surface)',
                  borderRadius: 'var(--r-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform var(--dur-norm) var(--ease), box-shadow var(--dur-norm) var(--ease)'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <img 
                    src={project.featuredImage} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="project-card-image"
                  />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
                    <span className={`badge ${project.status === 'Completed' ? 'badge-success' : 'badge-brand'}`}>
                      {project.status.toUpperCase()}
                    </span>
                    <span className="badge badge-ink">
                      {project.category}
                    </span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '0.75rem', right: '0.75rem', background: 'rgba(24, 24, 27, 0.85)', backdropFilter: 'blur(8px)', color: '#FFF', padding: '0.35rem 0.75rem', borderRadius: 'var(--r-sm)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <ShieldCheck size={14} style={{ color: 'var(--gold)' }} />
                    <span>RERA: {project.reraNumber}</span>
                  </div>
                </div>

                {/* Details */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    <MapPin size={14} />
                    <span>{project.locationName}</span>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--ink)' }}>
                    {project.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--ink-muted)', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                    {project.tagline}
                  </p>

                  {/* Pricing Matrix */}
                  <div style={{ padding: '1rem', background: 'var(--sand-muted)', borderRadius: 'var(--r-md)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--border)' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', display: 'block', fontWeight: 600 }}>Starting Price</span>
                      <strong style={{ fontSize: '1.15rem', color: 'var(--brand)' }}>{project.priceDisplay}</strong>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', display: 'block', fontWeight: 600 }}>Total Units / Area</span>
                      <strong style={{ fontSize: '0.95rem', color: 'var(--ink)' }}>{project.totalUnitsCount ? `${project.totalUnitsCount} Units` : project.totalLandArea}</strong>
                    </div>
                  </div>

                  {/* CTA Actions */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.75rem' }}>
                    <div className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      <span>View Project & Plans</span>
                      <ArrowRight size={15} />
                    </div>
                    <button 
                      className="btn btn-ghost-warm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        openEnquiryModal(project.title, 'Brochure Download');
                      }}
                      title="Download E-Brochure"
                    >
                      <Download size={16} />
                    </button>
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
