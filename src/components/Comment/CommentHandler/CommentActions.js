import EditCommentButton from './EditCommentButton';
import Vote from '../../../common/Votes/Vote';
import { useAuth } from "../../../context/AuthContext";
import { isAuthor } from '../../../utils/autorization';
import DeleteButton from '../../../common/Handler/DeleteButton';
import { deleteComment } from '../../../services/commentService';

function CommentActions({comment, commentState, isEditing, setIsEditing, setIsHidden, content, setContent, handleCommentDeleted}) {
    const { user } = useAuth();

    return(
           <div className="flex items-center gap-4 med:flex-col">
            <Vote upvotes={commentState.upvotes} downvotes={commentState.downvotes} userVote={commentState.userVote} subject={commentState} setIsHidden={setIsHidden} type='comment'/>
            {isAuthor(user, comment) && comment.content !== 'ce commentaire a été supprimé' && !comment.deletedAt && (
                <div className='flex items-center gap-2'>
                    {!isEditing ? (
                        <>
                            <EditCommentButton comment={comment} content={content} setContent={setContent} isEditing={isEditing} setIsEditing={setIsEditing}/>
                            <DeleteButton resource={comment} deleteRessource={deleteComment} onDelete={handleCommentDeleted} onDeleteParam="object" label="du commentaire"/>
                        </>
                    ) : (
                        <EditCommentButton comment={comment} content={content} setContent={setContent} isEditing={isEditing} setIsEditing={setIsEditing}/>
                    )}
                </div>
            )}
        </div>
    )
}

export default CommentActions;
