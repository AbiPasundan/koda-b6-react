import AuthImage from '@/components/authcomp/Image'
import ImageAuthLogo from '@/components/authcomp/ImageAuthLogo'
import AuthHeader from '@/components/authcomp/AuthHeader'
import { FormLogin } from '@/components/authcomp/Form'
import { Link, useNavigate } from 'react-router'
import { useEffect } from 'react'

import { loginimg, footer } from "@/App"

export default function LoginPage() {
	const navigate = useNavigate()
	useEffect(() => {
			const tokenUser = localStorage.getItem("token_auth_user");
			const tokenAdmin = localStorage.getItem("token_auth_admin");
			if (tokenUser !== null || tokenAdmin !== null) {
			  navigate("/");
			}
		  }, [navigate]);
	return (
		<main className="flex grid-cols-[30%_auto] gap-10 ">
			<AuthImage image={loginimg} />
			<section className="flex flex-col justify-self-center my-auto h-auto mx-10 md:mx-0 [&>form>label]:flex [&>form>label]:flex-col [&>form>div]:flex [&>form>div]:flex-col py-10 w-[780px] ">
				<ImageAuthLogo image={footer}/>
				<AuthHeader title="Login" text="Fill out the form correctly" />
				<FormLogin>
					<Link to="/forgotpassword" className='text-[#FF8906] text-left '>Forgot Password?</Link>
				</FormLogin>
			</section>
		</main>
	)
}