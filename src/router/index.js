import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home.vue'
import shop from '@/components/shop/shop.vue'
import live from '@/components/live/live.vue'
import category from '@/components/category/category.vue'
import my from '@/components/my/my.vue'
import bus from '@/components/category/bus.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/shop',
      component: shop
    },
    {
      path: '/live',
      component: live
    },
    {
      path: '/category',
      component: category,
      children: [
        { path: 'bus',
          component: bus
        }
      ]
    },
    {
      path: '/my',
      component: my
    }
  ]
})
