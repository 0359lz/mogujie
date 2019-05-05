<template>
  <div class="home">
    <!-- 中间导航 -->
    <cnav></cnav>
    <loading v-show="isShowLoading"></loading>
  </div>
</template>
<script>
import cnav from './components/cnav.vue'
import loading from '@/common/loading.vue'

export default {
  data () {
    return {
      isShowLoading: true
    }
  },
  components: {
    cnav,
    loading
  },
  mounted () {
    this.isShowLoading = false
  }
}
</script>
