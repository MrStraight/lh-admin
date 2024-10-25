import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore(
  'userInfo',
  () => {
    const isRemember = ref(false)
    const token = ref('')
    const setToken = function (val) {
      token.value = val
    }
    return { isRemember, setToken, token }
  },
  {
    persist: {
      enabled: true,
      strategies: [{ storage: localStorage }]
    }
  }
)
