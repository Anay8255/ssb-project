import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useModal } from '../../context/ModalContext';
import { Layers, X, Sparkles, Car } from 'lucide-react';

export const MasterPlanViewer = ({ projectId }) => {
  const { units, getProjectBySlug } = useStore();
  const { openEnquiryModal, openSiteVisitModal } = useModal();
  const [selectedUnit, setSelectedUnit] = useState(null);

  const isPlotted = projectId === 'prj_pratham' || projectId === 'pratham';
  const projectUnits = units.filter(u => u.projectId === projectId || (projectId === 'sai-gaon' && u.projectId === 'prj_sai_gaon'));

  const getUnitStatus = (unitId, defaultStatus = 'AVAILABLE') => {
    const found = units.find(u => u.id === unitId);
    return found ? found.status : defaultStatus;
  };

  const getStatusColor = (status) => {
    if (status === 'AVAILABLE') return '#10B981';
    if (status === 'HOLD') return '#F59E0B';
    if (status === 'SOLD' || status === 'BOOKED') return '#64748B';
    return '#10B981';
  };

  const handleUnitClick = (unitId) => {
    const unit = units.find(u => u.id === unitId);
    if (unit) {
      setSelectedUnit(unit);
    }
  };

  return (
    <div className="master-plan-container" style={{ background: '#FFF', borderRadius: 'var(--r-xl)', padding: '2rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', marginBottom: '2.5rem' }}>
      <div className="plan-toolbar" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
            <Layers size={18} style={{ color: 'var(--brand)' }} />
            <h3 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--ink)' }}>Interactive Master Layout Plan</h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', margin: 0 }}>
            Click on any flat or plot below to view real-time live availability, carpet area, facing & estimated price.
          </p>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: '1rem', background: 'var(--sand-muted)', padding: '0.5rem 1rem', borderRadius: 'var(--r-pill)', border: '1px solid var(--border)', fontSize: '0.8rem', fontWeight: 600 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }}></span>
            <span>Available</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }}></span>
            <span>On Hold (48h)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#64748B' }}></span>
            <span>Booked / Sold</span>
          </div>
        </div>
      </div>

      {/* SVG Layout */}
      <div className="svg-master-viewport" style={{ overflowX: 'auto', borderRadius: 'var(--r-md)' }}>
        <svg viewBox="0 0 1000 550" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', minWidth: '700px', height: 'auto', background: '#0E1A29', borderRadius: '12px', boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5)', cursor: 'pointer' }}>
          <defs>
            <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E293B"/>
              <stop offset="100%" stopColor="#334155"/>
            </linearGradient>
            <pattern id="parkGrass" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="#112233"/>
              <circle cx="10" cy="10" r="1.5" fill="#1B3B5F"/>
            </pattern>
          </defs>

          {/* Entry Road */}
          <rect x="0" y="480" width="1000" height="70" fill="url(#roadGrad)" />
          <line x1="0" y1="515" x2="1000" y2="515" stroke="#F8FAFC" strokeDasharray="15,15" strokeWidth="2"/>
          <text x="500" y="525" fill="#94A3B8" fontSize="14" fontWeight="700" textAnchor="middle" letterSpacing="2">60 FT WIDE ARTERIAL ACCESS ROAD</text>

          {/* Central Park & Pool */}
          <rect x="340" y="80" width="320" height="340" rx="16" fill="url(#parkGrass)" stroke="#1E3A8A" strokeWidth="2"/>
          <circle cx="500" cy="200" r="60" fill="#0284C7" stroke="#38BDF8" strokeWidth="4"/>
          <text x="500" y="205" fill="#FFF" fontSize="12" fontWeight="700" textAnchor="middle">INFINITY POOL</text>
          <text x="500" y="320" fill="#93C5FD" fontSize="14" fontWeight="700" textAnchor="middle">BOTANICAL GARDENS</text>

          {/* Clubhouse */}
          <rect x="420" y="370" width="160" height="50" rx="8" fill="#B45309" stroke="#F59E0B" strokeWidth="2"/>
          <text x="500" y="400" fill="#FFF" fontSize="12" fontWeight="700" textAnchor="middle">LUXURY CLUBHOUSE</text>

          {/* Tower A Units */}
          <g id="tower-a-group">
            <rect x="50" y="50" width="240" height="390" rx="12" fill="#1B263B" stroke="#D97706" strokeWidth="2"/>
            <text x="170" y="85" fill="#D97706" fontSize="15" fontWeight="800" textAnchor="middle">TOWER A (ROYAL WING)</text>

            {/* Flat 301 */}
            <g onClick={() => handleUnitClick('unt_101')} transform="translate(70, 110)">
              <rect width="95" height="130" rx="8" fill={getStatusColor(getUnitStatus('unt_101', 'AVAILABLE'))} fillOpacity="0.85" stroke="#FFF" strokeWidth="1.5"/>
              <text x="47" y="50" fill="#FFF" fontSize="12" fontWeight="700" textAnchor="middle">A-301</text>
              <text x="47" y="70" fill="#E2E8F0" fontSize="10" textAnchor="middle">2 BHK (1150sft)</text>
              <text x="47" y="95" fill="#FFF" fontSize="9" fontWeight="800" textAnchor="middle">{getUnitStatus('unt_101', 'AVAILABLE')}</text>
            </g>

            {/* Flat 302 */}
            <g onClick={() => handleUnitClick('unt_102')} transform="translate(175, 110)">
              <rect width="95" height="130" rx="8" fill={getStatusColor(getUnitStatus('unt_102', 'HOLD'))} fillOpacity="0.85" stroke="#FFF" strokeWidth="1.5"/>
              <text x="47" y="50" fill="#FFF" fontSize="12" fontWeight="700" textAnchor="middle">A-302</text>
              <text x="47" y="70" fill="#E2E8F0" fontSize="10" textAnchor="middle">2 BHK (1150sft)</text>
              <text x="47" y="95" fill="#FFF" fontSize="9" fontWeight="800" textAnchor="middle">{getUnitStatus('unt_102', 'HOLD')}</text>
            </g>

            {/* Flat 401 */}
            <g onClick={() => handleUnitClick('unt_103')} transform="translate(70, 260)">
              <rect width="95" height="145" rx="8" fill={getStatusColor(getUnitStatus('unt_103', 'BOOKED'))} fillOpacity="0.85" stroke="#FFF" strokeWidth="1.5"/>
              <text x="47" y="55" fill="#FFF" fontSize="12" fontWeight="700" textAnchor="middle">A-401</text>
              <text x="47" y="75" fill="#E2E8F0" fontSize="10" textAnchor="middle">3 BHK (1620sft)</text>
              <text x="47" y="105" fill="#FFF" fontSize="9" fontWeight="800" textAnchor="middle">{getUnitStatus('unt_103', 'BOOKED')}</text>
            </g>

            {/* Flat 402 */}
            <g onClick={() => handleUnitClick('unt_104')} transform="translate(175, 260)">
              <rect width="95" height="145" rx="8" fill={getStatusColor(getUnitStatus('unt_104', 'AVAILABLE'))} fillOpacity="0.85" stroke="#FFF" strokeWidth="1.5"/>
              <text x="47" y="55" fill="#FFF" fontSize="12" fontWeight="700" textAnchor="middle">A-402</text>
              <text x="47" y="75" fill="#E2E8F0" fontSize="10" textAnchor="middle">3 BHK (1620sft)</text>
              <text x="47" y="105" fill="#FFF" fontSize="9" fontWeight="800" textAnchor="middle">{getUnitStatus('unt_104', 'AVAILABLE')}</text>
            </g>
          </g>

          {/* Tower B Units */}
          <g id="tower-b-group">
            <rect x="710" y="50" width="240" height="390" rx="12" fill="#1B263B" stroke="#D97706" strokeWidth="2"/>
            <text x="830" y="85" fill="#D97706" fontSize="15" fontWeight="800" textAnchor="middle">TOWER B (SIGNATURE)</text>

            {/* Flat 101 */}
            <g onClick={() => handleUnitClick('unt_105')} transform="translate(730, 110)">
              <rect width="95" height="130" rx="8" fill={getStatusColor(getUnitStatus('unt_105', 'SOLD'))} fillOpacity="0.85" stroke="#FFF" strokeWidth="1.5"/>
              <text x="47" y="50" fill="#FFF" fontSize="12" fontWeight="700" textAnchor="middle">B-101</text>
              <text x="47" y="70" fill="#E2E8F0" fontSize="10" textAnchor="middle">2 BHK (1150sft)</text>
              <text x="47" y="95" fill="#FFF" fontSize="9" fontWeight="800" textAnchor="middle">{getUnitStatus('unt_105', 'SOLD')}</text>
            </g>

            {/* Flat 102 */}
            <g onClick={() => handleUnitClick('unt_106')} transform="translate(835, 110)">
              <rect width="95" height="130" rx="8" fill={getStatusColor(getUnitStatus('unt_106', 'AVAILABLE'))} fillOpacity="0.85" stroke="#FFF" strokeWidth="1.5"/>
              <text x="47" y="50" fill="#FFF" fontSize="12" fontWeight="700" textAnchor="middle">B-102</text>
              <text x="47" y="70" fill="#E2E8F0" fontSize="10" textAnchor="middle">3 BHK (1620sft)</text>
              <text x="47" y="95" fill="#FFF" fontSize="9" fontWeight="800" textAnchor="middle">{getUnitStatus('unt_106', 'AVAILABLE')}</text>
            </g>
          </g>
        </svg>
      </div>

      {/* Unit Detail Modal */}
      {selectedUnit && (
        <div className="modal-overlay" onClick={() => setSelectedUnit(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
            <div className="modal-header">
              <div>
                <span className="eyebrow" style={{ margin: 0 }}>LIVE INVENTORY STATUS</span>
                <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Unit {selectedUnit.unitNumber}</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedUnit(null)}>
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span className={`badge ${selectedUnit.status === 'AVAILABLE' ? 'badge-success' : selectedUnit.status === 'HOLD' ? 'badge-warning' : 'badge-ink'}`}>
                  {selectedUnit.status === 'AVAILABLE' ? 'Available for Allotment' : selectedUnit.status === 'HOLD' ? 'On 48-Hour Hold' : 'Booked'}
                </span>
                <strong style={{ fontSize: '1.25rem', color: 'var(--brand)' }}>
                  ₹{(selectedUnit.totalPrice / 100000).toFixed(2)} Lakhs
                </strong>
              </div>

              <div style={{ background: 'var(--sand-muted)', padding: '1.25rem', borderRadius: 'var(--r-md)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem', border: '1px solid var(--border)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>Configuration</span>
                  <strong style={{ display: 'block', color: 'var(--ink)' }}>{selectedUnit.unitType}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>Super Area</span>
                  <strong style={{ display: 'block', color: 'var(--ink)' }}>{selectedUnit.areaSqFt} Sq. Ft.</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>Facing / Vastu</span>
                  <strong style={{ display: 'block', color: 'var(--ink)' }}>{selectedUnit.facing}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>Tower Block</span>
                  <strong style={{ display: 'block', color: 'var(--ink)' }}>{selectedUnit.towerBlock}</strong>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <button 
                  className="btn btn-primary" 
                  onClick={() => {
                    const uName = selectedUnit.unitNumber;
                    setSelectedUnit(null);
                    openEnquiryModal('Sai Gaon', `Enquiry for ${uName}`);
                  }}
                >
                  <Sparkles size={16} /> Enquire Unit
                </button>
                <button 
                  className="btn btn-ghost-warm" 
                  onClick={() => {
                    setSelectedUnit(null);
                    openSiteVisitModal('Sai Gaon');
                  }}
                >
                  <Car size={16} /> Book Site Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
