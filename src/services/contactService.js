import { fetchRequest } from "./apiRequest";

async function createContact(infoContact, token) {
    return fetchRequest(`/contact`, { method: 'POST', body: infoContact, token });
}

async function getContact(searchQuery = '', page = 1, limit = 10, urgency = '', status = '', token = null) {
    const params = new URLSearchParams({ searchQuery, page, limit, urgency, status}).toString();
    return fetchRequest(`/contact?${params}`, { method: 'GET', token });
}

async function updateStatusContact(contactId, newStatus, token) {
    return fetchRequest(`/contact/status/${contactId}`, { method: 'PUT', body: {status: newStatus}, token });
}

export { createContact, getContact, updateStatusContact }