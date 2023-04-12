import { MongoDB, print, type } from '../utils/index.js'
import { CategoryService } from '../services/index.js'
import { Exception } from '../errors/index.js'

const getAll = async () => {
    try {
        const category = new CategoryService(MongoDB.client)
        const result = await category.findAll()
        return result
    } catch (error) {
        throw new Exception('Can not get all category', error)
    }
}

export default {
    getAll
}