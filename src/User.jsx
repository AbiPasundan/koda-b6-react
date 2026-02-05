import { Outlet } from "react-router"
import { Footer, Nav } from "./App"



function UserLayout() {
    return (
        <>
            <Nav bg="bg-black" padding="pb-[80px]" />
                <Outlet />
            <Footer />
        </>
    )
}



export { UserLayout }