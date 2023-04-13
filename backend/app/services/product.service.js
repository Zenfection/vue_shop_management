class ProductService {
    constructor(client) {
        this.Product = client.db().collection('products')
    }

    async findAll(){
        return await this.Product.find().toArray()
    }

    async findById(id){
        return await this.Product.findOne({
            _id: ObjectId.createFromHexString(id)
        })
    }

    async topProductDiscount(){
        return await this.Product.find().sort({discount: -1}).limit(10).toArray()
    }

    async topProductRating(){
        return await this.Product.find().sort({rating: -1}).limit(10).toArray()
    }

    async topProductSeller(){
        return await this.Product.find().sort({seller: -1}).limit(10).toArray()
    }
}

export default ProductService