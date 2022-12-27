import { createApp } from 'vue';
import './style.css';
import router from './router/index';
import Element3 from 'element3';
import 'element3/lib/theme-chalk/index.css';
import { createPinia } from 'pinia';
import App from './App.vue';

createApp(App).use(router).use(createPinia()).use(Element3).mount('#app');
