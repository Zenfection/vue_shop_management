import App from '@/App.vue';
import router from './routers';

//! lost animate.css

createApp(App)
    .use(router)
    .use(createPinia())
    .use(createImageKitVue({
        urlEndpoint: import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT,
        publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY, 
        authenticationEndpoint: import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY, 
        registerGlobalComponents: true, 
    }))
    .mount('#app');

Pace.start();
Aos.init();