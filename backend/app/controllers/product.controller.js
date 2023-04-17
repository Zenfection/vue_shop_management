import { MongoDB } from '@utils'
import { ProductService } from '@services'
import createError from 'http-errors'
import httpStatus from 'http-status'
import { validationResult } from 'express-validator'

const getProduct = async (req, res, next) => {
    try {
        const product = new ProductService(MongoDB.client)
        const result = await product.findById(req.params.id)
        // ignore result.sold
        const { sold, ...rest } = result
        res.status(httpStatus.OK).json(rest)
    } catch (error) {
        throw createError(httpStatus.INTERNAL_SERVER_ERROR, error)
    }
}

const getProductFilter = async (req, res, next) => {
    // check validate
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(httpStatus.BAD_REQUEST).json({ errors: errors.array() })
    }

    try {
        const product = new ProductService(MongoDB.client)
        const result = await product.find({
            filter: req.query.filter ?? {},
            limit: req.query.limit ?? 10 , 
            page: req.query.page ?? 1,
            keyword: req.query.keyword,
            category: req.query.category
        })
        const total = await product.count({
            keyword: req.query.keyword,
            category: req.query.category
        })
        // ignore result.sold
        const { sold, ...rest } = result
        res.status(httpStatus.OK).json({
            data: rest,
            total: total
        })
    } catch (error) {
        throw createError(httpStatus.INTERNAL_SERVER_ERROR, error)
    }
}


export default {
    getProduct,
    getProductFilter,

}

