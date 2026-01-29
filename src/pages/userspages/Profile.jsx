import Nav from "@/components/usercomp/Nav";
import Footer from "@/components/usercomp/Footer";



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
      <div className="btn text-center w-[200px] h-[38px] rounded-[30px] bg-[#FF8906] flex justify-center justify-self-center" >
        <button className="text-center">Upload New Photo</button>
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
    <Nav bg="bg-black"/>
    <main className="flex justify-center my-[10vh]">
      <div className="main-content mx-auto flex flex-col juistify-center overflow-hidden">
          <ProfileHeader titile="Profile" />
        <div className="wrapper mx-auto text-left flex sm:flex-row flex-col justify-center gap-[20px] ">
          <div className="text-center w-[280px] font-[Plus Jakarta Sans] border border-solid border-red-200 flex flex-col h-[343px] mx-auto">
            <PropfileComp name="Ghaluh Wizard" email="ghaluhwizz@gmail.com" image="https://placehold.co/400" date="Since 20 January 2022" />
          </div>
          <form className="flex flex-col gap-10 sm:w-[780px] w-[380px] h-[566px] [&>div]:mx-10 my-10">
            <InputForProfile type="text" title="Full Name" value="name" placeholder="Ghaluh Wizar" />
            <InputForProfile type="email" title="Email" value="email" placeholder="ghaluhwilzarr@gmail.com" />
            <InputForProfile type="number" title="Phone" value="phone" placeholder="087753518801" />
            <InputForProfile type="password" title="Password" value="password" placeholder="********" />
            <InputForProfile type="text" title="address" value="address" placeholder="griyua Bandung Indah" />
            {/* <div className="input-user flex flex-col gap-[15px]">
              <label
                for="name"
                className="font-[Plus_Jakarta_Sans] font-semibold text-[16px] leading-[100%] align-middle"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="sm:w-[780px] h-[52px] border rounded-[8px] pt-[14px] pr-[13px] pb-[14px] pl-[53px] gap-[10px] bg-[url('./../img/icons/Profile.png')] bg-no-repeat bg-[left_10px_bottom_15px]"
                placeholder="Ghaluh Wizard"
              />
            </div>
            <div className="input-user flex flex-col gap-[15px]">
              <label
                for="email"
                className="font-[Plus_Jakarta_Sans] font-semibold text-[16px] leading-[100%] align-middle"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="sm:w-[780px] h-[52px] border rounded-[8px] pt-[14px] pr-[13px] pb-[14px] pl-[53px] gap-[10px] bg-[url('./../img/icons/envelope.svg')] bg-no-repeat bg-[left_10px_bottom_15px]"
                placeholder="ghaluhwizz@gmail.com"
              />
            </div>
            <div className="input-user flex flex-col gap-[15px]">
              <label
                for="phone"
                className="font-[Plus_Jakarta_Sans] font-semibold text-[16px] leading-[100%] align-middle"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="sm:w-[780px] h-[52px] border rounded-[8px] pt-[14px] pr-[13px] pb-[14px] pl-[53px] gap-[10px] bg-[url('./../img/icons/phone.svg')] bg-no-repeat bg-[left_10px_bottom_15px]"
                placeholder="082116304338"
              />
            </div>
            <div className="input-user flex flex-col gap-[15px]">
              <div className="flex justify-between">
                <label
                  for="password"
                  className="font-[Plus_Jakarta_Sans] font-semibold text-[16px] leading-[100%] align-middle"
                >
                  Passoword
                </label>
                <a className="text-right font-[Plus_Jakarta_Sans] font-normaltext-[16px] leading-[100%] tracking-[0%] text-right text-[#FF8906]">
                  Set new password
                </a>
              </div>
              <input
                type="password"
                name="passowrd"
                id="password"
                className="sm:w-[780px] h-[52px] border rounded-[8px] pt-[14px] pr-[13px] pb-[14px] pl-[53px] gap-[10px] bg-[url('./../img/icons/Profile.png')] bg-no-repeat bg-[left_10px_bottom_15px]"
                placeholder="*********"
              />
            </div>
            <div className="input-user flex flex-col gap-[15px]">
              <label
                for="address"
                className="font-[Plus_Jakarta_Sans] font-semibold text-[16px] leading-[100%] align-middle"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="md:w-[780px] h-[52px] border rounded-[8px] pt-[14px] pr-[13px] pb-[14px] pl-[53px] gap-[10px] bg-[url('./../img/icons/Profile.png')] bg-no-repeat bg-[left_10px_bottom_15px]"
                placeholder="Griya Bandung Indah"
              />
            </div> */}
            <div className="input-user flex flex-col gap-[15px]">
              <button className="bg-[#FF8906] h-10 rounded">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}
