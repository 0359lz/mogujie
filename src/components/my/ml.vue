<template>
  <div>
    <div class="dbu">
      <img src="./images/2.png" @click="fh">
      <span>免密登录</span>
    </div>
    <div class="iem">
      <input placeholder="手机号">
      <input placeholder="验证码">
      <span>获取验证码</span>
      <button>登录</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    fh () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped lang="less">
    .dbu{
      width: 100%;
      height: 70px;
      border-bottom: 2px solid #ccc;
      background: rgb(235, 233, 233);
      position: relative;
      img{
        display: inline-block;
        width: 40px;
        height: 40px;
        margin-top: 12px;
        margin-left: 10px;
      }
      span{
        font-size: 30px;
        display: inline-block;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        line-height: 70px;
      }
    }
    .iem{
      width: 600px;
      height: 300px;
      margin: auto;
      margin-top: 100px;
      input{
        width: 600px;
        height: 60px;
        margin-top: 30px;
        background: none;
        border-bottom: 2px solid #ccc;
        outline: none;
        color: #ccc;
        font-size: 28px;
      }
      span{
        display: inline-block;
        width: 160px;
        font-size: 25px;
        float: right;
        margin-top: -60px;
      }
      button{
        margin-top: 60px;
        width: 600px;
        height: 80px;
        background: #ff5777;
        border: none;
        color: #fff;
        font-size: 32px;
        border-radius: 60px;
        outline: none;
      }
    }
</style>
