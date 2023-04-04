import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './routers';


//! lost animate.css

import 'bootstrap/dist/css/bootstrap.min.css';
import "@/assets/css/style-v2.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import $ from 'jquery';

import 'nice-select2/dist/css/nice-select2.css'
import 'nice-select2/dist/js/nice-select2'

import TinySlider from 'tiny-slider';


const app = createApp(App).use(router).use(createPinia()).use(TinySlider);

app.config.globalProperties.$ = window.$ = $;
app.config.globalProperties.$tinySlider = TinySlider;

app.mount('#app');

AOS.init({ disable: 'phone' });