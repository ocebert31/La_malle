function StatusFilter({ setStatus, status }) {
    const levels = [
        { label: '', icon: '🌀' },
        { label: 'En attente', icon: '⏳' },
        { label: 'Acceptée', icon: '✅' },
        { label: 'Rejetée', icon: '❌' },
        { label: 'En cours', icon: '⚡' }
    ];

    return (
        <div className="flex justify-center gap-3 mb-6">
            {levels.map(({ label, icon }) => (
                <button key={label} onClick={() => setStatus(label)} className={` flex items-center gap-2 px-4 py-2 border-2 rounded-md font-medium transition-shadow duration-200
                    ${status === label ? 'border-[#7a6bfc] bg-[#eef2ff] shadow-lg' : 'border-gray-300 bg-white'} hover:shadow-md`}>
                    <span>{icon}</span>
                    {label === '' ? 'Toutes' : label}
                </button>
            ))}
        </div>
    );
}

export default StatusFilter