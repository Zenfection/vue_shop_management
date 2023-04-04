import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './routers';

import 'bootstrap/dist/css/bootstrap.min.css';

//! lost animate.css

import AOS from 'aos';
import 'aos/dist/aos.css';

import $ from 'jquery';

import 'nice-select2/dist/css/nice-select2.css'
import 'nice-select2/dist/js/nice-select2'

import TinySlider from 'tiny-slider';

const app = createApp(App);

app.config.globalProperties.$ = window.$ = $;
app.config.globalProperties.$tinySlider = TinySlider;

app.use(router);
app.use(createPinia());

app.use(TinySlider)

app.mount('#app');

AOS.init({ disable: 'phone' });