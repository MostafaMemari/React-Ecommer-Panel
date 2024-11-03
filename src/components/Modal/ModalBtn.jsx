import React, { useState } from 'react';
import Modal from './Modal';

//* used
{
}

const ModalBtn = ({ title, textBtnOpen, children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <button onClick={handleOpen} className="rounded-md bg-blue-600 py-2 px-4 text-white">
        {title}
      </button>

      <Modal showModal={showModal} handleClose={handleClose} title={textBtnOpen} size="sm">
        {children}
        {/* <button onClick={handleClose}>بستن</button> */}
      </Modal>
    </div>
  );
};

export default ModalBtn;
