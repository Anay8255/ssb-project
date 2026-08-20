import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Shield, Clock, UserCheck } from 'lucide-react';

export const AuditLogs = () => {
  const { auditLogs } = useStore();

  return (
    <div style={{ background: '#FFF', padding: '2rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
          <Shield size={18} style={{ color: 'var(--brand)' }} />
          <h3 style={{ fontSize: '1.6rem', color: 'var(--ink)', margin: 0 }}>System Security & Audit Trail</h3>
        </div>
        <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', margin: 0 }}>
          Immutable logs with cryptographic before/after diffs of all pricing, status, and lead changes
        </p>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
          <thead>
            <tr style={{ background: 'var(--sand-muted)', borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
              <th style={{ padding: '0.85rem 1rem' }}>Timestamp</th>
              <th style={{ padding: '0.85rem 1rem' }}>User / Actor</th>
              <th style={{ padding: '0.85rem 1rem' }}>Action</th>
              <th style={{ padding: '0.85rem 1rem' }}>Entity</th>
              <th style={{ padding: '0.85rem 1rem' }}>Old Value</th>
              <th style={{ padding: '0.85rem 1rem' }}>New Value</th>
            </tr>
          </thead>
          <tbody>
            {auditLogs.map((log) => (
              <tr key={log.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--ink-muted)', whiteSpace: 'nowrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={13} />
                    <span>{log.timestamp}</span>
                  </div>
                </td>
                <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: 'var(--ink)' }}>
                  {log.adminUser}
                </td>
                <td style={{ padding: '0.85rem 1rem' }}>
                  <span className="badge badge-ink" style={{ fontSize: '0.72rem' }}>
                    {log.action}
                  </span>
                </td>
                <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: 'var(--brand)' }}>
                  {log.entity}
                </td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--ink-muted)', maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {log.oldValue}
                </td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--success)', fontWeight: 600, maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {log.newValue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
