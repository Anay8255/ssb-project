import React from 'react';
import { useModal } from '../context/ModalContext';
import { Play, Newspaper, Calendar, Award, ExternalLink } from 'lucide-react';

export const MediaPage = () => {
  const { openLightbox } = useModal();

  const news = [
    {
      title: "SSB Group Unveils Sai Gaon Township on Varanasi Growth Corridor",
      publication: "Dainik Jagran / Real Estate Bureau",
      date: "August 2026",
      summary: "SSB Group has launched its signature eco-residential community featuring monolithic aluminium formwork construction, 70% open green landscapes, and world-class sports amenities.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Over 120 Families Receive Possession at Shree Sai City Affordable Housing",
      publication: "Hindustan Live",
      date: "June 2026",
      summary: "Shree Sai Baba Infra Projects Pvt. Ltd. successfully concluded the handover ceremony for its PMAY-aligned affordable housing phase in Harhua, Varanasi.",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SSB Group Expands into Commercial Sector with Landmark Lucknow Project",
      publication: "The Economic Times Realty",
      date: "April 2026",
      summary: "Marking strategic expansion beyond Varanasi, SSB Group breaks ground on 'Pratham', a state-of-the-art commercial and retail hub in Lucknow.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="fade-in" style={{ paddingBottom: '5rem' }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #18181B 0%, #27272A 100%)', color: '#FFF', padding: '4.5rem 0 3.5rem', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>PRESS & UPDATES</span>
          <h1 style={{ fontSize: '3rem', color: '#FFF', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            Media & Coverage
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', color: '#A1A1AA', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Latest press releases, architectural project spotlights, handover ceremonies, and media features covering SSB Group developments.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '4rem' }}>
        {/* Press Releases Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
          {news.map((item, idx) => (
            <div 
              key={idx}
              style={{
                background: '#FFF',
                borderRadius: 'var(--r-xl)',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--brand)', fontWeight: 700 }}>{item.publication}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}>{item.date}</span>
                </div>

                <h3 style={{ fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', lineHeight: '1.6', margin: 0, flexGrow: 1 }}>
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Spotlights */}
        <div style={{ background: '#FFF', padding: '3rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span className="eyebrow">CINEMATIC PROJECT SHOWCASES</span>
            <h3 style={{ fontSize: '2rem', color: 'var(--ink)', margin: 0 }}>Architectural Drone Tours & Walkthroughs</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: '#000' }}>
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Sai Gaon Varanasi Drone Tour"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  allowFullScreen
                ></iframe>
              </div>
              <div style={{ padding: '1.25rem' }}>
                <strong style={{ fontSize: '1.1rem', color: 'var(--ink)', display: 'block' }}>Sai Gaon — Aerial Master Layout & Construction Tour</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--ink-muted)' }}>Varanasi Ring Road Corridor</span>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: '#000' }}>
                <iframe 
                  src="https://www.youtube.com/embed/Wjbu5pR_enE" 
                  title="Shree Sai City Formwork Technology"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  allowFullScreen
                ></iframe>
              </div>
              <div style={{ padding: '1.25rem' }}>
                <strong style={{ fontSize: '1.1rem', color: 'var(--ink)', display: 'block' }}>Shree Sai City — Aluminium Formwork Technology Feature</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--ink-muted)' }}>Harhua, Varanasi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
