import App from '@/App.vue'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto/routes'
import { createHead } from '@vueuse/head'

//TODO Components
import { Skeletor } from 'vue-skeletor';

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
});

// Kết nối App với router và kết nối ứng dụng với phần tử HTML
const app = createApp(App)
                .use(router)
                .use(createPinia())
                .use(head)
                .use(createImageKitVue(imageKitConfig));

app.component(Skeletor.name, Skeletor);

app.mount('#app');

// Khởi động các thư viện Pace và Aos
Pace.start();
Aos.init();

