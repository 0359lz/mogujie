<template>
  <div class="live">
    <hlive></hlive>
    <transition name="slide-fade">
  <router-view></router-view>
 </transition>
  </div>
</template>
<script>
import hlive from './commponent/hlive.vue'
export default {
  components: {
    hlive
  }
}
</script>
<style lang="less" scoped>
.live {
  padding-top: 90px;
  padding-bottom: 80px;
  box-sizing: border-box;
}
.slide-fade{
 position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
 transition: all 1.2s ease;
}
.slide-fade-leave-active {
 transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
 left:0;right: 0;
 transform: translateX(50px);
 opacity: 0;
}
</style>
