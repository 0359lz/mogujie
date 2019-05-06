<template>
    <div>
        <ul class="shopcont">
            <li class="contLi">
                <img src="https://s5.mogucdn.com/mlcdn/1689c6/190424_5ae95i63300d5ig5ch58eh9cg872k_210x280.png" alt="倒计时坑">
                <span class="contspan">时尚快抢</span>
                <ul class="times">
                  <li>
                    <span>{{timeList.hour}}</span>
                    <p>:</p>
                  </li>
                  <li>
                    <span>{{timeList.minute}}</span>
                    <p>:</p>
                  </li>
                  <li>
                    <span>{{timeList.second}}</span>
                  </li>
                </ul>
            </li>
            <li v-for="(contes,id) in contList" :key="id">
              <img :src="contes.img" alt="">
              <span class="contspan">{{contes.text}}</span>
            </li>
        </ul>
        <div class="shopCate">
          <ul>
            <li v-for="(it,ind) in shopCate" :key="ind">
              <img :src="it.img" alt="">
              <span>{{it.text}}</span>
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
import {getCont, getShopcate} from '@/api'
import { setInterval } from 'timers'
import getLefTime from '@/utils/time.js'
export default {
  data () {
    return {
      contList: [],
      shopCate: [],
      timeList: {
        hour: '00',
        minute: '00',
        second: '00'
      },
      timer: null
    }
  },
  async created () {
    this.contList = await getCont()
    this.shopCate = await getShopcate()
    this.timer = setInterval(() => {
      this.timeList = getLefTime('2019-4-30 17:50')
    }, 1000
    )
  },
  destroyed () {
    this.timer = null
  }
}
</script>
<style scoped lang="less">
.shopcont{
  width: 100%;
  height: 200px;
  display: flex;
  background: #fff;
  li{
    width: calc(100%/4);
    position: relative;
    img{
      width: 164px;
      height: 164px;
    };
    span.contspan{
      color: #fff;
      font-size: 30px;
      position: absolute;
      top: 110px;
      left: 20px;
    };
    .times{
      width: 100%;
      display: flex;
      position: absolute;
      top: 80px;
      left: 20px;
      li{
        display: flex;
        span{
          color: #fff;
          display: block;
          width: 30px;
          height: 32px;
          background: #333333;
          line-height: 32px;
          font-size: 26px;
          text-align: center;
          border-radius: 4px;
        };
        p{
          margin: 0 2px;
          font-weight: bold;
          color: #000;
        }
      }
    }
  };
  .contLi{
    width: 164px;
    height: 164px;
    background: url(https://s10.mogucdn.com/mlcdn/c45406/190329_11f33eb6dj9a70g2hk3lij2j13lac_166x166.jpg);
    margin:0 20px;
    img{
      width: 122px;
      height: 164px;
    }
  }
}
.shopCate{
  width: 100%;
  ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    li{
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      width: calc(100% / 5);
      justify-content: center;
      align-items: center;
      img{
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
