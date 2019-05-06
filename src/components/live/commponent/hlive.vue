<template>
    <div class="hlive">
        <ul>
      <router-link to="/live/hot" tag="li">热门</router-link>
      <router-link to="/live/wear" tag="li">穿搭</router-link>
      <router-link to="/live/beauty" tag="li">美妆</router-link>
    </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
.hlive ul {
  display: flex;
  width: 100%;
  height: 90px;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  li {
    flex: 1;
    text-align: center;
    font-size: 40px;
    line-height: 90px;
  }
}
.router-link-active {
  color: rgb(253, 71, 61);
  border-bottom: 1px solid rgb(253, 71, 61);
}
</style>
