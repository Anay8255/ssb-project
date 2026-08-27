import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, FileText, AlertCircle, Lock, Cookie, Scale, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export const LegalPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('privacy');

  useEffect(() => {
    // Detect hash or query parameter for direct linking to sections
    if (location.hash) {
      const tab = location.hash.replace('#', '');
      if (['privacy', 'terms', 'disclaimer', 'rera', 'cookies'].includes(tab)) {
        setActiveTab(tab);
      }
    }
  }, [location]);

  return (
    <div className="fade-in" style={{ paddingBottom: '6rem' }}>
      {/* Hero Header */}
      <section className="subpage-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>LEGAL, PRIVACY & COMPLIANCE</span>
          <h1 className="subpage-hero-title">
            Legal & Privacy Policy
          </h1>
          <p className="subpage-hero-desc">
            Statutory disclosures, data protection principles, RERA compliance guidelines, and website terms for SSB Group (Shree Sai Baba Infra Projects Pvt. Ltd.).
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(240px, 300px) 1fr', gap: '2.5rem', alignItems: 'start' }}>
          
          {/* Sidebar Navigation */}
          <div style={{ position: 'sticky', top: '100px', background: '#FFF', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', padding: '1.25rem', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-muted)', padding: '0.5rem 0.75rem', marginBottom: '0.5rem', fontWeight: 700 }}>
              Policies & Disclosures
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <button 
                onClick={() => setActiveTab('privacy')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--r-md)',
                  border: 'none',
                  background: activeTab === 'privacy' ? 'var(--sand-muted)' : 'transparent',
                  color: activeTab === 'privacy' ? 'var(--brand)' : 'var(--ink)',
                  fontWeight: activeTab === 'privacy' ? 700 : 500,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
              >
                <Lock size={18} />
                <span>Privacy Policy</span>
              </button>

              <button 
                onClick={() => setActiveTab('terms')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--r-md)',
                  border: 'none',
                  background: activeTab === 'terms' ? 'var(--sand-muted)' : 'transparent',
                  color: activeTab === 'terms' ? 'var(--brand)' : 'var(--ink)',
                  fontWeight: activeTab === 'terms' ? 700 : 500,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
              >
                <FileText size={18} />
                <span>Terms & Conditions</span>
              </button>

              <button 
                onClick={() => setActiveTab('disclaimer')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--r-md)',
                  border: 'none',
                  background: activeTab === 'disclaimer' ? 'var(--sand-muted)' : 'transparent',
                  color: activeTab === 'disclaimer' ? 'var(--brand)' : 'var(--ink)',
                  fontWeight: activeTab === 'disclaimer' ? 700 : 500,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
              >
                <AlertCircle size={18} />
                <span>Disclaimer</span>
              </button>

              <button 
                onClick={() => setActiveTab('rera')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--r-md)',
                  border: 'none',
                  background: activeTab === 'rera' ? 'var(--sand-muted)' : 'transparent',
                  color: activeTab === 'rera' ? 'var(--brand)' : 'var(--ink)',
                  fontWeight: activeTab === 'rera' ? 700 : 500,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
              >
                <Scale size={18} />
                <span>RERA & Statutory</span>
              </button>

              <button 
                onClick={() => setActiveTab('cookies')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--r-md)',
                  border: 'none',
                  background: activeTab === 'cookies' ? 'var(--sand-muted)' : 'transparent',
                  color: activeTab === 'cookies' ? 'var(--brand)' : 'var(--ink)',
                  fontWeight: activeTab === 'cookies' ? 700 : 500,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
              >
                <Cookie size={18} />
                <span>Cookie Policy</span>
              </button>
            </nav>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
              <strong>Need assistance?</strong><br />
              Email: <a href="mailto:info@ssbinfraproject.com" style={{ color: 'var(--brand)', fontWeight: 600 }}>info@ssbinfraproject.com</a><br />
              Helpline: <a href="tel:+919818928893" style={{ color: 'var(--brand)', fontWeight: 600 }}>+91 98189 28893</a>
            </div>
          </div>

          {/* Right Column: Tab Content */}
          <div style={{ background: '#FFF', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', padding: '2.5rem 3rem', boxShadow: 'var(--shadow-sm)' }}>
            
            {/* 1. Privacy Policy */}
            {activeTab === 'privacy' && (
              <div>
                <span className="badge badge-brand" style={{ marginBottom: '0.75rem' }}>DATA PROTECTION & PRIVACY</span>
                <h2 style={{ fontSize: '2.2rem', color: 'var(--ink)', marginBottom: '1rem', fontFamily: 'var(--font-heading, "Cinzel", serif)' }}>
                  Privacy Policy
                </h2>
                <p style={{ color: 'var(--ink-muted)', fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: '1.7' }}>
                  <strong>Effective Date:</strong> January 2026 | <strong>Entity:</strong> Shree Sai Baba Infra Projects Pvt. Ltd. (SSB Group)
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--ink)', lineHeight: '1.75', fontSize: '0.95rem' }}>
                  <section>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 700 }}>1. Information We Collect</h3>
                    <p style={{ color: 'var(--ink-muted)', marginBottom: '0.75rem' }}>
                      We collect personal details that you voluntarily provide when interacting with our digital touchpoints, including:
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--ink-muted)' }}>
                      <li><strong>Contact Information:</strong> Full name, telephone/mobile number, email address, and city of residence.</li>
                      <li><strong>Property Preferences:</strong> Project interests (e.g. Sai Gaon, Shree Sai City, Pratham), budget ranges, unit configurations (2 BHK, 3 BHK, Commercial Villa, Retail Shops).</li>
                      <li><strong>Service Requests:</strong> Free site visit bookings, cab pickup requests, brochure downloads, and callback inquiries.</li>
                      <li><strong>Career Submissions:</strong> Resumes, employment history, and academic credentials submitted through our recruitment portal.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 700 }}>2. Purpose & Use of Collected Data</h3>
                    <p style={{ color: 'var(--ink-muted)' }}>
                      Your information is used strictly to:
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--ink-muted)' }}>
                      <li>Process and respond directly to your real estate inquiries and information requests.</li>
                      <li>Coordinate complimentary door-to-project site visit transport and executive property walkthroughs.</li>
                      <li>Share project construction milestone updates, RERA approvals, and payment schedule details.</li>
                      <li>Deliver customer service support and statutory documentation related to your unit bookings.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 700 }}>3. Information Sharing & Third-Party Protection</h3>
                    <p style={{ color: 'var(--ink-muted)' }}>
                      <strong>We do not sell, rent, or trade your personal information to third-party marketing firms or external brokers.</strong> Data is accessible solely by authorized personnel of SSB Group and verified statutory service partners (such as authorized financial institutions for loan facilitation) under strict non-disclosure obligations.
                    </p>
                  </section>

                  <section>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 700 }}>4. Data Security Standards</h3>
                    <p style={{ color: 'var(--ink-muted)' }}>
                      We implement industry-grade technical and administrative security controls, including 256-bit SSL encryption on all form submissions, firewalled server infrastructure, and role-based access management to prevent unauthorized access or disclosure.
                    </p>
                  </section>

                  <section>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 700 }}>5. Your Rights & Communication Preferences</h3>
                    <p style={{ color: 'var(--ink-muted)' }}>
                      You maintain full control over your personal data. You may request access to, correction of, or deletion of your information from our active databases at any time. To opt out of telephone updates, WhatsApp notices, or email communications, simply notify us at <a href="mailto:info@ssbinfraproject.com" style={{ color: 'var(--brand)', fontWeight: 600 }}>info@ssbinfraproject.com</a> or reply STOP to our SMS notifications.
                    </p>
                  </section>
                </div>
              </div>
            )}

            {/* 2. Terms & Conditions */}
            {activeTab === 'terms' && (
              <div>
                <span className="badge badge-brand" style={{ marginBottom: '0.75rem' }}>USER AGREEMENT</span>
                <h2 style={{ fontSize: '2.2rem', color: 'var(--ink)', marginBottom: '1rem', fontFamily: 'var(--font-heading, "Cinzel", serif)' }}>
                  Terms & Conditions
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--ink)', lineHeight: '1.75', fontSize: '0.95rem' }}>
                  <section>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 700 }}>1. Acceptance of Terms</h3>
                    <p style={{ color: 'var(--ink-muted)' }}>
                      By accessing and using this official website of Shree Sai Baba Infra Projects Pvt. Ltd. (SSB Group), you agree to comply with and be bound by the following terms, conditions, and applicable Indian laws and housing regulations.
                    </p>
                  </section>

                  <section>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 700 }}>2. Intellectual Property Rights</h3>
                    <p style={{ color: 'var(--ink-muted)' }}>
                      All content, branding, trademarks, architectural layouts, 3D renderings, floor plans, video assets, drone cinematography, and text published on this portal are the exclusive intellectual property of SSB Group. Any unauthorized reproduction, redistribution, or commercial use without prior written consent is strictly prohibited.
                    </p>
                  </section>

                  <section>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 700 }}>3. Website Usage Restrictions</h3>
                    <p style={{ color: 'var(--ink-muted)' }}>
                      Users agree not to introduce malicious code, scrape data automatically, interfere with server integrity, or misrepresent their identity when submitting inquiries, site visit bookings, or financial queries on this platform.
                    </p>
                  </section>

                  <section>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 700 }}>4. Governing Law & Jurisdiction</h3>
                    <p style={{ color: 'var(--ink-muted)' }}>
                      All disputes, legal actions, or proceedings arising out of or related to this website or transactions entered thereunder shall be subject to the exclusive jurisdiction of the competent courts in Varanasi, Uttar Pradesh, India.
                    </p>
                  </section>
                </div>
              </div>
            )}

            {/* 3. Disclaimer */}
            {activeTab === 'disclaimer' && (
              <div>
                <span className="badge badge-brand" style={{ marginBottom: '0.75rem' }}>STATUTORY NOTICE</span>
                <h2 style={{ fontSize: '2.2rem', color: 'var(--ink)', marginBottom: '1rem', fontFamily: 'var(--font-heading, "Cinzel", serif)' }}>
                  Disclaimer & Artistic Impressions
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--ink)', lineHeight: '1.75', fontSize: '0.95rem' }}>
                  <section>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 700 }}>1. Conceptual & Indicative Content</h3>
                    <p style={{ color: 'var(--ink-muted)' }}>
                      All images, photographic walkthroughs, computer-generated 3D architectural renders, elevation drawings, landscaped areas, interior decor showcases, and property amenities displayed on this website are artistic impressions and indicative conceptual representations intended to illustrate the aesthetic vision of the projects.
                    </p>
                  </section>

                  <section>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 700 }}>2. No Legal or Binding Offer</h3>
                    <p style={{ color: 'var(--ink-muted)' }}>
                      Information on this website does not constitute a legal offering, warranty, or contractual commitment between SSB Group and any prospective buyer. The final specifications, dimensions, fittings, structural inclusions, and delivery schedules will be governed strictly by the formal Allotment Letter, Agreement for Sale, and statutory approvals registered with UP-RERA.
                    </p>
                  </section>

                  <section>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 700 }}>3. Price & Layout Variations</h3>
                    <p style={{ color: 'var(--ink-muted)' }}>
                      Unit availability, pricing schedules, government taxes, stamp duty rates, and layout masterplans are subject to modification at the discretion of the developer in accordance with statutory guidelines and development permissions. Prospective buyers are advised to inspect the certified municipal drawings, sanction approvals, and title documents at our registered corporate office before booking.
                    </p>
                  </section>
                </div>
              </div>
            )}

            {/* 4. RERA & Statutory */}
            {activeTab === 'rera' && (
              <div>
                <span className="badge badge-brand" style={{ marginBottom: '0.75rem' }}>UP-RERA COMPLIANCE</span>
                <h2 style={{ fontSize: '2.2rem', color: 'var(--ink)', marginBottom: '1rem', fontFamily: 'var(--font-heading, "Cinzel", serif)' }}>
                  RERA & Statutory Disclosures
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--ink)', lineHeight: '1.75', fontSize: '0.95rem' }}>
                  <p style={{ color: 'var(--ink-muted)' }}>
                    Shree Sai Baba Infra Projects Pvt. Ltd. operates in full compliance with the Real Estate (Regulation and Development) Act, 2016 (RERA) and Uttar Pradesh Real Estate Regulatory Authority (UP-RERA) rules.
                  </p>

                  <div style={{ background: 'var(--sand-muted)', padding: '1.5rem', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '0.75rem', fontWeight: 700 }}>Registered Projects Summary</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.5rem' }}>
                        <span><strong>Sai Gaon</strong> (Varanasi Corridor)</span>
                        <span className="badge badge-success">Approved / Ongoing</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.5rem' }}>
                        <span><strong>Shree Sai City Group Housing</strong> (Varanasi)</span>
                        <span className="badge badge-success">Approved / Ongoing</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.5rem' }}>
                        <span><strong>Shree Sai City EWS / PMAY</strong> (Affordable Housing)</span>
                        <span className="badge badge-success">Delivered / Handover</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span><strong>Pratham</strong> (Lucknow Mixed-Use)</span>
                        <span className="badge badge-brand">Statutory Filing Active</span>
                      </div>
                    </div>
                  </div>

                  <p style={{ color: 'var(--ink-muted)' }}>
                    Full sanction documents, project carpet area calculations, approved layout maps, structural engineering verifications, and encumbrance certificates are available for review at our registered office and on the official UP-RERA website (<a href="https://www.up-rera.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', fontWeight: 600 }}>www.up-rera.in</a>).
                  </p>

                  <div style={{ marginTop: '1rem' }}>
                    <Link to="/certifications" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <ShieldCheck size={16} /> View Government Certifications & ISO Accreditations
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Cookie Policy */}
            {activeTab === 'cookies' && (
              <div>
                <span className="badge badge-brand" style={{ marginBottom: '0.75rem' }}>COOKIE & TRACKING POLICY</span>
                <h2 style={{ fontSize: '2.2rem', color: 'var(--ink)', marginBottom: '1rem', fontFamily: 'var(--font-heading, "Cinzel", serif)' }}>
                  Cookie Policy
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--ink)', lineHeight: '1.75', fontSize: '0.95rem' }}>
                  <section>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 700 }}>1. What Are Cookies?</h3>
                    <p style={{ color: 'var(--ink-muted)' }}>
                      Cookies are compact text files stored on your computer or mobile device when you browse websites. They help the website remember your device, preferences, and session state to provide a seamless browsing experience.
                    </p>
                  </section>

                  <section>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 700 }}>2. How We Use Cookies</h3>
                    <p style={{ color: 'var(--ink-muted)' }}>
                      SSB Group uses strictly minimal and essential cookies:
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--ink-muted)' }}>
                      <li><strong>Essential Operational Cookies:</strong> Required for secure navigation, form validation, and application session persistence.</li>
                      <li><strong>Performance & Analytics:</strong> Anonymous, aggregated metrics to monitor page load performance and popular project pages.</li>
                      <li><strong>User Experience:</strong> Remembering dismissed notification banners and calculator preferences during your session.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 700 }}>3. Controlling & Disabling Cookies</h3>
                    <p style={{ color: 'var(--ink-muted)' }}>
                      You can modify your browser settings to decline or delete cookies at any time. Please note that disabling essential cookies may impact certain interactive tools such as the EMI calculator or instant callback modals.
                    </p>
                  </section>
                </div>
              </div>
            )}

            {/* Statutory Corporate Contact Card */}
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', background: 'var(--sand-light)', padding: '2rem', borderRadius: 'var(--r-lg)' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '0.75rem', fontWeight: 700 }}>
                Corporate Legal & Grievance Officer
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                For any statutory inquiries, compliance disclosures, or privacy questions, please contact our legal desk:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <MapPin size={16} style={{ color: 'var(--brand)', flexShrink: 0, marginTop: '2px' }} />
                  <span>20/51-5 and 20/52-4, Sri Das Foundation Building, Cantonment, Mall Road, Varanasi, UP 221002</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={16} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                  <a href="mailto:info@ssbinfraproject.com" style={{ color: 'var(--brand)', fontWeight: 600 }}>info@ssbinfraproject.com</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={16} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                  <a href="tel:+919818928893" style={{ color: 'var(--brand)', fontWeight: 600 }}>+91 98189 28893</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
