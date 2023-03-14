import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import FeatherIcon from "feather-icons-react"

const Navbar = () => {
    const params = useLocation()
    console.log(params.pathname)

    const welcomePage = params.pathname.split("/")[1].includes("welcome")
    const Notfound = params.pathname.split("/")[1].includes("*")

    const classChange = classNames({
        "hidden": welcomePage && Notfound,
        "flex": !welcomePage && !Notfound

    })
    return ( <nav className={classChange}>
        <ul className="bg-white bottom-0 z-30 fixed h-10 flex justify-between pr-10 pl-4 pt gap-32 items-center shadow-black">
            <li className="p-2 border rounded-full">
            <NavLink to="/" >
                <FeatherIcon icon="home" />
            </NavLink>
            </li>
            <li className="p-2 border rounded-full">
            <NavLink to="/søg"> 
                <FeatherIcon icon="search" />
                 </NavLink>
            </li>
            <li className="p-2 border rounded-full">
            <NavLink to="/kalender">
                <FeatherIcon icon="calendar" />
            </NavLink>
            </li>
        </ul>
    </nav> );
}
 
export default Navbar;