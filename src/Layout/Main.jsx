import { Outlet } from "react-router-dom";
import Footer from "../Shared/footer/Footer";
import Navber from "../Shared/Navber/Navber";


const Main = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;