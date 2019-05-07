<template>
  <div class="hcate">
    <ul class="foot">
      <li v-for="(item,index) in hcateList" :key="index">
        <router-link :to="'/category/list/' + item.aid">
          <img :src="item.img" alt="">
          <p>{{item.title}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import {getCate} from '@/api'
export default {
  data () {
    return {
      hcateList: null
    }
  },
  async created () {
    this.hcateList = await getCate()
  }
}
</script>
<style scoped lang="less">
.hcate{
  width:100%;
  height:470px;
  background:#fff;
 .foot{
    display: flex;
    flex-wrap: wrap;
    padding-top:20px;
    li{
      width:150px;
      height:150px;
      }
    img{
      width:100px;
      height:100px;
      margin:0 auto;
    }
    p{
      text-align:center;
    }
  }
  }
</style>
