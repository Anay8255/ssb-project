import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import { ArrowRight, ArrowUpRight, MapPin, Building2, CheckCircle2, Sparkles, Navigation, Layers } from 'lucide-react';

const CITIES_DATA = [
  {
    id: 'varanasi',
    name: 'Varanasi',
    role: 'Headquarters & Primary Townships',
    coords: [25.3176, 82.9739],
    zoom: 11,
    projectCount: 3,
    projects: [
      {
        slug: 'sai-gaon',
        title: 'Sai Gaon',
        category: 'Residential Township',
        location: 'Babatpur Airport Road, Harhua',
        city: 'Varanasi',
        status: 'ONGOING',
        statusType: 'ongoing',
        monogram: 'SG',
        tagline: 'VDA Approved master-planned gated township on Babatpur Highway'
      },
      {
        slug: 'shree-sai-city-group-housing',
        title: 'Shree Sai City Group Housing',
        category: 'High-Rise Residential',
        location: 'Ring Road Phase-1, Harhua',
        city: 'Varanasi',
        status: 'ONGOING',
        statusType: 'ongoing',
        monogram: 'SC',
        tagline: 'Seismic-resilient monolithic aluminum formwork construction'
      },
      {
        slug: 'shree-sai-city-ews-pmay',
        title: 'Shree Sai City EWS / PMAY',
        category: 'Affordable Housing',
        location: 'Kaazi Sarai, Bhatauli',
        city: 'Varanasi',
        status: 'COMPLETED',
        statusType: 'completed',
        monogram: 'EW',
        tagline: 'Govt. PMAY recognized accessible housing — 100% delivered'
      }
    ]
  },
  {
    id: 'lucknow',
    name: 'Lucknow',
    role: 'Strategic Capital Expansion',
    coords: [26.8467, 80.9462],
    zoom: 11,
    projectCount: 1,
    projects: [
      {
        slug: 'pratham',
        title: 'Pratham',
        category: 'Commercial & Mixed-Use',
        location: 'Amar Shaheed Path Corridor',
        city: 'Lucknow',
        status: 'UPCOMING',
        statusType: 'upcoming',
        monogram: 'PR',
        tagline: 'State-of-the-art retail arcades and premium corporate suites'
      }
    ]
  }
];

export const PresenceMap = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markersRef = useRef({});
  const [activeCity, setActiveCity] = useState('ALL');
  const [hoveredProject, setHoveredProject] = useState(null);

  const allProjects = CITIES_DATA.flatMap(c => c.projects);
  const displayedProjects = activeCity === 'ALL'
    ? allProjects
    : allProjects.filter(p => p.city.toLowerCase() === activeCity.toLowerCase());

  useEffect(() => {
    if (!mapRef.current) return;
    if (mapInstance.current) return;

    try {
      // Initialize Leaflet with clean map fitted for single frame
      const map = L.map(mapRef.current, {
        center: [26.12, 82.0],
        zoom: 7.3,
        scrollWheelZoom: false,
        zoomControl: false,
        attributionControl: false
      });

      mapInstance.current = map;

      // Clean, watermark-free architectural styled tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      // Custom Pin Markers for Varanasi & Lucknow (No intrusive popups)
      CITIES_DATA.forEach(city => {
        const customIcon = L.divIcon({
          className: `presence-custom-marker marker-${city.id}`,
          html: `
            <div class="presence-marker-wrapper">
              <div class="presence-marker-pulse"></div>
              <div class="presence-marker-pin">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 21h18"/>
                  <path d="M5 21V7l8-4v18"/>
                  <path d="M19 21V11l-6-4"/>
                  <path d="M9 9h1"/>
                  <path d="M9 13h1"/>
                  <path d="M9 17h1"/>
                </svg>
              </div>
              <div class="presence-marker-label">
                <strong>${city.name}</strong>
                <span>${city.projectCount} ${city.projectCount > 1 ? 'Projects' : 'Project'}</span>
              </div>
            </div>
          `,
          iconSize: [120, 60],
          iconAnchor: [60, 48]
        });

        const marker = L.marker(city.coords, { icon: customIcon }).addTo(map);
        markersRef.current[city.id] = marker;

        // Click marker to filter corresponding city projects without popup
        marker.on('click', () => {
          handleCitySelect(city.name);
        });
      });

      setTimeout(() => {
        map.invalidateSize();
      }, 350);

    } catch (e) {
      console.warn("Leaflet map initialization notice:", e);
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  const handleCitySelect = (cityName) => {
    setActiveCity(cityName);
    if (!mapInstance.current) return;

    if (cityName === 'ALL') {
      mapInstance.current.flyTo([26.12, 82.0], 7.3, {
        duration: 1.0,
        easeLinearity: 0.25
      });
    } else {
      const city = CITIES_DATA.find(c => c.name.toLowerCase() === cityName.toLowerCase());
      if (city) {
        mapInstance.current.flyTo(city.coords, 10.5, {
          duration: 1.0,
          easeLinearity: 0.25
        });
      }
    }
  };

  const handleProjectHover = (project) => {
    setHoveredProject(project ? project.slug : null);
    if (!project || !mapInstance.current) return;

    const city = CITIES_DATA.find(c => c.name.toLowerCase() === project.city.toLowerCase());
    if (city) {
      // Highlight marker subtly without opening any popup
      const markerEl = document.querySelector(`.marker-${city.id} .presence-marker-pin`);
      if (markerEl) {
        markerEl.classList.add('is-focused');
      }
    }
  };

  const zoomIn = () => {
    if (mapInstance.current) mapInstance.current.zoomIn();
  };

  const zoomOut = () => {
    if (mapInstance.current) mapInstance.current.zoomOut();
  };

  const resetView = () => {
    handleCitySelect('ALL');
  };

  return (
    <section className="presence-section-luxury" id="presence-section-mount">
      {/* Subtle architectural background texture */}
      <div className="presence-bg-glow" />

      <div className="container">
        {/* Section Top Header */}
        <div className="presence-top-header">
          <div className="presence-badge-chip">
            <MapPin size={13} className="text-brand" />
            <span>REGIONAL FOOTPRINT · EASTERN UTTAR PRADESH</span>
          </div>
          <h2 className="presence-main-title">
            Rooted in Varanasi. Growing Across Eastern Uttar Pradesh.
          </h2>
          <p className="presence-main-subtitle">
            Pioneering master-planned gated residential townships and state-of-the-art commercial hubs strategically situated at the epicenters of Uttar Pradesh's prime economic growth corridors.
          </p>
        </div>

        <div className="presence-grid-luxury">
          {/* Left Column: Ultra-Clean Architectural Map */}
          <div className="presence-map-card">
            {/* Interactive Top Floating Control Bar */}
            <div className="presence-map-topbar">
              <div className="presence-map-city-tabs">
                <button
                  type="button"
                  className={`presence-city-tab-btn ${activeCity === 'ALL' ? 'active' : ''}`}
                  onClick={() => handleCitySelect('ALL')}
                >
                  All Hubs (4)
                </button>
                <button
                  type="button"
                  className={`presence-city-tab-btn ${activeCity.toLowerCase() === 'varanasi' ? 'active' : ''}`}
                  onClick={() => handleCitySelect('Varanasi')}
                >
                  <span className="hub-dot hq" /> Varanasi (HQ)
                </button>
                <button
                  type="button"
                  className={`presence-city-tab-btn ${activeCity.toLowerCase() === 'lucknow' ? 'active' : ''}`}
                  onClick={() => handleCitySelect('Lucknow')}
                >
                  <span className="hub-dot hub" /> Lucknow (Hub)
                </button>
              </div>

              {/* Sleek Custom Zoom Controls */}
              <div className="presence-map-controls">
                <button type="button" onClick={zoomIn} title="Zoom in" aria-label="Zoom in">+</button>
                <button type="button" onClick={zoomOut} title="Zoom out" aria-label="Zoom out">−</button>
                <button type="button" onClick={resetView} title="Reset view" aria-label="Reset view" className="btn-reset-map">
                  <Navigation size={12} />
                </button>
              </div>
            </div>

            {/* Map Canvas */}
            <div ref={mapRef} id="presence-leaflet-map" className="presence-map-canvas" />

            {/* Bottom Floating Stats Bar */}
            <div className="presence-map-bottom-strip">
              <div className="presence-map-stat-chip">
                <span className="live-indicator-dot" />
                <span><strong>2 Major Hubs</strong> · 4 Landmark Developments</span>
              </div>
              <div className="presence-map-rera-pill">
                <CheckCircle2 size={12} color="#10B981" />
                <span>100% UP-RERA Verified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Portfolio Cards */}
          <div className="presence-portfolio-panel">
            <div className="presence-portfolio-header">
              <div className="presence-portfolio-count">
                <Building2 size={16} className="text-brand" />
                <span>Showing <strong>{displayedProjects.length}</strong> Strategic Developments</span>
              </div>
              <span className="presence-filter-indicator">
                {activeCity === 'ALL' ? 'Region: Eastern UP' : `Active Corridor: ${activeCity}`}
              </span>
            </div>

            <div className="presence-cards-list">
              {displayedProjects.map((project) => (
                <Link
                  key={project.slug}
                  to={`/projects/${project.slug}`}
                  className={`presence-luxury-card ${hoveredProject === project.slug ? 'is-hovered' : ''}`}
                  onMouseEnter={() => handleProjectHover(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Monogram Box */}
                  <div className={`presence-card-monogram ${project.statusType}`}>
                    <span>{project.monogram}</span>
                  </div>

                  {/* Details */}
                  <div className="presence-card-info">
                    <div className="presence-card-top-row">
                      <h3 className="presence-card-project-title">{project.title}</h3>
                      <span className={`presence-status-badge ${project.statusType}`}>
                        {project.status}
                      </span>
                    </div>

                    <p className="presence-card-location-row">
                      <MapPin size={12} />
                      <span>{project.location}</span>
                    </p>

                    <p className="presence-card-tagline">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Action Link & City Tag */}
                  <div className="presence-card-action">
                    <span className="presence-card-city-tag">{project.city}</span>
                    <div className="presence-arrow-btn">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Executive Trust & Explore Button */}
            <div className="presence-portfolio-footer">
              <div className="presence-trust-stats">
                <div className="presence-trust-stat-item">
                  <strong>13+</strong>
                  <span>Years of Trust</span>
                </div>
                <div className="presence-trust-divider" />
                <div className="presence-trust-stat-item">
                  <strong>8+</strong>
                  <span>Townships Delivered</span>
                </div>
                <div className="presence-trust-divider" />
                <div className="presence-trust-stat-item">
                  <strong>1200+</strong>
                  <span>Happy Families</span>
                </div>
              </div>

              <Link to="/projects" className="presence-explore-all-btn">
                <span>Explore All Projects</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
