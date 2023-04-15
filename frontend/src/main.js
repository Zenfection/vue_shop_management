import App from '@/App.vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'

//TODO Components
import { Skeletor } from 'vue-skeletor';

const imageKitConfig = {
    urlEndpoint: import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT,
    publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY,
    authenticationEndpoint: import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY,
    registerGlobalComponents: true,
};

const routes = setupLayouts(generatedRoutes);
const head = createHead()

// Khởi tạo router và gán vào biến router
const router = createRouter({
    history: createWebHistory(),
    routes,
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


// import '@unocss/reset/tailwind.css';
// import './styles/main.css';
// import 'uno.css';

