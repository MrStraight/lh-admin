<template>
  <el-header>
    <el-affix z-index="2">
      <div class="header-wrap">
        <myNavBar></myNavBar>
        <div class="tag-container"></div>
      </div>
    </el-affix>
  </el-header>
</template>

<script setup>
import myNavBar from './navBar.vue'
</script>

<style lang="scss" scoped>
.header-wrap {
  background-color: #fff;
  // overflow: hidden;
  box-sizing: border-box;
}
</style>
