import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import { useModal } from '../../context/ModalContext';
import { ArrowRight, MapPin, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

export const FeaturedProjects = () => {
  const { projects } = useStore();
  const { openEnquiryModal } = useModal();
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category.toUpperCase() === filter || p.status.toUpperCase() === filter);

  return (
    <section className="featured-section" style={{ padding: '5rem 0', background: 'var(--sand)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem' }}>
          <span className="eyebrow">OUR MASTERPIECES</span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--ink)', marginBottom: '1rem' }}>
            Featured Developments
          </h2>
          <p style={{ maxWidth: '640px', color: 'var(--ink-muted)', fontSize: '1.05rem' }}>
            Explore our RERA-approved gated communities, high-rise luxury towers, and prime commercial destinations across Eastern Uttar Pradesh.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '1.75rem' }}>
            {[
              { id: 'ALL', label: 'All Projects' },
              { id: 'RESIDENTIAL', label: 'Residential' },
              { id: 'COMMERCIAL', label: 'Commercial' },
              { id: 'ONGOING', label: 'Under Construction' },
              { id: 'COMPLETED', label: 'Ready Possession' }
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
        </div>

        {/* Project Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{
                background: 'var(--surface)',
                borderRadius: 'var(--r-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform var(--dur-norm) var(--ease), box-shadow var(--dur-norm) var(--ease)'
              }}
            >
              {/* Image & Badges */}
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
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
                  <span>RERA Approved</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                  <MapPin size={14} />
                  <span>{project.locationName}</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--ink)' }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', lineHeight: '1.6', marginBottom: '1.25rem', flexGrow: 1 }}>
                  {project.tagline}
                </p>

                {/* Configurations Strip */}
                <div style={{ padding: '0.8rem 1rem', background: 'var(--sand-muted)', borderRadius: 'var(--r-md)', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', display: 'block', fontWeight: 600 }}>Starting Price</span>
                    <strong style={{ fontSize: '1.1rem', color: 'var(--brand)' }}>{project.priceDisplay}</strong>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', display: 'block', fontWeight: 600 }}>Land Area</span>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--ink)' }}>{project.totalLandArea}</strong>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.75rem' }}>
                  <Link to={`/projects/${project.slug}`} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                    <span>Explore Project</span>
                    <ArrowRight size={14} />
                  </Link>
                  <button 
                    className="btn btn-outline btn-sm" 
                    onClick={() => openEnquiryModal(project.title, 'Brochure Download')}
                    title="Download Brochure"
                    aria-label="Download Brochure"
                  >
                    <Download size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
