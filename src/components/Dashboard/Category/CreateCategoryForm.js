import {useState} from 'react';
import { createCategory } from '../../../services/categoryService';
import { useAuth } from '../../../context/AuthContext';
import { useForm } from 'react-hook-form';
import ErrorAlert from '../../Notifications/ErrorAlert';
import FormInput from '../../../common/FormInput';

function CreateCategoryForm({handleCategoryAdded}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showErrorAlert, setShowErrorAlert] = useState("");
    const { token } = useAuth();

    const onSubmit = async (data) => {
        try {
            const result = await createCategory(data, token);
            handleCategoryAdded(result.categories);
            reset();
        } catch {
            setShowErrorAlert("Erreur lors de la création de la catégorie");
        }
    };

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput label="Nom de la catégorie :" name="name" placeholder="Catégorie" register={register} rules={{ required: "Nom de la catégorie requise" }} errors={errors}/>
            <button type="submit" className="w-full bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                Créer la catégorie
            </button>
        </form>
        {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
    </div>
  );
};

export default CreateCategoryForm;
