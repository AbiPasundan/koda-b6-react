import DashboardCard from "@/components/admincomp/DashboardComp";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const navigate = useNavigate()
  const tokenAuth = localStorage.getItem("token_auth_admin");
  if (!tokenAuth) {
    navigate("/login");
  }

  return (
    <>
      <DashboardCard />
    </>
  )
}
