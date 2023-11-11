import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue')
  },
  {
    path: '/terms-of-service',
    name: 'Terms of Service',
    component: () => import('../views/TermsOfService.vue')
  },
  {
    path: '/chat-bot',
    name: 'Bot',
    component: () => import('../views/Bot.vue')
  },
  {
    path: '/use/chat-bot',
    name: 'useBot',
    component: () => import('../views/useBot.vue')
  },
  {
    path: '/tx/success',
    name: 'Success Page',
    component: () => import('../views/success.vue')
  },
  {
    path: '/tx/cancel',
    name: 'Cancel Page',
    component: () => import('../views/cancel.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;