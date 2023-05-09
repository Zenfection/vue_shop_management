import { AxiosInstance } from "axios"
import { BaseService, instance } from "../index.service"

class ProductService extends BaseService {
    constructor(baseUrl: string, instance: AxiosInstance) {
        super(baseUrl, instance)
    }

    async getAll() {
        return await this.get(this.baseUrl)
    }

    async getFilter({
        filter,
        limit,
        page,
        keyword,
        category,
    }: {
        filter?: string
        limit?: number
        page?: number
        keyword?: string
        category?: string
    }) {
        let url = `${this.baseUrl}?`

        if (!!filter) url += `filter=${filter}&`
        if (!!limit) url += `limit=${limit}&`
        if (!!page) url += `page=${page}&`
        if (!!keyword) url += `keyword=${keyword}&`
        if (!!category) url += `category=${category}&`

        // Remove trailing &
        url = url.replace(/&$/, "")
        return await this.get(url)
    }

    async getDetail(id: number | string) {
        return await this.get(`${this.baseUrl}/${id}`)
    }
}

const ProductServiceInstance = new ProductService("/products", instance)
export default ProductServiceInstance as ProductService