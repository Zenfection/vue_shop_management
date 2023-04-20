import { validationResult } from 'express-validator'
import { MongoDB } from '@utils'
import { UserService, CartService } from '@services'
import createError from 'http-errors'
import httpStatus from 'http-status'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ObjectId } from 'mongodb'


const login = async (req, res) => {
    //? Validate request
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(httpStatus.BAD_REQUEST).json({ errors: errors.array() })
    }

    const { username, email, password } = req.body
    try {
        const User = new UserService(MongoDB.client)

        const existUser = await User.findOne({ $or: [{ email: email }, { username: username }] })
        if (!!existUser) {
            //? Check password with JWT
            let isMatch = await bcrypt.compare(password, existUser.password)
            if (!!isMatch) {
                //? create JWT token
                let token = jwt.sign({
                    data: existUser
                }, process.env.JWT_SECRET, {
                    expiresIn: '1d' // expires in 1 days
                })
                // ignore password and add token to existUser
                const { password, ...rest } = existUser
                rest.token = token
                res.status(httpStatus.OK).json({
                    message: 'Login success',
                    user: rest
                })
            } else {
                res.status(httpStatus.UNAUTHORIZED).json({
                    error: 'Login failed',
                    message: 'Wrong username or password'
                })
            }
        }
    } catch (exception) {
        throw createError(httpStatus.INTERNAL_SERVER_ERROR, exception)
    }
}

const register = async (req, res) => {
    const { username, fullname, email, password, active, phone, address, province, city, ward } = req.body

    try {
        const user = await userRepository.register({ username, fullname, email, password, active, phone, address, province, city, ward })
        if (!!user.messageError) {
            res.status(httpStatus.BAD_REQUEST).json({
                message: 'Can not register user',
                validationErrors: user.validationErrors
            })
        } else {
            res.status(httpStatus.CREATED).json({
                message: 'register user success',
                data: user
            })
        }
    } catch (exception) {
        throw createError(httpStatus.INTERNAL_SERVER_ERROR, exception)
    }
}


const getDetailUser = async (req, res) => {
    const { id } = req.params
    try {
        const User = new UserService(MongoDB.client)
        const existUser = await User.findOne({ _id: ObjectId.createFromHexString(id) })
        if (!!existUser) {
            res.status(httpStatus.OK).json({
                message: `GET user by id: ${id}`,
                data: existUser
            })
        } else {
            res.status(httpStatus.NOT_FOUND).json({
                message: `User with id: ${id} not found`,
                error: 'User not found'
            })
        }
    } catch (exception) {
        throw createError(httpStatus.INTERNAL_SERVER_ERROR, exception)
    }
}

const getCart = async (req, res, next) => {
    //? Validate request
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(httpStatus.BAD_REQUEST).json({ errors: errors.array() })
    }

    const { username } = req.body
    try {
        const cart = new CartService(MongoDB.client)
        const result = await cart.findCart(username)
        res.status(httpStatus.OK).json(result)
    } catch (exception) {
        throw createError(httpStatus.INTERNAL_SERVER_ERROR, exception)
    }
}

export default {
    login,
    register,
    getDetailUser,
    getCart
}