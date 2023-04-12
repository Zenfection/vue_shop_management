import App from '@/App.vue';
import router from './routers';
import { createImageKitVue } from "imagekit-vue3"

//! lost animate.css
import AOS from 'aos';
import Pace from 'pace-js';

createApp(App)
    .use(router)
    .use(createPinia())
    .use(createImageKitVue({
        urlEndpoint: "https://ik.imagekit.io/zenfection",
        publicKey: import.meta.env.IMAGEKIT_PUBLIC_KEY, 
        authenticationEndpoint: import.meta.env.IMAGEKIT_PRIVATE_KEY, 
        registerGlobalComponents: true, 
    }))
    .mount('#app');

Pace.start();

AOS.init({ disable: 'phone' });