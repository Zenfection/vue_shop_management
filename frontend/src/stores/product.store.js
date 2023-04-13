export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        product: null
    }),

    actions: {
        async fetchProducts() {
        
        }
    }
})