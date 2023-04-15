import { validationResult } from 'express-validator'
import { MongoDB } from '@utils'
import { UserService } from '@services'
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

        const existUser = await User.findOne({ $or: [{ username }, { email }] })
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
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: exception.toString()
        })
    }
}

const register = async (req, res) => {
    const { username, fullname, email, password, active, phone, address, province, city, ward } = req.body

    try {
        const user = await userRepository.register({ username, fullname, email, password, active, phone, address, province, city, ward })
        if (!!user.messageError) {
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
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: 'Can not get user by id',
            error: error.toString()
        })
    }
}

/*


const register = async ({ username, fullname, email, password, active, phone, address, province, city, ward }) => {
    try{
        // hash password
        let hashedPassword = await bcrypt.hash(password, parseInt(process.env.SECRET_PHARSE))
        
        // use service create
        const User = new UserService(MongoDB.client);
        const result = await User.create({
            username,
            fullname,
            email,
            password: hashedPassword,
            active,
            phone,
            address,
            province,
            city,
            ward
        });
        return result
    } catch (error){
        print(error.toString(), type.ERROR)
        throw new Exception(Exception.CANNOT_REGISTER_USER)
    }
}

*/

export default {
    login,
    register,
    getDetailUser
}