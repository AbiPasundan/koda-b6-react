import { MdDashboard } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { HamburgerContext } from "../hook/HamburgerContext";

export default function SidebarAdmin() {
    const navigate = useNavigate();
    const { open } = useContext(HamburgerContext);

    const getUserFromToken = () => {
        const token = localStorage.getItem("token");
        if (!token) return null;

        try {
            return JSON.parse(atob(token.split(".")[1]));
        } catch {
            return null;
        }
    };

    const user = getUserFromToken();

    useEffect(() => {
        if (!user || user.role !== "admin") {
            navigate("/");
        }
    }, [user, navigate]);

    const onClick = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <>
            <aside id="aside" className={` ${open && '-translate-x-full'} fixed md:top-70 top-0 md:translate-x-0  bg-[#ffffff]`} >
                <ul className="list-none [&>li]:px-5 [&>li]:mb-2 [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-4 [&>li>a]:p-3 [&>li>a]:rounded-xl [&>li>a]:font-medium [&>li>a>img]:w-5">
                    <li>
                        <Link to="/admin">
                            <MdDashboard /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/product">
                            <CiCoffeeCup />Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/order">
                            <IoBagOutline />Order
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/user">
                            <BsPersonFill />User
                        </Link>
                    </li>
                    <li onClick={onClick}>
                        <Link>
                            <CiLogout />Logout
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}