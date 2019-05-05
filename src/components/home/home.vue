<template>
  <div class="home">
    <!-- 搜索框 -->
    <hrearch></hrearch>
    <!-- 轮播图 -->
    <carousel></carousel>
    <!-- 衣服分类 -->
    <hcate></hcate>
  </div>
</template>
<script>
import hrearch from './components/hrearch.vue'
import carousel from './components/carousel.vue'
import hcate from './components/hcate'
export default {
  components: {
    hrearch,
    carousel,
    hcate
  },
  data () {
    return {

    }
  }

}
</script>
<style scoped>

</style>
