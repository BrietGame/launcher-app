import { createApp } from 'vue'
import './style.css';
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Home from "./Home.vue";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
})

const app = createApp(App);
app.use(router)
app.mount('#app');
