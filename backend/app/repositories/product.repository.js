import { MongoDB, print, type } from '../utils/index.js'
import { ProductService } from '../services/index.js'
import { Exception } from '../errors/index.js'

const getAll = async () => {
    try {
        const product = new ProductService(MongoDB.client)
        const result = await product.findAll()
        return result
    } catch (error) {
        throw new Exception('Can not get all category', error)
    }
}

export default {
    getAll
}