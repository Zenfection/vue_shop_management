import { ObjectId } from 'mongodb';
import validator from 'validator';

class UserService {
    constructor(client) {
        this.User = client.db().collection('users')
    }

    async validate(user) {
        const errors = {};

        //* username, fullname, email, password, phone, address, province, city, ward
        if (!validator.isLength(user.username, { min: 6 }) || !validator.isAlphanumeric(user.username)) {
            errors.username = 'Username length must be at least 6 characters and only contain letters and numbers'
        } else if (!validator.isLength(user.fullname, { min: 6 })) {
            errors.fullname = 'Fullname length must be at least 6 characters'
        } else if (!validator.isEmail(user.email)) {
            errors.email = 'Email is not valid'
        } else if (!validator.isLength(user.password, { min: 6 })) {
            errors.password = 'Password length must be at least 6 characters'
        }

        //* phone
        if (user.phone && !validator.isMobilePhone(user.phone)) {
            errors.phone = 'Phone is not valid';
        }

        //* address, province, city, ward
        if (user.address && !validator.isLength(user.address, { min: 6 })) {
            errors.address = 'Address length must be at least 6 characters';
        }
        if (user.province && !validator.isLength(user.province, { min: 2 })) {
            errors.province = 'Province length must be at least 2 characters';
        }
        if (user.city && !validator.isLength(user.city, { min: 2 })) {
            errors.city = 'City length must be at least 2 characters';
        }
        if (user.ward && !validator.isLength(user.ward, { min: 2 })) {
            errors.ward = 'Ward length must be at least 2 characters';
        }

        let existUser = await this.User.findOne({ email })
        let existUsername = await this.User.findOne({ username })
        if (existUser) {
            errors.email = 'Email is already exist'
        } else if(existUsername) {
            errors.username = 'Username is already exist'
        }
        
        return Object.keys(errors).length > 0 ? errors : null
    }

    async extactUserData(payload) {
        // accept null: phone, address, province, city, ward
        const user = {
            _id: payload._id && ObjectId.createFromHexString(payload._id),
            username: payload.username,
            fullname: payload.fullname,
            email: payload.email,
            password: payload.password,
            active: payload.active ?? true,
            phone: payload.phone ?? null,
            address: payload.address ?? null,
            province: payload.province ?? null,
            city: payload.city ?? null,
            ward: payload.ward ?? null,
        }

        const errors = await this.validate(user)
        if (!!errors) {
            return {
                messageError: "Input Error",
                validationErrors: errors
            }
        }

        Object.keys(user).forEach(
            (key) => (user[key] === undefined) && delete user[key]
        )
        return user;
    }

    async create(payload) {
        const user = await this.extactUserData(payload)
    
        if (user.messageError) {
            return user
        }

        await this.User.findOneAndUpdate(
            { email: user.email },
            { $set: user },
            { upsert: true, returnOriginal: false }
        )
        return user
    }

    async find(filter) {
        const cursor = await this.User.find(filter);
        return cursor
    }

    async findOne(filter) {
        const cursor = await this.User.findOne(filter);
        return cursor
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.createFromHexString(id)
        }
        const update = this.extactUserData(payload)
        const result = await this.User.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: 'after' }
        )
        return result.value
    }

    async delete(id) {
        const result = await this.User.findOneAndDelete({
            _id: ObjectId.createFromHexString(id)
        })
        return result.value
    }

    async deleteAll() {
        const result = await this.User.deleteMany({})
        return result.deletedCount
    }
}

export default UserService