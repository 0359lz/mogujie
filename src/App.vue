<template>
  <div id="app">
    <!-- 底部导航 -->
    <dnav></dnav>
    <router-view/>
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

<style scoped>

</style>
