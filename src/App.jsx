import './index.css'
import ForgotPassword from '@/pages/authpages/ForgotPassword'
import LoginPage from '@/pages/authpages/LoginPage'
import RegisterPage from '@/pages/authpages/RegisterPage'
import DetailProduct from "@/pages/userspages/DetailProduct"
import Nav from "@/components/usercomp/Nav"

function Index() {
  return (
    <>

      <h1>Testing</h1>
    </>
  )
}

function DetailProductPage() {
  return (
    <>
      <Nav />
      <DetailProductPage />
    </>
  )
}



export {Index, LoginPage, RegisterPage, ForgotPassword, DetailProductPage}