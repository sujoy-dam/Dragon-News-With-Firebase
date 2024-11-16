import PropTypes from 'prop-types';
import { FaEye, FaStar, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const NewsCard = ({ singleNews }) => {
    // console.log(singleNews)
    return (
        <Link to={`/news/${singleNews._id}`} className="card bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            {/* Header Section */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center">
                    <img
                        src={singleNews.author.img}
                        alt={singleNews.author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-2">
                        <h3 className="text-sm font-semibold">{singleNews.author.name}</h3>
                        <p className="text-xs text-gray-500">{new Date(singleNews.author.published_date).toDateString()}</p>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <FaShareAlt />
                </button>
            </div>

            {/* Image Section */}
            <figure>
                <img src={singleNews.thumbnail_url} alt="Article Thumbnail" className="w-full h-48 object-cover" />
            </figure>

            {/* Body Section */}
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2 line-clamp-2">{singleNews.title}</h2>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">{singleNews.details}</p>
                <div className="flex justify-between items-center">
                    {/* Rating */}
                    <div className="flex items-center text-yellow-500">
                        <FaStar />
                        <span className="ml-1 text-sm font-medium">{singleNews.rating.number}</span>
                    </div>
                    {/* Total Views */}
                    <div className="flex items-center text-gray-600">
                        <FaEye />
                        <span className="ml-1 text-sm">{singleNews.total_view}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};
NewsCard.propTypes = {
    singleNews: PropTypes.object.isRequired
}

export default NewsCard;
