import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import '../assets/style.scss';
import 'bootstrap/dist/js/bootstrap.js';

createApp(App).use(router).use(store).mount('#app');
