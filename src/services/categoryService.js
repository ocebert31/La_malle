import { fetchRequest } from "./apiRequest";

async function createCategory(name, token) {
    return fetchRequest(`/categories`, { method: 'POST', body: name, token });
}

async function getCategories() {
    return fetchRequest(`/categories`, { method: 'GET' });
}

async function deleteCategory(id, token) {
    return fetchRequest(`/categories/${id}`, { method: 'DELETE', token });
}

async function updateCategory(id, name, token) {
    return fetchRequest(`/categories/${id}`, { method: 'PUT', body: {name}, token });
}

export {createCategory, getCategories, deleteCategory, updateCategory}