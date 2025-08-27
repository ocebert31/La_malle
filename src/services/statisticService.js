import { fetchRequest } from "./apiRequest";

async function getMonthlyStats(token) {
    return fetchRequest(`/admin/stat-monthly`, { method: 'GET', token });
}

export { getMonthlyStats }