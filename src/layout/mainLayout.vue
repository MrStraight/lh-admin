<template>
  <el-container>
    <myAside></myAside>
    <el-container class="container-main">
      <myHeader></myHeader>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import myAside from './sidebar/index.vue'
import myHeader from './header/index.vue'
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}
.container-main {
  flex-direction: column;
}
</style>
