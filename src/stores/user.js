import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore(
  'userInfo',
  () => {
    const isRemember = ref(false)
    const token = ref('')
    const userDetail = ref(null)
    const routerList = ref([])
    const setToken = function (val) {
      token.value = val
    }
    const setRouterList = function (val) {
      routerList.value = val
    }
    const setUserInfo = function (val) {
      userDetail.value = val
    }
    return { isRemember, setToken, setRouterList, setUserInfo, token, userDetail, routerList }
  },
  {
    persist: {
      enabled: true,
      strategies: [{ storage: localStorage }]
    }
  }
)
