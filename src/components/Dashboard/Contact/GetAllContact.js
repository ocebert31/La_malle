import { useEffect, useState } from "react";
import ErrorAlert from '../../Notifications/ErrorAlert.js';
import { useAuth } from "../../../context/AuthContext.js"; 
import { getContact } from "../../../services/contactService.js";
import ContactCard from "./ContactCard.js";
import InfiniteScrollComponent from '../../../common/UI/infiniteScroll.js';
import SearchBar from "../../../common/SearchBar.js.js";
import { checkHasMore } from "../../../utils/pagination.js";
import UrgencyFilter from "./UrgencyFilter.js";
import StatusFilter from "./StatusFilter.js";

function GetAllContact() {
    const [contacts, setContacts] = useState([]);
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
        setContacts([]); 
        setPage(1);
        setHasMore(true);
    }, [searchQuery, urgency, status]);
    
    useEffect(() => {
        const loadContacts = async () => {
            try {
                setLoading(true);
                const fetchedContacts = await getContact(searchQuery, page, limit, urgency, status, token);
                setContacts(prevContacts => page === 1 ? fetchedContacts.contacts : [...prevContacts, ...fetchedContacts.contacts]);
                checkHasMore(fetchedContacts, limit, setHasMore);
            } catch {
                setShowErrorAlert("Erreur lors de la récupération des demandes");
            } finally {
                setLoading(false);
            }
        };
        loadContacts();
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
            <h2 className="text-4xl font-bold text-center mb-2 text-primary">
                Liste des demandes
            </h2>
            <p className="text-center text-gray-500 mb-8">
                Vous avez {contacts.length} demande{contacts.length > 1 ? "s" : ""}
            </p>
            {loading && contacts.length === 0  ? (
                <div className="flex justify-center items-center py-6">
                    <div className="w-10 h-10 border-4 border-t-primary border-gray-300 rounded-full animate-spin"></div>
                </div>
            ) : !loading && contacts.length === 0 ? (
                <p className="text-gray-600 text-center text-lg mt-10">
                Aucune demande pour l’instant.
                </p>
            ) : (
            <InfiniteScrollComponent loadMore={() => setPage(page + 1)} dataLength={contacts.length} hasMore={hasMore}>
                <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {contacts.map((req) => (
                        <ContactCard key={req._id} contact={req} setContacts={setContacts}/>
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

export default GetAllContact;