import React, { useState, useEffect } from 'react';
import { getCategories } from '../../services/categoryService';
import ErrorAlert from '../../components/Notifications/ErrorAlert';
import FormInput from '../Contact/FormInput';

function CategorySelector({ value, onChange, errors }) {
    const [categories, setCategories] = useState([]);
    const [showErrorAlert, setShowErrorAlert] = useState("");

    useEffect(() => {
        const fetchCategories = async () => {
        try {
            const result = await getCategories();
            setCategories(result);
        } catch {
            setShowErrorAlert("Erreur lors de la récupération des catégories.");
        }
        };
        fetchCategories();
    }, []);

    const options = [
        { value: "", label: "Toutes les catégories" },
        ...categories.map(cat => ({ value: cat._id, label: cat.name }))
    ];

  return (
    <>
      <FormInput label="Catégorie"name="categoryId" type="select" options={options} value={value} onChange={e => onChange(e.target.value)} errors={errors}/>
      {showErrorAlert && (
        <ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>
      )}
    </>
  );
}

export default CategorySelector;