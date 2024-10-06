import React from 'react';
import Card from './Card';

const cardObjects = [
  {
    key: 1,
    title: 'بدون بای باکس',
    currentValue: '0',
    icon: 'alert-triangle',
    iconTheme: '24',
    darkIconTheme: '25',
  },
  {
    key: 2,
    title: 'محصولات',
    currentValue: '0',
    icon: 'shopping-cart',
    iconTheme: '29',
  },
  {
    key: 3,
    title: 'محصولات غیرفعال',
    currentValue: '0',
    icon: 'slash',
    iconTheme: '15',
  },
  {
    key: 4,
    title: 'فروشندگان',
    currentValue: '0',
    icon: 'user',
    iconTheme: '20',
  },
];

function Cards() {
  return (
    <div className="col-span-12 mt-8">
      <div className="intro-y flex items-center h-10">
        <h2 className="text-lg font-medium truncate ml-5">گزارش کلی</h2>
        <a href="#" className="mr-auto flex items-center text-theme-30 dark:text-theme-25">
          <i data-feather="refresh-ccw" className="w-4 h-4 ml-3"></i>به روزرسانی داده
        </a>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        {cardObjects.map(({ key, ...cardProps }) => (
          <Card key={key} {...cardProps} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
