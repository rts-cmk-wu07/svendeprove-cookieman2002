import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Layout = () => {
    return (<>
        
        <main>
            <Outlet/>
        </main>
      <Navbar/>
    </>
    );
}

export default Layout;