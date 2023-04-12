import { categoryRepository } from "../repositories/index.js"
import { HttpStatusCode } from "../errors/index.js"

const getAllCategories = async (req, res) => {
    try {
        const result = await categoryRepository.getAll()
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(error)
    }
}

export default {
    getAllCategories
}