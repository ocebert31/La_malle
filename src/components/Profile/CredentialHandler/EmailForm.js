import React, { useState } from 'react';
import { updateEmail } from '../../../services/authenticationService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../context/AuthContext';
import SuccessAlert from '../../Notifications/SuccessAlert';
import ErrorAlert from '../../Notifications/ErrorAlert';
import FormInput from '../../../common/Contact/FormInput';

function EmailForm() {
    const [showSuccessAlert, setShowSuccessAlert] = useState('');
    const [showErrorAlert, setShowErrorAlert] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { token } = useAuth();

    const handleEmailUpdate = async (data) => {
        try {
            await updateEmail(data.newEmail, data.currentPassword, token);
            setShowSuccessAlert('Un e-mail de confirmation a été envoyé à votre nouvelle adresse.');
            setShowErrorAlert('');
        } catch (error) {
            setShowErrorAlert('Erreur lors de la mise à jour de l\'email.');
            setShowSuccessAlert('');
        }
    };

    return (
        <div className="mt-6 justify-center">
            <button className="flex items-center text-lg font-semibold text-gray-800 mb-4 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faChevronDown} className={`w-5 h-5 mr-2 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />Modifier l'adresse e-mail 
            </button>
            {isOpen && (
                <div className="mt-4 p-4 border border-gray-300 rounded-lg transition-all duration-300 ease-in-out transform origin-top scale-y-100" style={{ animation: 'slideDown 0.3s ease-in-out' }}>
                    <form onSubmit={handleSubmit(handleEmailUpdate)} className="space-y-4">
                        <FormInput label="Nouvelle adresse mail :" name="newEmail" placeholder="lamalle2@gmail.com" register={register} rules={{ required: "L'email est requis" }} errors={errors}/>
                        <FormInput label="Mot de passe actuel :" name="currentPassword" placeholder="p4ssw0rd" type="password" register={register} rules={{ required: "Le mot de passe est requis" }} errors={errors}/>
                        <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg">Mettre à jour</button>
                    </form>
                </div>
            )}
            {showSuccessAlert && (<SuccessAlert message={showSuccessAlert} onClose={() => setShowSuccessAlert(false)}/>)}
            {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
        </div>
    );
}

export default EmailForm;