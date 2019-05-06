<template>
  <div class="beauty">
     <div class="beauty-main" v-for="(item,index) in beautyList" :key="index">
         <div class="actor">
         <div class="actor-img">
            <img :src="item.actorimg" alt="">
         </div>
           <p>{{item.name}}</p>
         </div>
         <div class="bag-img" v-lazy:background-image="item.bgimg" >
            <div class="bottom">
               <div class="live-info">
                  <div class="dot"></div>
                  <div class="p">直播中</div>
                  <div class="hot"><img src="../images/hot.png" alt="">9.7w</div>
               </div>
                 <p>{{item.con}}</p>
                <div class="good-list">
                   <span v-lazy:background-image="item.priceimg01" ><i>￥{{item.price01}}</i> </span>
                   <span v-lazy:background-image="item.priceimg02" ><i>￥{{item.price02}}</i></span>
                   <span v-lazy:background-image="item.priceimg03" ><i>￥{{item.price03}}</i></span>
                </div>
            </div>
         </div>
</div>
  </div>
</template>
<script>
import {getBeauty} from '@/api'
export default {
  data () {
    return {
      beautyList: []
    }
  },
  async created () {
    this.beautyList = await getBeauty()
  }
}
</script>
<style lang="less" scoped>
   .beauty-main {
  width: 750px;
  height: 620px;
  background: white;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
  .actor {
    width: 100%;
    height: 100px;
    background: white;
    display: flex;
    .actor-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      padding: 6px;
      box-sizing: border-box;
      background: white;
      margin-top: 20px;
      margin-right: 10px;
      margin-left: 26px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
}
.beauty-main {
  .bag-img {
    width: 100%;
    height: 500px;
    background-size: 100% 100%;
    border-radius: 10px;
    display: flex;
    align-items: flex-end;

    .bottom {
      width: 100%;
      height: 280px;
      padding: 15px 15px 15px 15px;
      box-sizing: border-box;
      >p {
        color: white;
        font-size: 34px;
      }
      .good-list {
        width: 100%;
        display: flex;
        span {
          width: 120px;
          height: 120px;
          // background:url(http://s11.mogucdn.com/mlcdn/5abf39/190419_2ieb27c3441ga8i283e3bbl031fe2_400x400.jpg_100x100.jpg);
          background-size: 100% 100%;
          margin-right: 10px;
          margin-top: 10px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          i {
            font-size: 28px;
            color:#CD2626;
          }
        }
      }
      i {
        font-style: normal;
        font-size: 34px;
        line-height: 60px;
      }
      .live-info {
        width: 260px;
        height: 46px;
        padding: 4px 0 4px 4px;
        box-sizing: border-box;
        background: #cccccc;
        border-radius: 6px;
        display: flex;
        font-size: 28px;
        color: white;
        align-items: center;
        .dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #f5342f;
        }
        .hot {
          flex: 1;
          text-align: center;
          line-height: 46px;
          >img {
            width: 24px;
            height: 24px;
            display: inline-block;
            margin-right: 4px;
          }
        }
        .p {
          flex: 1;
          border-right: 1px solid #999;
          text-align: center;
          line-height: 46px;
        }
      }
    }
  }
  .actor {
    p {
      font-size: 28px;
      color: #333;
      font-weight: 550;
      line-height: 110px;
    }
  }
}
</style>
