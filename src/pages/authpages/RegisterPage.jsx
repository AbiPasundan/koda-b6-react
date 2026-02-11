import AuthImage from '@/components/authcomp/Image'
import ImageAuthLogo from '@/components/authcomp/ImageAuthLogo'
import AuthHeader from '@/components/authcomp/AuthHeader'
import { FormRegister } from '@/components/authcomp/Form'
import { registerimg, footer } from '@/App'

export default function RegisterPage() {
	return (
		<main className="flex grid-cols-[30%_auto] gap-10 ">
			<AuthImage image={registerimg} />
			<section className="flex flex-col justify-self-center my-auto h-auto mx-10 md:mx-0 [&>form>label]:flex [&>form>label]:flex-col [&>form>div]:flex [&>form>div]:flex-col py-10 w-195 ">
				<ImageAuthLogo image={footer}/>
				<AuthHeader title="Register" text="Fill out the form correctly" />
				<FormRegister/>
			</section>
		</main>
	)
}