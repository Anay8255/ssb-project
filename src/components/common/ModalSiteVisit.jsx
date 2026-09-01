import React, { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import { useStore } from '../../context/StoreContext';
import { X, Car, Calendar, Clock, MapPin, Check, User, Phone, Building2, Sparkles, ShieldCheck, Users } from 'lucide-react';

export const ModalSiteVisit = () => {
  const { siteVisitOpen, siteVisitProject, closeSiteVisitModal, showToast } = useModal();
  const { addLead, projects } = useStore();

  const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectId: '',
    scheduledDate: getTomorrowDate(),
    timeSlot: '11:00 AM - 12:30 PM',
    cabRequired: true,
    pickupAddress: '',
    visitors: '2'
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (siteVisitProject && projects.length > 0) {
      const match = projects.find(
        p => p.title?.toLowerCase() === siteVisitProject?.toLowerCase() || 
             p.slug?.toLowerCase() === siteVisitProject?.toLowerCase() || 
             p.id === siteVisitProject
      );
      if (match) {
        setFormData(prev => ({ ...prev, projectId: match.id }));
      } else if (!formData.projectId && projects[0]) {
        setFormData(prev => ({ ...prev, projectId: projects[0].id }));
      }
    } else if (projects.length > 0 && !formData.projectId) {
      setFormData(prev => ({ ...prev, projectId: projects[0].id }));
    }
  }, [siteVisitProject, projects]);

  if (!siteVisitOpen) return null;

  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      showToast('Please provide your full name and phone number.', 'error');
      return;
    }

    setSubmitting(true);
    const selectedProj = projects.find(p => p.id === formData.projectId) || projects[0] || { id: 'ssb-project', title: 'SSB Flagship Development' };

    addLead({
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      projectId: selectedProj.id,
      projectName: selectedProj.title,
      scheduledDate: formData.scheduledDate || todayStr,
      timeSlot: formData.timeSlot,
      cabRequired: formData.cabRequired,
      pickupAddress: formData.cabRequired ? (formData.pickupAddress.trim() || 'Varanasi City Pickup') : 'Self Travel',
      visitors: formData.visitors,
      source: 'SITE_VISIT_MODAL',
      message: `VIP Site Visit booked for ${selectedProj.title} on ${formData.scheduledDate || 'upcoming date'}. ${formData.cabRequired ? 'Chauffeur Cab requested at ' + (formData.pickupAddress || 'Varanasi City') : 'Self travel'}.`
    });

    setTimeout(() => {
      setSubmitting(false);
      showToast(`Site Visit Confirmed! Details sent to ${formData.phone}`, 'success');
      closeSiteVisitModal();
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        projectId: projects[0]?.id || '',
        scheduledDate: getTomorrowDate(),
        timeSlot: '11:00 AM - 12:30 PM',
        cabRequired: true,
        pickupAddress: '',
        visitors: '2'
      });
    }, 450);
  };

  return (
    <div className="modal-overlay" onClick={closeSiteVisitModal}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Compact Luxury Header */}
        <div className="modal-header-luxury">
          <div className="modal-header-top">
            <div>
              <div className="modal-badge-gold">
                <Sparkles size={11} /> VIP SITE VISIT
              </div>
              <h3 className="modal-header-title">Book a Complimentary Site Tour</h3>
              <p className="modal-header-subtitle">
                Sample flat walkthrough with complimentary AC chauffeur pickup across Varanasi.
              </p>
            </div>
            <button 
              className="modal-close-btn-luxury" 
              onClick={closeSiteVisitModal} 
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
                    placeholder="e.g. Alok Srivastava"
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

            {/* Row 2: Select Project & Preferred Date */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.65rem' }}>
              <div className="form-group-compact">
                <label className="form-label-luxury">
                  <span>Select Project <span className="req-star">*</span></span>
                </label>
                <div className="input-icon-wrapper">
                  <div className="input-icon">
                    <Building2 size={15} />
                  </div>
                  <select 
                    className="form-select-luxury"
                    value={formData.projectId}
                    onChange={(e) => setFormData({ ...formData, projectId: e.target.value })}
                    required
                  >
                    <option value="">Choose Project</option>
                    {projects.map(p => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group-compact">
                <label className="form-label-luxury">
                  <span>Visit Date</span>
                </label>
                <div className="input-icon-wrapper">
                  <div className="input-icon">
                    <Calendar size={15} />
                  </div>
                  <input 
                    type="date" 
                    min={todayStr}
                    className="form-input-luxury" 
                    value={formData.scheduledDate}
                    onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Time Slot & Visitors */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.65rem' }}>
              <div className="form-group-compact">
                <label className="form-label-luxury">
                  <span>Time Slot</span>
                </label>
                <div className="input-icon-wrapper">
                  <div className="input-icon">
                    <Clock size={15} />
                  </div>
                  <select 
                    className="form-select-luxury"
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  >
                    <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM</option>
                    <option value="11:00 AM - 12:30 PM">11:00 AM - 12:30 PM</option>
                    <option value="02:00 PM - 03:30 PM">02:00 PM - 03:30 PM</option>
                    <option value="04:00 PM - 05:30 PM">04:00 PM - 05:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="form-group-compact">
                <label className="form-label-luxury">
                  <span>Visitors</span>
                </label>
                <div className="input-icon-wrapper">
                  <div className="input-icon">
                    <Users size={15} />
                  </div>
                  <select 
                    className="form-select-luxury"
                    value={formData.visitors}
                    onChange={(e) => setFormData({ ...formData, visitors: e.target.value })}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3-4">3-4 Persons</option>
                    <option value="5+">Family (5+)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Row 4: Executive Chauffeur Cab Option Strip */}
            <div className={`vip-chauffeur-card ${formData.cabRequired ? 'active' : ''}`}>
              <div 
                className="vip-toggle-header"
                onClick={() => setFormData({ ...formData, cabRequired: !formData.cabRequired })}
              >
                <div className="vip-toggle-left">
                  <div className="vip-badge-icon">
                    <Car size={15} />
                  </div>
                  <div>
                    <div className="vip-title-text">Free AC Chauffeur Cab Pickup</div>
                    <div className="vip-sub-text">Doorstep pickup & return anywhere in Varanasi</div>
                  </div>
                </div>

                <label className="custom-switch" onClick={(e) => e.stopPropagation()}>
                  <input 
                    type="checkbox" 
                    checked={formData.cabRequired}
                    onChange={(e) => setFormData({ ...formData, cabRequired: e.target.checked })}
                  />
                  <span className="custom-slider"></span>
                </label>
              </div>

              {formData.cabRequired && (
                <div style={{ marginTop: '0.45rem', paddingTop: '0.45rem', borderTop: '1px solid rgba(197, 160, 89, 0.25)' }}>
                  <div className="input-icon-wrapper">
                    <div className="input-icon">
                      <MapPin size={14} />
                    </div>
                    <input 
                      type="text" 
                      className="form-input-luxury" 
                      placeholder="Pickup address / landmark (e.g. Hotel Taj, Cantt)"
                      value={formData.pickupAddress}
                      onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                      style={{ height: '32px', fontSize: '0.79rem', padding: '0.35rem 0.65rem 0.35rem 1.95rem' }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Submit Action Button */}
            <button 
              type="submit" 
              className="btn-luxury-submit" 
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <Sparkles size={15} className="animate-spin" /> Securing Your Site Visit...
                </>
              ) : (
                <>
                  <Check size={16} /> Confirm Site Visit Booking
                </>
              )}
            </button>

            {/* Trust & Guarantee Indicators */}
            <div className="modal-trust-row">
              <div className="modal-trust-item">
                <ShieldCheck size={12} style={{ color: 'var(--success)' }} />
                <span>UP-RERA Verified</span>
              </div>
              <div className="modal-trust-item">
                <Sparkles size={12} style={{ color: 'var(--gold)' }} />
                <span>Free Concierge</span>
              </div>
              <div className="modal-trust-item">
                <Check size={12} style={{ color: 'var(--brand)' }} />
                <span>Instant Confirmation</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
