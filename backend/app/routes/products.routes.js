import express from 'express'
import { productController } from '@controllers'
import { body } from 'express-validator'

const router = express.Router()

router
    .get('/', [
        body('page').optional().isInt(),
        body('keyword').optional().isString(),
        body('filter').optional().isString(), 
        body('limit').optional().isInt()
    ], productController.getTopProduct)

    .get('/count', productController.getTotal)

export default router