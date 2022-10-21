/**
 * name: Next Logic Handler
 * author: @leeco
 * apply: shortcuts
 * tips: Only for learning and communication, strictly prohibited for commercial use, please delete within 24 hours
 */

function Next(func) {
  switch (func) {
    case 'promote_getTaskDetail_next':
      // next
      $.callback = ''
      $.call.pop()
      dealReturn('promote_getTaskDetail', $.data)
      document.write(JSON.stringify($))
      break
    case 'promote_sign_next':
      // next
      $.callback = ''
      $.next = 1
      dealReturn('promote_sign', $.data)
      $.callback = 'Func.request'
      takePostRequest('promote_getSignHomeData')

      // next next
      if (!document.body.innerText) {
        $.callback = ''
        dealReturn('promote_getSignHomeData', $.data)
        document.write(JSON.stringify($))
      }
      break
    case 'promote_sign_next_next':
      // next next
      if (!document.body.innerText) {
        $.callback = ''
        dealReturn('promote_getSignHomeData', $.data)
        document.write(JSON.stringify($))
      }
      break
    case 'oneTaskHandle_next':
      // next
      $.callback = ''
      dealReturn('oneTaskHandle', $.data)
      // 去往 doTask
      $.call.pop()
      document.write(JSON.stringify($))
      break
    case 'oneActivityInfo_next':
      // next
      // 这里有链式语法糖，ios13不识别，而 next 里面语法不会被 babel
      $.callback = ''
      dealReturn('promote_collectScore', $.data)
      if ($.callbackInfo?.code === 0 && $.callbackInfo?.data?.result?.taskToken) {
        // 等待 8s
        $.wait = 8
        $.next = 1 // 覆盖前面的 0
        $.callback = 'Func.request'
        callbackResult('qryViewkitCallbackResult')
        // return
        // 这里的逻辑是在 next 里面的，而 next 不是一个函数，所以不能使用 return 来中断

        // 对于 next next 这种嵌套需要单独隔离，只在运行到的时候调用，判断是否有页面内容为好的方式
        // next next
        if (!document.body.innerText) {
          $.callback = ''
          $.wait = 1
          $.message = `${$.data.toast.subTitle}`
          document.write(JSON.stringify($))
        }
      } else if ([1, 2, 3, 5, 26].includes($.oneTask.taskType)) {
        $.success = 1
        $.message = `任务完成`
        document.write(JSON.stringify($))
      } else if ($.callbackInfo?.code === -40300) {
        $.error = `oneActivityInfo ${$.oneTask.taskId}/${$.oneTask.taskType} 任务失败，此账号火爆，请手动做任务等待更新~`
        document.write(JSON.stringify($))
      } else {
        $.message = `oneActivityInfo ${$.oneTask.taskId}/${$.oneTask.taskType} 任务失败，未知错误等待修复，尝试继续运行指令~`
        document.write(JSON.stringify($))
      }
      break
    case 'oneActivityInfo_next_next':
      // next next
      if (!document.body.innerText) {
        $.callback = ''
        $.wait = 1
        $.message = `${$.data.toast.subTitle}`
        document.write(JSON.stringify($))
      }
      break
    case 'promote_getFeedDetail_next':
      // next
      $.callback = ''
      dealReturn('promote_getFeedDetail', $.data)
      $.productList = $.feedDetailInfo.productInfoVos || $.feedDetailInfo.browseShopVo
      $.needTime = Number($.feedDetailInfo.maxTimes) - Number($.feedDetailInfo.times)
      $.call.pop()
      $.next = 0 // 衔接下一个函数前，重置 next 防止获取 next 失败
      browseProducts()
      break
    case 'jdjrDoTask_next':
      // next
      $.wait = 8
      $.callback = 'Func.request'
      takePostRequest('jdjrDoTaskFinish')
      // return

      // next next
      if (!document.body.innerText) {
        $.callback = ''
        dealReturn('jdjrDoTask', $.data)
        document.write(JSON.stringify($))
      }
      break
    case 'jdjrDoTask_next_next':
      // next next
      if (!document.body.innerText) {
        $.callback = ''
        dealReturn('jdjrDoTask', $.data)
        document.write(JSON.stringify($))
      }
      break
    case 'getAppId_next':
      // next
      $.callback = ''
      dealReturn('getAppId', $.data)
      $.call.pop()
      $.next = 0 // 衔接下一个函数前，重置 next 防止获取 next 失败
      getShopHomeData()
      break
    case 'getShopHomeData_next':
      // next
      $.callback = ''
      dealReturn('getShopHomeData', $.data)
      $.call.pop()
      $.next = 0 // 衔接下一个函数前，重置 next 防止获取 next 失败
      doOneShopTask()
      break
    case 'jm_promotion_queryPromotionInfoByShopId_next':
      // next
      $.callback = ''
      $.call.pop()
      dealReturn('jm_promotion_queryPromotionInfoByShopId', $.data)
      document.write(JSON.stringify($))
      break
    case 'jm_marketing_maininfo_next':
      // next
      $.callback = ''
      $.call.pop()
      dealReturn('jm_marketing_maininfo', $.data)
      document.write(JSON.stringify($))
      break
    case 'jm_hidden_tryDoTask_next':
      // next
      $.callback = ''
      $.call.pop()
      dealReturn('jm_hidden_tryDoTask', $.data)
      document.write(JSON.stringify($))
      break
    case 'doOneDiceTask8_next':
      // next
      dealReturn('doOneDiceTask8', $.data)
      $.wait = 5
      takePostRequest('doOneDiceTask8_2')
      return
      // ⚠️ 这里能用 return，是因为在新架构中，next 是在一个函数中

      // next next
      $.callback = ''
      $.call.pop()
      $.wait = undefined
      dealReturn('doOneDiceTask8', $.data)
      document.write(JSON.stringify($))
      break
    case 'doOneDiceTask8_next_next':
      // next next
      $.callback = ''
      $.call.pop()
      $.wait = undefined
      dealReturn('doOneDiceTask8', $.data)
      document.write(JSON.stringify($))
      break
    case 'demo':
      // next next
      $.callback = ''
      $.call.pop()
      dealReturn('doOneDiceTask8', $.data)
      document.write(JSON.stringify($))
      break
    default:
      // next
      $.callback = ''
      let type = String(func).replace('_next', '')
      dealReturn(type, $.data)
      document.write(JSON.stringify($))
      break
  }
}
