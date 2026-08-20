import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Users, Flame, Car, Building2 } from 'lucide-react';

export const AdminKpiRow = () => {
  const { leads, siteVisits, units } = useStore();

  const hotLeads = leads.filter(l => l.priority === 'HOT').length;
  const availableUnits = units.filter(u => u.status === 'AVAILABLE').length;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
      <div style={{ background: '#FFF', padding: '1.5rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 600, display: 'block' }}>Total Active Leads</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--ink)' }}>{leads.length}</div>
        </div>
        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--sand-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink)' }}>
          <Users size={22} />
        </div>
      </div>

      <div style={{ background: '#FFF', padding: '1.5rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 600, display: 'block' }}>Hot Priority Leads</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--danger)' }}>{hotLeads}</div>
        </div>
        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--danger-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--danger)' }}>
          <Flame size={22} />
        </div>
      </div>

      <div style={{ background: '#FFF', padding: '1.5rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 600, display: 'block' }}>Site Visits Scheduled</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--brand)' }}>{siteVisits.length}</div>
        </div>
        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--brand-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand)' }}>
          <Car size={22} />
        </div>
      </div>

      <div style={{ background: '#FFF', padding: '1.5rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 600, display: 'block' }}>Units Available</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--success)' }}>{availableUnits} / {units.length}</div>
        </div>
        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--success-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)' }}>
          <Building2 size={22} />
        </div>
      </div>
    </div>
  );
};
