import NewCommentForm from "./NewCommentForm";
import React, { useState } from 'react';
import { useAuth } from "../../../context/AuthContext";

function NewReplyForm ({comment, typeForm, onReply}) {
    const [isReply, setIsReply] = useState(false);
    const { token } = useAuth();

    const toggleReply = () => {
        setIsReply(!isReply);
    }

    const handleReplyAdded = (newComment) => {
        onReply(newComment);
        setIsReply(false);
    }

    return(
        <div>
            {isReply ? (
                <NewCommentForm serviceId={comment.serviceId} onAdded={handleReplyAdded} commentId={comment._id} setIsReply={setIsReply} comment={comment} typeForm={typeForm}/>
            ) : ( token && (
                <div>
                    {!comment.commentId &&
                    <div className='pt-4 text-primary font-medium'>
                        <button onClick={toggleReply}>Répondre</button>
                    </div>
                    }
                </div>
            ))}
        </div>
    )
}

export default NewReplyForm;