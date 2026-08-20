import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useModal } from '../../context/ModalContext';
import { Download, Search, Phone, Mail, Flame, Clock } from 'lucide-react';

export const KanbanCrm = () => {
  const { leads, updateLeadStatus } = useStore();
  const { showToast } = useModal();
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    { id: "NEW", label: "New Leads", color: "#3B82F6" },
    { id: "CONTACTED", label: "Contacted", color: "#8B5CF6" },
    { id: "QUALIFIED", label: "Qualified", color: "#06B6D4" },
    { id: "SITE_VISIT_SCHEDULED", label: "Visit Scheduled", color: "#F59E0B" },
    { id: "NEGOTIATION", label: "Negotiation", color: "#EC4899" },
    { id: "CONVERTED", label: "Booked / Closed", color: "#10B981" }
  ];

  const filteredLeads = leads.filter(l => 
    l.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.phone.includes(searchTerm) ||
    l.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (leadId, newStatus) => {
    updateLeadStatus(leadId, newStatus);
    showToast(`Lead moved to: ${newStatus}`, 'success');
  };

  const exportLeadsCsv = () => {
    let csv = "ID,Full Name,Phone,Email,Project,Status,Priority,Source,Created At\n";
    leads.forEach(l => {
      csv += `"${l.id}","${l.fullName}","${l.phone}","${l.email}","${l.projectName}","${l.status}","${l.priority}","${l.source}","${l.createdAt}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SSB_Infra_Leads_${Date.now()}.csv`;
    a.click();
    showToast("Leads exported to CSV successfully!", "success");
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--ink)', margin: 0 }}>Multi-Stage Real Estate Lead CRM</h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', margin: 0 }}>
            Real-time lead qualification pipeline with automated lead scoring SLAs
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-muted)' }} />
            <input 
              type="text" 
              placeholder="Search leads, phone..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '2.2rem', width: '220px', paddingBlock: '0.5rem', fontSize: '0.85rem' }}
            />
          </div>

          <button className="btn btn-primary btn-sm" onClick={exportLeadsCsv}>
            <Download size={14} /> Export CSV
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', overflowX: 'auto', paddingBottom: '1rem' }}>
        {columns.map(col => {
          const colLeads = filteredLeads.filter(l => l.status === col.id);
          return (
            <div 
              key={col.id}
              style={{
                background: 'var(--sand-muted)',
                borderRadius: 'var(--r-lg)',
                padding: '1rem',
                border: '1px solid var(--border)',
                minHeight: '480px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Column Header */}
              <div style={{ borderTop: `3px solid ${col.color}`, paddingTop: '0.6rem', paddingBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', marginBottom: '0.75rem' }}>
                <strong style={{ fontSize: '0.9rem', color: 'var(--ink)' }}>{col.label}</strong>
                <span className="badge badge-ink" style={{ fontSize: '0.75rem' }}>{colLeads.length}</span>
              </div>

              {/* Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
                {colLeads.length === 0 ? (
                  <div style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', textAlign: 'center', padding: '2rem 0' }}>
                    No leads in stage
                  </div>
                ) : (
                  colLeads.map(lead => (
                    <div 
                      key={lead.id}
                      style={{
                        background: '#FFF',
                        borderRadius: 'var(--r-md)',
                        padding: '1rem',
                        border: '1px solid var(--border)',
                        boxShadow: 'var(--shadow-xs)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <span className={`badge ${lead.priority === 'HOT' ? 'badge-warning' : 'badge-ink'}`} style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem' }}>
                          {lead.priority === 'HOT' && <Flame size={12} style={{ color: 'var(--danger)' }} />}
                          {lead.priority} LEAD
                        </span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--ink-muted)' }}>
                          {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>

                      <strong style={{ fontSize: '0.95rem', color: 'var(--ink)', display: 'block' }}>{lead.fullName}</strong>
                      <div style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', margin: '0.2rem 0' }}>
                        📞 {lead.phone}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--brand)', fontWeight: 600 }}>
                        🏢 {lead.projectName}
                      </div>
                      {lead.budgetRange && (
                        <div style={{ fontSize: '0.75rem', color: 'var(--gold)', marginTop: '0.2rem' }}>
                          💰 Budget: {lead.budgetRange}
                        </div>
                      )}
                      <p style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', margin: '0.4rem 0', lineHeight: '1.4' }}>
                        {lead.notes}
                      </p>

                      <div style={{ marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-light)' }}>
                        <select 
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          className="form-select"
                          style={{ fontSize: '0.75rem', padding: '0.35rem 0.6rem' }}
                        >
                          {columns.map(c => (
                            <option key={c.id} value={c.id}>Move: {c.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
