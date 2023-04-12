class CategoryService {
    constructor(client) {
        this.Category = client.db().collection('categories')
    }

    async findAll() {
        return await this.Category.find({}).toArray();
    }
}

export default CategoryService;