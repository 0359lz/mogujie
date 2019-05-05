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

export function getCateList () {
  return axios.get('catelist')
}

export function getCate () {
  return axios.get('cate')
}

export function getWall () {
  return axios.get('wall')
}

export function getCateDetail () {
  return axios.get('catedetail')
}

// 分类
