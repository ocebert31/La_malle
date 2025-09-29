import { useState } from 'react';
import ErrorAlert from '../Notifications/ErrorAlert';

function TagManager({ value = [], onChange }) {
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState(Array.isArray(value) ? value : []);
    const [showErrorAlert, setShowErrorAlert] = useState('');

    const handleAddTag = (input) => {
        const trimmed = input.trim();
        if (trimmed.length > 15) {
            setShowErrorAlert('Le tag ne doit pas dépasser 15 caractères');
            return;
        }
        if (tags.includes(trimmed)) {
            setShowErrorAlert('Votre tag existe déjà');
            return;
        }
        if (tags.length >= 5) {
            setShowErrorAlert('Vous pouvez ajouter seulement 5 tags');
            return;
        }
        const newTags = [...tags, trimmed];
        setTags(newTags);
        onChange(newTags);
        setTagInput('');
        setShowErrorAlert('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddTag(tagInput);
        }
    };

    const handleRemoveTag = (indexToRemove) => {
        const newTags = tags.filter((_, index) => index !== indexToRemove);
        setTags(newTags);
        onChange(newTags);
    };

  return (
    <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
            Tags :
        </label>
        <div className="mt-1 flex flex-wrap items-center border border-gray-300 rounded-md shadow-sm px-3 py-2 gap-2 border-secondary">
            {tags.map((tag, index) => (
                <span key={index} className="bg-primary text-white text-sm px-2 py-1 rounded-full flex items-center">
                    {tag}
                    <button onClick={() => handleRemoveTag(index)} className="ml-2 text-xs text-white">
                    x
                    </button>
                </span>
            ))}
            {tags.length < 5 && (
            <input type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Ajouter un tag" className="outline-none flex-grow min-w-[100px] text-sm"/>
            )}
        </div>
        {showErrorAlert && <ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert('')} />}
    </div>
  );
}

export default TagManager;
