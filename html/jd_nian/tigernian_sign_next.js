// next
$.callback = ''
dealReturn('tigernian_sign', $.data)
$.callback = 'Func.request'
takePostRequest('tigernian_getSignHomeData');

// next next
if (!document.body.innerText) {
  $.callback = ''
  dealReturn('tigernian_getSignHomeData', $.data)
  document.write(JSON.stringify($))
}