<template>
  <div class="home">
    home
    {{list}}
  </div>
</template>
<script>
import {getCate} from '@/api'
export default {
  data () {
    return {
      list: null
    }
  },
  async mounted () {
    this.list = await getCate()
  }
}
</script>
