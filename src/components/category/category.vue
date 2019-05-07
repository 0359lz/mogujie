<template>
<div class="box">
  <!-- search -->
 <div class="box1">
  <div class="cate" >
    <img class="pic1" src="@/assets/category/information.jpg" alt="">
     <div>
       <img class="pic2" src="@/assets/category/search.png" alt="">
       <input type="text" placeholder="阔腿裤">
     </div>
    <img class="pic3" src="@/assets/category/shopcar.jpg" alt="" @click='backList'>
  </div>
  <!-- content -->
  <div class="content">
     <div class="l-content" ref="lc">
        <ul ref="ul">
           <li class="c-ent" @click="changeStatus(index)" :class="{active: index == activeList}" v-for="(item, index) in cateList" :key="index"> <span></span>{{item.title}}</li>
        </ul>
     </div>
     <!-- banner -->
    <div class="r-content wrapper">
        <ul ref="ul">
          <li class="b-con" v-for="(item, aid) in cate" :key="aid">
            <router-link :to="'/category/list/' + cate.aid" >
             <img :src="item.img" alt="" class="c-img">
             <p>{{item.text}}</p>
            </router-link>
          </li>
        </ul>
        <!-- nav -->
        <div class="nav-content">
           <div class="tab-items">
              <a href="#"><span class="zh">综合</span><i></i></a>
              <a href="#"><span>销量</span><i></i></a>
              <a href="#"><span>新品</span><i></i></a>
           </div>
        </div>
        <!-- commodity 商品 -->
      <div class="wall-box">
        <ul ref="ul" class="guess">
          <li v-for="(gue, id) in wall" :key="id">
            <img :src="gue.img" alt="" class="g-img">
            <span class="g-shop"></span>
            <i class="g-shop-i">{{gue.shop}}</i>
            <p class="g-shop-p">{{gue.text}}</p>
            <i class="g-price">{{gue.price}}</i>
            <div class="g-div">
              <span class="g-num">{{gue.number}}</span>
              <img class="g-pic" src="@/assets/category/xingxing.png" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
 </div>
<router-view></router-view>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import {getCateList, getCate1, getWall} from '@/api'
import { setInterval, clearInterval } from 'timers'
export default {
  data () {
    return {
      cateList: null,
      activeList: 0,
      timer: null,
      liHeight: 45,
      cate: [],
      wall: null
    }
  },
  async mounted () {
    this.cateList = await getCateList()
    this.cate = await getCate1()
    this.wall = await getWall()
    this.$nextTick(() => {
      var height = 45 * this.cateList.length
      this.$refs.ul.style.height = height + 'px'

      // 增加滚动视图
      /* eslint-disable no-new */
      new BScroll('.wrapper')
    })
  },
  methods: {
    changeStatus (index) {
      this.activeList = index

      // 判断
      if ((this.cateList.length * this.liHeight - this.$refs.lc.scrollTop) > this.$refs.lc.offsetHeight) {

      } else {
        return
      }
      var target = this.activeList * this.liHeight
      var header = 0
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        header = header + (target - header) / 10
        if (header > target - 1) {
          clearInterval(this.timer)
        }
        this.$refs.lc.scrollTop = header
      }, 20)
    },
    backList () {
      this.$router.push('/category/bus')
    }
  }
}
</script>

<style scoped lang="less">
//  search样式
  .box{
    width: 100%;
    background: #fff;
    height:100%;
  }
  .box1{
    height: calc(100% - 100px);
  }
  .cate{
       display: flex;
       width: 100%;
       height: 92px;
       justify-content: space-between;
       align-items: center;
       border-bottom: 1px solid #e5e5e5;
       background-color: #fff;
   }
   .cate .pic1{
      width: 100px;
      height: 70px;
      color: #666;
   }
   .cate div{
       flex: 1;
       display:flex;
       width: 265px;
       height: 60px;
       align-items: center;
       background: #eee;
       border-radius: 5px;
       padding-left: 15px;
   }
   .pic2{
      width: 30px;
      height: 30px;
   }
   .cate div input{
       width: 100%;
       height: 60px;
       background: #eee;
       border: none;
       padding-left:20px;
       outline: none;
   }
  .cate div input::placeholder{
       font-size:26px;
       color:#999;
   }
  .pic3{
       width: 100px;
       height: 70px;
       color: #666;
  }

//content样式
.content{
    display: flex;
    height: 100%;
  }
.l-content {
  float: left;
  width: 160px;
  height: calc(100% - 100px);
  overflow-y:auto;
  background: #f6f6f6;
  ul {
    width:100%;
    li {
      position: relative;
      width:100%;
      height: 90px;
      line-height: 90px;
      text-align: center;
      font-size:30px;
       &.active{
        background-color: #fff;
        color: #FF5777;
        font-weight: bold;
        span {
          position: absolute;
          top:30px;
          left:0;
          width: 6px;
          height: 30px;
          background: #FF5777;
          display: block;
        }
        };
    }
  }
}
//banner
.r-content{
  width: 588px;
  height: 100%;
  overflow-y: auto;
  float: left;
 ul{
   display:flex;
   flex-wrap:wrap;
   width:100%;
   li{
   width:calc(100% / 3);
    .c-img{
     width:70%;
     margin: 20px 22px;
   }
    p{
      font-size: 24px;
      color: #666666;
      line-height: 80px;
      text-align: center;
    }
   }
 }
}
// nav
.nav-content{
  width: 100%;
  height: 80px;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  a{
    position:relative;
    float:left;
    width:33%;
    height:80px;
    line-height:80px;
    font-size: 30px;
    color:#333;
    text-align:center;
    i{
      position:absolute;
      top:30px;
      width:30px;
      height:20px;
      border-right: 1px solid #e2e2e2;
    }
    .zh{
      color: #ef4562;
    }
  }
}
// <!-- commodity 商品 -->
.wall-box{
  margin-top:15px;
  width:100%;
  .guess{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    li{
      width: 270px;
      position: relative;
      background: #fff;
      .g-img{
        width: 100%;
        border-radius: 10px;
      }
      .g-shop{
        position: absolute;
        top: 300px;
        width: 160px;
        height: 45px;
        line-height: 60px;
        font-size: 32px;
        display: block;
        background-image: linear-gradient(90deg,#000,#fff);
        opacity: 0.5;
      }
      .g-shop-i{
        position: absolute;
        top: 300px;
        color: #fff;
      }
      .g-shop-p{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #000;
        line-height: 50px;
      }
      .g-price{
        font-size: 27px;
        font-weight: 700px;
        color: #FF5777;
      }
      .g-money{
        font-size: 36px;
        color: #000;
      }
      div.g-div{
        display: flex;
        position:absolute;
        bottom:0px;
        right: 5px;
        .g-num{
          display:block;
        }
        .g-pic{
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}
</style>
