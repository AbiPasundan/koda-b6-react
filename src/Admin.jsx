// component
import SidebarAdmin from "./components/admincomp/SidebarAdmin";
import AdminNav from "./components/admincomp/AdminNav";
// pages 
import Dashboard from "./pages/adminpages/Dashboard";
import AdminProduct from "./pages/adminpages/AdminProduct";
import AdminOrder from "./pages/adminpages/AdminOrder";
import AdminUser from "./pages/adminpages/AdminUser";
import { HeaderInputProduct, HeaderInputOrder, HeaderInputUser } from "./components/admincomp/HeaderInput";
import { Outlet } from "react-router";
import {  HamburgerMenu } from "./components/hook/HamburgerContext";

function AdminLayout() {
    return (
        <HamburgerMenu>
            <AdminNav />
            <SidebarAdmin />
            <main className="mt-17.5 md:ml-62.5 p-8 transition-all duration-300">
                <Outlet />
            </main>
        </HamburgerMenu>
    )
}

function AdminDashboard() {
    return (
        <>
            <Dashboard />
        </>
    )
}

function AdminProductPage() {
    return (
        <>
            <HeaderInputProduct />
            <AdminProduct />
        </>
    )
}
function AdminOrderPage() {
    return (
        <>
            <HeaderInputOrder />
            <AdminOrder />
        </>
    )
}
function AdminUserPage() {
    return (
        <>
            <HeaderInputUser />
            <AdminUser />
        </>
    )
}

export { AdminLayout, AdminProductPage, AdminDashboard, AdminOrderPage, AdminUserPage }