import axios, { AxiosInstance, AxiosResponse } from "axios"

class BaseService {
    constructor(protected baseUrl: string, private instance: AxiosInstance) { }

    protected async get<T>(url: string): Promise<T> {
        const response: AxiosResponse<T> = await this.instance.get(url)
        return response.data
    }

    protected async post<T>(url: string, data: any): Promise<T> {
        const response: AxiosResponse<T> = await this.instance.post(url, data)
        return response.data
    }

    protected async patch<T>(url: string, data: any): Promise<T> {
        const response: AxiosResponse<T> = await this.instance.patch(url, data)
        return response.data
    }

    protected async delete<T>(url: string): Promise<T> {
        const response: AxiosResponse<T> = await this.instance.delete(url)
        return response.data
    }
}

const user = window.localStorage.getItem("user");
const token = user ? JSON.parse(user)?.token : null;

const instance: AxiosInstance = axios.create({
    baseURL: api.backend,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
    },
});

export {
    instance,
    BaseService
}