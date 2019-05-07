<template>
    <div>
        <ul class="guess">
            <li v-for="(gue, ih) in guessList" :key="ih" v-show="gue.index == currentIndex">  <!-- 后台传过来的ID 和 参数传过来的ID相匹配-->
                <div v-for="(item,index) in gue.list" :key="index" class="cont">
                    <img :src="item.img" alt="" class="g-img">
                    <span class="g-shop"></span>
                    <i class="g-shop-i">{{item.shop}}</i>
                    <p class="g-shop-p">{{item.title}}</p>
                    <i class="g-money">￥{{item.money}}</i>
                    <div class="g-div">
                        <span>{{item.like}}</span>
                        <img class="g-pic" src="../images/xingxing.png" alt="">
                    </div>
                    <button class="g-btn">{{item.btn}}</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {getListCont} from '@/api'

export default {
  data () {
    return {
      guessList: [],
      currentIndex: 0
    }
  },
  async mounted () {
    this.guessList = await getListCont()
    this.currentIndex = this.$route.params.aid
  }
}
</script>

<style scoped lang="less">
div{
    .guess{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-bottom: 100px;
        li{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            .cont{
            width: 348px;
            position: relative;
            background: #fff;
            margin-top:20px;
            }
            .g-img{
                width: 100%;
            }
            .g-shop{
                position: absolute;
                top: 360px;
                width: 160px;
                height: 60px;
                line-height: 60px;
                font-size: 32px;
                display: block;
                background-image: linear-gradient(90deg,#000,#fff);
                opacity: 0.5;
            }
            .g-shop-i{
                position: absolute;
                top: 370px;
                color: #fff;
            }
            .g-shop-p{
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                color: #000;
                line-height: 50px;
            }
            .g-money{
                font-size: 36px;
                color: #000;
            }
            div.g-div{
                display: flex;
                position: absolute;
                bottom: 55px;
                right: 0;
                background: #fff;
                .g-pic{
                    width: 40px;
                    height: 40px;
                }
            }
            .g-btn{
                width: 90%;
                border: none;
                background: #FF5777;
                height: 50px;
                color: #fff;
                font-size: 30px;
                margin-left: 16px;
                border-radius: 4px;
            }
        }
    }
}
</style>
