import Vue from 'vue'
import Router from 'vue-router'
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
      component: () => import('@/components/home/home.vue'),
      meta: {
        catch: true
      }
    },
    {
      path: '/shop',
      component: () => import('@/components/shop/shop.vue'),
      meta: {
        catch: false
      }
    },
    {
      path: '/live',
      component: () => import('@/components/live/live.vue'),
      meta: {
        catch: false
      }
    },
    {
      path: '/category',
      component: () => import('@/components/category/category.vue'),
      children: [
        {
          path: 'bus',
          component: bus
        }
      ],
      meta: {
        catch: false
      }
    },
    {
      path: '/my',
      component: () => import('@/components/my/my.vue'),
      meta: {
        catch: false
      }
    }
  ]
})
