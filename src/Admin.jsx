import SidebarAdmin from "./components/admincomp/SidebarAdmin";
import AdminNav from "./components/admincomp/AdminNav";
import { Outlet } from "react-router";

function AdminDashboardPage() {
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

export {AdminDashboardPage}