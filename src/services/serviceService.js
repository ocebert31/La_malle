import { fetchRequest } from "./apiRequest";

async function getServices(searchQuery = '', page = 1, limit = 20, type = 'all', token = null, categoryId = null) {
    const params = new URLSearchParams({ searchQuery, page, limit, type, categoryId }).toString();
    return fetchRequest(`/services?${params}`, { method: 'GET', token });
}

async function createService(infoService, token) {
    return fetchRequest(`/services`, { method: 'POST', body: infoService, token });
}

async function getOneService(id, token) {
    return fetchRequest(`/services/${id}`, { method: 'GET', token });
}

async function deleteService(id, token) {
    return fetchRequest(`/services/${id}`, { method: 'DELETE', token });
}

async function updateService(id, infoService, token) {
    return fetchRequest(`/services/${id}`, { method: 'PUT', body: infoService, token });
}

export { getServices, createService, getOneService, deleteService, updateService };
