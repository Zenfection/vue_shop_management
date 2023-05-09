import { AxiosInstance } from "axios"
import { BaseService, instance } from "../index.service"

class CategoryService extends BaseService {
    constructor(baseUrl: string, instance: AxiosInstance) {
        super(baseUrl, instance);
    }

    async getAll() {
        return await this.get(this.baseUrl)
    }
}

const CategoryServiceInstance = new CategoryService("/categories", instance)

export default CategoryServiceInstance as CategoryService