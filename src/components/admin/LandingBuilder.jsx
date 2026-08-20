import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { Globe, Plus, Copy, ExternalLink, Sparkles } from 'lucide-react';

export const LandingBuilder = () => {
  const { showToast } = useModal();
  const [pages, setPages] = useState([
    {
      id: 'lp_01',
      slug: 'luxury-2bhk-varanasi',
      title: 'Luxury 2 & 3 BHK Apartments in Varanasi | Sai Gaon',
      heroHeadline: 'Own an Eco-Luxury Gated Home from ₹48.5 Lakhs',
      targetAudience: 'Google Search Ads — Varanasi High Net-Worth Buyers',
      activeStatus: true,
      leadsCount: 24
    },
    {
      id: 'lp_02',
      slug: 'nri-investment-varanasi',
      title: 'High-Yield NRI Real Estate Investment in Eastern UP',
      heroHeadline: '12% Projected Annual Capital Appreciation & Full Rental Management',
      targetAudience: 'Facebook / Meta NRI Ads — Dubai & USA',
      activeStatus: true,
      leadsCount: 18
    }
  ]);

  const [newPage, setNewPage] = useState({
    slug: '',
    title: '',
    heroHeadline: '',
    targetAudience: ''
  });

  const handleCreate = (e) => {
    e.preventDefault();
    if (!newPage.slug || !newPage.title) {
      showToast("Please enter page title and URL slug.", "error");
      return;
    }

    const created = {
      id: 'lp_' + Date.now(),
      slug: newPage.slug.toLowerCase().replace(/\s+/g, '-'),
      title: newPage.title,
      heroHeadline: newPage.heroHeadline || 'Experience Premium Luxury Living in Varanasi',
      targetAudience: newPage.targetAudience || 'Digital Marketing Campaign',
      activeStatus: true,
      leadsCount: 0
    };

    setPages([created, ...pages]);
    showToast(`Campaign Landing Page created: /#/${created.slug}`, 'success');
    setNewPage({ slug: '', title: '', heroHeadline: '', targetAudience: '' });
  };

  const copyLink = (slug) => {
    const url = `${window.location.origin}/#/projects/sai-gaon?campaign=${slug}`;
    navigator.clipboard.writeText(url);
    showToast("Campaign URL copied to clipboard!", "success");
  };

  return (
    <div style={{ background: '#FFF', padding: '2rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.6rem', color: 'var(--ink)', margin: 0 }}>Campaign Landing Page Builder</h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', margin: 0 }}>
          Launch targeted high-conversion landing pages for Google/Facebook ads with direct WhatsApp lead routing
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleCreate} style={{ background: 'var(--sand-muted)', padding: '1.5rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', marginBottom: '2rem' }}>
        <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--ink)' }}>Create New Campaign Landing Page</h4>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div className="form-group">
            <label className="form-label">URL Slug *</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. 2bhk-near-airport-varanasi"
              value={newPage.slug}
              onChange={(e) => setNewPage({ ...newPage, slug: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">SEO Page Title *</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. Best 2 BHK Homes in Harhua Varanasi"
              value={newPage.title}
              onChange={(e) => setNewPage({ ...newPage, title: e.target.value })}
              required
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div className="form-group">
            <label className="form-label">Hero Headline</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. Modern Living with 70% Open Greenery"
              value={newPage.heroHeadline}
              onChange={(e) => setNewPage({ ...newPage, heroHeadline: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Target Audience / Channel</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. Google Ads Varanasi / NRI Facebook"
              value={newPage.targetAudience}
              onChange={(e) => setNewPage({ ...newPage, targetAudience: e.target.value })}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-sm">
          <Plus size={14} /> Generate Landing Page
        </button>
      </form>

      {/* Pages List */}
      <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--ink)' }}>Active Campaign Pages</h4>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {pages.map((p) => (
          <div 
            key={p.id}
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              background: '#FFF'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <strong style={{ fontSize: '1.05rem', color: 'var(--ink)' }}>{p.title}</strong>
                <span className="badge badge-brand">LIVE</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', margin: 0 }}>
                Slug: <code style={{ background: 'var(--sand-muted)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>/{p.slug}</code> | Channel: <strong>{p.targetAudience}</strong>
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', display: 'block' }}>Leads Captured</span>
                <strong style={{ fontSize: '1.1rem', color: 'var(--brand)' }}>{p.leadsCount}</strong>
              </div>

              <button 
                className="btn btn-ghost-warm btn-sm"
                onClick={() => copyLink(p.slug)}
                title="Copy Campaign Link"
              >
                <Copy size={14} /> Copy Link
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
