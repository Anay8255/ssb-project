import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { Menu, X, ChevronDown, Phone, Car } from 'lucide-react';

export const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openSiteVisitModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMobileDrawerOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav-container">
          {/* Authentic SSB Logo */}
          <Link to="/" className="brand-logo-wrap" aria-label="SSB Group Home">
            <img 
              src="/ssb-logo-official.jpg" 
              alt="SSB Group - Stay Blessed" 
              className="header-logo-image" 
              style={{ height: '48px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }}
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/why-ssb" className={`nav-link ${isActive('/why-ssb') ? 'active' : ''}`}>Why SSB</Link>
            </li>
            <li className="nav-item">
              <Link to="/leadership" className={`nav-link ${isActive('/leadership') ? 'active' : ''}`}>Leadership</Link>
            </li>
            <li className="nav-item">
              <Link to="/media" className={`nav-link ${isActive('/media') ? 'active' : ''}`}>Media</Link>
            </li>
            <li className="nav-item">
              <Link to="/investors-nri" className={`nav-link ${isActive('/investors-nri') ? 'active' : ''}`}>Investors & NRI</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
            </li>
            
            {/* Trust Dropdown */}
            <li className="nav-item nav-dropdown">
              <span className={`nav-link ${isActive('/certifications') || isActive('/construction-updates') || isActive('/emi-calculator') ? 'active' : ''}`} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>Trust</span>
                <ChevronDown size={14} />
              </span>
              <div className="dropdown-menu">
                <Link to="/legal" className="dropdown-link">⚖️ Legal, Privacy & RERA</Link>
                <Link to="/certifications" className="dropdown-link">📜 ISO 9001:2015 Certification</Link>
                <Link to="/certifications" className="dropdown-link">🏛️ Incorporation Certificate</Link>
                <Link to="/certifications" className="dropdown-link">📋 Awas Bandhu Registration</Link>
                <Link to="/certifications" className="dropdown-link">🏛️ UP Tourism Registration</Link>
                <Link to="/construction-updates" className="dropdown-link">🏗️ Live Construction Progress</Link>
                <Link to="/emi-calculator" className="dropdown-link">🧮 EMI & Finance Calculator</Link>
                <Link to="/admin" className="dropdown-link" style={{ color: 'var(--brand)', fontWeight: 700, borderTop: '1px solid var(--border)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                  🔐 Admin CMS & CRM
                </Link>
              </div>
            </li>
          </ul>

          {/* Action Button & Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Link to="/projects" className="btn-nav-explore">
              Explore Projects
            </Link>
            <button 
              className="menu-toggle" 
              aria-label="Open menu" 
              onClick={() => setMobileDrawerOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <div id="mobile-drawer" className={mobileDrawerOpen ? 'open' : ''}>
        <div className="drawer-header">
          <span style={{ color: '#FFF', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '0.05em' }}>SSB GROUP</span>
          <button 
            onClick={() => setMobileDrawerOpen(false)} 
            style={{ background: 'transparent', border: 'none', color: '#FFF', fontSize: '1.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }} 
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <ul className="drawer-links" onClick={() => setMobileDrawerOpen(false)}>
          <li><Link to="/" className="drawer-link">Home</Link></li>
          <li><Link to="/about" className="drawer-link">About SSB</Link></li>
          <li><Link to="/projects" className="drawer-link">Projects</Link></li>
          <li><Link to="/why-ssb" className="drawer-link">Why SSB</Link></li>
          <li><Link to="/leadership" className="drawer-link">Leadership</Link></li>
          <li><Link to="/media" className="drawer-link">Media & Events</Link></li>
          <li><Link to="/investors-nri" className="drawer-link">Investors & NRI</Link></li>
          <li><Link to="/emi-calculator" className="drawer-link">EMI Calculator</Link></li>
          <li><Link to="/construction-updates" className="drawer-link">Live Progress</Link></li>
          <li><Link to="/certifications" className="drawer-link">Certifications & Trust</Link></li>
          <li><Link to="/legal" className="drawer-link">Legal & Privacy Policy</Link></li>
          <li><Link to="/contact" className="drawer-link">Contact Us</Link></li>
          <li><Link to="/admin" className="drawer-link" style={{ color: 'var(--brand)' }}>Admin CMS & CRM</Link></li>
        </ul>
        <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a href="tel:+919818928893" className="btn btn-ghost-warm" style={{ width: '100%', textAlign: 'center' }}>
            <Phone size={16} /> Call: +91 98189 28893
          </a>
          <button 
            className="btn btn-primary" 
            style={{ width: '100%' }} 
            onClick={() => {
              setMobileDrawerOpen(false);
              openSiteVisitModal();
            }}
          >
            <Car size={16} /> Book a Site Visit
          </button>
        </div>
      </div>
    </>
  );
};
