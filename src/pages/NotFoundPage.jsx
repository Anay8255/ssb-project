import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="container" style={{ padding: '8rem 1.5rem', textAlign: 'center' }}>
      <span className="eyebrow">404 ERROR</span>
      <h1 style={{ fontSize: '3.5rem', color: 'var(--ink)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
        Page Not Found
      </h1>
      <p style={{ color: 'var(--ink-muted)', maxWidth: '500px', margin: '0 auto 2rem auto', fontSize: '1.1rem' }}>
        The requested address does not exist or may have been moved.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link to="/" className="btn btn-primary">
          <Home size={16} /> Return to Homepage
        </Link>
        <Link to="/projects" className="btn btn-outline">
          Explore Projects
        </Link>
      </div>
    </div>
  );
};
