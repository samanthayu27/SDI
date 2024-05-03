import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import('../views/ToDoListPage.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/ResourcesPage.vue')
    },
    {
      path: '/timer',
      name: 'timer',
      component: () => import('../views/TimerPage.vue')
    }, 
    {
      path: '/GradeCalculator',
      name: 'GradeCalculator',
      component: () => import('../views/GradeCalc.vue')
    }
  ]
})

export default router
