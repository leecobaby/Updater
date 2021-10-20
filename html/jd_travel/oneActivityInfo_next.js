// next 
$.callback = ''
dealReturn('travel_collectScore', $.data)
if ($.callbackInfo.code === 0 && $.callbackInfo.data?.result?.taskToken) {

  // 等待 8s
  $.wait = 8
  $.next = 1 // 覆盖前面的 0
  $.callback = 'Func.request'
  callbackResult('qryViewkitCallbackResult')
  // return
  // 这里的逻辑是在 next 里面的，而 next 不是一个函数，所以不能使用 return 来中断

  // 对于 next next 这种嵌套需要单独隔离，只在运行到的时候调用，判断是否有页面内容为好的方式
  // next next
  if (!document.body.innerText) {
    $.callback = ''
    $.wait = 1
    $.message = `${$.data?.toast?.subTitle}`
    document.write(JSON.stringify($))
  }

} else if ([1, 2, 3, 5, 26].includes($.oneTask.taskType)) {
  $.success = 1
  $.message = `任务完成`
  document.write(JSON.stringify($))
} else if ($.callbackInfo.data?.bizCode === -1002) {
  $.error = `oneActivityInfo ${$.oneTask.taskId} 任务失败，此接口失效可尝试去指令设置切换UA，再次运行~`
  document.write(JSON.stringify($))
} else {
  $.error = `oneActivityInfo ${$.oneTask.taskId} 任务失败，未知错误等待修复`
  document.write(JSON.stringify($))
}