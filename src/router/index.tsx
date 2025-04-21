import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import { TransactionType } from "../features/transaction/types/enym";

import Login from "../pages/(auth)/Login";
import Register from "../pages/(auth)/Register";
import ErrorPage from "../pages/ErrorPage";

import Products from "../pages/Products";
import ProductsRobot from "../pages/ProductsRobot";
import ProductTransaction from "../pages/ProductTransaction";
import Transactions from "../pages/Transaction/index";
import Colors from "../pages/Colors/index";
import Categories from "../pages/Categories/index";
import Sellers from "../pages/Sellers/index";

function Router() {
  const routes = [
    {
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/purchase",
          element: <ProductTransaction transactionType={TransactionType.PURCHASE} key="purchase" />,
        },
        {
          path: "/products/sales",
          element: <ProductTransaction transactionType={TransactionType.SALE} key="sale" />,
        },
        {
          path: "/products/robot",
          element: <ProductsRobot />,
        },
        {
          path: "/transactions",
          element: <Transactions />,
        },
        {
          path: "/colors",
          element: <Colors />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/sellers",
          element: <Sellers />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
