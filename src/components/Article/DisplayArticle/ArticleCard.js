import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './ArticleCard.css';
import Audio from '../ArticleAudio';

function ArticleCard({ article }) {
    return (
        <div className="flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden m-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
                <span className="absolute bottom-3 left-3 bg-secondary text-white font-bold px-3 py-1 rounded-full shadow-md">
                    {article.price} €
                </span>
                <span className="absolute top-3 right-3 bg-primary text-white font-bold px-3 py-1 rounded-full shadow-md">
                    {article.categoryName}
                </span>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">{article.title}</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-4 line-clamp-4" 
                       dangerouslySetInnerHTML={{ __html: article.content || '<p>No description available.</p>' }}>
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags && article.tags.map((tag, index) => (
                            <span key={index} className="text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full text-sm font-medium">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 mt-2">
                    <Audio article={article} />
                    <a href={`/articles/${article._id}`}  className="flex items-center justify-center w-4/5 md:w-auto px-4 py-2 text-xs md:text-sm font-medium text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:ring-primary-300 transition-colors">
                        Lire la suite
                        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;
