<template>
    <div class="popu">
        <div class="popular">
            <img src="https://s10.mogucdn.com/mlcdn/c45406/181112_04h64bddba7932720jh8j025g9kk5_750x200.jpg" alt="热门">
            <p>热门精选 | 解锁时髦精冬日穿搭LOOK→</p>
            <em></em>
        </div>
        <div>
            <swiper :options="swiperOption">
                <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
                    <ul class="popuInfor">
                        <li v-for="(infor,index) in slide.url" :key="index">
                            <img :src="infor.img" alt="">
                            <p>{{infor.title}}</p>
                            <i>{{infor.text}}</i>
                        </li>
                    </ul>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
import {getShopPopu} from '@/api'
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: []
    }
  },
  mounted () {
  },
  async created () {
    this.swiperSlides = await getShopPopu()
  }
}
</script>
<style scoped lang="less">
.popu{
    margin-top: 14px;
}
.popular{
    position: relative;
    width: 100%;
    img{
        width: 100%;
    };
    p{
        position: absolute;
        top: 80px;
        font-size: 32px;
        color: #fff;
        left: 30px;
    };
    em{
        width:0;
        height:0;
        border-width:0 14px 14px;
        border-style:solid;
        border-color:transparent transparent #fff;/*透明 透明  灰*/
        margin:40px auto;
        position:relative;
        position: absolute;
        bottom: -40px;
        left: 40px;
    }
}
.popuInfor{
    width: 100%;
    display: flex;
    background: #fff;
    margin-top: 20px;
    li{
        width: calc(100% /3);
        margin-left: 10px;
        text-align: center;
        height: 478px;
        img{
            width: 226px;
            height: 302px;
        };
        p{
            font-size: 28px;
            font-weight: 600px;
            color: #000;
            margin-top:10px;
        }
    }
}
.swiper-pagination-bullets{
    bottom: 30px;
}
</style>
