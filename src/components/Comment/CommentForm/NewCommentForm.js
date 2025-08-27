import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { createComment } from '../../../services/commentService'; 
import { useAuth } from '../../../context/AuthContext';
import GifSelector from './GifSelector';
import ErrorAlert from '../../Notifications/ErrorAlert';

function NewCommentForm({ serviceId, onAdded, commentId, setIsReply, comment, typeForm}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { token, user } = useAuth();
    const [showGifSelector, setShowGifSelector] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState("");

    const onSubmit = async (data) => {
        try {
            const result = await createComment(data.content, serviceId, commentId, token);
            const comment = result.comment;
            reset();
            comment.pseudo = user.pseudo;
            onAdded(comment);
        } catch {
            setShowErrorAlert("Erreur lors de la récupération des commentaires.");
        }
    };

    const handleGifSelect = async (gif) => {
        setShowGifSelector(false);
        try {
            const result = await createComment(`giphy#${gif.images.original.url}`, serviceId, commentId, token);
            const comment = result.comment;
            comment.pseudo = user.pseudo;
            onAdded(comment);
        } catch {
            setShowErrorAlert("Erreur lors de l'envoi du GIF.");
        }
    };

    const toggleIsReply = () => {
        setIsReply(false)
    }

    if (!token) {
        return <p className="text-center text-gray-600 mt-4">Veuillez vous connecter afin d'ajouter un commentaire.</p>;
    }

    return (
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md m-2 md:m-4">
            {showGifSelector ? (
                <div className="border border-gray-300 p-4 rounded-lg">
                    <GifSelector onSelect={handleGifSelect} />
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <div className='flex items-center mb-2'>
                            {typeForm === 'reply comment' && 
                                <button onClick={toggleIsReply} className="text-gray-500 hover:text-gray-700 mr-2">
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            }
                            <label htmlFor="content" className="block text-gray-700 text-sm sm:text-base">Commentaire</label>
                        </div>
                        <textarea id="content" name="content" {...register('content', { required: 'Le commentaire ne peut pas être vide' })} className="w-full p-2 sm:p-3 border border-gray-300 rounded-md text-sm sm:text-base resize-none h-24 sm:h-32"/>
                        {errors.content && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.content.message}</p>}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                        <button type="button" onClick={() => setShowGifSelector(true)} className="w-full sm:w-auto px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary-dark focus:outline-none text-sm sm:text-base">
                            Ajouter un GIF
                        </button>
                        <button type="submit" className="w-full sm:w-auto px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none text-sm sm:text-base">
                            Ajouter un commentaire
                        </button>
                    </div>
                </form>
            )}
            {showErrorAlert && (
                <ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>
            )}
        </div>
    );
}

export default NewCommentForm;

