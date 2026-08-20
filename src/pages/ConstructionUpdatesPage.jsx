import React from 'react';
import { useStore } from '../context/StoreContext';
import { useModal } from '../context/ModalContext';
import { MilestoneTracker } from '../components/project/MilestoneTracker';
import { HardHat, CheckCircle2, Car, Clock } from 'lucide-react';

export const ConstructionUpdatesPage = () => {
  const { projects } = useStore();
  const { openSiteVisitModal } = useModal();

  return (
    <div className="fade-in" style={{ paddingBottom: '5rem' }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #18181B 0%, #27272A 100%)', color: '#FFF', padding: '4.5rem 0 3.5rem', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>CIVIL ENGINEERING TRANSPARENCY</span>
          <h1 style={{ fontSize: '3rem', color: '#FFF', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            Live Construction Progress
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', color: '#A1A1AA', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Verified on-site progress metrics, milestone velocity reports, and photographic updates across all active SSB Group developments.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {projects.map((project) => (
            <div key={project.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.8rem', color: 'var(--ink)', margin: 0 }}>{project.title}</h2>
                  <span style={{ fontSize: '0.85rem', color: 'var(--ink-muted)' }}>📍 {project.locationName}</span>
                </div>
                <button className="btn btn-outline btn-sm" onClick={() => openSiteVisitModal(project.title)}>
                  <Car size={14} /> Schedule Site Inspection
                </button>
              </div>

              <MilestoneTracker project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
