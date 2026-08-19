/**
 * SSB GROUP — MAIN CONTROLLER & APPLICATION INITIALIZER
 * Guaranteed immediate mounting, animated counters, Leaflet map & slow scroll reveals
 */

// 1. Leaflet Interactive Presence Map
window.initPresenceMap = function() {
  const mapElem = document.getElementById('presence-leaflet-map');
  if (!mapElem || !window.L) return;

  // Prevent multiple initializations on the same container
  if (mapElem._leaflet_id) {
    return;
  }

  try {
    // Center of Eastern Uttar Pradesh (spanning Lucknow, Prayagraj, Varanasi, Gorakhpur)
    const map = L.map('presence-leaflet-map', {
      center: [26.05, 82.15],
      zoom: 7.2,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: false
    });

    // Crisp OpenStreetMap Carto Style Tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Custom Sapphire Blue SVG Pin Icon
    const customIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `
        <div style="
          width: 32px;
          height: 32px;
          border-radius: 50% 50% 50% 0;
          background: #2563EB;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.45);
          border: 2px solid #FFFFFF;
        ">
          <div style="width: 10px; height: 10px; background: #FFFFFF; border-radius: 50%;"></div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    // Varanasi Marker
    const varanasiMarker = L.marker([25.3176, 82.9739], { icon: customIcon }).addTo(map);
    varanasiMarker.bindPopup(`
      <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 4px;">
        <strong style="color: #2563EB; font-size: 1.05rem;">Varanasi (Headquarters)</strong><br>
        <span style="font-size: 0.85rem; color: #0F172A;">• Sai Gaon (Residential)<br>• Shree Sai City Group Housing<br>• Shree Sai City EWS / PMAY</span>
      </div>
    `);

    // Lucknow Marker
    const lucknowMarker = L.marker([26.8467, 80.9462], { icon: customIcon }).addTo(map);
    lucknowMarker.bindPopup(`
      <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 4px;">
        <strong style="color: #2563EB; font-size: 1.05rem;">Lucknow (New Expansion)</strong><br>
        <span style="font-size: 0.85rem; color: #0F172A;">• Pratham (Commercial & Mixed-Use)</span>
      </div>
    `);

    // Invalidate map size after render to ensure tiles fit container cleanly
    setTimeout(() => {
      map.invalidateSize();
    }, 400);

  } catch (err) {
    console.warn("Leaflet Map init note:", err);
  }
};

// 2. Slow Smooth Scroll Reveal Observer ("appear little bit slow when someone scrolls")
window.initSlowScrollReveal = function() {
  const elementsToReveal = document.querySelectorAll('.slow-reveal:not(.revealed)');
  if (!elementsToReveal || elementsToReveal.length === 0) return;

  // Immediately reveal elements that are already within or near the viewport
  elementsToReveal.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100 && rect.bottom > -50) {
      el.classList.add('revealed');
    }
  });

  const remaining = document.querySelectorAll('.slow-reveal:not(.revealed)');
  if (remaining.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '100px 0px 100px 0px'
  });

  remaining.forEach(el => observer.observe(el));
};

// 2b. Scroll-Driven Timeline Line Fill & Node Animation
window.initTimelineScrollAnimation = function() {
  const timelineContainer = document.querySelector('.timeline-container');
  const fillLine = document.getElementById('timeline-fill-line');
  if (!timelineContainer || !fillLine) return;

  const updateTimelineProgress = () => {
    const rect = timelineContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate scroll progress through timeline
    const totalHeight = rect.height;
    const startPoint = windowHeight * 0.7;
    const currentScrollPos = startPoint - rect.top;
    
    let progress = Math.max(0, Math.min(1, currentScrollPos / totalHeight));
    fillLine.style.height = `${(progress * 100).toFixed(1)}%`;

    // Activate individual node dots and cards as fill line reaches them
    const items = timelineContainer.querySelectorAll('.timeline-item');
    items.forEach(item => {
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < windowHeight * 0.75) {
        item.classList.add('active');
        item.classList.add('revealed');
      }
    });
  };

  window.removeEventListener('scroll', window._timelineScrollHandler || function(){});
  window._timelineScrollHandler = updateTimelineProgress;
  window.addEventListener('scroll', window._timelineScrollHandler, { passive: true });
  updateTimelineProgress();
};

// 3. Scroll-Triggered Animated Counter Engine
window.initScrollCounterAnimation = function() {
  const statsSection = document.getElementById('stats-counter-strip');
  if (!statsSection) return;

  const counterElements = statsSection.querySelectorAll('.stat-counter-num');
  if (!counterElements || counterElements.length === 0) return;

  counterElements.forEach(el => {
    const suffix = el.getAttribute('data-suffix') || '';
    el.textContent = '0' + suffix;
  });

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        
        counterElements.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'), 10) || 0;
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 2200; // 2.2 seconds smooth run
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // easeOutExpo for silky smooth deceleration
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentVal = Math.floor(easeProgress * target);

            el.textContent = currentVal + (progress === 1 ? suffix : '+');

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = target + suffix;
            }
          }

          requestAnimationFrame(updateCounter);
        });

        observer.unobserve(statsSection);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(statsSection);
};

function initApp() {
  // Initialize Client Router
  if (!window.router) {
    window.router = new AppRouter('app-view');
  }

  // Sticky Header Scroll Effect
  const header = document.querySelector('.site-header');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 40) {
          header?.classList.add('scrolled');
        } else {
          header?.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Global ESC Key Listener to Close Modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay').forEach(m => m.remove());
    }
  });

  // Trigger animations & map
  setTimeout(() => {
    if (window.initScrollCounterAnimation) window.initScrollCounterAnimation();
    if (window.initPresenceMap) window.initPresenceMap();
    if (window.initTimelineAnimation) window.initTimelineAnimation();
  }, 150);
}

// Timeline Scroll Reveal Observer
window.initTimelineAnimation = function() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (!timelineItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  timelineItems.forEach(item => observer.observe(item));
};

// Ensure execution whether DOMContentLoaded already fired or not
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Toast Notification Engine
window.showToast = function(message, type = 'info') {
  const existing = document.getElementById('global-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'global-toast';
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translate(-50%, 0);
    background: var(--ink);
    color: #FFF;
    padding: 0.85rem 1.5rem;
    border-radius: var(--r-pill);
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--brand);
    z-index: 10000;
    font-size: 0.9rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    animation: toastSlide var(--dur-norm) var(--ease) forwards;
  `;

  let icon = '🔔';
  if (type === 'success') icon = '✅';
  if (type === 'error') icon = '⚠️';

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 250ms ease';
    setTimeout(() => toast.remove(), 250);
  }, 4000);
};

// Universal Brochure Modal
window.openEnquiryModal = function(projectId = '', unitOrPurpose = '') {
  document.querySelectorAll('.modal-overlay').forEach(m => m.remove());

  const projects = window.store?.state?.projects || [];
  const projectOptions = projects.map(p => `
    <option value="${p.id}" ${p.id === projectId ? 'selected' : ''}>${p.title} (${p.city})</option>
  `).join('');

  const modalHtml = `
    <div class="modal-overlay" id="universal-enquiry-modal" style="display: flex; position: fixed; inset: 0; background: rgba(27, 25, 24, 0.75); backdrop-filter: blur(8px); z-index: 9999; align-items: center; justify-content: center; padding: 1.25rem;" onclick="if(event.target===this)this.remove()">
      <div class="fade-in" style="background: #FFF; border-radius: var(--r-xl); padding: 2.25rem; max-width: 500px; width: 100%; position: relative; box-shadow: var(--shadow-xl); border: 1px solid var(--border);">
        <button onclick="document.getElementById('universal-enquiry-modal').remove()" style="position: absolute; top: 1rem; right: 1rem; background: transparent; border: none; font-size: 1.5rem; cursor: pointer; color: var(--ink-muted);" aria-label="Close">&times;</button>
        
        <span class="badge badge-brand" style="margin-bottom: 0.4rem;">Official E-Brochure</span>
        <h3 style="font-size: 1.45rem; color: var(--ink); margin-bottom: 0.35rem;">Download Project Brochure</h3>
        <p style="font-size: 0.85rem; color: var(--ink-muted); margin-bottom: 1.25rem;">Receive the official architectural plan, specs & RERA price sheet via WhatsApp.</p>

        <form onsubmit="window.handleUniversalModalSubmit(event, '${unitOrPurpose}')">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.3rem;">Full Name *</label>
            <input type="text" id="modal-name" class="form-control" style="width: 100%; padding: 0.65rem 0.9rem; border-radius: var(--r-sm); border: 1px solid var(--border);" placeholder="e.g. Alok Srivastava" required>
          </div>

          <div style="margin-bottom: 1rem;">
            <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.3rem;">WhatsApp Mobile *</label>
            <input type="tel" id="modal-phone" class="form-control" style="width: 100%; padding: 0.65rem 0.9rem; border-radius: var(--r-sm); border: 1px solid var(--border);" placeholder="e.g. +91 98189 28893" required>
          </div>

          <div style="margin-bottom: 1.25rem;">
            <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.3rem;">Selected Project</label>
            <select id="modal-project" class="form-control" style="width: 100%; padding: 0.65rem 0.9rem; border-radius: var(--r-sm); border: 1px solid var(--border);">
              ${projectOptions}
            </select>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
            📥 Send Brochure to WhatsApp
          </button>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
};

// Site Visit Modal
window.openSiteVisitModal = function(projectId = '') {
  document.querySelectorAll('.modal-overlay').forEach(m => m.remove());

  const projects = window.store?.state?.projects || [];
  const projectOptions = projects.map(p => `
    <option value="${p.id}" ${p.id === projectId ? 'selected' : ''}>${p.title} (${p.city})</option>
  `).join('');

  const modalHtml = `
    <div class="modal-overlay" id="site-visit-booking-modal" style="display: flex; position: fixed; inset: 0; background: rgba(27, 25, 24, 0.75); backdrop-filter: blur(8px); z-index: 9999; align-items: center; justify-content: center; padding: 1.25rem;" onclick="if(event.target===this)this.remove()">
      <div class="fade-in" style="background: #FFF; border-radius: var(--r-xl); padding: 2.25rem; max-width: 520px; width: 100%; position: relative; box-shadow: var(--shadow-xl); border: 1px solid var(--border); max-height: 90vh; overflow-y: auto;">
        <button onclick="document.getElementById('site-visit-booking-modal').remove()" style="position: absolute; top: 1rem; right: 1rem; background: transparent; border: none; font-size: 1.5rem; cursor: pointer; color: var(--ink-muted);" aria-label="Close">&times;</button>
        
        <span class="badge badge-success" style="margin-bottom: 0.4rem;">Complimentary Chauffeur</span>
        <h3 style="font-size: 1.45rem; color: var(--ink); margin-bottom: 0.35rem;">Book a Free Site Visit</h3>
        <p style="font-size: 0.85rem; color: var(--ink-muted); margin-bottom: 1.25rem;">We provide private cab pickup from anywhere in Varanasi or Lucknow.</p>

        <form onsubmit="window.handleSiteVisitSubmit(event)">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.3rem;">Full Name *</label>
            <input type="text" id="sv-name" class="form-control" style="width: 100%; padding: 0.65rem 0.9rem; border-radius: var(--r-sm); border: 1px solid var(--border);" required>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem;">
            <div>
              <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.3rem;">Phone Number *</label>
              <input type="tel" id="sv-phone" class="form-control" style="width: 100%; padding: 0.65rem 0.9rem; border-radius: var(--r-sm); border: 1px solid var(--border);" required>
            </div>
            <div>
              <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.3rem;">Project</label>
              <select id="sv-project" class="form-control" style="width: 100%; padding: 0.65rem 0.9rem; border-radius: var(--r-sm); border: 1px solid var(--border);">
                ${projectOptions}
              </select>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem;">
            <div>
              <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.3rem;">Date *</label>
              <input type="date" id="sv-date" class="form-control" style="width: 100%; padding: 0.65rem 0.9rem; border-radius: var(--r-sm); border: 1px solid var(--border);" value="${new Date().toISOString().split('T')[0]}" required>
            </div>
            <div>
              <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.3rem;">Time Slot</label>
              <select id="sv-time" class="form-control" style="width: 100%; padding: 0.65rem 0.9rem; border-radius: var(--r-sm); border: 1px solid var(--border);">
                <option>10:30 AM - 12:00 PM</option>
                <option>02:00 PM - 03:30 PM</option>
                <option>04:30 PM - 06:00 PM</option>
              </select>
            </div>
          </div>

          <div style="margin-bottom: 1rem;">
            <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.3rem;">Pickup Address</label>
            <input type="text" id="sv-address" class="form-control" style="width: 100%; padding: 0.65rem 0.9rem; border-radius: var(--r-sm); border: 1px solid var(--border);" placeholder="e.g. Cantonment, Hotel Taj, or Airport" required>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
            🚗 Confirm Site Visit
          </button>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
};

// 60-Second Callback Modal
window.openCallbackModal = function() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.remove());

  const modalHtml = `
    <div class="modal-overlay" id="callback-quick-modal" style="display: flex; position: fixed; inset: 0; background: rgba(27, 25, 24, 0.75); backdrop-filter: blur(8px); z-index: 9999; align-items: center; justify-content: center; padding: 1.25rem;" onclick="if(event.target===this)this.remove()">
      <div class="fade-in" style="background: #FFF; border-radius: var(--r-xl); padding: 2.25rem; max-width: 440px; width: 100%; position: relative; box-shadow: var(--shadow-xl); border: 1px solid var(--border);">
        <button onclick="document.getElementById('callback-quick-modal').remove()" style="position: absolute; top: 1rem; right: 1rem; background: transparent; border: none; font-size: 1.5rem; cursor: pointer; color: var(--ink-muted);" aria-label="Close">&times;</button>
        
        <span class="badge badge-brand" style="margin-bottom: 0.4rem;">⚡ Instant Connect</span>
        <h3 style="font-size: 1.45rem; color: var(--ink); margin-bottom: 0.35rem;">Request Callback in 60s</h3>
        <p style="font-size: 0.85rem; color: var(--ink-muted); margin-bottom: 1.25rem;">Enter your phone number to connect with a senior SSB Group advisor.</p>

        <form onsubmit="window.handleCallbackSubmit(event)">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.3rem;">Your Mobile Number *</label>
            <input type="tel" id="cb-phone" class="form-control" style="width: 100%; padding: 0.65rem 0.9rem; border-radius: var(--r-sm); border: 1px solid var(--border);" placeholder="e.g. +91 98189 28893" required autofocus>
          </div>
          <div style="margin-bottom: 1.25rem;">
            <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.3rem;">Your Name</label>
            <input type="text" id="cb-name" class="form-control" style="width: 100%; padding: 0.65rem 0.9rem; border-radius: var(--r-sm); border: 1px solid var(--border);" placeholder="e.g. Alok Verma">
          </div>
          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
            📞 Call Me in 60 Seconds
          </button>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
};

// Form Submissions
window.handleUniversalModalSubmit = function(e, purpose) {
  e.preventDefault();
  const name = document.getElementById('modal-name').value.trim();
  const phone = document.getElementById('modal-phone').value.trim();
  const project = document.getElementById('modal-project').value;

  window.store.addLead({
    fullName: name,
    phone: phone,
    projectId: project,
    source: "BROCHURE_DOWNLOAD",
    interestedUnit: purpose || "E-Brochure"
  });

  document.getElementById('universal-enquiry-modal')?.remove();
  window.showToast(`Thank you, ${name}! Your verified E-Brochure has been sent to ${phone}.`, "success");
};

window.handleSiteVisitSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('sv-name').value.trim();
  const phone = document.getElementById('sv-phone').value.trim();
  const project = document.getElementById('sv-project').value;
  const date = document.getElementById('sv-date').value;
  const time = document.getElementById('sv-time').value;
  const address = document.getElementById('sv-address').value.trim();

  window.store.addLead({
    fullName: name,
    phone: phone,
    projectId: project,
    source: "SITE_VISIT_MODAL",
    scheduledDate: date,
    timeSlot: time,
    pickupAddress: address,
    cabRequired: true
  });

  document.getElementById('site-visit-booking-modal')?.remove();
  window.showToast(`Site visit confirmed for ${date}! Chauffeur pickup details sent to ${phone}.`, "success");
};

window.handleCallbackSubmit = function(e) {
  e.preventDefault();
  const phone = document.getElementById('cb-phone').value.trim();
  const name = document.getElementById('cb-name').value.trim() || "Priority Caller";

  window.store.addLead({
    fullName: name,
    phone: phone,
    source: "CALLBACK_60S"
  });

  document.getElementById('callback-quick-modal')?.remove();
  window.showToast(`Connecting! An SSB Group advisor will call ${phone} in 60 seconds.`, "success");
};

window.handleHomeEnquirySubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('he-name').value.trim();
  const phone = document.getElementById('he-phone').value.trim();
  const email = document.getElementById('he-email')?.value.trim() || '';
  const project = document.getElementById('he-project').value;

  window.store.addLead({
    fullName: name,
    phone: phone,
    email: email,
    projectId: project,
    source: "WEBSITE_DIRECT"
  });

  e.target.reset();
  window.showToast(`Thank you, ${name}! Your enquiry has been received.`, "success");
};
