<template>
  <div class="home">
      <img src="../images/cate.png" alt="" class="left" @click="goToCate">
      <div class="center">
        <img src="../images/search.png" alt="" class="cen">
        <input type="text" class="ipt" placeholder="背带裤">
      </div>
      <img src="../images/ll.png" alt="" class="right">
  </div>
</template>
<script>
export default {
  methods: {
    goToCate () {
      this.$router.push('/category')
    }
  }
}
</script>

<style scoped lang="less">
.home{
  display: flex;
  width: 100%;
  height:90px;
  justify-content: space-between;
  align-items: center;
  background: #fff;

.left{
     width: 70px;
     height: 50px;
     margin-left: 10px;
   }
   .center{
     display: flex;
     flex:1;
     background: #e8ecf0;
     border-radius: 5px;
     width: 150px;
     height:60px;
     margin: 0 10px;
     .ipt{
      flex:1;
      height: 55px;
      background:#e8ecf0;
      margin-top: 4px;
      outline: none;
      padding-left: 15px;
     }
    .cen{
     display: inline-block;
     width: 30px;
     height: 30px;
     margin-top: 12px;
     margin-left: 20px;
   }
   }
   .right{
     width: 70px;
     height: 60px;
     margin-right: 10px;
   }
}
</style>
