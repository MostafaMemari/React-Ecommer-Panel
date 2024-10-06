function AuthLayout({ title, children }) {
  return (
    <div className="login">
      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
          <div className="hidden xl:flex flex-col min-h-screen">
            <a href="" className="-intro-x flex items-center pt-5">
              <img alt="Tinker Tailwind HTML Admin Template" className="w-6" src="/images/logo.svg" />
              <span className="text-white text-lg mr-3">
                {' '}
                تین<span className="font-medium">کر</span>{' '}
              </span>
            </a>
            <div className="my-auto">
              <img
                alt="Tinker Tailwind HTML Admin Template"
                className="-intro-x w-1/2 -mt-16"
                src="/images/illustration.svg"
              />
              <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                تنها چند کلیک
                <br /> {title}
              </div>
              <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-gray-500">
                تمامی اکانت های خود را در یک مکان مدیریت کنید
              </div>
            </div>
          </div>
          <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            <div className="my-auto mx-auto xl:mr-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div
        data-url="login-dark.html"
        className="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 left-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 ml-10"
      >
        <div className="ml-4 text-gray-700 dark:text-gray-300">حالت تیره</div>
        <div className="dark-mode-switcher__toggle border"></div>
      </div>
    </div>
  );
}

export default AuthLayout;
