/**
 * name: 京东签到
 * author: @leeco
 * apply: shortcuts
 * activity: https://bean.m.jd.com/bean/signIndex.action
 * tips: Only for learning and communication, strictly prohibited for commercial use, please delete within 24 hours
 */

// 618 种草街 
// https://prodev.m.jd.com/mall/active/U18CGRp9tTnAkH1HfHnhBEWrfrr/index.html

// 种草心愿
// https://3.cn/1-wZ9n5B?_ts=1655875958023&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&utm_user=plusmember&gx=RnFmxzMPaDeMndRP7FzU8PGSz1VWvURZLA

// 618 特物Z

// 618 lzdz
// https://lzdz1-isv.isvjcloud.com/dingzhi/customized/common/activity/${$.authorNum}?activityId=${$.activityId}&shareUuid=${encodeURIComponent($.authorCode)}&adsource=SD&shareuserid4minipg=${encodeURIComponent($.secretPin)}&shopid=undefined&lng=00.000000&lat=00.000000&sid=&un_area=


// 到指令里运行需要注释掉
// const $ = {}

// $.inviteList = [];
// $.pkInviteList = [];
// $.secretpInfo = {};
// $.innerPkInviteList = [];

$.Utils = Utils()

/** 下方放 call 文本，来控制函数执行 **/


/** 下方放 next 文本，来控制逻辑执行 **/


//   from 来源   to 目标   callback 回调   call 调用
//   当回调有值则执行回调，没有则去往目标，没有目标则去往来源

//   func.xxx -> logicHandler($) -> func.http -> logicHandler($) -> func.xxx
//   回调完执行 next，视情况来清空 callback
//   error 为错误信息，会终止当前账号在指令中的运行，直接运行输出log开始下一个账号或结束
//   $.next = 1 将会层级嵌套
//   $.next = 0 将重置


/**
 * 初始化
 */
function init () {

  $.helpCodeList1 = $.helpCodeObj['活动1助力码'] || []
  // 处理助力码
  if ($.inviteList) {
    $.inviteList = Array.isArray($.inviteList) ? $.inviteList : [$.inviteList]
    $.inviteList = $.inviteList.filter(v => v !== '')
  } else {
    $.inviteList = []
  }

  // 任务流程初始化
  $.taskStep = 1

  // 生成随机 UA UUID
  $.uuid = $.Utils.randomString(40)
  $.UA = `jdapp;iPhone;10.2.0;13.1.2;${$.uuid};M/5.0;network/wifi;ADID/;model/iPhone8,1;addressid/2308460611;appBuild/167853;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;`

  // 自变量
  $.self = {}

  // 是否获取头部
  $.HEAD = false

  $.message = `本指令作为自动化方案开源分享，并不保证他带来的任何副作用，任何副作用请自行负责，如不同意请停止使用！`
  document.write(JSON.stringify($))
}


/**
 * 云端推送提示
 */
function cloudTip () {
  $.error = `指令已运行完毕！\n其他功能和任务正在开发中，上线将自动推送到指令中，无需任何操作~`
  document.write(JSON.stringify($))
}

/**
 * 京东京豆
 */
function JingDongBean () {
  $.callback = 'Func.request'
  takeRequest('JingDongBean');
  return

  // next
  $.callback = ''
  dealReturn('JingDongBean', $.data)
  document.write(JSON.stringify($))
}


/**
 * 京东领现金
 */
function JingDongGetCash () {
  $.callback = 'Func.request'
  takeRequest('JingDongGetCash');
  return

  // next
  $.callback = ''
  dealReturn('JingDongGetCash', $.data)
  document.write(JSON.stringify($))
}

/**
 * 京东秒杀
 */
function JDSecKilling () {
  $.callback = 'Func.request'
  takeRequest('JDSecKilling');
  return

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
}




/**
 * 好友助力
 */
function help () {
  document.write(JSON.stringify($))
}

/**
 * 做领京豆页任务
 */
function doBean () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['doBean']

  switch ($.taskStep++) {
    case 1:
      // 签到领豆
      doBeanSign()
      break;
    case 2:
      // 流量5个商品
      doBeanBrowseTask()
      break;
    case 3:
      // 领取奖励
      getBeanBrowseTaskAward()
      break;
    case 4:
      // 获取升级京豆任务列表
      getBeanTaskList()
      break;
    case 5:
      // 做列表任务
      doBeanTask()
      break;
    case 6:
      // 获取升级京豆任务列表
      getBeanTaskList()
      break;
    case 7:
      // 做列表任务
      doBeanTask()
      break;
    case 8:
      // 获取升级京豆任务列表
      getBeanTaskList()
      break;
    case 9:
      // 做列表任务
      doBeanTask()
      break;
    case 10:
      // 获取升级京豆任务列表
      getBeanTaskList()
      break;
    case 11:
      // 做列表任务
      doBeanTask()
      break;
    default:
      $.to = ''; $.call.pop(); $.taskStep = 1; $.self.data = undefined
      document.write(JSON.stringify($))
      break;
  }
}

// 签到领豆
function doBeanSign () {
  $.call[$.call.length - 1] == 'doBeanSign' || $.call.push('doBeanSign')

  $.callback = 'Func.request'
  takeRequest('doBeanSign');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('doBeanSign', $.data)
  document.write(JSON.stringify($))
}


function doBeanBrowseTask () {
  $.call[$.call.length - 1] == 'doBeanBrowseTask' || $.call.push('doBeanBrowseTask')

  $.itemId = $.Utils.randomInt(10000000, 20000000)
  $.callback = 'Func.request'
  takeRequest('doBeanBrowseTask');
  return

  // next
  $.callback = ''
  dealReturn('doBeanBrowseTask', $.data)
  document.write(JSON.stringify($))
}

function getBeanBrowseTaskAward () {
  $.call[$.call.length - 1] == 'getBeanBrowseTaskAward' || $.call.push('getBeanBrowseTaskAward')

  $.callback = 'Func.request'
  takeRequest('getBeanBrowseTaskAward');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('getBeanBrowseTaskAward', $.data)
  document.write(JSON.stringify($))
}

// 获取活动信息
function getBeanTaskList () {
  $.call[$.call.length - 1] == 'getBeanTaskList' || $.call.push('getBeanTaskList')

  $.message = `获取升级领金豆活动信息中...`
  $.callback = 'Func.request'
  takeRequest('getBeanTaskList');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('getBeanTaskList', $.data)
  document.write(JSON.stringify($))
}

// 做列表任务
function doBeanTask () {
  $.call[$.call.length - 1] == 'doBeanTask' || $.call.push('doBeanTask')

  // 利用队列取代循环
  $.oneTask = $.taskList.shift()
  if (!$.oneTask) {
    // 循环完成重新设置 to,call
    $.call.pop()
    $.message = `任务已全都完成~`
    document.write(JSON.stringify($))
    return
  }

  // 做过的任务则跳过重新执行
  $.taskToken = $.oneTask.subTaskVOS[0] && $.oneTask.subTaskVOS[0].taskToken
  $.taskType = $.oneTask.taskType
  if ($.oneTask?.status !== 1 || $.oneTask?.times >= $.oneTask.maxTimes || !$.taskToken) {
    document.write(JSON.stringify($))
    return
  }

  $.message = `做任务：${$.oneTask.taskName}-${$.oneTask.subTaskVOS[0].title} 等待完成...`
  $.callback = 'Func.request'
  takeRequest('doBeanTask');
  return

  // next
  if ($.taskType == 9 || $.taskType == 8) {
    $.wait = $.oneTask.waitDuration || 5
    $.next = 1
    $.callback = 'Func.request'
    takeRequest('doBeanWaitTask', $.data)
    return

    // next next
    $.wait = 1
    $.next = 0 // 清空 Next.key
    $.callback = ''
    dealReturn('doBeanWaitTask', $.data)
    document.write(JSON.stringify($))
  } else {
    $.callback = ''
    dealReturn('doBeanTask', $.data)
    document.write(JSON.stringify($))
  }

}

/**
 * 做种豆得豆任务
 */
function doPlantBean () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['doPlantBean']

  switch ($.taskStep++) {
    case 1:
      // 获取种豆得豆信息
      getPlantBeanInfo()
      break;
    case 2:
      if ($.self.success) {
        // 获取店铺列表
        getPlantBeanShopTaskList()
      } else {
        $.taskStep = -1
        $.message = '无法获取到活动信息，结束活动任务'
        document.write(JSON.stringify($))
      }
      break;
    case 3:
      // 获取商品列表
      getPlantBeanProductTaskList()
      break;
    case 4:
      // 获取频道列表
      getPlantBeanChannelTaskList()
      break;
    case 5:
      // 助力
      dpPlantBeanHelpTask()
      break;
    case 6:
      // 获取好友列表
      getPlantBeanStealFriendList()
      break;
    case 7:
      // 偷取营养液
      $.message = '开始偷取好友营养液'
      stealFriendNutrients()
      break;
    case 8:
      // 定时领取营养液
      receiveNutrients()
      break;
    case 9:
      // 做主任务
      doPlantBeanTask()
      break;
    case 10:
      getPlantBeanInfo()
      break;
    case 11:
      // 收取营养液
      $.message = '开始收取营养液'
      doPlantBeanCollect()
      break;
    case 11:
      // 领取京豆奖励
      doGetReward()
      break;
    default:
      $.to = ''; $.call.pop(); $.taskStep = 1; $.self.data = undefined
      document.write(JSON.stringify($))
      break;
  }
}

// 获取种豆得豆信息
function getPlantBeanInfo () {
  $.call[$.call.length - 1] == 'getPlantBeanInfo' || $.call.push('getPlantBeanInfo')


  $.callback = 'Func.request'
  takeRequest('getPlantBeanInfo');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('getPlantBeanInfo', $.data)
  document.write(JSON.stringify($))
}
// 获取店铺列表
function getPlantBeanShopTaskList () {
  $.call[$.call.length - 1] == 'getPlantBeanShopTaskList' || $.call.push('getPlantBeanShopTaskList')


  $.callback = 'Func.request'
  takeRequest('getPlantBeanShopTaskList');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('getPlantBeanShopTaskList', $.data)
  document.write(JSON.stringify($))
}
// 获取商品列表
function getPlantBeanProductTaskList () {
  $.call[$.call.length - 1] == 'getPlantBeanProductTaskList' || $.call.push('getPlantBeanProductTaskList')


  $.callback = 'Func.request'
  takeRequest('getPlantBeanProductTaskList');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('getPlantBeanProductTaskList', $.data)
  document.write(JSON.stringify($))
}
// 获取频道列表
function getPlantBeanChannelTaskList () {
  $.call[$.call.length - 1] == 'getPlantBeanChannelTaskList' || $.call.push('getPlantBeanChannelTaskList')


  $.callback = 'Func.request'
  takeRequest('getPlantBeanChannelTaskList');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('getPlantBeanChannelTaskList', $.data)
  document.write(JSON.stringify($))
}
// 获取好友列表
function getPlantBeanStealFriendList () {
  $.call[$.call.length - 1] == 'getPlantBeanStealFriendList' || $.call.push('getPlantBeanStealFriendList')


  $.callback = 'Func.request'
  takeRequest('getPlantBeanStealFriendList');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('getPlantBeanStealFriendList', $.data)
  document.write(JSON.stringify($))
}

// 定时领取营养液
function receiveNutrients () {
  $.call[$.call.length - 1] == 'receiveNutrients' || $.call.push('receiveNutrients')


  $.callback = 'Func.request'
  takeRequest('receiveNutrients');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('receiveNutrients', $.data)
  document.write(JSON.stringify($))
}

// 做主任务
function doPlantBeanTask () {
  $.call[$.call.length - 1] == 'doPlantBeanTask' || $.call.push('doPlantBeanTask')

  // 利用队列取代循环
  $.oneTask = $.taskList.shift()
  if (!$.oneTask) {
    // 循环完成重新设置 to,call
    $.next = 0 // 清空 Next.key
    $.call.pop()
    $.message = `任务已全都完成~`
    document.write(JSON.stringify($))
    return
  }

  // 做过的任务则跳过重新执行
  if ($.oneTask.isFinished == 1) {
    $.message = `${$.oneTask.taskName} 任务已完成，跳过继续下一个任务~`
    document.write(JSON.stringify($))
    return
  }

  // 暂时过滤掉这些任务不做
  if ($.oneTask.taskType === 3) {
    $.self.count = $.oneTask.totalNum - $.oneTask.gainedNum;
    $.message = `开始做 ${$.oneTask.taskName} 任务`
    //浏览店铺
    doPlantBeanBrowseTask()
  } else if ($.oneTask.taskType === 5) {
    $.self.count = $.oneTask.totalNum - $.oneTask.gainedNum;
    $.message = `开始做 ${$.oneTask.taskName} 任务`
    //挑选商品
    doPlantBeanProductTask()
  } else if ($.oneTask.taskType === 10) {
    $.self.count = $.oneTask.totalNum - $.oneTask.gainedNum;
    $.message = `开始做 ${$.oneTask.taskName} 任务`
    //关注频道
    doPlantBeanChannelTask()
  } else if ($.oneTask.dailyTimes == 1) {
    $.message = `开始做 ${$.oneTask.taskName} 任务`
    doPlantBeanOhterTask()
  }

  !document.body.innerText && document.write(JSON.stringify($))
}

// 做浏览任务
function doPlantBeanBrowseTask () {
  $.call[$.call.length - 1] == 'doPlantBeanBrowseTask' || $.call.push('doPlantBeanBrowseTask')

  // 利用队列取代循环
  $.oneShop = $.shopList.shift()
  if (!$.oneShop || $.self.count <= 0) {
    $.message = `${$.oneTask.taskName}任务已做完~`
    $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  if ($.oneShop.taskState !== '2') {
    document.write(JSON.stringify($))
    return
  }

  $.callback = 'Func.request'
  takeRequest('doPlantBeanBrowseTask');
  return


  // next
  $.callback = ''
  dealReturn('doPlantBeanBrowseTask', $.data)
  document.write(JSON.stringify($))
}

//挑选商品
function doPlantBeanProductTask () {
  $.call[$.call.length - 1] == 'doPlantBeanProductTask' || $.call.push('doPlantBeanProductTask')

  // 利用队列取代循环
  $.oneProduct = $.productList.shift()
  if (!$.oneProduct || $.self.count <= 0) {
    $.message = `${$.oneTask.taskName}任务已做完~`
    $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  if ($.oneProduct[0].taskState !== '2') {
    document.write(JSON.stringify($))
    return
  }

  $.callback = 'Func.request'
  takeRequest('doPlantBeanProductTask');
  return


  // next
  $.callback = ''
  dealReturn('doPlantBeanProductTask', $.data)
  document.write(JSON.stringify($))
}

//关注频道
function doPlantBeanChannelTask () {
  $.call[$.call.length - 1] == 'doPlantBeanChannelTask' || $.call.push('doPlantBeanChannelTask')

  // 利用队列取代循环
  $.oneChannel = $.channelList.shift()
  if (!$.oneChannel || $.self.count <= 0) {
    $.message = `${$.oneTask.taskName}任务已做完~`
    $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  if ($.oneChannel.taskState !== '2') {
    document.write(JSON.stringify($))
    return
  }

  $.callback = 'Func.request'
  takeRequest('doPlantBeanChannelTask');
  return


  // next
  $.callback = ''
  dealReturn('doPlantBeanChannelTask', $.data)
  document.write(JSON.stringify($))
}

// 做其他任务
function doPlantBeanOhterTask () {
  $.call[$.call.length - 1] == 'doPlantBeanOhterTask' || $.call.push('doPlantBeanOhterTask')

  $.callback = 'Func.request'
  takeRequest('doPlantBeanOhterTask');
  return


  // next
  $.callback = ''
  $.call.pop()
  dealReturn('doPlantBeanOhterTask', $.data)
  document.write(JSON.stringify($))
}

// 收取营养液
function doPlantBeanCollect () {
  $.call[$.call.length - 1] == 'doPlantBeanCollect' || $.call.push('doPlantBeanCollect')

  // 利用队列取代循环
  $.oneTask = $.collectList.shift()
  if (!$.oneTask) {
    $.wait = 0
    $.message = `营养液已收取完~`
    $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  $.wait = 2
  $.callback = 'Func.request'
  takeRequest('doPlantBeanCollect');
  return


  // next
  $.callback = ''
  dealReturn('doPlantBeanCollect', $.data)
  document.write(JSON.stringify($))
}

// 偷取营养液
function stealFriendNutrients () {
  $.call[$.call.length - 1] == 'stealFriendNutrients' || $.call.push('stealFriendNutrients')

  // 利用队列取代循环
  $.oneTask = $.stealFriendInfo.friendInfoList.shift()
  if (!$.oneTask || $.stealFriendInfo.tips) {
    $.message = `今日偷取好友营养液已达上限~`
    $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  $.callback = 'Func.request'
  takeRequest('stealFriendNutrients');
  return


  // next
  $.callback = ''
  dealReturn('stealFriendNutrients', $.data)
  document.write(JSON.stringify($))
}

// 领取京豆奖励
function doGetReward () {
  $.call[$.call.length - 1] == 'doGetReward' || $.call.push('doGetReward')

  if ($.awardState == '5') {
    $.message = '开始领取京豆奖励'
    $.callback = 'Func.request'
    takeRequest('doGetReward');
    return

    // next
    $.callback = ''
    $.call.pop()
    dealReturn('doGetReward', $.data)
    document.write(JSON.stringify($))
  } else if ($.awardState == '6') {
    $.message = '上期获得：' + $.roundList[0].awardBeans + '京豆'
  } else {
    $.message = '当前无京豆奖励可领取~'
  }

  $.call.pop()
  document.write(JSON.stringify($))
}

// 助力
function dpPlantBeanHelpTask () {
  $.message = '助力功能暂未实现~'
  document.write(JSON.stringify($))
}

/**
 * 做LZDZ任务 - 全利以赴 谁是囤货王
 * （暂时不知道什么玩意儿）
 */
function doLzdz68 () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['doLzdz68']

  $.activityId = "dzlhkke4cc7da358ff4fa18352ce88";
  $.authorCode = "0df549e339284e27bca13726bde214db";
  $.activityShopId = "1000003443";
  $.algo = {}
  $.algo.appId = '8adfb'

  switch ($.taskStep++) {
    case 1:
      // 获取 LZCK
      getLzdzCK()
      break;
    case 2:
      // 获取 Token
      getLzdzToken()
      break;
    case 3:
      // 获取 Pin
      if ($.LzdzToken) {
        getLzdzPin()
      } else {
        $.taskStep = -1
        $.message = '无法获取到活动令牌，结束活动任务'
        document.write(JSON.stringify($))
      }
      break;
    case 4:
      // 访问 AD 日志
      if ($.secretPin) {
        getLzdzLogWithAD()
      } else {
        $.taskStep = -1
        $.message = '无法获取到Pin码，结束活动任务'
        document.write(JSON.stringify($))
      }
      break;
    case 5:
      // 获取活动信息
      if ($.self.data) {
        getLzdzInfo()
      } else {
        $.taskStep = -1
        $.message = '无法获取 AD 日志，结束活动任务'
        document.write(JSON.stringify($))
      }
      break;
    case 6:
      // 一键关注店铺
      if ($.self.data) {
        doLzdzTaskFollowShop()
      } else {
        $.taskStep = -1
        $.message = '无法获取到活动信息，结束活动任务'
        document.write(JSON.stringify($))
      }
      break;
    case 7:
      // 获取开卡信息
      getLzdzOpenCardInfo()
      break;
    case 8:
      // 做开卡任务
      if ($.taskList) {
        doLzdzOpenCardTask()
      } else {
        $.taskStep = -1
        $.message = '无法获取到开卡任务，结束活动任务'
        document.write(JSON.stringify($))
      }
      break;
    default:
      $.to = ''; $.call.pop(); $.taskStep = 1; $.self.data = undefined
      document.write(JSON.stringify($))
      break;
  }
}

// 获取 LZCK
function getLzdzCK () {
  $.call[$.call.length - 1] == 'getLzdzCK' || $.call.push('getLzdzCK')

  $.HEAD = true
  $.callback = 'Func.request'
  takeRequest('getLzdzCK');
  return

  // next
  $.callback = ''
  $.call.pop()
  // 这里要取消获取 HEAD
  $.HEAD = false
  // 注意这里的 $.headerData 其实是 response.header
  dealReturn('getLzdzCK', $.headerData)
  document.write(JSON.stringify($))
}

// 获取 Token
function getLzdzToken () {
  $.call[$.call.length - 1] == 'getLzdzToken' || $.call.push('getLzdzToken')

  $.callback = 'Func.request'
  takeRequest('getLzdzToken');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('getLzdzToken', $.data)
  document.write(JSON.stringify($))
}

// 获取 Pin
function getLzdzPin () {
  $.call[$.call.length - 1] == 'getLzdzPin' || $.call.push('getLzdzPin')

  $.callback = 'Func.request'
  takeRequest('getLzdzPin');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('getLzdzPin', $.data)
  document.write(JSON.stringify($))
}

// 访问 AD 日志
function getLzdzLogWithAD () {
  $.call[$.call.length - 1] == 'getLzdzLogWithAD' || $.call.push('getLzdzLogWithAD')

  $.HEAD = true
  $.callback = 'Func.request'
  takeRequest('getLzdzLogWithAD');
  return

  // next
  $.callback = ''
  $.call.pop()
  // 这里要取消获取 HEAD
  $.HEAD = false
  // 注意这里的 $.headerData 其实是 response.header
  dealReturn('getLzdzLogWithAD', $.headerData)
  document.write(JSON.stringify($))
}

// 获取活动信息
function getLzdzInfo () {
  $.call[$.call.length - 1] == 'getLzdzInfo' || $.call.push('getLzdzInfo')

  $.callback = 'Func.request'
  takeRequest('getLzdzInfo');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('getLzdzInfo', $.data)
  document.write(JSON.stringify($))
}

// 关注店铺
function doLzdzTaskFollowShop () {
  $.call[$.call.length - 1] == 'doLzdzTaskFollowShop' || $.call.push('doLzdzTaskFollowShop')

  $.callback = 'Func.request'
  takeRequest('doLzdzTaskFollowShop');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('doLzdzTaskFollowShop', $.data)
  document.write(JSON.stringify($))
}


// 获取开卡信息
function getLzdzOpenCardInfo () {
  $.call[$.call.length - 1] == 'getLzdzOpenCardInfo' || $.call.push('getLzdzOpenCardInfo')

  $.callback = 'Func.request'
  takeRequest('getLzdzOpenCardInfo');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('getLzdzOpenCardInfo', $.data)
  document.write(JSON.stringify($))
}

// 做开卡任务
function doLzdzOpenCardTask () {
  $.call[$.call.length - 1] == 'doLzdzOpenCardTask' || $.call.push('doLzdzOpenCardTask')

  // 利用队列取代循环
  $.oneTask = $.taskList.shift()
  if (!$.oneTask) {
    // 循环完成重新设置 to,call
    $.next = 0 // 清空 Next.key
    $.call.pop()
    $.message = `入会任务已全都完成~`
    document.write(JSON.stringify($))
    return
  }

  // 做过的任务则跳过重新执行
  $.venderId = $.oneTask?.venderId
  if ($.oneTask?.status == 1) {
    $.message = `你已经是 ${$.oneTask.name} 会员了`
    document.write(JSON.stringify($))
    return
  }

  $.callback = 'Func.request'
  takeRequest('getShopOpenCardInfo');
  return

  // next
  $.callback = ''
  dealReturn('getShopOpenCardInfo', $.data)
  if ($.self.success) {
    request_algo()
  } else {
    document.write(JSON.stringify($))
  }
}

// 获取算法
function request_algo () {
  $.call[$.call.length - 1] == 'request_algo' || $.call.push('request_algo')


  $.algo.time = Date.now()
  $.algo.timestamp = new Date($.algo.time).Format("yyyyMMddHHmmssSSS")
  $.algo.fp = $.Utils.H5ST._getFp($.algo.time)
  $.callback = 'Func.request'
  takeRequest('request_algo')
  return


  // next next
  $.callback = ''
  $.call.pop()
  dealReturn('request_algo', $.data)
  // 进入下一个函数无需输出
  bindWithVender()
}

// 开卡
function bindWithVender () {
  $.call[$.call.length - 1] == 'bindWithVender' || $.call.push('bindWithVender')

  $.callback = 'Func.request'
  takeRequest('bindWithVender')
  return


  // next next
  $.callback = ''
  $.call.pop()
  dealReturn('bindWithVender', $.data)
  document.write(JSON.stringify($))
}

/**
 * 🔥 做 618 特物Z签到 - 限时
 */
function do618SuperBrand () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['do618SuperBrand']

  switch ($.taskStep++) {
    case 1:
      // 获取活动信息
      get618SuperBrandInfo()
      break;
    case 2:
      // 签到
      if ($.encryptProjectId) {
        get618SuperBrandSign();
      } else {
        // 跳出任务
        $.taskStep = -1;
        document.write(JSON.stringify($))
      }
      break;
    case 3:
      // 获取活动信息
      get618SuperBrandInfo()
      break;
    case 4:
      // 抽奖
      if ($.self.count && ($.self.count >= 300)) {
        do618SuperBrandLottery()
      } else {
        // 跳出任务
        $.taskStep = -1;
        $.message = `金币不足，暂不抽奖~`
        document.write(JSON.stringify($))
      }
      break;
    default:
      $.to = ''; $.call.pop(); $.taskStep = 1; $.self.data = undefined
      document.write(JSON.stringify($))
      break;
  }
}

// 特物Z信息
function get618SuperBrandInfo () {
  $.call[$.call.length - 1] == 'get618SuperBrandInfo' || $.call.push('get618SuperBrandInfo')

  $.callback = 'Func.request'
  takeRequest('get618SuperBrandInfo');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('get618SuperBrandInfo', $.data)
  document.write(JSON.stringify($))
}

// 特物Z签到
function get618SuperBrandSign () {
  $.call[$.call.length - 1] == 'get618SuperBrandSign' || $.call.push('get618SuperBrandSign')

  if ($.activitySign1Info.ext.sign1.status === 1) {
    $.itemId = $.activitySign1Info.ext.sign1.itemId;
    $.message = `开始任务：${$.activitySign1Info.assignmentName},请稍后...`
    $.callback = 'Func.request'
    takeRequest('get618SuperBrandSign');
    return

    // next
    $.callback = ''
    $.call.pop()
    dealReturn('get618SuperBrandSign', $.data)
    document.write(JSON.stringify($))
  } else {
    $.call.pop()
    $.message = `今日已签到`
    document.write(JSON.stringify($))
  }
}

// 特物Z抽奖
function do618SuperBrandLottery () {
  $.call[$.call.length - 1] == 'do618SuperBrandLottery' || $.call.push('do618SuperBrandLottery')

  $.message = `签到抽奖中...`
  $.callback = 'Func.request'
  takeRequest('do618SuperBrandLottery');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('do618SuperBrandLottery', $.data)
  document.write(JSON.stringify($))
}


/**
 * 🔥 做 618 种草街 -限时
 */
function do618ZC () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['do618ZC']

  switch ($.taskStep++) {
    case 1:
      // 获取活动信息
      get618ZCInfo()
      break;
    case 2:
      // 查询任务列表
      if ($.projectId) {
        get618ZCTaskList();
      } else {
        // 跳出任务
        $.taskStep = -1;
        document.write(JSON.stringify($))
      }
      break;
    case 3:
      // 当天首登奖励
      do618ZCReward()
      break;
    case 4:
      // 做推荐任务
      do618ZCRecommendTask()
      break;
    case 5:
      // 做浏览内容任务
      $.self.count = 0
      do618ZCBrowseTask()
      break;
    case 6:
      // 抽奖
      do618ZCLottery()
      break;
    default:
      $.to = ''; $.call.pop(); $.taskStep = 1; $.self.data = undefined
      document.write(JSON.stringify($))
      break;
  }
}

// 获取种草活动页
function get618ZCInfo () {
  $.call[$.call.length - 1] == 'get618ZCInfo' || $.call.push('get618ZCInfo')

  $.callback = 'Func.request'
  takeRequest('get618ZCInfo');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('get618ZCInfo', $.data)
  document.write(JSON.stringify($))
}

// 当天首登有奖
function do618ZCReward () {
  $.call[$.call.length - 1] == 'do618ZCReward' || $.call.push('do618ZCReward')

  $.callback = 'Func.request'
  takeRequest('do618ZCReward');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('do618ZCReward', $.data)
  document.write(JSON.stringify($))
}

// 查询任务列表
function get618ZCTaskList () {
  $.call[$.call.length - 1] == 'get618ZCTaskList' || $.call.push('get618ZCTaskList')

  $.callback = 'Func.request'
  takeRequest('get618ZCTaskList');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('get618ZCTaskList', $.data)
  document.write(JSON.stringify($))
}

// 做浏览任务
function do618ZCBrowseTask () {
  $.call[$.call.length - 1] == 'do618ZCBrowseTask' || $.call.push('do618ZCBrowseTask')


  if ($.self.count >= 20 || $.self.current >= 20) {
    // 循环完成重新设置 call
    $.call.pop()
    $.next = 0 // 清空 Next.key
    $.self.count = 0
    $.message = `浏览任务已全都完成`
    document.write(JSON.stringify($))
    return
  }

  $.contentId = $.Utils.randomInt(10000000, 30000000)
  $.message = `做浏览内容任务，第${++$.self.count}次/20 等待完成...`
  $.callback = 'Func.request'
  takeRequest('do618ZCBrowseTask');
  return

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
}

// 做推荐任务
function do618ZCRecommendTask () {
  $.call[$.call.length - 1] == 'do618ZCRecommendTask' || $.call.push('do618ZCRecommendTask')

  // 利用队列取代循环
  $.oneActivityInfo = $.taskList.shift();
  if (!$.oneActivityInfo) {
    // 循环完成重新设置 call
    $.call.pop()
    $.next = 0 // 清空 Next.key
    $.message = `推荐任务已全都完成~`
    document.write(JSON.stringify($))
    return
  }

  // 获取浏览任务当前完成次数
  (typeof $.oneActivityInfo.current !== 'undefined')
    && ($.self.current = $.oneActivityInfo.current);

  // 做过的任务则跳过重新执行 浏览任务也跳过
  if ($.oneActivityInfo.status != 0 || !$.oneActivityInfo?.itemId) {
    document.write(JSON.stringify($))
    return
  }

  $.itemId = $.oneActivityInfo.itemId
  $.assignmentId = $.oneActivityInfo.assignmentId
  $.message = `做任务：${$.oneActivityInfo.title} 等待完成...`
  $.callback = 'Func.request'
  takeRequest('do618ZCRecommendTask');
  return

  // next
  $.callback = ''
  dealReturn('do618ZCRecommendTask', $.data)
  document.write(JSON.stringify($))
}

// 抽奖
function do618ZCLottery () {
  $.call[$.call.length - 1] == 'do618ZCLottery' || $.call.push('do618ZCLottery')

  $.callback = 'Func.request'
  takeRequest('do618ZCLottery');
  return

  // next
  $.callback = ''
  dealReturn('do618ZCLottery', $.data)
  document.write(JSON.stringify($))
}


/**
 * 🔥 做年货节抽签 - 限时
 */
function doNHSign () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['doNHSign']

  switch ($.taskStep++) {
    case 1:
      // 获取签到信息
      getNHSignInfo()
      break;
    case 2:
      // 查询交互信息
      $.encryptProjectId && queryInteractiveInfo($.encryptProjectId, "aceaceglqd20211215");
      break;
    case 3:
      // 做抽签任务
      let dateReg = new RegExp(String(new Date().getDate()))
      for (let v of $.self.data) {
        if (v.assignmentName.match(dateReg)) {
          doInteractiveAssignment($.encryptProjectId, v.encryptAssignmentId, "aceaceglqd20211215", 0);
        } else if (v.assignmentName == '签到') {
          $.self.item = v
        }
      }
      !document.body.innerText && doInteractiveAssignment($.encryptProjectId, $.self.item.encryptAssignmentId, "aceaceglqd20211215");
      break;
    default:
      $.to = ''; $.call.pop(); $.taskStep = 1; $.self.data = undefined
      document.write(JSON.stringify($))
      break;
  }
}

// 获取抽签活动页
function getNHSignInfo () {
  $.call[$.call.length - 1] == 'getNHSignInfo' || $.call.push('getNHSignInfo')

  $.callback = 'Func.request'
  takeRequest('getNHSignInfo');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('getNHSignInfo', $.data)
  document.write(JSON.stringify($))
}

// 查询交互信息
function queryInteractiveInfo (encryptProjectId, sourceCode) {
  $.call[$.call.length - 1] == 'queryInteractiveInfo' || $.call.push('queryInteractiveInfo')

  $.sourceCode = sourceCode
  $.callback = 'Func.request'
  takeRequest('queryInteractiveInfo');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('queryInteractiveInfo', $.data)
  document.write(JSON.stringify($))
}

// 做抽签任务
function doInteractiveAssignment (encryptProjectId, AssignmentId, sourceCode, type) {
  $.call[$.call.length - 1] == 'doInteractiveAssignment' || $.call.push('doInteractiveAssignment')

  $.sourceCode = sourceCode
  $.AssignmentId = AssignmentId
  $.taskType = type
  $.callback = 'Func.request'
  takeRequest('doInteractiveAssignment');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('doInteractiveAssignment', $.data)
  document.write(JSON.stringify($))
}


/**
 * 提交请求信息
 */
function takeRequest (type) {
  let { log, random } = $.signList?.shift() || {}
  let body = ``, url = ``;
  let myRequest = ``;
  let time = Date.now();
  switch (type) {
    case 'JingDongBean':
      url = 'https://api.m.jd.com/client.action'
      body = `functionId=signBeanIndex&appid=ld`
      myRequest = getRequest(url, body);
      break;
    case 'JingDongGetCash':
      url = 'https://api.m.jd.com/client.action?functionId=cash_sign&body=%7B%22remind%22%3A0%2C%22inviteCode%22%3A%22%22%2C%22type%22%3A0%2C%22breakReward%22%3A0%7D&client=apple&clientVersion=9.0.8&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&sign=7e2f8bcec13978a691567257af4fdce9&st=1596954745073&sv=111'
      myRequest = getRequest(url, body, 'GET');
      break;
    case 'JDSecKilling':
      url = 'https://api.m.jd.com/client.action'
      headers = {
        Origin: 'https://h5.m.jd.com'
      }
      body = `functionId=homePageV2&appid=SecKill2020`;
      myRequest = getRequest(url, body, 'POST', headers);
      break;
    case 'JDSecKillingNext':
      url = 'https://api.m.jd.com/client.action'
      headers = {
        Origin: 'https://h5.m.jd.com'
      }
      body = `functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22${$.taskType.projectId}%22%2C%22encryptAssignmentId%22%3A%22${$.taskType.taskId}%22%2C%22completionFlag%22%3Atrue%7D&client=wh5&appid=SecKill2020`;
      myRequest = getRequest(url, body, 'POST', headers);
      break;
    case 'getNHSignInfo':
      url = "https://prodev.m.jd.com/mall/active/fARfxZh3zdMqs4tkFBhpqaQKTGA/index.html";
      headers = {
        ContentType: 'null'
      }
      myRequest = getRequest(url, body, 'GET');
      break;
    case 'queryInteractiveInfo':
      url = `https://api.m.jd.com/client.action?functionId=queryInteractiveInfo&body=%7B%22encryptProjectId%22%3A%22${$.encryptProjectId}%22%2C%22sourceCode%22%3A%22${$.sourceCode}%22%7D&appid=publicUseApi&client=wh5&clientVersion=1.0.0&sid=&uuid=&area=22_2005_2009_36999&networkType=`;
      body = ``
      myRequest = getRequest(url, body);
      break;
    case 'doInteractiveAssignment':
      body = { "encryptProjectId": $.encryptProjectId, "encryptAssignmentId": $.AssignmentId, "sourceCode": $.sourceCode, "completionFlag": true }
      if ($.taskType === 0) { body = { "encryptProjectId": $.encryptProjectId, "encryptAssignmentId": $.AssignmentId, "sourceCode": $.sourceCode, "completionFlag": true, "ext": { "exchangeNum": 1 } } }
      url = `https://api.m.jd.com/client.action?functionId=doInteractiveAssignment&body=${JSON.stringify(body)}&appid=publicUseApi&client=wh5&clientVersion=1.0.0&sid=&uuid=&area=22_2005_2009_36999&networkType=`;
      url = encodeURI(url)
      body = ``
      myRequest = getRequest(url, body);
      break;
    case 'get618ZCInfo':
      url = "https://prodev.m.jd.com/mall/active/U18CGRp9tTnAkH1HfHnhBEWrfrr/index.html";
      headers = {
        ContentType: 'null'
      }
      myRequest = getRequest(url, body, 'GET');
      break;
    case 'do618ZCReward':
      body = { "projectId": $.projectId, "assignmentId": $.assignmentIdReward, "type": "16" }
      url = `https://api.m.jd.com/interactive_reward?functionId=interactive_reward&appid=contenth5_common&body=${encodeURIComponent(JSON.stringify(body))}&client=wh5&partner=ace1033463nrjs`;
      headers = {
        Origin: 'https://prodev.m.jd.com',
        Referer: 'https://prodev.m.jd.com'
      }
      myRequest = getRequest(url, null, 'POST', headers);
      break;
    case 'get618ZCTaskList':
      let arr = [{ "type": "18", "projectId": $.projectId, "assignmentId": $.assignmentIdBrowse, "doneHide": false }];
      for (const item of $.scanTaskCodes) {
        arr.push(
          { "type": "1", "projectId": $.projectId, "assignmentId": item, "doneHide": false }
        )
      }
      url = `https://api.m.jd.com/interactive_info?functionId=interactive_info&appid=contenth5_common&body=${encodeURIComponent(JSON.stringify(arr))}&client=wh5&partner=ace1033463nrjs`;
      headers = {
        Origin: 'https://prodev.m.jd.com',
        Referer: 'https://prodev.m.jd.com'
      }
      myRequest = getRequest(url, null, 'POST', headers);
      break;
    case 'do618ZCBrowseTask':
      body = { "projectId": $.projectId, "assignmentId": $.assignmentIdBrowse, "type": "18", "contentId": $.contentId, "contentType": "ugc" }
      url = `https://api.m.jd.com/interactive_accept?functionId=interactive_accept&appid=contenth5_common&body=${encodeURIComponent(JSON.stringify(body))}&client=wh5&partner=ace1033463nrjs`;
      headers = {
        Origin: 'https://prodev.m.jd.com',
        Referer: 'https://prodev.m.jd.com'
      }
      myRequest = getRequest(url, null, 'POST', headers);
      break;
    case 'do618ZCRecommendTask':
      body = { "projectId": $.projectId, "assignmentId": $.assignmentId, "type": "1", "itemId": $.itemId }
      url = `https://api.m.jd.com/interactive_done?functionId=interactive_done&appid=contenth5_common&body=${encodeURIComponent(JSON.stringify(body))}&client=wh5&partner=ace1033463nrjs`;
      headers = {
        Origin: 'https://prodev.m.jd.com',
        Referer: 'https://prodev.m.jd.com'
      }
      myRequest = getRequest(url, null, 'POST', headers);
      break;
    case 'do618ZCLottery':
      body = { "projectId": $.projectId, "assignmentId": $.assignmentIdLottery, "type": "17" }
      url = `https://api.m.jd.com/interactive_done?functionId=interactive_done&appid=contenth5_common&body=${encodeURIComponent(JSON.stringify(body))}&client=wh5&partner=ace1033463nrjs`;
      headers = {
        Origin: 'https://prodev.m.jd.com',
        Referer: 'https://prodev.m.jd.com'
      }
      myRequest = getRequest(url, body, 'POST', headers);
      break;
    case `qryViewkitCallbackResult`:
      url = `https://api.m.jd.com/client.action?functionId=qryViewkitCallbackResult`
      body = `appid=wh5&area=5_274_49707_49973&body={"dataSource":"babelInteractive","method":"customDoInteractiveAssignmentForBabel","reqParams":"{\\"itemId\\":\\"${$.itemId}\\",\\"encryptProjectId\\":\\"${$.projectId}\\",\\"encryptAssignmentId\\":\\"${$.assignmentIdBrowse}\\"}"}&build=167283&client=apple&clientVersion=9.1.0`;
      myRequest = getRequest(url, body);
      break;
    case 'get618SuperBrandInfo':
      url = `https://api.m.jd.com/api?functionId=showSecondFloorSignInfo&appid=ProductZ4Brand&client=wh5&t=${time}&body=${encodeURIComponent(`{"source":"sign"}`)}`;
      headers = {
        Origin: 'https://prodev.m.jd.com',
        Referer: 'https://prodev.m.jd.com'
      }
      myRequest = getRequest(url, body, 'POST', headers);
      break;
    case 'get618SuperBrandSign':
      url = `https://api.m.jd.com/api?functionId=superBrandDoTask&appid=ProductZ4Brand&client=wh5&t=${time}&body=${encodeURIComponent(`{"source":"sign","activityId":${$.activityId},"encryptProjectId":"${$.encryptProjectId}","encryptAssignmentId":"${$.activitySign1Info.encryptAssignmentId}","assignmentType":5,"itemId":"${$.itemId}","actionType":0}`)}`;
      headers = {
        Origin: 'https://prodev.m.jd.com',
        Referer: 'https://prodev.m.jd.com'
      }
      myRequest = getRequest(url, body, 'POST', headers);
      break;
    case 'do618SuperBrandLottery':
      url = `https://api.m.jd.com/api?functionId=superBrandTaskLottery&appid=ProductZ4Brand&client=wh5&t=${time}&body=${encodeURIComponent(`{"source":"sign","activityId":${$.activityId},"encryptProjectId":"${$.encryptProjectId}","encryptAssignmentId":"D2bsHLsAAPxoUhfKtHU3TvMpWrw"}`)}`;
      headers = {
        Origin: 'https://prodev.m.jd.com',
        Referer: 'https://prodev.m.jd.com'
      }
      myRequest = getRequest(url, body, 'POST', headers);
      break;
    case 'doBeanSign':
      url = 'https://api.m.jd.com/client.action'
      body = `functionId=signBeanIndex&appid=ld`
      myRequest = getRequest(url, body);
      break;
    case 'doBeanBrowseTask':
      url = `https://api.m.jd.com/`;
      body = `functionId=beanHomeTask&body=${encodeURIComponent(JSON.stringify({ "awardFlag": false, "skuId": `${$.itemId}`, "source": "feeds", "type": '1' }))}&appid=ld&client=apple&area=5_274_49707_49973&build=167283&clientVersion=9.1.0`
      myRequest = getRequest(url, body);
      break;
    case 'getBeanBrowseTaskAward':
      url = `https://api.m.jd.com/`;
      body = `functionId=beanHomeTask&body=${encodeURIComponent(JSON.stringify({ "awardFlag": true, "source": "feeds" }))}&appid=ld&client=apple&area=5_274_49707_49973&build=167283&clientVersion=9.1.0`
      myRequest = getRequest(url, body);
      break;
    case 'getBeanTaskList':
      url = `https://api.m.jd.com/client.action?functionId=beanTaskList&body=${encodeURIComponent(JSON.stringify({ "viewChannel": "myjd" }))}&appid=ld&client=apple&area=5_274_49707_49973&build=167283&clientVersion=9.1.0`;
      myRequest = getRequest(url, body);
      break;
    case 'doBeanTask':
      url = `https://api.m.jd.com/client.action?functionId=beanDoTask&body=${encodeURIComponent(JSON.stringify({ "actionType": 1, "taskToken": `${$.taskToken}` }))}&appid=ld&client=apple&area=5_274_49707_49973&build=167283&clientVersion=9.1.0`;
      myRequest = getRequest(url, body);
      break;
    case 'doBeanWaitTask':
      url = `https://api.m.jd.com/client.action?functionId=beanDoTask&body=${encodeURIComponent(JSON.stringify({ "actionType": 0, "taskToken": `${$.taskToken}` }))}&appid=ld&client=apple&area=5_274_49707_49973&build=167283&clientVersion=9.1.0`;
      myRequest = getRequest(url, body);
      break;
    case 'getLzdzCK':
      url = `https://lzdz1-isv.isvjcloud.com/dingzhi/customized/common/activity?activityId=${$.activityId}&shareUuid=${encodeURIComponent($.authorCode)}`;
      myRequest = getRequest(url, body, 'GET');
      break;
    case 'getLzdzToken':
      url = `https://api.m.jd.com/client.action?functionId=isvObfuscator`;
      body = `body=%7B%22url%22%3A%20%22https%3A//lzkj-isv.isvjcloud.com%22%2C%20%22id%22%3A%20%22%22%7D&uuid=hjudwgohxzVu96krv&client=apple&clientVersion=9.4.0&st=1620476162000&sv=111&sign=f9d1b7e3b943b6a136d54fe4f892af05`
      myRequest = getRequest(url, body, 'POST');
      break;
    case 'getLzdzPin':
      url = `https://lzdz1-isv.isvjcloud.com/customer/getMyPing`;
      body = `userId=${$.activityShopId}&token=${$.LzdzToken}&fromType=APP`
      headers = {
        Host: 'lzdz1-isv.isvjcloud.com',
        Origin: 'https://lzdz1-isv.isvjcloud.com',
        Referer: `https://lzdz1-isv.isvjcloud.com/dingzhi/customized/common/activity?activityId=${$.activityId}&shareUuid=${encodeURIComponent($.authorCode)}`,
      }
      myRequest = getRequest(url, body, 'POST', headers);
      break;
    case 'getLzdzLogWithAD':
      url = `https://lzdz1-isv.isvjcloud.com/common/accessLogWithAD`;
      body = `venderId=${$.activityShopId}&code=99&pin=${encodeURIComponent($.secretPin)}&activityId=${$.activityId}&pageUrl=${$.activityUrl}&subType=app&adSource=FLP`
      headers = {
        Host: 'lzdz1-isv.isvjcloud.com',
        Origin: 'https://lzdz1-isv.isvjcloud.com',
        Referer: `https://lzdz1-isv.isvjcloud.com/dingzhi/customized/common/activity?activityId=${$.activityId}&shareUuid=${encodeURIComponent($.authorCode)}`,
      }
      myRequest = getRequest(url, body, 'POST', headers);
      break;
    case 'getLzdzInfo':
      url = `https://lzdz1-isv.isvjcloud.com/dingzhi/linkgame/activity/content`;
      body = `activityId=${$.activityId}&pin=${encodeURIComponent($.secretPin)}&pinImg=&nick=${encodeURIComponent($.nickname)}&cjyxPin=&cjhyPin=&shareUuid=${encodeURIComponent($.authorCode)}`
      headers = {
        Host: 'zdz1-isv.isvjcloud.com',
        Origin: 'https://lzdz1-isv.isvjcloud.com',
        Referer: `https://lzdz1-isv.isvjcloud.com/dingzhi/customized/common/activity?activityId=${$.activityId}&shareUuid=${encodeURIComponent($.authorCode)}`,
      }
      myRequest = getRequest(url, body, 'POST', headers);
      break;
    case 'doLzdzTaskFollowShop':
      url = `https://lzdz1-isv.isvjcloud.com/dingzhi/opencard/follow/shop`;
      body = `activityId=${$.activityId}&pin=${encodeURIComponent($.secretPin)}`
      headers = {
        Host: 'zdz1-isv.isvjcloud.com',
        Origin: 'https://lzdz1-isv.isvjcloud.com',
        Referer: `https://lzdz1-isv.isvjcloud.com/dingzhi/customized/common/activity?activityId=${$.activityId}&shareUuid=${encodeURIComponent($.authorCode)}`,
      }
      myRequest = getRequest(url, body, 'POST', headers);
      break;
    case 'getLzdzOpenCardInfo':
      url = `https://lzdz1-isv.isvjcloud.com/dingzhi/linkgame/task/opencard/info`;
      body = `pin=${encodeURIComponent($.secretPin)}&activityId=${$.activityId}`
      headers = {
        Host: 'zdz1-isv.isvjcloud.com',
        Origin: 'https://lzdz1-isv.isvjcloud.com',
        Referer: `https://lzdz1-isv.isvjcloud.com/dingzhi/customized/common/activity?activityId=${$.activityId}&shareUuid=${encodeURIComponent($.authorCode)}`,
      }
      myRequest = getRequest(url, body, 'POST', headers);
      break;
    case 'getShopOpenCardInfo':
      url = `https://api.m.jd.com/client.action?functionId=getShopOpenCardInfo&appid=jd_shop_member&body=%7B%22venderId%22%3A%22${$.venderId}%22%2C%22channel%22%3A401%7D&client=H5&clientVersion=9.2.0`;
      myRequest = getRequest(url, body, 'GET');
      break;
    case 'request_algo':
      body = {
        'version': '3.0',
        'fp': $.algo.fp,
        'appId': $.algo.appId.toString(),
        'timestamp': $.algo.time,
        'platform': 'web',
        'expandParams': ''
      };
      headers = {
        'Host': 'cactus.jd.com',
        'accept': 'application/json'
      }
      url = `https://cactus.jd.com/request_algo?g_ty=ajax`;
      myRequest = getRequest(url, body, 'GET');
      break;
    case 'bindWithVender':
      body = {
        "venderId": `${$.venderId}`,
        "bindByVerifyCodeFlag": 1,
        "registerExtend": {},
        "writeChildFlag": 0,
        "channel": 7008
      };
      $.shopactivityId && (body.activityId = $.shopactivityId);
      $.h5st = $.Utils.H5ST._getH5st(body)
      url = `https://api.m.jd.com/client.action?functionId=bindWithVender&appid=jd_shop_member&body=${encodeURIComponent(JSON.stringify(body))}&client=H5&clientVersion=9.2.0&uuid=88888&h5st=${$.h5st}`;
      body = ''
      myRequest = getRequest(url, body, 'GET');
      break;
    case 'getPlantBeanInfo':
      url = `https://api.m.jd.com/client.action?functionId=plantBeanIndex&body=${encodeURIComponent(JSON.stringify({ "monitor_source": "plant_app_plant_index", "monitor_refer": "", "version": "9.2.4.1" }))}&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2`;
      myRequest = getRequest(url, body);
      break;
    case 'getPlantBeanShopTaskList':
      url = `https://api.m.jd.com/client.action?functionId=shopTaskList&body=${encodeURIComponent(JSON.stringify({ "monitor_source": "plant_app_plant_index", "monitor_refer": "plant_shopList", "version": "9.2.4.1" }))}&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2`;
      myRequest = getRequest(url, body, 'GET');
      break;
    case 'getPlantBeanProductTaskList':
      url = `https://api.m.jd.com/client.action?functionId=productTaskList&body=${encodeURIComponent(JSON.stringify({ "monitor_source": "plant_app_plant_index", "monitor_refer": "productTaskList", "version": "9.2.4.1" }))}&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2`;
      myRequest = getRequest(url, body, 'GET');
      break;
    case 'getPlantBeanChannelTaskList':
      url = `https://api.m.jd.com/client.action?functionId=plantChannelTaskList&body=${encodeURIComponent(JSON.stringify({ "monitor_source": "plant_app_plant_index", "monitor_refer": "plantChannelTaskList", "version": "9.2.4.1" }))}&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2`;
      myRequest = getRequest(url, body, 'GET');
      break;
    case 'getPlantBeanStealFriendList':
      url = `https://api.m.jd.com/client.action?functionId=plantFriendList&body=${encodeURIComponent(JSON.stringify({ "monitor_source": "plant_app_plant_index", "monitor_refer": "plantFriendList", "pageNum": '1', "version": "9.2.4.1" }))}&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2`;
      myRequest = getRequest(url, body, 'GET');
      break;
    case 'receiveNutrients':
      url = `https://api.m.jd.com/client.action?functionId=receiveNutrients&body=${encodeURIComponent(JSON.stringify({ "roundId": $.currentRoundId, "monitor_refer": "plant_receiveNutrients" }))}&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2`;
      myRequest = getRequest(url, body);
      break;
    case 'doPlantBeanOhterTask':
      url = `https://api.m.jd.com/client.action?functionId=receiveNutrientsTask&body=${encodeURIComponent(JSON.stringify({ "awardType": $.oneTask.taskType + '', "monitor_refer": "receiveNutrientsTask", "monitor_source": "plant_app_plant_index", "version": "9.2.4.1" }))}&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2`;
      myRequest = getRequest(url, body, 'GET');
      break;
    case 'doPlantBeanBrowseTask':
      url = `https://api.m.jd.com/client.action?functionId=shopNutrientsTask&body=${encodeURIComponent(JSON.stringify({ "monitor_refer": "plant_shopNutrientsTask", "shopId": $.oneShop.shopId, "shopTaskId": $.oneShop.shopTaskId, "monitor_source": "plant_app_plant_index", "version": "9.2.4.1" }))}&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2`;
      myRequest = getRequest(url, body, 'GET');
      break;
    case 'doPlantBeanProductTask':
      url = `https://api.m.jd.com/client.action?functionId=productNutrientsTask&body=${encodeURIComponent(JSON.stringify({ "monitor_refer": "plant_productNutrientsTask", "skuId": $.oneProduct[0].skuId, "productTaskId": $.oneProduct[0].productTaskId, "monitor_source": "plant_app_plant_index", "version": "9.2.4.1" }))}&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2`;
      myRequest = getRequest(url, body, 'GET');
      break;
    case 'doPlantBeanChannelTask':
      url = `https://api.m.jd.com/client.action?functionId=plantChannelNutrientsTask&body=${encodeURIComponent(JSON.stringify({ "monitor_refer": "plant_plantChannelNutrientsTask", "channelId": $.oneChannel.channelId, "channelTaskId": $.oneChannel.channelTaskId, "monitor_source": "plant_app_plant_index", "version": "9.2.4.1" }))}&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2`;
      myRequest = getRequest(url, body, 'GET');
      break;
    case 'doPlantBeanCollect':
      url = `https://api.m.jd.com/client.action?functionId=cultureBean&body=${encodeURIComponent(JSON.stringify({ "monitor_refer": "", "roundId": $.currentRoundId, "nutrientsType": $.oneTask.nutrientsType, "monitor_source": "plant_app_plant_index", "version": "9.2.4.1" }))}&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2`;
      myRequest = getRequest(url, body);
      break;
    case 'stealFriendNutrients':
      url = `https://api.m.jd.com/client.action?functionId=collectUserNutr&body=${encodeURIComponent(JSON.stringify({ "monitor_refer": "collectUserNutr", "roundId": $.currentRoundId, "paradiseUuid": $.oneTask.paradiseUuid, "monitor_source": "plant_app_plant_index", "version": "9.2.4.1" }))}&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2`;
      myRequest = getRequest(url, body);
      break;
    case 'getReward':
      url = `https://api.m.jd.com/client.action?functionId=receivedBean&body=${encodeURIComponent(JSON.stringify({ "monitor_refer": "receivedBean", "roundId": $.lastRoundId, "monitor_source": "plant_app_plant_index", "version": "9.2.4.1" }))}&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2`;
      myRequest = getRequest(url, body);
      break;
    default:
      $.error = `takeRequest 错误${type}`
      console.log(`错误${type}`);
  }

  $.request = myRequest
  document.write(JSON.stringify($))
}

/**
 * 获取请求信息
 * @param {string} type 请求的接口类型
 * @param {string} body 请求body
 * @param {string} method 请求方式
 * @returns 
 */
function getRequest (url, body = {}, method = 'POST', header = {}) {
  // if (type === 'listTask' || type === 'acceptTask') {
  //   url = `https://ms.jr.jd.com/gw/generic/hy/h5/m/${type}`;
  // }
  // if (method === 'GET') {
  //   url = `${JD_API_HOST}${type}&appid=wh5&body=${encodeURIComponent(body)}`
  // }
  const headers = {
    'Accept': `application/json, text/plain, */*`,
    'Origin': header.Origin || `https://h5.m.jd.com`,
    'Accept-Encoding': `gzip, deflate, br`,
    "Cache-Control": "no-cache",
    'Cookie': $.cookie,
    'Content-Type': header.ContentType || `application/x-www-form-urlencoded`,
    'Host': `api.m.jd.com`,
    'Connection': `keep-alive`,
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    'User-Agent': $.UA || "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
    'Referer': header.Referer || `https://home.m.jd.com/myJd/newhome.action`,
    'Accept-Language': `zh-cn`
  };
  return { url: url, method: method, headers: headers, body: body };
}

// 组织请求 body
// function getPostBody (type) {
//   let taskBody = '';
//   if (type === 'helpInvite') {
//     taskBody = `functionId=funny_collectScore&body=${JSON.stringify({ "taskId": 2, "inviteId": $.inviteId, "actionType": 1, "ss": getBody() })}&client=wh5&clientVersion=1.0.0`
//   } else if (type === 'pkHelp') {
//     taskBody = `functionId=zoo_pk_assistGroup&body=${JSON.stringify({ "confirmFlag": 1, "inviteId": $.pkInviteId, "ss": getBody() })}&client=wh5&clientVersion=1.0.0`;
//   } else if (type === 'zoo_collectProduceScore') {
//     taskBody = `functionId=zoo_collectProduceScore&body=${JSON.stringify({ "ss": getBody() })}&client=wh5&clientVersion=1.0.0`;
//   } else if (type === 'zoo_getWelfareScore') {
//     taskBody = `functionId=zoo_getWelfareScore&body=${JSON.stringify({ "type": 2, "currentScence": $.currentScence, "ss": getBody() })}&client=wh5&clientVersion=1.0.0`;
//   } else if (type === 'add_car') {
//     taskBody = `functionId=funny_collectScore&body=${JSON.stringify({ "taskId": $.taskId, "taskToken": $.taskToken, "actionType": 1, "ss": getBody() })}&client=wh5&clientVersion=1.0.0`
//   } else {
//     taskBody = `functionId=${type}&body=${JSON.stringify({ "taskId": $.oneTask.taskId, "actionType": 1, "taskToken": $.oneActivityInfo.taskToken, "ss": getBody() })}&client=wh5&clientVersion=1.0.0`
//   }
//   return taskBody
// }


// 处理返回信息
function dealReturn (type, data) {
  if (!data) $.message = '接口返回数据为空!';
  let json = $.Utils.stringify(data)
  let setCookie = data['Set-Cookie'] || data['set-cookie'] || ''

  switch (type) {
    case 'doBeanSign':
    case 'JingDongBean':
      if (data.code == 3) {
        $.error = '京东商城-京豆: 失败, 原因: Cookie失效‼️'
      } else if (json.match(/跳转至拼图/)) {
        $.message = "京东商城-京豆: 失败, 需要拼图验证 ⚠️"
      } else if (json.match(/\"status\":\"?1\"?/)) {
        if (json.match(/dailyAward/)) {
          $.message = "京东商城-京豆: 成功, 明细: " + data.data?.dailyAward?.beanAward?.beanCount + "京豆 🐶"
        } else if (json.match(/continuityAward/)) {
          $.message = "京东商城-京豆: 成功, 明细: " + data.data?.continuityAward?.beanAward?.beanCount + "京豆 🐶"
        } else if (json.match(/新人签到/)) {
          const quantity = json.match(/beanCount\":\"(\d+)\".+今天/)
          $.message = "京东商城-京豆: 成功, 明细: " + (quantity ? quantity[1] : "无") + "京豆 🐶"
        } else {
          $.message = "京东商城-京豆: 成功, 明细: 无京豆 🐶"
        }
      } else {
        if (json.match(/(已签到|新人签到)/)) {
          $.message = "京东商城-京豆: 失败, 原因: 已签过 ⚠️"
        } else if (json.match(/人数较多|S101/)) {
          $.message = "京东商城-京豆: 失败, 签到人数较多 ⚠️"
        } else {
          $.message = "京东商城-京豆: 失败, 原因: 未知 ⚠️"
        }
      }
      break;
    case 'JingDongGetCash':
      if (data.data?.success && data.data?.result) {
        $.message = `京东商城-现金: 成功, 明细: ${data.data?.result?.signCash || `无`}现金 💰`
      } else {
        if (json.match(/\"bizCode\":201|已经签过/)) {
          $.message = "京东商城-现金: 失败, 原因: 已签过 ⚠️"
        } else if (json.match(/\"code\":300|退出登录/)) {
          $.message = "京东商城-现金: 失败, 原因: Cookie失效‼️"
        } else {
          $.message = "京东商城-现金: 失败, 原因: 未知 ⚠️"
        }
      }
      break;
    case 'JDSecKilling':
      if (data.code == 203 || data.code == 3 || data.code == 101) {
        $.message = `京东秒杀-红包: 失败, 原因: Cookie失效‼️`;
      } else if (data.result?.projectId && data.result?.taskId) {
        $.taskType = {
          projectId: data.result.projectId,
          taskId: data.result.taskId
        }
      } else {
        $.message = `京东秒杀-红包: 失败, 暂无有效活动 ⚠️`;
      }
      break
    case 'JDSecKillingNext':
      if (data.code == 0 && data.subCode == 0) {
        const qt = json.match(/"discount":(\d.*?),/)[2];
        $.message = `京东秒杀-红包: 成功, 明细: ${qt || `无`}红包 🧧`;
      } else {
        $.message = `京东秒杀-红包: 失败, ${data.subCode == 103 ? `原因: 已领取` : data.msg ? data.msg : `原因: 未知`} ⚠️`;
      }
      break
    case 'getNHSignInfo':
      try {
        $.encryptProjectId = data.match(/"projectId":"(.*?)"/)[1];
        $.message = `京东年货-抽签: 成功, 明细: 测试成功`
      } catch (e) {
        $.encryptProjectId = null
        $.message = "京东年货-抽签: 失败, 明细: 无法获取活动ID ⚠️"
      }
      $.data = {}
      break
    case 'queryInteractiveInfo':
      if (data.code === '0') {
        $.self.data = data.assignmentList
        $.message = '获取交互信息成功'
      } else {
        $.message = '获取交互信息失败'
      }
      break
    case 'doInteractiveAssignment':
      if (data.subCode === '0') {
        $.message = `京东年货-抽签: 成功, 明细: ${data.rewardsInfo?.successRewards['10'] && data.rewardsInfo?.successRewards['10'][0].rewardName + '--优惠券--' + data.rewardsInfo?.successRewards['10'][0].usageThreshold + '-' + data.rewardsInfo?.successRewards['10'][0].quota ||
          data.rewardsInfo?.successRewards['12'] && data.rewardsInfo?.successRewards['12'][0].rewardName + '--支付券--' + data.rewardsInfo?.successRewards['12'][0].usageThreshold + '-' + data.rewardsInfo?.successRewards['12'][0].quota ||
          data.rewardsInfo?.successRewards['11'] && data.rewardsInfo?.successRewards['11'][0].rewardName + '--红包--' + data.rewardsInfo?.successRewards['11'][0].usageThreshold + '-' + data.rewardsInfo?.successRewards['11'][0].quota ||
          JSON.stringify(data.rewardsInfo?.successRewards)}`;
      } else {
        $.message = '京东年货-抽签: 失败, 明细: ' + data.msg
      }
      break
    case 'get618ZCInfo':
      try {
        $.projectId = data.match(/"projectId":"(.*?)"/)[1];
        $.assignmentIdBrowse = data.match(/"normalTabColor":"#FFFFFF","assignmentId":"(.*?)","activeTabColor"/)[1];
        $.assignmentIdLottery = data.match(/"writeColor":"","assignmentId":"(.*?)","defaultYellowGoodsPic"/)[1];
        $.assignmentIdReward = data.match(/"taskCode":"(.*?)"/)[1];
        $.scanTaskCodes = String(data.match(/"scanTaskCodes":"(.*?)"/)[1]).split(',');
        $.message = `京东618-种草街: 成功, 已获取活动信息`
      } catch (e) {
        $.projectId = null
        $.message = "京东618-种草街: 失败, 无法获取活动信息 ⚠️"
      }
      $.data = {}
      break
    case 'get618ZCTaskList':
      if (data.code == 0 && data.data) {
        $.taskList = data.data;
        $.message = `获取任务列表成功`
      } else {
        $.taskStep = -1
        $.message = `获取任务列表失败`
      }
      break;
    case 'do618ZCRecommendTask':
      if (data.code == 0 && data.data) {
        $.message = `完成任务：${data.data.rewardMsg}`
      } else if (data.code == 0 && data.message) {
        $.message = `完成任务：${data.message}`
      } else {
        $.message = `任务失败：原因${JSON.stringify(data)}`
      }
      break;
    case 'do618ZCReward':
      if (data.code == 0) {
        $.message = `当天首登有奖：${data.message || JSON.stringify(data)}`
      } else {
        $.message = `当天首登有奖：出错!原因${SON.stringify(data)}`
      }
      break;
    case 'do618ZCBrowseTask':
      $.callbackInfo = data
      break;
    case 'do618ZCLottery':
      if (data.code == 0 && data.data?.rewardMsg) {
        $.message = `抽奖成功：${data.data?.rewardMsg}`
      } else if (data.code == 0 && data.message) {
        $.call.pop() // 结束抽奖
        $.message = `抽奖失败：${data.message}`
      } else {
        $.call.pop() // 结束抽奖
        $.message = `抽奖失败：${JSON.stringify(data)}`
      }
      break;
    case 'qryViewkitCallbackResult':
      if (data.code == 0 && data.msg == 'query success!') {
        $.message = `完成任务：浏览成功`
      } else {
        $.message = `任务失败：原因${JSON.stringify(data)}`
      }
      break;
    case 'get618SuperBrandInfo':
      if (data.code == 0 && data.data?.result) {
        let result = data.data.result
        if (result.activityBaseInfo) {
          $.activityId = result.activityBaseInfo.activityId
          $.activityName = result.activityBaseInfo.activityName
          $.self.count = result.activityUserInfo.userStarNum;
          $.encryptProjectId = result.activityBaseInfo.encryptProjectId;
          $.activitySign1Info = result.activitySign1Info
        }
        $.message = `京东618-特物Z: 成功, 已获取活动信息\n当前活动：${$.activityName}  ${$.activityId}`
      } else {
        $.encryptProjectId = null
        $.message = "京东618-特物Z: 失败, 无法获取活动信息 ⚠️"
      }
      break;
    case 'get618SuperBrandSign':
      if (data.code == 0 && data.data?.bizCode == 0) {
        $.message = `签到成功：${data.data.bizMsg}`
      } else if (data.code == 0) {
        $.message = `签到失败：${data.data.bizMsg}`
      } else {
        $.message = `发生错误：${JSON.stringify(data)}`
      }
      break;
    case 'do618SuperBrandLottery':
      if (data.code == 0 && data.data?.bizCode == 'TK000') {
        if (data.data?.result?.userAwardInfo) {
          $.message = `抽奖成功：获得${data.data.result.userAwardInfo.awardName || data.data.result.userAwardInfo.beanNum + '京豆'}`
        } else {
          $.message = `抽奖抽奖：获得空气`
        }
      } else if (data.code == 0) {
        $.message = `抽奖失败：${data.data.bizMsg}`
      } else {
        $.message = `发生错误：${JSON.stringify(data)}`
      }
      break;
    case 'doBeanBrowseTask':
      if (data.code == 0 && data.data) {
        $.message = `浏览成功：进度${data.data.taskProgress}/${data.data.taskThreshold}`
        if (data.data.taskProgress === data.data.taskThreshold) { $.call.pop(); }
      } else if (data.code == 0 && data.errorCode === 'HT201') {
        $.call.pop()
        $.message = `浏览失败：原因${JSON.stringify(data)}`
      } else {
        $.call.pop()
        $.message = `发生错误：原因${JSON.stringify(data)}`
      }
      break;
    case 'getBeanBrowseTaskAward':
      if (data.data) {
        $.message = `领奖成功：获得 ${data.data.beanNum} 个京豆`
      } else {
        $.message = `领奖失败：原因${data.errorMessage}`
      }
      break;
    case 'getBeanTaskList':
      if (data.code == 0 && data.data) {
        $.taskList = data.data.taskInfos
        $.message = `当前等级：${data.data.curLevel}\n下一级可领取：${data.data.nextLevelBeanNum || 0}京豆`
      } else {
        $.message = `获取失败：原因${JSON.stringify(data)}`
      }
      break;
    case 'doBeanTask':
      if (data.code == 0 && data.data.bizCode === "0") {
        $.message = `完成任务：获得+${data.data.score}成长值`
      } else {
        $.message = `任务失败：原因${JSON.stringify(data)}`
      }
      break;
    case 'doBeanWaitTask':
      if (data.code == 0 && data.data.bizCode === "0") {
        $.message = `完成任务：${data.data.bizMsg}`
      } else {
        $.message = `任务失败：原因${JSON.stringify(data)}`
      }
      break;
    case 'getLzdzCK':
      $.data = {}
      if (setCookie) {
        const newCookieItem = setCookie.match(/(JSESSIONID|LZ_TOKEN_KEY|LZ_TOKEN_VALUE)=(.*?);/ig)
        $.cookie += ';'
        for (const item of newCookieItem) {
          $.cookie += item
        }
        $.message = `test1 - ${$.cookie}`
      } else {
        $.message = `发生错误：原因${JSON.stringify(data)}`
      }
      break;
    case 'getLzdzToken':
      if (data.code == '0') {
        $.LzdzToken = data.token;
        $.message = `test2 - ${$.LzdzToken}`
      } else {
        $.message = `发生错误：原因${JSON.stringify(data)}`
      }
      break;
    case 'getLzdzPin':
      if (data.result && data.data) {
        $.nickname = data.data.nickname;
        $.secretPin = data.data.secretPin;
        $.cookie = `${$.cookie};AUTH_C_USER=${data.data.secretPin}`;
        $.message = `获取 Pin 码成功`
      } else {
        $.message = `获取 Pin 码失败：原因${JSON.stringify(data)}`
      }
      break;
    case 'getLzdzLogWithAD':
      $.data = {}
      if (setCookie) {
        const newCookieItem = setCookie.match(/(JSESSIONID|LZ_TOKEN_KEY|LZ_TOKEN_VALUE)=(.*?);/ig)
        $.cookie += ';'
        for (const item of newCookieItem) {
          $.cookie += item
        }
        $.message = `test3 - ${$.cookie}`
        $.self.data = true
      } else {
        $.self.data = false
        $.message = `发生错误：原因${JSON.stringify(data)}`
      }
      break;
    case 'getLzdzInfo':
      if (data.result && !data.data?.hasEnd) {
        $.self.data = true
        $.message = `获取活动信息成功：${data.data?.activity["name"]}`
      } else {
        $.self.data = false
        $.message = `活动已经结束!`
      }
      break;
    case 'doLzdzTaskFollowShop':
      if (data.data) {
        $.message = `test4 - ${JSON.stringify(data)}`
      } else {
        $.message = `发生错误：原因${JSON.stringify(data)}`
      }
      break;
    case 'getLzdzOpenCardInfo':
      if (data.data) {
        $.taskList = data.data.followShopList;
        $.message = `test5 - ${JSON.stringify($.taskList)}`
      } else {
        $.message = `发生错误：原因${JSON.stringify(data)}`
      }
      break;
    case 'getShopOpenCardInfo':
      if (data.success && data.result) {
        // shopactivityId 存在代表入会有礼
        $.shopactivityId = data.result.interestsRuleList && data.result.interestsRuleList[0]?.interestsInfo?.activityId || ''
        $.self.success = true
        $.message = `开始入会：${data.result.shopMemberCardInfo?.venderCardName}`
      } else {
        $.self.success = false
        $.message = `发生错误：原因${JSON.stringify(data)}`
      }
      break;
    case 'bindWithVender':
      if (data.success && data.result) {
        $.message = data.message
        for (let i of data.result.giftInfo?.giftList) {
          $.message += `\n获得:${i.discountString}${i.prizeName},${i.secondLineDesc}`
        }
      } else {
        $.message = `发生错误：原因${JSON.stringify(data)}`
      }
      break;
    case 'request_algo':
      if (data.data && data.data.result) {
        $.algo.tk = data.data.result.tk
        $.algo.rd = data.data.result.algo.match(/rd='(.*)'/)[1]
        $.algo.enc = data.data.result.algo.match(/algo\.(.*)\(/)[1]
      } else {
        $.message = `发生错误：原因${JSON.stringify(data)}`
      }
      break;
    case 'getPlantBeanInfo':
      if (data.errorCode == 'PB101') {
        $.self.success = false
        $.message = '活动太火爆了，还是去买买买吧！'
        return
      }
      if (data && data.code === '0' && data.data) {
        let num
        for (let i = 0; i < data.data.roundList?.length; i++) {
          if (data.data.roundList[i].roundState === "2") {
            num = i
            break
          }
        }

        $.self.success = true
        $.helpCode = $.Utils.getParam(data.data.jwordShareInfo?.shareUrl, 'plantUuid')
        $.roundList = data.data.roundList;
        $.taskList = data.data.taskList;
        $.collectList = $.roundList[num].bubbleInfos
        $.currentRoundId = $.roundList[num].roundId;//本期的roundId
        $.lastRoundId = $.roundList[num - 1].roundId;//上期的roundId
        $.awardState = $.roundList[num - 1].awardState;
        $.message = `你的种豆得豆助力码：\n${$.helpCode}\n`
        $.message += `【上期时间】${$.roundList[num - 1].dateDesc}\n`;
        $.message += `【上期成长值】${$.roundList[num - 1].growth}`;
      }
      break;
    case 'getPlantBeanShopTaskList':
      if (data.code == 0 && data.data) {
        $.shopList = $.Utils.formatToArray(data.data.goodShopList).concat($.Utils.formatToArray(data.data.moreShopList))
      } else {
        $.shopList = []
      }
      break;
    case 'getPlantBeanProductTaskList':
      if (data.code == 0 && data.data) {
        $.productList = $.Utils.formatToArray(data.data.productInfoList)
      } else {
        $.productList = []
      }
      break;
    case 'getPlantBeanChannelTaskList':
      if (data.code == 0 && data.data) {
        $.channelList = [...$.Utils.formatToArray(data.data.goodChannelList), ...$.Utils.formatToArray(data.data.normalChannelList)]
      } else {
        $.channelList = []
      }
      break;
    case 'getPlantBeanStealFriendList':
      if (data.code == 0 && data.data) {
        $.stealFriendInfo = data.data
      }
      break;
    case 'receiveNutrients':
      if (data.data?.nutrients) {
        $.message = `定时收取：${JSON.stringify(data.data.nutrients)}`
      } else {
        $.message = `收取失败：原因` + JSON.stringify(data.errorMessage || data)
      }
      break;
    case 'doPlantBeanOhterTask':
      if (data.code == 0 && data.data) {
        $.message = `任务完成：获得 ${JSON.stringify(data.data.nutrNum)} 营养液`
      } else {
        $.message = '任务完成：原因' + JSON.stringify(data)
      }
      break;
    case 'doPlantBeanBrowseTask':
      if (data.code == 0 && data.data) {
        if (data.data.nutrState === '1') {
          $.self.count--
          $.message = `浏览完成：进度 ${$.oneTask.totalNum - $.self.count}/${$.oneTask.totalNum}`
        } else if (data.data.nutrState === '2') {
          $.message = `浏览完成：但营养液走丢了，继续下一个`
        } else {
          $.message = '发生错误：原因' + JSON.stringify(data)
        }
      } else {
        $.message = '发生错误：原因' + JSON.stringify(data)
      }
      break;
    case 'doPlantBeanProductTask':
      if (data.code == 0 && data.data) {
        if (data.data.nutrState === '1') {
          $.self.count--
          $.message = `关注成功：进度 ${$.oneTask.totalNum - $.self.count}/${$.oneTask.totalNum}`
        } else if (data.data.nutrState === '2') {
          $.message = `关注成功：但营养液走丢了，继续下一个`
        } else {
          $.message = '发生错误：原因' + JSON.stringify(data)
        }
      } else {
        $.message = '发生错误：原因' + JSON.stringify(data)
      }
      break;
    case 'doPlantBeanChannelTask':
      if (data.code == 0 && data.data) {
        if (data.data.nutrState === '1') {
          $.self.count--
          $.message = `关注成功：进度 ${$.oneTask.totalNum - $.self.count}/${$.oneTask.totalNum}`
        } else if (data.data.nutrState === '2') {
          $.message = `关注成功：但营养液走丢了，继续下一个`
        } else {
          $.message = '发生错误：原因' + JSON.stringify(data)
        }
      } else {
        $.message = '发生错误：原因' + JSON.stringify(data)
      }
      break;
    case 'doPlantBeanCollect':
      if (data.code == 0 && data.data) {
        $.message = `收取成功：成长值为 ${data.data.growth}`
      } else {
        $.message = '发生错误：原因' + JSON.stringify(data)
      }
      break;
    case 'stealFriendNutrients':
      if (data.code == 0 && data.data) {
        if (data.data.collectNutrRewards) {
          $.message = `偷取成功：从${$.oneTask.plantNickName}获得${data.data.collectNutrRewards}营养液`
        } else {
          $.message = `偷取失败：原因` + JSON.stringify(data.data)
        }
      } else {
        $.message = '发生错误：原因' + JSON.stringify(data)
      }
      break;
    case 'getReward':
      if (data.code == 0 && data.data) {
        $.message = `领取成功：获得 ${data.data.awardBean} 京豆🥔`
      } else {
        $.message = '发生错误：原因' + JSON.stringify(data)
      }
      break;
    default:
      console.log(`未判断的异常${type} `);
  }
  $.data = {}
}
/**
 * 工具类对象 - 写成函数封装形式，是想利用函数申明提前
 * @returns object
 */
function Utils () {
  return {
    randomString (e) {
      e = e || 32;
      let t = "abcdef0123456789", a = t.length, n = "";
      for (let i = 0; i < e; i++)
        n += t.charAt(Math.floor(Math.random() * a));
      return n
    },
    stringify (data) {
      try {
        if (typeof JSON.stringify(data) == "string") {
          return JSON.stringify(data);
        }
      } catch (e) {
        console.log(e);
        return data;
      }
    },
    randomInt (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
    formatToArray (p = []) {
      return Array.isArray(p) ? p : [p]
    },
    filterArray (arr = []) {
      return arr.filter(v => !!v)
    },
    getParam (url, key) {
      const reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i")
      const r = url.match(reg)
      if (r != null) return decodeURIComponent(r[2]);
      return null;
    },
    H5ST: {
      _getFp (t) {
        let e = "0123456789";
        let a = 13;
        let i = '';
        for (; a--;)
          i += e[Math.random() * e.length | 0];
        return (i + t).slice(0, 16)
      },
      // 此处需要 modules
      _getH5st (body) {
        let y = (function _getKey (tk, fp, ts, ai, algo) {
          let str = `${tk}${fp}${ts}${ai}${$.algo.rd}`;
          console.log(str);
          return algo[$.algo.enc](str, tk)
        })($.algo.tk, $.algo.fp, $.algo.timestamp, $.algo.appId, CryptoJS).toString(CryptoJS.enc.Hex)
        console.log(y);
        let s = ''
        for (let key of Object.keys(body)) {
          key === 'body'
            ? (s += `${key}:${CryptoJS.SHA256(body[key]).toString(CryptoJS.enc.Hex)}&`)
            : (s += `${key}:${body[key]}&`)
        }
        s = s.slice(0, -1)
        console.log(s);
        s = CryptoJS.HmacSHA256(s, y).toString(CryptoJS.enc.Hex)
        return encodeURIComponent(`${$.algo.timestamp};${$.algo.fp};${$.algo.appId.toString()};${$.algo.tk};${s};3.0;${$.algo.time.toString()}`)
      }

    }
  }
}

Date.prototype.Format = function (fmt) {
  var e,
    n = this,
    d = fmt,
    l = {
      "M+": n.getMonth() + 1,
      "d+": n.getDate(),
      "D+": n.getDate(),
      "h+": n.getHours(),
      "H+": n.getHours(),
      "m+": n.getMinutes(),
      "s+": n.getSeconds(),
      "w+": n.getDay(),
      "q+": Math.floor((n.getMonth() + 3) / 3),
      "S+": n.getMilliseconds()
    };
  /(y+)/i.test(d) && (d = d.replace(RegExp.$1, "".concat(n.getFullYear()).substr(4 - RegExp.$1.length)));
  for (var k in l) {
    if (new RegExp("(".concat(k, ")")).test(d)) {
      var t, a = "S+" === k ? "000" : "00";
      d = d.replace(RegExp.$1, 1 == RegExp.$1.length ? l[k] : ("".concat(a) + l[k]).substr("".concat(l[k]).length))
    }
  }
  return d;
}

