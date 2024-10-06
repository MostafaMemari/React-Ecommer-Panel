import React, { useState } from 'react';

const ModalButton = ({ ModalComponent }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <button onClick={handleOpen} className="rounded-md bg-blue-600 py-2 px-4 text-white">
        ثبت محصول جدید
      </button>

      <ModalComponent showModal={showModal} handleClose={handleClose} />
    </div>
  );
};

export default ModalButton;
