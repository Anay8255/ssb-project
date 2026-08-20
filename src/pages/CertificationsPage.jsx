import React from 'react';
import { useStore } from '../context/StoreContext';
import { useModal } from '../context/ModalContext';
import { ShieldCheck, Award, FileCheck, CheckCircle2, Download } from 'lucide-react';

export const CertificationsPage = () => {
  const { certifications } = useStore();
  const { openEnquiryModal } = useModal();

  return (
    <div className="fade-in" style={{ paddingBottom: '5rem' }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #18181B 0%, #27272A 100%)', color: '#FFF', padding: '4.5rem 0 3.5rem', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>GOVERNMENT REGISTRATIONS & TRUST</span>
          <h1 style={{ fontSize: '3rem', color: '#FFF', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            Certifications & Legal Compliance
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', color: '#A1A1AA', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Official statutory approvals, corporate incorporation credentials, ISO 9001 quality management accreditations, and state housing authority registrations.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '4rem' }}>
        {/* Certifications Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              style={{
                background: '#FFF',
                borderRadius: 'var(--r-xl)',
                padding: '2.25rem',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem'
              }}
            >
              <div style={{ fontSize: '2.5rem', width: '60px', height: '60px', borderRadius: '50%', background: 'var(--sand-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {cert.icon}
              </div>
              <div style={{ flexGrow: 1 }}>
                <span className="badge badge-brand" style={{ marginBottom: '0.4rem' }}>VERIFIED STATUTORY</span>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--ink)', marginBottom: '0.35rem' }}>{cert.title}</h3>
                <p style={{ color: 'var(--ink-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  Issued by: <strong>{cert.issuer}</strong>
                </p>
                <button 
                  className="btn btn-outline btn-sm"
                  onClick={() => openEnquiryModal('Compliance Dossier', `Request Document: ${cert.title}`)}
                >
                  <FileCheck size={14} /> Request Verified Copy
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Legal Disclosure Card */}
        <div style={{ background: '#FFF', padding: '3rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', marginBottom: '1rem' }}>Corporate Legal & Governance Statement</h3>
          <p style={{ color: 'var(--ink-muted)', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            <strong>Shree Sai Baba Infra Projects Pvt. Ltd.</strong> operates with full corporate accountability registered under the Companies Act with the Ministry of Corporate Affairs, Government of India. All residential layouts, high-rises, and commercial complexes comply strictly with Uttar Pradesh Real Estate Regulatory Authority (UP-RERA) bylaws, national building codes (NBC), fire safety norms, and pollution control clearances.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--brand)' }} />
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--ink)' }}>100% Clear Land Titles</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--brand)' }} />
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--ink)' }}>Awas Bandhu Approved</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--brand)' }} />
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--ink)' }}>ISO 9001:2015 Quality Tested</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--brand)' }} />
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--ink)' }}>UP Tourism Registered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
