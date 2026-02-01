import { useEffect } from "react";
import { FaCoffee } from "react-icons/fa";
import { useNavigate } from "react-router";

function Right() {
  return (
    <div className="flex items-center">
      <div className="text-2xl cursor-pointer mr-4 lg:hidden">
        <svg
          id="btn"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
      <div className="flex items-center gap-2.5 font-semibold text-xl text-[#5d4037]">
        <FaCoffee />
      </div>
    </div>
  )
}

function Left() {
  return  (
    <div className="flex items-center gap-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#4F5665"
        className="bi bi-search text-gray-500 cursor-pointer hidden sm:block"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#4F5665"
        className="bi bi-cart text-gray-500 cursor-pointer"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
      </svg>
      <div className="w-[35px] h-[35px] rounded-full overflow-hidden cursor-pointer">
        <img
          src="https://ui-avatars.com/api/?name=User+Admin&background=random"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-caret-down-square"
        viewBox="0 0 16 16"
      >
        <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0z" />
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
      </svg>
    </div>
  )
}

export default function AdminNav() {
  const navigate = useNavigate()
    useEffect(() => {
        const tokenAuth = localStorage.getItem("token_auth_admin");
        if (!tokenAuth) {
          navigate("/login");
        }
      }, [navigate]);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[70px] bg-white flex justify-between items-center px-6 shadow-sm z-[1000]">
        <Right />
        <Left />
      </nav>
    </>
  );
}
