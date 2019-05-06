import Vue from 'vue'
import Router from 'vue-router'
import live from '@/components/live/live.vue'
import hot from '@/components/live/commponent/hot.vue'
import wear from '@/components/live/commponent/wear.vue'
import beauty from '@/components/live/commponent/beauty.vue'
import bus from '@/components/category/bus.vue'
import category from '@/components/category/category.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/find'
    },
    {
      path: '/live',
      redirect: '/live/hot'
    },
    {
      path: '/home',
      component: () => import('@/components/home/home.vue'),
      redirect: '/home/find',
      meta: {
        catch: true
      },
      children: [
        {
          path: 'find',
          component: () => import('@/components/home/components/find.vue')
        },
        {
          path: 'watch',
          component: () => import('@/components/home/components/watch.vue')
        },
        {
          path: 'popular',
          component: () => import('@/components/home/components/popular.vue')
        }
      ]
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
      component: live,
      children: [
        {
          path: 'hot',
          component: hot
        },
        {
          path: 'wear',
          component: wear
        },
        {
          path: 'beauty',
          component: beauty
        }
      ],
      meta: {
        catch: false
      }
    },
    {
      path: '/category',
      name: 'category',
      component: category,
      meta: {
        catch: false
      }
    },
    {
      path: '/category/bus',
      component: bus,
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
    },
    {
      path: '/my/qq',
      component: () => import('@/components/my/qq.vue')
    },
    {
      path: '/my/ml',
      component: () => import('@/components/my/ml.vue')
    },
    {
      path: '/my/zh',
      component: () => import('@/components/my/zh.vue')
    }
    // {
    //   path: '*',
    //   redirect: '/home'
    // }

  ]
})
