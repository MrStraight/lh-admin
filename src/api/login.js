import request from '@/utils/request'

export function loginApi(data) {
  return request({
    method: 'post',
    url: '/login',
    data
  })
}
