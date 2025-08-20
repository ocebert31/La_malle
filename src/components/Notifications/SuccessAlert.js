import { faXmark, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SuccessAlert({ message, onClose }) {
    return (
        <div className="fixed top-4 right-4 z-50 w-full max-w-[250px] sm:max-w-[300px] bg-green-100 border border-green-300 text-green-700 px-2 py-2 rounded-lg shadow flex items-center space-x-2">
            <FontAwesomeIcon icon={faCircleInfo} className="text-sm" />
            <div className="flex-1">
                <p className="text-xs font-medium">{message}</p>
            </div>
            <button onClick={onClose} className="text-green-700 hover:text-green-900 focus:outline-none">
                <FontAwesomeIcon icon={faXmark} className="text-xs" />
            </button>
        </div>
    );
}

export default SuccessAlert;
