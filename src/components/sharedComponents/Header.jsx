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
            
        </div>
    );
};

export default Header;