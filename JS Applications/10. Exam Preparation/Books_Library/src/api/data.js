import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll() {
    return api.get('/data/books?sortBy=_createdOn%20desc');
}

export async function getById(id) {
    return api.get('/data/books/' + id);
}

export async function getMyItems(userId) {
    return api.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function createItem(data) {
    return api.post('/data/books', data);
}

export async function editItem(id, data) {
    return api.put('/data/books/' + id, data);
}

export async function deleteItem(id) {
    return api.del('/data/books/' + id);
}

export async function likeItem(itemId) {
    return api.post('/data/likes', { itemId });
}

export async function getLikesById(itemId) {
    return api.get(`/data/likes?where=bookId%3D%22${itemId}%22&distinct=_ownerId&count`);
}

export async function getMyLikeById(itemId, userId) {
    return api.get(`/data/likes?where=bookId%3D%22${itemId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}