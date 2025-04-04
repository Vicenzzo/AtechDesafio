// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import UserForm from '../pages/UserFormPage.vue'
import UserDetails from '../pages/UserDetailsPage.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/adicionar', component: UserForm },
    { path: '/editar/:id', component: UserForm, props: true },
    { path: '/detalhes/:id', component: UserDetails, props: true },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
