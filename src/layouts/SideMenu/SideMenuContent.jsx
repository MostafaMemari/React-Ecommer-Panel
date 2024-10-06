import React, { useCallback } from "react";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import { Outlet } from "react-router-dom";
import TopBar from "../TopBar";
import SideMenu from "./SideMenu";
import MobileMenu from "../MobileMenu/MobileMenu";

// استفاده از React.memo برای جلوگیری از رندر غیرضروری
const SideMenuContent = React.memo(() => {
  // استفاده از useCallback برای جلوگیری از ایجاد مجدد توابع
  const renderSideMenu = useCallback(() => <SideMenu />, []);
  const renderTopBar = useCallback(() => <TopBar />, []);

  return (
    <main>
      <MobileMenu />
      <div className="flex overflow-hidden">
        {renderSideMenu()}

        <div className="content ">
          {renderTopBar()}
          <Outlet />
        </div>

        <DarkModeSwitcher />
      </div>
    </main>
  );
});

export default SideMenuContent;
