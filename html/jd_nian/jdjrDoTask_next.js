// next
$.callback = 'Func.request'
takePostRequest('jdjrDoTaskFinish')
// return


// next next
if (!document.body.innerText) {
  $.callback = ''
  dealReturn('jdjrDoTask', $.data)
  document.write(JSON.stringify($))
}