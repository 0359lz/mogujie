// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible' // 移动端适配

import VueLazyload from 'vue-lazyload' // 懒加载
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper /* { default global options } */) // 执行插件里面的安装方法
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/error.png',
  loading: 'static/loading.gif',
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
