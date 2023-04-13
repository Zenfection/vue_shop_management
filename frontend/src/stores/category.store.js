export const CategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
    }),

    getters: {
        allCategories: (state) => state.categories,
    },

    actions: {
        async getCategories() {
            try {

            } catch (error) {
                console.error(error);
            }
        },

        async existState() {
            return localStorage.getItem('categories') ? true : false;
        },

        async saveState(categories) {
            const item = {
                value: categories,
                expire: new Date().getTime() + 1 * 24 * 60 * 60 * 1000, // 1 days
            };
            localStorage.setItem('categories', JSON.stringify(item));
        },

        async restoreState() {
            if (localStorage.getItem('categories')) {
                this.categories = JSON.parse(localStorage.getItem('categories')).value;
            }
        },
    },
});