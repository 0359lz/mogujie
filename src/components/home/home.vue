<template>
  <div class="home">
    <!-- 搜索框 -->
    <hrearch></hrearch>
    <!-- 轮播图 -->
    <carousel></carousel>
    <!-- 衣服分类 -->
    <hcate></hcate>
    <!-- 中间导航 -->
    <cnav></cnav>
    <loading v-show="isShowLoading"></loading>
  </div>
</template>
<script>
import cnav from './components/cnav.vue'
import loading from '@/common/loading.vue'
import hrearch from './components/hrearch.vue'
import carousel from './components/carousel.vue'
import hcate from './components/hcate'

export default {
  data () {
    return {
      isShowLoading: true
    }
  },
  components: {
    hrearch,
    carousel,
    hcate,
    cnav,
    loading
  },
  mounted () {
    this.isShowLoading = false
  }

}
</script>
<style scoped>

</style>
