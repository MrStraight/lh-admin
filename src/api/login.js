import request from '@/utils/request'

export function loginApi(data) {
  return request({
    method: 'post',
    url: '/login',
    data
  })
}
export function getRouterApi(data) {
  return request({
    method: 'post',
    url: '/router',
    data
  })
}
export function getUserInfoApi(data) {
  return request({
    method: 'post',
    url: '/detail',
    data
  })
}
