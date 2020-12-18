import vueRouter from 'vue-router'
import User from './components/User'
import UserBalance from './components/UserBalance'
import Registro from './components/registro'
import App from './App'
import Habitaciones from './components/habitaciones'
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/user/:username',
            name: "user",
            component: User
        },
        {
            path: '/user/balance/:username',
            name: "user_balance",
            component: UserBalance
        },
        {
            path: '/user/registro/:username',
            name: "registro",
            component: Registro
        },

        {
            path: '/habitaciones/',
            name: "habitaciones",
            component: Habitaciones
        },
        { path: "/", component: Home },
        { path: "/login", name: "Login", component: Login },
        { path: "/register", component: Register }


    ]
})
export default router