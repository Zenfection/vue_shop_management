import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        token: null
    }),

    getters: {
        isAuthenticated: state => !!state.token
    },

    actions: {
        login(user) {
            this.user = {
                id: user.id,
                username: user.username,
                fullname: user.fullname,
                email: user.email,
                phone: user.phone ?? null,
                address: user.address ?? null,
                province: user.province ?? null,
                city: user.city ?? null,
                ward: user.ward ?? null,
            };

            this.token = user.token;
            
            window.localStorage.setItem('user', JSON.stringify({
                user: this.user,
                token: this.token
            }));
        },

        restoreState() {
            const user = JSON.parse(window.localStorage.getItem('user'));

            if (user) {
                this.user = user.user;
                this.token = user.token;
            }
        }
    }
});
