import React, { createContext, useContext, useState, useCallback } from 'react';

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  // Site Visit Modal
  const [siteVisitOpen, setSiteVisitOpen] = useState(false);
  const [siteVisitProject, setSiteVisitProject] = useState(null);

  // Enquiry / Callback / Brochure Modal
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryData, setEnquiryData] = useState({ projectTitle: '', intent: 'Brochure Download' });

  // Lightbox Modal
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState({ src: '', title: '', subtitle: '' });

  // Toast Notifications
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  }, []);

  const openSiteVisitModal = useCallback((projectName = null) => {
    setSiteVisitProject(projectName);
    setSiteVisitOpen(true);
  }, []);

  const closeSiteVisitModal = useCallback(() => {
    setSiteVisitOpen(false);
    setSiteVisitProject(null);
  }, []);

  const openEnquiryModal = useCallback((projectTitle = '', intent = 'General Enquiry') => {
    setEnquiryData({ projectTitle, intent });
    setEnquiryOpen(true);
  }, []);

  const closeEnquiryModal = useCallback(() => {
    setEnquiryOpen(false);
  }, []);

  const openLightbox = useCallback((src, title = '', subtitle = '') => {
    setLightboxData({ src, title, subtitle });
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const value = {
    siteVisitOpen,
    siteVisitProject,
    openSiteVisitModal,
    closeSiteVisitModal,
    enquiryOpen,
    enquiryData,
    openEnquiryModal,
    closeEnquiryModal,
    lightboxOpen,
    lightboxData,
    openLightbox,
    closeLightbox,
    toasts,
    showToast,
    removeToast
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
