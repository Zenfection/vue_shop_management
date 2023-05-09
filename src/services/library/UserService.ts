import { AxiosInstance } from "axios"
import { BaseService, instance } from "../index.service"

class UserService extends BaseService {
    constructor(baseUrl: string, instance: AxiosInstance) {
        super(baseUrl, instance)
    }

    public async login(data: any): Promise<any> {
        return await this.post(`${this.baseUrl}/login`, data)
    }

    public async updateUser(data: any): Promise<any> {
        return await this.patch(`${this.baseUrl}/update`, data)
    }

    //* CART
    public async getCart(data: any): Promise<any> {
        return await this.post(`${this.baseUrl}/getcart`, data)
    }

    public async addCart(data: any): Promise<any> {
        return await this.post(`${this.baseUrl}/addcart`, data)
    }

    public async removeCart(data: any): Promise<any> {
        return await this.post(`${this.baseUrl}/removecart`, data)
    }
}

const UserServiceInstance = new UserService("/users", instance);
export default UserServiceInstance as UserService