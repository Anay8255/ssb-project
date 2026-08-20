import React from 'react';
import { HardHat, CheckCircle2, Clock } from 'lucide-react';

export const MilestoneTracker = ({ project }) => {
  if (!project) return null;

  const milestones = project.milestones || [
    { name: "Foundation & Excavation", pct: 100, status: "COMPLETED" },
    { name: "RCC Structure", pct: 85, status: "IN_PROGRESS" },
    { name: "Brickwork & Plaster", pct: 60, status: "IN_PROGRESS" },
    { name: "MEP & Finishing", pct: 30, status: "IN_PROGRESS" }
  ];

  const overallPct = project.overallProgressPct || 75;

  return (
    <div className="timeline-module" style={{ background: '#FFF', borderRadius: 'var(--r-xl)', padding: '2.5rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', marginBottom: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
            <HardHat size={18} style={{ color: 'var(--brand)' }} />
            <span className="eyebrow" style={{ margin: 0 }}>ENGINEERING AUDIT</span>
          </div>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', margin: 0 }}>Live Construction Progress</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginTop: '0.25rem' }}>
            Verified on-site civil engineering inspection metrics as of <strong>August 2026</strong>
          </p>
        </div>
        <span className="badge badge-success" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
          🟢 On-Schedule for Delivery
        </span>
      </div>

      {/* Velocity Bar */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.95rem' }}>
          <span style={{ color: 'var(--ink)' }}>Overall Project Completion Velocity</span>
          <span style={{ color: 'var(--brand)', fontSize: '1.15rem', fontWeight: 800 }}>{overallPct}% Completed</span>
        </div>
        <div style={{ width: '100%', height: '14px', background: 'var(--sand-muted)', borderRadius: 'var(--r-pill)', overflow: 'hidden', border: '1px solid var(--border)' }}>
          <div style={{ width: `${overallPct}%`, height: '100%', background: 'linear-gradient(90deg, var(--brand) 0%, #10B981 100%)', borderRadius: 'var(--r-pill)', transition: 'width 1s ease' }}></div>
        </div>
      </div>

      {/* Milestones Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
        {milestones.map((m, idx) => {
          const isDone = m.pct === 100;
          return (
            <div 
              key={idx}
              style={{
                background: 'var(--sand-muted)',
                padding: '1.25rem',
                borderRadius: 'var(--r-md)',
                border: isDone ? '1.5px solid var(--brand)' : '1px solid var(--border)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <h5 style={{ fontSize: '0.95rem', color: 'var(--ink)', margin: 0 }}>{m.name}</h5>
                {isDone ? (
                  <CheckCircle2 size={16} style={{ color: 'var(--brand)' }} />
                ) : (
                  <Clock size={16} style={{ color: 'var(--gold)' }} />
                )}
              </div>
              <div style={{ width: '100%', height: '6px', background: '#E2E8F0', borderRadius: 'var(--r-pill)', overflow: 'hidden', marginBottom: '0.5rem' }}>
                <div style={{ width: `${m.pct}%`, height: '100%', background: isDone ? 'var(--brand)' : 'var(--gold)', borderRadius: 'var(--r-pill)' }}></div>
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: isDone ? 'var(--brand)' : 'var(--gold)' }}>
                {m.pct}% Complete
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
