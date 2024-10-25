import { useUserInfoStore } from '@/stores/user'
const whiteList = ['/login', '/404']
export const routerPermission = function (router) {
  router.beforeEach((to, form, next) => {
    const userInfoStore = useUserInfoStore()
    const token = userInfoStore.token
    console.log('to', to)
    if (!token) {
      console.log('notoken')
    } else {
      console.log('token')
      if (to.path == '/login') {
        router.push({ path: '/' })
      }
    }
    next()
  })
}
