/**
 * name: Next Logic Handler
 * author: @leeco
 * apply: shortcuts
 * tips: Only for learning and communication, strictly prohibited for commercial use, please delete within 24 hours
 */

function Next (func) {
  switch (func) {
    case 'JingDongShake_next':
      // next
      $.callback = ''
      dealReturn('JingDongShake', $.data)
      // 在涉及到 next 后面调用其他函数时需要判断网页文本，防止覆盖
      if (!document.body.innerText) {
        document.write(JSON.stringify($))
      }
      break;
    case 'JDSecKilling_next':
      // next
      $.callback = ''
      dealReturn('JDSecKilling', $.data)
      if ($.taskType) {
        $.callback = 'Func.request'
        takeRequest('JDSecKillingNext')
        // return
        // 这里的逻辑是在 next 里面的，而 next 不是一个函数，所以不能使用 return 来中断
        // 对于 next next 这种嵌套需要单独隔离，只在运行到的时候调用，判断是否有页面内容为好的方式

        // next next 
        if (!document.body.innerText) {
          $.callback = ''
          dealReturn('JDSecKillingNext', $.data)
          document.write(JSON.stringify($))
        }
      } else {
        document.write(JSON.stringify($))
      }
      break;
    case 'JDSecKilling_next_next':
      // next next 
      if (!document.body.innerText) {
        $.callback = ''
        dealReturn('JDSecKillingNext', $.data)
        document.write(JSON.stringify($))
      }
      break;
    case 'getNHSignInfo_next':
      // next
      $.callback = ''
      $.call.pop()
      dealReturn('getNHSignInfo', $.data)
      document.write(JSON.stringify($))
      break;
    case 'queryInteractiveInfo_next':
      // next
      $.callback = ''
      $.call.pop()
      dealReturn('queryInteractiveInfo', $.data)
      document.write(JSON.stringify($))
      break;
    default:
      // next
      $.callback = ''
      let type = String(func).replace('_next', '')
      dealReturn(type, $.data)
      document.write(JSON.stringify($))
      break;
  }
}