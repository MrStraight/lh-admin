import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 12000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

service.interceptors.request.use(
  (config) => {
    console.log('请求拦截', config)
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    let res = response.data.data
    console.log('响应拦截', res)
    // 判断code
    if (res.code === 0) {
      return res
    } else {
      console.log('err')
      if (res.message) {
        ElMessage.error(res.message)
      } else {
        ElMessage.error('接口调用失败')
      }
    }
  },
  (error) => {
    ElMessage.error(error)
    return Promise.reject(error)
  }
)
export default service
