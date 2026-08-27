import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { ArrowRight, ChevronDown, Car } from 'lucide-react';

const VIDEO_SRC = '/videos/Drone_flying_over_luxury_duplex_202608201448_gwr_video_mvp (1).mp4';

export const ScrollVideoSection = () => {
  const { openSiteVisitModal } = useModal();
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const overlayRef = useRef(null);
  const hintRef = useRef(null);
  const isVisibleRef = useRef(true);

  const rawProg = useRef(0);
  const smoothProg = useRef(0);
  const rafRef = useRef(null);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // 1. Viewport Visibility Observer (pause RAF and video when offscreen to save 100% resources)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => { });
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // 2. High Performance Scroll & Lerp Animation
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const progressEl = progressRef.current;
    const overlayEl = overlayRef.current;
    const hintEl = hintRef.current;

    if (!section) return;

    let sectionTop = 0;
    let scrollRange = 1;

    const updateMeasurements = () => {
      const rect = section.getBoundingClientRect();
      sectionTop = window.scrollY + rect.top;
      scrollRange = Math.max(1, section.offsetHeight - window.innerHeight);
    };

    updateMeasurements();
    window.addEventListener('resize', updateMeasurements, { passive: true });

    const onScroll = () => {
      if (!isVisibleRef.current) return;
      const scrolled = window.scrollY - sectionTop;
      rawProg.current = Math.max(0, Math.min(1, scrolled / scrollRange));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // 60-120fps Smooth Damped Lerp Loop
    const tick = () => {
      if (isVisibleRef.current) {
        const diff = rawProg.current - smoothProg.current;
        // Butter-smooth linear interpolation
        smoothProg.current += diff * 0.12;

        const p = smoothProg.current;

        // 1. Subtle GPU-accelerated Parallax Zoom on Video
        if (video) {
          const scale = 1 + p * 0.08;
          video.style.transform = `scale(${scale.toFixed(4)}) translate3d(0, 0, 0)`;
        }

        // 2. Update Progress Bar
        if (progressEl) {
          progressEl.style.width = `${(p * 100).toFixed(2)}%`;
        }

        // 3. Reveal Text Overlay smoothly
        const showText = p >= 0.25;
        if (overlayEl) {
          if (showText && !overlayEl.classList.contains('visible')) {
            overlayEl.classList.add('visible');
          } else if (!showText && overlayEl.classList.contains('visible')) {
            overlayEl.classList.remove('visible');
          }
        }

        // 4. Hide Hint
        if (hintEl) {
          if (p > 0.08 && !hintEl.classList.contains('hide')) {
            hintEl.classList.add('hide');
          } else if (p <= 0.08 && hintEl.classList.contains('hide')) {
            hintEl.classList.remove('hide');
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateMeasurements);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleScrollDown = () => {
    if (!sectionRef.current) return;
    const target = sectionRef.current.offsetTop + sectionRef.current.offsetHeight * 0.55;
    window.scrollTo({
      top: target,
      behavior: 'smooth'
    });
  };

  return (
    <section
      ref={sectionRef}
      className="scroll-video-section"
      style={{ height: '220vh', position: 'relative' }}
    >
      <div className="scroll-video-sticky">

        {/* Hardware-Accelerated High-Performance HTML5 Background Video */}
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          className="scroll-video-media"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setIsVideoLoaded(true)}
          style={{
            opacity: 1
          }}
        />

        {/* Cinematic Vignette Gradient Overlay */}
        <div className="scroll-video-gradient" />

        {/* Top Scroll Indicator Line */}
        <div className="scroll-video-progress-track">
          <div ref={progressRef} className="scroll-video-progress-fill" style={{ width: '0%' }} />
        </div>

        {/* Luxury Typography Overlay Content */}
        <div ref={overlayRef} className="scroll-video-overlay">
          <div className="scroll-video-content">
            <span className="scroll-video-eyebrow">SSB GROUP · EST. 2013 · VARANASI</span>
            <h1 className="scroll-video-headline">
              Luxury Living,<br />
              <em>Reimagined.</em>
            </h1>
            <p className="scroll-video-subline">
              For over a decade, pioneering landmark townships and commercial hubs with architectural excellence across Eastern Uttar Pradesh.
            </p>
            <div className="scroll-video-ctas">
              <Link to="/projects" className="scroll-video-btn-primary">
                Explore Projects <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                className="scroll-video-btn-secondary"
                onClick={() => openSiteVisitModal()}
              >
                <Car size={16} />
                <span>Book Free Site Visit</span>
              </button>
              <Link to="/contact" className="scroll-video-btn-ghost">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div ref={hintRef} className="scroll-video-hint" onClick={handleScrollDown} style={{ cursor: 'pointer' }}>
          <ChevronDown size={26} />
          <span>Scroll to explore</span>
        </div>

      </div>
    </section>
  );
};
