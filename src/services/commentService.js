import { fetchRequest } from "./apiRequest";

async function createComment(content, serviceId, commentId, token) {
    return fetchRequest(`/comments`, { method: 'POST', body: {content, serviceId, commentId}, token });
}

async function getComments(serviceId, token, page = 1, limit = 20) {
    const params = new URLSearchParams({ serviceId, page, limit }).toString();
    return fetchRequest(`/comments?${params}`, { method: 'GET', token });
}

async function deleteComment(id, token) {
    return fetchRequest(`/comments/${id}`, { method: 'DELETE', token });
}

async function updateComment(id, content, token) {
    return fetchRequest(`/comments/${id}`, { method: 'PUT', body: {content}, token });
}

export {createComment, getComments, deleteComment, updateComment};