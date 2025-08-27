import { fetchRequest } from "./apiRequest";

async function createVote(infoVote, token) {
    return fetchRequest(`/votes`, { method: 'POST', body: infoVote, token });
}

export {createVote};


