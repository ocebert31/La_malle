import React, { useState } from 'react';
import { resetPassword } from '../services/authenticationService';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import SuccessAlert from '../components/Notifications/SuccessAlert';
import ErrorAlert from '../components/Notifications/ErrorAlert';
import { confirmPasswordMatch } from '../utils/password';
import FormInput from '../common/FormInput';

function ResetPasswordFormPage() {
    const [showSuccessAlert, setShowSuccessAlert] = useState('');
    const [showErrorAlert, setShowErrorAlert] = useState('');
    const [checkConfirmPassword, setCheckConfirmPassword] = useState('');
    const { token } = useParams();
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const { newPassword, confirmNewPassword } = getValues();  

    const handlePasswordUpdate = async (data) => {
        confirmPasswordMatch(setCheckConfirmPassword, newPassword, confirmNewPassword);
        try {
            await resetPassword(token, data.newPassword, data.confirmNewPassword);
            setShowSuccessAlert('Votre mot de passe a bien été changé');
            setShowErrorAlert('');
        } catch {
            setShowErrorAlert('Erreur lors de la mise à jour de votre mot de passe');
            setShowSuccessAlert('');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full p-6 max-w-md bg-white rounded-lg shadow-lg container-alignement-registration">
                <h1 className="text-2xl font-bold text-center text-primary mb-6">Changement du mot de passe</h1>
                <div className='flex justify-center'>
                    <form onSubmit={handleSubmit(handlePasswordUpdate)} className="space-y-4 style-form">
                        <FormInput label="Nouveau mot de passe :" name="newPassword" placeholder="p4ssw0rd2" type="password" register={register} rules={{ required: "Le mot de passe est requis" }} errors={errors}/>
                        <FormInput label="Confirmer le nouveau mot de passe :" name="confirmNewPassword" placeholder="p4ssw0rd2" type="password" register={register} rules={{ required: "Confirmation du mot de passe requise" }} errors={errors}/>
                        {checkConfirmPassword && <p className="text-red-500 text-center mt-2">{checkConfirmPassword}</p>}
                        <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-300">Mise à jour du mot de passe</button>  
                    </form>
                </div>
                {showSuccessAlert && (<SuccessAlert message={showSuccessAlert} onClose={() => setShowSuccessAlert(false)}/>)}
                {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
            </div>
        </div> 
    );
}

export default ResetPasswordFormPage;