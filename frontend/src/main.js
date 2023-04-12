import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from './routers';

//! lost animate.css
import AOS from 'aos';
import Pace from 'pace-js';

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app');

Pace.start();

AOS.init({ disable: 'phone' });