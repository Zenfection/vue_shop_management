import { http } from './api.service.js';

const userService = (baseUrl) => ({
    getAll: async () => await http.get(baseUrl),
    create: async (data) => await http.post(`${baseUrl}/register`, data),
    login: async (data) => await http.post(`${baseUrl}/login`, data),
    get: async (id) => await http.get(`${baseUrl}/${id}`),
    update: async (id, data) => await http.put(`${baseUrl}/${id}`, data),
    delete: async (id) => await http.delete(`${baseUrl}/${id}`),
    deleteAll: async () => await http.delete(baseUrl),
})

const categoryService = (baseUrl) => ({
    getAll: async () => await http.get(baseUrl),
    create: async (data) => await http.post(baseUrl, data),
    get: async (id) => await http.get(`${baseUrl}/${id}`),
    update: async (id, data) => await http.put(`${baseUrl}/${id}`, data),
    delete: async (id) => await http.delete(`${baseUrl}/${id}`),
    deleteAll: async () => await http.delete(baseUrl),
})


export const UserService = userService('/users');
export const CategoryService = categoryService('/categories');