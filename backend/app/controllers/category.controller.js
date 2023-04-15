import { MongoDB } from '@utils'
import { CategoryService } from '@services'
import createError from 'http-errors'
import httpStatus from 'http-status'

const getAll = async (req, res, next) => {
    try {
        const category = new CategoryService(MongoDB.client)
        const result = await category.find()
        res.status(httpStatus.OK).json(result)
    } catch (exception) {
        throw createError(httpStatus.INTERNAL_SERVER_ERROR, exception)
    }
}

export default {
    getAll
}