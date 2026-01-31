import { useForm } from "react-hook-form";
import { Link } from "react-router";

function Input({type, register, id, placeholder}) {
	return (
		<input required type={type} {...register} id={id} placeholder={placeholder} className="outline-none bg-transparent" />		
	)
}

function LinkNavigation({text, linkText, link}) {
	return (
		<span className="font-normal text-[16px] text-[#4F5665]">{text} <Link to={`/${link}`} className="text-[#FF8906]">{linkText}</Link></span>
	)
}

function SocialMediaLogin() {
	return (
		<section className="flex justify-center items-center justify-self-center gap-5 [&>div>a]:w-[383px]">
			<div className="bg-white w-full p-[13px] rounded-xl shadow-lg text-center">
				<div className="relative">
					<a href="#">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook absolute top-1 left-[20px] md:left-[130px]" viewBox="0 0 16 16">
						  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
						</svg>
					Google </a>
				</div>
			</div>
			<div className="bg-white w-full p-[13px] rounded-xl shadow-lg text-center">
				<div className="relative">
					<a href="#">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook absolute top-1 left-[10px] md:left-[115px]" viewBox="0 0 16 16">
						  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
						</svg>
					Facebook </a>
				</div>
			</div>
		</section>
	)
}

// forgot password start
function ForgotPasswordComp({children}) {
	return (
		<label className="text-[#0B132A] text-[16px] mb-5">
			Email
			<div className="flex items-center gap-5 p-3 border border-xl w-full">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
				  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
				</svg>
				{children}
			</div>
		</label>
	)
}

function FormForgotPassword() {
 	const { 
		register,
		handleSubmit,
		formState: { errors }
		} = useForm();
	const onSubmit = data => {
		console.log(data)
		window.open(`mailto:test@example.com?subject=${data.email}&body=Please%20Reset%20MyPassword`);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} method="POST" className="flex flex-col">
			<ForgotPasswordComp>
				<Input register={register("email")} type="email" id="email" placeholder="Enter Your Email" />
			</ForgotPasswordComp>
			<button type="submit" className="bg-[#FF8906] h-[60px] rounded-xl  text-[#0B132A] ">Submit</button>
		</form>
	)
}
function AuthComp({ title, children, type, name, id, placeholder}) {
	return (
		<label className="text-[#0B132A] text-[16px] mb-5">
			<span>{title}</span>
			<div className="flex items-center gap-5 p-3 border border-xl w-full">
				<div>
					{children}
				</div>
				<Input type={type} name={name} id={id} placeholder={placeholder} />
			</div>
		</label>
	)
}

function FormLogin({children}) {
	return (
		<form method="POST" className="flex flex-col">
			<AuthComp title="Email" type="text" name="email" id="email" placeholder="Enter Email" >
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
				  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
				</svg>
			</AuthComp>	
			<AuthComp title="Password" type="password" name="password" id="password" placeholder="Enter Password ">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
				  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
				  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
				</svg>
			</AuthComp>	
			<button type="reset" className="bg-[#FF8906] h-[60px] rounded-xl  text-[#0B132A] ">Submit</button>
			<div className="flex items-center justify-center mb-3" >
					<LinkNavigation text="Not Have an Account?" linkText="Register" link="register" />
					<span className="text-[#AAAAAA]">or</span>
					<div className="flex justify-end items-end w-full my-5">
						{children}
					</div>
				</div>
				<SocialMediaLogin/>
		</form>
	)
}

function FormRegister() {
	return (
		<form method="POST" className="flex flex-col">
			<AuthComp type="text" name="name" id="name" placeholder="Enter Name">
				<titleForm title="Email"/>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
				    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
			  </svg>
			</AuthComp>	
			<AuthComp type="email" name="email" id="email" placeholder="Enter Email ">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
  					<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
				</svg>
			</AuthComp>
			<AuthComp type="password" name="password" id="password" placeholder="Enter Your Password ">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
				  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
				  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
				</svg>
			</AuthComp>	
			<AuthComp type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter Your Password Again ">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
				  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
				  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
				</svg>
			</AuthComp>	
			<button type="reset" className="bg-[#FF8906] h-[60px] rounded-xl  text-[#0B132A] ">Submit</button>
			<div className="flex items-center justify-center mb-3" >
					<LinkNavigation text="Have an Account?" linkText="login" link="login" />
					<span className="text-[#AAAAAA]">or</span>
				</div>
				<SocialMediaLogin/>
		</form>
	)
}

// register end

export { FormForgotPassword, FormLogin, FormRegister }