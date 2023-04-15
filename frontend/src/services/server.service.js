
const userService = (baseUrl) => ({
    //getAll: async () => await http.get(baseUrl),
    //create: async (data) => await http.post(`${baseUrl}/register`, data),
    login: async (data) => await http.post(`${baseUrl}/login`, data),
    //get: async (id) => await http.get(`${baseUrl}/${id}`),
    //update: async (id, data) => await http.put(`${baseUrl}/${id}`, data),
    //delete: async (id) => await http.delete(`${baseUrl}/${id}`),
    //deleteAll: async () => await http.delete(baseUrl),
})

const categoryService = (baseUrl) => ({
    getAll: async () => await http.get(baseUrl),
    // create: async (data) => await http.post(baseUrl, data),
    // get: async (id) => await http.get(`${baseUrl}/${id}`),
    // update: async (id, data) => await http.put(`${baseUrl}/${id}`, data),
    // delete: async (id) => await http.delete(`${baseUrl}/${id}`),
    // deleteAll: async () => await http.delete(baseUrl),
})

const productService = (baseUrl) => ({
    getAll: async () => await http.get(baseUrl),
    getCount: async () => await http.get(`${baseUrl}/count`),
    getFilter: async ({
        filter = {},
        limit = 10,
        page = 1,
        keyword = ''
    }) => await http.get(`${baseUrl}?filter=${filter}&limit=${limit}&page=${page}&keyword=${keyword}`),
})

export const UserService = userService('/users');
export const CategoryService = categoryService('/categories');
export const ProductService = productService('/products');