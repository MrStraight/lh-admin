import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', () => {
  const isCollapse = ref(false)
  function toggleCollapse() {
    isCollapse.value = !isCollapse.value
  }
  return { isCollapse, toggleCollapse }
})
