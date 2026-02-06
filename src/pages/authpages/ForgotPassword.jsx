import AuthImage from '@/components/authcomp/Image'
import ImageAuthLogo from '@/components/authcomp/ImageAuthLogo'
import AuthHeader from '@/components/authcomp/AuthHeader'
import { FormForgotPassword } from '@/components/authcomp/Form'
import { DataFetchContext } from '@/components/hook/DataFetchContext'
import { useContext } from 'react'

export default function ForgotPassword() {
	useContext(DataFetchContext)
	return (
		<main className="flex grid-cols-[30%_auto] gap-10 ">
			<AuthImage image={'https://placehold.co/400x960'} />
			<section className="flex flex-col justify-self-center my-auto h-auto mx-10 md:mx-0 [&>form>label]:flex [&>form>label]:flex-col [&>form>div]:flex [&>form>div]:flex-col py-10 w-[780px] ">
				<ImageAuthLogo image='https://placehold.co/200x50'/>
				<AuthHeader title="Fill out the form correctly" text="We will send new password to your email" />
				<FormForgotPassword/>
			</section>
		</main>
	)
}