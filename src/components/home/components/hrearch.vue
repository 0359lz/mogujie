<template>
  <div class="home">
      <img src="../images/cate.png" alt="" class="left">
      <div class="center">
        <img src="../images/search.png" alt="" class="cen">
        <input type="text" class="ipt" placeholder="背带裤">
      </div>
      <img src="../images/ll.png" alt="" class="right">
  </div>
</template>
<style></style>
<style scoped lang="less">
.home{
  display: flex;
  width: 100%;
  height:85px;
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
     height:52px;
     margin-left: 50px;
     margin-right: 50px;
     .ipt{
      flex:1;
      height: 40px;
      background:#e8ecf0;
      margin-top: 4px;
      outline: none;
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
