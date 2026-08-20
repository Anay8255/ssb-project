import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Col 1: Bio */}
          <div>
            <div className="brand-logo" style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div className="logo-mark">S</div>
              <span className="brand-main">SSB GROUP</span>
            </div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--ink)', marginBottom: '0.35rem' }}>
              Stay Blessed
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', lineHeight: '1.6', maxWidth: '320px' }}>
              Shree Sai Baba Infra Projects Pvt. Ltd. — building thoughtfully planned residential and commercial spaces across Eastern Uttar Pradesh since 2013.
            </p>
          </div>

          {/* Col 2: Projects */}
          <div>
            <h4 className="footer-heading">Projects</h4>
            <ul className="footer-links">
              <li><Link to="/projects/sai-gaon">Sai Gaon</Link></li>
              <li><Link to="/projects/shree-sai-city-group-housing">Shree Sai City Group Housing</Link></li>
              <li><Link to="/projects/shree-sai-city-ews-pmay">Shree Sai City EWS / PMAY</Link></li>
              <li><Link to="/projects/pratham">Pratham (Lucknow)</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About SSB</Link></li>
              <li><Link to="/leadership">Leadership</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/why-ssb">Why SSB</Link></li>
              <li><Link to="/media">Media</Link></li>
            </ul>
          </div>

          {/* Col 4: Investors */}
          <div>
            <h4 className="footer-heading">Investors</h4>
            <ul className="footer-links">
              <li><Link to="/investors-nri">Investors Desk</Link></li>
              <li><Link to="/investors-nri">NRI Information</Link></li>
              <li><Link to="/emi-calculator">EMI Calculator</Link></li>
              <li><Link to="/contact">Book a Site Visit</Link></li>
              <li><Link to="/admin">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div>
            <h4 className="footer-heading">Legal & RERA</h4>
            <ul className="footer-links">
              <li><Link to="/certifications">Certifications</Link></li>
              <li><Link to="/certifications">Privacy Policy</Link></li>
              <li><Link to="/certifications">Terms & Conditions</Link></li>
              <li><Link to="/certifications">RERA Information</Link></li>
            </ul>
          </div>
        </div>

        {/* Address & Contact Strip */}
        <div style={{ borderTop: '1px solid var(--border)', padding: '1.75rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', fontSize: '0.85rem' }}>
          <div>
            📍 <strong>Registered Office:</strong><br />
            20/51-5 and 20/52-4, Sri Das Foundation Building, Cantonment, Mall Road, Varanasi
          </div>
          <div>
            📞 <strong>Phone:</strong> <a href="tel:+919818928893" style={{ color: 'var(--brand)', fontWeight: 700 }}>+91 98189 28893</a><br />
            ☎️ <strong>Office:</strong> 07080201752 · 0542-2500657
          </div>
          <div>
            ✉️ <strong>Email:</strong> <a href="mailto:info@ssbinfraproject.com" style={{ color: 'var(--brand)' }}>info@ssbinfraproject.com</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div>
            &copy; 2026 Shree Sai Baba Infra Projects Pvt. Ltd. All rights reserved.
          </div>
          <div>
            Reference: <code>ssbinfraproject.com</code>
          </div>
        </div>
      </div>
    </footer>
  );
};
