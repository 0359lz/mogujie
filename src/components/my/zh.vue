<template>
  <div>
    <div class="dbu">
      <img src="./images/2.png" @click="fh">
      <span>账号登录</span>
    </div>
    <div class="iem">
      <input placeholder="用户名/邮箱/手机号">
      <input placeholder="密码">
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
        font-size: 28px;
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
