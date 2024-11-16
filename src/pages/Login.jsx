import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {signInUser,setUser}=useContext(AuthContext)

    const handleSignIn = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signInUser(email,password)
        .then((result)=>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch((error)=>{
            console.log(error.message)
        })

    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
                <h1 className='text-2xl font-bold text-center'>Login your account</h1>
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                <h1 className='text-center font-bold'>Don&apos;t Have an Account? <Link to="/auth/register" className='text-red-500'>Register</Link></h1>
            </div>
        </div>
    );
};

export default Login;