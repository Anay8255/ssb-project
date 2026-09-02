import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '../../context/StoreContext';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const InteractiveTimeline = () => {
  const { journey } = useStore();
  const timelineRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState({});

  const items = journey && journey.length > 0 ? journey : [
    { year: "2013", status: "Completed", title: "Inception in Varanasi", desc: "SSB Group was established under the vision of Mr. Ram Gopal Singh to engineer high-integrity real estate." },
    { year: "2015", status: "Completed", title: "Maiden Residential Handover", desc: "Successfully delivered our inaugural residential community, welcoming its first homeowner families." },
    { year: "2018", status: "Completed", title: "Accessible Housing Milestone", desc: "Delivered the dedicated affordable housing sector under the Shree Sai City EWS / PMAY initiative." },
    { year: "2021", status: "Ongoing", title: "Monolithic Formwork Era", desc: "Launched Shree Sai City Group Housing with advanced aluminum formwork for rapid, seismic-resilient construction." },
    { year: "2024", status: "Ongoing", title: "Flagship Township: Sai Gaon", desc: "Unveiled an eco-planned gated township strategically situated along Varanasi's premier development corridor." },
    { year: "2026", status: "Upcoming", title: "Capital Expansion: Lucknow", desc: "Marked strategic growth into Lucknow with 'Pratham', a state-of-the-art mixed-use commercial destination." }
  ];

  // 1. Calculate vertical scroll progress line height smoothly
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Track progress as user scrolls through the timeline container
      const start = rect.top - windowHeight * 0.65;
      const total = rect.height;
      const scrolled = -start;
      const pct = Math.max(0, Math.min(100, (scrolled / total) * 100));
      setScrollProgress(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. IntersectionObserver to reveal cards with smooth slide-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.getAttribute('data-idx');
            setVisibleItems((prev) => ({ ...prev, [idx]: true }));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = document.querySelectorAll('.timeline-scroll-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [items]);

  return (
    <section className="timeline-scroll-section" id="timeline-journey-section">
      <div className="container" ref={containerRef}>
        {/* Section Header */}
        <div className="timeline-section-header">
          <span className="eyebrow timeline-eyebrow">
            OUR MILESTONES
          </span>
          <h2 className="timeline-heading">
            The Journey From 2013 to Today
          </h2>
          <p className="timeline-subheading">
            Over a decade of landmark development, structural excellence, and timely handovers across Eastern Uttar Pradesh.
          </p>
        </div>

        {/* Timeline Track Container */}
        <div className="timeline-track-container" ref={timelineRef}>
          {/* Background Track Spine */}
          <div className="timeline-track-bg" />

          {/* Animated Scroll Progress Line */}
          <div 
            className="timeline-track-fill" 
            style={{ height: `${scrollProgress}%` }}
          >
            <div className="timeline-fill-head-glow" />
          </div>

          {/* Cards & Nodes List */}
          <div className="timeline-items-list">
            {items.map((item, idx) => {
              const isVisible = !!visibleItems[idx];
              const isEven = idx % 2 === 0;
              const isCompleted = item.status?.toLowerCase() === 'completed';
              const isOngoing = item.status?.toLowerCase() === 'ongoing' || item.status?.toLowerCase() === 'in progress';
              
              // Progress threshold for active node glow
              const itemProgress = ((idx + 0.5) / items.length) * 100;
              const isNodeActive = scrollProgress >= itemProgress || isVisible;

              return (
                <div 
                  key={idx}
                  data-idx={idx}
                  className={`timeline-scroll-card ${isVisible ? 'visible' : ''} ${isEven ? 'left' : 'right'}`}
                >
                  {/* Timeline Center Node Dot */}
                  <div className={`timeline-node ${isNodeActive ? 'active' : ''}`}>
                    <div className="node-inner">
                      {isCompleted ? (
                        <CheckCircle2 size={15} color="#FFF" />
                      ) : isOngoing ? (
                        <Clock size={15} color="#FFF" />
                      ) : (
                        <Sparkles size={15} color="#FFF" />
                      )}
                    </div>
                  </div>

                  {/* Milestone Content Card */}
                  <div className="timeline-card-box">
                    <div className="timeline-card-header">
                      <span className="timeline-year-text">{item.year}</span>
                      <span className={`badge ${isCompleted ? 'badge-success' : isOngoing ? 'badge-brand' : 'badge-warning'}`}>
                        {item.status}
                      </span>
                    </div>

                    <h3 className="timeline-card-title">{item.title}</h3>
                    <p className="timeline-card-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
