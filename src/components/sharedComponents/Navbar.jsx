import { NavLink } from "react-router-dom";
import loginPng from "../../assets/user.png"


const Navbar = () => {
    return (
        <div className="flex justify-between items-center container mx-auto mt-5">
            <div></div>
            <div className="nav space-x-10">
                <NavLink className={({isActive})=>`text-xl font-medium ${isActive?"text-green-600 underline":""}`} to="/">Home</NavLink>
                <NavLink className={({isActive})=>`text-xl font-medium ${isActive?"text-green-600 underline":""}`} to="/about">About</NavLink>
                <NavLink className={({isActive})=>`text-xl font-medium ${isActive?"text-green-600 underline":""}`} to="/career">Career</NavLink>
            </div>
            <div className="login flex space-x-3">
                <img src={loginPng} alt="" />
                <button className="btn btn-neutral">Login</button>
            </div>

        </div>
    );
};

export default Navbar;