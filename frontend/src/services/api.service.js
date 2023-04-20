const token = JSON.parse(window.localStorage.getItem('user')).token ?? null;

const instance = axios.create({
    baseURL: api.backend,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ` + token,
    },
});

export const http = {
    get: async (url) => (await instance.get(url)).data,
    post: async (url, data) => (await instance.post(url, data)).data,
    put: async (url, data) => (await instance.put(url, data)).data,
    delete: async (url) => (await instance.delete(url)).data,
};