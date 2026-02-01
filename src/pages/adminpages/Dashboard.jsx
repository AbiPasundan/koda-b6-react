import DashboardCard from "@/components/admincomp/DashboardComp";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Dashboard() {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location.key)

  // const tokenAuth = localStorage.getItem("token_authaididoq");
  // console.log(tokenAuth)
  // if (!tokenAuth || tokenAuth == null ) {
  //   navigate("/login")
  // }

  useEffect(() => {
    const tokenAuth = localStorage.getItem("token_auth_admin");
    if (!tokenAuth) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <DashboardCard />
    </>
  )
}
