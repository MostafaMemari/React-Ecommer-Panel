import { useRoutes } from 'react-router-dom';

import Dashboard from '../pages/dashboard/Dashboard';
import SideMenuContent from '../layouts/SideMenu/SideMenuContent';

import PrivateRoute from './PrivateRoute';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import ManageProduct from '../pages/ManageProduct/ManageProduct';
import BuyProduct from '../pages/BuyProduct/BuyProduct';

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
          element: <ManageProduct />,
        },
        {
          path: '/buy-product',
          element: <BuyProduct />,
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
