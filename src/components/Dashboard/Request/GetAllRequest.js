import { useEffect, useState } from "react";
import ErrorAlert from '../../Notifications/ErrorAlert';
import { useAuth } from "../../../context/AuthContext"; 
import { getRequest } from "../../../services/contactService";
import RequestCard from "./RequestCard";
import InfiniteScrollComponent from '../../../common/UI/infiniteScroll';
import SearchBar from '../../../common/Articles/SearchBar.js';
import { checkHasMore } from "../../../utils/helpers/checkHasMore.js";
import UrgencyFilter from "./UrgencyFilter.js";
import StatusFilter from "./StatusFilter.js";

function GetAllRequest() {
    const [requests, setRequests] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); 
    const [showErrorAlert, setShowErrorAlert] = useState("");
    const { token } = useAuth();
    const [page, setPage] = useState(1); 
    const [hasMore, setHasMore] = useState(true);
    const [limit] = useState(10);
    const [urgency, setUrgency] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {        
        setRequests([]); 
        setPage(1);
        setHasMore(true);
    }, [searchQuery, urgency, status]);
    
    useEffect(() => {
        const loadRequests = async () => {
            try {
                setLoading(true);
                const fetchedRequests = await getRequest(searchQuery, page, limit, urgency, status, token);
                setRequests(prevRequests => page === 1 ? fetchedRequests.requests : [...prevRequests, ...fetchedRequests.requests]);
                checkHasMore(fetchedRequests, limit, setHasMore);
            } catch {
                setShowErrorAlert("Erreur lors de la récupération des demandes");
            } finally {
                setLoading(false);
            }
        };
        loadRequests();
    }, [searchQuery, page, limit, urgency, status, token]);

    const handleSearchQueryChange = (search) => {
        setSearchQuery(search);
        setPage(1);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10 font-[Montserrat]">
            <SearchBar handleSearchQueryChange={handleSearchQueryChange} />
            <UrgencyFilter setUrgency={setUrgency} urgency={urgency} />
            <StatusFilter setStatus={setStatus} status={status} />
            <h1 className="text-4xl font-bold text-center mb-2 text-[#7a6bfc]">
                Liste des demandes
            </h1>
            <p className="text-center text-gray-500 mb-8">
                Vous avez {requests.length} demande{requests.length > 1 ? "s" : ""}
            </p>
            {loading && requests.length === 0  ? (
                <div className="flex justify-center items-center py-6">
                    <div className="w-10 h-10 border-4 border-t-primary border-gray-300 rounded-full animate-spin"></div>
                </div>
            ) : !loading && requests.length === 0 ? (
                <p className="text-gray-600 text-center text-lg mt-10">
                Aucune demande pour l’instant.
                </p>
            ) : (
            <InfiniteScrollComponent loadMore={() => setPage(page + 1)} dataLength={requests.length} hasMore={hasMore}>
                <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {requests.map((req) => (
                        <RequestCard key={req._id} request={req} setRequests={setRequests}/>
                    ))}
                </div>
            </InfiniteScrollComponent>
            )}
            {showErrorAlert && (
                <ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)} />
            )}
        </div>
    );
}

export default GetAllRequest;