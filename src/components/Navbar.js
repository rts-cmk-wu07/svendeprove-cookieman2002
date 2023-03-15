import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import FeatherIcon from "feather-icons-react"

const Navbar = () => {
    const params = useLocation()

    const LoginPage = params.pathname.split("/")[1].includes("login")
    const Notfound = params.pathname.split("/")[1].includes("*")

    const classChange = classNames({
        "hidden": LoginPage && Notfound,
        "flex": !LoginPage && !Notfound

    })
    return ( <nav className={classChange}>
        <ul className="bg-grey bottom-0 z-50 fixed h-12  flex justify-between w-screen pr-10  pl-4  gap-32 items-center shadow-black">
            <li className="p-2 border rounded-full">
            <NavLink to="/"
        
            >
                <FeatherIcon icon="home" />
            </NavLink>
            </li>
            <li className="p-2 border rounded-full">
            <NavLink to="/søg"> 
                <FeatherIcon icon="search" />
                 </NavLink>
            </li>
            <li className="p-2 border rounded-full">
            <NavLink to="/kalender"
            
            >
                <FeatherIcon icon="calendar" />
            </NavLink>
            </li>
        </ul>
    </nav> );
}
 
export default Navbar;