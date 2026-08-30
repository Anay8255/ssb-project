import React from 'react';
import { useModal } from '../context/ModalContext';
import { Play, Newspaper, Calendar, Award, ExternalLink } from 'lucide-react';

export const MediaPage = () => {
  const { openLightbox } = useModal();

  const news = [
    {
      title: "Shree Sai City: Varanasi's First Monolithic Aluminium Formwork Green Township",
      publication: "Construction & Infrastructure Times",
      date: "August 2026",
      summary: "SSB Infra Projects is the very first in Varanasi to incorporate the monolithic Aluminum Formwork System into multi-storied RCC construction. Pouring walls and slabs simultaneously eliminates masonry, guarantees zero water seepage, resists seismic tremors, and delivers acoustic insulation across 18 acres.",
      image: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948497295-9v1551.png",
      tag: "Engineering & Innovation",
      author: "SSB Technical Desk"
    },
    {
      title: "Refined by Nature's Opulence: Inside Shree Sai City Group Housing Floor Plans & Architecture",
      publication: "Varanasi Real Estate Review",
      date: "July 2026",
      summary: "Explore the VDA-approved and UP RERA registered (UPRERAPRJ923469) 2 BHK (1,100.08 Sq. Ft.) and 3 BHK (1,351.31 Sq. Ft.) residences designed with 100% Vastu compliance, cross-ventilation, panoramic decks, and microclimate-controlled evergreen landscaping.",
      image: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948517426-765q1q.png",
      tag: "Architecture & Design",
      author: "Nishant Shekhar, Chief Architect"
    },
    {
      title: "Proposed SSB Amusement Park & Luxury Resort Announced at Shree Sai City Harhua",
      publication: "Uttar Pradesh Hospitality & Tourism",
      date: "June 2026",
      summary: "Adding to the premier lifestyle at Shree Sai City, SSB Group announced the proposed SSB Amusement Park and Luxury Resort on campus, complementing the luxury Club House, Olympic-sized swimming pool, tennis court, and rooftop sky gardens.",
      image: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948520399-r81hq7.png",
      tag: "Township Lifestyle",
      author: "SSB Lifestyle Desk"
    },
    {
      title: "316 KLD Sustainable Water Management & 80% Recycling Pioneered at Shree Sai City",
      publication: "Eco Living & Green Built Environment",
      date: "May 2026",
      summary: "With a homegrown domestic water capacity of 316.687 KLD, Shree Sai City incorporates an advanced Sewage Treatment Plant (STP) recovering 80% water, alongside extensive rainwater harvesting and dual power supply with rooftop solar.",
      image: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948529276-aspkwi.png",
      tag: "Sustainability",
      author: "Environmental Engineering Team"
    },
    {
      title: "Airport Corridor Connectivity: Why Shree Sai City Harhua is Varanasi's Top Investment Hub",
      publication: "The Economic Times Realty",
      date: "April 2026",
      summary: "Strategically located at the intersection of Babatpur Airport Road and Panchkosi Road, Shree Sai City connects directly to Lal Bahadur Shastri Airport in 10 minutes, Ring Road Crossing in 15 minutes, and Cantt Junction with top schools and hospitals nearby.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      tag: "Market Growth",
      author: "Investment Research Desk"
    }
  ];

  return (
    <div className="fade-in" style={{ paddingBottom: '5rem' }}>
      {/* Header */}
      <section className="subpage-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>PRESS & UPDATES</span>
          <h1 className="subpage-hero-title">
            Media & Coverage
          </h1>
          <p className="subpage-hero-desc">
            Official announcements, media coverage, foundation stones, and handover milestone celebrations from SSB Group.
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
