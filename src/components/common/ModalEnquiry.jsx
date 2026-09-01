import React, { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import { useStore } from '../../context/StoreContext';
import { X, Send, Sparkles, User, Phone, Mail, Building2, IndianRupee, ShieldCheck, Check, MessageSquare } from 'lucide-react';

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

  useEffect(() => {
    if (enquiryData?.projectTitle && projects.length > 0) {
      const match = projects.find(
        p => p.title?.toLowerCase() === enquiryData.projectTitle?.toLowerCase() ||
             p.slug?.toLowerCase() === enquiryData.projectTitle?.toLowerCase() ||
             p.id === enquiryData.projectTitle
      );
      if (match) {
        setFormData(prev => ({ ...prev, projectId: match.id }));
      } else if (!formData.projectId && projects[0]) {
        setFormData(prev => ({ ...prev, projectId: projects[0].id }));
      }
    } else if (projects.length > 0 && !formData.projectId) {
      setFormData(prev => ({ ...prev, projectId: projects[0].id }));
    }
  }, [enquiryData, projects]);

  if (!enquiryOpen) return null;

  const isBrochure = enquiryData?.intent?.toLowerCase().includes('brochure') || enquiryData?.projectTitle;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      showToast('Please provide your name and phone number.', 'error');
      return;
    }

    setSubmitting(true);
    const selectedProj = projects.find(p => p.id === formData.projectId || p.title === enquiryData?.projectTitle) || projects[0] || { id: 'ssb-default', title: 'Sai Gaon' };

    addLead({
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      projectId: selectedProj?.id || formData.projectId,
      projectName: selectedProj?.title || enquiryData?.projectTitle || 'SSB Project',
      budgetRange: formData.budgetRange,
      message: formData.message.trim() || `Requested via ${enquiryData?.intent || 'Quick Enquiry'}`,
      source: isBrochure ? 'BROCHURE_DOWNLOAD' : 'CALLBACK_60S'
    });

    setTimeout(() => {
      setSubmitting(false);
      showToast(`Brochure & Project details dispatched to ${formData.phone} via WhatsApp!`, 'success');
      closeEnquiryModal();
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        projectId: projects[0]?.id || '',
        budgetRange: '₹45 - 65 Lakhs',
        message: ''
      });
    }, 450);
  };

  return (
    <div className="modal-overlay" onClick={closeEnquiryModal}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Compact Luxury Header */}
        <div className="modal-header-luxury">
          <div className="modal-header-top">
            <div>
              <div className="modal-badge-gold">
                <Sparkles size={11} /> SSB PRIVILEGE DESK
              </div>
              <h3 className="modal-header-title">
                {enquiryData?.projectTitle 
                  ? `Download ${enquiryData.projectTitle} Brochure` 
                  : 'Request Instant Priority Callback'}
              </h3>
              <p className="modal-header-subtitle">
                Receive verified pricing, floor plans & RERA documentation via WhatsApp.
              </p>
            </div>
            <button 
              className="modal-close-btn-luxury" 
              onClick={closeEnquiryModal} 
              aria-label="Close modal"
              type="button"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Modal Form Body - Fits One Frame */}
        <div className="modal-body-luxury">
          <form onSubmit={handleSubmit}>
            {/* Row 1: Full Name & Phone Number */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
              <div className="form-group-compact">
                <label className="form-label-luxury">
                  <span>Full Name <span className="req-star">*</span></span>
                </label>
                <div className="input-icon-wrapper">
                  <div className="input-icon">
                    <User size={15} />
                  </div>
                  <input 
                    type="text" 
                    className="form-input-luxury" 
                    required 
                    placeholder="e.g. Amit Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group-compact">
                <label className="form-label-luxury">
                  <span>Phone Number <span className="req-star">*</span></span>
                </label>
                <div className="input-icon-wrapper">
                  <div className="input-icon">
                    <Phone size={15} />
                  </div>
                  <input 
                    type="tel" 
                    className="form-input-luxury" 
                    required 
                    placeholder="+91 98189 28893"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Email Address & Project Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
              <div className="form-group-compact">
                <label className="form-label-luxury">
                  <span>Email Address</span>
                </label>
                <div className="input-icon-wrapper">
                  <div className="input-icon">
                    <Mail size={15} />
                  </div>
                  <input 
                    type="email" 
                    className="form-input-luxury" 
                    placeholder="amit@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group-compact">
                <label className="form-label-luxury">
                  <span>Interested Project</span>
                </label>
                <div className="input-icon-wrapper">
                  <div className="input-icon">
                    <Building2 size={15} />
                  </div>
                  <select 
                    className="form-select-luxury"
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
            </div>

            {/* Row 3: Budget Range & Query Note */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '0.65rem' }}>
              <div className="form-group-compact">
                <label className="form-label-luxury">
                  <span>Budget Range</span>
                </label>
                <div className="input-icon-wrapper">
                  <div className="input-icon">
                    <IndianRupee size={15} />
                  </div>
                  <select 
                    className="form-select-luxury"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  >
                    <option value="₹25 - 45 Lakhs">₹25 - 45 L</option>
                    <option value="₹45 - 65 Lakhs">₹45 - 65 L</option>
                    <option value="₹65 - 90 Lakhs">₹65 - 90 L</option>
                    <option value="₹90 Lakhs - ₹1.5 Cr">₹90 L - ₹1.5 Cr</option>
                    <option value="Above ₹1.5 Cr">&gt; ₹1.5 Cr</option>
                  </select>
                </div>
              </div>

              <div className="form-group-compact">
                <label className="form-label-luxury">
                  <span>Requirement / Note</span>
                </label>
                <div className="input-icon-wrapper">
                  <div className="input-icon">
                    <MessageSquare size={15} />
                  </div>
                  <input 
                    type="text" 
                    className="form-input-luxury" 
                    placeholder="e.g. 3 BHK higher floor"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Submit Action Button */}
            <button 
              type="submit" 
              className="btn-luxury-submit" 
              style={{ marginTop: '0.35rem' }}
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <Sparkles size={15} className="animate-spin" /> Dispatching Details...
                </>
              ) : (
                <>
                  <Send size={15} /> {isBrochure ? 'Get Instant WhatsApp Dossier' : 'Request Instant Priority Callback'}
                </>
              )}
            </button>

            {/* Trust Guarantee Indicators */}
            <div className="modal-trust-row">
              <div className="modal-trust-item">
                <ShieldCheck size={12} style={{ color: 'var(--success)' }} />
                <span>UP-RERA Verified</span>
              </div>
              <div className="modal-trust-item">
                <Check size={12} style={{ color: 'var(--brand)' }} />
                <span>60-Sec WhatsApp Dispatch</span>
              </div>
              <div className="modal-trust-item">
                <Sparkles size={12} style={{ color: 'var(--gold)' }} />
                <span>100% Privacy</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
