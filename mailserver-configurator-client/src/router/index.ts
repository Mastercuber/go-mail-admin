import { createRouter, createWebHistory } from 'vue-router'
import { } from 'vue'

const routes = [
  {
    path: '/domains',
    name: 'Domains',
    component: () => import('../views/Domains.vue')
  },
  {
    path: '/alias',
    name: 'Alias',
    component: () => import('../views/Alias.vue')
  },
  {
    path: '/alias/:id',
    name: 'AliasEdit',
    component: () => import('../views/AliasEdit.vue')
  },
  {
    path: '/account',
    name: 'Accounts',
    component: () => import('../views/Accounts.vue')
  },
  {
    path: '/account/:id',
    name: 'AccountEdit',
    component: () => import('../views/AccountEdit.vue')
  },
  {
    path: '/tls',
    name: 'TLS',
    component: () => import('../views/TLSPolicy.vue')
  },
  {
    path: '/tls/new',
    name: 'TLSNew',
    component: () => import('../views/TLSPolicyEdit.vue')
  },
  {
    path: '/tls/:id',
    name: 'TLSEdit',
    component: () => import('../views/TLSPolicyEdit.vue')  },
  {
    path: '/',
    name: 'Home2',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/Logout.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
})

export default router
