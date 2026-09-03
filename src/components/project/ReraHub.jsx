import React from 'react';
import { ShieldCheck, ExternalLink, QrCode } from 'lucide-react';

export const ReraHub = ({ project }) => {
  if (!project) return null;

  return (
    <section 
      id="rera-compliance"
      className="project-card-section"
      style={{ 
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)', 
        border: '1px solid rgba(197, 160, 89, 0.35)', 
        position: 'relative'
      }}
    >
      <div className="rera-hub-grid">
        {/* QR Code with Golden Luxury Frame */}
        <div style={{ 
          background: '#FFFFFF', 
          padding: '0.75rem', 
          borderRadius: 'var(--r-xl, 16px)', 
          border: '1px solid rgba(197, 160, 89, 0.35)', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          flexShrink: 0
        }}>
          <img 
            src={project.reraQrUrl || "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://up-rera.in"} 
            alt={`RERA QR Code for ${project.title}`} 
            style={{ width: '92px', height: '92px', objectFit: 'contain' }}
          />
          <span style={{ fontSize: '0.65rem', color: 'var(--gold, #C5A059)', marginTop: '0.4rem', fontWeight: 700, letterSpacing: '0.08em' }}>
            SCAN FOR RERA
          </span>
        </div>

        {/* Text Details & Certifications */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.35rem', 
              background: 'rgba(34, 197, 94, 0.12)', 
              color: '#16A34A', 
              padding: '0.2rem 0.65rem', 
              borderRadius: 'var(--r-pill)', 
              fontSize: '0.72rem', 
              fontWeight: 700, 
              letterSpacing: '0.04em' 
            }}>
              <ShieldCheck size={13} /> 100% REGULATORY SANCTIONED
            </span>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.35rem', 
              background: 'rgba(15, 41, 74, 0.08)', 
              color: 'var(--brand, #0F294A)', 
              padding: '0.2rem 0.65rem', 
              borderRadius: 'var(--r-pill)', 
              fontSize: '0.72rem', 
              fontWeight: 700 
            }}>
              CLEAR TITLE PARCEL
            </span>
          </div>

          <h4 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)', color: 'var(--ink)', margin: '0 0 0.35rem 0', fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}>
            UP-RERA Registration: <strong style={{ color: 'var(--brand, #0F294A)' }}>{project.reraNumber}</strong>
          </h4>
          <p style={{ fontSize: '0.88rem', color: 'var(--ink-muted)', margin: 0, lineHeight: 1.5, maxWidth: '750px' }}>
            Registered and certified under the {project.reraAuthority || 'Uttar Pradesh Real Estate Regulatory Authority'}. All architectural layouts, statutory approvals, environmental clearances, and escrow accounts are publicly verified.
          </p>
        </div>

        {/* Action Link Button */}
        <div>
          <a 
            href={`https://up-rera.in/ProjectSummary?id=${project.reraNumber}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.45rem', 
              borderRadius: 'var(--r-pill)',
              padding: '0.65rem 1.25rem',
              fontWeight: 600,
              fontSize: '0.85rem',
              background: '#FFFFFF',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              whiteSpace: 'nowrap'
            }}
          >
            <span>Verify on UP-RERA Portal</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
