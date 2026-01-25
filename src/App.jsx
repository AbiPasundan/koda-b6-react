import './index.css'
import ForgotPassword from '@/pages/authpages/ForgotPassword'
import LoginPage from '@/pages/authpages/LoginPage'
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
      <h1>Vite + React</h1>
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