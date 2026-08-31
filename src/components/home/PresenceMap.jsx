import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import { ArrowRight } from 'lucide-react';

export const PresenceMap = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;
    if (mapInstance.current) return;

    try {
      const map = L.map(mapRef.current, {
        center: [26.05, 82.15],
        zoom: 7.2,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: false
      });

      mapInstance.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      const customIcon = L.divIcon({
        className: 'custom-map-pin',
        html: `
          <div style="
            width: 32px;
            height: 32px;
            border-radius: 50% 50% 50% 0;
            background: #0F3B60;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(15, 59, 96, 0.45);
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
          <strong style="color: #0F3B60; font-size: 1.05rem;">Varanasi (Headquarters)</strong><br>
          <span style="font-size: 0.85rem; color: #18181B;">• Sai Gaon (Residential)<br>• Shree Sai City Group Housing<br>• Shree Sai City EWS / PMAY</span>
        </div>
      `);

      // Lucknow Marker
      const lucknowMarker = L.marker([26.8467, 80.9462], { icon: customIcon }).addTo(map);
      lucknowMarker.bindPopup(`
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 4px;">
          <strong style="color: #0F3B60; font-size: 1.05rem;">Lucknow (New Expansion)</strong><br>
          <span style="font-size: 0.85rem; color: #18181B;">• Pratham (2 to 4 BHK Apartments)</span>
        </div>
      `);

      setTimeout(() => {
        map.invalidateSize();
      }, 300);

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

  return (
    <section className="presence-section" id="presence-section-mount">
      <div className="container">
        <div className="presence-grid">
          {/* Left: Styled Leaflet Map */}
          <div className="presence-map-wrapper">
            <div ref={mapRef} id="presence-leaflet-map" style={{ height: '420px', width: '100%', borderRadius: 'var(--r-lg)' }}></div>
          </div>

          {/* Right: Our Presence Details */}
          <div className="presence-content-box">
            <span className="presence-eyebrow">OUR PRESENCE</span>
            <h2 className="presence-heading">Rooted in Varanasi. Growing across Eastern Uttar Pradesh.</h2>

            <div className="presence-list">
              <Link to="/projects/sai-gaon" className="presence-row">
                <div className="presence-item-left">
                  <span className="presence-project-title">Sai Gaon</span>
                  <span className="presence-badge ongoing">ONGOING</span>
                </div>
                <span className="presence-city-label">Varanasi</span>
              </Link>

              <Link to="/projects/shree-sai-city-group-housing" className="presence-row">
                <div className="presence-item-left">
                  <span className="presence-project-title">Shree Sai City Group Housing</span>
                  <span className="presence-badge ongoing">ONGOING</span>
                </div>
                <span className="presence-city-label">Varanasi</span>
              </Link>

              <Link to="/projects/shree-sai-city-ews-pmay" className="presence-row">
                <div className="presence-item-left">
                  <span className="presence-project-title">Shree Sai City EWS / PMAY</span>
                  <span className="presence-badge completed">COMPLETED</span>
                </div>
                <span className="presence-city-label">Varanasi</span>
              </Link>

              <Link to="/projects/pratham" className="presence-row">
                <div className="presence-item-left">
                  <span className="presence-project-title">Pratham</span>
                  <span className="presence-badge upcoming">UPCOMING</span>
                </div>
                <span className="presence-city-label">Lucknow</span>
              </Link>
            </div>

            <div>
              <Link to="/projects" className="presence-know-more-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <span>Know More</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
