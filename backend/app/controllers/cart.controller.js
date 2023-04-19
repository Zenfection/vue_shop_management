import { MongoDB } from '@utils'
import { CartService } from '@services'
import createError from 'http-errors'
import httpStatus from 'http-status'

const getCart = async (req, res, next) => {
    try {
        const cart = new CartService(MongoDB.client)
        const result = await cart.findCart(req.user.username)
        res.status(httpStatus.OK).json(result)
    } catch (exception) {
        throw createError(httpStatus.INTERNAL_SERVER_ERROR, exception)
    }
}

export default {
    getCart
}