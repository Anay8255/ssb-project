import React from 'react';
import { ShieldCheck, ExternalLink, QrCode, CheckCircle2, Lock } from 'lucide-react';

export const ReraHub = ({ project }) => {
  if (!project) return null;

  return (
    <section 
      id="rera-compliance"
      className="rera-hub-section"
    >
      <div className="rera-hub-grid">
        {/* QR Code with Golden Frame */}
        <div className="rera-qr-box">
          <img 
            src={project.reraQrUrl || "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://up-rera.in"} 
            alt={`RERA QR Code for ${project.title}`} 
            style={{ width: '92px', height: '92px', objectFit: 'contain' }}
          />
          <span style={{ fontSize: '0.68rem', color: 'var(--brand)', marginTop: '0.45rem', fontWeight: 700, letterSpacing: '0.06em' }}>
            SCAN FOR RERA
          </span>
        </div>

        {/* Text Details & Certifications */}
        <div className="rera-content-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.35rem', 
              background: 'rgba(34, 197, 94, 0.12)', 
              color: '#16A34A', 
              padding: '0.25rem 0.75rem', 
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
              background: 'rgba(224, 84, 43, 0.08)', 
              color: 'var(--brand)', 
              padding: '0.25rem 0.75rem', 
              borderRadius: 'var(--r-pill)', 
              fontSize: '0.72rem', 
              fontWeight: 700 
            }}>
              CLEAR TITLE LAND PARCEL
            </span>
          </div>

          <h4 style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)', color: 'var(--ink)', margin: '0 0 0.4rem 0', fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
            UP-RERA Registration: <strong style={{ color: 'var(--brand)', wordBreak: 'break-word' }}>{project.reraNumber}</strong>
          </h4>
          <p style={{ fontSize: '0.88rem', color: 'var(--ink-muted)', margin: 0, lineHeight: 1.5, maxWidth: '750px' }}>
            Registered and certified under the {project.reraAuthority || 'Uttar Pradesh Real Estate Regulatory Authority'}. All architectural layouts, statutory approvals, environmental clearances, and escrow accounts are publicly verified.
          </p>
        </div>

        {/* Action Link Button */}
        <div className="rera-action-box">
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
              textDecoration: 'none'
            }}
          >
            <span>Verify on UP-RERA</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
