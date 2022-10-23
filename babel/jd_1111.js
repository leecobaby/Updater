/**
 * name: 京东-1111
 * author: @leeco
 * apply: shortcuts
 * activity: https://wbbny.m.jd.com/babelDiy/Zeus/2fUope8TDN3dUJfNzQswkBLc7uE8/index.html
 * tips: Only for learning and communication, strictly prohibited for commercial use, please delete within 24 hours
 * 使用修改请说明来源
 */

// 到指令里运行需要注释掉
// const $ = {}; $.call = 'test'

// $.inviteList = [];
// $.pkInviteList = [];
// $.secretpInfo = {};
// $.innerPkInviteList = [];

$.Utils = Utils()

let JD_API_HOST = `https://api.m.jd.com/client.action?functionId=`

/** 下方放 call 文本，来控制函数执行 **/

/** 下方放 next 文本，来控制逻辑执行 **/

//   form 来源   to 目标   callback 回调   call 调用
//   当回调有值则执行回调，没有则去往目标，没有目标则去往来源

//   func.xxx -> logicHandler($) -> func.http -> logicHandler($) -> func.xxx
//   回调完执行 next，视情况来清空 callback
//   error 为错误信息，会终止当前账号在指令中的运行，直接运行输出log开始下一个账号或结束
//   Next.key: 只会在执行 callback 的时候，才会产生 Next.key；如果没有执行 callback，逻辑完成时则会清空 Next.key；如果在函数内调用其他函数，而两个函数都会执行 callback，那么需要设 $.next = 0，这样才能主动清空 Next.key，但要记住用完就设为 1。

/**
 * 初始化
 */
function init() {
  // 获取助力数据
  // $.inviteList = $.aid.inviteList
  // $.pkHelpList = $.aid.pkHelpList

  // 处理助力码
  if ($.inviteList) {
    $.inviteList = Array.isArray($.inviteList) ? $.inviteList : [$.inviteList]
    $.inviteList = $.inviteList.filter((v) => v !== '')
  } else {
    $.inviteList = []
  }
  // 处理组队码
  if ($.pkHelpList) {
    $.pkHelpList = Array.isArray($.pkHelpList) ? $.pkHelpList : [$.pkHelpList]
    $.pkHelpList = $.pkHelpList.filter((v) => v !== '')
  } else {
    $.pkHelpList = []
  }
  if (new Date().getHours() >= 9 && new Date().getHours() <= 13) {
    $.pkHelpList.push('-HE-pbNob1yTsk9qTd4r0L7vzOL3QmxIKuqyOHpHexKQK969qM2Iru8b')
  }
  // 处理膨胀码
  if ($.pkExpandList) {
    $.pkExpandList = Array.isArray($.pkExpandList) ? $.pkExpandList : [$.pkExpandList]
    $.pkExpandList = $.pkExpandList.filter((v) => v !== '')
  } else {
    $.pkExpandList = []
  }
  $.pkExpandList.push('PKASTT0195L6r47PBTNYCtIMjDX0CTdWmYaRzTQjeQOc')

  // 处理沸腾之夜助力码
  if ($.partyHelpList) {
    $.partyHelpList = Array.isArray($.partyHelpList) ? $.partyHelpList : [$.partyHelpList]
    $.partyHelpList = $.partyHelpList.filter((v) => v !== '')
  } else {
    $.partyHelpList = []
  }
  if (new Date().getHours() >= 8 && new Date().getHours() <= 20) {
    $.pkHelpList.push('-G2_WFL8jJ2ehXtlbdayCJLb')
  }

  // 自变量
  ;($.self = {}), ($.self.count = 0), ($.self.count2 = 1)
  // 任务流程初始化
  $.taskStep = 1
  // 大牌店铺列表初始化
  $.shopList = [
    'yDZdb6fw5JugKFJVEkPk88Z9kHn',
    '2fHSe8cnuGhpjGdtonqJhHYy3tdS',
    '4YF6HKhW6QyecKzvKXP8jw6hLvCv',
    '46xBcwAAs7SrtRgnxnmFqWu9wGhY'
  ]
  // 丢骰子店铺列表初始化
  $.diceShopList = [
    '11029076',
    '10449451',
    '950884',
    '740107',
    '172517',
    '779870',
    '10319518',
    '11631867',
    '30478',
    '1000365883',
    '732696',
    '11517924',
    '734316',
    '587934',
    '10045379',
    '1000133563',
    '11566049',
    '823590',
    '10117997',
    '11459805',
    '54866',
    '10193620',
    '857116',
    '929059',
    '11394479',
    '642850',
    '803181',
    '944814',
    '91207',
    '156784',
    '208700',
    '621174',
    '10031439',
    '10149891',
    '183179',
    '106633',
    '1000225308',
    '733072',
    '130162',
    '10115320',
    '10549423',
    '782853',
    '10294175',
    '953454',
    '724490',
    '10269575',
    '989359',
    '1000072661',
    '175147',
    '836735',
    '11618770',
    '10632623',
    '86155',
    '57885',
    '927596',
    '213793',
    '11643391',
    '714081',
    '11615282',
    '658000',
    '10049280',
    '660862',
    '210266',
    '798546',
    '763029',
    '210731',
    '11333097',
    '665686',
    '10103614',
    '731848',
    '1000093453',
    '10228557',
    '125357',
    '121317',
    '102094',
    '10106644',
    '10134836',
    '979907',
    '82092',
    '1000076326',
    '33245',
    '664743',
    '10203538',
    '212733',
    '10395173',
    '860851',
    '11280938',
    '67322',
    '830062',
    '11459415',
    '10310009',
    '1000081681',
    '138065',
    '1000005331',
    '11436272',
    '67500',
    '10213817',
    '10377129'
  ]

  // 生成随机 UA UUID
  $.uuid = $.Utils.randomString(40)
  $.UA = `jdapp;iPhone;10.2.0;13.1.2;${$.uuid};M/5.0;network/wifi;ADID/;model/iPhone8,1;addressid/2308460611;appBuild/167853;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;`

  $.message = `本指令作为自动化方案开源分享，并不保证他带来的任何副作用，任何副作用请自行负责，如不同意请停止使用！`
  document.write(JSON.stringify($))
}

/**
 * 云端推送提示
 */
function cloudTip() {
  $.error = `指令已运行完毕！入会任务和下单任务不负责做哦！\n其他功能和任务正在开发中，上线将自动推送到指令中，无需任何操作~`
  document.write(JSON.stringify($))
}

/**
 * 任务日期提示
 */
function update() {
  $.message = `本地任务和开发是同步的，开发过程中难免存在bug，如果运行时卡住，请过段时间再试请理解~`
  document.write(JSON.stringify($))
}

// 获取第一次进活动页奖励 - 并没啥用
function promote_getMainMsgPopUp() {
  $.callback = 'Func.request'
  takePostRequest('promote_getMainMsgPopUp')
  return

  // next
  $.callback = ''
  document.write(JSON.stringify($))
}

// 获取活动大厅信息
function promote_getHomeData() {
  $.callback = 'Func.request'
  takePostRequest('promote_getHomeData')
  return

  // next
  $.callback = ''
  dealReturn('promote_getHomeData', $.data)
  document.write(JSON.stringify($))
}

// 获取任务列表
function promote_getTaskDetail() {
  $.call = Array.isArray($.call) ? $.call : [$.call]
  $.call[$.call.length - 1] == 'promote_getTaskDetail' || $.call.push('promote_getTaskDetail')
  $.callback = 'Func.request'
  takePostRequest('promote_getTaskDetail')
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('promote_getTaskDetail', $.data)
  document.write(JSON.stringify($))
}

// 收金币
function promote_collectAutoScore() {
  $.callback = 'Func.request'
  takePostRequest('promote_collectAutoScore')
  return

  // next
  $.callback = ''
  dealReturn('promote_collectAutoScore', $.data)
  document.write(JSON.stringify($))
}

// 每日签到
function promote_sign() {
  $.callback = 'Func.request'
  takePostRequest('promote_sign')
  return

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
}

// 获取助力池数据
function getHelpCode() {
  $.callback = 'Func.request'
  $.modules = 1 // 引入模块
  takePostRequest('getHelpCode')
  return

  // next
  $.callback = ''
  dealReturn('getHelpCode', $.data)
  document.write(JSON.stringify($))
}

// 好友助力
function help() {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['help']

  $.inviteId = $.inviteList.shift()
  if (!$.setHelp || !$.inviteId || $.helpMax) {
    // 循环完成重新设置 to,call
    ;($.to = ''), $.call.pop()
    !$.setHelp && ($.message = `你已关闭助力，就不做助力任务拉~`)
    document.write(JSON.stringify($))
    return
  }

  // if ($.friendHelpMax) {
  //   document.write(JSON.stringify($))
  //   return
  // }

  $.message = `${$.UserName}去助力，对方助力码:\n${$.inviteId}`
  $.callback = 'Func.request'
  takePostRequest('help')
  return

  // next
  $.callback = ''
  dealReturn('help', $.data)
  document.write(JSON.stringify($))
}

// 组队竞猜
function pkHelp() {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['pkHelp']

  $.pkHelpId = $.pkHelpList.shift()
  if (!$.setHelp || !$.pkHelpId) {
    // 循环完成重新设置 to,call
    ;($.to = ''), $.call.pop()
    !$.setHelp && ($.message = `你已关闭助力，就不做入队任务拉~`)
    document.write(JSON.stringify($))
    return
  }
  $.message = `${$.UserName}去入队，对方组队码:\n${$.pkHelpId}`
  $.callback = 'Func.request'
  takePostRequest('promote_pk_joinGroup')
  return

  // next
  $.callback = ''
  dealReturn('pkHelp', $.data)
  document.write(JSON.stringify($))
}

function promote_pk_getHomeData() {
  $.callback = 'Func.request'
  takePostRequest('promote_pk_getHomeData')
  return

  // next
  $.callback = ''
  dealReturn('promote_pk_getHomeData', $.data)
  document.write(JSON.stringify($))
}

// pk膨胀
function promote_pk_collectPkExpandScore() {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['promote_pk_collectPkExpandScore']
  if (new Date().getHours() >= 20 && new Date().getHours() <= 22) {
    $.pkExpandId = $.pkExpandList.shift()
    if (!$.pkExpandId) {
      // 循环完成重新设置 to,call
      ;($.to = ''), $.call.pop()
      document.write(JSON.stringify($))
      return
    }
    $.callback = 'Func.request'
    takePostRequest('promote_pk_collectPkExpandScore')
    return

    //next
    $.callback = ''
    dealReturn('promote_pk_collectPkExpandScore', $.data)
    document.write(JSON.stringify($))
  } else {
    ;($.to = ''), $.call.pop()
    document.write(JSON.stringify($))
  }
}

// 多次做任务控制器
function doTaskController() {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['doTaskController']

  switch ($.taskStep++) {
    case 1:
      doTask()
      break
    case 2:
      promote_getTaskDetail()
      break
    case 3:
      doTask()
      break
    case 3:
      promote_getTaskDetail()
      break
    case 4:
      doTask()
      break
    case 5:
      promote_getTaskDetail()
      break
    case 6:
      doTask()
      break
    case 7:
      promote_getTaskDetail()
      break
    case 8:
      doTask()
      break
    default:
      ;($.to = ''), $.call.pop()
      document.write(JSON.stringify($))
      break
  }
}

// 做主任务
function doTask() {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call[$.call.length - 1] == 'doTask' || $.call.push('doTask')

  // 利用队列取代循环
  $.oneTask = $.taskList.shift()
  $.taskId = $.oneTask?.taskId
  if (!$.oneTask) {
    // 循环完成重新设置 to,call
    $.call.pop()
    $.message = `任务已全都完成~`
    document.write(JSON.stringify($))
    return
  }

  if ([1, 3, 7, 9, 26].includes($.oneTask.taskType) && $.oneTask.status === 1) {
    $.activityInfoList =
      $.oneTask.shoppingActivityVos ||
      $.oneTask.brandMemberVos ||
      $.oneTask.followShopVo ||
      $.oneTask.browseShopVo
    $.activityInfoList.time = 30 // 最大次数

    oneActivityInfo()
  }

  // 加购物车
  if ($.oneTask.taskType === 2 && $.oneTask.status === 1 && !$.oneTask.taskName.includes('逛逛')) {
    promote_getFeedDetail()
  } else if (
    $.oneTask.taskType === 2 &&
    $.oneTask.status === 1 &&
    $.oneTask.taskName.includes('逛逛')
  ) {
    $.activityInfoList = $.oneTask.productInfoVos
    $.activityInfoList.time = 30
    oneActivityInfo()
  } else if ($.oneTask.taskType === 5 && $.oneTask.status === 1) {
    promote_getFeedDetail()
  } else if ($.oneTask.taskType === 0 && ($.oneTask.status === 1 || $.oneTask.status === 3)) {
    oneTaskHandle()
  }

  !document.body.innerText && document.write(JSON.stringify($))
}

// 领累计任务奖励
function promote_getBadgeAward() {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['promote_getBadgeAward']

  // 利用队列取代循环
  $.oneTask = $.badgeAwardList.shift()
  $.awardToken = $.oneTask?.awardToken
  if (!$.oneTask) {
    // 循环完成重新设置 to,call
    ;($.to = ''), $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  if ($.oneTask.status === 4) {
    document.write(JSON.stringify($))
    return
  }

  $.callback = 'Func.request'
  takePostRequest('promote_getBadgeAward')
  return

  // next
  $.callback = ''
  dealReturn('promote_getBadgeAward', $.data)
  document.write(JSON.stringify($))
}

// taskType = 0 的任务
function oneTaskHandle() {
  // 嵌套调用里面用数组形式 push
  $.call[$.call.length - 1] == 'oneTaskHandle' || $.call.push('oneTaskHandle')
  // $.taskId = $.oneTask.taskId
  $.taskToken = $.oneTask.simpleRecordInfoVo.taskToken
  $.message = `做任务：${$.oneTask.taskName} 等待完成...`
  $.callback = 'Func.request'
  takePostRequest('oneTaskHandle')
  return

  // next
  $.callback = ''
  dealReturn('oneTaskHandle', $.data)
  // 去往 doTask
  $.call.pop()
  document.write(JSON.stringify($))
}

//  处理任务列表单类型任务
function oneActivityInfo() {
  // 循环逻辑单独设置 to,call  嵌套调用里面用数组形式 push
  $.to = 'Func.logicHandler'
  $.call[$.call.length - 1] == 'oneActivityInfo' || $.call.push('oneActivityInfo')

  // 利用队列取代循环
  $.oneActivityInfo = $.activityInfoList.shift()
  if (!$.oneActivityInfo || --$.activityInfoList.time <= 0) {
    // 循环完成重新设置 call
    $.call.pop()
    $.next = 0 // 清空 Next.key
    document.write(JSON.stringify($))
    return
  }

  // 做过的任务则跳过重新执行 oneActivityInfo()
  if ($.oneActivityInfo?.status !== 1 || !$.oneActivityInfo?.taskToken) {
    document.write(JSON.stringify($))
    return
  }

  $.taskToken = $.oneActivityInfo.taskToken
  $.callbackInfo = {}
  $.message = `做任务：${
    $.oneActivityInfo.skuName ||
    $.oneActivityInfo.taskName ||
    $.oneActivityInfo.title ||
    $.oneActivityInfo.shopName
  } 等待完成...`
  $.callback = 'Func.request'
  takePostRequest('promote_collectScore')
  return

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
}

// 领取奖励
function callbackResult(type) {
  let { log, random } = $.signList?.shift() || {}
  let url = JD_API_HOST + type + '&client=wh5'
  // riskParam 风险参数暂时为空，后期可能需要补上
  let body = `body={"dataSource":"newshortAward","method":"getTaskAward","reqParams":"{\\"taskToken\\":\\"${$.taskToken}\\"}","sdkVersion":"1.0.0","clientLanguage":"zh","onlyTimeId":"","riskParam":{"platform":"3","orgType":"2","openId":"-1","pageClickKey":"Babel_VKCoupon","eid":"","fp":"-1","shshshfp":"","shshshfpa":"","shshshfpb":"","childActivityUrl":"","userArea":"-1","client":"","clientVersion":"","uuid":"","osVersion":"","brand":"","model":"","networkType":"","jda":"-1"}}`
  let method = 'POST'
  let headers = {
    Origin: `https://prodev.m.jd.com`,
    Cookie: $.cookie,
    Connection: `keep-alive`,
    Accept: `application/json, text/plain, */*`,
    'Accept-Encoding': `gzip, deflate, br`,
    Host: `api.m.jd.com`,
    'Content-Type': `application/x-www-form-urlencoded`,
    'User-Agent':
      $.UA ||
      'jdapp;iPhone;10.0.6;14.4;c67093f5dd58d33fc5305cdc61e46a9741e05c5b;network/4g;model/iPhone12,1;addressid/2377723269;appBuild/167724;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
    'Accept-Language': `zh-CN`,
    Referer: 'https://prodev.m.jd.com/'
  }
  $.request = { url, method, headers, body }
  document.write(JSON.stringify($))
}

// 处理浏览商品任务信息
function promote_getFeedDetail() {
  // 嵌套调用里面用数组形式 push
  $.to = 'Func.logicHandler'
  $.call.push('promote_getFeedDetail')

  $.feedDetailInfo = {}
  $.callback = 'Func.request'
  $.message = `做任务：${$.oneTask.taskName} 等待完成...`
  takePostRequest('promote_getFeedDetail')
  return

  // next
  $.callback = ''
  dealReturn('promote_getFeedDetail', $.data)
  $.productList = $.feedDetailInfo.productInfoVos || $.feedDetailInfo.browseShopVo
  $.needTime = Number($.feedDetailInfo.maxTimes) - Number($.feedDetailInfo.times)
  $.call.pop()
  $.next = 0 // 衔接下一个函数前，重置 next 防止获取 next 失败
  browseProducts()
}

// 做浏览商品任务
function browseProducts() {
  // 循环逻辑单独设置 to,call  嵌套调用里面用数组形式 push
  $.to = 'Func.logicHandler'
  $.call[$.call.length - 1] == 'browseProducts' || $.call.push('browseProducts')

  $.proCarInfo = $.productList.shift()
  if ($.needTime <= 0) {
    // 循环完成重新设置 to,call
    $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  if ($.proCarInfo.status !== 1) {
    document.write(JSON.stringify($))
    return
  }

  $.taskToken = $.proCarInfo.taskToken
  $.needTime--
  $.message = `浏览商品：${$.proCarInfo.skuName || $.proCarInfo.shopName}`
  $.callback = 'Func.request'
  takePostRequest('browseProducts')
  return

  // next
  $.callback = ''
  dealReturn('browseProducts', $.data)
  document.write(JSON.stringify($))
}

// 打卡升级
function promote_raise() {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['promote_raise']

  if ($.raiseStatus) {
    // 循环完成重新设置 to,call
    ;($.to = ''), $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  $.callback = 'Func.request'
  takePostRequest('promote_raise')
  return

  // next
  $.callback = ''
  dealReturn('promote_raise', $.data)
  document.write(JSON.stringify($))
}

// 获取京东金融任务列表
function jdjrTaskDetail() {
  $.callback = 'Func.request'
  takePostRequest('jdjrTaskDetail')
  return

  // next
  $.callback = ''
  dealReturn('jdjrTaskDetail', $.data)
  document.write(JSON.stringify($))
}

// 做京东金融主任务
function jdjrDoTask() {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['jdjrDoTask']

  // 利用队列取代循环
  $.oneTask = $.jdjrTaskList.shift()
  $.missionId = $.oneTask?.missionId
  if (!$.oneTask) {
    // 循环完成重新设置 to,call
    ;($.to = ''), $.call.pop()
    $.wait = 1
    $.message = '浏览任务已全都完成~'
    document.write(JSON.stringify($))
    return
  }

  if ($.oneTask.complete++ <= $.oneTask.total) {
    document.write(JSON.stringify($))
    return
  }

  $.message = `做任务：${$.oneTask.title} 等待完成...`
  $.callback = 'Func.request'
  takePostRequest('jdjrDoTask')
  return

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
}

// 做大牌店铺任务
function doShopTask() {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['doShopTask']

  // 利用队列取代循环
  $.oneShop = $.shopList.shift()
  if (!$.oneShop) {
    // 循环完成重新设置 to,call
    ;($.to = ''), $.call.pop()
    $.message = `任务已全都完成~`
    document.write(JSON.stringify($))
    return
  }

  // 重置抽签碎片 id
  $.fragmentId = 1
  // 获取单店铺 appId
  getAppId()
}

// 获取单店铺 appId
function getAppId() {
  $.call[$.call.length - 1] == 'getAppId' || $.call.push('getAppId')
  $.callback = 'Func.request'
  takePostRequest('getAppId')
  return

  // next
  $.callback = ''
  dealReturn('getAppId', $.data)
  $.call.pop()
  $.next = 0 // 衔接下一个函数前，重置 next 防止获取 next 失败
  getShopHomeData()
}

// 获取店铺任务列表
function getShopHomeData() {
  $.call[$.call.length - 1] == 'getShopHomeData' || $.call.push('getShopHomeData')
  $.callback = 'Func.request'
  takePostRequest('getShopHomeData')
  return

  // next
  $.callback = ''
  dealReturn('getShopHomeData', $.data)
  $.call.pop()
  $.next = 0 // 衔接下一个函数前，重置 next 防止获取 next 失败
  doOneShopTask()
}

// 做单店铺任务
function doOneShopTask() {
  $.call[$.call.length - 1] == 'doOneShopTask' || $.call.push('doOneShopTask')

  // 利用队列取代循环
  $.oneTask = $.taskList.shift()
  $.taskId = $.oneTask?.taskId
  if (!$.oneTask) {
    // 循环完成重新设置 call
    $.call.pop()
    // 通过 push 衔接下一个函数
    $.call.push('doShopLottery')
    document.write(JSON.stringify($))
    return
  }

  // 做过的任务和特殊类型则跳过重新执行 oneTask()
  if (
    $.oneTask?.status !== 1 ||
    $.oneTask?.taskType === 21 ||
    $.oneTask?.taskType === 28 ||
    $.oneTask?.taskType === 15
  ) {
    document.write(JSON.stringify($))
    return
  }

  let taskInfo =
    $.oneTask.simpleRecordInfoVo || $.oneTask.followShopVo || $.oneTask.shoppingActivityVos
  $.taskToken = taskInfo.taskToken || taskInfo[0].taskToken
  $.message = `做任务：${$.oneTask.taskName} 等待完成...`
  $.callback = 'Func.request'
  takePostRequest('doOneShopTask')
  return

  // next
  $.callback = ''
  dealReturn('doOneShopTask', $.data)
  document.write(JSON.stringify($))
}

// 单店铺抽奖
function doShopLottery() {
  $.call[$.call.length - 1] == 'doShopLottery' || $.call.push('doShopLottery')

  $.fragmentId++
  $.callback = 'Func.request'
  takePostRequest('doShopLottery')
  return

  // next
  $.callback = ''
  // 如果抽奖机会用光，则 pop() 逻辑写在 dealReturn 利于维护
  dealReturn('doShopLottery', $.data)
  document.write(JSON.stringify($))
}

// 沸腾之夜大厅信息
function getPartyHomeData() {
  $.callback = 'Func.request'
  takePostRequest('getPartyHomeData')
  return

  // next
  $.callback = ''
  dealReturn('getPartyHomeData', $.data)
  document.write(JSON.stringify($))
}

// 沸腾之夜助力
function helpPartyCode() {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['helpPartyCode']

  $.inviteId = $.partyHelpList.shift()
  if (!$.inviteId || $.partyHelpMax) {
    // 循环完成重新设置 to,call
    ;($.to = ''), $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  $.message = `${$.UserName}去助力，对方沸腾之夜助力码:\n${$.inviteId}`
  $.callback = 'Func.request'
  takePostRequest('helpPartyCode')
  return

  // next
  $.callback = ''
  dealReturn('helpPartyCode', $.data)
  document.write(JSON.stringify($))
}

// 做丢骰子任务
function doDiceTask() {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['doDiceTask']

  // 利用队列取代循环
  $.oneShop = $.diceShopList.shift()
  $.shopId = $.oneShop
  // 为了让指令不出现崩溃，拆分店铺任务 10 个一组
  if (!$.oneShop || $.self.count2++ == 10) {
    // 循环完成重新设置 to,call
    ;($.to = ''), $.call.pop(), ($.self.count2 = 1)
    $.message = `已完成所有丢骰子任务~`
    document.write(JSON.stringify($))
    return
  }

  doDiceTaskController()
}

// 做丢骰子任务控制器
function doDiceTaskController() {
  $.call[$.call.length - 1] == 'doDiceTaskController' || $.call.push('doDiceTaskController')

  switch ($.taskStep++) {
    case 1:
      // 获取丢骰子任务 projectId
      jm_promotion_queryPromotionInfoByShopId()
      break
    case 2:
      // 获取单店铺丢骰子任务列表
      jm_marketing_maininfo()
      break
    case 3:
      // 做单店铺每日抽奖
      jm_hidden_tryDoTask()
      break
    case 4:
      // 做单店铺丢骰子任务
      doOneDiceTask()
      break
    case 5:
      // 做丢骰子
      doPlayDice()
      break
    default:
      $.call.pop(), ($.taskStep = 1)
      $.message = `已完成第${++$.self.count}家丢骰子任务~`
      document.write(JSON.stringify($))
      break
  }
}

// 获取丢骰子任务 projectId
function jm_promotion_queryPromotionInfoByShopId() {
  $.call[$.call.length - 1] == 'jm_promotion_queryPromotionInfoByShopId' ||
    $.call.push('jm_promotion_queryPromotionInfoByShopId')
  $.callback = 'Func.request'
  takePostRequest('jm_promotion_queryPromotionInfoByShopId')
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('jm_promotion_queryPromotionInfoByShopId', $.data)
  document.write(JSON.stringify($))
}

// 获取单店铺丢骰子任务列表
function jm_marketing_maininfo() {
  $.call[$.call.length - 1] == 'jm_marketing_maininfo' || $.call.push('jm_marketing_maininfo')
  $.callback = 'Func.request'
  takePostRequest('jm_marketing_maininfo')
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('jm_marketing_maininfo', $.data)
  document.write(JSON.stringify($))
}

// 做单店铺每日抽奖
function jm_hidden_tryDoTask() {
  $.call[$.call.length - 1] == 'jm_hidden_tryDoTask' || $.call.push('jm_hidden_tryDoTask')
  $.callback = 'Func.request'
  takePostRequest('jm_hidden_tryDoTask')
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('jm_hidden_tryDoTask', $.data)
  document.write(JSON.stringify($))
}

// 做单店铺丢骰子任务
function doOneDiceTask() {
  $.call[$.call.length - 1] == 'doOneDiceTask' || $.call.push('doOneDiceTask')

  // 利用队列取代循环
  $.oneTask = $.taskList.shift()
  $.taskId = $.oneTask?.id
  $.taskToken = $.oneTask?.token
  if (!$.oneTask) {
    // 循环完成重新设置 call
    $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  if ([8].includes($.oneTask.type) && $.oneTask.totalCount - $.oneTask.finishCount === 1) {
    doOneDiceTask8()
  }
  !document.body.innerText && document.write(JSON.stringify($))
}

// 做类型 8 的丢骰子任务
function doOneDiceTask8() {
  $.call[$.call.length - 1] == 'doOneDiceTask8' || $.call.push('doOneDiceTask8')
  $.callback = 'Func.request'
  $.message = `做任务：${$.oneTask.name}`
  takePostRequest('doOneDiceTask8_1')
  return

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
}

// 玩丢筛子
function doPlayDice() {
  $.call[$.call.length - 1] == 'doPlayDice' || $.call.push('doPlayDice')
  $.callback = 'Func.request'
  takePostRequest('doPlayDice')
  return

  // next
  $.callback = ''
  // 结束循环写在 dealReturn
  dealReturn('doPlayDice', $.data)
  document.write(JSON.stringify($))
}

// 提交请求信息
function takePostRequest(type) {
  let { log, random } = $.signList?.shift() || { log: '', random: '' }
  let body = ``
  let myRequest = ``
  let otherUrl = ``
  let url = ``
  let headers = ``
  switch (type) {
    case 'promote_getMainMsgPopUp':
      body = `functionId=promote_getMainMsgPopUp&body={"channel":"1"}&client=m&clientVersion=1.0.0`
      myRequest = getPostRequest(`promote_getMainMsgPopUp`, body)
      break
    case 'promote_getHomeData':
      body = `functionId=promote_getHomeData&body={}&client=m&appid=signed_wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`promote_getHomeData`, body)
      break
    case 'promote_getTaskDetail':
      body = `functionId=promote_getTaskDetail&body={}&client=m&appid=signed_wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`promote_getTaskDetail`, body)
      break
    case 'promote_collectAutoScore':
      body = `functionId=promote_collectAutoScore&body={"ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"RAhomePageh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}"}&client=m&appid=signed_wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`promote_collectAutoScore`, body)
      break
    case 'promote_getFeedDetail':
      body = `functionId=promote_getFeedDetail&body={"taskId":"${$.taskId}"}&client=m&appid=signed_wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`promote_getFeedDetail`, body)
      break
    case 'promote_collectScore':
      body = `functionId=promote_collectScore&body={"taskId":${$.taskId},"taskToken":"${$.taskToken}","ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"RAhomePageh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}","actionType":1}&client=m&appid=signed_wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`promote_collectScore`, body)
      break
    case 'promote_getBadgeAward':
      body = `functionId=promote_getBadgeAward&body={"awardToken":"${$.awardToken}"}&client=m&appid=signed_wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`promote_getBadgeAward`, body)
      break
    case 'help':
      body = `functionId=promote_collectScore&body={"ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"RAhomePageh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}","inviteId":"${$.inviteId}"}&client=m&appid=signed_wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`promote_collectScore`, body)
      break
    case 'promote_pk_getHomeData':
      body = `functionId=promote_pk_getHomeData&body={}&client=m&appid=signed_wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`promote_pk_getHomeData`, body)
      break
    case 'promote_pk_collectPkExpandScore':
      body = `functionId=promote_pk_collectPkExpandScore&body={"ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"RAhomePageh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}","inviteId":"${$.pkExpandId}"}&client=m&appid=signed_wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`promote_pk_collectPkExpandScore`, body)
      break
    case 'promote_pk_joinGroup':
      body = `functionId=promote_collectScore&body={"confirmFlag":"1","ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"RAhomePageh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}","inviteId":"${$.pkHelpId}"}&client=m&appid=signed_wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`promote_pk_joinGroup`, body)
      break
    case 'zoo_pk_collectScore':
      body = getPostBody(type)
      //console.log(body);
      myRequest = getPostRequest(`zoo_pk_collectScore`, body)
      break
    case 'oneTaskHandle':
      body = `functionId=promote_collectScore&body={"taskId":${$.taskId},"taskToken":"${$.taskToken}","ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"RAhomePageh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}"}&client=m&appid=signed_wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`promote_collectScore`, body)
      break
    case 'promote_sign':
      body = `functionId=promote_sign&body={"ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"RAhomePageh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}"}&client=m&appid=signed_wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`promote_sign`, body)
      break
    case 'promote_getSignHomeData':
      body = `functionId=promote_getSignHomeData&body={}&client=m&appid=signed_wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`promote_getSignHomeData`, body)
      break
    case 'promote_raise':
      body = `functionId=promote_raise&body={"scenceId":2,"ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"RAhomePageh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}"}&client=m&appid=signed_wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`promote_raise`, body)
      break
    case 'getAppId':
      body = `functionId=factory_getStaticConfig&appid=signed_wh5&appid=signed_wh5&clientVersion=1.0.0&body={"encryptActivityId":"${$.oneShop}","channelId":1}`
      otherUrl = 'https://api.m.jd.com/'
      myRequest = getPostRequest(`factory_getStaticConfig`, body, otherUrl)
      break
    case 'getShopHomeData':
      body = `functionId=template_mongo_getHomeData&appid=wh5&client=wh5&clientVersion=1.0.0&body={"taskToken":"","appId":"${$.appId}","actId":"${$.oneShop}",channelId":1}`
      otherUrl = 'https://api.m.jd.com/'
      myRequest = getPostRequest(`template_mongo_getHomeData`, body, otherUrl)
      break
    case 'doOneShopTask':
      body = `functionId=template_mongo_collectScore&appid=wh5&client=wh5&clientVersion=1.0.0&body={"taskToken":"${$.taskToken}","taskId":${$.taskId},"actionType":1,"appId":"${$.appId}","random":"","log":""}`
      otherUrl = 'https://api.m.jd.com/'
      myRequest = getPostRequest(`template_mongo_collectScore`, body, otherUrl)
      break
    case `doShopLottery`:
      body = `functionId=template_mongo_lottery&appid=wh5&client=wh5&clientVersion=1.0.0&body={"appId":"${$.appId}","fragmentId":${$.fragmentId},"random":"","log":""}`
      otherUrl = 'https://api.m.jd.com/'
      myRequest = getPostRequest(`template_mongo_lottery`, body, otherUrl)
      break
    case `getPartyHomeData`:
      body = `functionId=party1031_init&body={}&client=m&clientVersion=1.0.0&appid=o2_act&uuid=${$.uuid}`
      otherUrl = 'https://api.m.jd.com/client.action?advId=party1031_init'
      myRequest = getPostRequest(`party1031_init`, body, otherUrl)
      break
    case `helpPartyCode`:
      body = `functionId=party1031_assist&client=m&clientVersion=1.0.0&appid=o2_act&_stk=appid,body,client,clientVersion,functionId&_ste=1&h5st=&body={"inviteCode":"${$.inviteId}"}&uuid=${$.uuid}`
      otherUrl = 'https://api.m.jd.com/client.action?advId=party1031_assist'
      myRequest = getPostRequest(`party1031_assist`, body, otherUrl)
      break
    case 'getHelpCode':
      url =
        'https://gitter.im/api/v1/rooms/6171836d6da0373984886132/chatMessages?lookups%5B%5D=user&includeThreads=false&limit=100'
      headers = {
        Origin: `https://gitter.im/leecobaby-shortcuts/`,
        Host: `gitter.im`,
        Referer: `https://gitter.im/leecobaby-shortcuts/jd_travel`,
        Cookie: `null`,
        'x-access-token': '$9OVxcJtRbFDBoGj9Z3hXLFw9b3mrlWmop6Lw84IBmhs='
      }
      myRequest = getRequest(url, body, 'GET', headers)
      break
    case 'jdjrTaskDetail':
      body = `reqData={"eid":"","sdkToken":"jdd016EJ54F6BERNW7KQN572WZUQRRFEELIAO7P6YZYZBFUAR6T7LX5KRRGOFWEUJQB57AHD3RWA4Z7J5F5TSHDK3U65XMFZIU5KWEMIWOFA01234567"}`
      otherUrl = `https://ms.jr.jd.com/gw/generic/uc/h5/m/miMissions`
      myRequest = getPostRequest(`jdjrTaskDetail`, body, otherUrl)
      break
    case 'jdjrDoTask':
      otherUrl = `https://ms.jr.jd.com/gw/generic/mission/h5/m/queryMissionReceiveAfterStatus?reqData=%7B%2522missionId%2522:%2522${$.missionId}%2522%7D`
      myRequest = getPostRequest(`jdjrDoTask`, body, otherUrl)
      break
    case 'jdjrDoTaskFinish':
      otherUrl = `https://ms.jr.jd.com/gw/generic/mission/h5/m/finishReadMission?reqData=%7B%2522missionId%2522:%2522${$.missionId}%2522,%2522readTime%2522:8%7D`
      myRequest = getPostRequest(`jdjrDoTask`, body, otherUrl)
      break
    case 'browseProducts':
      body = `functionId=promote_collectScore&body={"taskId":${$.taskId},"taskToken":"${$.taskToken}","ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"RAhomePageh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}"}&client=m&appid=signed_wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`promote_collectScore`, body)
      break
    case 'jm_promotion_queryPromotionInfoByShopId':
      body = `functionId=jm_promotion_queryPromotionInfoByShopId&body={"shopId":"${$.shopId}","channel":20}&client=m&clientVersion=1.0.0`
      myRequest = getPostRequest(`jm_promotion_queryPromotionInfoByShopId`, body)
      break
    case 'jm_marketing_maininfo':
      body = `functionId=jm_marketing_maininfo&body={"shopId":"${$.shopId}","venderId":"${$.venderId}","projectId":${$.projectId}}&appid=shop_view&client=m&clientVersion=1.0.0`
      otherUrl = `https://api.m.jd.com/client.action`
      myRequest = getPostRequest(`jm_marketing_maininfo`, body, otherUrl)
      break
    case 'jm_hidden_tryDoTask':
      body = `functionId=jm_hidden_tryDoTask&body={"shopId":"${$.shopId}","venderId":"${$.venderId}","projectId":${$.projectId}}&appid=shop_view&client=m&clientVersion=1.0.0`
      otherUrl = `https://api.m.jd.com/client.action`
      myRequest = getPostRequest(`jm_hidden_tryDoTask`, body, otherUrl)
      break
    case 'doOneDiceTask8_1':
      body = `functionId=jm_task_process&body={"shopId":"${$.shopId}","venderId":"${$.venderId}","projectId":${$.projectId},"taskId":${$.taskId},"token":"${$.taskToken}","opType":1}&appid=shop_view&client=m&clientVersion=1.0.0`
      otherUrl = `https://api.m.jd.com/client.action`
      myRequest = getPostRequest(`jm_task_process`, body, otherUrl)
      break
    case 'doOneDiceTask8_2':
      body = `functionId=jm_task_process&body={"shopId":"${$.shopId}","venderId":"${$.venderId}","projectId":${$.projectId},"taskId":${$.taskId},"token":"${$.taskToken}","opType":2}&appid=shop_view&client=m&clientVersion=1.0.0`
      otherUrl = `https://api.m.jd.com/client.action`
      myRequest = getPostRequest(`jm_task_process`, body, otherUrl)
      break
    case 'doPlayDice':
      body = `functionId=jm_task_process&body={"shopId":"${$.shopId}","venderId":"${$.venderId}","projectId":${$.projectId},"taskId":${$.taskDiceId},"token":"${$.taskDiceToken}","opType":2,"functionIdFixed":"jm_task_process_play"}&appid=shop_view&client=m&clientVersion=1.0.0`
      otherUrl = `https://api.m.jd.com/client.action`
      myRequest = getPostRequest(`jm_task_process`, body, otherUrl)
      break
    default:
      $.error = `takePostRequest 错误${type}`
      console.log(`错误${type}`)
  }

  $.request = myRequest
  document.write(JSON.stringify($))
}

// 获取请求信息
function getPostRequest(type, body, otherUrl) {
  let url = otherUrl || JD_API_HOST + type
  const request = {}
  if (type === 'jdjrTaskDetail' || type === 'jdjrDoTask') {
    type === 'jdjrDoTask' && (request.method = 'GET')
    request.headers = {
      Host: 'ms.jr.jd.com',
      Origin: 'https://wbbny.m.jd.com',
      Referer: 'https://wbbny.m.jd.com/'
    }
    url = otherUrl
  }
  const method = request.method || `POST`
  const headers = {
    Accept: `application/json, text/plain, */*`,
    Origin: request.headers?.Origin || `https://wbbny.m.jd.com`,
    'Accept-Encoding': `gzip, deflate, br`,
    Cookie: $.cookie,
    'Content-Type': `application/x-www-form-urlencoded`,
    Host: request.headers?.Host || `api.m.jd.com`,
    Connection: `keep-alive`,
    'User-Agent':
      $.UA ||
      'jdapp;iPhone;10.0.6;14.4;c67093f5dd58d33fc5305cdc61e46a9741e05c5b;network/4g;model/iPhone12,1;addressid/2377723269;appBuild/167724;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
    Referer: request.headers?.Referer || `https://wbbny.m.jd.com/`,
    'Accept-Language': `zh-CN`
  }
  return { url: url, method: method, headers: headers, body: body }
}

// 获取其他请求信息
function getRequest(url, body = {}, method = 'POST', header = {}) {
  const headers = {
    Accept: `application/json, text/javascript, */*`,
    Origin: header.Origin || `https://h5.m.jd.com`,
    'Accept-Encoding': `gzip, deflate, br`,
    Cookie: header.Cookie || $.cookie,
    'Content-Type': `application/x-www-form-urlencoded`,
    Host: header.Host || `api.m.jd.com`,
    Connection: `keep-alive`,
    'User-Agent':
      $.UA ||
      'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
    Referer: header.Referer || `https://home.m.jd.com/myJd/newhome.action`,
    'Accept-Language': `zh-CN,zh-Hans;q=0.9`,
    'x-access-token': header['x-access-token'] || ''
  }
  return { url: url, method: method, headers: headers, body: body }
}

// 组织请求 body
function getPostBody(type) {
  let taskBody = ''
  if (type === 'help') {
    taskBody = `functionId=funny_collectScore&body=${JSON.stringify({
      taskId: 2,
      inviteId: $.inviteId,
      actionType: 1,
      ss: getBody()
    })}&client=m&clientVersion=1.0.0`
  } else if (type === 'pkHelp') {
    taskBody = `functionId=zoo_pk_assistGroup&body=${JSON.stringify({
      confirmFlag: 1,
      inviteId: $.pkInviteId,
      ss: getBody()
    })}&client=m&clientVersion=1.0.0`
  } else if (type === 'zoo_collectProduceScore') {
    taskBody = `functionId=zoo_collectProduceScore&body=${JSON.stringify({
      ss: getBody()
    })}&client=m&clientVersion=1.0.0`
  } else if (type === 'zoo_getWelfareScore') {
    taskBody = `functionId=zoo_getWelfareScore&body=${JSON.stringify({
      type: 2,
      currentScence: $.currentScence,
      ss: getBody()
    })}&client=m&clientVersion=1.0.0`
  } else if (type === 'add_car') {
    taskBody = `functionId=funny_collectScore&body=${JSON.stringify({
      taskId: $.taskId,
      taskToken: $.taskToken,
      actionType: 1,
      ss: getBody()
    })}&client=m&clientVersion=1.0.0`
  } else {
    taskBody = `functionId=${type}&body=${JSON.stringify({
      taskId: $.oneTask.taskId,
      actionType: 1,
      taskToken: $.oneActivityInfo.taskToken,
      ss: getBody()
    })}&client=m&clientVersion=1.0.0`
  }
  return taskBody
}

// 处理返回信息
function dealReturn(type, data) {
  if (!data) $.error = '接口返回数据为空，检查账号cookie是否过期或错误'
  // 对 15.1 的特殊优化

  switch (type) {
    case 'promote_getHomeData':
      if (data?.data?.bizCode === 0) {
        $.homeData = data.data
        $.secretp = data.data?.result?.homeMainInfo?.secretp
        $.userInfo = $.homeData?.result?.homeMainInfo
        $.message = `当前玩家分红: ${$.userInfo?.raiseInfo?.redInfo?.red} 份 \n剩余金币${$.userInfo?.raiseInfo?.totalScore}`
        // $.secretpInfo[$.UserName] = $.secretp;
      } else if (data?.code === -30001) {
        $.error =
          '⚠️ 你的 cookie 错误或者过期，请去往指令设置重新授权！\n抓包的请不要登出账号和关闭网页，直接关闭浏览器即可。'
      } else {
        $.error = `⚠️ 存在错误 ${JSON.stringify(data)}`
      }
      // 重置满助力的标记
      $.helpMax = false
      break
    case 'promote_getTaskDetail':
      if (data.code === 0) {
        if (!$.selfInviteId) {
          $.selfInviteId = data.data?.result?.inviteId
          $.message = `你的好友互助码为:\n${$.selfInviteId || '你已被助力满，获取助力码失败'}`
        }
        $.badgeAwardList = data.data.result.lotteryTaskVos[0].badgeAwardVos
        $.taskList = data.data.result.taskVos
      }
      break
    case 'promote_raise':
      if (data.code === 0 && data.data?.bizCode === 0) {
        if (data.data?.result?.levelUpAward?.type === 1) {
          $.message = `抽奖成功，获得${data.data?.result?.levelUpAward?.redNum || 0}份分红`
        } else if (data.data?.result?.levelUpAward?.type === 2) {
          $.message = `抽奖成功，获得${data.data?.result?.levelUpAward?.card?.name || '卡片'}`
        } else if (data.data?.result?.levelUpAward?.type === 2) {
          $.message = `抽奖成功，获得一份数字藏品`
        }
      } else {
        $.message = `抽奖失败，金币不足`
        $.raiseStatus = 1
      }
      break
    case 'promote_collectAutoScore':
      if (data.code === 0 && data.data?.result) {
        $.message = `收取成功，获得：${data.data.result.produceScore} 金币💰`
      } else {
        $.message = JSON.stringify(data)
      }
      if (data.code === 0 && data.data && data.data.bizCode === -1002) {
        $.error = `该账户脚本执行任务火爆，暂停执行任务，请手动做任务或者等待解决脚本火爆问题\n火爆并非账户问题，而是官方对工具做任务场景做了限制手段。`
      }
      break
    case 'promote_collectScore':
      $.callbackInfo = data
      break
    case 'promote_getBadgeAward':
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.message = `累计任务成功领取：${data.data?.result?.myAwardVos[0]?.pointVo?.score} 金币💰`
      } else {
        $.message = `领取失败：${data}`
      }
      break
    case 'help':
    case 'pkHelp':
      //console.log(data);
      switch (data.data?.bizCode) {
        case 0:
          $.message = `助力成功，你获得${data.data?.result?.score}金币💰`
          break
        case -201:
          $.message = `助力已满`
          $.friendHelpMax = true
          break
        case -202:
          $.message = `已经助力过该好友`
          break
        case -5:
          $.message = `${data.data?.bizMsg || '已加入该队伍'}`
          break
        case -6:
        case 108:
          $.message = `助力次数已用光`
          $.helpMax = true
          break
        default:
          $.message = `助力失败：${JSON.stringify(data)}`
      }
      break
    case 'promote_pk_getHomeData':
      if (data.code === 0 && data.data?.bizCode === 0) {
        // $.pkHomeData = data.data;
        // 暂时不实现
        $.message = `你的组队码为：\n${data.data?.result?.secretp}`
      }
      break
    case 'promote_getFeedDetail':
      if (data.code === 0) {
        if (data.data?.result?.addProductVos && data.data?.result.addProductVos.length) {
          $.feedDetailInfo = data.data?.result?.addProductVos[0]
        } else if (data.data?.result?.taskVos && data.data?.result.taskVos.length) {
          $.feedDetailInfo = data.data?.result?.taskVos[0]
        }
      }
      break
    case 'promote_pk_collectPkExpandScore':
      break
    case 'oneTaskHandle':
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.message = `完成任务：获得 ${data.data?.result?.acquiredScore} 金币💰`
      } else {
        $.message = `任务失败：原因 ${JSON.stringify(data)}`
      }
      break
    case 'promote_sign':
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.message = `签到成功：获得 ${
          data.data?.result?.scoreResult?.score
        } 金币💰，其他奖励 ${JSON.stringify(data.data?.result?.scoreResult)}`
      } else if (data.data?.bizCode === -6004) {
        $.message = `已经签到过了`
      } else {
        $.message = `签到失败：原因${JSON.stringify(data)}`
      }
      break
    case 'promote_getSignHomeData':
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.message = `当前已连续签到 ${data.data?.result?.progress} 天/22天`
      }
      break
    case 'getHelpCode':
      // data = JSON.stringify(data).replace(/[\r\n<br><p>]*/g, '')
      // data = JSON.parse(data)
      $.data = {}
      // 选出有 助力码 的元素
      const filterData = _.filter(data.items, (v) => v.text.match(/^[\w-]*$/g))
      // 过滤重复的 user id
      const uniqData = _.uniqBy(filterData, (v) => v.fromUser)
      // 随机选取出 5 个助力码 - 考虑到助力已满情况和无效码的情况
      const sampleData = _.sampleSize(uniqData, 5)
      const list = sampleData.map((v) => v.text)
      // 将助力池的助力码添加进助力列表
      $.inviteList = $.inviteList.concat(list)
      $.message = `已从云端助力池获取到5条助力码追加到助力列表。助力列表预览：${JSON.stringify(
        $.inviteList
      )}`
      $.modules = 0 // 取消模块
      // // 选出有 助力码 的元素
      // const filterData1 = _.filter(data.items, v => v.text.match(/^[\w-]{10,20}$/g))
      // // 过滤重复的 user id
      // const uniqData1 = _.uniqBy(filterData1, v => v.fromUser)
      // // 随机选取出 5 个助力码 - 考虑到助力已满情况和无效码的情况
      // const sampleData1 = _.sampleSize(uniqData1, 5)
      // const list1 = sampleData1.map(v => v.text)
      // $.partyHelpList = $.partyHelpList.concat(list1)
      break
    case 'getAppId':
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.appId = data.data?.result?.appId
      } else {
        $.message = `获取店铺信息失败：${JSON.stringify(data)}`
      }
      break
    case 'getShopHomeData':
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.taskList = data.data?.result?.taskVos
      } else {
        $.message = `获取店铺任务列表失败：${JSON.stringify(data)}`
      }
      break
    case 'doOneShopTask':
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.message = `完成任务：获得 ${data.data?.result?.acquiredScore} 金币💰`
      } else {
        $.message = `任务失败：原因 ${JSON.stringify(data)}`
      }
      break
    case 'doShopLottery':
      if (data.code === 0 && data.data?.bizCode === 0) {
        switch (data.data?.result?.userAwardDto?.type) {
          case 0:
            $.message = `抽奖成功：获得空气`
            break
          case 1:
            $.message = `抽奖成功：获得优惠券`
            break
          case 2:
          case 3:
            $.message = `抽奖成功：获得未知`
            break
          case 5:
            $.message = `抽奖成功：获得 ${data.data?.result?.userAwardDto?.scoreVo?.quantity} 金币💰`
          default:
            $.message = `抽奖成功：获得未知`
        }
        // 剩余机会为 0
        data.data?.result?.userActionResult?.userLightChance === 0 && $.call.pop()
      } else if (data.code === 0 && data.data?.bizCode === 112) {
        $.message = `抽奖次数已用完`
        $.call.pop()
      } else if (data.code === 0 && data.data?.bizCode === -1007) {
        $.message = `你已抽过此奖项`
      } else {
        $.message = `抽奖出错：${JSON.stringify(data)}`
        $.call.pop()
      }
      break
    case `getPartyHomeData`:
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.message = `你的沸腾之夜助力码为：\n${data.data.result?.inviteCode}`
      } else {
        $.message = `获取沸腾之夜助力码失败：${JSON.stringify(data)}`
      }
      break
    case 'helpPartyCode':
      switch (data.data?.bizCode) {
        case 0:
          $.message = `助力成功：${JSON.stringify(data)}`
          break
        case -201:
          $.message = `不能为自己助力`
          break
        case -202:
          $.message = `助力次数已用光`
          $.partyHelpMax = true
          break
        default:
          $.message = `助力失败：${JSON.stringify(data)}`
      }
      break
    case 'jdjrTaskDetail':
      if (data.resultCode === 0) {
        $.jdjrTaskList = data.resultData?.data?.views || []
      } else {
        $.jdjrTaskList = []
        $.message = `获取京东金融任务失败`
      }
      break
    case 'jdjrDoTask':
      if (data.resultCode === 0) {
        $.message = '任务完成'
      } else {
        $.message = '任务失败'
      }
      break
    case 'browseProducts':
      if (data.code === 0) {
        let acquiredScore = data.data?.result?.acquiredScore
        if (Number(acquiredScore) > 0) {
          $.message = `加购|浏览成功,获得:${acquiredScore} 金币💰`
        } else {
          $.message = `加购|浏览成功`
        }
      } else {
        $.message = `加购|浏览失败`
      }
      break
    case 'jm_promotion_queryPromotionInfoByShopId':
      if (data.success && data.data?.innerLink) {
        try {
          $.projectId = data.data.innerLink.match(/"projectId":(\d+)/)[1]
          $.venderId = data.data.innerLink.match(/"venderId":(\d+)/)[1]
          $.message = `获取丢骰子店铺项目ID成功`
        } catch (e) {
          // 失败则不继续执行
          $.taskStep = -1
          $.message = `获取丢骰子店铺项目ID失败`
        }
      } else {
        // 失败则不继续执行
        $.taskStep = -1
        $.message = `获取丢骰子店铺项目ID失败`
      }
      break
    case 'jm_marketing_maininfo':
      if (data.success && data.data?.project) {
        $.taskList = data.data?.project?.viewTaskVOS
        $.taskDiceId = $.taskList[0].id // 丢骰子 id
        $.taskDiceToken = $.taskList[0].token // 丢骰子 token
        $.taskList.shift() // 去掉第一个任务
      } else {
        // 失败则不继续执行
        $.taskStep = -1
        $.message = `获取丢骰子店铺任务列表失败`
      }
      break
    case 'jm_hidden_tryDoTask':
      if (data.code == 300 || data.code == 200) {
        $.message = `完成店铺每日抽奖：${data.msg || data.data?.name + '(收集奖)'}`
      } else {
        $.message = `抽奖失败：原因${JSON.stringify(data)}`
      }
      break
    case 'doOneDiceTask8':
      if (data.success && data.data) {
        if ($.data.data?.awardVO?.type == 4) {
          $.message = `完成任务：获得${$.data.data?.awardVO?.discount}次丢骰子机会`
        } else {
          $.message = `任务失败：原因${JSON.stringify(data)}`
        }
      } else if (data.success && data.code == 200) {
      } else {
        $.message = `任务失败：原因${JSON.stringify(data)}`
      }
      break
    case 'doPlayDice':
      if (data.success && data.data) {
        if ($.data.data?.awardVO?.type == 5) {
          $.message = `丢骰子：获得${$.data.data?.awardVO?.discount}金币💰`
        } else {
          $.message = `丢骰子：获得${$.data.data?.awardVO?.type == 3 ? '优惠券' : '5京豆'} `
        }
      } else if (data.success && data.code == 804) {
        $.message = `丢骰子：机会用完了~`
        $.call.pop() // 跳出丢骰子
      } else if (data.success && data.code == 814) {
        $.message = `丢骰子：当天参与总次数已经达到上线，将结束此任务~`
        $.to = `` // 结束丢骰子任务
      } else {
        $.message = `丢骰子：错误${JSON.stringify(data)}`
        $.call.pop() // 跳出丢骰子
      }
      break
    default:
      $.error = '什么情况，有未知异常‼️' + type
  }
}

/**
 * 工具类对象 - 写成函数封装形式，是想利用函数申明提前
 * 没有写成类的形式，是因为遵从无状态纯函数的原则
 * @returns object
 */
function Utils() {
  return {
    /** 生成随机数 */
    randomString(e) {
      e = e || 32
      let t = 'abcdef0123456789',
        a = t.length,
        n = ''
      for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a))
      return n
    },
    stringify(data) {
      try {
        if (typeof JSON.stringify(data) == 'string') {
          return JSON.stringify(data)
        }
      } catch (e) {
        console.log(e)
        return data
      }
    },
    randomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    },
    formatToArray(p = []) {
      return Array.isArray(p) ? p : [p]
    },
    filterArray(arr = []) {
      return arr.filter((v) => !!v)
    },
    getParam(url, key) {
      const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i')
      const r = url.match(reg)
      if (r != null) return decodeURIComponent(r[2])
      return null
    }
  }
}
