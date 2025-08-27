import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EditServiceButton({ editService, isEditing }) {
    const activateEditing = () => {
        editService();
    }

    return (
        <div>
            {!isEditing && (
                <button onClick={activateEditing} className="text-primary transition-colors duration-300">
                    <FontAwesomeIcon icon={faPen} />
                </button>
            )}
        </div>
    )
}

export default EditServiceButton;
