
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Markquee = () => {
    return (
        <div>
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
        </div>
    );
};

export default Markquee;