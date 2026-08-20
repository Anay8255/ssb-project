import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useModal } from '../../context/ModalContext';
import { Building2, Search, CheckCircle, AlertTriangle } from 'lucide-react';

export const InventoryManager = () => {
  const { units, updateUnitStatus } = useStore();
  const { showToast } = useModal();
  const [filterProject, setFilterProject] = useState('ALL');

  const filteredUnits = filterProject === 'ALL'
    ? units
    : units.filter(u => u.projectId === filterProject);

  const handleStatusChange = (unitId, newStatus) => {
    updateUnitStatus(unitId, newStatus);
    showToast(`Unit status updated to: ${newStatus}`, 'success');
  };

  return (
    <div style={{ background: '#FFF', padding: '2rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--ink)', margin: 0 }}>Live Property Inventory Engine</h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', margin: 0 }}>
            Modifying a unit's status immediately updates public availability on the interactive Master Plan
          </p>
        </div>

        <div>
          <select 
            value={filterProject} 
            onChange={(e) => setFilterProject(e.target.value)}
            className="form-select"
            style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
          >
            <option value="ALL">All Projects</option>
            <option value="prj_sai_gaon">Sai Gaon (Varanasi)</option>
            <option value="prj_sai_city_housing">Shree Sai City Housing</option>
            <option value="prj_sai_city_pmay">Shree Sai City EWS</option>
            <option value="prj_pratham">Pratham (Lucknow)</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
          <thead>
            <tr style={{ background: 'var(--sand-muted)', borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
              <th style={{ padding: '0.85rem 1rem' }}>Unit Number</th>
              <th style={{ padding: '0.85rem 1rem' }}>Project ID</th>
              <th style={{ padding: '0.85rem 1rem' }}>Type</th>
              <th style={{ padding: '0.85rem 1rem' }}>Super Area</th>
              <th style={{ padding: '0.85rem 1rem' }}>Facing</th>
              <th style={{ padding: '0.85rem 1rem' }}>Pricing</th>
              <th style={{ padding: '0.85rem 1rem' }}>Status Control</th>
            </tr>
          </thead>
          <tbody>
            {filteredUnits.map((u) => (
              <tr key={u.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--ink)' }}>{u.unitNumber}</td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--ink-muted)' }}>{u.projectId}</td>
                <td style={{ padding: '0.85rem 1rem' }}>{u.unitType}</td>
                <td style={{ padding: '0.85rem 1rem' }}>{u.areaSqFt} Sq.Ft.</td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--ink-muted)' }}>{u.facing}</td>
                <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--brand)' }}>
                  ₹{(u.totalPrice / 100000).toFixed(2)} L
                </td>
                <td style={{ padding: '0.85rem 1rem' }}>
                  <select 
                    value={u.status}
                    onChange={(e) => handleStatusChange(u.id, e.target.value)}
                    className="form-select"
                    style={{ fontSize: '0.8rem', padding: '0.35rem 0.6rem', width: 'auto' }}
                  >
                    <option value="AVAILABLE">🟢 AVAILABLE</option>
                    <option value="HOLD">🟡 ON HOLD (48H)</option>
                    <option value="BOOKED">🔵 BOOKED</option>
                    <option value="SOLD">⚫ SOLD OUT</option>
                    <option value="BLOCKED">🔴 BLOCKED</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
