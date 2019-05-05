import axios from 'axios'
// 设置默认路径
axios.defaults.baseURL = 'http://127.0.0.1:8080/'

// 后台数据拦截
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data // 直接返回要获取的数据
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

// home find  发现
export function getFind () {
  return axios.get('home/find')
}
// home popular  发现
export function getPopular () {
  return axios.get('home/popular')
}
