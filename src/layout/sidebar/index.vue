<template>
  <el-aside :style="!isOpen ? 'width:200px' : 'width:65px'">
    <div class="aside-wrap" :style="!isOpen ? '' : 'width:65px'">
      <div class="logo-wrap" :class="{ a: !isOpen, b: isOpen }">
        <transition name="logoFade">
          <router-link v-if="!isOpen" key="collapse" to="/">
            <div class="title">
              <img src="https://vfadmin.insistence.tech/static/img/logo.4eeb8a8e.png" alt="" />
              <span>XXX后台管理</span>
            </div>
          </router-link>
          <router-link v-else to="/">
            <div class="title2">
              <img src="https://vfadmin.insistence.tech/static/img/logo.4eeb8a8e.png" alt="" />
            </div>
          </router-link>
        </transition>
      </div>

      <el-scrollbar wrap-class="scrollr-wrap">
        <el-menu class="menu" :collapse-transition="false" :collapse="isOpen">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <template #title><span>Group One</span></template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <template #title>Navigator Three</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
  </el-aside>
</template>

<script setup>
import { useSettingStore } from '@/stores/setting'
const settingStore = useSettingStore()

const isOpen = computed(() => settingStore.isCollapse)
</script>

<style lang="scss" scoped>
.el-aside {
  background-color: #fff;
}
.aside-wrap {
  background-color: #fff;
  width: 200px;
  z-index: 11;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  overflow: hidden;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  transition: 0.3s;
}
.scrollr-wrap {
  overflow-x: hidden !important;
  overflow: scroll;
}
.title,
.title2 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  img {
    width: 32px;
    height: 32px;
    vertical-align: middle;
  }
  span {
    color: rgb(0, 21, 41);
    font-weight: 600;
    line-height: 50px;
    font-size: 14px;
    vertical-align: middle;
    margin-left: 5px;
    // transition: 0.3s;
  }
}
.el-menu {
  border-right: none;
}
.menu {
  height: calc(100% - 50px);
}

// .logoFade-enter-active {
//   transition: opacity 1.5s;
// }
// .logoFade-enter,
// .logoFade-leave-to {
//   opacity: 0;
// }

.logoFade-enter-active,
.logoFade-leave-active {
  transition: opacity 1.5s;
}
.logoFade-enter-from,
.logoFade-leave-to {
  opacity: 0;
}
.a .title2 {
  display: none;
}
.b .title {
  display: none;
}
</style>
