export const useProductStore = defineStore('product', {
    state: () => ({
        keyword: useRoute().query.keyword || '',
        filter: '',
        countProduct: null,
        page: parseInt(useRoute().query.page) || 1, //! page must be integer
        view: useRoute().query.view || 'grid',
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
        },

        setView(view) {
            this.view = view
        }
    },
})