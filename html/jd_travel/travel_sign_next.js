// next
$.callback = ''
dealReturn('travel_sign', $.data)
$.callback = 'Func.request'
takePostRequest('travel_getSignHomeData');

// next next
if (!document.body.innerText) {
  $.callback = ''
  dealReturn('travel_getSignHomeData', $.data)
  document.write(JSON.stringify($))
}