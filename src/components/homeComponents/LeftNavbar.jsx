import { useState } from 'react';

const LeftNavbar = () => {
    const [categories,setCategories]=useState([]);
    useState(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category))
    },[])
    return (
        <div>
            <h1 className='font-semibold'>All Category</h1>
            <div className='flex flex-col gap-5 mt-10'>
                {
                    categories.map(category=><button className='btn' key={category.category_id}>{category.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;