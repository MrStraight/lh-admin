<template>
  <div class="login-wrap">
    <div class="panel-wrap">
      <div class="login-banner">
        <img src="../../assets/images/login_banner.webp" alt="" />
      </div>
      <div class="login">
        <div class="title">XXX后台管理系统</div>
        <div class="form-wrap">
          <el-input :maxlength="20" size="large" v-model="form.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
          <el-input
            :maxlength="20"
            size="large"
            show-password
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
          >
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
            <!-- <template #suffix>
              <el-icon><View /></el-icon>
            </template> -->
          </el-input>
          <div class="code">
            <el-input size="large" v-model="form.code" placeholder="请输入验证码" :maxlength="4">
              <template #prefix>
                <el-icon><Key /></el-icon>
              </template>
            </el-input>
            <img height="40" src="https://admin.isme.top/api/auth/captcha?1728363905000" alt="" />
          </div>
        </div>

        <div class="control">
          <div class="keep-pwd">
            <el-checkbox v-model="userInfoStore.isRemember" label="记住密码" size="large" />
          </div>
          <div class="forget-pwd">
            <el-link :underline="false">忘记密码</el-link>
          </div>
        </div>
        <div class="btn">
          <el-button size="large" plain @click="quickLogin()">一键体验</el-button>
          <el-button
            @click="submit()"
            type="primary"
            size="large"
            :auto-insert-space="false"
            :loading="btnLoading"
            >登录</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { loginApi } from '@/api/login'
import { useUserInfoStore } from '@/stores/user'
import { reactive } from 'vue'
const router = useRouter()
const route = useRoute()
const btnLoading = ref(false)
const userInfoStore = useUserInfoStore()
const localFormStr = localStorage.getItem('userForm') || '{}'
const localForm = reactive(JSON.parse(localFormStr))
const form = reactive(localForm)

const verifyForm = function () {
  if (form.username && form.password) {
    return true
  } else {
    $message.error('请输入用户名密码')
    return false
  }
}
const quickLogin = function () {
  form.username = 'admin'
  form.password = '123456'
  submit()
}
const submit = async function () {
  if (verifyForm()) {
    btnLoading.value = true
    const keepPwd = userInfoStore.isRemember
    if (keepPwd) {
      localStorage.setItem('userForm', JSON.stringify(form))
    } else {
      localStorage.removeItem('userForm')
    }
    let res = await loginApi(form)
    userInfoStore.setToken(res.data.accessToken)
    $message.success('登录成功')
    btnLoading.value = false

    successLogin()
  }
}

const successLogin = function () {
  const redirect = route.query.redirect
  console.log('🚀 ~ successLogin ~ redirect:', redirect)
  if (redirect) {
    delete route.query.redirect
    router.push({ path: redirect, query: route.query })
  } else {
    router.push('/')
  }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  background: url('@/assets/images/login-bg.webp') no-repeat;
  background-position: 100% 100%;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  .panel-wrap {
    width: 700px;
    margin: 0 auto;
    box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    align-items: stretch;
    .login-banner {
      width: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      img {
        width: 100%;
      }
    }
    .login {
      // width: 50%;
      display: flex;
      flex-direction: column;
      padding: 22px;
      .title {
        text-align: center;
        font-size: 24px;
        color: rgb(106 106 106);
      }
      .form-wrap {
        & > .el-input {
          margin-top: 22px;
        }
        .code {
          display: flex;
          margin-top: 22px;
          justify-content: center;
          align-items: center;
          .el-input {
            margin-right: 30px;
          }
          img {
            width: 80px;
          }
        }
      }
      .control {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .btn {
        display: flex;
        .el-button {
          width: 50%;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .login-banner {
    width: 0;
    display: none;
  }
  .login-banner {
    display: none !important;
  }
  .panel-wrap {
    width: 320px !important;
  }
}
</style>
