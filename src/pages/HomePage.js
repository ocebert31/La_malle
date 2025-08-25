import React, { useState, useEffect } from 'react';
import { getArticles } from '../services/articleService';
import ArticleCard from '../components/Article/DisplayArticle/ArticleCard.js';
import SearchBar from '../common/Articles/SearchBar.js';
import { useAuth } from '../context/AuthContext';
import FilterArticle from '../components/Article/FilterArticle.js';
import InfiniteScrollComponent from '../common/UI/infiniteScroll.js';
import ErrorAlert from '../components/Notifications/ErrorAlert';
import { checkHasMore } from '../utils/helpers/checkHasMore.js';

function HomePage({ type }) {
    const { token } = useAuth();
    const [articles, setArticles] = useState([]);
    const [articleLength, setArticleLength] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [page, setPage] = useState(1);
    const [limit] = useState(20);
    const [hasMore, setHasMore] = useState(true);
    const [showErrorAlert, setShowErrorAlert] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const loadArticles = async () => {
        try {
            setLoading(true);
            const result = await getArticles(searchQuery, page, limit, type, token, selectedCategory);
            setArticles(prev => page === 1 ? result : [...prev, ...result]);
            setArticleLength(result.length);
            checkHasMore(result, limit, setHasMore);
        } catch {
            setShowErrorAlert("Erreur lors de la récupération des prestations.");
        } finally {
            setLoading(false);
        }
    };
    loadArticles();
    }, [searchQuery, page, limit, type, token, selectedCategory]);

    useEffect(() => {
        setArticles([]);
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
                <FilterArticle onCategoryChange={handleCategoryChange}/>
            </div>
            {loading && articles.length === 0  ? (
                <div className="flex justify-center items-center py-6">
                    <div className="w-10 h-10 border-4 border-t-primary border-gray-300 rounded-full animate-spin"></div>
                </div>
            ) : !loading && articles.length === 0 ? (
                <div className="flex items-center justify-center p-4 text-gray-600 italic">
                    Aucune prestation affichée pour le moment
                </div>
            ) : (
            <InfiniteScrollComponent loadMore={() => setPage(page + 1)} dataLength={articleLength} hasMore={hasMore}>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {articles.map(article => (
                        <ArticleCard key={article._id} article={article} />
                    ))}
                </div>
            </InfiniteScrollComponent>)}
            {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
        </div>
    );
}

export default HomePage;
