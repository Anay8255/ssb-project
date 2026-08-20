import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import { ModalProvider } from './context/ModalContext';

import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingActions } from './components/common/FloatingActions';
import { ToastContainer } from './components/common/ToastContainer';
import { ModalEnquiry } from './components/common/ModalEnquiry';
import { ModalSiteVisit } from './components/common/ModalSiteVisit';
import { ModalLightbox } from './components/common/ModalLightbox';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { WhySsbPage } from './pages/WhySsbPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { MediaPage } from './pages/MediaPage';
import { NriCornerPage } from './pages/NriCornerPage';
import { EmiCalculatorPage } from './pages/EmiCalculatorPage';
import { ConstructionUpdatesPage } from './pages/ConstructionUpdatesPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Main App Layout Shell
const AppLayout = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="app-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />

      {!isAdmin && <Navbar />}

      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/why-ssb" element={<WhySsbPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/investors-nri" element={<NriCornerPage />} />
          <Route path="/nri-corner" element={<NriCornerPage />} />
          <Route path="/emi-calculator" element={<EmiCalculatorPage />} />
          <Route path="/construction-updates" element={<ConstructionUpdatesPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-a-site-visit" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {!isAdmin && <Footer />}
      {!isAdmin && <FloatingActions />}

      {/* Global Modals & Notifications */}
      <ModalEnquiry />
      <ModalSiteVisit />
      <ModalLightbox />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <ModalProvider>
        <Router>
          <AppLayout />
        </Router>
      </ModalProvider>
    </StoreProvider>
  );
}
