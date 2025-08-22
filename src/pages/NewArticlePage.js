import React, {useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { createArticles } from '../services/articleService';
import TitleInput from '../common/Articles/TitleInput';
import ContentEditor from '../common/Articles/ContentEditor';
import ImageUploader from '../common/Articles/ImageUploader';
import { formDataBuilder } from '../utils/constants/formDataBuilder';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import './NewArticlePage.css';
import TagManager from '../common/Articles/TagManager';
import CategorySelector from '../common/Articles/CategorySelector';
import ErrorAlert from '../components/Notifications/ErrorAlert';
import PriceInput from '../common/Articles/PriceInput';

function NewArticlePage() {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { token } = useAuth();
    const [showErrorAlert, setShowErrorAlert] = useState("");

    const onSubmit = async (data) => {
        try {
            await createArticles(formDataBuilder(data), token);
            navigate('/services');
        } catch {
            setShowErrorAlert("Erreur lors de la création de la préstation")
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full p-6 max-w-6xl bg-white rounded-lg shadow-lg container-alignement-new-article">
                <h1 className="text-2xl font-bold text-center text-primary mb-6">Publier une préstation</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <Controller name="title" control={control} defaultValue="" render={({ field }) => (<TitleInput {...field} errorMessage={errors.title?.message} />)} rules={{ required: "Titre requis" }}/>
                    <Controller name="content" control={control} defaultValue="" render={({ field }) => (<ContentEditor {...field} errorMessage={errors.content?.message} />)} rules={{ required: "Contenu requis" }}/>
                    <Controller name="tags" control={control} defaultValue='' render={({ field }) => (<TagManager {...field}/>)}/>
                    <Controller name="categoryId" control={control} defaultValue="" rules={{ required: "Catégorie requise" }} render={({ field }) => ( <CategorySelector {...field} errors={errors.category}/>)}/>
                    <Controller name="price" control={control} defaultValue="" rules={{required: "Prix requis", min: { value: 1, message: "Le prix ne peut pas être négatif" }}} render={({ field }) => (<PriceInput {...field} errorMessage={errors.price?.message} />)}/>
                    <Controller name="image" control={control} defaultValue="" render={({ field }) => (<ImageUploader {...field} errorMessage={errors.image?.message} />)} rules={{ required: "Image requise" }}/>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-300">
                            Ajouter la préstation
                        </button>
                    </div>
                </form>
            </div>
            {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
        </div>
    );
}   

export default NewArticlePage;
