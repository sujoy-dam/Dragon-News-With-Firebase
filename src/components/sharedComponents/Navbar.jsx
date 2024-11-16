import { Link, NavLink } from "react-router-dom";
import loginPng from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const {user,userLogOut}=useContext(AuthContext)
    return (
        <div className="flex justify-between items-center container mx-auto mt-5">
            <div>{user?.email}</div>
            <div className="nav space-x-10">
                <NavLink className={({isActive})=>`text-xl font-medium ${isActive?"text-green-600 underline":""}`} to="/">Home</NavLink>
                <NavLink className={({isActive})=>`text-xl font-medium ${isActive?"text-green-600 underline":""}`} to="/about">About</NavLink>
                <NavLink className={({isActive})=>`text-xl font-medium ${isActive?"text-green-600 underline":""}`} to="/career">Career</NavLink>
            </div>
            <div className="login flex space-x-3">
                <img src={loginPng} alt="" />
                <div>
                    {
                        user?<button onClick={userLogOut} className="btn btn-neutral">Log Out</button>:<Link to="/auth/login" className="btn btn-neutral">Login</Link>
                    }
                </div>
            </div>

        </div>
    );
};

export default Navbar;