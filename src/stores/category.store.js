export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
        currentCategory: useRoute().query.category ?? 'all',
    }),

    actions: {
        existState() {
            return localStorage.getItem('categories') ? true : false;
        },

        saveState(categories) {
            const item = {
                value: categories,
                expire: new Date().getTime() + 1 * 24 * 60 * 60 * 1000, // 1 days
            };
            localStorage.setItem('categories', JSON.stringify(item));
        },

        restoreState() {
            if (localStorage.getItem('categories')) {
                this.categories = JSON.parse(localStorage.getItem('categories')).value;
            }
        },

        setCurrentCategory(category) {
            this.currentCategory = category;
        }
    },
});