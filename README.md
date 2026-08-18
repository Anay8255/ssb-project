# SSB Infra Real Estate Platform (Version 2.1)
**Client / Brand:** SSB Infra Project (`ssbinfraproject.com`)  
**Architecture:** Enterprise Real Estate Portal, Live Inventory Engine, Master Plan, and Admin CRM

---

## 🌟 Platform Highlights & Capabilities

### 1. Public Real Estate Portal
- **Cinematic Homepage (`#/`)**:
  - Hero slider with value proposition and quick property finder filter.
  - Verified impact statistics counter (15+ Years, 10,000+ Happy Families, 5M+ Sq. Ft. Developed, 100% RERA Approved).
  - Featured projects showcase with category filters (*Sai Gaon*, *Shree Sai City Housing*, *Shree Sai City EWS/PMAY*, *Pratham Plotted Township*).
  - Why Choose SSB Infra & connectivity distance matrix.
  - High-conversion VIP site visit booking form with chauffeur cab request.
- **Detailed Project Pages (`#/projects/:slug`)**:
  - **100% UP-RERA Compliance Hub**: Verified RERA numbers, QR codes, and direct verification link.
  - **Interactive Master Plan Viewer**: Clickable SVG layout displaying towers, plots, and real-time availability badges (`Available`, `On Hold`, `Sold`).
  - **Interactive Floor Plans**: 1BHK / 2BHK / 3BHK / Villa layout switcher with super built-up vs. RERA carpet area, dimensions, and zoom preview.
  - **Live Construction Milestone Tracker**: 9-stage visual progress bars and completion percentages.
  - **Gated E-Brochure Delivery System**: Instant delivery via simulated WhatsApp & Email.
- **Smart EMI & Investment Calculator (`#/emi-calculator`)**:
  - Real-time sliders for Property Value, Down Payment (%), Interest Rate, and Loan Tenure.
  - Principal vs. Interest breakdown, monthly EMI badge, and 5-year indicative amortization schedule table.
- **Global NRI & Investor Desk (`#/nri-corner`)**:
  - Live Multi-Currency Valuation Converter (USD, AED, GBP, EUR, CAD, INR).
  - FEMA & RBI regulations, Power of Attorney (POA) guidance, and 1-on-1 virtual video tour booking.
- **Live Construction Timeline (`#/construction-updates`)**:
  - Project-by-project progress monitoring.
- **Media Gallery (`#/gallery`)**:
  - High-resolution architecture, elevations, and drone photography.
- **Executive Leadership & Governance (`#/leadership`)**:
  - Profiles of MD, Directors, and CTO.
- **RERA & Legal FAQs (`#/faq`)**:
  - Searchable knowledge base answering legal, loan approval, and possession queries.
- **Contact & Headquarters (`#/contact`)**:
  - Varanasi corporate office details, phone helplines, and interactive booking form.

---

### 2. Enterprise Operations & Admin CRM (`#/admin`)
- **Executive KPI Dashboard**: Total Active Leads, Hot Leads Count, Site Visits Scheduled, and Available Unit Inventory.
- **Multi-Stage Kanban Lead CRM**:
  - Stages: `NEW` $\rightarrow$ `CONTACTED` $\rightarrow$ `QUALIFIED` $\rightarrow$ `SITE VISIT SCHEDULED` $\rightarrow$ `NEGOTIATION` $\rightarrow$ `BOOKED / CONVERTED`.
  - Automated Lead Scoring: **HOT** (5m SLA response), **WARM** (2h SLA), **COLD**.
  - One-click CSV/Excel Export.
- **Live Property Inventory Engine**:
  - Toggle unit status (`AVAILABLE`, `HOLD`, `BOOKED`, `SOLD`, `BLOCKED`) in real time, which immediately reflects on the public Interactive Master Plan.
- **Site Visit Logistics Dispatcher**:
  - Assign drivers and vehicles (e.g. Innova Crysta), track pickup locations, and update visit status (`Confirmed`, `Driver Assigned`, `Completed`).
- **CMS Marketing Landing Page Builder**:
  - Create targeted campaign landing pages (e.g., `#/landing/2bhk-apartments-varanasi`) dynamically with custom SEO titles, heroes, and lead capture forms.
- **Immutable Audit Trail**:
  - Cryptographically timestamped logs with before/after diffs of all pricing, status, and lead changes.

---

## 🚀 How to Run & Preview

1. **Direct Browser Preview**:
   - Double-click or open [index.html](file:///c:/Users/SSB%20GROUP/Desktop/SSB%20Project/index.html) in any modern web browser (Chrome, Edge, Opera, Firefox).
2. **Local HTTP Server**:
   - Serve the directory using any static web server (VS Code Live Server, Python, Node, Nginx, or Caddy).

---

## 📁 Project Directory Structure

```text
c:\Users\SSB GROUP\Desktop\SSB Project\
├── index.html                  # Single-Page App entry point & layout
├── README.md                   # Project documentation
├── MASTER_PROJECT_PLAN.md      # Detailed V2.1 Architecture Blueprint
├── css/
│   ├── design-tokens.css       # Luxury Theme Variables, Colors, Typography
│   ├── main.css                # Global Layout, Navbar, Hero, Footers
│   ├── project-detail.css      # Master Plan, Floor Plans, RERA Hub
│   ├── emi-calculator.css      # Sliders, EMI summary, Amortization table
│   ├── nri-corner.css          # Currency converter & NRI guides
│   └── admin-dashboard.css     # Kanban CRM, Inventory & Logistics tables
└── js/
    ├── db-seed.js              # Mock database with projects, units, leads
    ├── store.js                # State store, lead scoring & notifications
    ├── interactive-map.js      # SVG Master Plan & Unit Explorer
    ├── floor-plans.js          # Floor plan switcher & lightbox
    ├── emi-calculator.js       # EMI formula & amortization generator
    ├── nri-corner.js           # Currency conversion rates & tour booking
    ├── construction.js         # Visual milestone progress bars
    ├── crm-admin.js            # Admin CRM, Inventory toggle & Landing pages
    ├── router.js               # Client-side hash routing engine
    └── main.js                 # Global controller, modal triggers & toasts
```
