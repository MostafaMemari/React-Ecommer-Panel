import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FeatherIcon from '../../components/FeatherIcon/FeatherIcon';

function MobileMenuItem({ item }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive =
    location.pathname === item.link || item.subMenu?.some((subItem) => location.pathname === subItem.link);

  const hasSubMenu = item.subMenu && item.subMenu.length > 0;

  const toggleSubMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <Link
        to={item.link || '#'}
        className={`menu ${isActive ? 'menu--active' : ''}`}
        onClick={hasSubMenu ? toggleSubMenu : null}
      >
        <div className="menu__icon">
          <FeatherIcon icon={item.icon} />
        </div>
        <div className="menu__title">
          {item.title}
          {hasSubMenu && (
            <div className={`menu__sub-icon ${isOpen ? 'transform rotate-180' : ''}`}>
              <FeatherIcon icon="chevron-down" />
            </div>
          )}
        </div>
      </Link>
      {isOpen && hasSubMenu && (
        <ul className="menu__sub-open">
          {item.subMenu.map((subItem, index) => (
            <MobileMenuItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default MobileMenuItem;
