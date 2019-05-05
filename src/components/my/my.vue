<template>
  <div class="my">
    <div v-if="isShow">
      <div class="item">
        <span class="dl">登录</span>
        <button @click="login">
          <img src="https://s10.mogucdn.com/mlcdn/c45406/170831_28ggdebj3lhb3c0c8eb41f956i0kb_86x88.png">
          <span>QQ登录</span>
        </button>
      </div>
      <div class="cum">
        <div></div>
        <span>其他登录方式</span>
        <ul>
          <li>
            <button @click="mlogin">
              <img src="https://s10.mogucdn.com/mlcdn/c45406/170831_1078gd17460490lak5g7edbhah17i_90x90.png">
            </button>
            <p>免密登录</p>
          </li>
          <li>
            <button @click="zlogin">
              <img
                src="https://s10.mogucdn.com/mlcdn/c45406/170831_136567k82ideakd452d8db8ca27ak_90x90.png"
              >
            </button>
            <p>账号登录</p>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    login () {
      this.$router.push('/my/qq')
    },
    mlogin () {
      this.$router.push('/my/ml')
    },
    zlogin () {
      this.$router.push('/my/zh')
    }
  }

}
</script>

<style scoped lang="less">
.item {
  width: 600px;
  height: 284px;
  margin: auto;
  margin-top: 200px;
  span.dl {
    display: block;
    font-size: 60px;
    text-align: center;
    margin-bottom: 100px;
  }
  button {
    outline: none;
    width: 600px;
    height: 100px;
    background: #0ab8f5;
    border-radius: 50px;
    border: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: inline-block;
      width: 48px;
      height: 48px;
      margin-right: 30px;
    }
    span {
      font-size: 32px;
    }
  }
}
.cum {
  width: 600px;
  height: 284px;
  margin: auto;
  margin-top: 200px;
  div {
    width: 40px;
    height: 5px;
    border-top: 2px solid #666;
    margin: auto;
  }
  span {
    display: block;
    color: #666;
    font-size: 30px;
    text-align: center;
    margin-top: 30px;
  }
  ul {
    height: 160px;
    padding-top: 60px;
    li {
      width: 110px;
      height: 152px;
      float: left;
      margin-left: 130px;
      button {
        border: none;
        background: none;
        outline: none;
      }
      img {
        display: inline-block;
        width: 80px;
        height: 80px;
      }
    }
  }
}
</style>
