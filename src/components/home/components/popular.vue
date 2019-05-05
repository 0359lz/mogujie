<template>
  <div class="popular">
    <ul>
      <li v-for="(item,index) in findList" :key="index">
        <!-- 头部title -->
        <div class="ptitle">
          <div class="p1">
            <img v-lazy="item.titleImg" alt="">
          </div>
          <div class="p2">
            <p>{{item.title}}</p>
            <p>
              <span><em>165</em>cm</span>    <span class="bar">|</span>
              <span>400人参与</span>    <span class="bar">|</span>
              <span>自由职业</span></p>
          </div>
        </div>
        <!-- 两行文字 -->
        <p class="ptext">{{item.pTitle}}</p>
        <!-- 主体图片 -->
        <div class="pcontent">
          <img v-lazy="item.contentImg1" alt="">
          <img v-lazy="item.contentImg2" alt="">
          <img v-lazy="item.contentImg3" alt="">
        </div>
        <!-- 底部品牌 -->
        <div class="box wrapper">
          <ul class="brand content" ref="pBrandUl">
            <li ref="pBrandLi" v-for="(bitem,bindex) in item.brandList" :key="bindex">
              <img v-lazy="bitem.brandImg" alt="">
              <span>{{bitem.brandTitle}}</span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {getPopular} from '@/api'
export default {
  data () {
    return {
      findList: []
    }
  },
  created () {
    this.$nextTick(() => {

    })
  },
  async mounted () {
    // 后台数据
    this.findList = await getPopular()

    this.$nextTick(() => {
      // 滑动
      /* eslint-disable no-new */
      new BScroll('.wrapper')

      this.$refs.pBrandLi.forEach((item, index) => {
        var width = 0
        width += item.offsetWidth
        this.$refs.pBrandUl.width = width + 5 * this.$refs.pBrandLi.length + 'px'
      })
    })
  }
}
</script>

<style lang="less" scoped>
  .popular{
    padding-bottom: 100px;
    background: white;
    ul{
      >li{
        // title
        .ptext{
          word-break:break-all;  //强制换行
          text-overflow:ellipsis;//显示为省略号
          display:-webkit-box;//对象作为伸缩盒子模型显示
          -webkit-box-orient:vertical;//设置或检索伸缩盒对象的子元素的排列方式
          -webkit-line-clamp:2;//显示行数## 标题文字 ##
          overflow:hidden;
          font-size: 28px;
          color: #333;
          padding: 0 20px;
          margin-bottom: 20px;
        }
        .ptitle{
          padding: 32px 20px 0;
          height: 140px;
          box-sizing: border-box;
          .p1{
            float: left;
            // 头像
            img{
              border-radius: 10px;
              width: 80px;
              height: 80px;
              float: left;
            }
          }
          .p2{
            float: left;
            margin-left: 20px;
            p:first-child{
              line-height: 48px;
              font-size: 32px;
              color: #000;
              font-weight: bold;
            }
            // 身高、体重、职业 等
            p:last-child{
              span{
                line-height: 28px;
                font-size: 22px;
                color: #999;
                em{
                  color: #666;
                  font-weight: 520
                }
              }
              .bar{
                padding: 0 10px;
                color: #909090;
              }
            }
          }
        }
        // 中间三个图
        .pcontent{
          width: 100%;
          display: flex;
          justify-content: space-between;
          img{
            height: 410px;
            width: calc(100%/3 - 2px);
          }
        }
        // 底部品牌
        .box{
          height: 80px;
          margin: 24px 20px 0px;
          box-sizing: border-box;
          overflow-y: hidden;
          border-bottom: 1px solid #E5E5E5;
          .brand{
            height: 70px;
            white-space: nowrap;
            >li{
              background: #F2F3F7;
              display: inline-block;
              padding: 10px 10px 0;
              margin-right: 10px;
              height: 42px;
              // width: auto;
              >img{
                width:32px;
                height: 32px;
                float: left;
              }
              span{
                display: inline-block;
                height: 32px;
                font-size: 24px;
                float: left;
              }
            }
          }
        }
      }
    }
  }
</style>
