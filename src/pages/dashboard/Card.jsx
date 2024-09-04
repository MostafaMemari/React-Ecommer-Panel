import React from 'react';

function Card({ title, icon, currentValue, iconTheme, darkIconTheme }) {
  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
      <div className="report-box zoom-in">
        <div className="box p-5">
          <div className="flex">
            <i
              data-feather={icon}
              className={`report-box__icon text-theme-${iconTheme} dark:text-theme-${darkIconTheme ?? iconTheme}`}
            ></i>
            <div className="mr-auto">
              <div className="report-box__indicator bg-theme-20 tooltip cursor-pointer" title="33% بالاتر از ماه گذشته">
                {' '}
                33% <i data-feather="chevron-up" className="w-4 h-4 mr-0.5"></i>{' '}
              </div>
            </div>
          </div>
          <div className="text-3xl font-bold leading-8 mt-6">{currentValue}</div>
          <div className="text-base text-gray-600 mt-1">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
