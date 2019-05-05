<template>
  <div class="bus">
    <div class="header">
      <img src="./images/1.png" alt @click='back'>
      <span>购物车</span>
      <div class="header1">
        <img src="./images/2.png" alt>
      </div>
    </div>
    <div class="bus-content">
      <div class="pic">
        <img
          src="https://s10.mogucdn.com/mlcdn/c45406/180704_3ac3b297lghla2jjdhe23d5jfgddf_1500x1170.png"
          alt
        >
        <div class="pic1">
          <p>你的购物车空空如也</p>
          <button>去逛逛</button>
        </div>
      </div>
      <div class="content">
        <p>大家都在看</p>
        <ul class="content1" v-for="(item ,index) in 10" :key="index">
          <li>
            <img
              src="https://s11.mogucdn.com/mlcdn/c45406/190321_19cd71cd6d0i8jffh57g8j09bf1j8_640x960.jpg_640x854.v1cAC.40.webp"
              alt
            >
            <span class="span1">百搭运动鞋 质保</span>
            <span class="span2">￥98</span>
          </li>
          <li>
            <img
              src="https://s3.mogucdn.com/mlcdn/c45406/190308_20i2ld78db2ihcla2b16d2f6kgc9i_640x853.jpg_640x854.v1cAC.40.webp"
              alt
            >
            <span class="span1">百搭运动鞋 质保</span>
            <span class="span2">￥98</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped lang='less'>
.bus {
  height: 100%;
}
.bus-content{
  height: calc(100% - 190px);
  overflow-y: auto;
}
.header {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(250, 250, 250);
  border: 1px solid rgb(245, 245, 245);
}
.header > img {
  width: 96px;
  height: 90px;
}
.header > span {
  font-size: 34px;
}
.header1 > img {
  width: 60px;
  height: 60px;
  padding-right: 6px;
}
.pic {
  width: 100%;
  position: relative;
}
.pic1 {
  position: absolute;
  top: 440px;
  left: 280px;
  text-align: center;
}
.pic1 > button {
  display: block;
  width: 180px;
  height: 60px;
  background: rgb(255, 87, 119);
  color: white;
  font-size: 32px;
  border: none;
  border-radius: 5px;
  margin: 20px;
}
.content > p {
  font-size: 30px;
  padding: 28px;
}
.content1 {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.content1 li {
  width: calc(100% / 2 - 20px);
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  background: white;
  margin-bottom: 20px;
}
.content1 li .span1 {
  font-size: 24px;
  color: salmon;
  padding: 10px;
}
.content1 li .span2 {
  font-size: 28px;
  font-weight: 600;
}
</style>
