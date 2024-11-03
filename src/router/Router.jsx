import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy loading the components
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
const SideMenuContent = lazy(() => import('../layouts/SideMenu/SideMenuContent'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));
const ManageProduct = lazy(() => import('../pages/ManageProduct/ManageProduct'));
const BuyAndSellProduct = lazy(() => import('../pages/BuyAndSellProduct/BuyAndSellProduct'));
const ReportBuyAndSell = lazy(() => import('../pages/ReportBuyAndSell/ReportBuyAndSell'));
const RobotProduct = lazy(() => import('../pages/RobotProduct/RobotProduct'));

function Router({ isLogin }) {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <PrivateRoute isLogin={isLogin}>
          <SideMenuContent />
        </PrivateRoute>
      ),
      children: [
        { path: '/', element: <Dashboard /> },
        { path: '/products/manage', element: <ManageProduct /> },
        { path: '/products/buy', element: <BuyAndSellProduct key="buy" pageType="buy" /> },
        { path: '/products/sell', element: <BuyAndSellProduct key="sell" pageType="sell" /> },
        { path: '/products/report', element: <ReportBuyAndSell /> },
        { path: '/products/robot', element: <RobotProduct /> },
      ],
    },
  ]);

  return routes;
}

export default Router;
