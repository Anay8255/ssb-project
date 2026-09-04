import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import { ShieldCheck, CheckCircle, ArrowUpRight, Sparkles, Quote } from 'lucide-react';

export const FounderQuote = () => {
  const { leadership } = useStore();
  const founder = leadership?.[0] || {
    name: "Mr. Ram Gopal Singh",
    designation: "Founder, Chairman & Managing Director",
    quote: "A home is not a transaction. It is a family's faith placed in your hands — and that faith must be honoured in every brick.",
    photoUrl: "/ram-gopal-singh.jpg"
  };

  const sectionRef = useRef(null);
  const isVisibleRef = useRef(false);
  const rafRef = useRef(null);

  // Targets and interpolated values
  const targetEnterProg = useRef(0);
  const currentEnterProg = useRef(0);
  const targetParallax = useRef(0);
  const currentParallax = useRef(0);

  const [animState, setAnimState] = useState({
    enterProgress: 0,
    // Left collage transforms
    collageX: -50,
    collageY: 80,
    collageScale: 0.9,
    collageRot: 6,
    collageOpacity: 0.1,
    // Arch image
    archY: 40,
    archScale: 0.95,
    // Rect image
    rectY: -30,
    rectScale: 0.95,
    // Badge
    badgeScale: 0.6,
    badgeRot: -60,
    badgeY: 20,
    // Rating card
    ratingY: 50,
    ratingScale: 0.9,
    ratingOpacity: 0,
    // Right content
    contentX: 40,
    contentY: 60,
    contentOpacity: 0.1,
    // Wireframes
    wireframeTL_Y: -40,
    wireframeBR_Y: 40
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.02, rootMargin: '100px 0px' }
    );

    observer.observe(section);

    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // 1. Entrance Progress: 0 (when section top is at bottom of viewport) to 1 (when section is fully centered in view)
      const enterDist = vh - rect.top;
      const enterFull = vh * 0.7 + rect.height * 0.3;
      const enterRaw = Math.max(0, Math.min(1, enterDist / enterFull));
      targetEnterProg.current = enterRaw;

      // 2. Parallax Through Progress: -1 to 1 as it scrolls across screen
      const totalDist = vh + rect.height;
      const currentDist = vh - rect.top;
      const throughRaw = Math.max(-1, Math.min(1, ((currentDist / totalDist) - 0.5) * 2));
      targetParallax.current = throughRaw;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();

    // 60-120fps Damped Lerp Animation Loop
    const tick = () => {
      if (isVisibleRef.current) {
        // Smooth linear interpolation for buttery motion on scroll down
        currentEnterProg.current += (targetEnterProg.current - currentEnterProg.current) * 0.09;
        currentParallax.current += (targetParallax.current - currentParallax.current) * 0.08;

        const ep = currentEnterProg.current; // 0 -> 1
        const pp = currentParallax.current;   // -1 -> 1
        const inv = 1 - ep;

        setAnimState({
          enterProgress: ep,
          // Left collage scrolls in from bottom-left into frame
          collageX: inv * -60,
          collageY: (inv * 90) + (pp * -20),
          collageScale: 0.90 + (ep * 0.10),
          collageRot: inv * 5,
          collageOpacity: Math.min(1, ep * 1.5),

          // Individual collage cards dock into frame
          archY: (inv * 60) + (pp * -26),
          archScale: 0.94 + (ep * 0.06),

          rectY: (inv * -40) + (pp * 22),
          rectScale: 0.94 + (ep * 0.06),

          // Badge spins and zooms in on scroll down
          badgeScale: 0.65 + (ep * 0.35),
          badgeRot: (inv * -90) + (pp * 45),
          badgeY: (inv * 30) + (pp * -10),

          // Rating card floats up into view
          ratingY: (inv * 70) + (pp * 16),
          ratingScale: 0.85 + (ep * 0.15),
          ratingOpacity: Math.min(1, Math.max(0, (ep - 0.2) * 1.6)),

          // Right content column scrolls in from bottom-right into frame
          contentX: inv * 50,
          contentY: (inv * 70) + (pp * -12),
          contentOpacity: Math.min(1, ep * 1.4),

          // Background grids
          wireframeTL_Y: (inv * -30) + (pp * -25),
          wireframeBR_Y: (inv * 30) + (pp * 25)
        });
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`roma-about-section ${animState.enterProgress > 0.4 ? 'is-revealed' : ''}`} 
      id="about-ssb-section"
    >
      <div className="container">
        {/* Background Architectural Wireframe Grids with Parallax */}
        <div 
          className="wireframe-bg-tl"
          style={{ 
            transform: `translate3d(0, ${animState.wireframeTL_Y}px, 0)`,
            opacity: animState.enterProgress 
          }}
        />
        <div 
          className="wireframe-bg-br"
          style={{ 
            transform: `translate3d(0, ${animState.wireframeBR_Y}px, 0)`,
            opacity: animState.enterProgress 
          }}
        />

        <div className="roma-about-grid">
          {/* Left Column: Composite Image Collage scrolling into frame */}
          <div 
            className="roma-collage-wrapper"
            style={{
              transform: `translate3d(${animState.collageX}px, ${animState.collageY}px, 0) scale(${animState.collageScale}) rotateY(${animState.collageRot}deg)`,
              opacity: animState.collageOpacity
            }}
          >
            {/* 1. Arch Image (Left) */}
            <div 
              className="roma-arch-img-box"
              style={{ 
                transform: `translate3d(0, ${animState.archY}px, 0) scale(${animState.archScale})` 
              }}
            >
              <div className="roma-img-inner">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=85" 
                  alt="SSB Civil Engineer" 
                  className="roma-arch-img" 
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="roma-img-shine" />
              </div>
            </div>

            {/* 2. Tall Rectangular Image (Top Right) */}
            <div 
              className="roma-rect-img-box"
              style={{ 
                transform: `translate3d(0, ${animState.rectY}px, 0) scale(${animState.rectScale})` 
              }}
            >
              <div className="roma-img-inner">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=85" 
                  alt="SSB Construction Site" 
                  className="roma-rect-img" 
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="roma-img-shine" />
              </div>
            </div>

            {/* 3. Floating Circular Badge (Center Overlap) */}
            <div 
              className="roma-circular-badge"
              style={{ 
                transform: `translate(-50%, -50%) translate3d(0, ${animState.badgeY}px, 0) scale(${animState.badgeScale})` 
              }}
            >
              <svg 
                className="circular-text-svg" 
                viewBox="0 0 120 120"
                style={{ transform: `rotate(${animState.badgeRot}deg)` }}
              >
                <path id="circlePath1" d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" fill="none" />
                <text fontSize="8.5" fontWeight="700" fill="#FFFFFF" letterSpacing="1.6">
                  <textPath href="#circlePath1" startOffset="0%">
                    YEARS OF EXPERIENCE • YEARS OF TRUST •
                  </textPath>
                </text>
              </svg>
              <div className="circular-badge-center">
                <span className="badge-years-num">13<sup>+</sup></span>
              </div>
              <div className="badge-glow-ring" />
            </div>

            {/* 4. Floating Rating Card (Bottom Right) */}
            <div 
              className="roma-rating-card"
              style={{ 
                transform: `translate3d(0, ${animState.ratingY}px, 0) scale(${animState.ratingScale})`,
                opacity: animState.ratingOpacity 
              }}
            >
              <div className="rating-card-header">
                <div className="rating-num">4.8</div>
                <div className="rating-badge-pill">
                  <Sparkles size={12} className="sparkle-icon" /> Top Rated
                </div>
              </div>
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
            <div 
              className="roma-mini-gallery"
              style={{
                transform: `translate3d(0, ${animState.ratingY * 0.7}px, 0)`,
                opacity: animState.ratingOpacity
              }}
            >
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80" alt="Site 1" className="mini-thumb" />
              <img src="https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=300&q=80" alt="Site 2" className="mini-thumb" />
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=80" alt="Site 3" className="mini-thumb" />
            </div>
          </div>

          {/* Right Column: Content scrolling in from right into frame */}
          <div 
            className="roma-content-wrapper"
            style={{
              transform: `translate3d(${animState.contentX}px, ${animState.contentY}px, 0)`,
              opacity: animState.contentOpacity
            }}
          >
            <div className="roma-eyebrow-line scroll-reveal-stagger" style={{ '--delay': '0.05s' }}>
              <span className="roma-eyebrow">ABOUT US</span>
              <span className="roma-accent-line"></span>
            </div>

            <h2 className="roma-heading scroll-reveal-stagger" style={{ '--delay': '0.12s' }}>
              Credibility is like a city. <span className="roma-heading-highlight">It's not built in a day.</span>
            </h2>

            <p className="roma-desc scroll-reveal-stagger" style={{ '--delay': '0.18s' }}>
              We are one of the pioneers and leading builders in Varanasi serving as a harbinger of affordable housing by delivering quality homes without compromise.
            </p>

            <p className="roma-desc scroll-reveal-stagger" style={{ '--delay': '0.24s' }}>
              Today, SSB Group's landmark developments grace the city's most strategic locations, blending superior construction quality, timeless architecture, and thoughtfully planned living spaces. Every project is enriched with world-class amenities, vibrant surroundings, and exceptional value.
            </p>

            <div className="roma-quote-card scroll-reveal-stagger" style={{ '--delay': '0.30s' }}>
              <Quote className="quote-watermark" size={36} />
              <p className="roma-quote-text">
                "{founder.quote}"
              </p>
            </div>

            <div className="roma-divider scroll-reveal-stagger" style={{ '--delay': '0.35s' }}></div>

            <div className="roma-features-list">
              <div className="roma-feature-item scroll-reveal-stagger" style={{ '--delay': '0.40s' }}>
                <div className="roma-feature-icon">
                  <ShieldCheck size={20} />
                </div>
                <span className="roma-feature-text">Trusted by a growing community of 10,000+ happy homeowners</span>
              </div>

              <div className="roma-feature-item scroll-reveal-stagger" style={{ '--delay': '0.46s' }}>
                <div className="roma-feature-icon">
                  <CheckCircle size={20} />
                </div>
                <span className="roma-feature-text">Focus on quality construction, legal clarity, and 100% on-time delivery</span>
              </div>
            </div>

            <div className="scroll-reveal-stagger" style={{ marginTop: '1.85rem', '--delay': '0.52s' }}>
              <Link to="/about" className="roma-know-more-btn">
                <span>Know More</span>
                <ArrowUpRight size={18} className="arrow-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

