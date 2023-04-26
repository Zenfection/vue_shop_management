export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        token: null,
        cart: null,
    }),

    getters: {
        isAuthenticated: state => !!state.token,
        totalMoney: state => {

            const formatter = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND'
            })

            let total = 0;
            state.cart.forEach(item => {
                let discountPrice = item.product.price - (item.product.price * item.product.discount) / 100
                total += discountPrice * item.amount
            });
            return formatter.format(total);
        }
    },

    actions: {
        login(user) {
            this.user = {
                id: user._id,
                username: user.username,
                fullname: user.fullname,
                email: user.email,
                phone: user.phone ?? null,
                address: user.address ?? null,
                province: user.province ?? null,
                district: user.district ?? null,
                ward: user.ward ?? null,
            };

            this.token = user.token;

            window.localStorage.setItem('user', JSON.stringify({
                user: this.user,
                token: this.token
            }));
        },

        logout() {
            this.user = null;
            this.token = null;

            window.localStorage.removeItem('user');
        },

        setCart(cart) {
            this.cart = cart;
        },

        restoreState() {
            const user = JSON.parse(window.localStorage.getItem('user'));

            if (user) {
                this.user = user.user;
                this.token = user.token;
            }
        },

    }
});
