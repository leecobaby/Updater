// next next
if (!document.body.innerText) {
  $.callback = ''
  $.wait = 1
  if ($.data.code === '0') {
    $.message = `完成任务,获得${$.data?.amount}g💧`
  } else {
    $.message = `浏览任务结果: ${JSON.stringify(data)}`
  }
  document.write(JSON.stringify($))
}