import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useModal } from '../../context/ModalContext';
import { Send, Sparkles, CheckCircle2 } from 'lucide-react';

export const QuickEnquiry = () => {
  const { addLead, projects } = useStore();
  const { showToast } = useModal();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectId: '',
    budgetRange: '₹45 - 65 Lakhs'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      showToast('Please provide your name and phone number.', 'error');
      return;
    }

    const selectedProj = projects.find(p => p.id === formData.projectId) || projects[0];

    addLead({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      projectId: selectedProj.id,
      projectName: selectedProj.title,
      budgetRange: formData.budgetRange,
      source: 'HOMEPAGE_QUICK_FORM',
      message: 'Interested in priority inventory allotment and site visit details.'
    });

    setSubmitted(true);
    showToast(`Thank you ${formData.fullName}! Our senior property advisor will connect with you in 5 minutes.`, 'success');
  };

  return (
    <section className="quick-enquiry-section" id="quick-enquiry-section">
      <div className="container">
        <div className="quick-enquiry-grid">
          <div className="quick-enquiry-info">
            <div className="quick-enquiry-eyebrow-row">
              <Sparkles size={18} style={{ color: 'var(--gold)' }} />
              <span className="eyebrow" style={{ color: 'var(--gold)', margin: 0 }}>CONNECT WITH ADVISORS</span>
            </div>
            <h2 className="quick-enquiry-heading">
              Find Your Ideal Home in Varanasi & Lucknow
            </h2>
            <p className="quick-enquiry-subtext">
              Get verified RERA documentation, real-time inventory pricing, personalized payment plans, and zero-brokerage direct builder advantages.
            </p>
            <div className="quick-enquiry-features">
              <div className="quick-enquiry-feature-item">
                <CheckCircle2 size={18} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                <span>Complimentary Chauffeur Cab Pick & Drop in Varanasi</span>
              </div>
              <div className="quick-enquiry-feature-item">
                <CheckCircle2 size={18} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                <span>100% UP-RERA Registered & Title Clear Land Parcels</span>
              </div>
              <div className="quick-enquiry-feature-item">
                <CheckCircle2 size={18} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                <span>Approved by SBI, HDFC, ICICI, Bank of Baroda & PNB</span>
              </div>
            </div>
          </div>

          <div className="quick-enquiry-card">
            <h3 className="quick-enquiry-card-title">
              Request Priority Callback
            </h3>
            <p className="quick-enquiry-card-subtitle">
              Average response time under 5 minutes during working hours.
            </p>

            {submitted ? (
              <div className="quick-enquiry-success-box">
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✅</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--brand)' }}>Request Submitted!</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
                  Our sales lead Rajesh Sharma has received your enquiry and is preparing the tailored property dossier.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    required 
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="quick-enquiry-form-row">
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
                </div>

                <button type="submit" className="btn btn-primary quick-enquiry-submit-btn">
                  <Send size={16} /> Request Instant Callback
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
