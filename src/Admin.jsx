// component
import SidebarAdmin from "./components/admincomp/SidebarAdmin";
import AdminNav from "./components/admincomp/AdminNav";
// pages 
import Dashboard from "./pages/adminpages/Dashboard";
import AdminProduct from "./pages/adminpages/AdminProduct";
import AdminOrder from "./pages/adminpages/AdminOrder";
import { Outlet } from "react-router";

function AdminLayout() {
    return (
        <>
            <AdminNav />
            <SidebarAdmin />
            <main class="mt-[70px] md:ml-[250px] p-8 transition-all duration-300">
                <Outlet />
            </main>
        </>
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
            <AdminProduct />
        </>
    )
}
function AdminOrderPage() {
    return (
        <>
            <AdminOrder />
        </>
    )
}

export { AdminLayout, AdminProductPage, AdminDashboard, AdminOrderPage }