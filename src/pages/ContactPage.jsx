import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { useModal } from '../context/ModalContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Car, 
  Check, 
  Building2, 
  Calendar, 
  User, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink,
  MessageSquare,
  Users
} from 'lucide-react';

export const ContactPage = () => {
  const { company, projects, addLead } = useStore();
  const { showToast } = useModal();

  const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectId: projects[0]?.id || '',
    scheduledDate: getTomorrowDate(),
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
      source: 'CONTACT_PAGE_FORM',
      message: formData.message.trim() || `VIP Site Visit booked for ${selectedProj.title} on ${formData.scheduledDate || 'upcoming date'}. ${formData.cabRequired ? 'Chauffeur Cab requested at ' + (formData.pickupAddress || 'Varanasi City') : 'Self travel'}.`
    });

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      showToast(`Thank you ${formData.fullName}! Your site visit request has been confirmed.`, 'success');
    }, 450);
  };

  return (
    <div className="fade-in">
      {/* Hero Header with Exact Background Image from ssbinfraproject.com/contact */}
      <section className="contact-hero">
        <img 
          src="/hero-pratham.jpg" 
          alt="Contact SSB Group" 
          className="contact-hero-bg-img" 
        />
        <div className="contact-hero-scrim"></div>
        <div className="contact-hero-grain"></div>
        <div className="container contact-hero-container">
          <div className="contact-hero-content">
            <span className="contact-hero-eyebrow">CONTACT</span>
            <h1 className="contact-hero-title">
              Talk to our team
            </h1>
            <p className="contact-hero-desc">
              Our Varanasi team is available seven days a week.
            </p>
            <div className="contact-hero-badges">
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">Varanasi HQ</span>
                <span className="about-hero-stat-lbl">Mall Road</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">7 Days</span>
                <span className="about-hero-stat-lbl">Team Support</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">15 Min</span>
                <span className="about-hero-stat-lbl">Response Time</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">VIP</span>
                <span className="about-hero-stat-lbl">Chauffeur Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="contact-section-wrap">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Column: Registered HQ & Contact Cards */}
            <div className="contact-hq-section">
              <div className="contact-hq-header">
                <span className="eyebrow text-brand">OFFICIAL PRESENCE</span>
                <h2 className="contact-hq-heading">Registered Headquarters</h2>
                <p className="contact-hq-subtext">
                  Direct contact channels for project enquiries, legal documentation, investor relations, and site appointments.
                </p>
              </div>

              {/* Card 1: Corporate Office */}
              <div className="contact-info-card">
                <div className="contact-card-icon-box brand-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-card-body">
                  <div className="contact-card-top">
                    <h3 className="contact-card-title">Corporate Headquarters</h3>
                    <span className="contact-card-badge">REGISTERED OFFICE</span>
                  </div>
                  <p className="contact-card-desc">
                    {company.address || '20/51-5 and 20/52-4, Sri Das Foundation Building, Cantonment, Mall Road, Varanasi, Uttar Pradesh 221002'}
                  </p>
                  <div className="contact-card-actions-row">
                    <a 
                      href="https://maps.google.com/?q=Sri+Das+Foundation+Building+Cantonment+Mall+Road+Varanasi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-action-btn secondary"
                    >
                      <span>Open on Google Maps</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Phone Helplines */}
              <div className="contact-info-card">
                <div className="contact-card-icon-box emerald-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-card-body">
                  <div className="contact-card-top">
                    <h3 className="contact-card-title">Executive Helplines</h3>
                    <span className="contact-card-badge" style={{ background: '#ECFDF5', color: '#059669' }}>DIRECT CONNECT</span>
                  </div>
                  <p className="contact-card-desc">
                    <strong style={{ color: '#0F172A', fontSize: '1.05rem', display: 'block', marginBottom: '0.2rem' }}>
                      +91 98189 28893
                    </strong>
                    <span>Office: 07080201752 · Board: 0542-2500657</span>
                    <br />
                    <span style={{ fontSize: '0.8rem', color: '#64748B' }}>Mon – Sat: 9:30 AM – 7:30 PM (IST)</span>
                  </p>
                  <div className="contact-card-actions-row">
                    <a href="tel:+919818928893" className="contact-action-btn primary">
                      <Phone size={13} />
                      <span>Call Executive Helpline</span>
                    </a>
                    <a 
                      href="https://wa.me/919818928893?text=Hello%20SSB%20Group,%20I%20would%20like%20to%20enquire%20about%20your%20developments." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-action-btn secondary"
                    >
                      <MessageSquare size={13} className="text-emerald" />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3: Official Email */}
              <div className="contact-info-card">
                <div className="contact-card-icon-box gold-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-card-body">
                  <div className="contact-card-top">
                    <h3 className="contact-card-title">Official Email Desk</h3>
                    <span className="contact-card-badge" style={{ background: '#FFFBEB', color: '#D97706' }}>FAST RESPONSE</span>
                  </div>
                  <p className="contact-card-desc">
                    <a href={`mailto:${company.email || 'info@ssbinfraproject.com'}`} style={{ color: 'var(--brand)', fontWeight: 700, fontSize: '0.98rem' }}>
                      {company.email || 'info@ssbinfraproject.com'}
                    </a>
                    <br />
                    <span>For project brochures, legal queries, NRI investments &amp; official correspondence.</span>
                  </p>
                  <div className="contact-card-actions-row">
                    <a href={`mailto:${company.email || 'info@ssbinfraproject.com'}`} className="contact-action-btn secondary">
                      <Mail size={13} />
                      <span>Compose Email</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Office Map Card */}
              <div className="contact-map-card">
                <div className="contact-map-header">
                  <span className="contact-map-status">
                    <span className="contact-live-dot" />
                    <span>Corporate Office Open Today (Visitors Welcome)</span>
                  </span>
                  <span style={{ fontSize: '0.76rem', color: '#64748B', fontWeight: 600 }}>
                    Cantonment, Varanasi
                  </span>
                </div>
                <div className="contact-map-frame-wrap">
                  <iframe 
                    title="SSB Group Corporate Headquarters"
                    src="https://maps.google.com/maps?q=Sri+Das+Foundation+Building,+Cantonment,+Mall+Road,+Varanasi,+Uttar+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Ultra-Luxury VIP Site Visit Form */}
            <div className="contact-form-luxury-card">
              <span className="contact-form-badge">
                <Sparkles size={12} />
                <span>COMPLIMENTARY VIP TOUR</span>
              </span>
              <h2 className="contact-form-title">
                Book a Chauffeur Site Visit
              </h2>
              <p className="contact-form-desc">
                Complimentary door-to-door AC cab pickup &amp; drop across Varanasi for sample flat walkthroughs and construction progress tours.
              </p>

              {submitted ? (
                <div className="contact-success-box">
                  <div className="contact-success-icon-wrap">
                    <Check size={32} />
                  </div>
                  <h3 className="contact-success-title">Site Visit Confirmed!</h3>
                  <p className="contact-success-desc">
                    Thank you <strong>{formData.fullName}</strong>. Our logistics desk has reserved your inspection on <strong>{formData.scheduledDate}</strong> ({formData.timeSlot}).
                    <br /><br />
                    We will send driver assignment, vehicle registration number, and concierge contact via SMS/WhatsApp to <strong>{formData.phone}</strong>.
                  </p>
                  <button 
                    type="button" 
                    className="btn btn-outline" 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        projectId: projects[0]?.id || '',
                        scheduledDate: getTomorrowDate(),
                        timeSlot: '11:00 AM - 12:30 PM',
                        cabRequired: true,
                        pickupAddress: '',
                        visitors: '2',
                        message: ''
                      });
                    }}
                  >
                    Schedule Another Visit
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  
                  {/* Full Name */}
                  <div className="contact-input-field">
                    <label className="contact-input-label">
                      <span>Full Name *</span>
                      <span style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 500 }}>Required</span>
                    </label>
                    <div className="contact-input-wrapper">
                      <span className="contact-input-icon">
                        <User size={16} />
                      </span>
                      <input 
                        type="text" 
                        className="contact-form-control" 
                        required 
                        placeholder="e.g. Alok Srivastava"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Phone & Email Row */}
                  <div className="contact-form-row">
                    <div className="contact-input-field">
                      <label className="contact-input-label">
                        <span>Phone Number *</span>
                        <span style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 500 }}>SMS Updates</span>
                      </label>
                      <div className="contact-input-wrapper">
                        <span className="contact-input-icon">
                          <Phone size={16} />
                        </span>
                        <input 
                          type="tel" 
                          className="contact-form-control" 
                          required 
                          placeholder="+91 98189 28893"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="contact-input-field">
                      <label className="contact-input-label">
                        <span>Email Address</span>
                        <span style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 500 }}>Optional</span>
                      </label>
                      <div className="contact-input-wrapper">
                        <span className="contact-input-icon">
                          <Mail size={16} />
                        </span>
                        <input 
                          type="email" 
                          className="contact-form-control" 
                          placeholder="alok@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project of Interest */}
                  <div className="contact-input-field">
                    <label className="contact-input-label">
                      <span>Development of Interest</span>
                      <span style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 500 }}>Select Site</span>
                    </label>
                    <div className="contact-input-wrapper">
                      <span className="contact-input-icon">
                        <Building2 size={16} />
                      </span>
                      <select 
                        className="contact-form-control"
                        value={formData.projectId}
                        onChange={(e) => setFormData({ ...formData, projectId: e.target.value })}
                      >
                        {projects.map(p => (
                          <option key={p.id} value={p.id}>
                            {p.title} — {p.category} ({p.status || 'Active'})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date & Time Slot */}
                  <div className="contact-form-row">
                    <div className="contact-input-field">
                      <label className="contact-input-label">
                        <span>Preferred Date</span>
                        <span style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 500 }}>Inspection</span>
                      </label>
                      <div className="contact-input-wrapper">
                        <span className="contact-input-icon">
                          <Calendar size={16} />
                        </span>
                        <input 
                          type="date" 
                          min={todayStr}
                          className="contact-form-control" 
                          value={formData.scheduledDate}
                          onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="contact-input-field">
                      <label className="contact-input-label">
                        <span>Preferred Time Slot</span>
                        <span style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 500 }}>Flexible</span>
                      </label>
                      <div className="contact-input-wrapper">
                        <span className="contact-input-icon">
                          <Clock size={16} />
                        </span>
                        <select 
                          className="contact-form-control"
                          value={formData.timeSlot}
                          onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        >
                          <option value="10:00 AM - 11:30 AM">Morning: 10:00 AM – 11:30 AM</option>
                          <option value="11:00 AM - 12:30 PM">Midday: 11:00 AM – 12:30 PM</option>
                          <option value="02:00 PM - 03:30 PM">Afternoon: 02:00 PM – 03:30 PM</option>
                          <option value="04:00 PM - 05:30 PM">Evening: 04:00 PM – 05:30 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* VIP Chauffeur Switch Card */}
                  <div className="contact-vip-chauffeur-box">
                    <div 
                      className="contact-vip-toggle-header"
                      onClick={() => setFormData(prev => ({ ...prev, cabRequired: !prev.cabRequired }))}
                    >
                      <div className="contact-vip-title-wrap">
                        <div className="contact-vip-icon-pill">
                          <Car size={18} />
                        </div>
                        <div>
                          <h4 className="contact-vip-title">
                            Complimentary AC Chauffeur Cab
                          </h4>
                          <p className="contact-vip-subtitle">
                            Free pickup &amp; drop from home, hotel, or Varanasi airport
                          </p>
                        </div>
                      </div>

                      <label className="contact-toggle-switch" onClick={(e) => e.stopPropagation()}>
                        <input 
                          type="checkbox" 
                          checked={formData.cabRequired}
                          onChange={(e) => setFormData({ ...formData, cabRequired: e.target.checked })}
                        />
                        <span className="contact-toggle-slider" />
                      </label>
                    </div>

                    {formData.cabRequired && (
                      <div className="contact-vip-address-field">
                        <label className="contact-input-label" style={{ color: '#065F46', marginBottom: '0.35rem' }}>
                          <span>Pickup Address / Location in Varanasi *</span>
                        </label>
                        <div className="contact-input-wrapper">
                          <span className="contact-input-icon" style={{ color: '#10B981' }}>
                            <MapPin size={16} />
                          </span>
                          <input 
                            type="text" 
                            className="contact-form-control" 
                            placeholder="Enter residence address, hotel name, or airport arrival terminal"
                            value={formData.pickupAddress}
                            onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                            style={{ background: '#FFFFFF', borderColor: '#A7F3D0' }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Number of Visitors Selection */}
                  <div className="contact-input-field">
                    <label className="contact-input-label">
                      <span>Party Size / Accompanying Guests</span>
                      <span style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 500 }}>Seating</span>
                    </label>
                    <div className="contact-visitor-pills-row">
                      {[
                        { val: '1', label: '1–2 Guests', sub: 'Couples' },
                        { val: '3', label: '3–4 Guests', sub: 'Family' },
                        { val: '5', label: '5+ Guests', sub: 'Group' }
                      ].map(v => (
                        <button
                          key={v.val}
                          type="button"
                          className={`contact-visitor-btn ${formData.visitors === v.val ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, visitors: v.val })}
                        >
                          <div>{v.label}</div>
                          <small style={{ fontSize: '0.68rem', opacity: 0.8 }}>({v.sub})</small>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="contact-submit-btn" 
                    disabled={submitting}
                  >
                    <Send size={16} />
                    <span>{submitting ? 'Confirming Reservation...' : 'Confirm VIP Site Visit Request'}</span>
                  </button>

                  {/* Trust Signals */}
                  <div className="contact-trust-strip">
                    <div className="contact-trust-item">
                      <ShieldCheck size={14} className="text-gold" />
                      <span>UP-RERA Verified</span>
                    </div>
                    <div className="contact-trust-item">
                      <Car size={14} className="text-emerald" />
                      <span>100% Free Transportation</span>
                    </div>
                    <div className="contact-trust-item">
                      <Sparkles size={14} className="text-brand" />
                      <span>Zero Obligation Tour</span>
                    </div>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
