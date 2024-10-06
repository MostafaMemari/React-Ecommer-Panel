import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const Modal = ({ showModal, handleClose, title, children, size = 'md' }) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [showModal, handleClose]);

  const handleBackdropClick = (event) => {
    if (event.target.dataset.dialogBackdrop) {
      handleClose();
    }
  };

  const modalSizeClasses = {
    sm: 'max-w-sm sm:min-w-[60%]',
    md: 'max-w-md sm:w-3/5 lg:w-2/5 min-w-[70%]',
    lg: 'max-w-lg sm:w-4/5 lg:w-3/5 min-w-[80%]',
  };

  return (
    <CSSTransition in={showModal} timeout={300} classNames="fade" unmountOnExit>
      <div
        data-dialog-backdrop="modal"
        onClick={handleBackdropClick}
        className="fixed inset-0 z-100 grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm"
      >
        <div
          data-dialog="modal"
          className={`relative m-4 p-4 w-full ${modalSizeClasses[size]} rounded-lg bg-white shadow-lg`}
        >
          <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">{title}</div>
          <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
