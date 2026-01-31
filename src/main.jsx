import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// auth
import { LoginPage as Login, RegisterPage, ForgotPassword} from './App.jsx'
// admin
import { AdminLayout, AdminDashboard, AdminProductPage, AdminUserPage, AdminOrderPage,  } from './Admin.jsx'
// user
import { Home } from '@/pages/userspages/Home.jsx';
import Profile from '@/pages/userspages/Profile.jsx'
import Checkout from '@/pages/userspages/Checkout.jsx'
import HistoryOrder from '@/pages/userspages/HistoryOrder.jsx';
import DetailProduct from '@/pages/userspages/DetailProduct.jsx'
import Product from '@/pages/userspages/Product.jsx';
import NotFound from '@/pages/404.jsx';


import './index.css'
import DetailOrder from './pages/userspages/DetailOrder.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <RegisterPage/>,
  },
  {
    path: "/Forgotpassword",
    element: <ForgotPassword/>,
  },
  {
    path: "/Admin",
    element: <AdminLayout/>,
    children: [
    {
      index: true,
      element: <AdminDashboard/>,
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
    path: "/Product",
    element: <Product />,
  },
  {
    path: "/Detailproduct",
    element: <DetailProduct />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/Checkout",
    element: <Checkout />,
  },
  {
    path: "/DetailOrder",
    element: <DetailOrder />,
  },
  {
    path: "/HistoryOrder",
    element: <HistoryOrder />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
