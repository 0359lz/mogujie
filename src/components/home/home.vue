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
<<<<<<< HEAD
=======
import cnav from './components/cnav.vue'
import loading from '@/common/loading.vue'
import hrearch from './components/hrearch.vue'
import carousel from './components/carousel.vue'
import hcate from './components/hcate'
>>>>>>> dbfe15d4bc58934ec17ead2f486fd192bd64bee3

export default {
  data () {
    return {
<<<<<<< HEAD

    }
=======
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
>>>>>>> dbfe15d4bc58934ec17ead2f486fd192bd64bee3
  }

}
</script>
<style scoped>

</style>
