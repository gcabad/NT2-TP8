import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './componentes/Home.vue'
import Formulario from './componentes/Formulario.vue'
import Usuarios from './componentes/Usuarios.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/formulario', component: Formulario },
        { path: '/usuarios', component: Usuarios },
    ]
})