import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import RegistroUsuario from '../views/RegistroUsuario.vue'
import RecuperarContraseña from '../views/RecuperarContraseña.vue'
import ErrorMenssage from '../views/ErrorMenssage.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/About.vue')
        }
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Registro',
        name: 'RegistroUsuario',
        component: RegistroUsuario
    },
    {
        path: '/Recuperar',
        name: 'RecuperarContraseña',
        component: RecuperarContraseña
    },
    {
        path: '*',
        name: 'ErrorMenssage',
        component: ErrorMenssage
    },
    {
        path: '/MenuTraductor',
        name: 'menu-traductor',
        component: () => import('../views/Menutraductor.vue')
    },
    {
        path: '/Secciones',
        name: 'secciones',
        component: () => import('../views/Secciones.vue')
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router