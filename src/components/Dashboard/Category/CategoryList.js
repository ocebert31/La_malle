import React, { useState, useEffect } from 'react';
import {getCategories} from '../../../services/categoryService';
import { useAuth } from '../../../context/AuthContext'
import NewCategoryForm from './CreateCategoryForm';
import EditCategoryButton from './EditFormCategory';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ErrorAlert from '../../Notifications/ErrorAlert';
import DeleteButton from '../../../common/Handler/DeleteButton';
import { deleteCategory } from '../../../services/categoryService';

function CategoryList() {
    const { token } = useAuth();
    const [categories, setCategories] = useState([]);
    const [isEditing, setIsEditing] = useState(null);
    const [showErrorAlert, setShowErrorAlert] = useState("");
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const loadServices = async () => {
            try {
                setLoading(true);
                const fetchedCategories = await getCategories(token);
                setCategories(fetchedCategories);
            } catch {
                setShowErrorAlert("Erreur lors de la récupération des catégories");
            } finally {
                setLoading(false);
            }
        };
        loadServices();
    }, [token])

    const handleCategoryAdded = (newCategory) => {
        setCategories((prevCategories) => [...prevCategories, newCategory]);
    }

    const handleCategoryDelete = (id) => {
        setCategories(categories.filter(category => category._id !== id));
    };

    const handleCategoryUpdated = (updatedCategory) => {
        setCategories(prevCategories =>
            prevCategories.map(category =>
                category._id === updatedCategory._id ? updatedCategory : category
            )
        );
    };      

    const editCategory = (id) => {
        setIsEditing(id);
    };
      
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Créer une nouvelle catégorie</h2>
            {loading && categories.length === 0  ? (
            <div className="flex justify-center items-center py-6">
                <div className="w-10 h-10 border-4 border-t-primary border-gray-300 rounded-full animate-spin"></div>
            </div>
            ) : !loading && categories.length === 0 ? (
            <p className="text-gray-600 text-center text-lg mt-10 pb-5">
                Aucune catégorie pour l'instant.
            </p>
            ) : (categories.map((category) => (
                <div key={category._id} className="flex items-center space-x-2">
                    {isEditing === category._id ? (
                        <EditCategoryButton category={category} handleCategoryUpdated={handleCategoryUpdated} editCategory={editCategory}/>
                    ) : (
                        <>
                            <DeleteButton resource={category} deleteRessource={deleteCategory} onDelete={handleCategoryDelete} label="de la catégorie"/>
                            <p className="truncate max-w-xs" title={category.name}>
                                {category.name}
                            </p>
                            <button onClick={() => editCategory(category._id)} className="p-2 text-blue-500 hover:text-blue-700 transition-colors duration-150" aria-label="Modifier la catégorie">
                                <FontAwesomeIcon icon={faPen} />
                            </button>
                        </>
                    )}
                </div>
            )))}
            <NewCategoryForm handleCategoryAdded={handleCategoryAdded}/>
            {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
        </div>
    )
}

export default CategoryList;