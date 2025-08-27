import React, { useState, useEffect } from 'react';
import { getServices } from '../services/serviceService.js';
import ServiceCard from '../components/Service/DisplayService/ServiceCard.js';
import SearchBar from '../common/Services/SearchBar.js.js';
import { useAuth } from '../context/AuthContext.js';
import FilterService from '../components/Service/FilterService.js';
import InfiniteScrollComponent from '../common/UI/infiniteScroll.js';
import ErrorAlert from '../components/Notifications/ErrorAlert.js';
import { checkHasMore } from '../utils/pagination.js';

function ServiceListPage({ type }) {
    const { token } = useAuth();
    const [services, setServices] = useState([]);
    const [serviceLength, setServiceLength] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [page, setPage] = useState(1);
    const [limit] = useState(20);
    const [hasMore, setHasMore] = useState(true);
    const [showErrorAlert, setShowErrorAlert] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const loadServices = async () => {
        try {
            setLoading(true);
            const result = await getServices(searchQuery, page, limit, type, token, selectedCategory);
            setServices(prev => page === 1 ? result : [...prev, ...result]);
            setServiceLength(result.length);
            checkHasMore(result, limit, setHasMore);
        } catch {
            setShowErrorAlert("Erreur lors de la récupération des prestations.");
        } finally {
            setLoading(false);
        }
    };
    loadServices();
    }, [searchQuery, page, limit, type, token, selectedCategory]);

    useEffect(() => {
        setServices([]);
        setPage(1);
        setHasMore(true);
    }, [searchQuery, selectedCategory, type]);

    const handleSearchQueryChange = (search) => {
        setSearchQuery(search);
        setPage(1);
    }

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
        setPage(1);
    }

    return (
        <div className="container mx-auto px-4 min-h-screen">
            <div className="text-center my-16">
                <h1 className="mb-8 relative max-w-md mx-auto text-center">
                    <span className="block font-extrabold text-5xl sm:text-6xl md:text-7xl text-primary drop-shadow-md">
                        La malle
                    </span>
                    <span className="block mt-2 text-gray-700 italic text-sm sm:text-base md:text-lg lg:text-xl tracking-wide">
                        "Des sourires, des plaisirs et des sens"
                    </span>
                    <span className="block h-1  bg-gradient-to-r from-[#5941FF] to-[#DF98FF] rounded-full mx-auto mt-4 shadow-lg"></span>
                </h1>
            </div>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mb-6'>
                <SearchBar handleSearchQueryChange={handleSearchQueryChange}/>
                <FilterService onCategoryChange={handleCategoryChange}/>
            </div>
            {loading && services.length === 0  ? (
                <div className="flex justify-center items-center py-6">
                    <div className="w-10 h-10 border-4 border-t-primary border-gray-300 rounded-full animate-spin"></div>
                </div>
            ) : !loading && services.length === 0 ? (
                <div className="flex items-center justify-center p-4 text-gray-600 italic">
                    Aucune prestation affichée pour le moment
                </div>
            ) : (
            <InfiniteScrollComponent loadMore={() => setPage(page + 1)} dataLength={serviceLength} hasMore={hasMore}>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {services.map(service => (
                        <ServiceCard key={service._id} service={service} />
                    ))}
                </div>
            </InfiniteScrollComponent>)}
            {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
        </div>
    );
}

export default ServiceListPage;
