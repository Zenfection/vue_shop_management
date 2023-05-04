const userService = (baseUrl) => ({
    login: async (data) => await http.post(`${baseUrl}/login`, data),
    updateUser: async (data) => await http.patch(`${baseUrl}/update`, data),
    //* CART
    getCart: async (data) => await http.post(`${baseUrl}/getcart`, data),
    addCart: async (data) => await http.post(`${baseUrl}/addcart`, data),
    removeCart: async (data) => await http.post(`${baseUrl}/removecart`, data),
})


const categoryService = (baseUrl) => ({
    getAll: async () => await http.get(baseUrl),
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

const orderService = (baseUrl) => ({
    getOrder: async (data) => await http.post(`${baseUrl}/get`, data),
    createOrder: async (data) => await http.post(`${baseUrl}/create`, data),
})


const APIProvince = import.meta.env.VITE_API_PROVINCE_VN
const pcVNService = () => ({
    getProvinces: async () => {
        const { data } = await axios.get(APIProvince)
        return data.map((item) => ({ name: item.name, code: item.code }))
    },

    getDistricts: async (provinceCode) => {
        const { data } = await axios.get(`${APIProvince}p/${provinceCode}`, {
            params: { depth: 2, },
        }, {
            headers: { 'Access-Control-Allow-Origin': '*' },
        })

        return data.districts.map((item) => ({ name: item.name, code: item.code }))
    },

    getWards: async (districtCode) => {
        const { data } = await axios.get(`${APIProvince}d/${districtCode}`, {
            params: { depth: 2, },
        })

        return data.wards.map((item) => ({ name: item.name, code: item.code }))
    }
})


export const UserService = userService('/users');
export const CategoryService = categoryService('/categories');
export const ProductService = productService('/products');
export const OrderService = orderService('/orders');
export const PCVNService = pcVNService();