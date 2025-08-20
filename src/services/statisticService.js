import { fetchRequest } from "./apiRequest";

async function getAllStat(token) {
    return fetchRequest(`/admin/stat`, { method: 'GET', token });
}

async function getMonthlyStats(token) {
    return fetchRequest(`/admin/stat-contact`, { method: 'GET', token });
}

export {getAllStat, getMonthlyStats}