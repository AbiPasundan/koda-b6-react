import AuthImage from '@/components/authcomp/Image'
import ImageAuthLogo from '@/components/authcomp/ImageAuthLogo'
import AuthHeader from '@/components/authcomp/AuthHeader'
import { FormLogin } from '@/components/authcomp/Form'
import { Link } from 'react-router'
import { useEffect, useState } from 'react'

export default function LoginPage() {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function getData() {
			try {
				console.log(123)
				const api = await fetch("/data.json")
				console.log(api)
				const response = await api.json()
				setData(response.data)
				console.log(response.data[0].name)
				setIsLoading(false);
			} catch (error) {
				setError(error.message);
      	      	setIsLoading(false);
			}
		}
		getData()
	}, [])
	return (
		<main className="flex grid-cols-[30%_auto] gap-10 ">
			<AuthImage image={'https://placehold.co/400x960'} />
			<section className="flex flex-col justify-self-center my-auto h-auto mx-10 md:mx-0 [&>form>label]:flex [&>form>label]:flex-col [&>form>div]:flex [&>form>div]:flex-col py-10 w-[780px] ">
				<ImageAuthLogo image='https://placehold.co/200x50'/>
				<AuthHeader title="Login" text="Fill out the form correctly" />
				<FormLogin>
					<Link to="/forgotpassword" className='text-[#FF8906] text-left '>Forgot Password?</Link>
				</FormLogin>
				{isLoading && <p>Loading...</p>}
				{error && <p>Error: {error}</p>}
				{data.length > 0 && (
					<div>
						<h3>Test Data:</h3>
						<ul>
							{data.map((user, index) => (
								<li key={index}>{user.name} - {user.email}</li>
							))}
						</ul>
					</div>
				)}
			</section>
		</main>
	)
}