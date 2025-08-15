import { fetchRequest } from "./apiRequest";

async function createContact(formData, token) {
    return fetchRequest(`/contact`, { method: 'POST', body: formData, token });
}

export { createContact }