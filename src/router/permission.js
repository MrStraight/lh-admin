import { getRouterApi, getUserInfoApi } from '@/api/login'
import { useUserInfoStore } from '@/stores/user'
const whiteList = ['/login', '/404']
export const routerPermission = function (router) {
  router.beforeEach(async (to, form, next) => {
    const userInfoStore = useUserInfoStore()
    const token = userInfoStore.token
    if (!token) {
      // 没token
      if (!whiteList.includes(to.path)) {
        router.push({ path: '/login', query: { ...to.query, redirect: to.path } })
      }
    } else {
      // 有token
      if (to.path == '/login') {
        router.push({ path: '/' })
      }
      if (!userInfoStore.userDetail) {
        console.log('没有用户信息')
        try {
          const [routerList, userInfo] = await Promise.all([getRouterApi(), getUserInfoApi()])
          userInfoStore.setRouterList(routerList.data)
          userInfoStore.setUserInfo(userInfo.data)
        } catch (error) {
          console.error(error)
        }
      }
    }
    next()
  })
}
