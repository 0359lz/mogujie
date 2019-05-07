<template>
  <!-- nav -->
  <div class="nav-content">
      <div class="tab-items">
        <a href="#"><span class="zh">综合</span><i></i></a>
        <a href="#"><span>销量</span><i></i></a>
        <a href="#"><span>新品</span><i></i></a>
        <a href="#"><span>价格</span><i></i></a>
      </div>
  </div>
</template>
<style lang="less" scoped>
  .nav-content{
  width: 100%;
  height: 80px;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  a{
    position:relative;
    float:left;
    width:25%;
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
</style>
