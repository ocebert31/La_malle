import { useAuth } from '../../../context/AuthContext';
import { updateStatusContact } from "../../../services/contactService";
import SuccessAlert from '../../Notifications/SuccessAlert';
import ErrorAlert from '../../Notifications/ErrorAlert';
import React, { useState } from 'react';

function StatusSelect({ contact, setContacts }) {
    const { token } = useAuth(); 
    const [showSuccessAlert, setShowSuccessAlert] = useState('');
    const [showErrorAlert, setShowErrorAlert] = useState('');

    const handleStatusChange = async (contactId, newStatus) => {
        try {
            await updateStatusContact(contactId, newStatus, token);
            handleUserUpdated(contactId, newStatus)
            setShowSuccessAlert('Le status de la demande a bien été modifié');
            setShowErrorAlert('');
        } catch {
            setShowErrorAlert("Erreur lors du chargement du status");
            setShowSuccessAlert('');
        }
    };

    const handleUserUpdated = (contactId, newStatus) => {
        setContacts((prevContacts) =>
            prevContacts.map((contact) =>
                contact._id === contactId ? { ...contact, status: newStatus } : contact
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
            <select value={contact.status} onChange={(e) => handleStatusChange(contact._id, e.target.value)} className={`p-2 rounded-xl border-none focus:ring-2 focus:ring-[#7a6bfc] focus:outline-none ${statusColors[contact.status]}`}>
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
