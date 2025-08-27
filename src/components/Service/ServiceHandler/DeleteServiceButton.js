import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteService} from '../../../services/serviceService'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from "../../../context/AuthContext";
import ErrorAlert from '../../Notifications/ErrorAlert';

function DeleteServiceButton({ id }) {
    const navigate = useNavigate();
    const { token } = useAuth();
    const [showErrorAlert, setShowErrorAlert] = useState("");

    const handleDelete = async () => {
        try {
            await deleteService(id, token);
            navigate('/services');
        } catch (error) {
            setShowErrorAlert("Erreur lors de la suppression de la préstation.")
        }
    };

    return (
        <div>
            <button onClick={handleDelete} className="text-secondary transition-colors duration-300">
                <FontAwesomeIcon icon={faTrash} />
            </button>
            {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
        </div>
    );
};

export default DeleteServiceButton;
