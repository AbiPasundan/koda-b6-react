import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { LoginPage as Login, RegisterPage, ForgotPassword, DetailProductPage } from './App.jsx'
import { AdminLayout, AdminDashboard, AdminProductPage, AdminUserPage, AdminOrderPage,  } from './Admin.jsx'
import Profile from './pages/userspages/Profile.jsx'
import Checkout from './pages/userspages/Checkout.jsx'
import DetailProduct from './pages/userspages/DetailProduct.jsx'
import './index.css'
import { Home } from './pages/userspages/Home.jsx';
import Product from './pages/userspages/Product.jsx';


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
    path: "*",
    element: <h1>Salah Ajig</h1>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
