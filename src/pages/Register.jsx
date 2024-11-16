import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AuthContext} from "../AuthProvider/AuthProvider"


const Register = () => {
    const {creatUser,setUser}=useContext(AuthContext)
    const navigate= useNavigate()

    const handleRegister = (e)=>{
        e.preventDefault()
        const  form = new FormData(e.target)
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        console.log({name,photo,email,password});

        creatUser(email,password)
        .then((result)=>{
            const user = result.user;
            console.log(user)
            navigate('/auth/login')

        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
        })
    }
    return (
        <div className='flex justify-center items-center min-h-screen mt-10'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
                <h1 className='text-2xl font-bold text-center'>Register your account</h1>
                <form onSubmit={handleRegister} className="card-body">
                    {/* name input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" 
                        name="name"
                        placeholder="your name" className="input input-bordered" />
                    </div>
                    {/* photo URL  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" 
                        name="photo"
                        placeholder="photo" className="input input-bordered" />
                    </div>
                    {/* email input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" 
                        name="email"
                        placeholder="email" className="input input-bordered"/>
                    </div>
                    {/* password input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" 
                        name="password"
                        placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                <h1 className='text-center font-bold'>Already Have an Account? <Link to="/auth/login" className='text-red-500'>Login</Link></h1>
            </div>
        </div>
    );
};

export default Register;