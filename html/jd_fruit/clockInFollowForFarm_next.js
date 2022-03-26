// next
$.callback = ''
if ($.data.code === '0') {
  $.next = 1 // 覆盖前面的 0
  $.callback = 'Func.request'
  takeRequest('clockInFollowForFarm2');
  // return
  // 这里的逻辑是在 next 里面的，而 next 不是一个函数，所以不能使用 return 来中断

  // 对于 next next 这种嵌套需要单独隔离，只在运行到的时候调用，判断是否有页面内容为好的方式

  // next next
  if (!document.body.innerText) {
    $.callback = ''
    dealReturn('clockInFollowForFarm2', $.data)
    document.write(JSON.stringify($))
  }
} else {
  document.write(JSON.stringify($))
}