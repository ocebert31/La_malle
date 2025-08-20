import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function InfiniteScrollComponent({ loadMore, dataLength, hasMore, children }) {
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [loading, setLoading] = useState(false);
    const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 600);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLoadMore = async () => {
        if (!hasMore) return;
        setLoading(true);
        await loadMore();
        setLoading(false);
        setHasLoadedOnce(true);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <InfiniteScroll dataLength={dataLength} next={handleLoadMore}
                hasMore={hasMore}
                loader={loading && (
                    <div className="flex justify-center items-center py-6">
                        <div className="w-10 h-10 border-4 border-t-primary border-gray-300 rounded-full animate-spin"></div>
                    </div>
                )}
                endMessage={
                    hasLoadedOnce && (
                        <p className="flex justify-center py-8 text-2xl">
                            Vous avez atteint la fin de la liste.
                        </p>
                    )}>
                {children}
            </InfiniteScroll>
            {showScrollToTop && (
                <button onClick={scrollToTop} className="fixed bottom-4 right-4 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark">
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            )}
        </div>
    );
}

export default InfiniteScrollComponent;
