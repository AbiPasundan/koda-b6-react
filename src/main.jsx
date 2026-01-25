import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Index, Login, Register, ForgotPassword } from './App.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/Login",
    element: <Index/>,
  },
  {
    path: "/Register",
    element: <Index/>,
  },
  {
    path: "/Forgotpassword",
    element: <ForgotPassword/>,
  },
  {
    path: "/Product",
    element: <Index/>,
  },
  {
    path: "/Detailproduct",
    element: <Index/>,
  },
  {
    path: "/Detailproduct",
    element: <Index/>,
  },
  {
    path: "/Checkout",
    element: <Index/>,
  },
  {
    path: "/Order",
    element: <Index/>,
  },
  {
    path: "/Historiorder",
    element: <Index/>,
  },
  {
    path: "/Detailorder",
    element: <Index/>,
  },
  {
    path: "/Profile",
    element: <Index/>,
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
