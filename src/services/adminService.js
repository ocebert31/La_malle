import { fetchRequest } from "./apiRequest";

async function getUsers(searchQuery = '', page = 1, limit = 10, token = null) {
    const params = new URLSearchParams({ searchQuery, page, limit}).toString();
    return fetchRequest(`/admin?${params}`, { method: 'GET', token });
}

async function updateUserRole(userId, newRole, token) {
    return fetchRequest(`/admin/${userId}`, { method: 'PUT', body: {role: newRole}, token });
}

async function deleteUser(id, token) {
    return fetchRequest(`/admin/${id}`, { method: 'DELETE', token });
}

export { getUsers, updateUserRole, deleteUser };