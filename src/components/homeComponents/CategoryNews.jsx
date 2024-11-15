import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const CategoryNews = () => {
    const { data: news } = useLoaderData();
    // console.log(news)
    return (
        <div>
            <h1 className="font-semibold mb-10">Dragon News Home</h1>
            <div className="space-y-5">
                {
                    news.map(singleNews=><NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;