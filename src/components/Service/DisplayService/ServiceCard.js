import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './ServiceCard.css';
import Audio from '../ServiceAudio';

function ServiceCard({ service }) {
    return (
        <div className="flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden m-4 sm:m-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="relative w-full md:w-2/5 h-64 sm:h-72 md:h-auto">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"/>
                <span className="absolute bottom-3 left-3 bg-secondary text-white font-bold px-3 py-1 rounded-full shadow-md text-sm sm:text-base">
                    {service.price} €
                </span>
                <span className="absolute top-3 right-3 bg-primary text-white font-bold px-3 py-1 rounded-full shadow-md text-sm sm:text-base">
                    {service.categoryName}
                </span>
            </div>
            <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 sm:mb-3">
                        {service.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-4" 
                    dangerouslySetInnerHTML={{ __html: service.content || '<p>No description available.</p>' }}></p>
                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                        {service.tags && service.tags.map((tag, index) => (
                            <span key={index} className="text-xs sm:text-sm md:text-base text-primary bg-primary/10 dark:bg-primary/20 px-2 sm:px-3 py-1 rounded-full font-medium">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 sm:gap-3 mt-2">
                    <Audio service={service} />
                    <a href={`/services/${service._id}`} className="flex items-center justify-center w-full md:w-auto px-3 sm:px-4 py-2 text-xs sm:text-sm md:text-base font-medium text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:ring-primary-300 transition-colors">
                        Continuer
                        <FontAwesomeIcon icon={faArrowRight} className="w-3 sm:w-4 h-3 sm:h-4 ml-1 sm:ml-2" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
