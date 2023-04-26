import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import App from './App.vue'
import formKitConfig from './formkit.config'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto/routes'
import { createHead } from '@vueuse/head'

//TODO Component
import { Skeletor } from 'vue-skeletor';
import Pace from "pace-js";
import { Rating } from '@morpheme/rating'
import VueTinySlider from "@mentorkadriu/vue-tiny-slider"
import { MotionPlugin } from '@vueuse/motion'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import vSelect from 'vue-select'


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
    },
});

const app = createApp(App)
app.use(plugin, defaultConfig(formKitConfig))
app.use(autoAnimatePlugin)
app.use(router)
app.use(createPinia())
app.use(head)
app.use(MotionPlugin)
app.use(createImageKitVue(imageKitConfig))


app.component(Skeletor.name, Skeletor)
app.component('Rating', Rating)
app.component('VueTinySlider', VueTinySlider)
app.component('v-select', vSelect)


app.mount('#app')

Pace.start();
