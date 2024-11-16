import React from 'react';
import Header from '../components/sharedComponents/Header';
import RightNavbar from '../components/homeComponents/RightNavbar';
import { Link, useLoaderData } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const NewsDetails = () => {

    const data = useLoaderData();
    const news = data.data[0]
    console.log(news)
    const {title,details,image_url}=news
    return (
        <div className="container mx-auto">
            <Header></Header>
            <div className='grid grid-cols-9 gap-5'>
                <div className='col-span-6'>
                    <h1 className='font-semibold mb-10'>Dragon News</h1>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-5 pt-5">
                            <img
                                src={image_url}
                                alt="Shoes"
                                className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`} className="btn bg-[#D72050] text-white "><MdOutlineKeyboardArrowLeft className='text-2xl' />All news in this category</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3'><RightNavbar></RightNavbar></div>
            </div>
        </div>
    );
};

export default NewsDetails;