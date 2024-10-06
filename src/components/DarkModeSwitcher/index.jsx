import React from 'react';

function index() {
  return (
    <div
      data-url="side-menu-dark-dashboard-overview-1.html"
      className="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 left-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 ml-10"
    >
      <div className="ml-4 text-gray-700 dark:text-gray-300">حالت تیره</div>
      <div className="dark-mode-switcher__toggle border"></div>
    </div>
  );
}

export default index;
