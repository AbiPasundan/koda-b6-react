import { BiMap } from "react-icons/bi";
import { MdOutlineKey } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { jwtDecode } from "jwt-decode";

function InputForProfile({ title, type, name, defaultValue, placeholder, icon: Icon }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-['Plus_Jakarta_Sans'] text-[16px] text-[#0B132A] font-medium">
        {title}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon size={20} />
          </div>
        )}
        <input type={type} name={name} id={name} defaultValue={defaultValue} placeholder={placeholder} className={`w-full h-12 border border-[#DEDEDE] rounded-lg ${Icon ? 'pl-12' : 'pl-4'} pr-4 focus:outline-none focus:border-[#FF8906] focus:ring-1 focus:ring-[#FF8906] transition-all`} />
      </div>
    </div>
  );
}

function ProfileCard({ name, email, image, date }) {
  return (
    <div className="w-full md:w-1/3 p-6 border border-[#E8E8E8] flex flex-col items-center text-center">
      <h2 className="font-['Plus_Jakarta_Sans'] text-xl text-gray-900 truncate w-full">
        {name || "User Name"}
      </h2>
      <span className="font-['Plus_Jakarta_Sans'] text-gray-500 text-sm mb-6 truncate w-full">
        {email || "user@example.com"}
      </span>

      <div className="relative w-28 h-28 mb-6">
        <img loading="lazy" src={image} alt="profile" className="w-full h-full rounded-full object-cover border-4 border-white shadow-md" />
      </div>

      <button className="flex items-center justify-center gap-2 w-full max-w-50 h-11 mb-4 rounded-[5px] bg-[#FF8906] text-[#0B132A] font-medium transition-colors">
        Upload New Photo
      </button>

      <span className="font-['Plus_Jakarta_Sans'] text-sm text-[#4F5665]">
        {date}
      </span>
    </div>
  );
}

function ProfileHeader({ title }) {
  return (
    <div className="w-full mb-8 text-center md:text-left">
      <h1 className="text-3xl md:text-4xl font-['Plus_Jakarta_Sans'] font-medium text-[#0B0909]">
        {title}
      </h1>
    </div>
  );
}

export default function Profile() {
  const token = localStorage.getItem("token")
  const decoded = jwtDecode(token);

  const timestamp = decoded.created_at.split("T")[0];

  return (
    <main className="min-h-screen py-10 px-4 flex justify-center bg-white">
      <div className="w-full max-w-[80%] bg-white rounded-2xl p-6 md:p-10">
        <ProfileHeader title="Profiles" />
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <ProfileCard name={decoded.full_name} email={decoded.email} image="https://placehold.co/400" date={timestamp} />
          <form className="flex-1 flex flex-col gap-6 border border-[#E8E8E8] p-7" onSubmit={(e) => e.preventDefault()}>
            <InputForProfile type="text" title="Full Name" name="fullName" defaultValue={decoded.full_name} placeholder="Enter your name" icon={AiOutlineUser} />
            <InputForProfile type="email" title="Email" name="email" defaultValue={decoded.email} placeholder="Enter your email" icon={FiMail} />
            <InputForProfile type="tel" title="Phone" name="phone" defaultValue={decoded.phone} placeholder="087753518801" icon={FiPhoneCall} />
            <InputForProfile type="password" title="Password" name="password" defaultValue={decoded.password} placeholder="Masukkan password baru" icon={MdOutlineKey} />
            <InputForProfile type="text" title="Address" name="address" defaultValue={decoded.address} placeholder="Isikan Alamat Supaya Bisa Langsung Checkout" icon={BiMap} />
            <button type="submit" className="w-full md:w-auto px-10 h-12 bg-[#FF8906] text-[#0B132A] font-['Plus_Jakarta_Sans'] rounded-lg transition-colors float-right" >Submit</button>
          </form>

        </div>
      </div>
    </main>
  );
}