<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
    <img class="s-img" :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true
      },
      swiperSlides: [
        'https://s11.mogucdn.com/mlcdn/c45406/190411_7i3ic1k8k7hl4hgak2982i3bl18kl_750x300.jpg_999x999.v1c0.81.webp',
        'https://s17.mogucdn.com/mlcdn/c45406/190428_604lf2hc66g9fclfe121lbkccae29_750x300.jpg_999x999.v1c0.81.webp',
        'https://s18.mogucdn.com/mlcdn/c45406/190425_3a178515j1ge6854hgj24j7450e3h_750x300.jpg_999x999.v1c0.81.webp',
        'https://s2.mogucdn.com/mlcdn/c45406/190428_718i192338diggchhj2fhglegi8bl_750x300.jpg_999x999.v1c0.81.webp',
        'https://s2.mogucdn.com/mlcdn/c45406/190225_533fe4d24h6ckfj918j78302dbc98_750x300.jpg_999x999.v1c0.81.webp',
        'https://s2.mogucdn.com/mlcdn/c45406/190428_5703g77eded4klceh6ibe0ac259ea_750x300.jpg_999x999.v1c0.81.webp'
      ]
    }
  },
  mounted () {
  }
}
</script>
<style scoped lang="less">
</style>
