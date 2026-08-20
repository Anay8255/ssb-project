import React, { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import { useStore } from '../../context/StoreContext';
import { X, Car, Calendar, Clock, MapPin, Check } from 'lucide-react';

export const ModalSiteVisit = () => {
  const { siteVisitOpen, siteVisitProject, closeSiteVisitModal, showToast } = useModal();
  const { addLead, projects } = useStore();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectId: '',
    scheduledDate: '',
    timeSlot: '11:00 AM - 12:30 PM',
    cabRequired: true,
    pickupAddress: '',
    visitors: '2'
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (siteVisitProject) {
      const match = projects.find(p => p.title === siteVisitProject || p.slug === siteVisitProject || p.id === siteVisitProject);
      if (match) {
        setFormData(prev => ({ ...prev, projectId: match.id }));
      }
    }
  }, [siteVisitProject, projects]);

  if (!siteVisitOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      showToast('Please provide your name and phone number.', 'error');
      return;
    }

    setSubmitting(true);
    const selectedProj = projects.find(p => p.id === formData.projectId) || projects[0];

    addLead({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      projectId: selectedProj.id,
      projectName: selectedProj.title,
      scheduledDate: formData.scheduledDate || new Date().toISOString().split('T')[0],
      timeSlot: formData.timeSlot,
      cabRequired: formData.cabRequired,
      pickupAddress: formData.cabRequired ? (formData.pickupAddress || 'Varanasi City Pickup') : 'Self Travel',
      visitors: formData.visitors,
      source: 'SITE_VISIT_MODAL',
      message: `VIP Site Visit booked for ${selectedProj.title} on ${formData.scheduledDate || 'upcoming date'}. ${formData.cabRequired ? 'Chauffeur Cab requested at ' + formData.pickupAddress : 'Self travel'}.`
    });

    setTimeout(() => {
      setSubmitting(false);
      showToast(`Site Visit Confirmed! Confirmation SMS & Driver dispatch details sent to ${formData.phone}`, 'success');
      closeSiteVisitModal();
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        projectId: '',
        scheduledDate: '',
        timeSlot: '11:00 AM - 12:30 PM',
        cabRequired: true,
        pickupAddress: '',
        visitors: '2'
      });
    }, 400);
  };

  return (
    <div className="modal-overlay" onClick={closeSiteVisitModal}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <Car size={16} style={{ color: 'var(--brand)' }} />
              <span className="eyebrow" style={{ margin: 0 }}>VIP SITE TOUR</span>
            </div>
            <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Book a Complimentary Site Visit</h3>
          </div>
          <button className="modal-close-btn" onClick={closeSiteVisitModal} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginBottom: '1.5rem' }}>
            Experience our sample flats, construction quality, and project connectivity in person. Complimentary AC chauffeur pickup provided across Varanasi.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input 
                type="text" 
                className="form-input" 
                required 
                placeholder="e.g. Alok Srivastava"
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
                <label className="form-label">Select Project *</label>
                <select 
                  className="form-select"
                  value={formData.projectId}
                  onChange={(e) => setFormData({ ...formData, projectId: e.target.value })}
                  required
                >
                  <option value="">Select Project</option>
                  {projects.map(p => (
                    <option key={p.id} value={p.id}>{p.title} ({p.city.split(',')[0]})</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Preferred Date</label>
                <input 
                  type="date" 
                  className="form-input" 
                  value={formData.scheduledDate}
                  onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Time Slot</label>
                <select 
                  className="form-select"
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

            <div className="form-group" style={{ background: 'var(--sand-muted)', padding: '1rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontWeight: 600, color: 'var(--ink)' }}>
                <input 
                  type="checkbox" 
                  checked={formData.cabRequired}
                  onChange={(e) => setFormData({ ...formData, cabRequired: e.target.checked })}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--brand)' }}
                />
                <span>🚗 Request Complimentary AC Chauffeur Cab Pickup</span>
              </label>

              {formData.cabRequired && (
                <div style={{ marginTop: '0.8rem' }}>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Pickup Address / Landmark in Varanasi</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Hotel Taj Ganges / Cantt Railway Station"
                    value={formData.pickupAddress}
                    onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                  />
                </div>
              )}
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '0.5rem' }}
              disabled={submitting}
            >
              <Check size={16} /> {submitting ? 'Confirming Schedule...' : 'Confirm Site Visit Booking'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
