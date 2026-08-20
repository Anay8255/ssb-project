import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useModal } from '../../context/ModalContext';
import { Car, CheckCircle2, User, Phone, MapPin, Calendar } from 'lucide-react';

export const LogisticsManager = () => {
  const { siteVisits, assignDriverToVisit } = useStore();
  const { showToast } = useModal();
  const [driverInput, setDriverInput] = useState({});

  const handleAssignDriver = (visitId) => {
    const driverDetails = driverInput[visitId];
    if (!driverDetails) {
      showToast("Please enter driver name and vehicle number.", "error");
      return;
    }

    assignDriverToVisit(visitId, driverDetails);
    showToast(`Driver assigned: ${driverDetails}`, "success");
    setDriverInput(prev => ({ ...prev, [visitId]: '' }));
  };

  return (
    <div style={{ background: '#FFF', padding: '2rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.6rem', color: 'var(--ink)', margin: 0 }}>Site Visit Logistics & Fleet Dispatcher</h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', margin: 0 }}>
          Manage VIP chauffeur cab bookings, assign drivers (Innova Crysta fleet), and coordinate site inspections
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
        {siteVisits.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--ink-muted)', gridColumn: '1 / -1' }}>
            No site visits scheduled currently.
          </div>
        ) : (
          siteVisits.map((visit) => (
            <div 
              key={visit.id}
              style={{
                background: 'var(--sand-muted)',
                borderRadius: 'var(--r-lg)',
                padding: '1.5rem',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className={`badge ${visit.status === 'DRIVER_ASSIGNED' ? 'badge-brand' : 'badge-warning'}`}>
                  {visit.status}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}>
                  ID: {visit.id}
                </span>
              </div>

              <div>
                <strong style={{ fontSize: '1.1rem', color: 'var(--ink)', display: 'block' }}>{visit.customerName}</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--ink-muted)' }}>📞 {visit.phone}</span>
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--ink)' }}>
                🏢 <strong>Project:</strong> {visit.projectName}<br />
                📅 <strong>Date:</strong> {visit.scheduledDate} ({visit.timeSlot})<br />
                📍 <strong>Pickup:</strong> {visit.pickupAddress}<br />
                👥 <strong>Visitors:</strong> {visit.numberOfVisitors} Persons
              </div>

              <div style={{ background: '#FFF', padding: '0.85rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>
                  Assigned Driver & Vehicle
                </span>
                <div style={{ fontWeight: 700, color: 'var(--brand)', fontSize: '0.9rem' }}>
                  {visit.driverDetails || 'Pending Assignment'}
                </div>
              </div>

              {/* Driver Input Box */}
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                <input 
                  type="text" 
                  placeholder="e.g. Ramesh (Innova - UP65 BT 9922)"
                  value={driverInput[visit.id] || ''}
                  onChange={(e) => setDriverInput({ ...driverInput, [visit.id]: e.target.value })}
                  className="form-input"
                  style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem' }}
                />
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => handleAssignDriver(visit.id)}
                >
                  Assign
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
