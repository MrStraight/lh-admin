import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const myCount = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }
    function decrement() {
      myCount.value--
    }

    return { count, doubleCount, increment, decrement, myCount }
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          storage: localStorage
        }
      ]
    }
  }
)
