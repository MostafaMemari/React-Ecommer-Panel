import React from 'react';

const CustomButton = ({ text, onClick }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
