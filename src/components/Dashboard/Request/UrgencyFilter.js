function UrgencyFilter({ setUrgency, urgency }) {
    const levels = ['', 'Faible', 'Moyenne', 'Élevée'];
    const colors = {
        '': 'bg-gray-200 text-gray-700',
        'Faible': 'bg-green-400 text-white',
        'Moyenne': 'bg-yellow-400 text-white',
        'Élevée': 'bg-red-500 text-white'
    };

    return (
        <div className="flex justify-center gap-3 mb-6">
            {levels.map(level => (
                <button key={level} onClick={() => setUrgency(level)} className={`px-6 py-2 rounded-full font-semibold transition-all duration-200
                    ${urgency === level ? 'ring-2 ring-offset-2 ring-[#7a6bfc]' : colors[level]} hover:scale-105`}>
                    {level === '' ? 'Toutes' : level}
                </button>
            ))}
        </div>
    );
}

export default UrgencyFilter