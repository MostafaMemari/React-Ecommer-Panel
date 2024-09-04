import React from 'react';
import menuData from '../../menu/menu.json';
import SideMenuItem from './SideMenuItem';

const SideMenu = () => {
  return (
    <nav className="side-nav">
      <a href="/" className="intro-x flex items-center pr-5 pt-4 mt-3">
        <img alt="Tinker Tailwind HTML Admin Template" className="w-6" src="/images/logo.svg" />
        <span className="hidden xl:block text-white text-lg mr-3">
          تین<span className="font-medium">کر</span>
        </span>
      </a>
      <div className="side-nav__devider my-6"></div>
      <ul>
        {menuData.menu.map((item, index) => (
          <SideMenuItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
