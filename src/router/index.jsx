import { useRoutes } from 'react-router-dom';

import Dashboard from '../pages/dashboard/Dashboard';
import Page1 from '../pages/Page1';
import SideMenuContent from '../layouts/SideMenu/SideMenuContent';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

function Router() {
  const routes = [
    {
      path: '/',
      element: <SideMenuContent />,
      children: [
        {
          path: '/',
          element: <Dashboard />,
        },
        {
          path: '/page-1',
          element: <Page1 />,
        },
      ],
    },

    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },

    // {
    //   path: '/error-page',
    //   element: <ErrorPage />,
    // },
    // {
    //   path: '*',
    //   element: <ErrorPage />,
    // },
  ];

  return useRoutes(routes);
}

export default Router;
