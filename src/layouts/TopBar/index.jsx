import React from 'react';

function index() {
  return (
    <div className="top-bar -mx-4 px-4 md:mx-0 md:px-0">
      {/* <!-- BEGIN: Breadcrumb --> */}
      <div className="-intro-x breadcrumb ml-auto hidden sm:flex">
        {' '}
        <a href="">اپلیکیشن</a> <i data-feather="chevron-left" className="breadcrumb__icon"></i>{' '}
        <a href="" className="breadcrumb--active">
          داشبرد
        </a>{' '}
      </div>
      {/* <!-- END: Breadcrumb --> */}
      {/* <!-- BEGIN: Search --> */}
      <div className="intro-x relative ml-3 sm:ml-6">
        <div className="search hidden sm:block">
          <input
            type="text"
            className="search__input form-control border-transparent placeholder-theme-13"
            placeholder="جستجو..."
          />
          <i data-feather="search" className="search__icon dark:text-gray-300"></i>
        </div>
        <a className="notification sm:hidden" href="">
          {' '}
          <i data-feather="search" className="notification__icon dark:text-gray-300"></i>{' '}
        </a>
        <div className="search-result">
          <div className="search-result__content">
            <div className="search-result__content__title">صفحات</div>
            <div className="mb-5">
              <a href="" className="flex items-center">
                <div className="w-8 h-8 bg-theme-17 text-theme-20 flex items-center justify-center rounded-full">
                  {' '}
                  <i className="w-4 h-4" data-feather="inbox"></i>{' '}
                </div>
                <div className="mr-3">تنظیمات ایمیل</div>
              </a>
              <a href="" className="flex items-center mt-2">
                <div className="w-8 h-8 bg-theme-18 text-theme-21 flex items-center justify-center rounded-full">
                  {' '}
                  <i className="w-4 h-4" data-feather="users"></i>{' '}
                </div>
                <div className="mr-3">کاربران و دسترسی ها</div>
              </a>
              <a href="" className="flex items-center mt-2">
                <div className="w-8 h-8 bg-theme-19 text-theme-22 flex items-center justify-center rounded-full">
                  {' '}
                  <i className="w-4 h-4" data-feather="credit-card"></i>{' '}
                </div>
                <div className="mr-3">گزارش تراکنش ها</div>
              </a>
            </div>
            <div className="search-result__content__title">کاربران</div>
            <div className="mb-5">
              <a href="" className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img alt="Tinker Tailwind HTML Admin Template" className="rounded-full" src="/images/profile-3.jpg" />
                </div>
                <div className="mr-3">ارنولد شوایتزگر</div>
                <div className="mr-auto w-48 truncate text-gray-600 text-xs text-left">
                  arnoldschwarzenegger@left4code.com
                </div>
              </a>
              <a href="" className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img
                    alt="Tinker Tailwind HTML Admin Template"
                    className="rounded-full"
                    src="/images/profile-11.jpg"
                  />
                </div>
                <div className="mr-3">کوین اسپیسی</div>
                <div className="mr-auto w-48 truncate text-gray-600 text-xs text-left">
                  denzelwashington@left4code.com
                </div>
              </a>
              <a href="" className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img
                    alt="Tinker Tailwind HTML Admin Template"
                    className="rounded-full"
                    src="/images/profile-10.jpg"
                  />
                </div>
                <div className="mr-3"> مورگان فریمن </div>
                <div className="mr-auto w-48 truncate text-gray-600 text-xs text-left">morganfreeman@left4code.com</div>
              </a>
              <a href="" className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img
                    alt="Tinker Tailwind HTML Admin Template"
                    className="rounded-full"
                    src="/images/profile-10.jpg"
                  />
                </div>
                <div className="mr-3"> کوین اسپیسی </div>
                <div className="mr-auto w-48 truncate text-gray-600 text-xs text-left">kevinspacey@left4code.com</div>
              </a>
            </div>
            <div className="search-result__content__title">محصولات</div>
            <a href="" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img alt="Tinker Tailwind HTML Admin Template" className="rounded-full" src="/images/preview-6.jpg" />
              </div>
              <div className="mr-3">سامسونگ کیوناین تی وی</div>
              <div className="mr-auto w-48 truncate text-gray-600 text-xs text-left">الکترونیک</div>
            </a>
            <a href="" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img alt="Tinker Tailwind HTML Admin Template" className="rounded-full" src="/images/preview-3.jpg" />
              </div>
              <div className="mr-3">نیکون زد 6</div>
              <div className="mr-auto w-48 truncate text-gray-600 text-xs text-left"> عکاسی </div>
            </a>
            <a href="" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img alt="Tinker Tailwind HTML Admin Template" className="rounded-full" src="/images/preview-15.jpg" />
              </div>
              <div className="mr-3">اپل مک بوک</div>
              <div className="mr-auto w-48 truncate text-gray-600 text-xs text-left">لپ‌تاپ و کامپیوتر</div>
            </a>
            <a href="" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img alt="Tinker Tailwind HTML Admin Template" className="rounded-full" src="/images/preview-1.jpg" />
              </div>
              <div className="mr-3">نیک تایجن</div>
              <div className="mr-auto w-48 truncate text-gray-600 text-xs text-left">ورزشی</div>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- END: Search --> */}
      {/* <!-- BEGIN: Notifications --> */}
      <div className="intro-x dropdown ml-auto sm:ml-6">
        <div
          className="dropdown-toggle notification notification--bullet cursor-pointer"
          role="button"
          aria-expanded="false"
        >
          {' '}
          <i data-feather="bell" className="notification__icon dark:text-gray-300"></i>{' '}
        </div>
        <div className="notification-content pt-2 dropdown-menu">
          <div className="notification-content__box dropdown-menu__content box dark:bg-dark-6">
            <div className="notification-content__title"> اطلاعیه ها </div>
            <div className="cursor-pointer relative flex items-center ">
              <div className="w-12 h-12 flex-none image-fit ml-1">
                <img alt="Tinker Tailwind HTML Admin Template" className="rounded-full" src="/images/profile-3.jpg" />
                <div className="w-3 h-3 bg-theme-20 absolute left-0 bottom-0 rounded-full border-2 border-white"></div>
              </div>
              <div className="mr-2 overflow-hidden">
                <div className="flex items-center">
                  <a href="#;" className="font-medium truncate ml-5">
                    ارنولد شوایتزگر
                  </a>
                  <div className="text-xs text-gray-500 mr-auto whitespace-nowrap">01:10 صبح</div>
                </div>
                <div className="w-full truncate text-gray-600 mt-0.5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </div>
              </div>
            </div>
            <div className="cursor-pointer relative flex items-center mt-5">
              <div className="w-12 h-12 flex-none image-fit ml-1">
                <img alt="Tinker Tailwind HTML Admin Template" className="rounded-full" src="/images/profile-11.jpg" />
                <div className="w-3 h-3 bg-theme-20 absolute left-0 bottom-0 rounded-full border-2 border-white"></div>
              </div>
              <div className="mr-2 overflow-hidden">
                <div className="flex items-center">
                  <a href="#;" className="font-medium truncate ml-5">
                    کوین اسپیسی
                  </a>
                  <div className="text-xs text-gray-500 mr-auto whitespace-nowrap">05:09 عصر</div>
                </div>
                <div className="w-full truncate text-gray-600 mt-0.5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </div>
              </div>
            </div>
            <div className="cursor-pointer relative flex items-center mt-5">
              <div className="w-12 h-12 flex-none image-fit ml-1">
                <img alt="Tinker Tailwind HTML Admin Template" className="rounded-full" src="/images/profile-10.jpg" />
                <div className="w-3 h-3 bg-theme-20 absolute left-0 bottom-0 rounded-full border-2 border-white"></div>
              </div>
              <div className="mr-2 overflow-hidden">
                <div className="flex items-center">
                  <a href="#;" className="font-medium truncate ml-5">
                    {' '}
                    مورگان فریمن{' '}
                  </a>
                  <div className="text-xs text-gray-500 mr-auto whitespace-nowrap">01:10 صبح</div>
                </div>
                <div className="w-full truncate text-gray-600 mt-0.5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </div>
              </div>
            </div>
            <div className="cursor-pointer relative flex items-center mt-5">
              <div className="w-12 h-12 flex-none image-fit ml-1">
                <img alt="Tinker Tailwind HTML Admin Template" className="rounded-full" src="/images/profile-10.jpg" />
                <div className="w-3 h-3 bg-theme-20 absolute left-0 bottom-0 rounded-full border-2 border-white"></div>
              </div>
              <div className="mr-2 overflow-hidden">
                <div className="flex items-center">
                  <a href="#;" className="font-medium truncate ml-5">
                    {' '}
                    کوین اسپیسی{' '}
                  </a>
                  <div className="text-xs text-gray-500 mr-auto whitespace-nowrap">01:10 صبح</div>
                </div>
                <div className="w-full truncate text-gray-600 mt-0.5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </div>
              </div>
            </div>
            <div className="cursor-pointer relative flex items-center mt-5">
              <div className="w-12 h-12 flex-none image-fit ml-1">
                <img alt="Tinker Tailwind HTML Admin Template" className="rounded-full" src="/images/profile-4.jpg" />
                <div className="w-3 h-3 bg-theme-20 absolute left-0 bottom-0 rounded-full border-2 border-white"></div>
              </div>
              <div className="mr-2 overflow-hidden">
                <div className="flex items-center">
                  <a href="#;" className="font-medium truncate ml-5">
                    راسل کرو
                  </a>
                  <div className="text-xs text-gray-500 mr-auto whitespace-nowrap">01:10 صبح</div>
                </div>
                <div className="w-full truncate text-gray-600 mt-0.5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END: Notifications --> */}
      {/* <!-- BEGIN: Account Menu --> */}
      <div className="intro-x dropdown w-8 h-8">
        <div
          className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
          role="button"
          aria-expanded="false"
        >
          <img alt="Tinker Tailwind HTML Admin Template" src="/images/profile-7.jpg" />
        </div>
        <div className="dropdown-menu w-56">
          <div className="dropdown-menu__content box dark:bg-dark-6">
            <div className="p-4 border-b border-black border-opacity-5 dark:border-dark-3">
              <div className="font-medium">ارنولد شوایتزگر</div>
              <div className="text-xs text-gray-600 mt-0.5 dark:text-gray-600">مهندس نرم افزار</div>
            </div>
            <div className="p-2">
              <a
                href=""
                className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-dark-3 rounded-md"
              >
                {' '}
                <i data-feather="user" className="w-4 h-4 ml-2"></i> پروفایل{' '}
              </a>
              <a
                href=""
                className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-dark-3 rounded-md"
              >
                {' '}
                <i data-feather="edit" className="w-4 h-4 ml-2"></i> افزودن اکانت{' '}
              </a>
              <a
                href=""
                className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-dark-3 rounded-md"
              >
                {' '}
                <i data-feather="lock" className="w-4 h-4 ml-2"></i>بازیابی رمزعبور
              </a>
              <a
                href=""
                className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-dark-3 rounded-md"
              >
                {' '}
                <i data-feather="help-circle" className="w-4 h-4 ml-2"></i>راهنمایی
              </a>
            </div>
            <div className="p-2 border-t border-black border-opacity-5 dark:border-dark-3">
              <a
                href=""
                className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-dark-3 rounded-md"
              >
                {' '}
                <i data-feather="toggle-right" className="w-4 h-4 ml-2"></i>خروج
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END: Account Menu --> */}
    </div>
  );
}

export default index;
