import { urgencyStatuses, urgencyColors } from "../../../utils/constants/contact";

function UrgencyFilter({ setUrgency, urgency }) {
    return (
        <div className="mb-6 flex justify-center">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {urgencyStatuses.map(level => (
                    <button key={level} onClick={() => setUrgency(level)} className={`px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-base rounded-full font-semibold transition-all duration-200 ${urgency === level ? 'ring-2 ring-offset-2 ring-[#7a6bfc]' : urgencyColors[level]} hover:scale-105`}>
                        {level === '' ? 'Toutes' : level}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default UrgencyFilter;
