// next next
if (!document.body.innerText) {
  $.callback = ''
  $.wait = 1
  takeRequest('browseAdTaskForFarmHandle')
  document.write(JSON.stringify($))
}