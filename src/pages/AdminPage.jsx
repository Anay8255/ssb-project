import React, { useState } from 'react';
import { AdminSidebar } from '../components/admin/AdminSidebar';
import { AdminKpiRow } from '../components/admin/AdminKpiRow';
import { KanbanCrm } from '../components/admin/KanbanCrm';
import { InventoryManager } from '../components/admin/InventoryManager';
import { LogisticsManager } from '../components/admin/LogisticsManager';
import { LandingBuilder } from '../components/admin/LandingBuilder';
import { AuditLogs } from '../components/admin/AuditLogs';

export const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('crm');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--sand)' }}>
      {/* Sidebar */}
      <AdminSidebar activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Main Content Area */}
      <main style={{ flexGrow: 1, padding: '2.5rem', overflowY: 'auto' }}>
        {/* KPI Row */}
        <AdminKpiRow />

        {/* Dynamic Sub-Views */}
        <div className="fade-in">
          {activeTab === 'crm' && <KanbanCrm />}
          {activeTab === 'inventory' && <InventoryManager />}
          {activeTab === 'visits' && <LogisticsManager />}
          {activeTab === 'landing' && <LandingBuilder />}
          {activeTab === 'audit' && <AuditLogs />}
        </div>
      </main>
    </div>
  );
};
