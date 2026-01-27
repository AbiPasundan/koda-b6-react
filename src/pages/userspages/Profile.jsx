export default function Profile() {
  return (
    <main className="flex justify-center mt-[50px]">
      <div className="main-content">
        <div className="top ">
          <h1 className="w-[148px] h-[60px] text-[#0B0909] text-base font-[Plus_Jakarta_Sans] font-mediumtext-[48px] w-[148] h-[60] opacity-100top-[154px] left-[130px] text-[45px] leading-none sm:ml-[0px] ml-[50px]">
            Profile
          </h1>
        </div>
        <div className="wrapper text-left flex sm:flex-row flex-col justify-center gap-[20px] ">
          <div className="text-center w-[280px] sm:h-[343px] font-[Plus Jakarta Sans] border border-solid border-red-200 flex flex-col h-[343px] sm:h-[143px] sm:ml-[0px] ml-[50px]">
            <div className="header-title h-[62px] mb-10">
              <h2 className="font-[Plus Jakarta Sans] font-medium text-xl">
                Ghaluh Wizard
              </h2>
              <span className="font-[Plus Jakarta Sans]">ghaluhwizz@gmail.com</span>
              <div
                className="pics w-[100%] h-[113px] flex justify-center"
              >
                <img
                  src="./../img/hero.png"
                  alt="profile"
                  className="rounded-full w-[113px]"
                />
              </div>
              <div
                className="btn text-center w-[200px] h-[38px] rounded-[30px] bg-[#FF8906] flex justify-center justify-self-center"
              >
                <button className="text-center">Upload New Photo</button>
              </div>
              <span className="font-semibold text-base tracking-normal text-center text-[#4F5665]">
                Since 20 January 2022
              </span>
            </div>
          </div>
          <form className="flex flex-col gap-10 sm:w-[780px] w-[380px] h-[566px] [&>div]:mx-10 my-10">
            <div className="input-user flex flex-col gap-[15px]">
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
            </div>
            <div className="input-user flex flex-col gap-[15px]">
              <button className="bg-[#FF8906] h-10 rounded">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
