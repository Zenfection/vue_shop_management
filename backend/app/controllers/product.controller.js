import { productRepository } from "../repositories/index.js"
import { HttpStatusCode } from "../errors/index.js"

const getAllProduct = async (req, res) => {
    try {
        const result = await productRepository.getAll()
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(error)
    }
}

export default {
    getAllProduct
}