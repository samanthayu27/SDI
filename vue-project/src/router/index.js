import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/ResourcesPage.vue')
    },
  ]
})

export default router
