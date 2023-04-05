import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './routers';

//! lost animate.css
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App).use(router).use(createPinia());

app.mount('#app');

AOS.init({ disable: 'phone' });