import React from 'react';
import { ShieldCheck, ExternalLink, QrCode } from 'lucide-react';

export const ReraHub = ({ project }) => {
  if (!project) return null;

  return (
    <div className="rera-hub-card" style={{ background: '#FFF', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '1.75rem', boxShadow: 'var(--shadow-sm)', marginBottom: '2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '1.5rem', alignItems: 'center' }}>
        {/* QR Code */}
        <div style={{ background: 'var(--sand-muted)', padding: '0.6rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src={project.reraQrUrl} 
            alt={`RERA QR Code for ${project.title}`} 
            style={{ width: '100px', height: '100px', objectFit: 'contain' }}
          />
          <span style={{ fontSize: '0.7rem', color: 'var(--ink-muted)', marginTop: '0.35rem', fontWeight: 600 }}>SCAN TO VERIFY</span>
        </div>

        {/* Text Details */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <ShieldCheck size={18} style={{ color: 'var(--brand)' }} />
            <span className="badge badge-brand">100% RERA COMPLIANT</span>
          </div>
          <h4 style={{ fontSize: '1.25rem', color: 'var(--ink)', marginBottom: '0.35rem' }}>
            UP-RERA Registration: <strong style={{ color: 'var(--brand)' }}>{project.reraNumber}</strong>
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', margin: 0 }}>
            Registered under the {project.reraAuthority || 'Uttar Pradesh Real Estate Regulatory Authority'}. All title documents, structural sanctions, environmental clearances and carpet area metrics are verified.
          </p>
        </div>

        {/* Action Link */}
        <div>
          <a 
            href={`https://up-rera.in/ProjectSummary?id=${project.reraNumber}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <span>Verify on UP-RERA</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};
