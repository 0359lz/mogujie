<template>
  <div class="cate" >
    <img src="../images/3.png" alt="" class="pic1" @click='toback'>
     <div>
       <p>早春新款</p>
     </div>
    <img class="pic3" src="../images/4.png" alt="" @click='backBus'>
  </div>
</template>
<script>
export default {
  methods: {
    backBus () {
      this.$router.push('/category/bus')
    },
    toback () {
      this.$router.go(-1)
    }
  },
  mounted () {
    // console.log(this.$route.params)
  }
}
</script>

<style lang="less" scoped>
    .cate{
       display: flex;
       width: 100%;
       height: 92px;
       justify-content: space-between;
       align-items: center;
       border-bottom: 1px solid #e5e5e5;
       .pic3{
       width: 100px;
       height: 70px;
       color: #666;
      }
      p{
        font-size: 32px;
      }
    }
    .cate .pic1{
      width: 90px;
      height: 80px;
      color: #666;
    }
</style>
