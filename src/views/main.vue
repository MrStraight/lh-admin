<template>
  <div>213</div>
  <el-button>moren</el-button>
  {{ list }}
  <el-icon><FullScreen /></el-icon>
  <p>{{ conutStore.count }}</p>
  <p>2:{{ conutStore.doubleCount }}</p>
  <p>12312312312:{{ conutStore.myCount }}</p>
  <el-button @click="conutStore.increment()">++</el-button>
  <el-button @click="conutStore.decrement()">--</el-button>
  <div style="height: 2000px">213</div>
</template>

<script setup>
// import { onMounted, reactive, ref } from 'vue'
// import { getSliders } from '@/api/demo.js'
import { useCounterStore } from '@/stores/counter.js'
let list = ref(123)
const conutStore = useCounterStore()
onMounted(async () => {
  // let res = await getSliders()
  // console.log('res', res)
})
</script>

<style lang="scss" scoped></style>
