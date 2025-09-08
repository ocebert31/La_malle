import { contactStatuses } from "../../../utils/constants/contact";

function StatusFilter({ setStatus, status }) {
    return (
        <div className="mb-6 flex justify-center">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {contactStatuses.map(({ label, icon }) => (
                    <button key={label} onClick={() => setStatus(label)} className={`flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base border-2 rounded-md font-medium transition-shadow duration-200
                        ${status === label 
                                ? 'border-[#7a6bfc] bg-[#eef2ff] shadow-lg' 
                                : 'border-gray-300 bg-white'} hover:shadow-md`}>
                        <span>{icon}</span>
                        {label === '' ? 'Toutes' : label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default StatusFilter;
