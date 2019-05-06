<template>
    <div>
        <p class="poEnt">流行元素</p>
        <ul class="poEntUl">
            <li v-for="(pos,iq) in entList" :key="iq">
                <span>{{pos.text}}</span>
                <img :src="pos.img" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
import {getShopPoEnt} from '@/api'
export default {
  data () {
    return {
      entList: []
    }
  },
  async created () {
    this.entList = await getShopPoEnt()
  }
}
</script>
<style scoped lang="less">
div{
    background: #fff;
    margin-top: 20px;
    .poEnt{
        // width: 100%;
        height: 100px;
        font-size: 32px;
        font-weight: 700;
        line-height: 100px;
        padding-left: 10px;
    };
    .poEntUl{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 226px;
            background: #F3F3F3;
            margin: 12px;
            border-radius: 6px;
            img{
                width: 160px;
                height: 120px;
                display: block;
                margin-bottom: 10px;
            };
            span{
                color: #000;
                display: block;
                margin-bottom: 10px;
            }
        }
    }
}
</style>
