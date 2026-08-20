import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Building, Car, Globe, Shield, ArrowLeft, RefreshCw } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { useModal } from '../../context/ModalContext';

export const AdminSidebar = ({ activeTab, onSelectTab }) => {
  const { resetDatabase } = useStore();
  const { showToast } = useModal();

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset the database to original seed state?")) {
      resetDatabase();
      showToast("Database reset to original seed state.", "info");
    }
  };

  const navItems = [
    { id: 'crm', label: 'Lead CRM & Pipeline', icon: Users },
    { id: 'inventory', label: 'Live Unit Inventory', icon: Building },
    { id: 'visits', label: 'Site Visit Logistics', icon: Car },
    { id: 'landing', label: 'Landing Page Builder', icon: Globe },
    { id: 'audit', label: 'Security & Audit Logs', icon: Shield }
  ];

  return (
    <aside className="admin-sidebar" style={{ background: '#0F172A', color: '#FFF', width: '280px', minHeight: '100vh', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.25rem' }}>
        <div style={{ width: '40px', height: '40px', background: 'var(--brand)', borderRadius: 'var(--r-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.2rem', color: '#FFF' }}>
          S
        </div>
        <div>
          <h2 style={{ fontSize: '1.1rem', color: '#FFF', margin: 0, letterSpacing: '0.05em' }}>SSB INFRA</h2>
          <span style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.1em' }}>OPERATIONS CMS</span>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--r-md)',
                background: isActive ? 'var(--brand)' : 'transparent',
                color: isActive ? '#FFF' : '#94A3B8',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'all var(--dur-fast)'
              }}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer controls */}
      <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ fontSize: '0.78rem', color: '#64748B' }}>
          Logged in: <strong style={{ color: 'var(--gold)' }}>Super Admin</strong><br />
          Role: Full Platform Access
        </div>

        <button 
          onClick={handleReset}
          className="btn btn-ghost-warm btn-sm"
          style={{ background: 'rgba(255,255,255,0.05)', color: '#94A3B8', border: '1px solid rgba(255,255,255,0.1)', width: '100%', justifyContent: 'flex-start' }}
        >
          <RefreshCw size={14} /> Reset Database
        </button>

        <Link 
          to="/" 
          className="btn btn-outline btn-sm" 
          style={{ color: '#FFF', borderColor: 'rgba(255,255,255,0.2)', width: '100%', justifyContent: 'flex-start' }}
        >
          <ArrowLeft size={14} /> Exit to Live Site
        </Link>
      </div>
    </aside>
  );
};
