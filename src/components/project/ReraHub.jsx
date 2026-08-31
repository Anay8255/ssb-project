import React from 'react';
import { ShieldCheck, ExternalLink, QrCode, CheckCircle2, Lock } from 'lucide-react';

export const ReraHub = ({ project }) => {
  if (!project) return null;

  return (
    <section 
      id="rera-compliance"
      className="rera-hub-card" 
      style={{ 
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)', 
        border: '1px solid rgba(224, 84, 43, 0.25)', 
        borderRadius: 'var(--r-2xl, 24px)', 
        padding: '2.25rem 2.5rem', 
        boxShadow: '0 15px 35px -10px rgba(224, 84, 43, 0.08)', 
        marginBottom: '3rem',
        position: 'relative'
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '2rem', alignItems: 'center' }}>
        {/* QR Code with Golden Frame */}
        <div style={{ 
          background: '#FFFFFF', 
          padding: '0.85rem', 
          borderRadius: 'var(--r-xl, 16px)', 
          border: '1px solid rgba(226, 232, 240, 0.9)', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}>
          <img 
            src={project.reraQrUrl || "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://up-rera.in"} 
            alt={`RERA QR Code for ${project.title}`} 
            style={{ width: '96px', height: '96px', objectFit: 'contain' }}
          />
          <span style={{ fontSize: '0.68rem', color: 'var(--brand)', marginTop: '0.45rem', fontWeight: 700, letterSpacing: '0.06em' }}>
            SCAN FOR RERA
          </span>
        </div>

        {/* Text Details & Certifications */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.35rem', 
              background: 'rgba(34, 197, 94, 0.12)', 
              color: '#16A34A', 
              padding: '0.25rem 0.75rem', 
              borderRadius: 'var(--r-pill)', 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              letterSpacing: '0.04em' 
            }}>
              <ShieldCheck size={14} /> 100% REGULATORY SANCTIONED
            </span>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.35rem', 
              background: 'rgba(224, 84, 43, 0.08)', 
              color: 'var(--brand)', 
              padding: '0.25rem 0.75rem', 
              borderRadius: 'var(--r-pill)', 
              fontSize: '0.75rem', 
              fontWeight: 700 
            }}>
              CLEAR TITLE LAND PARCEL
            </span>
          </div>

          <h4 style={{ fontSize: '1.45rem', color: 'var(--ink)', margin: '0 0 0.35rem 0', fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}>
            UP-RERA Registration: <strong style={{ color: 'var(--brand)' }}>{project.reraNumber}</strong>
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', margin: 0, lineHeight: 1.5, maxWidth: '750px' }}>
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
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
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
