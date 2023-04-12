import ApiService from './api.service';

const baseUrl = 'https://vue-shop-qfco.onrender.com/users'
class UserService {
    
    constructor() {
        this.api = ApiService;
        this.api.init(baseUrl);
    }

    async getAll(){
        return (await this.api.get('/')).data;
    }

    async create(data){
        return (await this.api.post('/register', data)).data;
    }

    async login(data){
        return (await this.api.post('/login', data)).data;
    }

    async get(id){
        return (await this.api.get(`/${id}`)).data;
    }
    
    async update(id, data){
        return (await this.api.put(`/${id}`, data)).data;
    }
    
    // async delete(id){
    //     return (await this.api.delete(`/${id}`)).data;
    // }

    // async deleteAll(){
        //     return (await this.api.delete('/')).data;
        // }
        

}

export default new UserService();