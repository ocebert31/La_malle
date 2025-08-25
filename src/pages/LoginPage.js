import { useForm } from 'react-hook-form';
import { postSession } from '../services/authenticationService';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';
import React, { useState } from 'react';
import SuccessAlert from '../components/Notifications/SuccessAlert';
import ErrorAlert from '../components/Notifications/ErrorAlert';
import FormInput from '../common/Contact/FormInput';

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { login } = useAuth();
    const [showSuccessAlert, setShowSuccessAlert] = useState("");
    const [showErrorAlert, setShowErrorAlert] = useState("");

    const onSubmit = async (data) => {
        try {
            const { user, token } = await postSession(data);
            login(user, token);
            setShowSuccessAlert("Vous êtes désormais connectés");
            setShowErrorAlert('');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch {
            setShowErrorAlert("Erreur lors de la connexion");
            setShowSuccessAlert('');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full p-7 max-w-md bg-white rounded-lg shadow-lg container-alignement-login">
                <h1 className="text-2xl font-bold text-center text-primary mb-6">Connexion</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mx-5">
                    <FormInput label="Email :" name="email" placeholder="lamalle@gmail.com" register={register} rules={{ required: "L'email est requis" }} errors={errors}/>
                    <FormInput label="Mot de passe :" name="password" placeholder="p4ssw0rd" type="password" register={register} rules={{ required: "Le mot de passe est requis" }} errors={errors}/>
                    <div className="space-y-4">
                        <button type="submit" className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 transition-colors duration-300">Se connecter</button>
                        <Link to='/registration' className="block mt-4 text-primary hover:text-secondary font-medium transition-colors duration-300 underline text-center">Vous n'avez pas de compte ?</Link>
                        <Link to='/request-reset-password' className="block mt-4 text-primary hover:text-secondary font-medium transition-colors duration-300 underline text-center">Mot de passe oublié ?</Link>
                    </div>
                </form>
                
            </div>
            {showSuccessAlert && (<SuccessAlert message={showSuccessAlert} onClose={() => setShowSuccessAlert(false)}/>)}
            {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
        </div>
    );
}

export default LoginPage;
