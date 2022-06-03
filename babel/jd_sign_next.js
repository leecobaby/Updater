/**
 * name: Next Logic Handler
 * author: @leeco
 * apply: shortcuts
 * tips: Only for learning and communication, strictly prohibited for commercial use, please delete within 24 hours
 */

function Next (func) {
  switch (func) {
    case 'JDSecKilling_next':
      // next
      $.callback = ''
      dealReturn('JDSecKilling', $.data)
      if ($.taskType) {
        $.callback = 'Func.request'
        $.next = 1
        takeRequest('JDSecKillingNext')
        // return
        // 这里的逻辑是在 next 里面的，而 next 不是一个函数，所以不能使用 return 来中断
        // 对于 next next 这种嵌套需要单独隔离，只在运行到的时候调用，判断是否有页面内容为好的方式

        // next next 
        if (!document.body.innerText) {
          $.callback = ''
          $.next = 0
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
        $.next = 0
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
    case 'doInteractiveAssignment_next':
      // next
      $.callback = ''
      $.call.pop()
      dealReturn('doInteractiveAssignment', $.data)
      document.write(JSON.stringify($))
      break;
    case 'get618ZCInfo_next':
      // next
      $.callback = ''
      $.call.pop()
      dealReturn('get618ZCInfo', $.data)
      document.write(JSON.stringify($))
      break;
    case 'do618ZCReward_next':
      // next
      $.callback = ''
      $.call.pop()
      dealReturn('do618ZCReward', $.data)
      document.write(JSON.stringify($))
      break;
    case 'get618ZCTaskList_next':
      // next
      $.callback = ''
      $.call.pop()
      dealReturn('get618ZCTaskList', $.data)
      document.write(JSON.stringify($))
      break;
    case 'do618ZCBrowseTask_next':
      // next
      $.callback = ''
      dealReturn('do618ZCBrowseTask', $.data)
      if ($.callbackInfo && $.callbackInfo.code == 0) {
        // 等待 5s
        $.wait = 5
        $.next = 1 // 覆盖前面的 0
        $.callback = 'Func.request'
        $.itemId = $.callbackInfo.data?.itemId
        takeRequest('qryViewkitCallbackResult')
        return

        // next next
        $.callback = ''
        $.wait = 0
        dealReturn('qryViewkitCallbackResult', $.data)
        document.write(JSON.stringify($))
      } else {
        $.message = `浏览任务失败：遇到未知错误或ID${$.contentId}内容不存在`
        document.write(JSON.stringify($))
      }
      break;
    case 'do618ZCBrowseTask_next_next':
      // next next
      $.callback = ''
      $.wait = 0
      dealReturn('qryViewkitCallbackResult', $.data)
      document.write(JSON.stringify($))
      break;
    case 'get618SuperBrandInfo_next':
      // next
      $.callback = ''
      $.call.pop()
      dealReturn('get618SuperBrandInfo', $.data)
      document.write(JSON.stringify($))
      break;
    case 'get618SuperBrandSign_next':
      // next
      $.callback = ''
      $.call.pop()
      dealReturn('get618SuperBrandSign', $.data)
      document.write(JSON.stringify($))
      break;
    case 'do618SuperBrandLottery_next':
      // next
      $.callback = ''
      $.call.pop()
      dealReturn('do618SuperBrandLottery', $.data)
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