import App from '@/App.vue'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto/routes'
import { createHead } from '@vueuse/head'

//TODO Components
import { Skeletor } from 'vue-skeletor';
import Pace from "pace-js";
import { Rating } from '@morpheme/rating'
import VueTinySlider from "@mentorkadriu/vue-tiny-slider"
import { MotionPlugin } from '@vueuse/motion'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const imageKitConfig = {
    urlEndpoint: api.imagekit.urlEndpoint,
    publicKey: api.imagekit.publicKey,
    authenticationEndpoint: api.imagekit.privateKey,
    registerGlobalComponents: true,
};

const head = createHead()

// Khởi tạo router và gán vào biến router
const router = createRouter({
    history: createWebHistory(),
    routes: setupLayouts(routes),
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
});

// Kết nối App với router và kết nối ứng dụng với phần tử HTML
const app = createApp(App)
                .use(router)
                .use(createPinia())
                .use(head)
                .use(MotionPlugin)
                .use(autoAnimatePlugin)
                .use(createImageKitVue(imageKitConfig))

app.component(Skeletor.name, Skeletor)
app.component('Rating', Rating)
app.component('VueTinySlider', VueTinySlider)

app.mount('#app');

Pace.start();

