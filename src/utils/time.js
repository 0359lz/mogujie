function getLefTime (endTime) {
  var date = new Date() // 获取当前时间
  var now = date.getTime() // 获取当前GMT时间
  // dateObject.getTime()，dateObject指定的日期和时间距 1970年 1月 1日午夜（GMT 时间）之间的毫秒数。
  var endDate = new Date(endTime) // 获取结束时间
  var end = endDate.getTime() // 获取结束GMT时间
  var diffTime = end - now // 计算时间差
  var h, m, s
  s = Math.floor(diffTime / 1000 % 60)
  m = Math.floor(diffTime / 1000 / 60 % 60)
  h = Math.floor(diffTime / 1000 / 60 / 60 % 24)

  // 封装成函数
  h = addZero(h)
  m = addZero(m)
  s = addZero(s)

  return {
    hour: h,
    minute: m,
    second: s
  }
}
// 为数字添加0前缀
function addZero (num) {
  if (num < 10) {
    num = '0' + num
  }
  return num
}

export default getLefTime
