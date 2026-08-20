import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { useModal } from '../context/ModalContext';
import { MapPin, Phone, Mail, Clock, Send, Car, Check } from 'lucide-react';

export const ContactPage = () => {
  const { company, projects, addLead } = useStore();
  const { showToast } = useModal();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectId: '',
    scheduledDate: '',
    timeSlot: '11:00 AM - 12:30 PM',
    cabRequired: true,
    pickupAddress: '',
    visitors: '2',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      scheduledDate: formData.scheduledDate,
      timeSlot: formData.timeSlot,
      cabRequired: formData.cabRequired,
      pickupAddress: formData.cabRequired ? (formData.pickupAddress || 'Varanasi City Pickup') : 'Self Travel',
      visitors: formData.visitors,
      source: 'CONTACT_PAGE_FORM',
      message: formData.message || `Contact enquiry with ${formData.cabRequired ? 'Chauffeur Cab requested' : 'Self travel'}.`
    });

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      showToast(`Thank you ${formData.fullName}! Your enquiry and site visit request have been received.`, 'success');
    }, 400);
  };

  return (
    <div className="fade-in" style={{ paddingBottom: '5rem' }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #18181B 0%, #27272A 100%)', color: '#FFF', padding: '4.5rem 0 3.5rem', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>CONNECT WITH US</span>
          <h1 style={{ fontSize: '3rem', color: '#FFF', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            Contact & Headquarters
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', color: '#A1A1AA', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Visit our registered corporate office in Cantonment Varanasi or schedule an on-site property tour with complimentary chauffeur pickup.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
          {/* Office Contact Info */}
          <div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', marginBottom: '1.5rem' }}>Registered Headquarters</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', background: '#FFF', padding: '1.5rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '0.25rem' }}>Corporate Office</strong>
                  <p style={{ color: 'var(--ink-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                    {company.address}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', background: '#FFF', padding: '1.5rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '0.25rem' }}>Phone Helplines</strong>
                  <p style={{ color: 'var(--ink-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                    <a href="tel:+919818928893" style={{ color: 'var(--brand)', fontWeight: 700 }}>+91 98189 28893</a><br />
                    <span>Office: 07080201752 · 0542-2500657</span>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', background: '#FFF', padding: '1.5rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--brand-subtle)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '0.25rem' }}>Official Email</strong>
                  <p style={{ color: 'var(--ink-muted)', fontSize: '0.9rem', margin: 0 }}>
                    <a href={`mailto:${company.email}`} style={{ color: 'var(--brand)', fontWeight: 600 }}>{company.email}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Site Visit Form */}
          <div style={{ background: '#FFF', padding: '2.5rem', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
            <span className="eyebrow">ONLINE BOOKING</span>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>Book a Chauffeur Site Visit</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', marginBottom: '1.5rem' }}>
              Complimentary pickup and drop across Varanasi for sample flat & construction site inspections.
            </p>

            {submitted ? (
              <div style={{ padding: '2.5rem 1.5rem', textAlign: 'center', background: 'var(--sand-muted)', borderRadius: 'var(--r-md)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎉</div>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--brand)', marginBottom: '0.5rem' }}>Booking Confirmed!</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginBottom: '1.5rem' }}>
                  Our logistics desk has assigned your booking. We will send the driver contact and vehicle details via SMS to <strong>{formData.phone}</strong>.
                </p>
                <button className="btn btn-outline btn-sm" onClick={() => setSubmitted(false)}>
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
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
                    <label className="form-label">Project of Interest</label>
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
                    <span>🚗 Need AC Chauffeur Cab Pickup in Varanasi</span>
                  </label>

                  {formData.cabRequired && (
                    <div style={{ marginTop: '0.8rem' }}>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="Enter pickup address / hotel in Varanasi"
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
                  <Send size={16} /> {submitting ? 'Submitting...' : 'Confirm Site Visit Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
