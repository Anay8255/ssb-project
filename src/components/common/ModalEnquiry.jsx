import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { useStore } from '../../context/StoreContext';
import { X, Send, Sparkles } from 'lucide-react';

export const ModalEnquiry = () => {
  const { enquiryOpen, enquiryData, closeEnquiryModal, showToast } = useModal();
  const { addLead, projects } = useStore();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectId: '',
    budgetRange: '₹45 - 65 Lakhs',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  if (!enquiryOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      showToast('Please provide your name and phone number.', 'error');
      return;
    }

    setSubmitting(true);
    const selectedProj = projects.find(p => p.id === formData.projectId || p.title === enquiryData.projectTitle);

    addLead({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      projectId: selectedProj?.id || formData.projectId || 'prj_sai_gaon',
      projectName: selectedProj?.title || enquiryData.projectTitle || 'Sai Gaon',
      budgetRange: formData.budgetRange,
      message: formData.message || `Requested via ${enquiryData.intent}`,
      source: enquiryData.intent === 'Brochure Download' ? 'BROCHURE_DOWNLOAD' : 'CALLBACK_60S'
    });

    setTimeout(() => {
      setSubmitting(false);
      showToast(`Brochure & Project details dispatched to ${formData.phone} via WhatsApp!`, 'success');
      closeEnquiryModal();
      setFormData({ fullName: '', phone: '', email: '', projectId: '', budgetRange: '₹45 - 65 Lakhs', message: '' });
    }, 400);
  };

  return (
    <div className="modal-overlay" onClick={closeEnquiryModal}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <Sparkles size={16} style={{ color: 'var(--brand)' }} />
              <span className="eyebrow" style={{ margin: 0 }}>SSB INSTANT ASSIST</span>
            </div>
            <h3 style={{ fontSize: '1.3rem', margin: 0 }}>
              {enquiryData.projectTitle ? `Download ${enquiryData.projectTitle} Brochure` : 'Request Instant Callback'}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={closeEnquiryModal} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginBottom: '1.5rem' }}>
            Enter your contact details below to receive the complete verified pricing, master plan layout, and RERA approval packet directly on WhatsApp & Email.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input 
                type="text" 
                className="form-input" 
                required 
                placeholder="e.g. Amit Sharma"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input 
                  type="tel" 
                  className="form-input" 
                  required 
                  placeholder="+91 98189 28893"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="amit@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Interested Project</label>
                <select 
                  className="form-select"
                  value={formData.projectId}
                  onChange={(e) => setFormData({ ...formData, projectId: e.target.value })}
                >
                  <option value="">Select Project</option>
                  {projects.map(p => (
                    <option key={p.id} value={p.id}>{p.title}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Budget Range</label>
                <select 
                  className="form-select"
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                >
                  <option value="₹25 - 45 Lakhs">₹25 - 45 Lakhs</option>
                  <option value="₹45 - 65 Lakhs">₹45 - 65 Lakhs</option>
                  <option value="₹65 - 90 Lakhs">₹65 - 90 Lakhs</option>
                  <option value="₹90 Lakhs - ₹1.5 Cr">₹90 Lakhs - ₹1.5 Cr</option>
                  <option value="Above ₹1.5 Cr">Above ₹1.5 Cr</option>
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '0.75rem' }}
              disabled={submitting}
            >
              <Send size={16} /> {submitting ? 'Dispatching Details...' : 'Get Instant WhatsApp Brochure'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
