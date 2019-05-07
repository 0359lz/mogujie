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

// 分类
export function getCateList () {
  return axios.get('catelist')
}
export function getCate1 () {
  return axios.get('cate1')
}
export function getWall () {
  return axios.get('wall')
}
export function getCateDetail () {
  return axios.get('catedetail')
}
export function getListCont () {
  return axios.get('listcont')
}

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
export function getShopGress () {
  return axios.get('shopYou')
}

// 直播
export function getHot () {
  return axios.get('hot')
}
export function getWear () {
  return axios.get('wear')
}
export function getBeauty () {
  return axios.get('beauty')
}
