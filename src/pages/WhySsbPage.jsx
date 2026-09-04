import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { 
  ShieldCheck, 
  Award, 
  Landmark, 
  CheckCircle2, 
  Building2, 
  HeartHandshake, 
  Car, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Layers, 
  Compass, 
  Check, 
  Shield, 
  Building, 
  TrendingUp,
  Clock,
  PhoneCall
} from 'lucide-react';

export const WhySsbPage = () => {
  const { openSiteVisitModal, openContactModal } = useModal();
  const [activeComparison, setActiveComparison] = useState('tech');

  const pillars = [
    {
      id: "01",
      icon: ShieldCheck,
      title: "100% UP-RERA Compliance",
      subtitle: "Absolute Legal Transparency",
      description: "Every residential township and commercial development is strictly registered and certified with UP-RERA. We provide verified registration certificates, approved architectural master plans, sanctioned FAR certificates, and clear carpet area disclosures before any booking.",
      tags: ["UP-RERA Certified", "Sanctioned Blueprints", "Zero Hidden Terms"],
      highlight: "UPRERAPRJ923469 Approved"
    },
    {
      id: "02",
      icon: Award,
      title: "Aluminium Formwork Technology",
      subtitle: "Varanasi's First Monolithic Standard",
      description: "SSB Group is the pioneer in Eastern UP deploying monolithic aluminium formwork technology. Pouring structural walls and slabs simultaneously in high-grade concrete eliminates masonry cracks, resists seismic tremors, guarantees zero water seepage, and creates mirror-finish walls.",
      tags: ["Monolithic Pour", "Seismic Zone IV Safe", "Zero Seepage"],
      highlight: "Pioneering Monolithic RCC"
    },
    {
      id: "03",
      icon: Landmark,
      title: "Nationalized Bank Approvals",
      subtitle: "Pre-Approved Premier Financing",
      description: "All SSB developments are pre-vetted and approved for hassle-free home financing by India’s top nationalized and private banking institutions, offering customized construction-linked payment milestones and competitive interest rates.",
      tags: ["SBI & HDFC Pre-Approved", "Construction-Linked", "Instant Sanctions"],
      highlight: "6+ Leading Banking Partners"
    },
    {
      id: "04",
      icon: CheckCircle2,
      title: "Clear Land Titles & Registry",
      subtitle: "30-Year Legal Title Clearance",
      description: "We perform exhaustive multi-decade legal title searches and due diligence on all land acquisitions. Homeowners receive transparent registry documentation, 100% freehold land rights, and full statutory approvals from the Varanasi Development Authority (VDA) and Awas Bandhu.",
      tags: ["30-Year Title Search", "100% Freehold", "VDA Approved"],
      highlight: "100% Legal Ownership"
    },
    {
      id: "05",
      icon: Building2,
      title: "Strategic High-Growth Corridors",
      subtitle: "Maximum Capital Appreciation",
      description: "Our developments in Varanasi and Lucknow are strategically positioned along high-speed expressways, multi-lane ring roads, and civic expansion corridors, ensuring double-digit annual capital appreciation and outstanding rental yields for investors.",
      tags: ["Expressway Frontage", "High ROI", "Prime Growth Belts"],
      highlight: "Double-Digit Value Growth"
    },
    {
      id: "06",
      icon: HeartHandshake,
      title: "10,000+ Happy Homeowners",
      subtitle: "Lifelong Community & Governance",
      description: "Over 10,000 satisfied families call SSB townships their home. Our dedicated in-house facility maintenance teams provide 24/7 security, lush landscape upkeep, solar backup management, and professional resident community governance for decades to come.",
      tags: ["24/7 Facility Care", "10K+ Families", "Gated Security"],
      highlight: "13+ Years of Trust"
    }
  ];

  const banks = [
    { name: "State Bank of India", type: "Nationalized Lead Partner", rate: "Pre-Approved" },
    { name: "HDFC Bank", type: "Premier Housing Finance", rate: "Fast-Track Loan" },
    { name: "ICICI Bank", type: "Preferred Partner", rate: "Zero Processing Fee" },
    { name: "Bank of Baroda", type: "Public Sector Partner", rate: "Subsidized PMAY" },
    { name: "Punjab National Bank", type: "Government Bank", rate: "Flexible Tenures" },
    { name: "Axis Bank", type: "Private Banking", rate: "Instant Disbursal" }
  ];

  const comparisonData = {
    tech: [
      { feature: "Wall Construction", ssb: "Monolithic Reinforced Concrete (RCC)", traditional: "Red Brick & Cement Mortar" },
      { feature: "Earthquake Safety", ssb: "High Seismic Ductility (Zone IV/V Ready)", traditional: "Prone to Shear Wall Cracks" },
      { feature: "Water Seepage Risk", ssb: "Zero Seepage (Jointless Monolithic Cast)", traditional: "Frequent Masonry Joint Leakages" },
      { feature: "Construction Speed", ssb: "3x Faster Floor Casting Cycle", traditional: "Slow Manual Masonry & Plastering" },
      { feature: "Carpet Area Efficiency", ssb: "Slimmer, High-Strength Walls (+3-5% Space)", traditional: "Thick 9-inch Brick Walls Reduce Usable Area" },
      { feature: "Interior Surface Finish", ssb: "Silky Mirror-Smooth Concrete Finish", traditional: "Uneven Manual Sand Plaster" }
    ],
    governance: [
      { feature: "RERA Registration", ssb: "100% Certified (UPRERA Certified)", traditional: "Often Delayed or Non-Compliant" },
      { feature: "Land Title Investigation", ssb: "30-Year Comprehensive Legal Audit", traditional: "Basic Single-Owner Verifications" },
      { feature: "Escrow Bank Account", ssb: "70% Funds Dedicated in Project Escrow", traditional: "Unregulated Cash Flow Divergence" },
      { feature: "Civic Authority Approvals", ssb: "VDA, Fire, Environmental & Tree NOCs", traditional: "Partial or Pending Clearances" },
      { feature: "Handover Timelines", ssb: "Penalty-Backed Timely Possession Guarantee", traditional: "Uncertain Handover Schedules" }
    ]
  };

  return (
    <div className="why-ssb-page-wrapper">
      {/* 1. CINEMATIC LUXURY EXECUTIVE HERO SECTION WITH ARCHITECTURAL BG IMAGE */}
      <section className="why-hero-executive">
        <div className="why-hero-bg-media">
          <img 
            src="/hero-sai-gaon.png" 
            alt="Why SSB Group — Engineering Trust & Excellence" 
            className="why-hero-bg-img" 
          />
          <div className="why-hero-scrim" />
          <div className="why-hero-grain" />
        </div>

        <div className="container why-hero-container">
          <div className="why-hero-badge">
            <Sparkles size={14} className="text-gold" />
            <span>THE SSB INTEGRITY &amp; EXCELLENCE BENCHMARK</span>
          </div>

          <h1 className="why-hero-title">
            Trust Is The Only Asset <br />
            <span className="why-hero-title-accent">We Cannot Rebuild.</span>
          </h1>

          <p className="why-hero-subtitle">
            Why discerning homebuyers, smart NRI investors, and leading corporate enterprises across Eastern Uttar Pradesh trust SSB Group for architectural distinction and lifelong capital value.
          </p>

          <div className="why-hero-metrics-row">
            <div className="why-metric-pill">
              <div className="why-metric-num">13+</div>
              <div className="why-metric-lbl">Years of Track Record</div>
            </div>
            <div className="why-metric-divider" />
            <div className="why-metric-pill">
              <div className="why-metric-num">1,200+</div>
              <div className="why-metric-lbl">Units Delivered</div>
            </div>
            <div className="why-metric-divider" />
            <div className="why-metric-pill">
              <div className="why-metric-num">100%</div>
              <div className="why-metric-lbl">UP-RERA Certified</div>
            </div>
            <div className="why-metric-divider" />
            <div className="why-metric-pill">
              <div className="why-metric-num">ISO</div>
              <div className="why-metric-lbl">9001:2015 Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 6 ARCHITECTURAL & GOVERNANCE PILLARS */}
      <section className="why-pillars-section">
        <div className="container">
          <div className="why-section-header-center">
            <div className="featured-badge-pill" style={{ background: 'rgba(220, 90, 50, 0.1)', color: '#DC5A32', border: '1px solid rgba(220, 90, 50, 0.25)' }}>
              <ShieldCheck size={13} />
              <span>THE 6 PILLARS OF ASSURANCE</span>
            </div>
            <h2 className="why-section-title">Engineered on Uncompromising Standards</h2>
            <p className="why-section-desc">
              Every foundation stone laid by SSB Group reflects rigorous engineering precision, statutory transparency, and unwavering customer commitment.
            </p>
          </div>

          <div className="why-pillars-grid">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.id} className="why-pillar-card">
                  <div className="why-pillar-card-top">
                    <div className="why-pillar-icon-box">
                      <Icon size={24} />
                    </div>
                    <div className="why-pillar-num-badge">
                      <span>PILLAR</span>
                      <strong>{pillar.id}</strong>
                    </div>
                  </div>

                  <div className="why-pillar-body">
                    <span className="why-pillar-subtitle">{pillar.subtitle}</span>
                    <h3 className="why-pillar-title">{pillar.title}</h3>
                    <p className="why-pillar-desc">{pillar.description}</p>
                  </div>

                  <div className="why-pillar-footer">
                    <div className="why-pillar-tags-row">
                      {pillar.tags.map((tag, idx) => (
                        <span key={idx} className="why-pillar-tag">
                          <Check size={11} className="text-brand flex-shrink-0" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <div className="why-pillar-highlight-bar">
                      <Sparkles size={12} className="text-gold flex-shrink-0" />
                      <span>{pillar.highlight}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ENGINEERING & TECHNOLOGY BREAKDOWN: MONOLITHIC RCC VS TRADITIONAL */}
      <section className="why-tech-section">
        <div className="container">
          <div className="why-tech-card">
            <div className="why-tech-header">
              <div>
                <div className="featured-badge-pill" style={{ background: 'rgba(197, 160, 89, 0.15)', color: '#F5E7C8', border: '1px solid rgba(197, 160, 89, 0.3)' }}>
                  <Layers size={13} />
                  <span>CONSTRUCTION EXCELLENCE AUDIT</span>
                </div>
                <h2 className="why-tech-title">The SSB Engineering Advantage</h2>
                <p className="why-tech-subtitle">
                  How our pioneering monolithic aluminium formwork technology and institutional governance outclass traditional real estate construction.
                </p>
              </div>

              {/* Toggle Buttons */}
              <div className="why-comparison-toggle-bar">
                <button
                  type="button"
                  onClick={() => setActiveComparison('tech')}
                  className={`why-toggle-btn ${activeComparison === 'tech' ? 'active' : ''}`}
                >
                  <Award size={14} />
                  <span>Formwork vs Brickwork</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveComparison('governance')}
                  className={`why-toggle-btn ${activeComparison === 'governance' ? 'active' : ''}`}
                >
                  <ShieldCheck size={14} />
                  <span>RERA &amp; Governance</span>
                </button>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="why-comparison-table-wrap">
              <table className="why-comparison-table">
                <thead>
                  <tr>
                    <th style={{ width: '28%' }}>Quality &amp; Safety Metric</th>
                    <th style={{ width: '38%' }} className="th-ssb">
                      <div className="th-ssb-badge">
                        <Sparkles size={13} />
                        <span>SSB Group Monolithic Standard</span>
                      </div>
                    </th>
                    <th style={{ width: '34%' }} className="th-traditional">
                      <span>Traditional Builder Standard</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData[activeComparison].map((row, idx) => (
                    <tr key={idx}>
                      <td className="td-feature-name">
                        <strong>{row.feature}</strong>
                      </td>
                      <td className="td-ssb-val">
                        <div className="td-ssb-content">
                          <CheckCircle2 size={16} className="text-emerald flex-shrink-0" />
                          <span>{row.ssb}</span>
                        </div>
                      </td>
                      <td className="td-traditional-val">
                        <span>{row.traditional}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="why-tech-footer-note">
              <Shield size={16} className="text-gold flex-shrink-0" />
              <span>All SSB construction sites undergo independent third-party structural stress analysis, cube concrete compression testing, and UP-RERA quarterly milestone audits.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRE-APPROVED BANKING INSTITUTIONS */}
      <section className="why-banks-section">
        <div className="container">
          <div className="why-section-header-center" style={{ marginBottom: '2rem' }}>
            <div className="featured-badge-pill" style={{ background: 'rgba(15, 41, 74, 0.08)', color: '#0F294A', border: '1px solid rgba(15, 41, 74, 0.2)' }}>
              <Landmark size={13} />
              <span>FINANCIAL SECURITY &amp; HOME LOAN APPROVALS</span>
            </div>
            <h2 className="why-section-title">Pre-Approved by Leading Financial Institutions</h2>
            <p className="why-section-desc">
              Enjoy hassle-free home financing, zero legal title verification delays, and special interest rate subsidies across nationalized and private banks.
            </p>
          </div>

          <div className="why-banks-grid">
            {banks.map((bank, idx) => (
              <div key={idx} className="why-bank-card">
                <div className="why-bank-icon-wrap">
                  <Landmark size={20} />
                </div>
                <div className="why-bank-info">
                  <h4 className="why-bank-name">{bank.name}</h4>
                  <span className="why-bank-type">{bank.type}</span>
                </div>
                <div className="why-bank-tag">
                  <Check size={12} />
                  <span>{bank.rate}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="why-banking-advisory-box">
            <div className="why-advisory-left">
              <Sparkles size={20} className="text-brand flex-shrink-0" />
              <div>
                <h4 className="why-advisory-title">Need Customized Financial Consultation?</h4>
                <p className="why-advisory-desc">Our in-house banking desk assists you with PMAY subsidy calculations, tax-saving structures, and immediate loan eligibility sanction letters.</p>
              </div>
            </div>
            <button 
              type="button" 
              onClick={() => openContactModal()}
              className="why-advisory-btn"
            >
              <span>Speak to Loan Advisor</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. EXECUTIVE VIP SITE VISIT CTA CARD */}
      <section className="why-cta-section">
        <div className="container">
          <div className="why-vip-card">
            <div className="why-vip-glow" />
            
            <div className="why-vip-content">
              <div className="why-vip-badge">
                <Car size={14} className="text-gold" />
                <span>EXECUTIVE IN-PERSON AUDIT</span>
              </div>

              <h2 className="why-vip-title">
                Inspect Our Construction Quality In Person
              </h2>

              <p className="why-vip-desc">
                We invite you to experience our monolithic aluminium formwork, sample apartments, and live engineering quality tests firsthand. Book a complimentary chauffeur-driven VIP site visit across any of our ongoing townships in Varanasi.
              </p>

              <div className="why-vip-features-row">
                <div className="why-vip-feature-item">
                  <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                  <span>Doorstep Chauffeur Pickup &amp; Drop</span>
                </div>
                <div className="why-vip-feature-item">
                  <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                  <span>Chief Architect &amp; Site Engineer Walkthrough</span>
                </div>
                <div className="why-vip-feature-item">
                  <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                  <span>Full Legal Due Diligence Folder Review</span>
                </div>
              </div>

              <div className="why-vip-action-row">
                <button 
                  type="button" 
                  onClick={() => openSiteVisitModal()}
                  className="why-vip-primary-btn"
                >
                  <Car size={16} />
                  <span>Book Complimentary VIP Site Visit</span>
                  <ArrowRight size={15} />
                </button>

                <Link to="/projects" className="why-vip-secondary-btn">
                  <Building size={16} />
                  <span>Explore Ongoing Projects</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
