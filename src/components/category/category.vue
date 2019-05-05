<template>
  <div class="cate">
    <div v-show="isShow">
      <router-link to="/category/bus" tag="li">分类</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: true
    }
  },
  // 监听路径
  watch: {
    $route (now, old) {
      if (now.path !== '/category') {
        this.isShow = false
      }
    }
  }
}
</script>

<style scoped>
.cate{
  height: 100%;
}
</style>
