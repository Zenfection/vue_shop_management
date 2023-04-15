class ProductService {
    constructor(client) {
        this.Product = client.db().collection('products')
    }

    async find({ page, keyword, filter, limit }) {
        page = parseInt(page)
        limit = parseInt(limit)

        const sortOptions = [
            { filter: 'discount', sort: { discount: -1 } },
            { filter: 'ranking', sort: { ranking: -1 } },
            { filter: 'sold', sort: { sold: -1 } },
        ];

        const sort = sortOptions.find((option) => option.filter === filter)?.sort || {};

        let query = await this.Product.find({
            $or: [
                { name: { $regex: keyword, $options: 'i' } },
                { description: { $regex: keyword, $options: 'i' } },
            ],
        })
            .sort(sort)
            .skip((page - 1) * limit)

        if (!!limit) {
            query = query.limit(limit);
        }

        return await query.toArray();
    }

    async count(){
        return await this.Product.countDocuments()
    }


    async findById(id) {
        return await this.Product.findOne({
            _id: ObjectId.createFromHexString(id)
        })
    }
}

export default ProductService