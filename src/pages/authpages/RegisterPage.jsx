import AuthImage from '@/components/authcomp/Image'
import ImageAuthLogo from '@/components/authcomp/ImageAuthLogo'
import AuthHeader from '@/components/authcomp/AuthHeader'
import { FormRegister } from '@/components/authcomp/Form'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function RegisterPage() {
	const navigate = useNavigate()
	useEffect(() => {
		const tokenAuth = localStorage.getItem("token_auth_admin");
		if (!tokenAuth) {
		  navigate("/");
		}
	  }, [navigate]);
	return (
		<main className="flex grid-cols-[30%_auto] gap-10 ">
			<AuthImage image={'https://placehold.co/400x960'} />
			<section className="flex flex-col justify-self-center my-auto h-auto mx-10 md:mx-0 [&>form>label]:flex [&>form>label]:flex-col [&>form>div]:flex [&>form>div]:flex-col py-10 w-195 ">
				<ImageAuthLogo image='https://placehold.co/200x50'/>
				<AuthHeader title="Register" text="Fill out the form correctly" />
				<FormRegister/>
			</section>
		</main>
	)
}