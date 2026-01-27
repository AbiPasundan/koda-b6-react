import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Index, LoginPage as Login, Register, ForgotPassword } from './App.jsx'
import { AdminDashboardPage } from './Admin.jsx'
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
    element: <AdminDashboardPage/>,
    children: [{
      // AdminDashboardPage
      index: true,
      element: <Index/>,
    }]
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
