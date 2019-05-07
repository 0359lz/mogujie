<template>
  <div class="list">
    <listnav></listnav>
    <listcnav></listcnav>
    <listcont></listcont>
    <router-view></router-view>
  </div>
</template>

<script>
import listnav from './listnav.vue'
import listcont from './listcont.vue'
import listcnav from './listcnav.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    listnav,
    listcont,
    listcnav
  }
}
</script>
<style lang="less" scoped>
  .cont{
    background: orange;
  }
</style>
