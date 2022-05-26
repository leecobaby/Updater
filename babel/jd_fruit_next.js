/**
 * name: Next Logic Handler
 * author: @leeco
 * apply: shortcuts
 * tips: Only for learning and communication, strictly prohibited for commercial use, please delete within 24 hours
 */

function Next (func) {
  switch (func) {
    case 'initForFarm_next': ``
      // next
      $.callback = ''
      $.call.pop()
      dealReturn('initForFarm', $.data)
      document.write(JSON.stringify($))
      break;
    case 'signForFarm_next':
      // next
      dealReturn('signForFarm', $.data)
      // 被水滴砸中
      if ($.farmInfo.todayGotWaterGoalTask.canPop) {
        takeRequest('gotWaterGoalTaskForFarm');
        // return
        // 这里的逻辑是在 next 里面的，而 next 不是一个函数，所以不能使用 return 来中断

        // 对于 next next 这种嵌套需要单独隔离，只在运行到的时候调用，判断是否有页面内容为好的方式

        // next next

      } else {
        $.callback = ''
        document.write(JSON.stringify($))
      }
      break;
    case 'signForFarm_next_next':
      $.callback = ''
      dealReturn('gotWaterGoalTaskForFarm', $.data)
      document.write(JSON.stringify($))
      break;
    case 'browseAdTaskForFarm_next':
      // next 
      $.callback = ''
      dealReturn('browseAdTaskForFarm', $.data)
      if ($.browseResult.code === '0') {
        $.data = {}, $.browseResult = {} // 防止此处有换行符出错
        $.wait = 6
        $.next = 1 // 覆盖前面的 0
        $.taskType = 1 // 领奖励
        $.callback = 'Func.request'
        takeRequest('browseAdTaskForFarm')
        // return
        // 这里的逻辑是在 next 里面的，而 next 不是一个函数，所以不能使用 return 来中断

        // 对于 next next 这种嵌套需要单独隔离，只在运行到的时候调用，判断是否有页面内容为好的方式

        // next next

      } else {
        $.message = `浏览任务结果: ${JSON.stringify($.data)}`
        document.write(JSON.stringify($))
      }
      break;
    case 'browseAdTaskForFarm_next_next':
      // next next
      $.callback = ''
      $.wait = 1
      dealReturn('browseAdTaskForFarmHandle', $.data)
      document.write(JSON.stringify($))
      break;
    case 'doTenWater_next':
      // next
      $.callback = ''
      dealReturn('waterGoodForFarm', $.data)
      document.write(JSON.stringify($))
      break;
    case 'doSurplusWaterGo_next':
      // next
      $.callback = ''
      dealReturn('waterGoodForFarm', $.data)
      document.write(JSON.stringify($))
      break;
    case 'firstWaterTaskForFarm_next':
      // next
      $.callback = ''
      dealReturn('taskInitForFarm', $.data)
      if (!$.farmTask.firstWaterInit.f && $.farmTask.firstWaterInit.totalWaterTimes > 0) {
        $.callback = 'Func.request'
        takeRequest('firstWaterTaskForFarm');
        // return
        // 这里的逻辑是在 next 里面的，而 next 不是一个函数，所以不能使用 return 来中断

        // 对于 next next 这种嵌套需要单独隔离，只在运行到的时候调用，判断是否有页面内容为好的方式

        // next next

      } else {
        $.message = '首次浇水奖励已领取'
        document.write(JSON.stringify($))
      }
      break;
    case 'firstWaterTaskForFarm_next_next':
      // next next
      $.callback = ''
      dealReturn('firstWaterTaskForFarm', $.data)
      document.write(JSON.stringify($))
      break;
    case 'waterFriendForFarm_next':
      // next
      $.callback = ''
      $.farmTask.waterFriendTaskInit.waterFriendCountKey++
      dealReturn('waterFriendForFarm', $.data)
      document.write(JSON.stringify($))
      break;
    case 'clockInInitForFarm_next':
      // next
      $.callback = ''
      $.call.pop() // 只调用一次的函数需要及时弹出
      dealReturn('clockInInitForFarm', $.data)
      document.write(JSON.stringify($))
      break;
    case 'clockInForFarm_next':
      // next
      $.callback = ''
      $.call.pop() // 只调用一次的函数需要及时弹出
      dealReturn('clockInForFarm', $.data)
      break;
    case 'gotClockInGift_next':
      // next
      $.callback = ''
      $.call.pop() // 只调用一次的函数需要及时弹出
      dealReturn('gotClockInGift', $.data)
      document.write(JSON.stringify($))
      break;
    case 'clockInFollowForFarm_next':
      // next
      $.callback = ''
      if ($.data.code === '0') {
        $.next = 1 // 覆盖前面的 0
        $.callback = 'Func.request'
        takeRequest('clockInFollowForFarm2');
        // return
        // 这里的逻辑是在 next 里面的，而 next 不是一个函数，所以不能使用 return 来中断

        // 对于 next next 这种嵌套需要单独隔离，只在运行到的时候调用，判断是否有页面内容为好的方式

        // next next
      } else {
        document.write(JSON.stringify($))
      }
      break;
    case 'clockInFollowForFarm_next_next':
      // next next
      $.callback = ''
      dealReturn('clockInFollowForFarm2', $.data)
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