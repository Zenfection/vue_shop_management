import express from 'express'
import { body, oneOf } from 'express-validator'
import { userController } from '@controllers'

const router = express.Router()

router.get('/:id', userController.getDetailUser)

router.post('/login', [
    oneOf([
    body('username')
        .exists().withMessage('Username is required')
        .isLength({ min: 5 }).withMessage('Username must be at least 5 characters'),
    body('email')
        .exists().withMessage('Email is required')
        .isEmail().withMessage('Invalid email address')
    ])
], userController.login);

router.post('/register', userController.register)

export default router