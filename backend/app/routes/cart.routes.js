import express from 'express'
import { cartController } from '@controllers'
import { body } from 'express-validator'

const router = express.Router()

router.get('/',[
    body('username').isString()
] ,cartController.getCart)

// router
//     .get('/', [
//         body('page').optional().isInt(),
//         body('keyword').optional().isString(),
//         body('category').optional().isString(),
//         body('filter').optional().isString(), 
//         body('limit').optional().isInt()
//     ], productController.getProductFilter)

// router.get('/:id', productController.getProduct)

export default router