import './index.css'
import ForgotPassword from '@/pages/authpages/ForgotPassword'
import LoginPage from '@/pages/authpages/LoginPage'
import RegisterPage from '@/pages/authpages/RegisterPage'
function Index() {
  return (
    <>
      <h1>Vite + React</h1>
    </>
  )
}

function Login() {
  return (
    <>
      <LoginPage />
    </>
  )
}

function Register() {
  return (
    <>
      <RegisterPage />
    </>
  )
}

function ForgotPasswordPage() {
  return (
    <>
      <ForgotPassword/>
    </>
  )
}

export {Index, LoginPage, Register, ForgotPassword}