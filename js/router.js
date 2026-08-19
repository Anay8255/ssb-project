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

    // Immediately trigger scroll reveal observer & timeline fill animation
    setTimeout(() => {
      if (window.initSlowScrollReveal) window.initSlowScrollReveal();
      if (window.initTimelineScrollAnimation) window.initTimelineScrollAnimation();
    }, 40);
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
              RERA CERTIFIED · EST. 2013
            </span>
            <h1 class="hero-main-title">
              <span>Architecting Distinction.</span>
              <span>Elevating Urban Living.</span>
            </h1>
            <p class="hero-description">
              For over a decade, SSB Group has pioneered landmark residential townships and commercial destinations across Eastern Uttar Pradesh — engineered with architectural precision, structural integrity, and enduring value.
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

      <!-- ROMA BUILDERS STYLE "ABOUT US" SECTION LAYOUT -->
      <section class="roma-about-section" id="about-ssb-section">
        <div class="container">
          <!-- Background Architectural Wireframe Grids -->
          <div class="wireframe-bg-tl"></div>
          <div class="wireframe-bg-br"></div>

          <div class="roma-about-grid">
            <!-- Left Column: Floating Composite Image Collage -->
            <div class="roma-collage-wrapper slow-reveal">
              <!-- 1. Arch Image (Left) -->
              <div class="roma-arch-img-box">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=85" alt="SSB Civil Engineer" class="roma-arch-img" />
              </div>

              <!-- 2. Tall Rectangular Image (Top Right) -->
              <div class="roma-rect-img-box">
                <img src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=85" alt="SSB Construction Site" class="roma-rect-img" />
              </div>

              <!-- 3. Floating Circular Badge (Center Overlap) -->
              <div class="roma-circular-badge">
                <svg viewBox="0 0 110 110" width="106" height="106" style="position: absolute; inset: 0; animation: rotateCircle 25s linear infinite;">
                  <path id="circlePath1" d="M 55, 55 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                  <text font-size="9" font-weight="700" fill="#FFFFFF" letter-spacing="1.8">
                    <textPath href="#circlePath1" startOffset="0%">
                      YEARS OF EXPERIENCE • YEARS OF EXPERIENCE •
                    </textPath>
                  </text>
                </svg>
                <div class="circular-badge-center">
                  <span class="badge-years-num">13<sup>+</sup></span>
                </div>
              </div>

              <!-- 4. Floating Rating Card (Bottom Right) -->
              <div class="roma-rating-card">
                <div class="rating-num">4.8</div>
                <div class="rating-avatars">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Buyer" class="avatar-img" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Buyer" class="avatar-img" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Buyer" class="avatar-img" />
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80" alt="Buyer" class="avatar-img" />
                </div>
                <div class="rating-stars">★★★★★</div>
                <div class="rating-text">1200+ Satisfied Families</div>
              </div>

              <!-- 5. Mini Gallery Thumbnails (Bottom Left) -->
              <div class="roma-mini-gallery">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80" alt="Site 1" class="mini-thumb" />
                <img src="https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=300&q=80" alt="Site 2" class="mini-thumb" />
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=80" alt="Site 3" class="mini-thumb" />
              </div>
            </div>

            <!-- Right Column: Content Text & Bullet Points -->
            <div class="roma-content-wrapper slow-reveal slow-reveal-delay-1">
              <div class="roma-eyebrow-line">
                <span class="roma-eyebrow">ABOUT US</span>
                <span class="roma-accent-line"></span>
              </div>

              <h2 class="roma-heading">
                Credibility is like a city. It's not built in a day.
              </h2>

              <p class="roma-desc">
                We are one of the pioneers and leading builders in Varanasi serving as a harbinger of affordable housing by delivering quality homes without compromise.
              </p>

              <p class="roma-desc">
                Today, SSB Group's landmark developments grace the city's most strategic locations, blending superior construction quality, timeless architecture, and thoughtfully planned living spaces. Every project is enriched with world-class amenities, vibrant surroundings, and exceptional value, delivering an unmatched lifestyle experience.
              </p>

              <p class="roma-quote">
                Our journey is built on trust, driven by excellence, and inspired by the promise of a better tomorrow.
              </p>

              <div class="roma-divider"></div>

              <div class="roma-features-list">
                <div class="roma-feature-item">
                  <div class="roma-feature-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  <span class="roma-feature-text">Trusted by a growing community of happy homeowners</span>
                </div>

                <div class="roma-feature-item">
                  <div class="roma-feature-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span class="roma-feature-text">Focus on quality construction, legal clarity, and on-time delivery</span>
                </div>
              </div>

              <div style="margin-top: 1.85rem;">
                <a href="#/about" class="roma-know-more-btn">
                  Know More <span class="arrow-icon">↗</span>
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

      <!-- Historical Journey (From 2013 to today) -->
      <section id="journey" class="section-padding" style="background: var(--sand); padding: 5rem 0;">
        <div class="container">
          <div class="section-header text-center" style="text-align: center; margin-bottom: 3.5rem;">
            <span class="section-subtitle" style="color: var(--brand); font-size: 0.8rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">OUR JOURNEY</span>
            <h2 class="section-title" style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 3rem; color: var(--ink); font-weight: 600;">From 2013 to today</h2>
          </div>

          <div class="timeline-container">
            <div class="timeline-fill-line" id="timeline-fill-line"></div>
            ${journey.map(j => `
              <div class="timeline-item slow-reveal">
                <div class="timeline-dot-wrap">
                  <div class="timeline-dot"></div>
                  <div class="timeline-dot-pulse"></div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-card-header">
                    <span class="timeline-year">${j.year}</span>
                    <span class="timeline-status-badge ${j.status.toLowerCase().includes('complete') ? 'completed' : j.status.toLowerCase().includes('progress') ? 'in-progress' : 'upcoming'}">${j.status.toUpperCase()}</span>
                  </div>
                  <h3 class="timeline-card-title">${j.title}</h3>
                  <p class="timeline-card-desc">${j.desc}</p>
                </div>
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

    // Initialize Timeline Scroll Animation
    if (window.initTimelineAnimation) {
      window.initTimelineAnimation();
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

  // 2. ABOUT US PAGE (COMPREHENSIVE & REWORDED FROM SSBINFRAPROJECT.COM/ABOUT)
  renderAboutPage() {
    const journey = window.store?.state?.journey || [];
    const founder = window.store?.state?.leadership?.[0] || {
      name: "Mr. Ram Gopal Singh",
      designation: "Founder, Chairman & Managing Director",
      quote: "We do not sell buildings. We hand over the place where a family's next thirty years will happen.",
      photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
    };

    window.scrollTo(0, 0);

    this.appContainer.innerHTML = `
      <!-- Hero Header Banner with Full Cover Background Image (100vh Full Desktop Frame) -->
      <section class="page-hero-banner" style="background: linear-gradient(180deg, rgba(15, 23, 42, 0.5) 0%, rgba(15, 23, 42, 0.88) 100%), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85') center/cover no-repeat; color: #FFF;">
        <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px); background-size: 28px 28px; pointer-events: none; opacity: 0.4;"></div>
        
        <div class="container" style="position: relative; z-index: 2; width: 100%;">
          <span class="badge" style="margin-bottom: 1.25rem; font-size: 0.825rem; letter-spacing: 0.15em; text-transform: uppercase; background: rgba(4, 120, 87, 0.35); color: #A7F3D0; border: 1px solid rgba(167, 243, 208, 0.4); padding: 6px 14px; border-radius: 20px; display: inline-block;">
            About SSB Group
          </span>
          <h1 style="color: #FFF; font-size: 3.8rem; line-height: 1.12; max-width: 950px; font-family: var(--font-heading); font-weight: 700; margin-bottom: 1.25rem; text-shadow: 0 4px 20px rgba(0,0,0,0.5);">
            From a Vision Born in Varanasi to Eastern UP's Landmark Developer
          </h1>
          <p style="color: rgba(255, 255, 255, 0.9); font-size: 1.25rem; max-width: 780px; line-height: 1.7; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">
            Rooted in Varanasi's rich heritage, SSB Group has evolved into a premier real-estate and infrastructure force — pioneering master-planned townships, monolithic group housing, and commercial centers built on structural integrity and lifelong buyer trust.
          </p>
        </div>
      </section>

      <!-- ROMA BUILDERS STYLE "ABOUT US" SECTION LAYOUT -->
      <section class="roma-about-section" id="about-ssb-page-section">
        <div class="container">
          <!-- Background Architectural Wireframe Grids -->
          <div class="wireframe-bg-tl"></div>
          <div class="wireframe-bg-br"></div>

          <div class="roma-about-grid">
            <!-- Left Column: Floating Composite Image Collage -->
            <div class="roma-collage-wrapper slow-reveal">
              <!-- 1. Arch Image (Left) -->
              <div class="roma-arch-img-box">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=85" alt="SSB Civil Engineer" class="roma-arch-img" />
              </div>

              <!-- 2. Tall Rectangular Image (Top Right) -->
              <div class="roma-rect-img-box">
                <img src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=85" alt="SSB Construction Site" class="roma-rect-img" />
              </div>

              <!-- 3. Floating Circular Badge (Center Overlap) -->
              <div class="roma-circular-badge">
                <svg viewBox="0 0 110 110" width="106" height="106" style="position: absolute; inset: 0; animation: rotateCircle 25s linear infinite;">
                  <path id="circlePath2" d="M 55, 55 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                  <text font-size="9" font-weight="700" fill="#FFFFFF" letter-spacing="1.8">
                    <textPath href="#circlePath2" startOffset="0%">
                      YEARS OF EXPERIENCE • YEARS OF EXPERIENCE •
                    </textPath>
                  </text>
                </svg>
                <div class="circular-badge-center">
                  <span class="badge-years-num">13<sup>+</sup></span>
                </div>
              </div>

              <!-- 4. Floating Rating Card (Bottom Right) -->
              <div class="roma-rating-card">
                <div class="rating-num">4.8</div>
                <div class="rating-avatars">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Buyer" class="avatar-img" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Buyer" class="avatar-img" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Buyer" class="avatar-img" />
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80" alt="Buyer" class="avatar-img" />
                </div>
                <div class="rating-stars">★★★★★</div>
                <div class="rating-text">1200+ Satisfied Families</div>
              </div>

              <!-- 5. Mini Gallery Thumbnails (Bottom Left) -->
              <div class="roma-mini-gallery">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80" alt="Site 1" class="mini-thumb" />
                <img src="https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=300&q=80" alt="Site 2" class="mini-thumb" />
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=80" alt="Site 3" class="mini-thumb" />
              </div>
            </div>

            <!-- Right Column: Content Text & Bullet Points -->
            <div class="roma-content-wrapper slow-reveal slow-reveal-delay-1">
              <div class="roma-eyebrow-line">
                <span class="roma-eyebrow">ABOUT US</span>
                <span class="roma-accent-line"></span>
              </div>

              <h2 class="roma-heading">
                Credibility is like a city. It's not built in a day.
              </h2>

              <p class="roma-desc">
                We are one of the pioneers and leading builders in Varanasi serving as a harbinger of affordable housing by delivering quality homes without compromise.
              </p>

              <p class="roma-desc">
                Today, SSB Group's landmark developments grace the city's most strategic locations, blending superior construction quality, timeless architecture, and thoughtfully planned living spaces. Every project is enriched with world-class amenities, vibrant surroundings, and exceptional value, delivering an unmatched lifestyle experience.
              </p>

              <p class="roma-quote">
                Our journey is built on trust, driven by excellence, and inspired by the promise of a better tomorrow.
              </p>

              <div class="roma-divider"></div>

              <div class="roma-features-list">
                <div class="roma-feature-item">
                  <div class="roma-feature-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  <span class="roma-feature-text">Trusted by a growing community of happy homeowners</span>
                </div>

                <div class="roma-feature-item">
                  <div class="roma-feature-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span class="roma-feature-text">Focus on quality construction, legal clarity, and on-time delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Evolutionary Timeline / Where It All Began -->
      <section style="padding: 5rem 0; background: var(--sand-light);">
        <div class="container">
          <div style="text-align: center; max-width: 700px; margin: 0 auto 3.5rem auto;">
            <span class="eyebrow">OUR EVOLUTION</span>
            <h2 style="font-size: 2.4rem; color: var(--ink); margin-top: 0.35rem;">Where It All Began</h2>
            <p style="color: var(--ink-muted); font-size: 1.05rem; margin-top: 0.5rem;">
              Varanasi, 2013. A single development, a dedicated core team, and the vision of Mr. Ram Gopal Singh.
            </p>
          </div>

          <div class="timeline-container">
            <div class="timeline-fill-line" id="timeline-fill-line"></div>
            ${journey.map(j => `
              <div class="timeline-item slow-reveal">
                <div class="timeline-dot-wrap">
                  <div class="timeline-dot"></div>
                  <div class="timeline-dot-pulse"></div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-card-header">
                    <span class="timeline-year">${j.year}</span>
                    <span class="timeline-status-badge ${j.status.toLowerCase().includes('complete') ? 'completed' : j.status.toLowerCase().includes('progress') ? 'in-progress' : 'upcoming'}">${j.status.toUpperCase()}</span>
                  </div>
                  <h3 class="timeline-card-title">${j.title}</h3>
                  <p class="timeline-card-desc">${j.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Founder's Life Chapters Section -->
      <section style="padding: 5rem 0; background: #FFF;" id="founder-chapters">
        <div class="container">
          <div style="display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 3.5rem; align-items: start;">
            <div>
              <img src="${founder.photoUrl}" alt="${founder.name}" style="width: 100%; border-radius: var(--r-xl); aspect-ratio: 4/5; object-fit: cover; border: 1px solid var(--border);">
              <div style="margin-top: 1.5rem;">
                <h3 style="font-size: 1.6rem; color: var(--ink); font-family: var(--font-display);">${founder.name}</h3>
                <p style="color: var(--brand); font-weight: 600; font-size: 0.95rem; margin-top: 0.25rem;">${founder.designation}</p>
              </div>
            </div>

            <div>
              <span class="eyebrow">THE FOUNDER'S JOURNEY</span>
              <h2 style="font-size: 2.4rem; color: var(--ink); margin-top: 0.35rem; margin-bottom: 2rem;">
                A Builder's Life, Written Across Five Chapters
              </h2>

              <div style="display: flex; flex-direction: column; gap: 1.75rem;">
                <div style="border-left: 3px solid var(--brand); padding-left: 1.25rem;">
                  <h3 style="font-size: 1.25rem; color: var(--brand);">Chapter 1: The Genesis</h3>
                  <p style="font-size: 0.975rem; color: var(--ink-muted); line-height: 1.65; margin-top: 0.35rem;">
                    Born and raised in ancient Varanasi, Mr. Ram Gopal Singh was motivated by a core conviction: that Eastern Uttar Pradesh deserved thoughtfully engineered developments built with the same warmth and dedication a family invests in their own sanctuary.
                  </p>
                </div>

                <div style="border-left: 3px solid var(--brand); padding-left: 1.25rem;">
                  <h3 style="font-size: 1.25rem; color: var(--brand);">Chapter 2: The Core Vision</h3>
                  <p style="font-size: 0.975rem; color: var(--ink-muted); line-height: 1.65; margin-top: 0.35rem;">
                    To architect accessible, beautifully integrated residential neighborhoods and commercial centers that blend modern amenities with honest pricing, growing methodically without ever sacrificing craftsmanship.
                  </p>
                </div>

                <div style="border-left: 3px solid var(--brand); padding-left: 1.25rem;">
                  <h3 style="font-size: 1.25rem; color: var(--brand);">Chapter 3: Foundational Ethos</h3>
                  <p style="font-size: 0.975rem; color: var(--ink-muted); line-height: 1.65; margin-top: 0.35rem;">
                    Uncompromising material standards, customer-first service, total clarity in title deeds and contracts, environmental consciousness, and giving back to the regional community that nurtured the company.
                  </p>
                </div>

                <div style="border-left: 3px solid var(--brand); padding-left: 1.25rem;">
                  <h3 style="font-size: 1.25rem; color: var(--brand);">Chapter 4: Scaling the Enterprise</h3>
                  <p style="font-size: 0.975rem; color: var(--ink-muted); line-height: 1.65; margin-top: 0.35rem;">
                    What originated as a single residential project in Varanasi has expanded into a multi-city portfolio encompassing plotted townships, high-rise apartments, PMAY housing, and retail plazas.
                  </p>
                </div>

                <div style="border-left: 3px solid var(--brand); padding-left: 1.25rem;">
                  <h3 style="font-size: 1.25rem; color: var(--brand);">Chapter 5: Horizon & Regional Expansion</h3>
                  <p style="font-size: 0.975rem; color: var(--ink-muted); line-height: 1.65; margin-top: 0.35rem;">
                    Extending SSB Group's developmental footprint into Chandauli, Mirzapur, Ghazipur, Azamgarh, and Mau — anchored by the flagship 'Pratham' mixed-use development in Lucknow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Founder Quote Band -->
      <section style="background: linear-gradient(135deg, var(--brand) 0%, #B83A14 100%); color: #FFF; padding: 4.5rem 0; text-align: center;">
        <div class="container" style="max-width: 900px;">
          <div style="font-size: 3rem; opacity: 0.6; line-height: 1;">“</div>
          <blockquote style="font-family: var(--font-display); font-size: 2.2rem; line-height: 1.35; margin-bottom: 1.25rem;">
            “We do not sell buildings. We hand over the sanctuary where a family's next thirty years will unfold.”
          </blockquote>
          <p style="font-size: 1.05rem; opacity: 0.9; font-weight: 500;">
            — Mr. Ram Gopal Singh, Founder & Managing Director
          </p>
        </div>
      </section>

      <!-- Founder Video Library Grid -->
      <section style="padding: 5rem 0; background: var(--sand-light);">
        <div class="container">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;">
            <div>
              <span class="eyebrow">FOUNDER VIDEO LIBRARY</span>
              <h2 style="font-size: 2.2rem; color: var(--ink); margin-top: 0.25rem;">In His Own Words</h2>
            </div>
            <a href="#/media" class="btn btn-outline">Watch All Media & Videos &rarr;</a>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.75rem;">
            <div style="background: #FFF; border-radius: var(--r-lg); border: 1px solid var(--border); overflow: hidden; transition: transform 0.2s;" onmouseenter="this.style.transform='translateY(-3px)'" onmouseleave="this.style.transform='translateY(0)'">
              <div style="background: linear-gradient(135deg, #2c2523 0%, #151110 100%); height: 180px; display: flex; align-items: center; justify-content: center; position: relative;">
                <button style="width: 54px; height: 54px; border-radius: 50%; background: var(--brand); color: #FFF; border: none; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(224,84,43,0.4);" onclick="alert('Playing: Founder Message 2026')">▶</button>
                <span style="position: absolute; bottom: 10px; right: 12px; background: rgba(0,0,0,0.7); color: #FFF; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">6:12</span>
              </div>
              <div style="padding: 1.25rem;">
                <span class="eyebrow" style="font-size: 0.75rem;">FOUNDER MESSAGES</span>
                <h3 style="font-size: 1.15rem; color: var(--ink); margin-top: 0.25rem;">Founder's Message 2026</h3>
                <p style="font-size: 0.875rem; color: var(--ink-muted); margin-top: 0.25rem;">Mr. Ram Gopal Singh</p>
              </div>
            </div>

            <div style="background: #FFF; border-radius: var(--r-lg); border: 1px solid var(--border); overflow: hidden; transition: transform 0.2s;" onmouseenter="this.style.transform='translateY(-3px)'" onmouseleave="this.style.transform='translateY(0)'">
              <div style="background: linear-gradient(135deg, #2c2523 0%, #151110 100%); height: 180px; display: flex; align-items: center; justify-content: center; position: relative;">
                <button style="width: 54px; height: 54px; border-radius: 50%; background: var(--brand); color: #FFF; border: none; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(224,84,43,0.4);" onclick="alert('Playing: Sai Gaon Township Walkthrough')">▶</button>
                <span style="position: absolute; bottom: 10px; right: 12px; background: rgba(0,0,0,0.7); color: #FFF; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">4:38</span>
              </div>
              <div style="padding: 1.25rem;">
                <span class="eyebrow" style="font-size: 0.75rem;">PROJECT VISITS</span>
                <h3 style="font-size: 1.15rem; color: var(--ink); margin-top: 0.25rem;">Walkthrough — Sai Gaon Township</h3>
                <p style="font-size: 0.875rem; color: var(--ink-muted); margin-top: 0.25rem;">On-Site Inspection with MD</p>
              </div>
            </div>

            <div style="background: #FFF; border-radius: var(--r-lg); border: 1px solid var(--border); overflow: hidden; transition: transform 0.2s;" onmouseenter="this.style.transform='translateY(-3px)'" onmouseleave="this.style.transform='translateY(0)'">
              <div style="background: linear-gradient(135deg, #2c2523 0%, #151110 100%); height: 180px; display: flex; align-items: center; justify-content: center; position: relative;">
                <button style="width: 54px; height: 54px; border-radius: 50%; background: var(--brand); color: #FFF; border: none; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(224,84,43,0.4);" onclick="alert('Playing: Pratham Lucknow Launch')">▶</button>
                <span style="position: absolute; bottom: 10px; right: 12px; background: rgba(0,0,0,0.7); color: #FFF; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">9:05</span>
              </div>
              <div style="padding: 1.25rem;">
                <span class="eyebrow" style="font-size: 0.75rem;">PROJECT LAUNCHES</span>
                <h3 style="font-size: 1.15rem; color: var(--ink); margin-top: 0.25rem;">Launch — Pratham, Lucknow</h3>
                <p style="font-size: 0.875rem; color: var(--ink-muted); margin-top: 0.25rem;">Commercial Plaza Keynote Address</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Four Non-Negotiables -->
      <section style="padding: 5rem 0; background: #FFF;">
        <div class="container">
          <div style="text-align: center; max-width: 700px; margin: 0 auto 3rem auto;">
            <span class="eyebrow">FOUNDER'S PRINCIPLES</span>
            <h2 style="font-size: 2.4rem; color: var(--ink); margin-top: 0.35rem;">Four Non-Negotiables</h2>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
            <div style="background: var(--sand-light); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 2rem; text-align: center;">
              <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--brand); color: #FFF; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 1.25rem auto;">🛡️</div>
              <h3 style="font-size: 1.3rem; color: var(--ink); margin-bottom: 0.5rem;">Unwavering Trust</h3>
              <p style="font-size: 0.9rem; color: var(--ink-muted); line-height: 1.6;">100% UP-RERA registered projects, verified title deeds, and clean legal documentation.</p>
            </div>

            <div style="background: var(--sand-light); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 2rem; text-align: center;">
              <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--brand); color: #FFF; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 1.25rem auto;">✨</div>
              <h3 style="font-size: 1.3rem; color: var(--ink); margin-bottom: 0.5rem;">Superior Quality</h3>
              <p style="font-size: 0.9rem; color: var(--ink-muted); line-height: 1.6;">Monolithic concrete formwork, branded fittings, and structural longevity.</p>
            </div>

            <div style="background: var(--sand-light); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 2rem; text-align: center;">
              <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--brand); color: #FFF; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 1.25rem auto;">🤝</div>
              <h3 style="font-size: 1.3rem; color: var(--ink); margin-bottom: 0.5rem;">Buyer-Centric Care</h3>
              <p style="font-size: 0.9rem; color: var(--ink-muted); line-height: 1.6;">Chauffeur site visit pickups, live construction tracking, and transparent pricing.</p>
            </div>

            <div style="background: var(--sand-light); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 2rem; text-align: center;">
              <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--brand); color: #FFF; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 1.25rem auto;">👥</div>
              <h3 style="font-size: 1.3rem; color: var(--ink); margin-bottom: 0.5rem;">Regional Impact</h3>
              <p style="font-size: 0.9rem; color: var(--ink-muted); line-height: 1.6;">Creating sustainable urban infrastructure and job opportunities across Eastern UP.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom Call to Action Banner -->
      <section style="background: var(--ink); color: #FFF; padding: 6rem 0; text-align: center; position: relative;">
        <div class="container" style="max-width: 750px;">
          <h2 style="color: #FFF; font-size: 2.6rem; margin-bottom: 1rem; font-family: var(--font-display);">
            Come Experience What We've Built
          </h2>
          <p style="color: rgba(255,255,255,0.85); font-size: 1.15rem; margin-bottom: 2rem;">
            Schedule an exclusive site visit with our team, walk our developments, and evaluate our construction quality firsthand.
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#/projects" class="btn btn-primary" style="padding: 0.85rem 2rem; font-size: 1rem;">Explore Projects</a>
            <button class="btn btn-outline" style="color: #FFF; border-color: rgba(255,255,255,0.4); padding: 0.85rem 2rem; font-size: 1rem;" onclick="window.openSiteVisitModal()">
              🚗 Book a Chauffeur Site Visit
            </button>
          </div>
        </div>
      </section>
    `;
  }

  // 3. PROJECTS PORTFOLIO
  renderProjectsPage() {
    const projects = window.store?.state?.projects || [];
    this.appContainer.innerHTML = `
      <section class="page-hero-banner" style="background: linear-gradient(180deg, rgba(15, 23, 42, 0.55) 0%, rgba(15, 23, 42, 0.88) 100%), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85') center/cover no-repeat; color: #FFF; padding: 10rem 0 5rem 0; position: relative; min-height: 48vh; display: flex; align-items: flex-end; overflow: hidden; margin-bottom: 4rem;">
        <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px); background-size: 28px 28px; pointer-events: none; opacity: 0.4;"></div>
        <div class="container" style="position: relative; z-index: 2; width: 100%;">
          <span class="badge" style="margin-bottom: 1rem; font-size: 0.825rem; letter-spacing: 0.15em; text-transform: uppercase; background: rgba(4, 120, 87, 0.35); color: #A7F3D0; border: 1px solid rgba(167, 243, 208, 0.4); padding: 6px 14px; border-radius: 20px;">
            PORTFOLIO & TOWNSHIPS
          </span>
          <h1 style="color: #FFF; font-size: 3.2rem; line-height: 1.15; max-width: 800px; font-family: var(--font-heading); font-weight: 700; margin-bottom: 1rem; text-shadow: 0 4px 20px rgba(0,0,0,0.5);">
            Addresses Shaped Around Real Life
          </h1>
          <p style="color: rgba(255, 255, 255, 0.9); font-size: 1.15rem; max-width: 680px; line-height: 1.7; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">
            Explore master-planned residential townships, monolithic group housing developments, and integrated commercial centers across Varanasi and Lucknow.
          </p>
        </div>
      </section>

      <div style="padding-bottom: 6rem;">
        <div class="container">
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
      <section class="page-hero-banner" style="background: linear-gradient(180deg, rgba(15, 23, 42, 0.5) 0%, rgba(15, 23, 42, 0.9) 100%), url('${project.heroImage || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85'}') center/cover no-repeat; color: #FFF; padding: 10rem 0 5rem 0; position: relative; min-height: 52vh; display: flex; align-items: flex-end; overflow: hidden;">
        <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px); background-size: 28px 28px; pointer-events: none; opacity: 0.4;"></div>
        <div class="container" style="position: relative; z-index: 2; width: 100%;">
          <span class="badge" style="margin-bottom: 1rem; font-size: 0.825rem; letter-spacing: 0.15em; text-transform: uppercase; background: rgba(4, 120, 87, 0.35); color: #A7F3D0; border: 1px solid rgba(167, 243, 208, 0.4); padding: 6px 14px; border-radius: 20px;">
            ${project.status} · ${project.city}
          </span>
          <h1 style="color: #FFF; font-size: 3.4rem; line-height: 1.12; font-family: var(--font-heading); font-weight: 700; margin-bottom: 0.75rem; text-shadow: 0 4px 20px rgba(0,0,0,0.5);">${project.title}</h1>
          <p style="color: rgba(255,255,255,0.92); font-size: 1.2rem; max-width: 780px; margin-bottom: 2rem; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">
            ${project.tagline}
          </p>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="window.openSiteVisitModal('${project.id}')">
              🚗 Book a Site Visit
            </button>
            <button class="btn btn-outline" style="color: #FFF; border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.1); backdrop-filter: blur(8px);" onclick="window.openEnquiryModal('${project.id}', 'Brochure')">
              📥 Download Brochure to WhatsApp
            </button>
            <a href="#/emi-calculator" class="btn btn-ghost-warm" style="color: #FFF; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px);">
              🧮 EMI Calculator
            </a>
          </div>
        </div>
      </section>

      <div class="container" style="padding: 4rem 0 6rem 0;">
        <!-- RERA Trust Box -->
        <div style="background: #FFF; border: 1px solid var(--border); border-radius: var(--r-lg); padding: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 3.5rem;">
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
      <section class="page-hero-banner" style="background: linear-gradient(180deg, rgba(15, 23, 42, 0.55) 0%, rgba(15, 23, 42, 0.88) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85') center/cover no-repeat; color: #FFF; padding: 10rem 0 5rem 0; position: relative; min-height: 48vh; display: flex; align-items: flex-end; overflow: hidden; margin-bottom: 4rem;">
        <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px); background-size: 28px 28px; pointer-events: none; opacity: 0.4;"></div>
        <div class="container" style="position: relative; z-index: 2; width: 100%;">
          <span class="badge" style="margin-bottom: 1rem; font-size: 0.825rem; letter-spacing: 0.15em; text-transform: uppercase; background: rgba(4, 120, 87, 0.35); color: #A7F3D0; border: 1px solid rgba(167, 243, 208, 0.4); padding: 6px 14px; border-radius: 20px;">
            FOUNDER & LEADERSHIP
          </span>
          <h1 style="color: #FFF; font-size: 3.2rem; line-height: 1.15; max-width: 800px; font-family: var(--font-heading); font-weight: 700; margin-bottom: 1rem; text-shadow: 0 4px 20px rgba(0,0,0,0.5);">
            The Visionaries Behind SSB
          </h1>
          <p style="color: rgba(255, 255, 255, 0.9); font-size: 1.15rem; max-width: 680px; line-height: 1.7; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">
            A founder-led company guided by decades of combined experience in civil engineering, finance, and master planning.
          </p>
        </div>
      </section>

      <div style="padding-bottom: 6rem;">
        <div class="container">
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
      <section class="page-hero-banner" style="background: linear-gradient(180deg, rgba(15, 23, 42, 0.55) 0%, rgba(15, 23, 42, 0.88) 100%), url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85') center/cover no-repeat; color: #FFF; padding: 10rem 0 5rem 0; position: relative; min-height: 48vh; display: flex; align-items: flex-end; overflow: hidden; margin-bottom: 4rem;">
        <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px); background-size: 28px 28px; pointer-events: none; opacity: 0.4;"></div>
        <div class="container" style="position: relative; z-index: 2; width: 100%;">
          <span class="badge" style="margin-bottom: 1rem; font-size: 0.825rem; letter-spacing: 0.15em; text-transform: uppercase; background: rgba(4, 120, 87, 0.35); color: #A7F3D0; border: 1px solid rgba(167, 243, 208, 0.4); padding: 6px 14px; border-radius: 20px;">
            PRESS & ANNOUNCEMENTS
          </span>
          <h1 style="color: #FFF; font-size: 3.2rem; line-height: 1.15; max-width: 800px; font-family: var(--font-heading); font-weight: 700; margin-bottom: 1rem; text-shadow: 0 4px 20px rgba(0,0,0,0.5);">
            SSB Group in the News
          </h1>
          <p style="color: rgba(255, 255, 255, 0.9); font-size: 1.15rem; max-width: 680px; line-height: 1.7; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">
            Press releases, media features, regional development updates, and home handover ceremonies.
          </p>
        </div>
      </section>

      <div style="padding-bottom: 6rem;">
        <div class="container">
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
      <section class="page-hero-banner" style="background: linear-gradient(180deg, rgba(15, 23, 42, 0.55) 0%, rgba(15, 23, 42, 0.88) 100%), url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=2000&q=85') center/cover no-repeat; color: #FFF; padding: 10rem 0 5rem 0; position: relative; min-height: 50vh; display: flex; align-items: flex-end; overflow: hidden;">
        <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px); background-size: 28px 28px; pointer-events: none; opacity: 0.4;"></div>
        <div class="container" style="position: relative; z-index: 2; width: 100%;">
          <span class="badge" style="margin-bottom: 1rem; font-size: 0.825rem; letter-spacing: 0.15em; text-transform: uppercase; background: rgba(4, 120, 87, 0.35); color: #A7F3D0; border: 1px solid rgba(167, 243, 208, 0.4); padding: 6px 14px; border-radius: 20px;">
            GLOBAL PATRONS & INVESTORS
          </span>
          <h1 style="color: #FFF; font-size: 3.2rem; line-height: 1.15; max-width: 800px; font-family: var(--font-heading); font-weight: 700; margin-bottom: 1rem; text-shadow: 0 4px 20px rgba(0,0,0,0.5);">
            Investing in Eastern Uttar Pradesh
          </h1>
          <p style="color: rgba(255, 255, 255, 0.9); font-size: 1.15rem; max-width: 720px; line-height: 1.7; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">
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
      <section class="page-hero-banner" style="background: linear-gradient(180deg, rgba(15, 23, 42, 0.55) 0%, rgba(15, 23, 42, 0.88) 100%), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=85') center/cover no-repeat; color: #FFF; padding: 10rem 0 5rem 0; position: relative; min-height: 48vh; display: flex; align-items: flex-end; overflow: hidden; margin-bottom: 4rem;">
        <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px); background-size: 28px 28px; pointer-events: none; opacity: 0.4;"></div>
        <div class="container" style="position: relative; z-index: 2; width: 100%;">
          <span class="badge" style="margin-bottom: 1rem; font-size: 0.825rem; letter-spacing: 0.15em; text-transform: uppercase; background: rgba(4, 120, 87, 0.35); color: #A7F3D0; border: 1px solid rgba(167, 243, 208, 0.4); padding: 6px 14px; border-radius: 20px;">
            FINANCIAL ADVISORY
          </span>
          <h1 style="color: #FFF; font-size: 3.2rem; line-height: 1.15; max-width: 800px; font-family: var(--font-heading); font-weight: 700; margin-bottom: 1rem; text-shadow: 0 4px 20px rgba(0,0,0,0.5);">
            Smart EMI & Loan Calculator
          </h1>
          <p style="color: rgba(255, 255, 255, 0.9); font-size: 1.15rem; max-width: 680px; line-height: 1.7; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">
            Calculate your monthly installment, principal vs. interest breakdown, and amortization schedule.
          </p>
        </div>
      </section>

      <div style="padding-bottom: 6rem;">
        <div class="container">
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
      <section class="page-hero-banner" style="background: linear-gradient(180deg, rgba(15, 23, 42, 0.55) 0%, rgba(15, 23, 42, 0.88) 100%), url('https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=2000&q=85') center/cover no-repeat; color: #FFF; padding: 10rem 0 5rem 0; position: relative; min-height: 48vh; display: flex; align-items: flex-end; overflow: hidden; margin-bottom: 4rem;">
        <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px); background-size: 28px 28px; pointer-events: none; opacity: 0.4;"></div>
        <div class="container" style="position: relative; z-index: 2; width: 100%;">
          <span class="badge" style="margin-bottom: 1rem; font-size: 0.825rem; letter-spacing: 0.15em; text-transform: uppercase; background: rgba(4, 120, 87, 0.35); color: #A7F3D0; border: 1px solid rgba(167, 243, 208, 0.4); padding: 6px 14px; border-radius: 20px;">
            TRANSPARENCY & TRACKING
          </span>
          <h1 style="color: #FFF; font-size: 3.2rem; line-height: 1.15; max-width: 800px; font-family: var(--font-heading); font-weight: 700; margin-bottom: 1rem; text-shadow: 0 4px 20px rgba(0,0,0,0.5);">
            Live Construction Tracking
          </h1>
          <p style="color: rgba(255, 255, 255, 0.9); font-size: 1.15rem; max-width: 680px; line-height: 1.7; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">
            Verified stage-by-stage structural milestone logs for our homebuyers.
          </p>
        </div>
      </section>

      <div style="padding-bottom: 6rem;">
        <div class="container">
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
      <section class="page-hero-banner" style="background: linear-gradient(180deg, rgba(15, 23, 42, 0.55) 0%, rgba(15, 23, 42, 0.88) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85') center/cover no-repeat; color: #FFF; padding: 10rem 0 5rem 0; position: relative; min-height: 48vh; display: flex; align-items: flex-end; overflow: hidden; margin-bottom: 4rem;">
        <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px); background-size: 28px 28px; pointer-events: none; opacity: 0.4;"></div>
        <div class="container" style="position: relative; z-index: 2; width: 100%;">
          <span class="badge" style="margin-bottom: 1rem; font-size: 0.825rem; letter-spacing: 0.15em; text-transform: uppercase; background: rgba(4, 120, 87, 0.35); color: #A7F3D0; border: 1px solid rgba(167, 243, 208, 0.4); padding: 6px 14px; border-radius: 20px;">
            COMPLIANCE & STANDARDS
          </span>
          <h1 style="color: #FFF; font-size: 3.2rem; line-height: 1.15; max-width: 800px; font-family: var(--font-heading); font-weight: 700; margin-bottom: 1rem; text-shadow: 0 4px 20px rgba(0,0,0,0.5);">
            Certifications & Legal Compliance
          </h1>
          <p style="color: rgba(255, 255, 255, 0.9); font-size: 1.15rem; max-width: 680px; line-height: 1.7; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">
            Verified government approvals, ISO quality standards, UP-RERA registrations, and tourism accreditations.
          </p>
        </div>
      </section>

      <div style="padding-bottom: 6rem;">
        <div class="container">
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
      <section class="page-hero-banner" style="background: linear-gradient(180deg, rgba(15, 23, 42, 0.55) 0%, rgba(15, 23, 42, 0.88) 100%), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85') center/cover no-repeat; color: #FFF; padding: 10rem 0 5rem 0; position: relative; min-height: 48vh; display: flex; align-items: flex-end; overflow: hidden; margin-bottom: 4rem;">
        <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px); background-size: 28px 28px; pointer-events: none; opacity: 0.4;"></div>
        <div class="container" style="position: relative; z-index: 2; width: 100%;">
          <span class="badge" style="margin-bottom: 1rem; font-size: 0.825rem; letter-spacing: 0.15em; text-transform: uppercase; background: rgba(4, 120, 87, 0.35); color: #A7F3D0; border: 1px solid rgba(167, 243, 208, 0.4); padding: 6px 14px; border-radius: 20px;">
            HEADQUARTERS & DESK
          </span>
          <h1 style="color: #FFF; font-size: 3.2rem; line-height: 1.15; max-width: 800px; font-family: var(--font-heading); font-weight: 700; margin-bottom: 1rem; text-shadow: 0 4px 20px rgba(0,0,0,0.5);">
            Connect with SSB Group
          </h1>
          <p style="color: rgba(255, 255, 255, 0.9); font-size: 1.15rem; max-width: 680px; line-height: 1.7; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">
            Visit our corporate office in Varanasi Cantonment or schedule a site visit with our team.
          </p>
        </div>
      </section>

      <div style="padding-bottom: 6rem;">
        <div class="container">

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
