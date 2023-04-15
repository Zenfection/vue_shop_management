import express from 'express'
import { categoryController } from '@controllers'

const router = express.Router()

router.get('/', categoryController.getAll)

export default router