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
    <section style={{ padding: '4.5rem 0', background: 'linear-gradient(135deg, #18181B 0%, #27272A 100%)', color: '#FFF' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Sparkles size={18} style={{ color: 'var(--gold)' }} />
              <span className="eyebrow" style={{ color: 'var(--gold)', margin: 0 }}>CONNECT WITH ADVISORS</span>
            </div>
            <h2 style={{ fontSize: '2.2rem', color: '#FFF', marginBottom: '1rem', lineHeight: '1.25' }}>
              Find Your Ideal Home in Varanasi & Lucknow
            </h2>
            <p style={{ color: '#A1A1AA', fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              Get verified RERA documentation, real-time inventory pricing, personalized payment plans, and zero-brokerage direct builder advantages.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#D4D4D8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--brand)' }} />
                <span>Complimentary Chauffeur Cab Pick & Drop in Varanasi</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--brand)' }} />
                <span>100% UP-RERA Registered & Title Clear Land Parcels</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--brand)' }} />
                <span>Approved by SBI, HDFC, ICICI, Bank of Baroda & PNB</span>
              </div>
            </div>
          </div>

          <div style={{ background: '#FFF', padding: '2.5rem', borderRadius: 'var(--r-xl)', boxShadow: 'var(--shadow-lg)', color: 'var(--ink)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.35rem', color: 'var(--ink)' }}>
              Request Priority Callback
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', marginBottom: '1.5rem' }}>
              Average response time under 5 minutes during working hours.
            </p>

            {submitted ? (
              <div style={{ padding: '2rem 1rem', textAlign: 'center', background: 'var(--sand-muted)', borderRadius: 'var(--r-md)' }}>
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

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
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
