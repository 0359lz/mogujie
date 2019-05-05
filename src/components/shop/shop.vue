<template>
  <div class="shop">
    <hshop></hshop>
    <shopcont></shopcont>
    <popular></popular>
    <popuEnt></popuEnt>
    <guess></guess>
  </div>
</template>
<script>
import hshop from '@/components/shop/common/hshop.vue'
import shopcont from '@/components/shop/common/shopcont.vue'
import popular from '@/components/shop/common/popular.vue'
import popuEnt from '@/components/shop/common/popuEnt.vue'
import guess from '@/components/shop/common/guess.vue'
export default {
  components: {
    hshop,
    shopcont,
    popular,
    popuEnt,
    guess
  }
}
</script>
