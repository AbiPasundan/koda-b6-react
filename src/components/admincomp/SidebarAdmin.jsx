import { MdDashboard } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router";

export default function SidebarAdmin() {
    return (
        <>
            <aside id="aside" class="fixed top-[70px] md:translate-x-0 -translate-x-full bg-[#ffffff]" >
            <ul
                class="list-none [&>li]:px-5 [&>li]:mb-2 [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-4 [&>li>a]:p-3 [&>li>a]:rounded-xl [&>li>a]:font-medium [&>li>a>img]:w-5">
                <li>
                <Link href="./dashboard.html" class="bg-[#FF8906]" >
                    <MdDashboard /> Dashboard
                </Link>
                </li>
                <li>
                <Link href="./product.html">
                    <CiCoffeeCup />Product
                </Link>
                </li>
                <li>
                <Link href="./product.html">
                    <IoBagOutline />Order
                </Link>
                </li>
                <li>
                <Link href="./product.html">
                    <BsPersonFill />User
                </Link>
                </li>
                <li>
                <a href="#" >
                    <CiLogout />Logout</a>
                </li>
            </ul>
            </aside>
        </>
    )
}