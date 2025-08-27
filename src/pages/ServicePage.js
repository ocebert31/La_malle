import React, { useState, useEffect } from 'react';
import { getOneService } from '../services/serviceService';
import { useParams } from 'react-router-dom';
import DeleteServiceButton from '../components/Service/ServiceHandler/DeleteServiceButton';
import EditServiceButton from '../components/Service/ServiceHandler/EditServiceButton';
import ServiceContent from '../components/Service/DisplayService/ServiceContent';
import EditServiceForm from '../components/Service/EditServiceForm';
import { useAuth } from "../context/AuthContext";
import CommentList from '../components/Comment/CommentList';
import ErrorAlert from '../components/Notifications/ErrorAlert';
import { isAuthor } from '../utils/autorization';

function ServicePage() {
    const [service, setService] = useState(null);
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);
    const { user, token } = useAuth();
    const [showErrorAlert, setShowErrorAlert] = useState("");
    
    useEffect(() => {
        const loadService = async () => {
            try {
                const result = await getOneService(id, token);
                setService(result);
            } catch {
                setShowErrorAlert("Erreur lors de la récupération de la préstation.");
            }
        };
        loadService();
    }, [id, token]);

    const editService = () => {
        setIsEditing(true);
    };

    const cancelEdit = () => {
        setIsEditing(false);
    };

    if (!service) {
        return  <div className="flex justify-center items-center min-h-screen bg-gray-100">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-primary border-solid"></div>
                        <p className="mt-4 text-xl text-gray-700 font-semibold">Chargement...</p>
                    </div>
                </div>
    }
 
    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className="container mx-auto px-4 py-8">
                 {isAuthor(user, service)  && (
                    <div className="flex justify-center space-x-4 mb-4">
                        <DeleteServiceButton id={service._id} />
                        <EditServiceButton editService={editService} isEditing={isEditing}/>
                    </div>
                )}
                {isEditing ? (
                    <EditServiceForm service={service} setService={setService} cancelEdit={cancelEdit}/>
                ) : (
                    <div>
                        <ServiceContent service={service}/>
                        <CommentList serviceId={service._id}/>
                    </div>
                )}
            </div>
        {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
        </div>
    );
}

export default ServicePage;
