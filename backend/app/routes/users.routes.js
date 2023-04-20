import express from 'express'
import { body, oneOf } from 'express-validator'
import { userController } from '@controllers'

const router = express.Router()

router.get('/:id', userController.getDetailUser)

router.post('/login', [
    oneOf([
    body('username')
        .exists()
        .isLength({ min: 5 }),
    body('email')
        .exists().isEmail()
    ]), body('password').exists().isString(),
], userController.login);


router.post('/register', userController.register)

router.post('/cart',[
    body('username').exists().isString(),
], userController.getCart)

export default router