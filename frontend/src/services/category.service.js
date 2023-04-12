import ApiService from './api.service.js'
import { api } from '@/global/index.js'

const baseUrl = api.backend + '/categories'

class CategoryService {
    constructor() {
        this.api = ApiService;
        this.api.init(baseUrl);
    }

    async getAll(){
        return (await this.api.get('/')).data;
    }

    async create(data){
        return (await this.api.post('/', data)).data;
    }

    async get(id){
        return (await this.api.get(`/${id}`)).data;
    }
    
    async update(id, data){
        return (await this.api.put(`/${id}`, data)).data;
    }
    
    async delete(id){
        return (await this.api.delete(`/${id}`)).data;
    }

    async deleteAll(){
            return (await this.api.delete('/')).data;
    }
}

export default new CategoryService();