import { useAuth } from '../../../context/AuthContext';
import { updateStatusRequest } from "../../../services/contactService";
import SuccessAlert from '../../Notifications/SuccessAlert';
import ErrorAlert from '../../Notifications/ErrorAlert';
import React, { useState } from 'react';

function StatusSelect({ request, setRequests }) {
    const { token } = useAuth(); 
    const [showSuccessAlert, setShowSuccessAlert] = useState('');
    const [showErrorAlert, setShowErrorAlert] = useState('');

    const handleStatusChange = async (requestId, newStatus) => {
        try {
            await updateStatusRequest(requestId, newStatus, token);
            handleUserUpdated(requestId, newStatus)
            setShowSuccessAlert('Le status de la demande a bien été modifié');
            setShowErrorAlert('');
        } catch {
            setShowErrorAlert("Erreur lors du chargement du status");
            setShowSuccessAlert('');
        }
    };

    const handleUserUpdated = (requestId, newStatus) => {
        setRequests((prevRequests) =>
            prevRequests.map((request) =>
                request._id === requestId ? { ...request, status: newStatus } : request
            )
        );
    };

    const statusColors = {
        "En attente": "bg-yellow-100 text-yellow-800",
        "Acceptée": "bg-green-100 text-green-800",
        "Rejetée": "bg-red-100 text-red-800",
        "En cours": "bg-blue-100 text-blue-800",
    };

    return (
        <div>
            <select value={request.status} onChange={(e) => handleStatusChange(request._id, e.target.value)} className={`p-2 rounded-xl border-none focus:ring-2 focus:ring-[#7a6bfc] focus:outline-none ${statusColors[request.status]}`}>
                <option value="En attente">En attente</option>
                <option value="Acceptée">Acceptée</option>
                <option value="Rejetée">Rejetée</option>
                <option value="En cours">En cours</option>
            </select>
            {showSuccessAlert && (<SuccessAlert message={showSuccessAlert} onClose={() => setShowSuccessAlert(false)}/>)}
            {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
        </div>
    );
}

export default StatusSelect;
