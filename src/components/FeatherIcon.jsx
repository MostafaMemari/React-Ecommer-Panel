import React, { useEffect } from 'react';
import feather from 'feather-icons';

const FeatherIcon = ({ icon, className = '', ...props }) => {
  useEffect(() => {
    feather.replace();
  }, [icon]);

  return <i data-feather={icon} className={className} {...props}></i>;
};

export default FeatherIcon;
