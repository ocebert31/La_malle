import { faXmark, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ErrorAlert({ message, onClose }) {
    return (
        <div className="fixed top-4 right-4 z-50 w-full max-w-[250px] sm:max-w-[300px] bg-red-100 border border-red-300 text-red-700 px-2 py-2 rounded-lg shadow flex items-center space-x-2">
            <FontAwesomeIcon icon={faCircleInfo} className="text-sm" />
            <div className="flex-1">
                <p className="text-xs font-medium">{message}</p>
            </div>
            <button onClick={onClose} className="text-red-700 hover:text-red-900 focus:outline-none">
                <FontAwesomeIcon icon={faXmark} className="text-xs" />
            </button>
        </div>
    );
}

export default ErrorAlert;
