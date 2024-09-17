import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FeatherIcon from '../../components/FeatherIcon/FeatherIcon';

const SideMenuItem = ({ item }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive =
    location.pathname === item.link || item.subMenu?.some((subItem) => location.pathname === subItem.link);

  const hasSubMenu = item.subMenu && item.subMenu.length > 0;

  useEffect(() => {
    if (isActive && hasSubMenu) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location.pathname, isActive, hasSubMenu]);

  const toggleSubMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <Link
        to={item.link || '#'}
        className={`side-menu ${isActive ? 'side-menu--active side-menu--open' : ''}`}
        onClick={hasSubMenu ? toggleSubMenu : null}
      >
        <div className="side-menu__icon">
          <FeatherIcon icon={item.icon} />
        </div>
        <div className="side-menu__title">
          {item.title}
          {hasSubMenu && (
            <div className={`side-menu__sub-icon ${isOpen ? 'transform rotate-180' : ''}`}>
              <FeatherIcon icon="chevron-down" />
            </div>
          )}
        </div>
      </Link>
      {isOpen && hasSubMenu && (
        <ul className="side-menu__sub-open">
          {item.subMenu.map((subItem, index) => (
            <SideMenuItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SideMenuItem;
