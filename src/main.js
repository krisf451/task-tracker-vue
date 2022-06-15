import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createPinia } from 'pinia';
import router from './router';

createApp(App).use(router).use(createPinia()).mount('#app');
