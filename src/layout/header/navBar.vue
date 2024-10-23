<template>
  <div class="navbar">
    <div class="breadcrumb-left">
      <div class="icon" @click="settingStore.toggleCollapse()">
        <el-icon size="22">
          <Fold v-show="!settingStore.isCollapse"></Fold>
          <Expand v-show="settingStore.isCollapse"></Expand>
        </el-icon>
      </div>
      <el-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tools-right">
      <el-tooltip effect="dark" content="Bottom Center prompts info" placement="bottom">
        <div class="icon">
          <el-icon size="22"><Search /></el-icon>
        </div>
      </el-tooltip>
      <el-tooltip effect="dark" content="Bottom Center prompts info" placement="bottom">
        <div class="icon">
          <el-icon size="22"><ChatLineSquare /></el-icon>
        </div>
      </el-tooltip>
      <div class="avatar icon">
        <el-avatar
          shape="square"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSettingStore } from '@/stores/setting'
const settingStore = useSettingStore()
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 4px rgba(0, 21, 41, 0.08);
  .breadcrumb-left {
    overflow: hidden;
    .icon {
      float: left;
      height: 50px;
      margin-top: 1px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      .el-icon {
        cursor: pointer;
      }
    }
    .el-breadcrumb {
      float: left;
      line-height: 50px;
      // font-size: 14px;
      // margin-left: 8px;
    }
  }
  .tools-right {
    display: flex;
    align-items: center;
    height: 100%;
    line-height: 58px;
    .icon {
      height: 100%;
      padding: 0 8px;
      vertical-align: text-bottom;
      display: inline-block;
      transition: 0.5s;
      cursor: pointer;
    }
    .icon:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
    .avatar {
    }
  }
}
</style>
