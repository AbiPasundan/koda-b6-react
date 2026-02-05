function InputForProfile(props) {
  return (
    <div className="input-user flex flex-col gap-[15px]">
        <label for={props.value} className="font-[Plus_Jakarta_Sans] font-semibold text-[16px] leading-[100%] align-middle" >
          {props.title}
        </label>
        <input
          type={props.type}
          name={props.value}
          id={props.value}
          className=" h-[52px] border rounded-[8px] pt-[14px]  pb-[14px] pl-[53px] bg-[url('./../img/icons/Profile.png')] "
          placeholder={props.placeholder}
        />
      </div>
  )
}

function PropfileComp(props) {
  return (
    <div className="header-title h-[62px] my-10">
      <h2 className="font-[Plus Jakarta Sans] font-medium text-xl">
        {props.name}
      </h2>
      <span className="font-[Plus Jakarta Sans]">{props.email}</span>
      <div className="pics w-[100%] h-[113px] flex justify-center my-5">
        <img
          src={props.image}
          alt="profile"
          className="rounded-full " />
      </div>
      <div className="btn my-3 mx-auto text-center w-[200px] h-[38px] rounded-[30px] bg-[#FF8906] flex justify-center justify-self-center" >
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
      <h1 className="w-[148px] h-[60px] text-[#0B0909] text-base font-[Plus_Jakarta_Sans] font-mediumtext-[48px] w-[148] h-[60] opacity-100top-[154px] left-[130px] text-[45px] leading-none sm:ml-[0px] ml-[50px]">
        {props.titile}
      </h1>
    </div>
  )
}


export default function Profile() {
  return (
    <>
    <main className="flex justify-center my-[10vh]">
      <div className="main-content mx-auto flex flex-col juistify-center overflow-hidden">
          <ProfileHeader titile="Profile" />
        <div className="wrapper mx-auto text-left flex sm:flex-row flex-col justify-center gap-5 ">
          <div className="text-center w-70 font-[Plus Jakarta Sans] border border-solid border-red-200 flex flex-col h-85.75 mx-auto">
            <PropfileComp name="Ghaluh Wizard" email="ghaluhwizz@gmail.com" image="https://placehold.co/400" date="Since 20 January 2022" />
          </div>
          <form className="flex flex-col gap-10 sm:w-195 w-95 h-141.5 [&>div]:mx-10 my-10">
            <InputForProfile type="text" title="Full Name" value="name" placeholder="Ghaluh Wizar" />
            <InputForProfile type="email" title="Email" value="email" placeholder="ghaluhwilzarr@gmail.com" />
            <InputForProfile type="number" title="Phone" value="phone" placeholder="087753518801" />
            <InputForProfile type="password" title="Password" value="password" placeholder="********" />
            <InputForProfile type="text" title="address" value="address" placeholder="griyua Bandung Indah" />
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
