import { validationResult } from 'express-validator'
import { userRepository } from '../repositories/index.js'
import { HttpStatusCode } from '../errors/index.js'


const login = async (req, res) => {
    //* Validate request
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({ errors: errors.array() })
    }

    const { username, email, password } = req.body
    try {
        //* Call repository
        let existUser = await userRepository.login({ username, email, password })
        if(existUser){
            res.status(HttpStatusCode.OK).json({
                message: 'Login success',
                user: existUser
            })
        } else {
            res.status(HttpStatusCode.UNAUTHORIZED).json({
                message: 'Login failed',
            })
        }
    } catch(error){
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.toString()
        })
    }
}

const register = async (req, res) => {
    const { username, fullname, email, password, active, phone, address, province, city, ward } = req.body
    
    try {
        const user = await userRepository.register({ username, fullname, email, password, active, phone, address, province, city, ward })
        if(!!user.messageError){
            res.status(HttpStatusCode.BAD_REQUEST).json({
                message: 'Can not register user',
                validationErrors: user.validationErrors
            })
        } else {
            res.status(HttpStatusCode.CREATED).json({
                message: 'register user success',
                data: user
            })
        }
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.toString()
        })
    }
}

const getDetailUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await userRepository.getDetailUser(id)
        if(!!user){
            res.status(HttpStatusCode.OK).json({
                message: `GET user by id: ${id}`,
                data: user
            })
        } else {
            res.status(HttpStatusCode.NOT_FOUND).json({
                message: `User with id: ${id} not found`,
                error: 'User not found'
            })
        }
    } catch(error){
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: 'Can not get user by id',
            error: error.toString()
        })
    }
}

export default {
    login,
    register,
    getDetailUser
}