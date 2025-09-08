import { useForm } from 'react-hook-form';
import { registration } from '../services/authenticationService';
import './RegisterPage.css';
import { Link } from 'react-router-dom';
import SuccessAlert from '../components/Notifications/SuccessAlert';
import ErrorAlert from '../components/Notifications/ErrorAlert';
import { useState } from 'react';
import { confirmPasswordMatch } from '../utils/password';
import FormInput from '../common/FormInput';

function RegisterPage() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [showSuccessAlert, setShowSuccessAlert] = useState('');
    const [showErrorAlert, setShowErrorAlert] = useState('');
    const [checkConfirmPassword, setCheckConfirmPassword] = useState('');
    const [isConfirmationRegistration, setIsConfirmationRegistration] = useState(false)
    const { password, confirmPassword } = getValues();

    const onSubmit = async (data) => {
        confirmPasswordMatch(setCheckConfirmPassword, password, confirmPassword)
        try {
            await registration(data);
            setShowSuccessAlert("Vous êtes désormais inscrit avec succès !");
            setShowErrorAlert('');
            setIsConfirmationRegistration(true)
        } catch {
            setShowErrorAlert("Erreur lors de l'inscription. Veuillez réessayer.");
            setShowSuccessAlert('');
        }
    };

    return (
        <div>
            {!isConfirmationRegistration ? (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full p-6 max-w-md bg-white rounded-lg shadow-lg container-alignement-registration">
                    <h1 className="text-2xl font-bold text-center text-primary mb-6">Inscription</h1>
                    <div className='flex justify-center'>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 style-form">
                            <FormInput label="Email :" name="email" placeholder="lamalle@gmail.com" register={register} rules={{ required: "L'email est requis" }} errors={errors}/>
                            <FormInput label="Mot de passe :" name="password" placeholder="p4ssw0rd" type="password" register={register} rules={{ required: "Le mot de passe est requis" }} errors={errors}/>
                            <FormInput label="Confirmer le mot de passe :" name="confirmPassword" placeholder="p4ssw0rd"  type="password" register={register} rules={{ required: "Confirmation du mot de passe requise" }} errors={errors}/>
                            {checkConfirmPassword && <p className="text-red-500 text-center mt-2">{checkConfirmPassword}</p>}
                            <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-300">S'inscrire</button>
                            <Link to='/login' className="text-primary hover:text-secondary font-medium transition-colors duration-300 underline text-center">Déjà membre ?</Link>        
                        </form>
                    </div>
                </div>
                {showSuccessAlert && (<SuccessAlert message={showSuccessAlert} onClose={() => setShowSuccessAlert(false)}/>)}
                {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>
                )}
            </div> 
            ) : (
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="p-8 bg-white rounded-lg shadow-lg text-center max-w-md style-p">
                        <h2 className="text-2xl font-bold text-primary mb-4">Inscription réussie !</h2>
                        <p className="text-lg text-gray-700 mb-6">Veuillez consulter votre boîte mail pour confirmer votre inscription.</p>
                         <p className="text-sm text-gray-500 italic">
                            Et bonne nouvelle 🎉&nbsp;: un petit pseudo a été préparé spécialement pour vous,  
                            mélange savoureux d’un adjectif, d’une couleur et d’un animal 🐦🎨✨
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RegisterPage;
