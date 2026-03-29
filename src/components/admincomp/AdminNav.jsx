import { RiArrowDownSLine } from "react-icons/ri"; 
import { BsSearch } from "react-icons/bs"; 
import { BsCart2 } from "react-icons/bs"; 
import { RxHamburgerMenu } from "react-icons/rx"; 
import { useContext } from "react";
import { HamburgerContext } from "../hook/HamburgerContext";
import AdminNavImg from "@/assets/img/adminimg/AdminNavImg.png"

function Right() {
  const { toggleMenu } = useContext(HamburgerContext)
  return (
    <div className="flex items-center">
      <button className="text-2xl cursor-pointer mr-4 lg:hidden" onClick={() => toggleMenu()} >
        <RxHamburgerMenu size="16" />
      </button>
      <div className="flex items-center gap-2.5 font-semibold text-xl text-[#5d4037]">
        <img loading="lazy" src={AdminNavImg} alt="Gambar" width="300" />
      </div>
    </div>
  )
}

function Left() {
  return  (
    <div className="flex items-center gap-5">
      <BsSearch />
      <BsCart2 />
      <div className="w-8.75 h-8.75 rounded-full overflow-hidden cursor-pointer">
        <img loading="lazy"
          src="https://ui-avatars.com/api/?name=User+Admin&background=random"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>
      <RiArrowDownSLine />
    </div>
  )
}

export default function AdminNav() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-17.5 bg-white flex justify-between items-center px-6 shadow-sm z-1000">
        <Right />
        <Left />
      </nav>
    </>
  );
}
