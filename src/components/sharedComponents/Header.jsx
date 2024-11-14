import moment from 'moment';
import logo from '../../assets/logo.png'
import Navbar from './Navbar';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-col items-center'>
            <img className='' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            <div className='flex items-center gap-3 bg-base-200 p-3 rounded-lg'>
                <p className='bg-[#D72050] px-5 py-3 rounded-lg text-white font-medium'>Latest</p>
                <Marquee className='space-x-3' pauseOnHover={true} pauseOnClick={true} speed={20}>
                    <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ratione?
                    </Link>
                    <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ratione?
                    </Link>
                    <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ratione?
                    </Link>
                </Marquee>
            </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;