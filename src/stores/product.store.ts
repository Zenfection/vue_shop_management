import { Product, FilterProduct } from "../global/types"

export const useProductStore = defineStore({
    id: 'product',
    state: () => ({
        filter: {} as FilterProduct,
        countProduct: 0,
        page: parseInt(useRoute().query.page) || 1, //! page must be integer
        view: useRoute().query.view || 'grid',
    }),

    getters: {
        getPage: (state) => state.page,
        getFilter: (state) => state.filter,
    },

    actions: {
        setFilter({ category, keyword, page }: { category?: string; keyword?: string; page?: number }) {
            this.filter = {
                category: category || this.filter.category,
                keyword: keyword,
                page: page ?? 1,
            }
        },

        setCountProduct(countProduct: number) {
            this.countProduct = countProduct
        },

        setPage(page: number) {
            this.page = page
        },

        setView(view: string) {
            this.view = view
        },

        async fetchProduct(): Promise<Product[]> {
            const { filter } = this.$state;
            const { category, keyword, page } = filter;
            const response = await ProductService.getFilter({
                category,
                keyword,
                page,
                limit: 9,
            }) as { total: number; data: Product[] }
            this.setCountProduct(response.total);
            return response.data;
        },
    },
})