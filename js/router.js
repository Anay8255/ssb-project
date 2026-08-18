/**
 * SSB GROUP — CLIENT ROUTER & PAGE VIEWS
 * Exact match to user screenshots: Floating Navbar, Hero, Animated Stats Strip, Our Presence Map, and About SSB Group
 */

class AppRouter {
  constructor(appContainerId) {
    this.appContainer = document.getElementById(appContainerId);
    window.addEventListener('hashchange', () => this.handleRoute());
    this.handleRoute();
  }

  handleRoute() {
    if (!this.appContainer) {
      this.appContainer = document.getElementById('app-view');
    }
    if (!this.appContainer) return;

    let hash = window.location.hash.slice(1) || '/';
    if (!hash.startsWith('/')) hash = '/' + hash;

    window.scrollTo(0, 0);

    // Update active nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href && (href === '#' + hash || (hash === '/' && href === '#/'))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    const header = document.querySelector('.site-header');
    const footer = document.querySelector('.site-footer');
    const floatActions = document.querySelector('.floating-actions');

    if (hash.startsWith('/admin')) {
      if (header) header.style.display = 'none';
      if (footer) footer.style.display = 'none';
      if (floatActions) floatActions.style.display = 'none';
    } else {
      if (header) header.style.display = 'block';
      if (footer) footer.style.display = 'block';
      if (floatActions) floatActions.style.display = 'flex';
    }

    if (hash === '/' || hash === '') {
      this.renderHomePage();
    } else if (hash === '/about') {
      this.renderAboutPage();
    } else if (hash === '/projects') {
      this.renderProjectsPage();
    } else if (hash.startsWith('/projects/')) {
      const slug = hash.replace('/projects/', '');
      this.renderProjectDetailPage(slug);
    } else if (hash === '/why-ssb') {
      this.renderWhySsbPage();
    } else if (hash === '/leadership') {
      this.renderLeadershipPage();
    } else if (hash === '/media') {
      this.renderMediaPage();
    } else if (hash === '/investors-nri' || hash === '/nri-corner') {
      this.renderNriCornerPage();
    } else if (hash === '/emi-calculator') {
      this.renderEmiCalculatorPage();
    } else if (hash === '/construction-updates') {
      this.renderConstructionUpdatesPage();
    } else if (hash === '/certifications') {
      this.renderCertificationsPage();
    } else if (hash === '/contact' || hash === '/book-a-site-visit') {
      this.renderContactPage();
    } else if (hash === '/admin') {
      this.renderAdminPage();
    } else {
      this.render404Page();
    }
  }

  // 1. HOMEPAGE (MATCHING ALL SCREENSHOTS 1, 2, 3 & 4 PRECISELY)
  renderHomePage() {
    const projects = window.store?.state?.projects || [];
    const journey = window.store?.state?.journey || [];
    const founder = window.store?.state?.leadership?.[0] || {
      name: "Mr. Ram Gopal Singh",
      designation: "Founder, Chairman & Managing Director",
      quote: "A home is not a transaction. It is a family's faith placed in your hands — and that faith must be honoured in every brick.",
      photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
    };

    this.appContainer.innerHTML = `
      <!-- EXACT HERO SECTION (MATCHING SCREENSHOT 1) -->
      <section class="hero-wrapper">
        <div class="hero-dot-grid"></div>
        <div class="hero-container">
          <div class="hero-content-box">
            <span class="hero-eyebrow-text">
              STAY BLESSED · SINCE 2013
            </span>
            <h1 class="hero-main-title">
              <span>Building Spaces.</span>
              <span>Creating Legacies.</span>
            </h1>
            <p class="hero-description">
              Since 2013, SSB Group has been creating thoughtfully planned residential and commercial spaces across Eastern Uttar Pradesh, with a commitment to quality, transparency and customer trust.
            </p>
            <div class="hero-btn-row">
              <a href="#/projects" class="btn-hero-primary">
                Explore Our Projects
              </a>
              <button class="btn-hero-secondary" onclick="window.openSiteVisitModal()">
                Book a Site Visit
              </button>
            </div>
          </div>
        </div>
        
        <!-- Subtle Scroll Down Indicator -->
        <div class="hero-scroll-indicator" onclick="window.scrollTo({top: 680, behavior: 'smooth'})" aria-label="Scroll Down">
          ⌄
        </div>
      </section>

      <!-- EXACT TERRACOTTA STATS STRIP WITH SCROLL COUNTING ANIMATION (MATCHING SCREENSHOT 2) -->
      <section class="stats-strip-terracotta" id="stats-counter-strip">
        <div class="stats-dot-overlay"></div>
        <div class="container">
          <div class="stats-grid-strip">
            <div class="stat-counter-box">
              <div class="stat-counter-num" data-target="13" data-suffix="+">13+</div>
              <div class="stat-counter-label">YEARS OF EXPERIENCE</div>
            </div>
            <div class="stat-counter-box">
              <div class="stat-counter-num" data-target="8" data-suffix="+">8+</div>
              <div class="stat-counter-label">PROJECTS DELIVERED</div>
            </div>
            <div class="stat-counter-box">
              <div class="stat-counter-num" data-target="4" data-suffix="">4</div>
              <div class="stat-counter-label">RUNNING PROJECTS</div>
            </div>
            <div class="stat-counter-box">
              <div class="stat-counter-num" data-target="1200" data-suffix="+">1200+</div>
              <div class="stat-counter-label">HAPPY FAMILIES</div>
            </div>
            <div class="stat-counter-box">
              <div class="stat-counter-num" data-target="6" data-suffix="">6</div>
              <div class="stat-counter-label">PIPELINE PROJECTS</div>
            </div>
          </div>
        </div>
      </section>

      <!-- EXACT "OUR PRESENCE" MAP & LIST SECTION WITH SLOW SMOOTH SCROLL REVEAL (MATCHING SCREENSHOT 3) -->
      <section class="presence-section" id="presence-section-mount">
        <div class="container">
          <div class="presence-grid">
            <!-- Left: Styled Leaflet Map -->
            <div class="presence-map-wrapper slow-reveal">
              <div id="presence-leaflet-map"></div>
            </div>

            <!-- Right: Our Presence Details -->
            <div class="presence-content-box slow-reveal slow-reveal-delay-1">
              <span class="presence-eyebrow">OUR PRESENCE</span>
              <h2 class="presence-heading">Rooted in Varanasi. Growing across Eastern Uttar Pradesh.</h2>

              <div class="presence-list">
                <a href="#/projects/sai-gaon" class="presence-row">
                  <div class="presence-item-left">
                    <span class="presence-project-title">Sai Gaon</span>
                    <span class="presence-badge ongoing">ONGOING</span>
                  </div>
                  <span class="presence-city-label">Varanasi</span>
                </a>

                <a href="#/projects/shree-sai-city-group-housing" class="presence-row">
                  <div class="presence-item-left">
                    <span class="presence-project-title">Shree Sai City Group Housing</span>
                    <span class="presence-badge ongoing">ONGOING</span>
                  </div>
                  <span class="presence-city-label">Varanasi</span>
                </a>

                <a href="#/projects/shree-sai-city-ews-pmay" class="presence-row">
                  <div class="presence-item-left">
                    <span class="presence-project-title">Shree Sai City EWS / PMAY</span>
                    <span class="presence-badge completed">COMPLETED</span>
                  </div>
                  <span class="presence-city-label">Varanasi</span>
                </a>
              </div>

              <div>
                <a href="#/projects" class="presence-know-more-btn">
                  Know More &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- EXACT "ABOUT SSB GROUP" SECTION (MATCHING SCREENSHOT 4) WITH DELAYED SLOW REVEAL -->
      <section class="about-ssb-strip" id="about-ssb-section">
        <div class="container">
          <div class="about-ssb-grid">
            <!-- Left Column: Story -->
            <div class="about-ssb-left slow-reveal">
              <span class="about-ssb-eyebrow">ABOUT SSB GROUP</span>
              <h2 class="about-ssb-heading">A Legacy Built on Trust</h2>
              <p class="about-ssb-desc">
                SSB Group is a real-estate development company focused on acquiring, planning and developing residential and commercial spaces across Eastern Uttar Pradesh. Founded in Varanasi in 2013 under the vision of Mr. Ram Gopal Singh, the group has grown with a philosophy centered on quality, innovation, professionalism and customer trust.
              </p>
            </div>

            <!-- Right Column: 3 Pillar Cards + Action Link -->
            <div class="about-ssb-right">
              <div class="about-pillar-cards">
                <div class="about-pillar-card slow-reveal slow-reveal-delay-1">
                  <div class="about-pillar-num">01</div>
                  <div class="about-pillar-title">Quality</div>
                </div>
                <div class="about-pillar-card slow-reveal slow-reveal-delay-2">
                  <div class="about-pillar-num">02</div>
                  <div class="about-pillar-title">Innovation</div>
                </div>
                <div class="about-pillar-card slow-reveal slow-reveal-delay-3">
                  <div class="about-pillar-num">03</div>
                  <div class="about-pillar-title">Professionalism</div>
                </div>
              </div>

              <div class="slow-reveal slow-reveal-delay-3" style="margin-top: 1.85rem;">
                <a href="#/about" class="about-story-link">
                  Discover Our Story &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Projects (Matching Live Site) -->
      <section class="projects-section">
        <div class="container">
          <div class="section-head">
            <span class="eyebrow">Our Projects</span>
            <h2>Addresses shaped around real life</h2>
            <p style="color: var(--ink-muted); font-size: 1.05rem; margin-top: 0.25rem;">
              Residential neighbourhoods and commercial destinations across Varanasi and Lucknow.
            </p>
          </div>

          <div class="projects-grid">
            ${this.renderProjectCardsHtml(projects)}
          </div>
        </div>
      </section>

      <!-- Founder Spotlight (Direct from Live Site) -->
      <section class="founder-section" id="about">
        <div class="container">
          <div class="founder-grid">
            <div class="founder-img-card slow-reveal">
              <img src="${founder.photoUrl}" alt="${founder.name}">
              <div style="padding: 1.5rem; background: #FFF;">
                <h3 style="font-size: 1.35rem; color: var(--ink);">${founder.name}</h3>
                <span class="eyebrow" style="margin-top: 0.25rem;">${founder.designation}</span>
              </div>
            </div>

            <div class="slow-reveal slow-reveal-delay-1">
              <span class="eyebrow">Founder Spotlight</span>
              <h2 style="font-size: 2.5rem; color: var(--ink); margin-top: 0.35rem;">A Vision of Lasting Integrity</h2>
              <p style="font-size: 1.05rem; color: var(--ink-muted); line-height: 1.7; margin-top: 1rem;">
                Under the visionary stewardship of Mr. Ram Gopal Singh, SSB Group has established enduring real-estate developments across Varanasi, with an unwavering focus on material discipline and timely possession.
              </p>

              <div class="quote-box">
                “${founder.quote}”
              </div>

              <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
                <a href="#/leadership" class="btn btn-outline">Meet the Leadership</a>
                <button class="btn btn-primary" onclick="window.openSiteVisitModal()">Book a Site Visit</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose SSB (6 Pillars) -->
      <section class="section" style="padding: 5.5rem 0; background: var(--sand);">
        <div class="container">
          <div class="section-head text-center" style="text-align: center; max-width: 700px; margin: 0 auto 3.5rem auto;">
            <span class="eyebrow">Why Choose SSB</span>
            <h2>Six Principles Guiding Every Site We Build</h2>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
            <div style="background:#FFF; padding: 2rem; border-radius: var(--r-lg); border: 1px solid var(--border);">
              <h3 style="font-size: 1.25rem; margin-bottom: 0.4rem; color: var(--ink);">Trust</h3>
              <p style="color: var(--ink-muted); font-size: 0.95rem; line-height: 1.6;">A name rooted in Varanasi and carried by the thousands of families who chose us first.</p>
            </div>
            <div style="background:#FFF; padding: 2rem; border-radius: var(--r-lg); border: 1px solid var(--border);">
              <h3 style="font-size: 1.25rem; margin-bottom: 0.4rem; color: var(--ink);">Experience</h3>
              <p style="color: var(--ink-muted); font-size: 0.95rem; line-height: 1.6;">Over a decade of acquiring, planning and delivering across Eastern Uttar Pradesh.</p>
            </div>
            <div style="background:#FFF; padding: 2rem; border-radius: var(--r-lg); border: 1px solid var(--border);">
              <h3 style="font-size: 1.25rem; margin-bottom: 0.4rem; color: var(--ink);">Quality</h3>
              <p style="color: var(--ink-muted); font-size: 0.95rem; line-height: 1.6;">Material discipline and modern construction systems on every site we build.</p>
            </div>
            <div style="background:#FFF; padding: 2rem; border-radius: var(--r-lg); border: 1px solid var(--border);">
              <h3 style="font-size: 1.25rem; margin-bottom: 0.4rem; color: var(--ink);">Strategic Locations</h3>
              <p style="color: var(--ink-muted); font-size: 0.95rem; line-height: 1.6;">Land selected for connectivity, civic growth and long-term capital appreciation.</p>
            </div>
            <div style="background:#FFF; padding: 2rem; border-radius: var(--r-lg); border: 1px solid var(--border);">
              <h3 style="font-size: 1.25rem; margin-bottom: 0.4rem; color: var(--ink);">Innovation</h3>
              <p style="color: var(--ink-muted); font-size: 0.95rem; line-height: 1.6;">Contemporary planning and aluminium formwork construction technology applied where it matters.</p>
            </div>
            <div style="background:#FFF; padding: 2rem; border-radius: var(--r-lg); border: 1px solid var(--border);">
              <h3 style="font-size: 1.25rem; margin-bottom: 0.4rem; color: var(--ink);">Customer First</h3>
              <p style="color: var(--ink-muted); font-size: 0.95rem; line-height: 1.6;">Transparent processes, clear documentation, and support well past possession.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Historical Journey (2013 to 2026) -->
      <section class="journey-section">
        <div class="container">
          <div class="section-head">
            <span class="eyebrow">Our Journey</span>
            <h2>Milestones from 2013 to 2026</h2>
          </div>

          <div class="timeline-list">
            ${journey.map(j => `
              <div class="timeline-card">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                  <span class="timeline-year">${j.year}</span>
                  <span class="badge ${j.status === 'Completed' ? 'badge-success' : 'badge-brand'}">${j.status}</span>
                </div>
                <h4 style="font-size: 1.15rem; color: var(--ink); margin-bottom: 0.35rem;">${j.title}</h4>
                <p style="color: var(--ink-muted); font-size: 0.88rem; line-height: 1.55;">${j.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Certifications Showcase -->
      <section class="cert-section">
        <div class="container">
          <div class="section-head text-center" style="text-align: center; max-width: 650px; margin: 0 auto;">
            <span class="eyebrow">Accreditations & Trust</span>
            <h2>Our Verified Certifications</h2>
          </div>

          <div class="cert-grid">
            ${(window.store?.state?.certifications || []).map(c => `
              <div class="cert-box">
                <span style="font-size: 2rem;">${c.icon}</span>
                <span>${c.title}</span>
                <span style="font-size: 0.75rem; color: var(--ink-muted); font-weight: 500;">${c.issuer}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Final Site Visit CTA Band -->
      <section style="background: var(--ink); color: #FFF; padding: 5.5rem 0; text-align: center;">
        <div class="container">
          <span class="eyebrow" style="color: var(--brand);">Come See What We've Built</span>
          <h2 style="color: #FFF; font-size: 2.75rem; margin: 0.5rem 0 1rem 0;">Walk a site with our team and judge for yourself.</h2>
          <p style="font-size: 1.05rem; color: rgba(255,255,255,0.8); max-width: 650px; margin: 0 auto 2.25rem auto;">
            Explore our live and upcoming developments in Varanasi and Lucknow with complimentary chauffeur pickup.
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#/projects" class="btn btn-primary btn-lg">Explore Projects</a>
            <button class="btn btn-outline btn-lg" style="color: #FFF; border-color: rgba(255,255,255,0.4);" onclick="window.openSiteVisitModal()">
              🚗 Book a Site Visit
            </button>
          </div>
        </div>
      </section>
    `;

    // Initialize Scroll Counting Animation
    if (window.initScrollCounterAnimation) {
      window.initScrollCounterAnimation();
    }

    // Initialize Leaflet Map for "Our Presence" Section
    if (window.initPresenceMap) {
      window.initPresenceMap();
    }

    // Initialize Slow Smooth Scroll Reveal Observer
    if (window.initSlowScrollReveal) {
      window.initSlowScrollReveal();
    }
  }

  renderProjectCardsHtml(projects) {
    if (!projects || projects.length === 0) {
      return '<div style="padding: 2rem; text-align: center; color: var(--ink-muted);">Loading projects...</div>';
    }

    return projects.map(p => `
      <div class="project-card">
        <div class="card-img-wrap">
          <img src="${p.featuredImage}" alt="${p.title}" loading="lazy">
          <span class="badge ${p.status === 'Completed' ? 'badge-success' : (p.status === 'Ongoing' ? 'badge-brand' : 'badge-warning')} card-badge-status">
            ${p.status}
          </span>
        </div>

        <div class="card-body">
          <div class="card-city">${p.city} · ${p.category}</div>
          <h3 class="card-title">${p.title}</h3>
          <p class="card-desc">${p.tagline}</p>
          
          <div class="card-actions">
            <a href="#/projects/${p.slug}" class="btn btn-primary btn-sm" style="flex: 1;">
              Know More & Master Plan
            </a>
            <button class="btn btn-ghost-warm btn-sm" onclick="window.openEnquiryModal('${p.id}', 'Brochure')">
              Brochure
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 2. ABOUT US PAGE
  renderAboutPage() {
    this.renderHomePage();
    const aboutElem = document.getElementById('about-ssb-section');
    if (aboutElem) aboutElem.scrollIntoView({ behavior: 'smooth' });
  }

  // 3. PROJECTS PORTFOLIO
  renderProjectsPage() {
    const projects = window.store?.state?.projects || [];
    this.appContainer.innerHTML = `
      <div style="padding: 8rem 0 5rem 0;">
        <div class="container">
          <div class="section-head text-center" style="text-align: center; max-width: 750px; margin: 0 auto 3.5rem auto;">
            <span class="eyebrow">Our Projects</span>
            <h1 style="font-size: 2.85rem; margin-top: 0.35rem;">Addresses shaped around real life</h1>
            <p style="color: var(--ink-muted); font-size: 1.05rem; margin-top: 0.5rem;">
              Residential neighbourhoods and commercial destinations across Varanasi and Lucknow.
            </p>
          </div>

          <div class="projects-grid">
            ${this.renderProjectCardsHtml(projects)}
          </div>
        </div>
      </div>
    `;
  }

  // 4. PROJECT DETAIL (WITH INTERACTIVE UPGRADES)
  renderProjectDetailPage(slug) {
    const project = window.store?.getProjectBySlug(slug);
    if (!project) {
      this.render404Page();
      return;
    }

    this.appContainer.innerHTML = `
      <section style="background: var(--ink); color: #FFF; padding: 9rem 0 4rem 0;">
        <div class="container">
          <span class="badge badge-brand" style="margin-bottom: 0.75rem;">${project.status} · ${project.city}</span>
          <h1 style="color: #FFF; font-size: 3.2rem; margin-bottom: 0.5rem;">${project.title}</h1>
          <p style="color: rgba(255,255,255,0.85); font-size: 1.15rem; max-width: 750px; margin-bottom: 2rem;">
            ${project.tagline}
          </p>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="window.openSiteVisitModal('${project.id}')">
              🚗 Book a Site Visit
            </button>
            <button class="btn btn-outline" style="color: #FFF; border-color: rgba(255,255,255,0.4);" onclick="window.openEnquiryModal('${project.id}', 'Brochure')">
              📥 Download Brochure to WhatsApp
            </button>
            <a href="#/emi-calculator" class="btn btn-ghost-warm">
              🧮 EMI Calculator
            </a>
          </div>
        </div>
      </section>

      <div class="container" style="padding: 4rem 0 6rem 0;">
        <!-- RERA Trust Box -->
        <div style="background: #FFF; border: 1px solid var(--border); border-radius: var(--r-lg); padding: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: gap: 1.5rem; margin-bottom: 3.5rem;">
          <div>
            <span class="eyebrow">Official Registration</span>
            <h3 style="font-size: 1.35rem; color: var(--ink);">100% UP-RERA Registered</h3>
            <p style="font-family: monospace; font-size: 1.05rem; color: var(--brand); font-weight: 700; margin-top: 0.25rem;">
              Registration No: ${project.reraNumber}
            </p>
          </div>
          <button class="btn btn-outline btn-sm" onclick="alert('Viewing verified UP-RERA documents for ${project.reraNumber}')">
            Verify on UP-RERA Authority
          </button>
        </div>

        <!-- Description -->
        <div style="margin-bottom: 3.5rem;">
          <h2 style="font-size: 2rem; color: var(--ink); margin-bottom: 1rem;">Project Overview</h2>
          <p style="font-size: 1.05rem; line-height: 1.75; color: var(--ink-muted);">
            ${project.description}
          </p>
        </div>

        <!-- Interactive Master Plan -->
        <div id="master-plan-sec" style="margin-bottom: 4rem;"></div>

        <!-- Interactive Floor Plans -->
        <div id="floor-plans-sec" style="margin-bottom: 4rem;"></div>

        <!-- Construction Milestones -->
        <div id="construction-sec"></div>
      </div>
    `;

    if (window.MasterPlanViewer) {
      window.masterPlanInstance = new MasterPlanViewer('master-plan-sec', project.id);
      window.masterPlanInstance.render();
    }

    if (window.FloorPlanModule) {
      window.floorPlanInstance = new FloorPlanModule('floor-plans-sec', project);
      window.floorPlanInstance.render();
    }

    if (window.ConstructionTracker) {
      window.constructionInstance = new ConstructionTracker('construction-sec', project);
      window.constructionInstance.render();
    }
  }

  // 5. WHY SSB
  renderWhySsbPage() {
    this.renderHomePage();
    window.scrollTo(0, 1400);
  }

  // 6. LEADERSHIP
  renderLeadershipPage() {
    const leaders = window.store?.state?.leadership || [];
    this.appContainer.innerHTML = `
      <div style="padding: 8rem 0 5rem 0;">
        <div class="container">
          <div class="section-head text-center" style="text-align: center; max-width: 700px; margin: 0 auto 4rem auto;">
            <span class="eyebrow">Leadership</span>
            <h1 style="font-size: 2.85rem;">The People Behind SSB</h1>
            <p style="color: var(--ink-muted); font-size: 1.05rem; margin-top: 0.5rem;">
              A founder-led company, guided by decades of combined experience in real estate, finance and delivery.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 3.5rem;">
            ${leaders.map((l, idx) => `
              <div style="display: grid; grid-template-columns: ${idx % 2 === 0 ? '0.7fr 1.3fr' : '1.3fr 0.7fr'}; gap: 3rem; align-items: center; background: #FFF; padding: 2.5rem; border-radius: var(--r-xl); border: 1px solid var(--border);">
                <div style="order: ${idx % 2 === 0 ? 1 : 2};">
                  <img src="${l.photoUrl}" alt="${l.name}" style="width: 100%; border-radius: var(--r-lg); aspect-ratio: 4/5; object-fit: cover;">
                </div>
                <div style="order: ${idx % 2 === 0 ? 2 : 1};">
                  <span class="eyebrow">${l.designation}</span>
                  <h2 style="font-size: 2.1rem; margin: 0.25rem 0 1rem 0;">${l.name}</h2>
                  <p style="font-size: 1.05rem; color: var(--ink-muted); line-height: 1.7; margin-bottom: 1.25rem;">
                    ${l.bio}
                  </p>
                  <div class="quote-box" style="margin: 0;">
                    “${l.quote}”
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // 7. MEDIA
  renderMediaPage() {
    this.appContainer.innerHTML = `
      <div style="padding: 8rem 0 5rem 0;">
        <div class="container">
          <div class="section-head text-center" style="text-align: center; max-width: 700px; margin: 0 auto 3.5rem auto;">
            <span class="eyebrow">Media & Events</span>
            <h1 style="font-size: 2.85rem;">SSB in the News</h1>
            <p style="color: var(--ink-muted); font-size: 1.05rem; margin-top: 0.5rem;">
              Press releases, media mentions, and community handover ceremonies.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.75rem;">
            <div style="background: #FFF; padding: 2rem; border-radius: var(--r-lg); border: 1px solid var(--border);">
              <span class="eyebrow">Regional Business Daily · 12 May 2026</span>
              <h3 style="font-size: 1.25rem; margin: 0.5rem 0;">SSB Group expands into Lucknow with Pratham</h3>
              <p style="font-size: 0.925rem; color: var(--ink-muted); line-height: 1.6;">The Varanasi-based developer confirms its signature mixed-use commercial development in Lucknow.</p>
            </div>
            <div style="background: #FFF; padding: 2rem; border-radius: var(--r-lg); border: 1px solid var(--border);">
              <span class="eyebrow">Construction Review · 28 Mar 2026</span>
              <h3 style="font-size: 1.25rem; margin: 0.5rem 0;">Aluminium formwork raises the bar in Varanasi housing</h3>
              <p style="font-size: 0.925rem; color: var(--ink-muted); line-height: 1.6;">A closer look at monolithic formwork construction on Shree Sai City Group Housing.</p>
            </div>
            <div style="background: #FFF; padding: 2rem; border-radius: var(--r-lg); border: 1px solid var(--border);">
              <span class="eyebrow">City Herald · 04 Feb 2026</span>
              <h3 style="font-size: 1.25rem; margin: 0.5rem 0;">Possession ceremony welcomes 120 families</h3>
              <p style="font-size: 0.925rem; color: var(--ink-muted); line-height: 1.6;">Families receive keys at the completed Shree Sai City affordable housing milestone.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 8. INVESTORS & NRI
  renderNriCornerPage() {
    this.appContainer.innerHTML = `
      <section style="background: var(--ink); color: #FFF; padding: 9rem 0 4rem 0;">
        <div class="container">
          <span class="badge badge-brand" style="margin-bottom: 0.75rem;">Global NRI & Investor Desk</span>
          <h1 style="color: #FFF; font-size: 3rem; margin-bottom: 0.75rem;">Investing in Eastern Uttar Pradesh</h1>
          <p style="color: rgba(255,255,255,0.85); font-size: 1.15rem; max-width: 750px;">
            Complete regulatory assistance under FEMA/RBI, multi-currency valuations, and remote property management for global patrons.
          </p>
        </div>
      </section>

      <div class="container" style="padding: 4rem 0 6rem 0;">
        <div id="nri-converter-container"></div>
      </div>
    `;
    if (window.NriCornerModule) {
      window.nriInstance = new NriCornerModule('nri-converter-container');
      window.nriInstance.render();
    }
  }

  // 9. EMI CALCULATOR
  renderEmiCalculatorPage() {
    this.appContainer.innerHTML = `
      <div style="padding: 8rem 0 5rem 0;">
        <div class="container">
          <div class="section-head text-center" style="text-align: center; max-width: 700px; margin: 0 auto 3.5rem auto;">
            <span class="eyebrow">Financial Calculator</span>
            <h1 style="font-size: 2.85rem;">Smart EMI & Loan Calculator</h1>
            <p style="color: var(--ink-muted); font-size: 1.05rem; margin-top: 0.5rem;">
              Calculate your monthly installment, principal vs. interest breakdown, and amortization schedule.
            </p>
          </div>
          <div id="emi-calc-mount"></div>
        </div>
      </div>
    `;
    if (window.EmiCalculator) {
      window.emiCalcInstance = new EmiCalculator('emi-calc-mount');
      window.emiCalcInstance.render();
    }
  }

  // 10. LIVE CONSTRUCTION
  renderConstructionUpdatesPage() {
    const projects = window.store?.state?.projects || [];
    this.appContainer.innerHTML = `
      <div style="padding: 8rem 0 5rem 0;">
        <div class="container">
          <div class="section-head text-center" style="text-align: center; max-width: 700px; margin: 0 auto 3.5rem auto;">
            <span class="eyebrow">Transparency</span>
            <h1 style="font-size: 2.85rem;">Live Construction Tracking</h1>
            <p style="color: var(--ink-muted); font-size: 1.05rem; margin-top: 0.5rem;">
              Verified stage-by-stage structural milestone logs for our homebuyers.
            </p>
          </div>

          ${projects.map(p => `
            <div style="margin-bottom: 3.5rem;">
              <h2 style="font-size: 1.75rem; color: var(--ink); margin-bottom: 0.25rem;">${p.title} (${p.city})</h2>
              <div id="construct-${p.id}"></div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    if (window.ConstructionTracker) {
      projects.forEach(p => new ConstructionTracker(`construct-${p.id}`, p).render());
    }
  }

  // 11. CERTIFICATIONS & TRUST
  renderCertificationsPage() {
    const certs = window.store?.state?.certifications || [];
    this.appContainer.innerHTML = `
      <div style="padding: 8rem 0 5rem 0;">
        <div class="container">
          <div class="section-head text-center" style="text-align: center; max-width: 700px; margin: 0 auto 3.5rem auto;">
            <span class="eyebrow">Legal & Compliance</span>
            <h1 style="font-size: 2.85rem;">Certifications & Registrations</h1>
            <p style="color: var(--ink-muted); font-size: 1.05rem; margin-top: 0.5rem;">
              Verified government approvals, ISO quality standards, and tourism registrations.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
            ${certs.map(c => `
              <div style="background: #FFF; border: 1px solid var(--border); border-radius: var(--r-lg); padding: 2rem; text-align: center;">
                <span style="font-size: 2.5rem;">${c.icon}</span>
                <h3 style="font-size: 1.2rem; margin: 0.75rem 0 0.25rem 0;">${c.title}</h3>
                <p style="color: var(--ink-muted); font-size: 0.85rem;">${c.issuer}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // 12. CONTACT & SITE VISIT
  renderContactPage() {
    const company = window.store?.state?.company || {
      address: "20/51-5 and 20/52-4, Sri Das Foundation Building, Cantonment, Mall Road, Varanasi",
      email: "info@ssbinfraproject.com"
    };

    this.appContainer.innerHTML = `
      <div style="padding: 8rem 0 5rem 0;">
        <div class="container">
          <div class="section-head text-center" style="text-align: center; max-width: 700px; margin: 0 auto 3.5rem auto;">
            <span class="eyebrow">Get in Touch</span>
            <h1 style="font-size: 2.85rem;">Connect with SSB Group</h1>
            <p style="color: var(--ink-muted); font-size: 1.05rem; margin-top: 0.5rem;">
              Visit our corporate office in Varanasi or request a site visit with our senior team.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
            <div>
              <div style="background: #FFF; padding: 2rem; border-radius: var(--r-lg); border: 1px solid var(--border); margin-bottom: 2rem;">
                <h3 style="font-size: 1.3rem; color: var(--ink); margin-bottom: 1rem;">Registered Office</h3>
                <p style="color: var(--ink-muted); line-height: 1.7; margin-bottom: 1.25rem;">
                  📍 <strong>${company.address}</strong>
                </p>
                <p style="color: var(--ink-muted); line-height: 1.7; margin-bottom: 0.5rem;">
                  📞 <strong>Direct Phone:</strong> <a href="tel:+919818928893" style="color: var(--brand); font-weight: 700;">+91 98189 28893</a><br>
                  ☎️ <strong>Office:</strong> 07080201752 · 0542-2500657<br>
                  ✉️ <strong>Email:</strong> <a href="mailto:${company.email}" style="color: var(--brand);">${company.email}</a>
                </p>
              </div>

              <div style="background: var(--sand-muted); padding: 2rem; border-radius: var(--r-lg); border: 1px solid var(--border);">
                <h4 style="font-size: 1.15rem; color: var(--ink); margin-bottom: 0.4rem;">Complimentary Chauffeur Site Visit</h4>
                <p style="font-size: 0.9rem; color: var(--ink-muted); line-height: 1.6; margin-bottom: 1.25rem;">
                  We provide free chauffeur pickup from Varanasi Airport or Cantonment Railway Station.
                </p>
                <button class="btn btn-primary" onclick="window.openSiteVisitModal()">
                  🚗 Book a Site Visit
                </button>
              </div>
            </div>

            <!-- Form -->
            <div style="background: #FFF; padding: 2.25rem; border-radius: var(--r-xl); border: 1px solid var(--border); box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.45rem; color: var(--ink); margin-bottom: 1.25rem;">Enquire Now</h3>
              <form onsubmit="window.handleHomeEnquirySubmit(event)">
                <div style="margin-bottom: 1rem;">
                  <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.3rem;">Full Name *</label>
                  <input type="text" id="he-name" class="form-control" style="width: 100%; padding: 0.65rem 0.9rem; border-radius: var(--r-sm); border: 1px solid var(--border);" required>
                </div>
                <div style="margin-bottom: 1rem;">
                  <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.3rem;">Mobile Number *</label>
                  <input type="tel" id="he-phone" class="form-control" style="width: 100%; padding: 0.65rem 0.9rem; border-radius: var(--r-sm); border: 1px solid var(--border);" required>
                </div>
                <div style="margin-bottom: 1rem;">
                  <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.3rem;">Email Address</label>
                  <input type="email" id="he-email" class="form-control" style="width: 100%; padding: 0.65rem 0.9rem; border-radius: var(--r-sm); border: 1px solid var(--border);">
                </div>
                <div style="margin-bottom: 1.25rem;">
                  <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.3rem;">Project of Interest</label>
                  <select id="he-project" class="form-control" style="width: 100%; padding: 0.65rem 0.9rem; border-radius: var(--r-sm); border: 1px solid var(--border);">
                    <option value="prj_sai_gaon">Sai Gaon (Varanasi)</option>
                    <option value="prj_sai_city_housing">Shree Sai City Group Housing (Varanasi)</option>
                    <option value="prj_sai_city_pmay">Shree Sai City EWS/PMAY (Varanasi)</option>
                    <option value="prj_pratham">Pratham (Lucknow)</option>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                  Enquire Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 13. ADMIN PORTAL
  renderAdminPage() {
    this.appContainer.innerHTML = `<div id="admin-mount-point"></div>`;
    if (window.AdminPortal) {
      window.adminInstance = new AdminPortal('admin-mount-point');
      window.adminInstance.render();
    }
  }

  // 14. 404
  render404Page() {
    this.appContainer.innerHTML = `
      <div style="min-height: 70vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 5rem 1.5rem;">
        <div>
          <h1 style="font-size: 4.5rem; color: var(--brand);">404</h1>
          <h2 style="font-size: 1.75rem; margin-bottom: 1rem;">Page Not Found</h2>
          <a href="#/" class="btn btn-primary">Return to Home</a>
        </div>
      </div>
    `;
  }
}

window.AppRouter = AppRouter;
