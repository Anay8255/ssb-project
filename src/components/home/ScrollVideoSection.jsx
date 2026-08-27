import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const VIDEO_SRC   = '/videos/Drone_flying_over_luxury_duplex_202608201448_gwr_video_mvp (1).mp4';
const FRAME_COUNT = 80;   // High fidelity frame extraction
const CAP_W       = 1280; // Capture resolution width
const CAP_H       = 720;  // Capture resolution height

// Utility: draw image/bitmap covering the full canvas (like CSS object-fit: cover)
function drawCover(ctx, img, canvasW, canvasH) {
  if (!img) return;
  const imgW = img.width || CAP_W;
  const imgH = img.height || CAP_H;
  const imgRatio = imgW / imgH;
  const canvasRatio = canvasW / canvasH;

  let renderW, renderH, offsetX, offsetY;
  if (canvasRatio > imgRatio) {
    renderW = canvasW;
    renderH = canvasW / imgRatio;
    offsetX = 0;
    offsetY = (canvasH - renderH) / 2;
  } else {
    renderW = canvasH * imgRatio;
    renderH = canvasH;
    offsetX = (canvasW - renderW) / 2;
    offsetY = 0;
  }

  ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
}

export const ScrollVideoSection = () => {
  const sectionRef  = useRef(null);
  const canvasRef   = useRef(null);
  const progressRef = useRef(null);
  const overlayRef  = useRef(null);
  const hintRef     = useRef(null);
  const rafRef      = useRef(null);
  const frames      = useRef([]);
  const smoothProg  = useRef(0);
  const rawProg     = useRef(0);

  const [status, setStatus] = useState('loading');
  const [capPct, setCapPct] = useState(0);

  useEffect(() => {
    let isMounted = true;
    
    // Create an offscreen video purely in memory (never rendered to DOM)
    const video = document.createElement('video');
    video.src = VIDEO_SRC;
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';

    const offscreen = document.createElement('canvas');
    offscreen.width = CAP_W;
    offscreen.height = CAP_H;
    const octx = offscreen.getContext('2d');

    const capture = async () => {
      await new Promise((resolve) => {
        if (video.readyState >= 2) { resolve(); return; }
        video.addEventListener('canplay', resolve, { once: true });
        video.load();
      });

      if (!isMounted) return;
      setStatus('capturing');
      const dur = video.duration || 5;
      const captured = [];

      for (let i = 0; i < FRAME_COUNT; i++) {
        if (!isMounted) break;
        const t = (i / (FRAME_COUNT - 1)) * dur;
        video.currentTime = t;

        await new Promise((resolve) => {
          video.addEventListener('seeked', resolve, { once: true });
        });

        octx.drawImage(video, 0, 0, CAP_W, CAP_H);
        const bmp = await createImageBitmap(offscreen);
        captured.push(bmp);

        setCapPct(Math.round(((i + 1) / FRAME_COUNT) * 100));
      }

      if (isMounted) {
        frames.current = captured;
        setStatus('ready');
      }
    };

    capture().catch(console.error);

    return () => {
      isMounted = false;
      video.src = '';
      frames.current.forEach((bmp) => bmp.close?.());
    };
  }, []);

  useEffect(() => {
    if (status !== 'ready') return;

    const canvas   = canvasRef.current;
    const section  = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d', { alpha: false });

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      const idx = Math.min(
        frames.current.length - 1,
        Math.floor(smoothProg.current * (frames.current.length - 1))
      );
      if (frames.current[idx]) {
        drawCover(ctx, frames.current[idx], canvas.width, canvas.height);
      }
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const progressEl = progressRef.current;
    const overlayEl  = overlayRef.current;
    const hintEl     = hintRef.current;
    const total      = frames.current.length;

    if (frames.current[0]) {
      drawCover(ctx, frames.current[0], canvas.width, canvas.height);
    }

    const onScroll = () => {
      const rect        = section.getBoundingClientRect();
      const sectionTop  = window.scrollY + rect.top;
      const scrolled    = window.scrollY - sectionTop;
      const scrollRange = section.offsetHeight - window.innerHeight;
      rawProg.current   = Math.max(0, Math.min(1, scrolled / scrollRange));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    let lastFrameIdx = -1;

    const tick = () => {
      const diff = rawProg.current - smoothProg.current;
      const absDiff = Math.abs(diff);

      if (absDiff > 0.0001) {
        const factor = Math.min(0.85, 0.15 + absDiff * 5);
        smoothProg.current += diff * factor;
      }

      const idx = Math.min(total - 1, Math.floor(smoothProg.current * (total - 1)));

      if (idx !== lastFrameIdx && frames.current[idx]) {
        drawCover(ctx, frames.current[idx], canvas.width, canvas.height);
        lastFrameIdx = idx;
      }

      if (progressEl) {
        progressEl.style.width = `${smoothProg.current * 100}%`;
      }
      const showText = smoothProg.current >= 0.35;
      if (overlayEl) {
        overlayEl.classList.toggle('visible', showText);
      }
      if (hintEl) {
        hintEl.classList.toggle('hide', showText);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [status]);

  return (
    <section
      ref={sectionRef}
      className="scroll-video-section"
      style={{ height: '350vh', position: 'relative' }}
    >
      <div className="scroll-video-sticky">

        {status !== 'ready' && (
          <div className="scroll-video-loader">
            <div className="scroll-video-loader-box">
              <div className="scroll-video-loader-spinner" />
              <p className="scroll-video-loader-text">
                {status === 'loading' ? 'Loading experience...' : `Optimizing animation... ${capPct}%`}
              </p>
            </div>
          </div>
        )}

        <canvas ref={canvasRef} className="scroll-video-canvas" />

        <div className="scroll-video-gradient" />

        <div className="scroll-video-progress-track">
          <div ref={progressRef} className="scroll-video-progress-fill" style={{ width: '0%' }} />
        </div>

        <div ref={overlayRef} className="scroll-video-overlay">
          <div className="scroll-video-content">
            <span className="scroll-video-eyebrow">SSB GROUP · EST. 2013 · VARANASI</span>
            <h2 className="scroll-video-headline">
              Luxury Living,<br />
              <em>Reimagined.</em>
            </h2>
            <p className="scroll-video-subline">
              For over a decade, pioneering landmark townships with architectural excellence across Eastern Uttar Pradesh.
            </p>
            <div className="scroll-video-ctas">
              <Link to="/projects" className="scroll-video-btn-primary">
                Explore Projects <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="scroll-video-btn-ghost">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>

        <div ref={hintRef} className="scroll-video-hint">
          <ChevronDown size={28} />
          <span>Scroll to explore</span>
        </div>

      </div>
    </section>
  );
};
