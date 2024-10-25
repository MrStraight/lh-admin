import { createRouter, createWebHistory } from 'vue-router'
import { routerPermission } from './permission'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/Layout/mainLayout.vue'),
      children: [
        {
          path: '',
          name: '名字1',
          component: () => import('@/views/main.vue')
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})
routerPermission(router)
export default router
