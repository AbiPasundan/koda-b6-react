import { MdDashboard } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export default function SidebarAdmin() {
    const navigate = useNavigate()
    useEffect(() => {
        const tokenAuth = localStorage.getItem("token_auth_admin");
        if (!tokenAuth) {
          navigate("/login");
        }
      }, [navigate]);
    
    const onClick = () => {
        console.log(123)
        localStorage.removeItem("token_auth_admin");
        navigate("/")
    }

    return (
        <>
            <aside id="aside" className="fixed top-[70px] md:translate-x-0 -translate-x-full bg-[#ffffff]" >
            <ul
                className="list-none [&>li]:px-5 [&>li]:mb-2 [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-4 [&>li>a]:p-3 [&>li>a]:rounded-xl [&>li>a]:font-medium [&>li>a>img]:w-5">
                <li>
                <Link to="/admin" href="./dashboard.html" >
                    <MdDashboard /> Dashboard
                </Link>
                </li>
                <li>
                <Link to="/admin/product" href="./product.html">
                    <CiCoffeeCup />Product
                </Link>
                </li>
                <li>
                <Link to="/admin/order" href="./product.html">
                    <IoBagOutline />Order
                </Link>
                </li>
                <li>
                <Link to="/admin/user" href="./product.html">
                    <BsPersonFill />User
                </Link>
                </li>
                <li onClick={onClick}>
                    <Link href="#" >
                        <CiLogout />Logout
                    </Link>
                </li>
            </ul>
            </aside>
        </>
    )
}