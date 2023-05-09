import axios from 'axios'

class PCVNService {
    private readonly apiProvince: string

    constructor(apiProvince: string) {
        this.apiProvince = apiProvince
    }

    async getProvinces() {
        const { data } = await axios.get(this.apiProvince)
        return data.map((item: any) => ({ name: item.name, code: item.code }))
    }

    async getDistricts(provinceCode: string) {
        const { data } = await axios.get(`${this.apiProvince}p/${provinceCode}`, {
            params: { depth: 2 },
        })

        return data.districts.map((item: any) => ({
            name: item.name,
            code: item.code,
        }))
    }

    async getWards(districtCode: string) {
        const { data } = await axios.get(`${this.apiProvince}d/${districtCode}`, {
            params: { depth: 2 },
        })

        return data.wards.map((item: any) => ({ name: item.name, code: item.code }))
    }
}

const PCVNServiceInstance = new PCVNService(import.meta.env.VITE_API_PROVINCE_VN)
export default PCVNServiceInstance as PCVNService