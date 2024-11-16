import { Outlet } from "react-router-dom";
import Navbar from "../components/sharedComponents/Navbar";


const AuthLayout = () => {
    return (
        <div className="bg-[#F3F3F3] p-5">
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;