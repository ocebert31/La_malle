import { fetchRequest } from "./apiRequest";

async function createFavoriteService(serviceId, token) {
    return fetchRequest(`/favorites`, { method: 'POST', body: {serviceId}, token });
}

export {createFavoriteService};