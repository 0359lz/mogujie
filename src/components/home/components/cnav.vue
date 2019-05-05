<template>
  <div class="cnav" >
    <!-- <ul ref="cnav" :class="showCnav?'cnavUl':''"> -->
    <ul ref="cnav" :class="{'cnavUl':showCnav}">
      <router-link to="/home/find" tag="li">发现<span></span></router-link>
      <router-link to="/home/watch" tag="li">关注<span></span></router-link>
      <router-link to="/home/popular" tag="li">流行<span></span></router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showCnav: false
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        this.showCnav = true
      } else {
        this.showCnav = false
      }
    })
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .cnav{
    .cnavUl{
      position: fixed;
      top: 0;
      left: 0;
    }
    ul{
      width: 100%;
      height: 100px;
      display: flex;
      border-bottom: 1px solid #E5E5E5;
      background-color: #fff;
      li{
        flex: 1;
        line-height: 100px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        color: #000;
        position: relative;
        &.router-link-exact-active{
          span{
            position: absolute;
            display: inline-block;
            width: 50px;
            height: 4px;
            background: rgb(254, 1, 119);
            left: 50%;
            transform: translateX(-50%);
            bottom:20px;
          }
        }
      }
    }
  }
</style>
