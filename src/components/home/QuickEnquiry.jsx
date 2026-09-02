import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useModal } from '../../context/ModalContext';
import { Send, Sparkles, CheckCircle2, User, Phone, Building2, Clock, ShieldCheck, Check } from 'lucide-react';

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
      <div className="quick-enquiry-glow-bg" />
      <div className="container">
        <div className="quick-enquiry-grid">
          {/* Left Column: Key Highlights & Guarantee */}
          <div className="quick-enquiry-info">
            <div className="quick-enquiry-eyebrow-row">
              <Sparkles size={14} className="quick-enquiry-gold-sparkle" />
              <span className="quick-enquiry-eyebrow">DIRECT BUILDER ADVISORY</span>
            </div>

            <h2 className="quick-enquiry-heading">
              Find Your Ideal Home in Varanasi & Lucknow
            </h2>

            <p className="quick-enquiry-subtext">
              Direct builder allotment with verified UP-RERA documentation, transparent price sheets, customized EMI schedules, and zero brokerage.
            </p>

            <div className="quick-enquiry-features">
              <div className="quick-enquiry-feature-item">
                <div className="quick-enquiry-feature-icon">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <strong>Complimentary Chauffeur Cab</strong>
                  <p>Pick & drop facility for personalized Varanasi site visits</p>
                </div>
              </div>

              <div className="quick-enquiry-feature-item">
                <div className="quick-enquiry-feature-icon">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <strong>100% UP-RERA Registered</strong>
                  <p>VDA approved & title-clear freehold land parcels</p>
                </div>
              </div>

              <div className="quick-enquiry-feature-item">
                <div className="quick-enquiry-feature-icon">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <strong>Pre-Approved Bank Home Loans</strong>
                  <p>Instant approvals by SBI, HDFC, ICICI, BOB & PNB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Priority Form Card */}
          <div className="quick-enquiry-card">
            <div className="quick-enquiry-card-header">
              <span className="quick-enquiry-pill-badge">
                <Clock size={12} />
                <span>Response in &lt; 5 mins</span>
              </span>
              <h3 className="quick-enquiry-card-title">
                Request Priority Callback
              </h3>
              <p className="quick-enquiry-card-subtitle">
                Fill details below to get immediate allotment assistance & brochures.
              </p>
            </div>

            {submitted ? (
              <div className="quick-enquiry-success-box">
                <div className="quick-enquiry-success-icon">
                  <CheckCircle2 size={44} color="#10B981" />
                </div>
                <h4>Request Received!</h4>
                <p>
                  Our senior property advisor is reviewing your request and will call you at <strong>{formData.phone}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quick-enquiry-form">
                {/* Full Name Field */}
                <div className="quick-form-group">
                  <label className="quick-form-label">
                    Full Name <span className="req-star">*</span>
                  </label>
                  <div className="quick-input-wrap">
                    <User size={16} className="quick-field-icon" />
                    <input 
                      type="text" 
                      className="quick-form-input" 
                      required 
                      placeholder="e.g. Anay Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                </div>

                {/* 2-Column Row for Phone & Project */}
                <div className="quick-enquiry-form-row">
                  <div className="quick-form-group">
                    <label className="quick-form-label">
                      Phone Number <span className="req-star">*</span>
                    </label>
                    <div className="quick-input-wrap">
                      <Phone size={16} className="quick-field-icon" />
                      <input 
                        type="tel" 
                        className="quick-form-input" 
                        required 
                        placeholder="+91 98189 28893"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="quick-form-group">
                    <label className="quick-form-label">
                      Interested Project
                    </label>
                    <div className="quick-input-wrap">
                      <Building2 size={16} className="quick-field-icon" />
                      <select 
                        className="quick-form-select"
                        value={formData.projectId}
                        onChange={(e) => setFormData({ ...formData, projectId: e.target.value })}
                      >
                        <option value="">All Projects</option>
                        {projects.map(p => (
                          <option key={p.id} value={p.id}>{p.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Action Button */}
                <button type="submit" className="quick-enquiry-submit-btn">
                  <Send size={15} />
                  <span>Request Instant Callback</span>
                </button>

                <div className="quick-form-privacy">
                  <ShieldCheck size={13} />
                  <span>Your information is strictly protected &amp; never shared.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
