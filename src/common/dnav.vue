<template>
  <div class="dnav">
    <ul>
      <router-link to="/home" tag="li">首页</router-link>
      <router-link to="/shop" tag="li">商城</router-link>
      <router-link to="/live" tag="li">直播</router-link>
      <router-link to="/category" tag="li">分类</router-link>
      <router-link to="/my" tag="li">我</router-link>
    </ul>
  </div>
</template>
<style scoped lang="less">
  .dnav{
    ul{
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      width: 100%;
      height: 100px;
      border-top: 2px solid rgb(226, 226, 226);
      background: white;
      z-index: 888;
      li{
        flex: 1;
        text-align: center;
        line-height: 98px;
        font-size: 32px;
      }
    }
  }
  .router-link-exact-active{
    color: rgb(253, 71, 61);
  }
</style>
