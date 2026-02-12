import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// auth
import { LoginPage as Login, RegisterPage, ForgotPassword } from './App.jsx'
// admin
import { AdminLayout, AdminDashboard, AdminProductPage, AdminUserPage, AdminOrderPage, } from './Admin.jsx'
// user
// use layout
import { UserLayout } from './User.jsx';
import { Home } from '@/pages/userspages/Home.jsx';
import Profile from '@/pages/userspages/Profile.jsx'
import Checkout from '@/pages/userspages/Checkout.jsx'
import HistoryOrder from '@/pages/userspages/HistoryOrder.jsx';
import DetailProduct from '@/pages/userspages/DetailProduct.jsx'
import Product from '@/pages/userspages/Product.jsx';
import NotFound from '@/pages/404.jsx';
import DetailOrder from './pages/userspages/DetailOrder.jsx';


import './index.css'
import { DataFetch } from "./components/hook/DataFetchContext";
import { ProductFetch } from "./components/hook/ProductFetchContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "product",
        element: <AdminProductPage />
      },
      {
        path: "order",
        element: <AdminOrderPage />
      },
      {
        path: "user",
        element: <AdminUserPage />
      },
    ]
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/detailproduct/:id",
        element: <DetailProduct />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/detailorder/:id",
        element: <DetailOrder />,
      },
      {
        path: "/historyOrder",
        element: <HistoryOrder />,
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);


createRoot(document.getElementById('root')).render(
  <ProductFetch>
    <DataFetch>
      <RouterProvider router={router} />
    </DataFetch>
  </ProductFetch>
)