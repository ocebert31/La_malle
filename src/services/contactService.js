import { fetchRequest } from "./apiRequest";

async function createRequest(formData, token) {
    return fetchRequest(`/contact`, { method: 'POST', body: formData, token });
}

async function getRequest(searchQuery = '', page = 1, limit = 10, urgency = '', status = '', token = null) {
    const params = new URLSearchParams({ searchQuery, page, limit, urgency, status}).toString();
    return fetchRequest(`/contact?${params}`, { method: 'GET', token });
}

async function updateStatusRequest(requestId, newStatus, token) {
    return fetchRequest(`/contact/status/${requestId}`, { method: 'PUT', body: {status: newStatus}, token });
}

export { createRequest, getRequest, updateStatusRequest }