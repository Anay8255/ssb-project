import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { ChevronDown, ArrowRight, Car } from 'lucide-react';

export const HeroSection = () => {
  const { openSiteVisitModal } = useModal();

  const handleScrollDown = () => {
    window.scrollTo({
      top: 680,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-wrapper">
      <div className="hero-dot-grid"></div>
      <div className="hero-container">
        <div className="hero-content-box">
          <span className="hero-eyebrow-text">
            RERA CERTIFIED · EST. 2013
          </span>
          <h1 className="hero-main-title">
            <span>Architecting Distinction.</span>
            <span>Elevating Urban Living.</span>
          </h1>
          <p className="hero-description">
            For over a decade, SSB Group has pioneered landmark residential townships and commercial destinations across Eastern Uttar Pradesh — engineered with architectural precision, structural integrity, and enduring value.
          </p>
          <div className="hero-btn-row">
            <Link to="/projects" className="btn-hero-primary">
              <span>Explore Our Projects</span>
              <ArrowRight size={18} />
            </Link>
            <button className="btn-hero-secondary" onClick={() => openSiteVisitModal()}>
              <Car size={18} />
              <span>Book a Site Visit</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="hero-scroll-indicator" onClick={handleScrollDown} aria-label="Scroll Down">
        <ChevronDown size={22} />
      </div>
    </section>
  );
};
