import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import { useModal } from '../../context/ModalContext';
import { ArrowRight, MapPin, CheckCircle2, ShieldCheck, Download, Sparkles, Building2 } from 'lucide-react';

export const FeaturedProjects = () => {
  const { projects } = useStore();
  const { openEnquiryModal } = useModal();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = filter === 'ALL'
    ? projects
    : projects.filter(p => p.category.toUpperCase() === filter || p.status.toUpperCase() === filter);

  return (
    <section className="featured-section" id="featured-projects-section">
      <div className="container">
        <div className="featured-header-box">
          <div className="featured-badge-pill">
            <Sparkles size={13} /> CURATED ARCHITECTURAL LANDMARKS
          </div>
          <h2 className="featured-main-heading">
            Signature Real Estate Developments
          </h2>
          <p className="featured-sub-heading">
            Explore our UP-RERA verified master-planned townships, modern high-street retail arcades, and luxury residential towers.
          </p>

          {/* Filter Pills */}
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

        {/* Project Grid */}
        <div className="featured-projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => navigate(`/projects/${project.slug}`)}
            >
              {/* Image & Badges */}
              <div className="project-card-img-wrap">
                <img
                  src={project.featuredImage}
                  alt={project.title}
                  loading="lazy"
                  className="project-card-image"
                />

                <div className="project-card-overlay-gradient" />

                <div className="project-card-top-badges">
                  <span className="badge badge-brand">
                    {project.status.toUpperCase()}
                  </span>
                  <span className="project-card-cat-badge">
                    {project.category}
                  </span>
                </div>

                <div className="project-card-rera-badge">
                  <ShieldCheck size={13} color="var(--gold)" />
                  <span>RERA: {project.reraNumber}</span>
                </div>
              </div>

              {/* Content */}
              <div className="project-card-content">
                <div>
                  <div className="project-card-location">
                    <MapPin size={13} />
                    <span>{project.locationName}</span>
                  </div>

                  <h3 className="project-card-title">
                    {project.title}
                  </h3>

                  <p className="project-card-tagline">
                    {project.tagline || project.description?.substring(0, 115) + '...'}
                  </p>
                </div>

                <div>
                  {/* Configurations Strip */}
                  <div className="project-config-strip">
                    <div>
                      <span className="project-config-label">Starting Price</span>
                      <strong className="project-config-price">{project.priceDisplay || 'On Request'}</strong>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span className="project-config-label">Land Area</span>
                      <strong className="project-config-area">{project.totalLandArea || 'Master Planned'}</strong>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="project-cta-grid">
                    <button
                      type="button"
                      className="btn btn-primary project-btn-explore"
                    >
                      <span>Explore Project & Plans</span>
                      <ArrowRight size={14} />
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline project-btn-brochure"
                      onClick={(e) => {
                        e.stopPropagation();
                        openEnquiryModal(project.title, 'Brochure Download');
                      }}
                      title="Download Brochure"
                      aria-label="Download Brochure"
                    >
                      <Download size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
