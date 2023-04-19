class CartService {
    constructor(client) {
        this.Cart = client.db().collection('cart')
        this.Product = client.db().collection('products')
    }
    /*
        id_product
        username
        amount

        ! Find cart of user
    */ 
    async findCart(username) {
        // $lookup cart and product with id_product
        const cart = await this.Cart.aggregate([
            {
                $match: {
                    username
                }
            },
            {
                $lookup: {
                    from: 'products',
                    localField: 'id_product',
                    foreignField: '_id',
                    as: 'product'
                }
            },
            {
                $unwind: '$product'
            }
        ]).toArray()
        return cart
    }

}

export default CartService;