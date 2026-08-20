import React, { useState, useEffect, useRef } from 'react';

export const StatsStrip = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    exp: 0,
    delivered: 0,
    running: 0,
    families: 0,
    pipeline: 0
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);

        const duration = 1500;
        const steps = 40;
        const intervalTime = duration / steps;
        let step = 0;

        const targets = {
          exp: 13,
          delivered: 8,
          running: 4,
          families: 1200,
          pipeline: 6
        };

        const timer = setInterval(() => {
          step++;
          const progress = step / steps;
          const easeOutQuad = 1 - (1 - progress) * (1 - progress);

          setCounts({
            exp: Math.floor(targets.exp * easeOutQuad),
            delivered: Math.floor(targets.delivered * easeOutQuad),
            running: Math.floor(targets.running * easeOutQuad),
            families: Math.floor(targets.families * easeOutQuad),
            pipeline: Math.floor(targets.pipeline * easeOutQuad)
          });

          if (step >= steps) {
            clearInterval(timer);
            setCounts(targets);
          }
        }, intervalTime);
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="stats-strip-terracotta" id="stats-counter-strip" ref={sectionRef}>
      <div className="stats-dot-overlay"></div>
      <div className="container">
        <div className="stats-grid-strip">
          <div className="stat-counter-box">
            <div className="stat-counter-num">{hasAnimated ? `${counts.exp}+` : '13+'}</div>
            <div className="stat-counter-label">YEARS OF EXPERIENCE</div>
          </div>
          <div className="stat-counter-box">
            <div className="stat-counter-num">{hasAnimated ? `${counts.delivered}+` : '8+'}</div>
            <div className="stat-counter-label">PROJECTS DELIVERED</div>
          </div>
          <div className="stat-counter-box">
            <div className="stat-counter-num">{hasAnimated ? counts.running : '4'}</div>
            <div className="stat-counter-label">RUNNING PROJECTS</div>
          </div>
          <div className="stat-counter-box">
            <div className="stat-counter-num">{hasAnimated ? `${counts.families}+` : '1200+'}</div>
            <div className="stat-counter-label">HAPPY FAMILIES</div>
          </div>
          <div className="stat-counter-box">
            <div className="stat-counter-num">{hasAnimated ? counts.pipeline : '6'}</div>
            <div className="stat-counter-label">PIPELINE PROJECTS</div>
          </div>
        </div>
      </div>
    </section>
  );
};
