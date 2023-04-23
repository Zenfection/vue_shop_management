

const userService = (baseUrl) => ({
    //getAll: async () => await http.get(baseUrl),
    //create: async (data) => await http.post(`${baseUrl}/register`, data),
    login: async (data) => await http.post(`${baseUrl}/login`, data),
    getCart: async (data) => await http.post(`${baseUrl}/getcart`, data),
    addCart: async (data) => await http.post(`${baseUrl}/addcart`, data),
    removeCart: async (data) => await http.post(`${baseUrl}/removecart`, data),
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
    getFilter: async ({
        filter,
        limit,
        page,
        keyword,
        category
    }) => {
        let url = `${baseUrl}?`;

        if (!!filter) url += `filter=${filter}&`;
        if (!!limit) url += `limit=${limit}&`;
        if (!!page) url += `page=${page}&`;
        if (!!keyword) url += `keyword=${keyword}&`;
        if (!!category) url += `category=${category}&`;

        // Remove trailing &
        url = url.replace(/&$/, '');
        return await http.get(url);
    },
    getDetail: async (id) => await http.get(`${baseUrl}/${id}`),
})

export const UserService = userService('/users');
export const CategoryService = categoryService('/categories');
export const ProductService = productService('/products');