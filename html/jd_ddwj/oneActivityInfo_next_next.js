if (!document.body.innerText) {
  $.callback = ''
  $.wait = 1
  $.success = 1
  $.message = `完成任务： ${$.data?.data?.result?.successToast}`
  console.log($.message)
  document.write(JSON.stringify($))
}