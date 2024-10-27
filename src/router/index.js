import { createRouter, createWebHistory } from 'vue-router'
import { routerPermission } from './permission'
import { basicRoutes } from './basicRoutes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: basicRoutes
})
routerPermission(router)
export default router
