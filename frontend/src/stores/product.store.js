export const useProductStore = defineStore('product', {
    state: () => ({
        keyword: '',
        filter: '',
        countProduct: null,
        page: 1,
    }),


    actions: {
        setKeyword(keyword) {
            this.keyword = keyword
        },

        setFilter(filter) {
            this.filter = filter
        },

        setCountProduct(countProduct) {
            this.countProduct = countProduct
        },

        setPage(page) {
            this.page = page
        }
    },
})