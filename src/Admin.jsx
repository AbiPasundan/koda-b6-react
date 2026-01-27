// component
import SidebarAdmin from "./components/admincomp/SidebarAdmin";
import AdminNav from "./components/admincomp/AdminNav";
// pages 
import Dashboard from "./pages/adminpages/Dashboard";
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

export { AdminLayout, AdminDashboard }