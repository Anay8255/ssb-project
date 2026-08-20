import React from 'react';
import { useModal } from '../../context/ModalContext';
import { MessageSquare } from 'lucide-react';

export const FloatingActions = () => {
  const { openEnquiryModal } = useModal();

  return (
    <div className="floating-actions">
      <button 
        className="float-btn float-whatsapp" 
        onClick={() => openEnquiryModal('', 'WhatsApp Chat')} 
        title="Chat on WhatsApp" 
        aria-label="WhatsApp Chat"
      >
        <span style={{ fontSize: '1.4rem' }}>💬</span>
        <span className="float-tooltip">WhatsApp Brochure</span>
      </button>
    </div>
  );
};
