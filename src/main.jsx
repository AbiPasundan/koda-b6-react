import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Index, LoginPage as Login, Register, ForgotPassword } from './App.jsx'
import { AdminLayout, AdminDashboard, AdminProductPage } from './Admin.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <Register/>,
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
      element: <h1>Halaman order</h1>
    },
    {
      path: "user",
      element: <h1>Halama user</h1>
    },
  ]
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
