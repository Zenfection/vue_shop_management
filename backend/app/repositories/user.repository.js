import { MongoDB, print, type } from '../utils/index.js'
import { UserService } from '../services/index.js'
import { Exception } from '../errors/index.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const login = async ({username, email, password }) => {
    try {
        const User = new UserService(MongoDB.client)
        let existUser = null
        if(!!username){
            existUser = await User.findByUsername(username)
        } else {
            existUser = await User.findByEmail(email)
        }
        if(existUser){
            let isMatch = await bcrypt.compare(password, existUser.password)
            if(!!isMatch){
                // create JWT token
                let token = jwt.sign({
                    data: existUser
                }, process.env.JWT_SECRET, {
                    expiresIn: '1d' // expires in 10 days
                })
                return {
                    ...existUser,
                    password: "Not show password",
                    token
                }
            } else {
                throw new Exception(Exception.WRONG_USER_PASSWORD)
            }
        }
    } catch (error) {
        console.log(error)
    }
}

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

const getDetailUser = async (id) => {
    try {
        const user = new UserService(MongoDB.client)
        const result = await user.findById(id)
        return result
    } catch (error) {
        throw new Exception('Can not get detail student', error)
    }
}

export default {
    login,
    register,
    getDetailUser
}