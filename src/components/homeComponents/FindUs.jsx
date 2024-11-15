import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div className="mt-10">
            <h1 className="font-medium">Find Us On</h1>
            <div className="join flex join-vertical mt-5 *:bg-base-100">
                <button className="btn join-item justify-start"><FaFacebook /> Facebook</button>
                <button className="btn join-item justify-start"><FaTwitter /> Twitter</button>
                <button className="btn join-item justify-start"><FaSquareInstagram /> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;