import React from 'react';
import { CheckCircle2, Clock, Activity } from 'lucide-react';

export const MilestoneTracker = ({ project }) => {
  if (!project) return null;

  const milestones = project.milestones || [
    { name: "Land Planning & Regulatory Approvals", pct: 100, status: "COMPLETED" },
    { name: "Site Groundbreaking & Earthwork", pct: 50, status: "IN_PROGRESS" },
    { name: "Civil Superstructure & Floor Slabs", pct: 0, status: "UPCOMING" },
    { name: "Facade Glazing & Retail Handover", pct: 0, status: "UPCOMING" }
  ];

  const overallPct = project.overallProgressPct || 15;

  return (
    <section 
      id="construction-milestones" 
      className="project-card-section"
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem', flexWrap: 'wrap', gap: '1.25rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(197, 160, 89, 0.12)', color: 'var(--gold, #C5A059)', border: '1px solid rgba(197, 160, 89, 0.3)', padding: '0.25rem 0.85rem', borderRadius: 'var(--r-pill)', fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            <Activity size={13} /> Engineering Transparency Audit
          </div>
          <h3 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.2rem)', color: 'var(--ink)', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
            Live Construction Progress & Velocity
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--ink-muted)', marginTop: '0.35rem', maxWidth: '650px', lineHeight: 1.5 }}>
            Real-time on-site structural milestone tracking and statutory engineering auditing.
          </p>
        </div>

        <div style={{ 
          background: 'rgba(34, 197, 94, 0.12)', 
          color: '#16A34A', 
          border: '1px solid rgba(34, 197, 94, 0.3)', 
          padding: '0.45rem 1.15rem', 
          borderRadius: 'var(--r-pill)',
          fontSize: '0.82rem',
          fontWeight: 700,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem'
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16A34A', display: 'inline-block' }}></span>
          <span>ON-SCHEDULE EXECUTION</span>
        </div>
      </div>

      {/* Main Velocity Bar */}
      <div style={{ background: '#F8FAFC', padding: '1.5rem 1.75rem', borderRadius: 'var(--r-xl, 18px)', border: '1px solid var(--border)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ color: 'var(--ink)', fontWeight: 700, fontSize: '0.95rem' }}>Overall Construction Completion Velocity</span>
          <span style={{ color: 'var(--brand, #0F294A)', fontSize: '1.3rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
            {overallPct}% Completed
          </span>
        </div>
        <div style={{ width: '100%', height: '11px', background: '#E2E8F0', borderRadius: 'var(--r-pill)', overflow: 'hidden' }}>
          <div style={{ 
            width: `${overallPct}%`, 
            height: '100%', 
            background: 'linear-gradient(90deg, var(--gold, #C5A059) 0%, #22C55E 100%)', 
            borderRadius: 'var(--r-pill)', 
            transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)' 
          }} />
        </div>
      </div>

      {/* Stage Breakdown Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        {milestones.map((m, idx) => {
          const isDone = m.pct === 100;
          return (
            <div 
              key={idx}
              style={{
                background: isDone ? '#FFFFFF' : '#F8FAFC',
                padding: '1.25rem',
                borderRadius: 'var(--r-xl, 16px)',
                border: isDone ? '1px solid rgba(34, 197, 94, 0.4)' : '1px solid var(--border)',
                boxShadow: isDone ? '0 4px 15px rgba(34, 197, 94, 0.08)' : '0 2px 6px rgba(0,0,0,0.02)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                <h5 style={{ fontSize: '0.92rem', color: 'var(--ink)', margin: 0, fontWeight: 700 }}>{m.name}</h5>
                {isDone ? (
                  <CheckCircle2 size={17} style={{ color: '#16A34A', flexShrink: 0 }} />
                ) : (
                  <Clock size={17} style={{ color: 'var(--gold, #C5A059)', flexShrink: 0 }} />
                )}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem' }}>
                <span style={{ color: isDone ? '#16A34A' : 'var(--ink-muted)', fontWeight: 600 }}>
                  {isDone ? 'Completed' : m.pct > 0 ? 'In Progress' : 'Upcoming Phase'}
                </span>
                <strong style={{ color: isDone ? '#16A34A' : 'var(--brand, #0F294A)' }}>{m.pct}%</strong>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
