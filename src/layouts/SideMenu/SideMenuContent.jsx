import DarkModeSwitcher from '../../components/DarkModeSwitcher';
import { Outlet } from 'react-router-dom';
import TopBar from '../TopBar';
import SideMenu from './SideMenu';
import MobileMenu from '../MobileMenu/MobileMenu';

function SideMenuContent() {
  return (
    <main>
      <MobileMenu />
      <div className="flex overflow-hidden">
        <SideMenu />

        <div className="content ">
          <TopBar />
          <Outlet />
        </div>

        <DarkModeSwitcher />
      </div>
    </main>
  );
}

export default SideMenuContent;
