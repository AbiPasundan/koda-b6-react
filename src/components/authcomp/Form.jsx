function Input({type, name, id, placeholder}) {
	return (
		<input type={type} name={name} id={id} placeholder={placeholder} className="outline-none bg-transparent" />		
	)
}

// password start
function ForgotPasswordComp() {
	return (
		<label className="text-[#0B132A] text-[16px] mb-5">
			Email
			<div className="flex items-center gap-5 p-3 border border-xl w-full">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
				  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
				</svg>
				<Input type="email" name="email" id="email" placeholder="Enter Your Email" />
			</div>
		</label>
	)
}

function FormForgotPassword() {
	return (
		<form action="POST" className="flex flex-col">
			<ForgotPasswordComp/>
			<button type="reset" className="bg-[#FF8906] h-[60px] rounded-xl  text-[#0B132A] ">Submit</button>
		</form>
	)
}
// password end
// login start
function LoginComp({ children, type, name, id, placeholder}) {
	return (
		<label className="text-[#0B132A] text-[16px] mb-5">
			Email
			<div className="flex items-center gap-5 p-3 border border-xl w-full">
				<div>
					{children}
				</div>
				<Input type={type} name={name} id={id} placeholder={placeholder} />
				{/*<Input type="password" name="password" id="password" placeholder="Enter Your Password" />*/}
			</div>
		</label>
	)
}
function FormLogin() {
	return (
		<form method="POST" className="flex flex-col">
			<LoginComp type="text" name="email" id="email" placeholder="Enter Email">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
				  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
				</svg>
			</LoginComp>	
			<LoginComp type="password" name="password" id="password" placeholder="Enter Password ">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
				  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
				  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
				</svg>
			</LoginComp>	
			<button type="reset" className="bg-[#FF8906] h-[60px] rounded-xl  text-[#0B132A] ">Submit</button>
		</form>
	)
}
// login end

// register start
function FormRegister() {
	return (
		<form action="POST" className="flex flex-col">
			<Login />
			<button type="reset" className="bg-[#FF8906] h-[60px] rounded-xl  text-[#0B132A] ">Submit</button>
		</form>
	)
}

// register end

export { FormForgotPassword, FormLogin, FormRegister }