import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className="font-semibold">Login With</h1>
            <div className="flex flex-col gap-5 mt-10">
                <button className="btn"><FaGoogle /> Login with Google</button>
                <button className="btn"><FaGithub /> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;