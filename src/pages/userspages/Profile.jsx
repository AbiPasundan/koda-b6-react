function InputForProfile(props) {
  return (
    <div className="input-user flex flex-col gap-3.75">
        <label htmlFor={props.valueNameId} className="font-[Plus_Jakarta_Sans] font-semibold text-[16px] leading-[100%] align-middle" >
          {props.title}
        </label>
        <input
          type={props.type}
          name={props.valueNameId}
          id={props.valueNameId}
          value={props.value}
          className=" h-13 border rounded-lg pt-3.5  pb-3.5 pl-13.25 bg-[url('./../img/icons/Profile.png')] "
          placeholder={props.placeholder}
        />
      </div>
  )
}

function PropfileComp(props) {
  return (
    <div className="header-title h-15.5 my-10">
      <h2 className="font-[Plus Jakarta Sans] font-medium text-xl">
        {props.name}
      </h2>
      <span className="font-[Plus Jakarta Sans]">{props.email}</span>
      <div className="pics w-full h-28.25 flex justify-center my-5">
        <img
          src={props.image}
          alt="profile"
          className="rounded-full " />
      </div>
      <div className="btn my-3 mx-auto text-center w-50 h-9.5 rounded-[30px] bg-[#FF8906] flex justify-center justify-self-center" >
        <button className="">Upload New Photo</button>
      </div>
      <span className="font-semibold text-base tracking-normal text-center text-[#4F5665]">
        {props.date}
      </span>
    </div>
  )
}

function ProfileHeader(props) {
  return (
    <div className="top ">
      <h1 className="w-37 h-15 text-[#0B0909] text-base font-[Plus_Jakarta_Sans] font-mediumtext-[48px] opacity-100top-[154px] left-32.5 text-[45px] leading-none sm:ml-0 ml-12.5">
        {props.titile}
      </h1>
    </div>
  )
}


export default function Profile() {
  const dataLogin = JSON.parse(localStorage.getItem("token_auth_user")) || []
  console.log(dataLogin);
  console.log(dataLogin.name);
  
  return (
    <>
    <main className="flex justify-center my-[10vh]">
      <div className="main-content mx-auto flex flex-col juistify-center overflow-hidden">
          <ProfileHeader titile="Profile" />
        <div className="wrapper mx-auto text-left flex sm:flex-row flex-col justify-center gap-5 ">
          <div className="text-center w-70 font-[Plus Jakarta Sans] border border-solid border-red-200 flex flex-col h-85.75 mx-auto">
            <PropfileComp name={dataLogin.name} email={dataLogin.email} image="https://placehold.co/400" date="Since 20 January 2022" />
          </div>
          <form className="flex flex-col gap-10 sm:w-195 w-95 h-141.5 [&>div]:mx-10 my-10">
            <InputForProfile type="text" title="Full Name" valueNameId={dataLogin.name} placeholder={dataLogin.name} />
            <InputForProfile type="email" title="Email" valueNameId={dataLogin.email} placeholder={dataLogin.email} />
            <InputForProfile type="number" title="Phone" placeholder="087753518801" />
            <InputForProfile type="password" title="Password" placeholder={dataLogin.password} />
            <InputForProfile type="text" title="address" placeholder="Isikan Alamat Supaya Bisa Langsung Checkout" />
            <div className="input-user flex flex-col gap-3.75">
              <button className="bg-[#FF8906] h-10 rounded">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </main>
    </>
  );
}
