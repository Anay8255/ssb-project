import React from 'react';
import { useModal } from '../../context/ModalContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useModal();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast-item ${toast.type || 'success'}`}>
          {toast.type === 'error' ? (
            <AlertCircle size={18} style={{ color: 'var(--danger)' }} />
          ) : toast.type === 'info' ? (
            <Info size={18} style={{ color: 'var(--gold)' }} />
          ) : (
            <CheckCircle2 size={18} style={{ color: 'var(--brand)' }} />
          )}
          <span>{toast.message}</span>
          <button 
            onClick={() => removeToast(toast.id)} 
            style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', marginLeft: '0.5rem', display: 'flex', alignItems: 'center' }}
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
};
