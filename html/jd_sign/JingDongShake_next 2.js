// next
$.callback = ''
dealReturn('JingDongShake', $.data)
// 在涉及到 next 后面调用其他函数时需要判断网页文本，防止覆盖
if (!document.body.innerText) {
  document.write(JSON.stringify($))
}