import { createApp } from 'vue'
import './style.css';
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Home from "./Home.vue";
import Login from "./Login.vue";
import {store} from './store'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})

const app = createApp(App);
app.use(router)
app.use(store)
app.mount('#app');
