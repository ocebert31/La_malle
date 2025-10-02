import { useForm } from "react-hook-form";
import { useState } from "react";
import FormInput from "../common/FormInput";
import { useAuth } from "../context/AuthContext";
import { createContact } from '../services/contactService';
import SuccessAlert from "../components/Notifications/SuccessAlert";
import ErrorAlert from "../components/Notifications/ErrorAlert";
import { emailAnimator } from "../utils/constants/infoAnimator";

function ContactPage() {
    const { token, user } = useAuth();
    const [showSuccessAlert, setShowSuccessAlert] = useState('');
    const [showErrorAlert, setShowErrorAlert] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: { name: "", firstName: "", email: user?.email || '', phone: "", typeRequest: "", desiredDate: "", urgence: "Moyenne", description: "", rgpd: false},
    })

    const onSubmit = async (data) => {
        if (!data.rgpd) {
            setShowErrorAlert("Vous devez accepter le traitement des données.");
            setShowSuccessAlert(""); 
            return;
        }
        try {
            await createContact(data, token);
            setShowSuccessAlert("Votre demande a bien été envoyée !");
            setShowErrorAlert(""); 
                reset({
                    name: "",
                    firstName: "",
                    email:  user?.email || '',
                    phone: "",
                    typeRequest: "",
                    desiredDate: "",
                    urgence: "Moyenne",
                    description: "",
                    rgpd: false 
                });
        } catch {
            setShowErrorAlert("Erreur lors de l'envoi.");
            setShowSuccessAlert(""); 
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[500px] my-[50px] mx-auto p-[30px] rounded-[15px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] bg-white flex flex-col gap-[15px]">
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
                Contactez-nous
            </h2>
            <FormInput label="Nom" name="name" placeholder="Nom" register={register} rules={{ required: "Nom requis" }} errors={errors}/>
            <FormInput label="Prénom" name="firstName" placeholder="Prénom" register={register} rules={{ required: "Prénom requis" }} errors={errors}/>
            <FormInput label="Email" name="email" type="email" placeholder="Email" register={register} rules={{ required: "Email requis" }} errors={errors}/>
            <FormInput label="Téléphone" name="phone" placeholder="Téléphone" register={register} rules={{ required: "Téléphone requis" }} errors={errors}/>
            <FormInput label="Type de demande" name="typeRequest" placeholder="Type de demande" register={register} rules={{ required: "Type de demande requis" }} errors={errors}/>
            <FormInput label="Description" name="description" type="textarea" placeholder="Décrivez votre demande" register={register} rules={{ required: "Description requise" }} errors={errors}/>
            <FormInput label="Date désirée" name="desiredDate" type="date" register={register} rules={{ required: "Date désirée requise" }} errors={errors}/>
            <FormInput label="Urgence" name="urgence" type="select" register={register} errors={errors} options={[
                { value: "Faible", label: "Faible" },
                { value: "Moyenne", label: "Moyenne" },
                { value: "Élevée", label: "Élevée" },
                ]}/>
            <label className="flex items-center gap-[10px]">
                <input type="checkbox" {...register("rgpd")} /> J’accepte le traitement des données (RGPD)
            </label>
            <button type="submit" className="px-[14px] py-[14px] rounded-[10px] border-none bg-primary text-white font-bold cursor-pointer transition-all duration-300">
                Envoyer
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
                Ou bien contactez-moi directement par téléphone au <span className="font-medium">06 80 28 15 56</span>  
                <br></br>ou par mail : <a href={`mailto:${emailAnimator}`}  className="underline hover:text-primary font-medium">{emailAnimator}</a>
            </p>
            {showSuccessAlert && (<SuccessAlert message={showSuccessAlert} onClose={() => setShowSuccessAlert(false)}/>)}
            {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
        </form>
    );
}

export default ContactPage;