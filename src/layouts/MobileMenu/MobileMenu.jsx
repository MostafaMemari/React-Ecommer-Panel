import React from 'react';
import menuData from '../../menu/menu.json';
import MobileMenuItem from './MobileMenuItem';

const MobileMenu = () => {
  return (
    <div className="mobile-menu mobile-menu--dashboard md:hidden">
      <div className="mobile-menu-bar">
        <a href="" className="flex ml-auto">
          <img alt="Tinker Tailwind HTML Admin Template" className="w-6" src="/images/logo.svg" />
        </a>
        <a href="javascript:;" id="mobile-menu-toggler">
          {' '}
          <i
            data-feather="bar-chart-2"
            className="w-8 h-8 text-gray-600 dark:text-white transform -rotate-270"
          ></i>{' '}
        </a>
      </div>
      <ul className="mobile-menu-box py-5 hidden">
        {menuData.menu.map((item, index) => (
          <MobileMenuItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
