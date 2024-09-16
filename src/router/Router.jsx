import { useRoutes } from 'react-router-dom';

import Dashboard from '../pages/dashboard/Dashboard';
import Page1 from '../pages/Page1';
import SideMenuContent from '../layouts/SideMenu/SideMenuContent';

import PrivateRoute from './PrivateRoute';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import Porducts from '../pages/products/Porducts';

function Router({ loading, isLogin }) {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <PrivateRoute isLogin={isLogin}>
          <SideMenuContent />
        </PrivateRoute>
      ),
      children: [
        {
          path: '/',
          element: <Dashboard />,
        },
        {
          path: '/products',
          element: <Porducts />,
        },
        {
          path: '/page-1',
          element: <Page1 />,
        },
      ],
    },
  ]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return routes;
}

export default Router;

// function Router({ loading, isLogin }) {
//   const routes = [{}];
// }
// return useRoutes(routes);
