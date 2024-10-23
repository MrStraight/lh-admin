import axios from 'axios'

const service = axios.create()

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
    console.log('相应拦截', response)
    // 判断code
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default service
