<template>
  <div id="app">
    <!-- 底部导航 -->
    <dnav></dnav>
    <!-- 页面级缓存 -->
    <keep-alive>
      <transition name="fade">
        <router-view v-if="this.$route.meta.catch"/>
      </transition>
    </keep-alive>
    <!-- <transition name="fade"> -->
      <router-view v-if="!this.$route.meta.catch"/>
    <!-- </transition> -->
  </div>
</template>

<script>
import '@/gcss/reset.css'
import dnav from '@/common/dnav.vue'
export default {
  name: 'App',
  components: {
    dnav
  }
}

</script>

<style>
#app {
  height: 100%;
}
span.swiper-pagination-bullet{
  margin: 0 3px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
