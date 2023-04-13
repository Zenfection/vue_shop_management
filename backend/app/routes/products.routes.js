import express from 'express'
import { productController } from '../controllers/index.js'

const router = express.Router()

router.get('/', productController.getAllProduct)

export default router