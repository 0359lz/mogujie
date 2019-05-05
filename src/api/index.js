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

<<<<<<< HEAD
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
=======
// 首页
export function getCate () {
  return axios.get('cate')
}
// home find  发现
export function getFind () {
  return axios.get('home/find')
}
// home popular  发现
export function getPopular () {
  return axios.get('home/popular')
}

// 商城
export function getCont () {
  return axios.get('shopContent')
}
export function getShopcate () {
  return axios.get('shopCate')
}
export function getShopPopu () {
  return axios.get('shopPopu')
}
export function getShopPoEnt () {
  return axios.get('shopPoEnt')
}
>>>>>>> dbfe15d4bc58934ec17ead2f486fd192bd64bee3
