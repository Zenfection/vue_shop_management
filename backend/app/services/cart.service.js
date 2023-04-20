class CartService {
    constructor(client) {
        this.Cart = client.db().collection('cart')
    }

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
        
        //? ignore _id, id_product, username, product.sold

        cart.forEach(item => {
            delete item.username
            delete item.product.sold
        })
        return cart
    }

}

export default CartService;