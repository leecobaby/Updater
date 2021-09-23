if (!document.body.innerText) {
  $.callback = ''
  $.wait = 1
  $.success = 1
  $.message = `${$.data?.data?.result?.successToast}`
  console.log($.message)
  document.write(JSON.stringify($))
}