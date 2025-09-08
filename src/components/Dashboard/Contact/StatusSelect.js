import { useAuth } from '../../../context/AuthContext';
import { updateStatusContact } from "../../../services/contactService";
import SuccessAlert from '../../Notifications/SuccessAlert';
import ErrorAlert from '../../Notifications/ErrorAlert';
import { useState } from 'react';
import { contactStatusColors } from '../../../utils/constants/contact';

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

    return (
        <div>
            <select value={contact.status} onChange={(e) => handleStatusChange(contact._id, e.target.value)} className={`p-2 rounded-xl border-none focus:ring-2 focus:ring-[#7a6bfc] focus:outline-none ${contactStatusColors[contact.status]}`}>
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
