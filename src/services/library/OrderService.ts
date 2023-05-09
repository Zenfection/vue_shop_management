import { AxiosInstance } from "axios"
import { BaseService, instance } from "../index.service"

class OrderService extends BaseService {
    constructor(baseUrl: string, instance: AxiosInstance) {
        super(baseUrl, instance)
    }

    async getOrderAll(data: any) {
        return await this.post(`${this.baseUrl}/`, data)
    }

    async getOrderDetail(data: any) {
        return await this.post(`${this.baseUrl}/${data.id}`, data)
    }

    async createOrder(data: any) {
        return await this.post(`${this.baseUrl}/create`, data)
    }
}

const OrderServiceInstance = new OrderService("/orders", instance)
export default OrderServiceInstance as OrderService