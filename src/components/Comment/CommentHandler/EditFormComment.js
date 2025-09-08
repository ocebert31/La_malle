import React, {useState} from 'react';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateComment } from '../../../services/commentService';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../../context/AuthContext';
import EditActions from '../../../common/Handler/EditButton';
import ErrorAlert from '../../Notifications/ErrorAlert';
import FormInput from '../../../common/FormInput';

function EditCommentButton({ comment, content, setContent, isEditing, setIsEditing }) {
    const { token } = useAuth(); 
    const { register, control, handleSubmit, formState: { errors } } = useForm({ defaultValues: { content } });
    const [showErrorAlert, setShowErrorAlert] = useState("");

    const onSubmit = async (data) => {
        try {
            await updateComment(comment._id, data.content, token);
            setContent(data.content);
            setIsEditing(false);
        } catch {
            setShowErrorAlert("Erreur lors de l'édition du commentaire.");
        }
    };

    const handleEditingEnd = () => {
        setIsEditing(false); 
    };

    return (
        <div>
            {isEditing ? (
                <div className="p-4 border rounded-lg bg-gray-50 shadow-md">
                    <form onSubmit={handleSubmit(onSubmit)} className="gap-4">
                        <FormInput label="Contenu :" name="content" placeholder="Votre commentaire" type='textarea' register={register} rules={{ required: "Contenu requis" }} errors={errors}/>
                        <EditActions cancelEdit={handleEditingEnd}/>
                    </form> 
                </div>
            ) : (
                <div>
                    {!content.startsWith('giphy#') && (
                        <button onClick={() => setIsEditing(true)} className="p-2 text-blue-500 hover:text-blue-700 transition-colors duration-150" aria-label="Modifier le commentaire">
                            <FontAwesomeIcon icon={faPen} />
                        </button>
                    )}
                </div>
            )}
            {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
        </div>
    );
}

export default EditCommentButton;

