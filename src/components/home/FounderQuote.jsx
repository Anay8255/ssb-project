import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import { ShieldCheck, CheckCircle, ArrowUpRight } from 'lucide-react';

export const FounderQuote = () => {
  const { leadership } = useStore();
  const founder = leadership?.[0] || {
    name: "Mr. Ram Gopal Singh",
    designation: "Founder, Chairman & Managing Director",
    quote: "A home is not a transaction. It is a family's faith placed in your hands — and that faith must be honoured in every brick.",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
  };

  return (
    <section className="roma-about-section" id="about-ssb-section">
      <div className="container">
        {/* Background Architectural Wireframe Grids */}
        <div className="wireframe-bg-tl"></div>
        <div className="wireframe-bg-br"></div>

        <div className="roma-about-grid">
          {/* Left Column: Floating Composite Image Collage */}
          <div className="roma-collage-wrapper">
            {/* 1. Arch Image (Left) */}
            <div className="roma-arch-img-box">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=85" 
                alt="SSB Civil Engineer" 
                className="roma-arch-img" 
              />
            </div>

            {/* 2. Tall Rectangular Image (Top Right) */}
            <div className="roma-rect-img-box">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=85" 
                alt="SSB Construction Site" 
                className="roma-rect-img" 
              />
            </div>

            {/* 3. Floating Circular Badge (Center Overlap) */}
            <div className="roma-circular-badge">
              <svg viewBox="0 0 110 110" width="106" height="106" style={{ position: 'absolute', inset: 0, animation: 'rotateCircle 25s linear infinite' }}>
                <path id="circlePath1" d="M 55, 55 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                <text fontSize="9" fontWeight="700" fill="#FFFFFF" letterSpacing="1.8">
                  <textPath href="#circlePath1" startOffset="0%">
                    YEARS OF EXPERIENCE • YEARS OF EXPERIENCE •
                  </textPath>
                </text>
              </svg>
              <div className="circular-badge-center">
                <span className="badge-years-num">13<sup>+</sup></span>
              </div>
            </div>

            {/* 4. Floating Rating Card (Bottom Right) */}
            <div className="roma-rating-card">
              <div className="rating-num">4.8</div>
              <div className="rating-avatars">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Buyer" className="avatar-img" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Buyer" className="avatar-img" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Buyer" className="avatar-img" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80" alt="Buyer" className="avatar-img" />
              </div>
              <div className="rating-stars">★★★★★</div>
              <div className="rating-text">1200+ Satisfied Families</div>
            </div>

            {/* 5. Mini Gallery Thumbnails */}
            <div className="roma-mini-gallery">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80" alt="Site 1" className="mini-thumb" />
              <img src="https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=300&q=80" alt="Site 2" className="mini-thumb" />
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=80" alt="Site 3" className="mini-thumb" />
            </div>
          </div>

          {/* Right Column: Content Text & Philosophy */}
          <div className="roma-content-wrapper">
            <div className="roma-eyebrow-line">
              <span className="roma-eyebrow">ABOUT US</span>
              <span className="roma-accent-line"></span>
            </div>

            <h2 className="roma-heading">
              Credibility is like a city. It's not built in a day.
            </h2>

            <p className="roma-desc">
              We are one of the pioneers and leading builders in Varanasi serving as a harbinger of affordable housing by delivering quality homes without compromise.
            </p>

            <p className="roma-desc">
              Today, SSB Group's landmark developments grace the city's most strategic locations, blending superior construction quality, timeless architecture, and thoughtfully planned living spaces. Every project is enriched with world-class amenities, vibrant surroundings, and exceptional value.
            </p>

            <p className="roma-quote">
              "{founder.quote}"
            </p>

            <div className="roma-divider"></div>

            <div className="roma-features-list">
              <div className="roma-feature-item">
                <div className="roma-feature-icon">
                  <ShieldCheck size={20} />
                </div>
                <span className="roma-feature-text">Trusted by a growing community of 10,000+ happy homeowners</span>
              </div>

              <div className="roma-feature-item">
                <div className="roma-feature-icon">
                  <CheckCircle size={20} />
                </div>
                <span className="roma-feature-text">Focus on quality construction, legal clarity, and 100% on-time delivery</span>
              </div>
            </div>

            <div style={{ marginTop: '1.85rem' }}>
              <Link to="/about" className="roma-know-more-btn">
                <span>Know More</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
