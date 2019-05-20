// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible' // 移动端适配

import VueLazyload from 'vue-lazyload' // 懒加载
import VueAwesomeSwiper from 'vue-awesome-swiper' // 轮播图
import 'swiper/dist/css/swiper.css'
// import FastClick from 'fastclick' // 300ms延迟
// FastClick.attach(document.bbody)

import store from '@/store/'

Vue.use(VueAwesomeSwiper /* { default global options } */) // 执行插件里面的安装方法
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/error.png',
  loading: 'static/loading.gif',
  attempt: 1
})
// 全局前置守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  // 标题title
  document.title = '蘑菇街'
  next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
