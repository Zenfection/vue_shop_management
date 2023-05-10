import { User, CartItem, OrderItem } from "../global/types";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as User | null,
        cart: [] as CartItem[],
        orders: [] as OrderItem[],
    }),

    getters: {
        isAuthenticated: (state): boolean => !!state.user,
        totalMoney: (state): number =>
            state.cart.reduce((total, item) => {
                const discountPrice = item.product.price - (item.product.price * item.product.discount) / 100;
                return total + discountPrice * item.amount;
            }, 0),
        totalAmount: (state): number =>
            state.cart.reduce((total, item) => total + item.amount, 0),

    },

    actions: {
        login(user: User): void {
            const { _id, username, fullname, email, phone, address, province, district, ward, token } = user

            this.user = { _id, username, fullname, email, phone, address, province, district, ward, token }

            const item = {
                value: user,
                expire: new Date().getTime() + 1 * 24 * 60 * 60 * 1000, // 1 days
            }
            window.localStorage.setItem('user', JSON.stringify(item));
        },

        logout(): void {
            this.user = null
            window.localStorage.removeItem('user')
        },

        setCart(cart: CartItem[]): void {
            this.cart = cart;
        },

        clearCart(): void {
            this.cart = [];
        },

        setOrder(orders: OrderItem[]): void {
            this.orders = orders;
        },

        restoreState(): boolean {
            const item = window.localStorage.getItem('user')
            if(item){
                const parsedItem = JSON.parse(item)
                if (parsedItem.expire < new Date().getTime()) {
                    window.localStorage.removeItem('user')
                    this.user = null
                    return false
                }
                this.user = parsedItem.value
                return true
            } else {
                this.user = null
                return false
            }
        },
    }

});
