import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TitleInput from "../Articles/TitleInput";
import ContentEditor from "../Articles/ContentEditor";
import ImageUploader from "../Articles/ImageUploader";
import TagManager from "../Articles/TagManager";
import CategorySelector from "../Articles/CategorySelector";
import PriceInput from "../Articles/PriceInput";
import ErrorAlert from "../../components/Notifications/ErrorAlert";

function ArticleForm({ initialValues = {}, onSubmit, submitLabel, cancelEdit, title }) {
    const [showErrorAlert, setShowErrorAlert] = useState("");
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
        title: initialValues.title || "",
        content: initialValues.content || "",
        tags: initialValues.tags || "",
        categoryId: initialValues.categoryId || "",
        price: initialValues.price || "",
        image: null
        }
    });

    const handleFormSubmit = async (data) => {
        try {
        await onSubmit(data);
        } catch (e) {
        setShowErrorAlert("Erreur lors de l’envoi du formulaire.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full p-6 max-w-6xl bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center text-primary mb-6">
            {title}
            </h1>
            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
                <Controller name="title" control={control} rules={{ required: "Titre requis" }} render={({ field }) => <TitleInput {...field} errorMessage={errors.title?.message} />}/>
                <Controller name="content" control={control} rules={{ required: "Contenu requis" }}render={({ field }) => <ContentEditor {...field} errorMessage={errors.content?.message} />}/>
                <Controller name="tags" control={control} render={({ field }) => <TagManager {...field} />}/>
                <Controller name="categoryId" control={control} rules={{ required: "Catégorie requise" }}render={({ field }) => (<CategorySelector {...field} errors={errors.categoryId} />)}/>
                <Controller name="price" control={control} rules={{ required: "Prix requis", min: { value: 1, message: "Le prix doit être positif" } }}render={({ field }) => <PriceInput {...field} errorMessage={errors.price?.message} />}/>
                <Controller name="image" control={control} render={({ field: { onChange } }) => (<ImageUploader onChange={file => onChange(file)} errorMessage={errors.image?.message} />)}/>
                <div className="flex justify-center gap-4">
                    <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition">
                        {submitLabel}
                    </button>
                    {cancelEdit && (
                    <button type="button" onClick={cancelEdit} className="bg-gray-300 px-4 py-2 rounded-md">
                        Annuler
                    </button>
                    )}
                </div>
            </form>
        </div>
        {showErrorAlert && (
            <ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)} />
        )}
        </div>
    );
}

export default ArticleForm;
