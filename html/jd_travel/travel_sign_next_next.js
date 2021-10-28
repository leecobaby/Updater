// next next
if (!document.body.innerText) {
  $.callback = ''
  $.next = 0 // 覆盖前面的 0 
  dealReturn('travel_getSignHomeData', $.data)
  document.write(JSON.stringify($))
}