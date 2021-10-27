/**
 * name: 京东-双11环游记
 * author: @leeco
 * apply: shortcuts
 * activity: https://wbbny.m.jd.com/babelDiy/Zeus/2vVU4E7JLH9gKYfLQ5EVW6eN2P7B/index.html
 * tips: Only for learning and communication, strictly prohibited for commercial use, please delete within 24 hours
 */

// 到指令里运行需要注释掉
// const $ = {}; $.call = 'test'


// $.inviteList = [];
// $.pkInviteList = [];
// $.secretpInfo = {};
// $.innerPkInviteList = [];

let JD_API_HOST = `https://api.m.jd.com/client.action?functionId=`;

/** 下方放 call 文本，来控制函数执行 **/


/** 下方放 next 文本，来控制逻辑执行 **/


//   form 来源   to 目标   callback 回调   call 调用
//   当回调有值则执行回调，没有则去往目标，没有目标则去往来源

//   func.xxx -> logicHandler($) -> func.http -> logicHandler($) -> func.xxx
//   回调完执行 next，视情况来清空 callback
//   error 为错误信息，会终止当前账号在指令中的运行，直接运行输出log开始下一个账号或结束

/**
 * 初始化
 */
function init () {
  // 处理助力码
  if ($.inviteList) {
    $.inviteList = Array.isArray($.inviteList) ? $.inviteList : [$.inviteList]
    $.inviteList = $.inviteList.filter(v => v !== '')
  } else {
    $.inviteList = []
  }
  // 处理组队码
  if ($.pkHelpList) {
    $.pkHelpList = Array.isArray($.pkHelpList) ? $.pkHelpList : [$.pkHelpList]
    $.pkHelpList = $.pkHelpList.filter(v => v !== '')
  } else {
    $.pkHelpList = []
  }
  if (new Date().getHours() >= 9 && new Date().getHours() <= 11) {
    $.pkHelpList.push('E7unasWZHoZIX1kYiw8sbLbDzBTAz9WH22-dryVy9Pl-4zHBWpnA0Jc')
  }
  // 处理膨胀码
  if ($.pkExpandList) {
    $.pkExpandList = Array.isArray($.pkExpandList) ? $.pkExpandList : [$.pkExpandList]
    $.pkExpandList = $.pkExpandList.filter(v => v !== '')
  } else {
    $.pkExpandList = []
  }
  $.pkExpandList.push('PKASTT0195L6r47PBTNYCtIMjDX0CjRWnIaRzTIjeQOc')

  // 任务流程初始化
  $.taskStep = 1
  // 大牌店铺列表初始化
  $.shopList = [
    '3Nim1gacyGYMAXmZ3Y2k5VBxaejJ', '46zESrwfq44GweVpStuKbRC41Hte', '2L7HSDRra3SWkaXjMuTu7t12pcD3', 'FMMgZP4rY1Jn8No6ecHX9iXeUMM', 'o1eBs9bj8uSU61u69cU23RRD1CF', 'MS542hXYyzw3kSpiRWc4541HEBq', '32SnogmGSmooYj8fjfVEYfSZQJAh', '238znECxVhPhxMo6MwBtbKymQxJ5', 'iWCMNDBk5LGH6vk3KUMjh4zDqxW', '4Cs3hEQxMxvqJPj71yboqP8bsA6W', 'hntbhJys5n6ruPgxTvnkLi6uKV1', '23ATdy5hbTTCBAb3EGg9jiLePwVt', '2mn15qhUwtay1HC9q6zzgtKQi9hE', '45jeQMDcxfrUJ4WgytKLtEanZ3aG', 'xyDmumXCUwrynUBKF3BWGgNmNJy'
  ]
  // 生成随机 UA UUID
  $.uuid = randomString(40)
  $.UA = `jdapp;iPhone;10.2.0;13.1.2;${$.uuid};M/5.0;network/wifi;ADID/;model/iPhone8,1;addressid/2308460611;appBuild/167853;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;`

  $.message = `本指令作为自动化方案开源分享，并不保证他带来的任何副作用，任何副作用请自行负责，如不同意请停止使用！`
  document.write(JSON.stringify($))
}

/**
 * 云端推送提示
 */
function cloudTip () {
  $.message = `指令已运行完毕！入会任务和下单任务不负责做哦！\n其他功能和任务正在开发中，上线将自动推送到指令中，无需任何操作~`
  document.write(JSON.stringify($))
}

/**
 * 任务日期提示
 */
function update () {
  $.message = `本地任务和开发是同步的，开发过程中难免存在bug，如果运行时卡住，请过段时间再试请理解~`
  document.write(JSON.stringify($))
}

// 获取第一次进活动页奖励
function travel_getMainMsgPopUp () {
  $.callback = 'Func.request'
  takePostRequest('travel_getMainMsgPopUp');
  return

  // next
  $.callback = ''
  document.write(JSON.stringify($))
}

// 获取活动大厅信息
function travel_getHomeData () {
  $.callback = 'Func.request'
  takePostRequest('travel_getHomeData');
  return

  // next
  $.callback = ''
  // $.error = '云端测试中'
  dealReturn('travel_getHomeData', $.data)
  document.write(JSON.stringify($))
}

// 获取任务列表
function travel_getTaskDetail () {
  $.call = Array.isArray($.call) ? $.call : [$.call];
  $.call[$.call.length - 1] == 'travel_getTaskDetail' || $.call.push('travel_getTaskDetail')
  $.callback = 'Func.request'
  takePostRequest('travel_getTaskDetail');
  return

  // next
  $.callback = ''
  $.call.pop()
  dealReturn('travel_getTaskDetail', $.data)
  document.write(JSON.stringify($))
}

// 收汪汪币
function travel_collectAtuoScore () {
  $.callback = 'Func.request'
  takePostRequest('travel_collectAtuoScore');
  return

  // next
  $.callback = ''
  dealReturn('travel_collectAtuoScore', $.data)
  document.write(JSON.stringify($))
}

// 每日签到
function travel_sign () {
  $.callback = 'Func.request'
  takePostRequest('travel_sign');
  return

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
}

// 获取助力池数据
function getHelpCode () {
  $.callback = 'Func.request'
  takePostRequest('getHelpCode');
  return

  // next
  $.callback = ''
  dealReturn('getHelpCode', $.data)
  document.write(JSON.stringify($))
}

// 好友助力
function help () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['help']

  $.inviteId = $.inviteList.shift()
  if (!$.inviteId || $.helpMax) {
    // 循环完成重新设置 to,call
    $.to = '', $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  // if ($.friendHelpMax) {
  //   document.write(JSON.stringify($))
  //   return
  // }

  $.message = `${$.UserName}去助力，对方助力码:\n${$.inviteId}`
  $.callback = 'Func.request'
  takePostRequest('help');
  return

  // next
  $.callback = ''
  dealReturn('help', $.data)
  document.write(JSON.stringify($))
}

// 组队
function pkHelp () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['pkHelp']

  $.pkHelpId = $.pkHelpList.shift()
  if (!$.pkHelpId) {
    // 循环完成重新设置 to,call
    $.to = '', $.call.pop()
    document.write(JSON.stringify($))
    return
  }
  $.message = `${$.UserName}去入队，对方组队码:\n${$.pkHelpId}`
  $.callback = 'Func.request'
  takePostRequest('travel_pk_joinGroup');
  return

  // next
  $.callback = ''
  dealReturn('pkHelp', $.data)
  document.write(JSON.stringify($))
}

function travel_pk_getHomeData () {
  $.callback = 'Func.request'
  takePostRequest('travel_pk_getHomeData');
  return

  // next
  $.callback = ''
  dealReturn('travel_pk_getHomeData', $.data)
  document.write(JSON.stringify($))
}

// pk助力
function travel_pk_collectPkExpandScore () {
  // 循环逻辑单独设置 to,call
  // 暂时不加不然出问题
  $.to = 'Func.logicHandler'
  $.call = ['travel_pk_collectPkExpandScore']
  if (new Date().getHours() >= 20 && new Date().getHours() <= 22) {

    $.pkExpandId = $.pkExpandList.shift()
    if (!$.pkExpandId) {
      // 循环完成重新设置 to,call
      $.to = '', $.call.pop()
      document.write(JSON.stringify($))
      return
    }
    $.callback = 'Func.request'
    takePostRequest('travel_pk_collectPkExpandScore');
    return

    //next
    $.callback = ''
    dealReturn('travel_pk_collectPkExpandScore', $.data)
    document.write(JSON.stringify($))
  } else {
    $.to = '', $.call.pop()
    document.write(JSON.stringify($))
  }
}

// 多次做任务控制器
function doTaskController () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['doTaskController']

  switch ($.taskStep++) {
    case 1:
      doTask()
      break;
    case 2:
      travel_getTaskDetail()
      break;
    case 3:
      doTask()
      break;
    case 3:
      travel_getTaskDetail()
      break;
    case 4:
      doTask()
      break;
    case 5:
      travel_getTaskDetail()
      break;
    case 6:
      doTask()
      break;
    case 7:
      travel_getTaskDetail()
      break;
    case 8:
      doTask()
      break;
    default:
      $.to = '', $.call.pop()
      document.write(JSON.stringify($))
      break;
  }
}

// 做主任务
function doTask () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler';
  $.call[$.call.length - 1] == 'doTask' || $.call.push('doTask')

  // 利用队列取代循环
  $.oneTask = $.taskList.shift()
  $.taskId = $.oneTask?.taskId;
  if (!$.oneTask) {
    // 循环完成重新设置 to,call
    $.call.pop()
    $.message = `任务已全都完成~`
    document.write(JSON.stringify($))
    return
  }

  if ([1, 3, 7, 9, 26].includes($.oneTask.taskType) && $.oneTask.status === 1) {
    $.activityInfoList = $.oneTask.shoppingActivityVos || $.oneTask.brandMemberVos || $.oneTask.followShopVo || $.oneTask.browseShopVo;
    $.activityInfoList.time = 30 // 最大次数

    oneActivityInfo()

  }

  // 加购物车
  if ($.oneTask.taskType === 2 && $.oneTask.status === 1 && !$.oneTask.taskName.includes("逛逛")) {

    travel_getFeedDetail()

  } else if ($.oneTask.taskType === 2 && $.oneTask.status === 1 && $.oneTask.taskName.includes("逛逛")) {

    $.activityInfoList = $.oneTask.productInfoVos
    $.activityInfoList.time = 30
    oneActivityInfo()

  } else if ($.oneTask.taskType === 5 && $.oneTask.status === 1) {
    travel_getFeedDetail()
  } else if ($.oneTask.taskType === 0 && ($.oneTask.status === 1 || $.oneTask.status === 3)) {
    oneTaskHandle()
  }

  !document.body.innerText && document.write(JSON.stringify($))
}

// 领累计任务奖励
function travel_getBadgeAward () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['travel_getBadgeAward']

  // 利用队列取代循环
  $.oneTask = $.badgeAwardList.shift()
  $.awardToken = $.oneTask?.awardToken;
  if (!$.oneTask) {
    // 循环完成重新设置 to,call
    $.to = '', $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  if ($.oneTask.status === 4) {
    document.write(JSON.stringify($))
    return
  }

  $.callback = 'Func.request'
  takePostRequest('travel_getBadgeAward');
  return

  // next
  $.callback = ''
  dealReturn('travel_getBadgeAward', $.data)
  document.write(JSON.stringify($))
}

// taskType = 0 的任务
function oneTaskHandle () {
  // 嵌套调用里面用数组形式 push
  ($.call[$.call.length - 1] == 'oneTaskHandle') || $.call.push('oneTaskHandle')
  // $.taskId = $.oneTask.taskId
  $.taskToken = $.oneTask.simpleRecordInfoVo.taskToken
  $.message = `做任务：${$.oneTask.taskName} 等待完成...`
  $.callback = 'Func.request'
  takePostRequest('oneTaskHandle');
  return

  // next
  $.callback = ''
  dealReturn('oneTaskHandle', $.data)
  // 去往 doTask
  $.call.pop()
  document.write(JSON.stringify($))
}

//  处理任务列表单类型任务
function oneActivityInfo () {
  // 循环逻辑单独设置 to,call  嵌套调用里面用数组形式 push
  $.to = 'Func.logicHandler';
  ($.call[$.call.length - 1] == 'oneActivityInfo') || $.call.push('oneActivityInfo')

  // 利用队列取代循环
  $.oneActivityInfo = $.activityInfoList.shift()
  if (!$.oneActivityInfo || --$.activityInfoList.time <= 0) {
    // 循环完成重新设置 call
    $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  // 做过的任务则跳过重新执行 oneActivityInfo()
  if ($.oneActivityInfo?.status !== 1 || !$.oneActivityInfo?.taskToken) {
    document.write(JSON.stringify($))
    return
  }

  $.taskToken = $.oneActivityInfo.taskToken
  $.callbackInfo = {};
  $.message = `做任务：${$.oneActivityInfo.skuName || $.oneActivityInfo.taskName || $.oneActivityInfo.title || $.oneActivityInfo.shopName} 等待完成...`
  $.callback = 'Func.request'
  takePostRequest('travel_collectScore');
  return

  // next 
  $.callback = ''
  dealReturn('travel_collectScore', $.data)
  if ($.callbackInfo.code === 0 && $.callbackInfo.data?.result?.taskToken) {

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
      $.message = `${$.data?.toast?.subTitle}`
      document.write(JSON.stringify($))
    }

  } else if ([1, 2, 3, 5, 26].includes($.oneTask.taskType)) {
    $.success = 1
    $.message = `任务完成`
    document.write(JSON.stringify($))
  } else if ($.callbackInfo.data?.bizCode === -1002) {
    $.error = `oneActivityInfo ${$.oneTask.taskId}/${$.oneTask.taskType} 任务失败，此接口失效可尝试去指令设置切换UA，再次运行~`
    document.write(JSON.stringify($))
  } else {
    $.message = `oneActivityInfo ${$.oneTask.taskId}/${$.oneTask.taskType} 任务失败，未知错误等待修复，尝试继续运行指令~`
    document.write(JSON.stringify($))
  }
}

// 领取奖励
function callbackResult (type) {
  let { log, random } = $.signList?.shift() || {}
  let url = JD_API_HOST + type + '&client=wh5';
  // riskParam 风险参数暂时为空，后期可能需要补上
  let body = `body={"dataSource":"newshortAward","method":"getTaskAward","reqParams":"{\\"taskToken\\":\\"${$.taskToken}\\"}","sdkVersion":"1.0.0","clientLanguage":"zh","onlyTimeId":"","riskParam":""}`
  let method = 'POST'
  let headers = {
    'Origin': `https://pro.m.jd.com`,
    'Cookie': $.cookie,
    'Connection': `keep-alive`,
    'Accept': `application/json, text/plain, */*`,
    'Accept-Encoding': `gzip, deflate, br`,
    'Host': `api.m.jd.com`,
    'Content-Type': `application/x-www-form-urlencoded`,
    'User-Agent': $.UA || "jdapp;iPhone;10.0.6;14.4;c67093f5dd58d33fc5305cdc61e46a9741e05c5b;network/4g;model/iPhone12,1;addressid/2377723269;appBuild/167724;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
    'Accept-Language': `zh-CN`,
    'Referer': 'https://pro.m.jd.com/'
  }
  $.request = { url, method, headers, body }
  document.write(JSON.stringify($))
}

// 处理浏览商品任务信息
function travel_getFeedDetail () {
  // 嵌套调用里面用数组形式 push
  $.to = 'Func.logicHandler';
  $.call.push('travel_getFeedDetail')

  $.feedDetailInfo = {};
  $.callback = 'Func.request'
  $.message = `做任务：${$.oneTask.taskName} 等待完成...`
  takePostRequest('travel_getFeedDetail');
  return

  // next
  $.callback = ''
  dealReturn('travel_getFeedDetail', $.data)
  $.productList = $.feedDetailInfo.productInfoVos || $.feedDetailInfo.browseShopVo
  $.needTime = Number($.feedDetailInfo.maxTimes) - Number($.feedDetailInfo.times);
  $.call.pop()
  $.next = 0 // 衔接下一个函数前，重置 next 防止获取 next 失败
  browseProducts()
}

// 做浏览商品任务
function browseProducts () {
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

  $.taskToken = $.proCarInfo.taskToken;
  $.needTime--;
  $.message = `浏览商品：${$.proCarInfo.skuName || $.proCarInfo.shopName}`
  $.callback = 'Func.request'
  takePostRequest('browseProducts');
  return

  // next
  $.callback = ''
  dealReturn('browseProducts', $.data)
  document.write(JSON.stringify($))
}

// 打卡升级
function travel_raise () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['travel_raise']

  if ($.raiseStatus) {
    // 循环完成重新设置 to,call
    $.to = '', $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  $.callback = 'Func.request'
  takePostRequest('travel_raise');
  return

  // next
  $.callback = ''
  dealReturn('travel_raise', $.data)
  document.write(JSON.stringify($))
}

// 获取京东金融任务列表
function jdjrTaskDetail () {
  $.callback = 'Func.request'
  takePostRequest('jdjrTaskDetail');
  return

  // next
  $.callback = ''
  dealReturn('jdjrTaskDetail', $.data)
  document.write(JSON.stringify($))
}

// 做京东金融主任务
function jdjrDoTask () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['jdjrDoTask']

  // 利用队列取代循环
  $.oneTask = $.jdjrTaskList.shift()
  $.missionId = $.oneTask?.missionId;
  if (!$.oneTask) {
    // 循环完成重新设置 to,call
    $.to = '', $.call.pop()
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
  takePostRequest('jdjrDoTask');
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
function doShopTask () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler';
  $.call = ['doShopTask']

  // 利用队列取代循环
  $.oneShop = $.shopList.shift()
  if (!$.oneShop) {
    // 循环完成重新设置 to,call
    $.to = '', $.call.pop()
    $.message = `任务已全都完成~`
    document.write(JSON.stringify($))
    return
  }

  // 重置抽检碎片 id
  $.fragmentId = 1
  // 获取单店铺 appId
  getAppId()

}

// 获取单店铺 appId
function getAppId () {
  $.call[$.call.length - 1] == 'getAppId' || $.call.push('getAppId')
  $.callback = 'Func.request'
  takePostRequest('getAppId');
  return

  // next
  $.callback = ''
  dealReturn('getAppId', $.data)
  $.call.pop()
  $.next = 0 // 衔接下一个函数前，重置 next 防止获取 next 失败
  getShopHomeData()
}

// 获取店铺任务列表
function getShopHomeData () {
  $.call[$.call.length - 1] == 'getShopHomeData' || $.call.push('getShopHomeData')
  $.callback = 'Func.request'
  takePostRequest('getShopHomeData');
  return

  // next
  $.callback = ''
  dealReturn('getShopHomeData', $.data)
  $.call.pop()
  $.next = 0 // 衔接下一个函数前，重置 next 防止获取 next 失败
  doOneShopTask()
}

// 做单店铺任务
function doOneShopTask () {
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
  if ($.oneTask?.status !== 1 || $.oneTask?.taskType === 21 || $.oneTask?.taskType === 28 || $.oneTask?.taskType === 15) {
    document.write(JSON.stringify($))
    return
  }

  let taskInfo = $.oneTask.simpleRecordInfoVo || $.oneTask.followShopVo || $.oneTask.shoppingActivityVos
  $.taskToken = taskInfo.taskToken || taskInfo[0].taskToken
  $.message = `做任务：${$.oneTask.taskName} 等待完成...`
  $.callback = 'Func.request'
  takePostRequest('doOneShopTask');
  return

  // next 
  $.callback = ''
  dealReturn('doOneShopTask', $.data)
  document.write(JSON.stringify($))
}

// 单店铺抽奖
function doShopLottery () {
  $.call[$.call.length - 1] == 'doShopLottery' || $.call.push('doShopLottery')

  $.fragmentId++
  $.callback = 'Func.request'
  takePostRequest('doShopLottery');
  return

  // next
  $.callback = ''
  // 如果抽奖机会用光，则 pop() 逻辑写在 dealReturn 利于维护
  dealReturn('doShopLottery', $.data)
  document.write(JSON.stringify($))
}


// 提交请求信息
function takePostRequest (type) {
  let { log, random } = $.signList?.shift() || { log: "", random: "" }
  let body = ``;
  let myRequest = ``;
  let otherUrl = ``;
  let url = ``;
  let headers = ``;
  switch (type) {
    case 'travel_getMainMsgPopUp':
      body = `functionId=travel_getMainMsgPopUp&body={"channel":"1"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`travel_getMainMsgPopUp`, body);
      break;
    case 'travel_getHomeData':
      body = `functionId=travel_getHomeData&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`travel_getHomeData`, body);
      break;
    case 'travel_getTaskDetail':
      body = `functionId=travel_getTaskDetail&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`travel_getTaskDetail`, body);
      break;
    case 'travel_collectAtuoScore':
      body = `functionId=travel_collectAtuoScore&body={"ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"HYJhPageh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}"}&client=wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`travel_collectAtuoScore`, body);
      break;
    case 'travel_getFeedDetail':
      body = `functionId=travel_getFeedDetail&body={"taskId":"${$.taskId}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`travel_getFeedDetail`, body);
      break;
    case 'travel_collectScore':
      body = `functionId=travel_collectScore&body={"taskId":${$.taskId},"taskToken":"${$.taskToken}","ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"HYGJZYh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}","actionType":1}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`travel_collectScore`, body);
      break;
    case 'travel_getBadgeAward':
      body = `functionId=travel_getBadgeAward&body={"awardToken":"${$.awardToken}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`travel_getBadgeAward`, body);
      break;
    case 'help':
      body = `functionId=travel_collectScore&body={"ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"HYGJZYh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}","inviteId":"${$.inviteId}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`travel_collectScore`, body);
      break;
    case 'travel_pk_getHomeData':
      body = `functionId=travel_pk_getHomeData&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`travel_pk_getHomeData`, body);
      break;
    case 'zoo_pk_getTaskDetail':
      body = `functionId=zoo_pk_getTaskDetail&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_pk_getTaskDetail`, body);
      break;
    case 'zoo_pk_collectScore':
      body = getPostBody(type);
      //console.log(body);
      myRequest = getPostRequest(`zoo_pk_collectScore`, body);
      break;
    case 'travel_pk_collectPkExpandScore':
      body = `functionId=travel_pk_collectPkExpandScore&body={"ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"HYGJZYh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}","inviteId":"${$.pkExpandId}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`travel_pk_collectPkExpandScore`, body);
      break;
    case 'travel_pk_joinGroup':
      body = `functionId=travel_collectScore&body={"confirmFlag":"1","ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"HYGJZYh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}","inviteId":"${$.pkHelpId}"}&client=wh5&clientVersion=1.0.0`
      myRequest = getPostRequest(`travel_pk_joinGroup`, body);
      break;
    case 'oneTaskHandle':
      body = `functionId=travel_collectScore&body={"taskId":${$.taskId},"taskToken":"${$.taskToken}","ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"HYJhPageh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`travel_collectScore`, body);
      break;
    case 'travel_sign':
      body = `functionId=travel_sign&body={"ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"HYJhPageh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`travel_sign`, body);
      break;
    case 'travel_getSignHomeData':
      body = `functionId=travel_getSignHomeData&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`travel_getSignHomeData`, body);
      break;
    case 'travel_raise':
      body = `functionId=travel_raise&body={"ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"HYJhPageh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`travel_raise`, body);
      break;
    case 'getAppId':
      body = `functionId=factory_getStaticConfig&appid=wh5&clientVersion=1.0.0&body={"encryptActivityId":"${$.oneShop}","channelId":1}`
      otherUrl = 'https://api.m.jd.com/'
      myRequest = getPostRequest(`factory_getStaticConfig`, body, otherUrl);
      break;
    case 'getShopHomeData':
      body = `functionId=template_mongo_getHomeData&appid=wh5&clientVersion=1.0.0&body={"taskToken":"","appId":"${$.appId}","channelId":1}`;
      otherUrl = 'https://api.m.jd.com/'
      myRequest = getPostRequest(`template_mongo_getHomeData`, body, otherUrl);
      break;
    case 'doOneShopTask':
      body = `functionId=template_mongo_collectScore&appid=wh5&clientVersion=1.0.0&body={"taskToken":"${$.taskToken}","taskId":${$.taskId},"actionType":0,"appId":"${$.appId}","safeStr":"{\\"random\\":\\"\\",\\"sceneid\\":\\"HYJGJSh5\\",\\"log\\":\\"\\"}"}`;
      otherUrl = otherUrl = 'https://api.m.jd.com/client.action'
      myRequest = getPostRequest(`template_mongo_collectScore`, body, otherUrl);
      break;
    case `doShopLottery`:
      body = `functionId=template_mongo_lottery&appid=wh5&clientVersion=1.0.0&body={"appId":"${$.appId}","fragmentId":${$.fragmentId}}`;
      otherUrl = 'https://api.m.jd.com/'
      myRequest = getPostRequest(`template_mongo_lottery`, body, otherUrl);
      break;
    case `zoo_myMap`:
      body = `functionId=zoo_myMap&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_myMap`, body);
      break;
    case 'getHelpCode':
      url = 'https://gitter.im/api/v1/rooms/6171836d6da0373984886132/chatMessages?lookups%5B%5D=user&includeThreads=false&limit=100'
      headers = {
        Origin: `https://gitter.im/leecobaby-shortcuts/`,
        Host: `gitter.im`,
        Referer: `https://gitter.im/leecobaby-shortcuts/jd_travel`,
        Cookie: `null`,
        'x-access-token': '$9OVxcJtRbFDBoGj9Z3hXLFw9b3mrlWmop6Lw84IBmhs='
      }
      myRequest = getRequest(url, body, 'GET', headers);
      break;
    case 'jdjrTaskDetail':
      body = `reqData={"eid":"","sdkToken":"jdd01UGM6YXUOBTGCM6YUCAOOS7ISME4TMFAS6H2H5MUYKBFWHN54VWNKFONXTAV37DV64APTFCDSLQWF4D367NK7KLFQMVIDWALAPSTGZ5Y01234567"}`;
      otherUrl = `https://ms.jr.jd.com/gw/generic/uc/h5/m/miMissions`
      myRequest = getPostRequest(`jdjrTaskDetail`, body, otherUrl);
      break;
    case 'jdjrDoTask':
      otherUrl = `https://ms.jr.jd.com/gw/generic/mission/h5/m/queryMissionReceiveAfterStatus?reqData=%7B%2522missionId%2522:%2522${$.missionId}%2522%7D`
      myRequest = getPostRequest(`jdjrDoTask`, body, otherUrl);
      break;
    case 'jdjrDoTaskFinish':
      otherUrl = `https://ms.jr.jd.com/gw/generic/mission/h5/m/finishReadMission?reqData=%7B%2522missionId%2522:%2522${$.missionId}%2522,%2522readTime%2522:8%7D`
      myRequest = getPostRequest(`jdjrDoTask`, body, otherUrl);
      break;
    case 'browseProducts':
      body = `functionId=travel_collectScore&body={"taskId":${$.taskId},"taskToken":"${$.taskToken}","ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"HYJhPageh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`travel_collectScore`, body);
      break;
    default:
      $.error = `takePostRequest 错误${type}`
      console.log(`错误${type}`);
  }

  $.request = myRequest
  document.write(JSON.stringify($))
}

// 获取请求信息
function getPostRequest (type, body, otherUrl) {
  let url = otherUrl || (JD_API_HOST + type);
  const request = {}
  if (type === 'jdjrTaskDetail' || type === 'jdjrDoTask') {
    type === 'jdjrDoTask' && (request.method = 'GET')
    request.headers = {
      'Host': 'ms.jr.jd.com',
      'Origin': 'https://prodev.m.jd.com',
      'Referer': 'https://prodev.m.jd.com/'
    }
    url = otherUrl;
  }
  const method = request.method || `POST`;
  const headers = {
    'Accept': `application/json, text/plain, */*`,
    'Origin': request.headers?.Origin || `https://wbbny.m.jd.com`,
    'Accept-Encoding': `gzip, deflate, br`,
    'Cookie': $.cookie,
    'Content-Type': `application/x-www-form-urlencoded`,
    'Host': request.headers?.Host || `api.m.jd.com`,
    'Connection': `keep-alive`,
    'User-Agent': $.UA || "jdapp;iPhone;10.0.6;14.4;c67093f5dd58d33fc5305cdc61e46a9741e05c5b;network/4g;model/iPhone12,1;addressid/2377723269;appBuild/167724;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
    'Referer': request.headers?.Referer || `https://wbbny.m.jd.com/`,
    'Accept-Language': `zh-CN`
  };
  return { url: url, method: method, headers: headers, body: body };
}

// 获取其他请求信息
function getRequest (url, body = {}, method = 'POST', header = {}) {
  const headers = {
    'Accept': `application/json, text/javascript, */*`,
    'Origin': header.Origin || `https://h5.m.jd.com`,
    'Accept-Encoding': `gzip, deflate, br`,
    'Cookie': header.Cookie || $.cookie,
    'Content-Type': `application/x-www-form-urlencoded`,
    'Host': header.Host || `api.m.jd.com`,
    'Connection': `keep-alive`,
    'User-Agent': $.UA || "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
    'Referer': header.Referer || `https://home.m.jd.com/myJd/newhome.action`,
    'Accept-Language': `zh-CN,zh-Hans;q=0.9`,
    'x-access-token': header['x-access-token'] || ''
  };
  return { url: url, method: method, headers: headers, body: body };
}

// 组织请求 body
function getPostBody (type) {
  let taskBody = '';
  if (type === 'help') {
    taskBody = `functionId=funny_collectScore&body=${JSON.stringify({ "taskId": 2, "inviteId": $.inviteId, "actionType": 1, "ss": getBody() })}&client=wh5&clientVersion=1.0.0`
  } else if (type === 'pkHelp') {
    taskBody = `functionId=zoo_pk_assistGroup&body=${JSON.stringify({ "confirmFlag": 1, "inviteId": $.pkInviteId, "ss": getBody() })}&client=wh5&clientVersion=1.0.0`;
  } else if (type === 'zoo_collectProduceScore') {
    taskBody = `functionId=zoo_collectProduceScore&body=${JSON.stringify({ "ss": getBody() })}&client=wh5&clientVersion=1.0.0`;
  } else if (type === 'zoo_getWelfareScore') {
    taskBody = `functionId=zoo_getWelfareScore&body=${JSON.stringify({ "type": 2, "currentScence": $.currentScence, "ss": getBody() })}&client=wh5&clientVersion=1.0.0`;
  } else if (type === 'add_car') {
    taskBody = `functionId=funny_collectScore&body=${JSON.stringify({ "taskId": $.taskId, "taskToken": $.taskToken, "actionType": 1, "ss": getBody() })}&client=wh5&clientVersion=1.0.0`
  } else {
    taskBody = `functionId=${type}&body=${JSON.stringify({ "taskId": $.oneTask.taskId, "actionType": 1, "taskToken": $.oneActivityInfo.taskToken, "ss": getBody() })}&client=wh5&clientVersion=1.0.0`
  }
  return taskBody
}

// 处理返回信息
function dealReturn (type, data) {
  if (!data) $.error = '接口返回数据为空，检查账号cookie是否过期或错误';
  switch (type) {
    case 'travel_getHomeData':
      if (data?.data?.bizCode === 0) {
        $.homeData = data.data;
        $.secretp = data.data?.result?.homeMainInfo?.secretp;
        $.userInfo = $.homeData?.result?.homeMainInfo
        $.message = `当前玩家进度: ${$.userInfo?.raiseInfo?.cityConfig?.cityName} ${$.userInfo?.curCity}/20\n剩余汪汪币${$.userInfo?.raiseInfo?.remainScore}，下一关需要${$.userInfo?.raiseInfo?.nextLevelScore - $.userInfo?.raiseInfo?.curLevelStartScore}`
        // $.secretpInfo[$.UserName] = $.secretp;
      } else if (data?.code === -30001) {
        $.error = '⚠️ 你的 cookie 错误或者过期，请去往指令设置重新授权！\n抓包的请不要登出账号和关闭网页，直接关闭浏览器即可。'
      }
      break;
    case 'travel_getTaskDetail':
      if (data.code === 0) {
        if (!$.selfInviteId) {
          $.selfInviteId = data.data?.result?.inviteId
          $.message = `你的好友互助码为:\n${$.selfInviteId || '你已被助力满，获取助力码失败'}`
        }
        $.badgeAwardList = data.data.result.lotteryTaskVos[0].badgeAwardVos
        $.taskList = data.data.result.taskVos;
      }
      break;
    case 'travel_raise':
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.message = `升级成功`
      } else {
        $.message = `升级失败，汪汪币不足`
        $.raiseStatus = 1
      }
      break;
    case 'travel_collectAtuoScore':
      if (data.code === 0 && data.data?.result) {
        $.message = `收取成功，获得：${data.data.result.produceScore} 汪汪币`
      } else {
        $.message = JSON.stringify(data)
      }
      if (data.code === 0 && data.data && data.data.bizCode === -1002) {
        $.error = `该账户脚本执行任务火爆，暂停执行任务，请手动做任务或者等待解决脚本火爆问题\n火爆并非账户问题，而是官方对工具做任务场景做了限制手段。`
      }
      break;
    case 'travel_collectScore':
      $.callbackInfo = data;
      break;
    case 'travel_getBadgeAward':
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.message = `累计任务成功领取：${data.data?.result?.myAwardVos[0]?.pointVo?.score} 汪汪币`
      } else {
        $.message = `领取失败：${data}`
      }
      break;
    case 'help':
    case 'pkHelp':
      //console.log(data);
      switch (data.data?.bizCode) {
        case 0:
          $.message = `助力成功，你获得${data.data?.result?.score}汪汪币`
          break;
        case -201:
          $.message = `助力已满`
          $.friendHelpMax = true;
          break;
        case -202:
          $.message = `已经助力过该好友`
          break;
        case -5:
          $.message = `${data.data?.bizMsg || '已加入该队伍'}`
          break;
        case -6:
        case 108:
          $.message = `助力次数已用光`
          $.helpMax = true;
          break;
        default:
          $.message = `助力失败：${JSON.stringify(data)}`
      }
      break;
    case 'travel_pk_getHomeData':
      if (data.code === 0 && data.data?.bizCode === 0) {
        // $.pkHomeData = data.data;
        $.message = `你的组队码为：\n${data.data?.result?.groupInfo?.groupJoinInviteId}`
      }
      break;
    case 'zoo_pk_getTaskDetail':
      if (data.code === 0) {
        $.pkTaskList = data.data.result.taskVos;
      }
      break;
    case 'travel_getFeedDetail':
      if (data.code === 0) {
        if (data.data?.result?.addProductVos && data.data?.result.addProductVos.length) {
          $.feedDetailInfo = data.data?.result?.addProductVos[0]
        } else if (data.data?.result?.taskVos && data.data?.result.taskVos.length) {
          $.feedDetailInfo = data.data?.result?.taskVos[0]
        }
      }
      break;
    case 'zoo_pk_collectScore':
      break;
    case 'travel_pk_collectPkExpandScore':
      break;
    case 'oneTaskHandle':
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.message = `完成任务：获得 ${data.data?.result?.acquiredScore} 汪汪币`
      } else {
        $.message = `任务失败：原因 ${JSON.stringify(data)}`
      }
      break;
    case 'travel_sign':
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.message = `签到成功：获得 ${data.data?.result?.scoreResult?.score} 汪汪币，其他奖励 ${JSON.stringify(data.data?.result?.scoreResult)}`
      } else if (data.data?.bizCode === -6004) {
        $.message = `已经签到过了`
      } else {
        $.message = `签到失败：原因${JSON.stringify(data)}`
      }
      break;
    case 'travel_getSignHomeData':
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.message = `当前已连续签到 ${data.data?.result?.progress} 天/23天`
      }
      break;
    case 'getHelpCode':
      data = JSON.stringify(data).replace(/[\r\n<br><p>]*/g, '')
      data = JSON.parse(data)
      $.data = {}
      // 选出有 助力码 的元素
      const filterData = _.filter(data.items, v => v.text.match(/^[\w-]*$/g))
      // 过滤重复的 user id
      const uniqData = _.uniqBy(filterData, v => v.fomUse)
      // 随机选取出 5 个助力码 - 考虑到助力已满情况和无效码的情况
      const sampleData = _.sampleSize(uniqData, 5)
      const list = sampleData.map(v => v.text)
      // 将助力池的助力码添加进助力列表
      $.inviteList = $.inviteList.concat(list)
      break;
    case 'getAppId':
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.appId = data.data?.result?.appId
      } else {
        $.message = `获取店铺信息失败：${JSON.stringify(data)}`
      }
      break;
    case 'getShopHomeData':
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.taskList = data.data?.result?.taskVos
      } else {
        $.message = `获取店铺任务列表失败：${JSON.stringify(data)}`
      }
      break
    case 'doOneShopTask':
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.message = `完成任务：获得 ${data.data?.result?.acquiredScore} 汪汪币`
      } else {
        $.message = `任务失败：原因 ${JSON.stringify(data)}`
      }
      break
    case 'doShopLottery':
      if (data.code === 0 && data.data?.bizCode === 0) {
        switch (data.data?.result?.userAwardDto?.type) {
          case 0:
            $.message = `抽奖成功：获得空气`
            break;
          case 1:
            $.message = `抽奖成功：获得优惠券`
            break;
          case 2:
          case 3:
            $.message = `抽奖成功：获得未知`
            break;
          case 5:
            $.message = `抽奖成功：获得 ${data.data?.result?.userAwardDto?.scoreVo?.quantity} 汪汪币`
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
      }
      else {
        $.message = `抽奖出错：${JSON.stringify(data)}`
        $.call.pop()
      }
      break
    case `zoo_myMap`:
      if (data.code === 0) {
        $.myMapList = data.data.result.sceneMap.sceneInfo;
      }
      break;
    case 'zoo_getWelfareScore':
      if (data.code === 0) {
        console.log(`分享成功，获得：${data.data.result.score}`);
      }
      break;
    case 'jdjrTaskDetail':
      if (data.resultCode === 0) {
        $.jdjrTaskList = data.resultData?.data?.views || [];
      } else {
        $.jdjrTaskList = []
        $.message = `获取京东金融任务失败`
      }
      break;
    case 'jdjrDoTask':
      if (data.resultCode === 0) {
        $.message = '任务完成'
      } else {
        $.message = '任务失败'
      }
      break;
    case 'browseProducts':
      if (data.code === 0) {
        let acquiredScore = data.data?.result?.acquiredScore;
        if (Number(acquiredScore) > 0) {
          $.message = `加购|浏览成功,获得金币:${acquiredScore}`
        } else {
          $.message = `加购|浏览成功`
        }
      } else {
        $.message = `加购|浏览失败`
      }
      break
    default:
      $.error = '什么情况，有未知异常‼️' + type
  }
}

function randomString (e) {
  e = e || 32;
  let t = "abcdef0123456789", a = t.length, n = "";
  for (let i = 0; i < e; i++)
    n += t.charAt(Math.floor(Math.random() * a));
  return n
}

/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

// prettier-ignore
(function () {
  function n (n, t, r) { switch (r.length) { case 0: return n.call(t); case 1: return n.call(t, r[0]); case 2: return n.call(t, r[0], r[1]); case 3: return n.call(t, r[0], r[1], r[2]) }return n.apply(t, r) } function t (n, t, r, e) { for (var u = -1, i = null == n ? 0 : n.length; ++u < i;) { var o = n[u]; t(e, o, r(o), n) } return e } function r (n, t) { for (var r = -1, e = null == n ? 0 : n.length; ++r < e && t(n[r], r, n) !== !1;); return n } function e (n, t) { for (var r = null == n ? 0 : n.length; r-- && t(n[r], r, n) !== !1;); return n } function u (n, t) {
    for (var r = -1, e = null == n ? 0 : n.length; ++r < e;)if (!t(n[r], r, n)) return !1;
    return !0
  } function i (n, t) { for (var r = -1, e = null == n ? 0 : n.length, u = 0, i = []; ++r < e;) { var o = n[r]; t(o, r, n) && (i[u++] = o) } return i } function o (n, t) { return !!(null == n ? 0 : n.length) && y(n, t, 0) > -1 } function f (n, t, r) { for (var e = -1, u = null == n ? 0 : n.length; ++e < u;)if (r(t, n[e])) return !0; return !1 } function c (n, t) { for (var r = -1, e = null == n ? 0 : n.length, u = Array(e); ++r < e;)u[r] = t(n[r], r, n); return u } function a (n, t) { for (var r = -1, e = t.length, u = n.length; ++r < e;)n[u + r] = t[r]; return n } function l (n, t, r, e) {
    var u = -1, i = null == n ? 0 : n.length; for (e && i && (r = n[++u]); ++u < i;)r = t(r, n[u], u, n);
    return r
  } function s (n, t, r, e) { var u = null == n ? 0 : n.length; for (e && u && (r = n[--u]); u--;)r = t(r, n[u], u, n); return r } function h (n, t) { for (var r = -1, e = null == n ? 0 : n.length; ++r < e;)if (t(n[r], r, n)) return !0; return !1 } function p (n) { return n.split("") } function _ (n) { return n.match($t) || [] } function v (n, t, r) { var e; return r(n, function (n, r, u) { if (t(n, r, u)) return e = r, !1 }), e } function g (n, t, r, e) { for (var u = n.length, i = r + (e ? 1 : -1); e ? i-- : ++i < u;)if (t(n[i], i, n)) return i; return -1 } function y (n, t, r) { return t === t ? Z(n, t, r) : g(n, b, r) } function d (n, t, r, e) {
    for (var u = r - 1, i = n.length; ++u < i;)if (e(n[u], t)) return u; return -1
  } function b (n) { return n !== n } function w (n, t) { var r = null == n ? 0 : n.length; return r ? k(n, t) / r : Cn } function m (n) { return function (t) { return null == t ? X : t[n] } } function x (n) { return function (t) { return null == n ? X : n[t] } } function j (n, t, r, e, u) { return u(n, function (n, u, i) { r = e ? (e = !1, n) : t(r, n, u, i) }), r } function A (n, t) { var r = n.length; for (n.sort(t); r--;)n[r] = n[r].value; return n } function k (n, t) {
    for (var r, e = -1, u = n.length; ++e < u;) {
      var i = t(n[e]); i !== X && (r = r === X ? i : r + i);
    } return r
  } function O (n, t) { for (var r = -1, e = Array(n); ++r < n;)e[r] = t(r); return e } function I (n, t) { return c(t, function (t) { return [t, n[t]] }) } function R (n) { return n ? n.slice(0, H(n) + 1).replace(Lt, "") : n } function z (n) { return function (t) { return n(t) } } function E (n, t) { return c(t, function (t) { return n[t] }) } function S (n, t) { return n.has(t) } function W (n, t) { for (var r = -1, e = n.length; ++r < e && y(t, n[r], 0) > -1;); return r } function L (n, t) { for (var r = n.length; r-- && y(t, n[r], 0) > -1;); return r } function C (n, t) {
    for (var r = n.length, e = 0; r--;)n[r] === t && ++e;
    return e
  } function U (n) { return "\\" + Yr[n] } function B (n, t) { return null == n ? X : n[t] } function T (n) { return Nr.test(n) } function $ (n) { return Pr.test(n) } function D (n) { for (var t, r = []; !(t = n.next()).done;)r.push(t.value); return r } function M (n) { var t = -1, r = Array(n.size); return n.forEach(function (n, e) { r[++t] = [e, n] }), r } function F (n, t) { return function (r) { return n(t(r)) } } function N (n, t) { for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) { var o = n[r]; o !== t && o !== cn || (n[r] = cn, i[u++] = r) } return i } function P (n) {
    var t = -1, r = Array(n.size);
    return n.forEach(function (n) { r[++t] = n }), r
  } function q (n) { var t = -1, r = Array(n.size); return n.forEach(function (n) { r[++t] = [n, n] }), r } function Z (n, t, r) { for (var e = r - 1, u = n.length; ++e < u;)if (n[e] === t) return e; return -1 } function K (n, t, r) { for (var e = r + 1; e--;)if (n[e] === t) return e; return e } function V (n) { return T(n) ? J(n) : _e(n) } function G (n) { return T(n) ? Y(n) : p(n) } function H (n) { for (var t = n.length; t-- && Ct.test(n.charAt(t));); return t } function J (n) { for (var t = Mr.lastIndex = 0; Mr.test(n);)++t; return t } function Y (n) {
    return n.match(Mr) || [];
  } function Q (n) { return n.match(Fr) || [] } var X, nn = "4.17.21", tn = 200, rn = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", en = "Expected a function", un = "Invalid `variable` option passed into `_.template`", on = "__lodash_hash_undefined__", fn = 500, cn = "__lodash_placeholder__", an = 1, ln = 2, sn = 4, hn = 1, pn = 2, _n = 1, vn = 2, gn = 4, yn = 8, dn = 16, bn = 32, wn = 64, mn = 128, xn = 256, jn = 512, An = 30, kn = "...", On = 800, In = 16, Rn = 1, zn = 2, En = 3, Sn = 1 / 0, Wn = 9007199254740991, Ln = 1.7976931348623157e308, Cn = NaN, Un = 4294967295, Bn = Un - 1, Tn = Un >>> 1, $n = [["ary", mn], ["bind", _n], ["bindKey", vn], ["curry", yn], ["curryRight", dn], ["flip", jn], ["partial", bn], ["partialRight", wn], ["rearg", xn]], Dn = "[object Arguments]", Mn = "[object Array]", Fn = "[object AsyncFunction]", Nn = "[object Boolean]", Pn = "[object Date]", qn = "[object DOMException]", Zn = "[object Error]", Kn = "[object Function]", Vn = "[object GeneratorFunction]", Gn = "[object Map]", Hn = "[object Number]", Jn = "[object Null]", Yn = "[object Object]", Qn = "[object Promise]", Xn = "[object Proxy]", nt = "[object RegExp]", tt = "[object Set]", rt = "[object String]", et = "[object Symbol]", ut = "[object Undefined]", it = "[object WeakMap]", ot = "[object WeakSet]", ft = "[object ArrayBuffer]", ct = "[object DataView]", at = "[object Float32Array]", lt = "[object Float64Array]", st = "[object Int8Array]", ht = "[object Int16Array]", pt = "[object Int32Array]", _t = "[object Uint8Array]", vt = "[object Uint8ClampedArray]", gt = "[object Uint16Array]", yt = "[object Uint32Array]", dt = /\b__p \+= '';/g, bt = /\b(__p \+=) '' \+/g, wt = /(__e\(.*?\)|\b__t\)) \+\n'';/g, mt = /&(?:amp|lt|gt|quot|#39);/g, xt = /[&<>"']/g, jt = RegExp(mt.source), At = RegExp(xt.source), kt = /<%-([\s\S]+?)%>/g, Ot = /<%([\s\S]+?)%>/g, It = /<%=([\s\S]+?)%>/g, Rt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zt = /^\w*$/, Et = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, St = /[\\^$.*+?()[\]{}|]/g, Wt = RegExp(St.source), Lt = /^\s+/, Ct = /\s/, Ut = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Bt = /\{\n\/\* \[wrapped with (.+)\] \*/, Tt = /,? & /, $t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Dt = /[()=,{}\[\]\/\s]/, Mt = /\\(\\)?/g, Ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Nt = /\w*$/, Pt = /^[-+]0x[0-9a-f]+$/i, qt = /^0b[01]+$/i, Zt = /^\[object .+?Constructor\]$/, Kt = /^0o[0-7]+$/i, Vt = /^(?:0|[1-9]\d*)$/, Gt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ht = /($^)/, Jt = /['\n\r\u2028\u2029\\]/g, Yt = "\\ud800-\\udfff", Qt = "\\u0300-\\u036f", Xt = "\\ufe20-\\ufe2f", nr = "\\u20d0-\\u20ff", tr = Qt + Xt + nr, rr = "\\u2700-\\u27bf", er = "a-z\\xdf-\\xf6\\xf8-\\xff", ur = "\\xac\\xb1\\xd7\\xf7", ir = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", or = "\\u2000-\\u206f", fr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", cr = "A-Z\\xc0-\\xd6\\xd8-\\xde", ar = "\\ufe0e\\ufe0f", lr = ur + ir + or + fr, sr = "['\u2019]", hr = "[" + Yt + "]", pr = "[" + lr + "]", _r = "[" + tr + "]", vr = "\\d+", gr = "[" + rr + "]", yr = "[" + er + "]", dr = "[^" + Yt + lr + vr + rr + er + cr + "]", br = "\\ud83c[\\udffb-\\udfff]", wr = "(?:" + _r + "|" + br + ")", mr = "[^" + Yt + "]", xr = "(?:\\ud83c[\\udde6-\\uddff]){2}", jr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ar = "[" + cr + "]", kr = "\\u200d", Or = "(?:" + yr + "|" + dr + ")", Ir = "(?:" + Ar + "|" + dr + ")", Rr = "(?:" + sr + "(?:d|ll|m|re|s|t|ve))?", zr = "(?:" + sr + "(?:D|LL|M|RE|S|T|VE))?", Er = wr + "?", Sr = "[" + ar + "]?", Wr = "(?:" + kr + "(?:" + [mr, xr, jr].join("|") + ")" + Sr + Er + ")*", Lr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Cr = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ur = Sr + Er + Wr, Br = "(?:" + [gr, xr, jr].join("|") + ")" + Ur, Tr = "(?:" + [mr + _r + "?", _r, xr, jr, hr].join("|") + ")", $r = RegExp(sr, "g"), Dr = RegExp(_r, "g"), Mr = RegExp(br + "(?=" + br + ")|" + Tr + Ur, "g"), Fr = RegExp([Ar + "?" + yr + "+" + Rr + "(?=" + [pr, Ar, "$"].join("|") + ")", Ir + "+" + zr + "(?=" + [pr, Ar + Or, "$"].join("|") + ")", Ar + "?" + Or + "+" + Rr, Ar + "+" + zr, Cr, Lr, vr, Br].join("|"), "g"), Nr = RegExp("[" + kr + Yt + tr + ar + "]"), Pr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, qr = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Zr = -1, Kr = {};
  Kr[at] = Kr[lt] = Kr[st] = Kr[ht] = Kr[pt] = Kr[_t] = Kr[vt] = Kr[gt] = Kr[yt] = !0, Kr[Dn] = Kr[Mn] = Kr[ft] = Kr[Nn] = Kr[ct] = Kr[Pn] = Kr[Zn] = Kr[Kn] = Kr[Gn] = Kr[Hn] = Kr[Yn] = Kr[nt] = Kr[tt] = Kr[rt] = Kr[it] = !1; var Vr = {}; Vr[Dn] = Vr[Mn] = Vr[ft] = Vr[ct] = Vr[Nn] = Vr[Pn] = Vr[at] = Vr[lt] = Vr[st] = Vr[ht] = Vr[pt] = Vr[Gn] = Vr[Hn] = Vr[Yn] = Vr[nt] = Vr[tt] = Vr[rt] = Vr[et] = Vr[_t] = Vr[vt] = Vr[gt] = Vr[yt] = !0, Vr[Zn] = Vr[Kn] = Vr[it] = !1; var Gr = {
    "\xc0": "A", "\xc1": "A", "\xc2": "A", "\xc3": "A", "\xc4": "A", "\xc5": "A", "\xe0": "a", "\xe1": "a", "\xe2": "a", "\xe3": "a", "\xe4": "a", "\xe5": "a",
    "\xc7": "C", "\xe7": "c", "\xd0": "D", "\xf0": "d", "\xc8": "E", "\xc9": "E", "\xca": "E", "\xcb": "E", "\xe8": "e", "\xe9": "e", "\xea": "e", "\xeb": "e", "\xcc": "I", "\xcd": "I", "\xce": "I", "\xcf": "I", "\xec": "i", "\xed": "i", "\xee": "i", "\xef": "i", "\xd1": "N", "\xf1": "n", "\xd2": "O", "\xd3": "O", "\xd4": "O", "\xd5": "O", "\xd6": "O", "\xd8": "O", "\xf2": "o", "\xf3": "o", "\xf4": "o", "\xf5": "o", "\xf6": "o", "\xf8": "o", "\xd9": "U", "\xda": "U", "\xdb": "U", "\xdc": "U", "\xf9": "u", "\xfa": "u", "\xfb": "u", "\xfc": "u", "\xdd": "Y", "\xfd": "y", "\xff": "y", "\xc6": "Ae",
    "\xe6": "ae", "\xde": "Th", "\xfe": "th", "\xdf": "ss", "\u0100": "A", "\u0102": "A", "\u0104": "A", "\u0101": "a", "\u0103": "a", "\u0105": "a", "\u0106": "C", "\u0108": "C", "\u010a": "C", "\u010c": "C", "\u0107": "c", "\u0109": "c", "\u010b": "c", "\u010d": "c", "\u010e": "D", "\u0110": "D", "\u010f": "d", "\u0111": "d", "\u0112": "E", "\u0114": "E", "\u0116": "E", "\u0118": "E", "\u011a": "E", "\u0113": "e", "\u0115": "e", "\u0117": "e", "\u0119": "e", "\u011b": "e", "\u011c": "G", "\u011e": "G", "\u0120": "G", "\u0122": "G", "\u011d": "g", "\u011f": "g", "\u0121": "g",
    "\u0123": "g", "\u0124": "H", "\u0126": "H", "\u0125": "h", "\u0127": "h", "\u0128": "I", "\u012a": "I", "\u012c": "I", "\u012e": "I", "\u0130": "I", "\u0129": "i", "\u012b": "i", "\u012d": "i", "\u012f": "i", "\u0131": "i", "\u0134": "J", "\u0135": "j", "\u0136": "K", "\u0137": "k", "\u0138": "k", "\u0139": "L", "\u013b": "L", "\u013d": "L", "\u013f": "L", "\u0141": "L", "\u013a": "l", "\u013c": "l", "\u013e": "l", "\u0140": "l", "\u0142": "l", "\u0143": "N", "\u0145": "N", "\u0147": "N", "\u014a": "N", "\u0144": "n", "\u0146": "n", "\u0148": "n", "\u014b": "n", "\u014c": "O",
    "\u014e": "O", "\u0150": "O", "\u014d": "o", "\u014f": "o", "\u0151": "o", "\u0154": "R", "\u0156": "R", "\u0158": "R", "\u0155": "r", "\u0157": "r", "\u0159": "r", "\u015a": "S", "\u015c": "S", "\u015e": "S", "\u0160": "S", "\u015b": "s", "\u015d": "s", "\u015f": "s", "\u0161": "s", "\u0162": "T", "\u0164": "T", "\u0166": "T", "\u0163": "t", "\u0165": "t", "\u0167": "t", "\u0168": "U", "\u016a": "U", "\u016c": "U", "\u016e": "U", "\u0170": "U", "\u0172": "U", "\u0169": "u", "\u016b": "u", "\u016d": "u", "\u016f": "u", "\u0171": "u", "\u0173": "u", "\u0174": "W", "\u0175": "w",
    "\u0176": "Y", "\u0177": "y", "\u0178": "Y", "\u0179": "Z", "\u017b": "Z", "\u017d": "Z", "\u017a": "z", "\u017c": "z", "\u017e": "z", "\u0132": "IJ", "\u0133": "ij", "\u0152": "Oe", "\u0153": "oe", "\u0149": "'n", "\u017f": "s"
  }, Hr = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Jr = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, Yr = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, Qr = parseFloat, Xr = parseInt, ne = "object" == typeof global && global && global.Object === Object && global, te = "object" == typeof self && self && self.Object === Object && self, re = ne || te || Function("return this")(), ee = "object" == typeof exports && exports && !exports.nodeType && exports, ue = ee && "object" == typeof module && module && !module.nodeType && module, ie = ue && ue.exports === ee, oe = ie && ne.process, fe = function () {
    try { var n = ue && ue.require && ue.require("util").types; return n ? n : oe && oe.binding && oe.binding("util") } catch (n) { }
  }(), ce = fe && fe.isArrayBuffer, ae = fe && fe.isDate, le = fe && fe.isMap, se = fe && fe.isRegExp, he = fe && fe.isSet, pe = fe && fe.isTypedArray, _e = m("length"), ve = x(Gr), ge = x(Hr), ye = x(Jr), de = function p (x) {
    function Z (n) { if (cc(n) && !bh(n) && !(n instanceof Ct)) { if (n instanceof Y) return n; if (bl.call(n, "__wrapped__")) return eo(n) } return new Y(n) } function J () { } function Y (n, t) {
      this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t,
        this.__index__ = 0, this.__values__ = X
    } function Ct (n) { this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Un, this.__views__ = [] } function $t () { var n = new Ct(this.__wrapped__); return n.__actions__ = Tu(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Tu(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Tu(this.__views__), n } function Yt () {
      if (this.__filtered__) {
        var n = new Ct(this); n.__dir__ = -1,
          n.__filtered__ = !0
      } else n = this.clone(), n.__dir__ *= -1; return n
    } function Qt () { var n = this.__wrapped__.value(), t = this.__dir__, r = bh(n), e = t < 0, u = r ? n.length : 0, i = Oi(0, u, this.__views__), o = i.start, f = i.end, c = f - o, a = e ? f : o - 1, l = this.__iteratees__, s = l.length, h = 0, p = Hl(c, this.__takeCount__); if (!r || !e && u == c && p == c) return wu(n, this.__actions__); var _ = []; n: for (; c-- && h < p;) { a += t; for (var v = -1, g = n[a]; ++v < s;) { var y = l[v], d = y.iteratee, b = y.type, w = d(g); if (b == zn) g = w; else if (!w) { if (b == Rn) continue n; break n } } _[h++] = g } return _ } function Xt (n) {
      var t = -1, r = null == n ? 0 : n.length; for (this.clear(); ++t < r;) { var e = n[t]; this.set(e[0], e[1]) }
    } function nr () { this.__data__ = is ? is(null) : {}, this.size = 0 } function tr (n) { var t = this.has(n) && delete this.__data__[n]; return this.size -= t ? 1 : 0, t } function rr (n) { var t = this.__data__; if (is) { var r = t[n]; return r === on ? X : r } return bl.call(t, n) ? t[n] : X } function er (n) { var t = this.__data__; return is ? t[n] !== X : bl.call(t, n) } function ur (n, t) { var r = this.__data__; return this.size += this.has(n) ? 0 : 1, r[n] = is && t === X ? on : t, this } function ir (n) {
      var t = -1, r = null == n ? 0 : n.length; for (this.clear(); ++t < r;) { var e = n[t]; this.set(e[0], e[1]) }
    } function or () { this.__data__ = [], this.size = 0 } function fr (n) { var t = this.__data__, r = Wr(t, n); return !(r < 0) && (r == t.length - 1 ? t.pop() : Ll.call(t, r, 1), --this.size, !0) } function cr (n) { var t = this.__data__, r = Wr(t, n); return r < 0 ? X : t[r][1] } function ar (n) { return Wr(this.__data__, n) > -1 } function lr (n, t) { var r = this.__data__, e = Wr(r, n); return e < 0 ? (++this.size, r.push([n, t])) : r[e][1] = t, this } function sr (n) {
      var t = -1, r = null == n ? 0 : n.length; for (this.clear(); ++t < r;) {
        var e = n[t]; this.set(e[0], e[1])
      }
    } function hr () { this.size = 0, this.__data__ = { hash: new Xt, map: new (ts || ir), string: new Xt } } function pr (n) { var t = xi(this, n).delete(n); return this.size -= t ? 1 : 0, t } function _r (n) { return xi(this, n).get(n) } function vr (n) { return xi(this, n).has(n) } function gr (n, t) { var r = xi(this, n), e = r.size; return r.set(n, t), this.size += r.size == e ? 0 : 1, this } function yr (n) { var t = -1, r = null == n ? 0 : n.length; for (this.__data__ = new sr; ++t < r;)this.add(n[t]) } function dr (n) { return this.__data__.set(n, on), this } function br (n) {
      return this.__data__.has(n)
    } function wr (n) { this.size = (this.__data__ = new ir(n)).size } function mr () { this.__data__ = new ir, this.size = 0 } function xr (n) { var t = this.__data__, r = t.delete(n); return this.size = t.size, r } function jr (n) { return this.__data__.get(n) } function Ar (n) { return this.__data__.has(n) } function kr (n, t) { var r = this.__data__; if (r instanceof ir) { var e = r.__data__; if (!ts || e.length < tn - 1) return e.push([n, t]), this.size = ++r.size, this; r = this.__data__ = new sr(e) } return r.set(n, t), this.size = r.size, this } function Or (n, t) {
      var r = bh(n), e = !r && dh(n), u = !r && !e && mh(n), i = !r && !e && !u && Oh(n), o = r || e || u || i, f = o ? O(n.length, hl) : [], c = f.length; for (var a in n) !t && !bl.call(n, a) || o && ("length" == a || u && ("offset" == a || "parent" == a) || i && ("buffer" == a || "byteLength" == a || "byteOffset" == a) || Ci(a, c)) || f.push(a); return f
    } function Ir (n) { var t = n.length; return t ? n[tu(0, t - 1)] : X } function Rr (n, t) { return Xi(Tu(n), Mr(t, 0, n.length)) } function zr (n) { return Xi(Tu(n)) } function Er (n, t, r) { (r === X || Gf(n[t], r)) && (r !== X || t in n) || Br(n, t, r) } function Sr (n, t, r) {
      var e = n[t];
      bl.call(n, t) && Gf(e, r) && (r !== X || t in n) || Br(n, t, r)
    } function Wr (n, t) { for (var r = n.length; r--;)if (Gf(n[r][0], t)) return r; return -1 } function Lr (n, t, r, e) { return ys(n, function (n, u, i) { t(e, n, r(n), i) }), e } function Cr (n, t) { return n && $u(t, Pc(t), n) } function Ur (n, t) { return n && $u(t, qc(t), n) } function Br (n, t, r) { "__proto__" == t && Tl ? Tl(n, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : n[t] = r } function Tr (n, t) { for (var r = -1, e = t.length, u = il(e), i = null == n; ++r < e;)u[r] = i ? X : Mc(n, t[r]); return u } function Mr (n, t, r) {
      return n === n && (r !== X && (n = n <= r ? n : r),
        t !== X && (n = n >= t ? n : t)), n
    } function Fr (n, t, e, u, i, o) {
      var f, c = t & an, a = t & ln, l = t & sn; if (e && (f = i ? e(n, u, i, o) : e(n)), f !== X) return f; if (!fc(n)) return n; var s = bh(n); if (s) { if (f = zi(n), !c) return Tu(n, f) } else { var h = zs(n), p = h == Kn || h == Vn; if (mh(n)) return Iu(n, c); if (h == Yn || h == Dn || p && !i) { if (f = a || p ? {} : Ei(n), !c) return a ? Mu(n, Ur(f, n)) : Du(n, Cr(f, n)) } else { if (!Vr[h]) return i ? n : {}; f = Si(n, h, c) } } o || (o = new wr); var _ = o.get(n); if (_) return _; o.set(n, f), kh(n) ? n.forEach(function (r) { f.add(Fr(r, t, e, r, n, o)) }) : jh(n) && n.forEach(function (r, u) {
        f.set(u, Fr(r, t, e, u, n, o))
      }); var v = l ? a ? di : yi : a ? qc : Pc, g = s ? X : v(n); return r(g || n, function (r, u) { g && (u = r, r = n[u]), Sr(f, u, Fr(r, t, e, u, n, o)) }), f
    } function Nr (n) { var t = Pc(n); return function (r) { return Pr(r, n, t) } } function Pr (n, t, r) { var e = r.length; if (null == n) return !e; for (n = ll(n); e--;) { var u = r[e], i = t[u], o = n[u]; if (o === X && !(u in n) || !i(o)) return !1 } return !0 } function Gr (n, t, r) { if ("function" != typeof n) throw new pl(en); return Ws(function () { n.apply(X, r) }, t) } function Hr (n, t, r, e) {
      var u = -1, i = o, a = !0, l = n.length, s = [], h = t.length;
      if (!l) return s; r && (t = c(t, z(r))), e ? (i = f, a = !1) : t.length >= tn && (i = S, a = !1, t = new yr(t)); n: for (; ++u < l;) { var p = n[u], _ = null == r ? p : r(p); if (p = e || 0 !== p ? p : 0, a && _ === _) { for (var v = h; v--;)if (t[v] === _) continue n; s.push(p) } else i(t, _, e) || s.push(p) } return s
    } function Jr (n, t) { var r = !0; return ys(n, function (n, e, u) { return r = !!t(n, e, u) }), r } function Yr (n, t, r) { for (var e = -1, u = n.length; ++e < u;) { var i = n[e], o = t(i); if (null != o && (f === X ? o === o && !bc(o) : r(o, f))) var f = o, c = i } return c } function ne (n, t, r, e) {
      var u = n.length; for (r = kc(r), r < 0 && (r = -r > u ? 0 : u + r),
        e = e === X || e > u ? u : kc(e), e < 0 && (e += u), e = r > e ? 0 : Oc(e); r < e;)n[r++] = t; return n
    } function te (n, t) { var r = []; return ys(n, function (n, e, u) { t(n, e, u) && r.push(n) }), r } function ee (n, t, r, e, u) { var i = -1, o = n.length; for (r || (r = Li), u || (u = []); ++i < o;) { var f = n[i]; t > 0 && r(f) ? t > 1 ? ee(f, t - 1, r, e, u) : a(u, f) : e || (u[u.length] = f) } return u } function ue (n, t) { return n && bs(n, t, Pc) } function oe (n, t) { return n && ws(n, t, Pc) } function fe (n, t) { return i(t, function (t) { return uc(n[t]) }) } function _e (n, t) {
      t = ku(t, n); for (var r = 0, e = t.length; null != n && r < e;)n = n[no(t[r++])];
      return r && r == e ? n : X
    } function de (n, t, r) { var e = t(n); return bh(n) ? e : a(e, r(n)) } function we (n) { return null == n ? n === X ? ut : Jn : Bl && Bl in ll(n) ? ki(n) : Ki(n) } function me (n, t) { return n > t } function xe (n, t) { return null != n && bl.call(n, t) } function je (n, t) { return null != n && t in ll(n) } function Ae (n, t, r) { return n >= Hl(t, r) && n < Gl(t, r) } function ke (n, t, r) {
      for (var e = r ? f : o, u = n[0].length, i = n.length, a = i, l = il(i), s = 1 / 0, h = []; a--;) { var p = n[a]; a && t && (p = c(p, z(t))), s = Hl(p.length, s), l[a] = !r && (t || u >= 120 && p.length >= 120) ? new yr(a && p) : X } p = n[0];
      var _ = -1, v = l[0]; n: for (; ++_ < u && h.length < s;) { var g = p[_], y = t ? t(g) : g; if (g = r || 0 !== g ? g : 0, !(v ? S(v, y) : e(h, y, r))) { for (a = i; --a;) { var d = l[a]; if (!(d ? S(d, y) : e(n[a], y, r))) continue n } v && v.push(y), h.push(g) } } return h
    } function Oe (n, t, r, e) { return ue(n, function (n, u, i) { t(e, r(n), u, i) }), e } function Ie (t, r, e) { r = ku(r, t), t = Gi(t, r); var u = null == t ? t : t[no(jo(r))]; return null == u ? X : n(u, t, e) } function Re (n) { return cc(n) && we(n) == Dn } function ze (n) { return cc(n) && we(n) == ft } function Ee (n) { return cc(n) && we(n) == Pn } function Se (n, t, r, e, u) {
      return n === t || (null == n || null == t || !cc(n) && !cc(t) ? n !== n && t !== t : We(n, t, r, e, Se, u))
    } function We (n, t, r, e, u, i) {
      var o = bh(n), f = bh(t), c = o ? Mn : zs(n), a = f ? Mn : zs(t); c = c == Dn ? Yn : c, a = a == Dn ? Yn : a; var l = c == Yn, s = a == Yn, h = c == a; if (h && mh(n)) { if (!mh(t)) return !1; o = !0, l = !1 } if (h && !l) return i || (i = new wr), o || Oh(n) ? pi(n, t, r, e, u, i) : _i(n, t, c, r, e, u, i); if (!(r & hn)) { var p = l && bl.call(n, "__wrapped__"), _ = s && bl.call(t, "__wrapped__"); if (p || _) { var v = p ? n.value() : n, g = _ ? t.value() : t; return i || (i = new wr), u(v, g, r, e, i) } } return !!h && (i || (i = new wr), vi(n, t, r, e, u, i));
    } function Le (n) { return cc(n) && zs(n) == Gn } function Ce (n, t, r, e) { var u = r.length, i = u, o = !e; if (null == n) return !i; for (n = ll(n); u--;) { var f = r[u]; if (o && f[2] ? f[1] !== n[f[0]] : !(f[0] in n)) return !1 } for (; ++u < i;) { f = r[u]; var c = f[0], a = n[c], l = f[1]; if (o && f[2]) { if (a === X && !(c in n)) return !1 } else { var s = new wr; if (e) var h = e(a, l, c, n, t, s); if (!(h === X ? Se(l, a, hn | pn, e, s) : h)) return !1 } } return !0 } function Ue (n) { return !(!fc(n) || Di(n)) && (uc(n) ? kl : Zt).test(to(n)) } function Be (n) { return cc(n) && we(n) == nt } function Te (n) {
      return cc(n) && zs(n) == tt;
    } function $e (n) { return cc(n) && oc(n.length) && !!Kr[we(n)] } function De (n) { return "function" == typeof n ? n : null == n ? La : "object" == typeof n ? bh(n) ? Ze(n[0], n[1]) : qe(n) : Fa(n) } function Me (n) { if (!Mi(n)) return Vl(n); var t = []; for (var r in ll(n)) bl.call(n, r) && "constructor" != r && t.push(r); return t } function Fe (n) { if (!fc(n)) return Zi(n); var t = Mi(n), r = []; for (var e in n) ("constructor" != e || !t && bl.call(n, e)) && r.push(e); return r } function Ne (n, t) { return n < t } function Pe (n, t) {
      var r = -1, e = Hf(n) ? il(n.length) : []; return ys(n, function (n, u, i) {
        e[++r] = t(n, u, i)
      }), e
    } function qe (n) { var t = ji(n); return 1 == t.length && t[0][2] ? Ni(t[0][0], t[0][1]) : function (r) { return r === n || Ce(r, n, t) } } function Ze (n, t) { return Bi(n) && Fi(t) ? Ni(no(n), t) : function (r) { var e = Mc(r, n); return e === X && e === t ? Nc(r, n) : Se(t, e, hn | pn) } } function Ke (n, t, r, e, u) { n !== t && bs(t, function (i, o) { if (u || (u = new wr), fc(i)) Ve(n, t, o, r, Ke, e, u); else { var f = e ? e(Ji(n, o), i, o + "", n, t, u) : X; f === X && (f = i), Er(n, o, f) } }, qc) } function Ve (n, t, r, e, u, i, o) {
      var f = Ji(n, r), c = Ji(t, r), a = o.get(c); if (a) return Er(n, r, a), X; var l = i ? i(f, c, r + "", n, t, o) : X, s = l === X;
      if (s) { var h = bh(c), p = !h && mh(c), _ = !h && !p && Oh(c); l = c, h || p || _ ? bh(f) ? l = f : Jf(f) ? l = Tu(f) : p ? (s = !1, l = Iu(c, !0)) : _ ? (s = !1, l = Wu(c, !0)) : l = [] : gc(c) || dh(c) ? (l = f, dh(f) ? l = Rc(f) : fc(f) && !uc(f) || (l = Ei(c))) : s = !1 } s && (o.set(c, l), u(l, c, e, i, o), o.delete(c)), Er(n, r, l)
    } function Ge (n, t) { var r = n.length; if (r) return t += t < 0 ? r : 0, Ci(t, r) ? n[t] : X } function He (n, t, r) {
      t = t.length ? c(t, function (n) { return bh(n) ? function (t) { return _e(t, 1 === n.length ? n[0] : n) } : n }) : [La]; var e = -1; return t = c(t, z(mi())), A(Pe(n, function (n, r, u) {
        return {
          criteria: c(t, function (t) {
            return t(n)
          }), index: ++e, value: n
        }
      }), function (n, t) { return Cu(n, t, r) })
    } function Je (n, t) { return Ye(n, t, function (t, r) { return Nc(n, r) }) } function Ye (n, t, r) { for (var e = -1, u = t.length, i = {}; ++e < u;) { var o = t[e], f = _e(n, o); r(f, o) && fu(i, ku(o, n), f) } return i } function Qe (n) { return function (t) { return _e(t, n) } } function Xe (n, t, r, e) { var u = e ? d : y, i = -1, o = t.length, f = n; for (n === t && (t = Tu(t)), r && (f = c(n, z(r))); ++i < o;)for (var a = 0, l = t[i], s = r ? r(l) : l; (a = u(f, s, a, e)) > -1;)f !== n && Ll.call(f, a, 1), Ll.call(n, a, 1); return n } function nu (n, t) {
      for (var r = n ? t.length : 0, e = r - 1; r--;) {
        var u = t[r]; if (r == e || u !== i) { var i = u; Ci(u) ? Ll.call(n, u, 1) : yu(n, u) }
      } return n
    } function tu (n, t) { return n + Nl(Ql() * (t - n + 1)) } function ru (n, t, r, e) { for (var u = -1, i = Gl(Fl((t - n) / (r || 1)), 0), o = il(i); i--;)o[e ? i : ++u] = n, n += r; return o } function eu (n, t) { var r = ""; if (!n || t < 1 || t > Wn) return r; do t % 2 && (r += n), t = Nl(t / 2), t && (n += n); while (t); return r } function uu (n, t) { return Ls(Vi(n, t, La), n + "") } function iu (n) { return Ir(ra(n)) } function ou (n, t) { var r = ra(n); return Xi(r, Mr(t, 0, r.length)) } function fu (n, t, r, e) {
      if (!fc(n)) return n; t = ku(t, n);
      for (var u = -1, i = t.length, o = i - 1, f = n; null != f && ++u < i;) { var c = no(t[u]), a = r; if ("__proto__" === c || "constructor" === c || "prototype" === c) return n; if (u != o) { var l = f[c]; a = e ? e(l, c, f) : X, a === X && (a = fc(l) ? l : Ci(t[u + 1]) ? [] : {}) } Sr(f, c, a), f = f[c] } return n
    } function cu (n) { return Xi(ra(n)) } function au (n, t, r) { var e = -1, u = n.length; t < 0 && (t = -t > u ? 0 : u + t), r = r > u ? u : r, r < 0 && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0; for (var i = il(u); ++e < u;)i[e] = n[e + t]; return i } function lu (n, t) { var r; return ys(n, function (n, e, u) { return r = t(n, e, u), !r }), !!r } function su (n, t, r) {
      var e = 0, u = null == n ? e : n.length; if ("number" == typeof t && t === t && u <= Tn) { for (; e < u;) { var i = e + u >>> 1, o = n[i]; null !== o && !bc(o) && (r ? o <= t : o < t) ? e = i + 1 : u = i } return u } return hu(n, t, La, r)
    } function hu (n, t, r, e) { var u = 0, i = null == n ? 0 : n.length; if (0 === i) return 0; t = r(t); for (var o = t !== t, f = null === t, c = bc(t), a = t === X; u < i;) { var l = Nl((u + i) / 2), s = r(n[l]), h = s !== X, p = null === s, _ = s === s, v = bc(s); if (o) var g = e || _; else g = a ? _ && (e || h) : f ? _ && h && (e || !p) : c ? _ && h && !p && (e || !v) : !p && !v && (e ? s <= t : s < t); g ? u = l + 1 : i = l } return Hl(i, Bn) } function pu (n, t) {
      for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
        var o = n[r], f = t ? t(o) : o; if (!r || !Gf(f, c)) { var c = f; i[u++] = 0 === o ? 0 : o }
      } return i
    } function _u (n) { return "number" == typeof n ? n : bc(n) ? Cn : +n } function vu (n) { if ("string" == typeof n) return n; if (bh(n)) return c(n, vu) + ""; if (bc(n)) return vs ? vs.call(n) : ""; var t = n + ""; return "0" == t && 1 / n == -Sn ? "-0" : t } function gu (n, t, r) {
      var e = -1, u = o, i = n.length, c = !0, a = [], l = a; if (r) c = !1, u = f; else if (i >= tn) { var s = t ? null : ks(n); if (s) return P(s); c = !1, u = S, l = new yr } else l = t ? [] : a; n: for (; ++e < i;) {
        var h = n[e], p = t ? t(h) : h; if (h = r || 0 !== h ? h : 0, c && p === p) {
          for (var _ = l.length; _--;)if (l[_] === p) continue n;
          t && l.push(p), a.push(h)
        } else u(l, p, r) || (l !== a && l.push(p), a.push(h))
      } return a
    } function yu (n, t) { return t = ku(t, n), n = Gi(n, t), null == n || delete n[no(jo(t))] } function du (n, t, r, e) { return fu(n, t, r(_e(n, t)), e) } function bu (n, t, r, e) { for (var u = n.length, i = e ? u : -1; (e ? i-- : ++i < u) && t(n[i], i, n);); return r ? au(n, e ? 0 : i, e ? i + 1 : u) : au(n, e ? i + 1 : 0, e ? u : i) } function wu (n, t) { var r = n; return r instanceof Ct && (r = r.value()), l(t, function (n, t) { return t.func.apply(t.thisArg, a([n], t.args)) }, r) } function mu (n, t, r) {
      var e = n.length; if (e < 2) return e ? gu(n[0]) : [];
      for (var u = -1, i = il(e); ++u < e;)for (var o = n[u], f = -1; ++f < e;)f != u && (i[u] = Hr(i[u] || o, n[f], t, r)); return gu(ee(i, 1), t, r)
    } function xu (n, t, r) { for (var e = -1, u = n.length, i = t.length, o = {}; ++e < u;) { r(o, n[e], e < i ? t[e] : X) } return o } function ju (n) { return Jf(n) ? n : [] } function Au (n) { return "function" == typeof n ? n : La } function ku (n, t) { return bh(n) ? n : Bi(n, t) ? [n] : Cs(Ec(n)) } function Ou (n, t, r) { var e = n.length; return r = r === X ? e : r, !t && r >= e ? n : au(n, t, r) } function Iu (n, t) {
      if (t) return n.slice(); var r = n.length, e = zl ? zl(r) : new n.constructor(r);
      return n.copy(e), e
    } function Ru (n) { var t = new n.constructor(n.byteLength); return new Rl(t).set(new Rl(n)), t } function zu (n, t) { return new n.constructor(t ? Ru(n.buffer) : n.buffer, n.byteOffset, n.byteLength) } function Eu (n) { var t = new n.constructor(n.source, Nt.exec(n)); return t.lastIndex = n.lastIndex, t } function Su (n) { return _s ? ll(_s.call(n)) : {} } function Wu (n, t) { return new n.constructor(t ? Ru(n.buffer) : n.buffer, n.byteOffset, n.length) } function Lu (n, t) {
      if (n !== t) {
        var r = n !== X, e = null === n, u = n === n, i = bc(n), o = t !== X, f = null === t, c = t === t, a = bc(t);
        if (!f && !a && !i && n > t || i && o && c && !f && !a || e && o && c || !r && c || !u) return 1; if (!e && !i && !a && n < t || a && r && u && !e && !i || f && r && u || !o && u || !c) return -1
      } return 0
    } function Cu (n, t, r) { for (var e = -1, u = n.criteria, i = t.criteria, o = u.length, f = r.length; ++e < o;) { var c = Lu(u[e], i[e]); if (c) { if (e >= f) return c; return c * ("desc" == r[e] ? -1 : 1) } } return n.index - t.index } function Uu (n, t, r, e) {
      for (var u = -1, i = n.length, o = r.length, f = -1, c = t.length, a = Gl(i - o, 0), l = il(c + a), s = !e; ++f < c;)l[f] = t[f]; for (; ++u < o;)(s || u < i) && (l[r[u]] = n[u]); for (; a--;)l[f++] = n[u++]; return l;
    } function Bu (n, t, r, e) { for (var u = -1, i = n.length, o = -1, f = r.length, c = -1, a = t.length, l = Gl(i - f, 0), s = il(l + a), h = !e; ++u < l;)s[u] = n[u]; for (var p = u; ++c < a;)s[p + c] = t[c]; for (; ++o < f;)(h || u < i) && (s[p + r[o]] = n[u++]); return s } function Tu (n, t) { var r = -1, e = n.length; for (t || (t = il(e)); ++r < e;)t[r] = n[r]; return t } function $u (n, t, r, e) { var u = !r; r || (r = {}); for (var i = -1, o = t.length; ++i < o;) { var f = t[i], c = e ? e(r[f], n[f], f, r, n) : X; c === X && (c = n[f]), u ? Br(r, f, c) : Sr(r, f, c) } return r } function Du (n, t) { return $u(n, Is(n), t) } function Mu (n, t) {
      return $u(n, Rs(n), t);
    } function Fu (n, r) { return function (e, u) { var i = bh(e) ? t : Lr, o = r ? r() : {}; return i(e, n, mi(u, 2), o) } } function Nu (n) { return uu(function (t, r) { var e = -1, u = r.length, i = u > 1 ? r[u - 1] : X, o = u > 2 ? r[2] : X; for (i = n.length > 3 && "function" == typeof i ? (u--, i) : X, o && Ui(r[0], r[1], o) && (i = u < 3 ? X : i, u = 1), t = ll(t); ++e < u;) { var f = r[e]; f && n(t, f, e, i) } return t }) } function Pu (n, t) { return function (r, e) { if (null == r) return r; if (!Hf(r)) return n(r, e); for (var u = r.length, i = t ? u : -1, o = ll(r); (t ? i-- : ++i < u) && e(o[i], i, o) !== !1;); return r } } function qu (n) {
      return function (t, r, e) {
        for (var u = -1, i = ll(t), o = e(t), f = o.length; f--;) { var c = o[n ? f : ++u]; if (r(i[c], c, i) === !1) break } return t
      }
    } function Zu (n, t, r) { function e () { return (this && this !== re && this instanceof e ? i : n).apply(u ? r : this, arguments) } var u = t & _n, i = Gu(n); return e } function Ku (n) { return function (t) { t = Ec(t); var r = T(t) ? G(t) : X, e = r ? r[0] : t.charAt(0), u = r ? Ou(r, 1).join("") : t.slice(1); return e[n]() + u } } function Vu (n) { return function (t) { return l(Ra(ca(t).replace($r, "")), n, "") } } function Gu (n) {
      return function () {
        var t = arguments; switch (t.length) {
          case 0: return new n; case 1: return new n(t[0]); case 2: return new n(t[0], t[1]); case 3: return new n(t[0], t[1], t[2]); case 4: return new n(t[0], t[1], t[2], t[3]); case 5: return new n(t[0], t[1], t[2], t[3], t[4]); case 6: return new n(t[0], t[1], t[2], t[3], t[4], t[5]); case 7: return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
        }var r = gs(n.prototype), e = n.apply(r, t); return fc(e) ? e : r
      }
    } function Hu (t, r, e) {
      function u () {
        for (var o = arguments.length, f = il(o), c = o, a = wi(u); c--;)f[c] = arguments[c]; var l = o < 3 && f[0] !== a && f[o - 1] !== a ? [] : N(f, a);
        return o -= l.length, o < e ? oi(t, r, Qu, u.placeholder, X, f, l, X, X, e - o) : n(this && this !== re && this instanceof u ? i : t, this, f)
      } var i = Gu(t); return u
    } function Ju (n) { return function (t, r, e) { var u = ll(t); if (!Hf(t)) { var i = mi(r, 3); t = Pc(t), r = function (n) { return i(u[n], n, u) } } var o = n(t, r, e); return o > -1 ? u[i ? t[o] : o] : X } } function Yu (n) {
      return gi(function (t) {
        var r = t.length, e = r, u = Y.prototype.thru; for (n && t.reverse(); e--;) { var i = t[e]; if ("function" != typeof i) throw new pl(en); if (u && !o && "wrapper" == bi(i)) var o = new Y([], !0) } for (e = o ? e : r; ++e < r;) {
          i = t[e]; var f = bi(i), c = "wrapper" == f ? Os(i) : X; o = c && $i(c[0]) && c[1] == (mn | yn | bn | xn) && !c[4].length && 1 == c[9] ? o[bi(c[0])].apply(o, c[3]) : 1 == i.length && $i(i) ? o[f]() : o.thru(i)
        } return function () { var n = arguments, e = n[0]; if (o && 1 == n.length && bh(e)) return o.plant(e).value(); for (var u = 0, i = r ? t[u].apply(this, n) : e; ++u < r;)i = t[u].call(this, i); return i }
      })
    } function Qu (n, t, r, e, u, i, o, f, c, a) {
      function l () {
        for (var y = arguments.length, d = il(y), b = y; b--;)d[b] = arguments[b]; if (_) var w = wi(l), m = C(d, w); if (e && (d = Uu(d, e, u, _)), i && (d = Bu(d, i, o, _)),
          y -= m, _ && y < a) { return oi(n, t, Qu, l.placeholder, r, d, N(d, w), f, c, a - y) } var x = h ? r : this, j = p ? x[n] : n; return y = d.length, f ? d = Hi(d, f) : v && y > 1 && d.reverse(), s && c < y && (d.length = c), this && this !== re && this instanceof l && (j = g || Gu(j)), j.apply(x, d)
      } var s = t & mn, h = t & _n, p = t & vn, _ = t & (yn | dn), v = t & jn, g = p ? X : Gu(n); return l
    } function Xu (n, t) { return function (r, e) { return Oe(r, n, t(e), {}) } } function ni (n, t) {
      return function (r, e) {
        var u; if (r === X && e === X) return t; if (r !== X && (u = r), e !== X) {
          if (u === X) return e; "string" == typeof r || "string" == typeof e ? (r = vu(r),
            e = vu(e)) : (r = _u(r), e = _u(e)), u = n(r, e)
        } return u
      }
    } function ti (t) { return gi(function (r) { return r = c(r, z(mi())), uu(function (e) { var u = this; return t(r, function (t) { return n(t, u, e) }) }) }) } function ri (n, t) { t = t === X ? " " : vu(t); var r = t.length; if (r < 2) return r ? eu(t, n) : t; var e = eu(t, Fl(n / V(t))); return T(t) ? Ou(G(e), 0, n).join("") : e.slice(0, n) } function ei (t, r, e, u) {
      function i () {
        for (var r = -1, c = arguments.length, a = -1, l = u.length, s = il(l + c), h = this && this !== re && this instanceof i ? f : t; ++a < l;)s[a] = u[a]; for (; c--;)s[a++] = arguments[++r];
        return n(h, o ? e : this, s)
      } var o = r & _n, f = Gu(t); return i
    } function ui (n) { return function (t, r, e) { return e && "number" != typeof e && Ui(t, r, e) && (r = e = X), t = Ac(t), r === X ? (r = t, t = 0) : r = Ac(r), e = e === X ? t < r ? 1 : -1 : Ac(e), ru(t, r, e, n) } } function ii (n) { return function (t, r) { return "string" == typeof t && "string" == typeof r || (t = Ic(t), r = Ic(r)), n(t, r) } } function oi (n, t, r, e, u, i, o, f, c, a) {
      var l = t & yn, s = l ? o : X, h = l ? X : o, p = l ? i : X, _ = l ? X : i; t |= l ? bn : wn, t &= ~(l ? wn : bn), t & gn || (t &= ~(_n | vn)); var v = [n, t, u, p, s, _, h, f, c, a], g = r.apply(X, v); return $i(n) && Ss(g, v), g.placeholder = e,
        Yi(g, n, t)
    } function fi (n) { var t = al[n]; return function (n, r) { if (n = Ic(n), r = null == r ? 0 : Hl(kc(r), 292), r && Zl(n)) { var e = (Ec(n) + "e").split("e"); return e = (Ec(t(e[0] + "e" + (+e[1] + r))) + "e").split("e"), +(e[0] + "e" + (+e[1] - r)) } return t(n) } } function ci (n) { return function (t) { var r = zs(t); return r == Gn ? M(t) : r == tt ? q(t) : I(t, n(t)) } } function ai (n, t, r, e, u, i, o, f) {
      var c = t & vn; if (!c && "function" != typeof n) throw new pl(en); var a = e ? e.length : 0; if (a || (t &= ~(bn | wn), e = u = X), o = o === X ? o : Gl(kc(o), 0), f = f === X ? f : kc(f), a -= u ? u.length : 0, t & wn) {
        var l = e, s = u;
        e = u = X
      } var h = c ? X : Os(n), p = [n, t, r, e, u, l, s, i, o, f]; if (h && qi(p, h), n = p[0], t = p[1], r = p[2], e = p[3], u = p[4], f = p[9] = p[9] === X ? c ? 0 : n.length : Gl(p[9] - a, 0), !f && t & (yn | dn) && (t &= ~(yn | dn)), t && t != _n) _ = t == yn || t == dn ? Hu(n, t, f) : t != bn && t != (_n | bn) || u.length ? Qu.apply(X, p) : ei(n, t, r, e); else var _ = Zu(n, t, r); return Yi((h ? ms : Ss)(_, p), n, t)
    } function li (n, t, r, e) { return n === X || Gf(n, gl[r]) && !bl.call(e, r) ? t : n } function si (n, t, r, e, u, i) { return fc(n) && fc(t) && (i.set(t, n), Ke(n, t, X, si, i), i.delete(t)), n } function hi (n) { return gc(n) ? X : n } function pi (n, t, r, e, u, i) {
      var o = r & hn, f = n.length, c = t.length; if (f != c && !(o && c > f)) return !1; var a = i.get(n), l = i.get(t); if (a && l) return a == t && l == n; var s = -1, p = !0, _ = r & pn ? new yr : X; for (i.set(n, t), i.set(t, n); ++s < f;) { var v = n[s], g = t[s]; if (e) var y = o ? e(g, v, s, t, n, i) : e(v, g, s, n, t, i); if (y !== X) { if (y) continue; p = !1; break } if (_) { if (!h(t, function (n, t) { if (!S(_, t) && (v === n || u(v, n, r, e, i))) return _.push(t) })) { p = !1; break } } else if (v !== g && !u(v, g, r, e, i)) { p = !1; break } } return i.delete(n), i.delete(t), p
    } function _i (n, t, r, e, u, i, o) {
      switch (r) {
        case ct: if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset) return !1;
          n = n.buffer, t = t.buffer; case ft: return !(n.byteLength != t.byteLength || !i(new Rl(n), new Rl(t))); case Nn: case Pn: case Hn: return Gf(+n, +t); case Zn: return n.name == t.name && n.message == t.message; case nt: case rt: return n == t + ""; case Gn: var f = M; case tt: var c = e & hn; if (f || (f = P), n.size != t.size && !c) return !1; var a = o.get(n); if (a) return a == t; e |= pn, o.set(n, t); var l = pi(f(n), f(t), e, u, i, o); return o.delete(n), l; case et: if (_s) return _s.call(n) == _s.call(t)
      }return !1
    } function vi (n, t, r, e, u, i) {
      var o = r & hn, f = yi(n), c = f.length; if (c != yi(t).length && !o) return !1;
      for (var a = c; a--;) { var l = f[a]; if (!(o ? l in t : bl.call(t, l))) return !1 } var s = i.get(n), h = i.get(t); if (s && h) return s == t && h == n; var p = !0; i.set(n, t), i.set(t, n); for (var _ = o; ++a < c;) { l = f[a]; var v = n[l], g = t[l]; if (e) var y = o ? e(g, v, l, t, n, i) : e(v, g, l, n, t, i); if (!(y === X ? v === g || u(v, g, r, e, i) : y)) { p = !1; break } _ || (_ = "constructor" == l) } if (p && !_) { var d = n.constructor, b = t.constructor; d != b && "constructor" in n && "constructor" in t && !("function" == typeof d && d instanceof d && "function" == typeof b && b instanceof b) && (p = !1) } return i.delete(n),
        i.delete(t), p
    } function gi (n) { return Ls(Vi(n, X, _o), n + "") } function yi (n) { return de(n, Pc, Is) } function di (n) { return de(n, qc, Rs) } function bi (n) { for (var t = n.name + "", r = fs[t], e = bl.call(fs, t) ? r.length : 0; e--;) { var u = r[e], i = u.func; if (null == i || i == n) return u.name } return t } function wi (n) { return (bl.call(Z, "placeholder") ? Z : n).placeholder } function mi () { var n = Z.iteratee || Ca; return n = n === Ca ? De : n, arguments.length ? n(arguments[0], arguments[1]) : n } function xi (n, t) {
      var r = n.__data__; return Ti(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
    } function ji (n) { for (var t = Pc(n), r = t.length; r--;) { var e = t[r], u = n[e]; t[r] = [e, u, Fi(u)] } return t } function Ai (n, t) { var r = B(n, t); return Ue(r) ? r : X } function ki (n) { var t = bl.call(n, Bl), r = n[Bl]; try { n[Bl] = X; var e = !0 } catch (n) { } var u = xl.call(n); return e && (t ? n[Bl] = r : delete n[Bl]), u } function Oi (n, t, r) { for (var e = -1, u = r.length; ++e < u;) { var i = r[e], o = i.size; switch (i.type) { case "drop": n += o; break; case "dropRight": t -= o; break; case "take": t = Hl(t, n + o); break; case "takeRight": n = Gl(n, t - o) } } return { start: n, end: t } } function Ii (n) {
      var t = n.match(Bt);
      return t ? t[1].split(Tt) : []
    } function Ri (n, t, r) { t = ku(t, n); for (var e = -1, u = t.length, i = !1; ++e < u;) { var o = no(t[e]); if (!(i = null != n && r(n, o))) break; n = n[o] } return i || ++e != u ? i : (u = null == n ? 0 : n.length, !!u && oc(u) && Ci(o, u) && (bh(n) || dh(n))) } function zi (n) { var t = n.length, r = new n.constructor(t); return t && "string" == typeof n[0] && bl.call(n, "index") && (r.index = n.index, r.input = n.input), r } function Ei (n) { return "function" != typeof n.constructor || Mi(n) ? {} : gs(El(n)) } function Si (n, t, r) {
      var e = n.constructor; switch (t) {
        case ft: return Ru(n);
        case Nn: case Pn: return new e(+n); case ct: return zu(n, r); case at: case lt: case st: case ht: case pt: case _t: case vt: case gt: case yt: return Wu(n, r); case Gn: return new e; case Hn: case rt: return new e(n); case nt: return Eu(n); case tt: return new e; case et: return Su(n)
      }
    } function Wi (n, t) { var r = t.length; if (!r) return n; var e = r - 1; return t[e] = (r > 1 ? "& " : "") + t[e], t = t.join(r > 2 ? ", " : " "), n.replace(Ut, "{\n/* [wrapped with " + t + "] */\n") } function Li (n) { return bh(n) || dh(n) || !!(Cl && n && n[Cl]) } function Ci (n, t) {
      var r = typeof n;
      return t = null == t ? Wn : t, !!t && ("number" == r || "symbol" != r && Vt.test(n)) && n > -1 && n % 1 == 0 && n < t
    } function Ui (n, t, r) { if (!fc(r)) return !1; var e = typeof t; return !!("number" == e ? Hf(r) && Ci(t, r.length) : "string" == e && t in r) && Gf(r[t], n) } function Bi (n, t) { if (bh(n)) return !1; var r = typeof n; return !("number" != r && "symbol" != r && "boolean" != r && null != n && !bc(n)) || (zt.test(n) || !Rt.test(n) || null != t && n in ll(t)) } function Ti (n) { var t = typeof n; return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== n : null === n } function $i (n) {
      var t = bi(n), r = Z[t]; if ("function" != typeof r || !(t in Ct.prototype)) return !1; if (n === r) return !0; var e = Os(r); return !!e && n === e[0]
    } function Di (n) { return !!ml && ml in n } function Mi (n) { var t = n && n.constructor; return n === ("function" == typeof t && t.prototype || gl) } function Fi (n) { return n === n && !fc(n) } function Ni (n, t) { return function (r) { return null != r && (r[n] === t && (t !== X || n in ll(r))) } } function Pi (n) { var t = Cf(n, function (n) { return r.size === fn && r.clear(), n }), r = t.cache; return t } function qi (n, t) {
      var r = n[1], e = t[1], u = r | e, i = u < (_n | vn | mn), o = e == mn && r == yn || e == mn && r == xn && n[7].length <= t[8] || e == (mn | xn) && t[7].length <= t[8] && r == yn;
      if (!i && !o) return n; e & _n && (n[2] = t[2], u |= r & _n ? 0 : gn); var f = t[3]; if (f) { var c = n[3]; n[3] = c ? Uu(c, f, t[4]) : f, n[4] = c ? N(n[3], cn) : t[4] } return f = t[5], f && (c = n[5], n[5] = c ? Bu(c, f, t[6]) : f, n[6] = c ? N(n[5], cn) : t[6]), f = t[7], f && (n[7] = f), e & mn && (n[8] = null == n[8] ? t[8] : Hl(n[8], t[8])), null == n[9] && (n[9] = t[9]), n[0] = t[0], n[1] = u, n
    } function Zi (n) { var t = []; if (null != n) for (var r in ll(n)) t.push(r); return t } function Ki (n) { return xl.call(n) } function Vi (t, r, e) {
      return r = Gl(r === X ? t.length - 1 : r, 0), function () {
        for (var u = arguments, i = -1, o = Gl(u.length - r, 0), f = il(o); ++i < o;)f[i] = u[r + i];
        i = -1; for (var c = il(r + 1); ++i < r;)c[i] = u[i]; return c[r] = e(f), n(t, this, c)
      }
    } function Gi (n, t) { return t.length < 2 ? n : _e(n, au(t, 0, -1)) } function Hi (n, t) { for (var r = n.length, e = Hl(t.length, r), u = Tu(n); e--;) { var i = t[e]; n[e] = Ci(i, r) ? u[i] : X } return n } function Ji (n, t) { if (("constructor" !== t || "function" != typeof n[t]) && "__proto__" != t) return n[t] } function Yi (n, t, r) { var e = t + ""; return Ls(n, Wi(e, ro(Ii(e), r))) } function Qi (n) {
      var t = 0, r = 0; return function () {
        var e = Jl(), u = In - (e - r); if (r = e, u > 0) { if (++t >= On) return arguments[0] } else t = 0;
        return n.apply(X, arguments)
      }
    } function Xi (n, t) { var r = -1, e = n.length, u = e - 1; for (t = t === X ? e : t; ++r < t;) { var i = tu(r, u), o = n[i]; n[i] = n[r], n[r] = o } return n.length = t, n } function no (n) { if ("string" == typeof n || bc(n)) return n; var t = n + ""; return "0" == t && 1 / n == -Sn ? "-0" : t } function to (n) { if (null != n) { try { return dl.call(n) } catch (n) { } try { return n + "" } catch (n) { } } return "" } function ro (n, t) { return r($n, function (r) { var e = "_." + r[0]; t & r[1] && !o(n, e) && n.push(e) }), n.sort() } function eo (n) {
      if (n instanceof Ct) return n.clone(); var t = new Y(n.__wrapped__, n.__chain__);
      return t.__actions__ = Tu(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t
    } function uo (n, t, r) { t = (r ? Ui(n, t, r) : t === X) ? 1 : Gl(kc(t), 0); var e = null == n ? 0 : n.length; if (!e || t < 1) return []; for (var u = 0, i = 0, o = il(Fl(e / t)); u < e;)o[i++] = au(n, u, u += t); return o } function io (n) { for (var t = -1, r = null == n ? 0 : n.length, e = 0, u = []; ++t < r;) { var i = n[t]; i && (u[e++] = i) } return u } function oo () {
      var n = arguments.length; if (!n) return []; for (var t = il(n - 1), r = arguments[0], e = n; e--;)t[e - 1] = arguments[e]; return a(bh(r) ? Tu(r) : [r], ee(t, 1));
    } function fo (n, t, r) { var e = null == n ? 0 : n.length; return e ? (t = r || t === X ? 1 : kc(t), au(n, t < 0 ? 0 : t, e)) : [] } function co (n, t, r) { var e = null == n ? 0 : n.length; return e ? (t = r || t === X ? 1 : kc(t), t = e - t, au(n, 0, t < 0 ? 0 : t)) : [] } function ao (n, t) { return n && n.length ? bu(n, mi(t, 3), !0, !0) : [] } function lo (n, t) { return n && n.length ? bu(n, mi(t, 3), !0) : [] } function so (n, t, r, e) { var u = null == n ? 0 : n.length; return u ? (r && "number" != typeof r && Ui(n, t, r) && (r = 0, e = u), ne(n, t, r, e)) : [] } function ho (n, t, r) {
      var e = null == n ? 0 : n.length; if (!e) return -1; var u = null == r ? 0 : kc(r);
      return u < 0 && (u = Gl(e + u, 0)), g(n, mi(t, 3), u)
    } function po (n, t, r) { var e = null == n ? 0 : n.length; if (!e) return -1; var u = e - 1; return r !== X && (u = kc(r), u = r < 0 ? Gl(e + u, 0) : Hl(u, e - 1)), g(n, mi(t, 3), u, !0) } function _o (n) { return (null == n ? 0 : n.length) ? ee(n, 1) : [] } function vo (n) { return (null == n ? 0 : n.length) ? ee(n, Sn) : [] } function go (n, t) { return (null == n ? 0 : n.length) ? (t = t === X ? 1 : kc(t), ee(n, t)) : [] } function yo (n) { for (var t = -1, r = null == n ? 0 : n.length, e = {}; ++t < r;) { var u = n[t]; e[u[0]] = u[1] } return e } function bo (n) { return n && n.length ? n[0] : X } function wo (n, t, r) {
      var e = null == n ? 0 : n.length; if (!e) return -1; var u = null == r ? 0 : kc(r); return u < 0 && (u = Gl(e + u, 0)), y(n, t, u)
    } function mo (n) { return (null == n ? 0 : n.length) ? au(n, 0, -1) : [] } function xo (n, t) { return null == n ? "" : Kl.call(n, t) } function jo (n) { var t = null == n ? 0 : n.length; return t ? n[t - 1] : X } function Ao (n, t, r) { var e = null == n ? 0 : n.length; if (!e) return -1; var u = e; return r !== X && (u = kc(r), u = u < 0 ? Gl(e + u, 0) : Hl(u, e - 1)), t === t ? K(n, t, u) : g(n, b, u, !0) } function ko (n, t) { return n && n.length ? Ge(n, kc(t)) : X } function Oo (n, t) {
      return n && n.length && t && t.length ? Xe(n, t) : n;
    } function Io (n, t, r) { return n && n.length && t && t.length ? Xe(n, t, mi(r, 2)) : n } function Ro (n, t, r) { return n && n.length && t && t.length ? Xe(n, t, X, r) : n } function zo (n, t) { var r = []; if (!n || !n.length) return r; var e = -1, u = [], i = n.length; for (t = mi(t, 3); ++e < i;) { var o = n[e]; t(o, e, n) && (r.push(o), u.push(e)) } return nu(n, u), r } function Eo (n) { return null == n ? n : Xl.call(n) } function So (n, t, r) { var e = null == n ? 0 : n.length; return e ? (r && "number" != typeof r && Ui(n, t, r) ? (t = 0, r = e) : (t = null == t ? 0 : kc(t), r = r === X ? e : kc(r)), au(n, t, r)) : [] } function Wo (n, t) {
      return su(n, t)
    } function Lo (n, t, r) { return hu(n, t, mi(r, 2)) } function Co (n, t) { var r = null == n ? 0 : n.length; if (r) { var e = su(n, t); if (e < r && Gf(n[e], t)) return e } return -1 } function Uo (n, t) { return su(n, t, !0) } function Bo (n, t, r) { return hu(n, t, mi(r, 2), !0) } function To (n, t) { if (null == n ? 0 : n.length) { var r = su(n, t, !0) - 1; if (Gf(n[r], t)) return r } return -1 } function $o (n) { return n && n.length ? pu(n) : [] } function Do (n, t) { return n && n.length ? pu(n, mi(t, 2)) : [] } function Mo (n) { var t = null == n ? 0 : n.length; return t ? au(n, 1, t) : [] } function Fo (n, t, r) {
      return n && n.length ? (t = r || t === X ? 1 : kc(t), au(n, 0, t < 0 ? 0 : t)) : []
    } function No (n, t, r) { var e = null == n ? 0 : n.length; return e ? (t = r || t === X ? 1 : kc(t), t = e - t, au(n, t < 0 ? 0 : t, e)) : [] } function Po (n, t) { return n && n.length ? bu(n, mi(t, 3), !1, !0) : [] } function qo (n, t) { return n && n.length ? bu(n, mi(t, 3)) : [] } function Zo (n) { return n && n.length ? gu(n) : [] } function Ko (n, t) { return n && n.length ? gu(n, mi(t, 2)) : [] } function Vo (n, t) { return t = "function" == typeof t ? t : X, n && n.length ? gu(n, X, t) : [] } function Go (n) {
      if (!n || !n.length) return []; var t = 0; return n = i(n, function (n) {
        if (Jf(n)) return t = Gl(n.length, t), !0
      }), O(t, function (t) { return c(n, m(t)) })
    } function Ho (t, r) { if (!t || !t.length) return []; var e = Go(t); return null == r ? e : c(e, function (t) { return n(r, X, t) }) } function Jo (n, t) { return xu(n || [], t || [], Sr) } function Yo (n, t) { return xu(n || [], t || [], fu) } function Qo (n) { var t = Z(n); return t.__chain__ = !0, t } function Xo (n, t) { return t(n), n } function nf (n, t) { return t(n) } function tf () { return Qo(this) } function rf () { return new Y(this.value(), this.__chain__) } function ef () {
      this.__values__ === X && (this.__values__ = jc(this.value()));
      var n = this.__index__ >= this.__values__.length; return { done: n, value: n ? X : this.__values__[this.__index__++] }
    } function uf () { return this } function of (n) { for (var t, r = this; r instanceof J;) { var e = eo(r); e.__index__ = 0, e.__values__ = X, t ? u.__wrapped__ = e : t = e; var u = e; r = r.__wrapped__ } return u.__wrapped__ = n, t } function ff () {
      var n = this.__wrapped__; if (n instanceof Ct) { var t = n; return this.__actions__.length && (t = new Ct(this)), t = t.reverse(), t.__actions__.push({ func: nf, args: [Eo], thisArg: X }), new Y(t, this.__chain__) } return this.thru(Eo);
    } function cf () { return wu(this.__wrapped__, this.__actions__) } function af (n, t, r) { var e = bh(n) ? u : Jr; return r && Ui(n, t, r) && (t = X), e(n, mi(t, 3)) } function lf (n, t) { return (bh(n) ? i : te)(n, mi(t, 3)) } function sf (n, t) { return ee(yf(n, t), 1) } function hf (n, t) { return ee(yf(n, t), Sn) } function pf (n, t, r) { return r = r === X ? 1 : kc(r), ee(yf(n, t), r) } function _f (n, t) { return (bh(n) ? r : ys)(n, mi(t, 3)) } function vf (n, t) { return (bh(n) ? e : ds)(n, mi(t, 3)) } function gf (n, t, r, e) {
      n = Hf(n) ? n : ra(n), r = r && !e ? kc(r) : 0; var u = n.length; return r < 0 && (r = Gl(u + r, 0)),
        dc(n) ? r <= u && n.indexOf(t, r) > -1 : !!u && y(n, t, r) > -1
    } function yf (n, t) { return (bh(n) ? c : Pe)(n, mi(t, 3)) } function df (n, t, r, e) { return null == n ? [] : (bh(t) || (t = null == t ? [] : [t]), r = e ? X : r, bh(r) || (r = null == r ? [] : [r]), He(n, t, r)) } function bf (n, t, r) { var e = bh(n) ? l : j, u = arguments.length < 3; return e(n, mi(t, 4), r, u, ys) } function wf (n, t, r) { var e = bh(n) ? s : j, u = arguments.length < 3; return e(n, mi(t, 4), r, u, ds) } function mf (n, t) { return (bh(n) ? i : te)(n, Uf(mi(t, 3))) } function xf (n) { return (bh(n) ? Ir : iu)(n) } function jf (n, t, r) {
      return t = (r ? Ui(n, t, r) : t === X) ? 1 : kc(t),
        (bh(n) ? Rr : ou)(n, t)
    } function Af (n) { return (bh(n) ? zr : cu)(n) } function kf (n) { if (null == n) return 0; if (Hf(n)) return dc(n) ? V(n) : n.length; var t = zs(n); return t == Gn || t == tt ? n.size : Me(n).length } function Of (n, t, r) { var e = bh(n) ? h : lu; return r && Ui(n, t, r) && (t = X), e(n, mi(t, 3)) } function If (n, t) { if ("function" != typeof t) throw new pl(en); return n = kc(n), function () { if (--n < 1) return t.apply(this, arguments) } } function Rf (n, t, r) { return t = r ? X : t, t = n && null == t ? n.length : t, ai(n, mn, X, X, X, X, t) } function zf (n, t) {
      var r; if ("function" != typeof t) throw new pl(en);
      return n = kc(n), function () { return --n > 0 && (r = t.apply(this, arguments)), n <= 1 && (t = X), r }
    } function Ef (n, t, r) { t = r ? X : t; var e = ai(n, yn, X, X, X, X, X, t); return e.placeholder = Ef.placeholder, e } function Sf (n, t, r) { t = r ? X : t; var e = ai(n, dn, X, X, X, X, X, t); return e.placeholder = Sf.placeholder, e } function Wf (n, t, r) {
      function e (t) { var r = h, e = p; return h = p = X, d = t, v = n.apply(e, r) } function u (n) { return d = n, g = Ws(f, t), b ? e(n) : v } function i (n) { var r = n - y, e = n - d, u = t - r; return w ? Hl(u, _ - e) : u } function o (n) {
        var r = n - y, e = n - d; return y === X || r >= t || r < 0 || w && e >= _;
      } function f () { var n = fh(); return o(n) ? c(n) : (g = Ws(f, i(n)), X) } function c (n) { return g = X, m && h ? e(n) : (h = p = X, v) } function a () { g !== X && As(g), d = 0, h = y = p = g = X } function l () { return g === X ? v : c(fh()) } function s () { var n = fh(), r = o(n); if (h = arguments, p = this, y = n, r) { if (g === X) return u(y); if (w) return As(g), g = Ws(f, t), e(y) } return g === X && (g = Ws(f, t)), v } var h, p, _, v, g, y, d = 0, b = !1, w = !1, m = !0; if ("function" != typeof n) throw new pl(en); return t = Ic(t) || 0, fc(r) && (b = !!r.leading, w = "maxWait" in r, _ = w ? Gl(Ic(r.maxWait) || 0, t) : _, m = "trailing" in r ? !!r.trailing : m),
        s.cancel = a, s.flush = l, s
    } function Lf (n) { return ai(n, jn) } function Cf (n, t) { if ("function" != typeof n || null != t && "function" != typeof t) throw new pl(en); var r = function () { var e = arguments, u = t ? t.apply(this, e) : e[0], i = r.cache; if (i.has(u)) return i.get(u); var o = n.apply(this, e); return r.cache = i.set(u, o) || i, o }; return r.cache = new (Cf.Cache || sr), r } function Uf (n) {
      if ("function" != typeof n) throw new pl(en); return function () {
        var t = arguments; switch (t.length) {
          case 0: return !n.call(this); case 1: return !n.call(this, t[0]); case 2:
            return !n.call(this, t[0], t[1]); case 3: return !n.call(this, t[0], t[1], t[2])
        }return !n.apply(this, t)
      }
    } function Bf (n) { return zf(2, n) } function Tf (n, t) { if ("function" != typeof n) throw new pl(en); return t = t === X ? t : kc(t), uu(n, t) } function $f (t, r) { if ("function" != typeof t) throw new pl(en); return r = null == r ? 0 : Gl(kc(r), 0), uu(function (e) { var u = e[r], i = Ou(e, 0, r); return u && a(i, u), n(t, this, i) }) } function Df (n, t, r) {
      var e = !0, u = !0; if ("function" != typeof n) throw new pl(en); return fc(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u),
        Wf(n, t, { leading: e, maxWait: t, trailing: u })
    } function Mf (n) { return Rf(n, 1) } function Ff (n, t) { return ph(Au(t), n) } function Nf () { if (!arguments.length) return []; var n = arguments[0]; return bh(n) ? n : [n] } function Pf (n) { return Fr(n, sn) } function qf (n, t) { return t = "function" == typeof t ? t : X, Fr(n, sn, t) } function Zf (n) { return Fr(n, an | sn) } function Kf (n, t) { return t = "function" == typeof t ? t : X, Fr(n, an | sn, t) } function Vf (n, t) { return null == t || Pr(n, t, Pc(t)) } function Gf (n, t) { return n === t || n !== n && t !== t } function Hf (n) {
      return null != n && oc(n.length) && !uc(n);
    } function Jf (n) { return cc(n) && Hf(n) } function Yf (n) { return n === !0 || n === !1 || cc(n) && we(n) == Nn } function Qf (n) { return cc(n) && 1 === n.nodeType && !gc(n) } function Xf (n) { if (null == n) return !0; if (Hf(n) && (bh(n) || "string" == typeof n || "function" == typeof n.splice || mh(n) || Oh(n) || dh(n))) return !n.length; var t = zs(n); if (t == Gn || t == tt) return !n.size; if (Mi(n)) return !Me(n).length; for (var r in n) if (bl.call(n, r)) return !1; return !0 } function nc (n, t) { return Se(n, t) } function tc (n, t, r) {
      r = "function" == typeof r ? r : X; var e = r ? r(n, t) : X; return e === X ? Se(n, t, X, r) : !!e;
    } function rc (n) { if (!cc(n)) return !1; var t = we(n); return t == Zn || t == qn || "string" == typeof n.message && "string" == typeof n.name && !gc(n) } function ec (n) { return "number" == typeof n && Zl(n) } function uc (n) { if (!fc(n)) return !1; var t = we(n); return t == Kn || t == Vn || t == Fn || t == Xn } function ic (n) { return "number" == typeof n && n == kc(n) } function oc (n) { return "number" == typeof n && n > -1 && n % 1 == 0 && n <= Wn } function fc (n) { var t = typeof n; return null != n && ("object" == t || "function" == t) } function cc (n) { return null != n && "object" == typeof n } function ac (n, t) {
      return n === t || Ce(n, t, ji(t))
    } function lc (n, t, r) { return r = "function" == typeof r ? r : X, Ce(n, t, ji(t), r) } function sc (n) { return vc(n) && n != +n } function hc (n) { if (Es(n)) throw new fl(rn); return Ue(n) } function pc (n) { return null === n } function _c (n) { return null == n } function vc (n) { return "number" == typeof n || cc(n) && we(n) == Hn } function gc (n) { if (!cc(n) || we(n) != Yn) return !1; var t = El(n); if (null === t) return !0; var r = bl.call(t, "constructor") && t.constructor; return "function" == typeof r && r instanceof r && dl.call(r) == jl } function yc (n) {
      return ic(n) && n >= -Wn && n <= Wn
    } function dc (n) { return "string" == typeof n || !bh(n) && cc(n) && we(n) == rt } function bc (n) { return "symbol" == typeof n || cc(n) && we(n) == et } function wc (n) { return n === X } function mc (n) { return cc(n) && zs(n) == it } function xc (n) { return cc(n) && we(n) == ot } function jc (n) { if (!n) return []; if (Hf(n)) return dc(n) ? G(n) : Tu(n); if (Ul && n[Ul]) return D(n[Ul]()); var t = zs(n); return (t == Gn ? M : t == tt ? P : ra)(n) } function Ac (n) { if (!n) return 0 === n ? n : 0; if (n = Ic(n), n === Sn || n === -Sn) { return (n < 0 ? -1 : 1) * Ln } return n === n ? n : 0 } function kc (n) {
      var t = Ac(n), r = t % 1; return t === t ? r ? t - r : t : 0
    } function Oc (n) { return n ? Mr(kc(n), 0, Un) : 0 } function Ic (n) { if ("number" == typeof n) return n; if (bc(n)) return Cn; if (fc(n)) { var t = "function" == typeof n.valueOf ? n.valueOf() : n; n = fc(t) ? t + "" : t } if ("string" != typeof n) return 0 === n ? n : +n; n = R(n); var r = qt.test(n); return r || Kt.test(n) ? Xr(n.slice(2), r ? 2 : 8) : Pt.test(n) ? Cn : +n } function Rc (n) { return $u(n, qc(n)) } function zc (n) { return n ? Mr(kc(n), -Wn, Wn) : 0 === n ? n : 0 } function Ec (n) { return null == n ? "" : vu(n) } function Sc (n, t) {
      var r = gs(n); return null == t ? r : Cr(r, t);
    } function Wc (n, t) { return v(n, mi(t, 3), ue) } function Lc (n, t) { return v(n, mi(t, 3), oe) } function Cc (n, t) { return null == n ? n : bs(n, mi(t, 3), qc) } function Uc (n, t) { return null == n ? n : ws(n, mi(t, 3), qc) } function Bc (n, t) { return n && ue(n, mi(t, 3)) } function Tc (n, t) { return n && oe(n, mi(t, 3)) } function $c (n) { return null == n ? [] : fe(n, Pc(n)) } function Dc (n) { return null == n ? [] : fe(n, qc(n)) } function Mc (n, t, r) { var e = null == n ? X : _e(n, t); return e === X ? r : e } function Fc (n, t) { return null != n && Ri(n, t, xe) } function Nc (n, t) {
      return null != n && Ri(n, t, je);
    } function Pc (n) { return Hf(n) ? Or(n) : Me(n) } function qc (n) { return Hf(n) ? Or(n, !0) : Fe(n) } function Zc (n, t) { var r = {}; return t = mi(t, 3), ue(n, function (n, e, u) { Br(r, t(n, e, u), n) }), r } function Kc (n, t) { var r = {}; return t = mi(t, 3), ue(n, function (n, e, u) { Br(r, e, t(n, e, u)) }), r } function Vc (n, t) { return Gc(n, Uf(mi(t))) } function Gc (n, t) { if (null == n) return {}; var r = c(di(n), function (n) { return [n] }); return t = mi(t), Ye(n, r, function (n, r) { return t(n, r[0]) }) } function Hc (n, t, r) {
      t = ku(t, n); var e = -1, u = t.length; for (u || (u = 1, n = X); ++e < u;) {
        var i = null == n ? X : n[no(t[e])];
        i === X && (e = u, i = r), n = uc(i) ? i.call(n) : i
      } return n
    } function Jc (n, t, r) { return null == n ? n : fu(n, t, r) } function Yc (n, t, r, e) { return e = "function" == typeof e ? e : X, null == n ? n : fu(n, t, r, e) } function Qc (n, t, e) { var u = bh(n), i = u || mh(n) || Oh(n); if (t = mi(t, 4), null == e) { var o = n && n.constructor; e = i ? u ? new o : [] : fc(n) && uc(o) ? gs(El(n)) : {} } return (i ? r : ue)(n, function (n, r, u) { return t(e, n, r, u) }), e } function Xc (n, t) { return null == n || yu(n, t) } function na (n, t, r) { return null == n ? n : du(n, t, Au(r)) } function ta (n, t, r, e) {
      return e = "function" == typeof e ? e : X,
        null == n ? n : du(n, t, Au(r), e)
    } function ra (n) { return null == n ? [] : E(n, Pc(n)) } function ea (n) { return null == n ? [] : E(n, qc(n)) } function ua (n, t, r) { return r === X && (r = t, t = X), r !== X && (r = Ic(r), r = r === r ? r : 0), t !== X && (t = Ic(t), t = t === t ? t : 0), Mr(Ic(n), t, r) } function ia (n, t, r) { return t = Ac(t), r === X ? (r = t, t = 0) : r = Ac(r), n = Ic(n), Ae(n, t, r) } function oa (n, t, r) {
      if (r && "boolean" != typeof r && Ui(n, t, r) && (t = r = X), r === X && ("boolean" == typeof t ? (r = t, t = X) : "boolean" == typeof n && (r = n, n = X)), n === X && t === X ? (n = 0, t = 1) : (n = Ac(n), t === X ? (t = n, n = 0) : t = Ac(t)), n > t) {
        var e = n; n = t, t = e
      } if (r || n % 1 || t % 1) { var u = Ql(); return Hl(n + u * (t - n + Qr("1e-" + ((u + "").length - 1))), t) } return tu(n, t)
    } function fa (n) { return Qh(Ec(n).toLowerCase()) } function ca (n) { return n = Ec(n), n && n.replace(Gt, ve).replace(Dr, "") } function aa (n, t, r) { n = Ec(n), t = vu(t); var e = n.length; r = r === X ? e : Mr(kc(r), 0, e); var u = r; return r -= t.length, r >= 0 && n.slice(r, u) == t } function la (n) { return n = Ec(n), n && At.test(n) ? n.replace(xt, ge) : n } function sa (n) { return n = Ec(n), n && Wt.test(n) ? n.replace(St, "\\$&") : n } function ha (n, t, r) {
      n = Ec(n), t = kc(t);
      var e = t ? V(n) : 0; if (!t || e >= t) return n; var u = (t - e) / 2; return ri(Nl(u), r) + n + ri(Fl(u), r)
    } function pa (n, t, r) { n = Ec(n), t = kc(t); var e = t ? V(n) : 0; return t && e < t ? n + ri(t - e, r) : n } function _a (n, t, r) { n = Ec(n), t = kc(t); var e = t ? V(n) : 0; return t && e < t ? ri(t - e, r) + n : n } function va (n, t, r) { return r || null == t ? t = 0 : t && (t = +t), Yl(Ec(n).replace(Lt, ""), t || 0) } function ga (n, t, r) { return t = (r ? Ui(n, t, r) : t === X) ? 1 : kc(t), eu(Ec(n), t) } function ya () { var n = arguments, t = Ec(n[0]); return n.length < 3 ? t : t.replace(n[1], n[2]) } function da (n, t, r) {
      return r && "number" != typeof r && Ui(n, t, r) && (t = r = X),
        (r = r === X ? Un : r >>> 0) ? (n = Ec(n), n && ("string" == typeof t || null != t && !Ah(t)) && (t = vu(t), !t && T(n)) ? Ou(G(n), 0, r) : n.split(t, r)) : []
    } function ba (n, t, r) { return n = Ec(n), r = null == r ? 0 : Mr(kc(r), 0, n.length), t = vu(t), n.slice(r, r + t.length) == t } function wa (n, t, r) {
      var e = Z.templateSettings; r && Ui(n, t, r) && (t = X), n = Ec(n), t = Sh({}, t, e, li); var u, i, o = Sh({}, t.imports, e.imports, li), f = Pc(o), c = E(o, f), a = 0, l = t.interpolate || Ht, s = "__p += '", h = sl((t.escape || Ht).source + "|" + l.source + "|" + (l === It ? Ft : Ht).source + "|" + (t.evaluate || Ht).source + "|$", "g"), p = "//# sourceURL=" + (bl.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Zr + "]") + "\n";
      n.replace(h, function (t, r, e, o, f, c) { return e || (e = o), s += n.slice(a, c).replace(Jt, U), r && (u = !0, s += "' +\n__e(" + r + ") +\n'"), f && (i = !0, s += "';\n" + f + ";\n__p += '"), e && (s += "' +\n((__t = (" + e + ")) == null ? '' : __t) +\n'"), a = c + t.length, t }), s += "';\n"; var _ = bl.call(t, "variable") && t.variable; if (_) { if (Dt.test(_)) throw new fl(un) } else s = "with (obj) {\n" + s + "\n}\n"; s = (i ? s.replace(dt, "") : s).replace(bt, "$1").replace(wt, "$1;"), s = "function(" + (_ || "obj") + ") {\n" + (_ ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (u ? ", __e = _.escape" : "") + (i ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + s + "return __p\n}";
      var v = Xh(function () { return cl(f, p + "return " + s).apply(X, c) }); if (v.source = s, rc(v)) throw v; return v
    } function ma (n) { return Ec(n).toLowerCase() } function xa (n) { return Ec(n).toUpperCase() } function ja (n, t, r) { if (n = Ec(n), n && (r || t === X)) return R(n); if (!n || !(t = vu(t))) return n; var e = G(n), u = G(t); return Ou(e, W(e, u), L(e, u) + 1).join("") } function Aa (n, t, r) { if (n = Ec(n), n && (r || t === X)) return n.slice(0, H(n) + 1); if (!n || !(t = vu(t))) return n; var e = G(n); return Ou(e, 0, L(e, G(t)) + 1).join("") } function ka (n, t, r) {
      if (n = Ec(n), n && (r || t === X)) return n.replace(Lt, "");
      if (!n || !(t = vu(t))) return n; var e = G(n); return Ou(e, W(e, G(t))).join("")
    } function Oa (n, t) {
      var r = An, e = kn; if (fc(t)) { var u = "separator" in t ? t.separator : u; r = "length" in t ? kc(t.length) : r, e = "omission" in t ? vu(t.omission) : e } n = Ec(n); var i = n.length; if (T(n)) { var o = G(n); i = o.length } if (r >= i) return n; var f = r - V(e); if (f < 1) return e; var c = o ? Ou(o, 0, f).join("") : n.slice(0, f); if (u === X) return c + e; if (o && (f += c.length - f), Ah(u)) {
        if (n.slice(f).search(u)) {
          var a, l = c; for (u.global || (u = sl(u.source, Ec(Nt.exec(u)) + "g")), u.lastIndex = 0; a = u.exec(l);)var s = a.index;
          c = c.slice(0, s === X ? f : s)
        }
      } else if (n.indexOf(vu(u), f) != f) { var h = c.lastIndexOf(u); h > -1 && (c = c.slice(0, h)) } return c + e
    } function Ia (n) { return n = Ec(n), n && jt.test(n) ? n.replace(mt, ye) : n } function Ra (n, t, r) { return n = Ec(n), t = r ? X : t, t === X ? $(n) ? Q(n) : _(n) : n.match(t) || [] } function za (t) { var r = null == t ? 0 : t.length, e = mi(); return t = r ? c(t, function (n) { if ("function" != typeof n[1]) throw new pl(en); return [e(n[0]), n[1]] }) : [], uu(function (e) { for (var u = -1; ++u < r;) { var i = t[u]; if (n(i[0], this, e)) return n(i[1], this, e) } }) } function Ea (n) {
      return Nr(Fr(n, an))
    } function Sa (n) { return function () { return n } } function Wa (n, t) { return null == n || n !== n ? t : n } function La (n) { return n } function Ca (n) { return De("function" == typeof n ? n : Fr(n, an)) } function Ua (n) { return qe(Fr(n, an)) } function Ba (n, t) { return Ze(n, Fr(t, an)) } function Ta (n, t, e) {
      var u = Pc(t), i = fe(t, u); null != e || fc(t) && (i.length || !u.length) || (e = t, t = n, n = this, i = fe(t, Pc(t))); var o = !(fc(e) && "chain" in e && !e.chain), f = uc(n); return r(i, function (r) {
        var e = t[r]; n[r] = e, f && (n.prototype[r] = function () {
          var t = this.__chain__;
          if (o || t) { var r = n(this.__wrapped__); return (r.__actions__ = Tu(this.__actions__)).push({ func: e, args: arguments, thisArg: n }), r.__chain__ = t, r } return e.apply(n, a([this.value()], arguments))
        })
      }), n
    } function $a () { return re._ === this && (re._ = Al), this } function Da () { } function Ma (n) { return n = kc(n), uu(function (t) { return Ge(t, n) }) } function Fa (n) { return Bi(n) ? m(no(n)) : Qe(n) } function Na (n) { return function (t) { return null == n ? X : _e(n, t) } } function Pa () { return [] } function qa () { return !1 } function Za () { return {} } function Ka () {
      return "";
    } function Va () { return !0 } function Ga (n, t) { if (n = kc(n), n < 1 || n > Wn) return []; var r = Un, e = Hl(n, Un); t = mi(t), n -= Un; for (var u = O(e, t); ++r < n;)t(r); return u } function Ha (n) { return bh(n) ? c(n, no) : bc(n) ? [n] : Tu(Cs(Ec(n))) } function Ja (n) { var t = ++wl; return Ec(n) + t } function Ya (n) { return n && n.length ? Yr(n, La, me) : X } function Qa (n, t) { return n && n.length ? Yr(n, mi(t, 2), me) : X } function Xa (n) { return w(n, La) } function nl (n, t) { return w(n, mi(t, 2)) } function tl (n) { return n && n.length ? Yr(n, La, Ne) : X } function rl (n, t) {
      return n && n.length ? Yr(n, mi(t, 2), Ne) : X;
    } function el (n) { return n && n.length ? k(n, La) : 0 } function ul (n, t) { return n && n.length ? k(n, mi(t, 2)) : 0 } x = null == x ? re : be.defaults(re.Object(), x, be.pick(re, qr)); var il = x.Array, ol = x.Date, fl = x.Error, cl = x.Function, al = x.Math, ll = x.Object, sl = x.RegExp, hl = x.String, pl = x.TypeError, _l = il.prototype, vl = cl.prototype, gl = ll.prototype, yl = x["__core-js_shared__"], dl = vl.toString, bl = gl.hasOwnProperty, wl = 0, ml = function () { var n = /[^.]+$/.exec(yl && yl.keys && yl.keys.IE_PROTO || ""); return n ? "Symbol(src)_1." + n : "" }(), xl = gl.toString, jl = dl.call(ll), Al = re._, kl = sl("^" + dl.call(bl).replace(St, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Ol = ie ? x.Buffer : X, Il = x.Symbol, Rl = x.Uint8Array, zl = Ol ? Ol.allocUnsafe : X, El = F(ll.getPrototypeOf, ll), Sl = ll.create, Wl = gl.propertyIsEnumerable, Ll = _l.splice, Cl = Il ? Il.isConcatSpreadable : X, Ul = Il ? Il.iterator : X, Bl = Il ? Il.toStringTag : X, Tl = function () {
      try { var n = Ai(ll, "defineProperty"); return n({}, "", {}), n } catch (n) { }
    }(), $l = x.clearTimeout !== re.clearTimeout && x.clearTimeout, Dl = ol && ol.now !== re.Date.now && ol.now, Ml = x.setTimeout !== re.setTimeout && x.setTimeout, Fl = al.ceil, Nl = al.floor, Pl = ll.getOwnPropertySymbols, ql = Ol ? Ol.isBuffer : X, Zl = x.isFinite, Kl = _l.join, Vl = F(ll.keys, ll), Gl = al.max, Hl = al.min, Jl = ol.now, Yl = x.parseInt, Ql = al.random, Xl = _l.reverse, ns = Ai(x, "DataView"), ts = Ai(x, "Map"), rs = Ai(x, "Promise"), es = Ai(x, "Set"), us = Ai(x, "WeakMap"), is = Ai(ll, "create"), os = us && new us, fs = {}, cs = to(ns), as = to(ts), ls = to(rs), ss = to(es), hs = to(us), ps = Il ? Il.prototype : X, _s = ps ? ps.valueOf : X, vs = ps ? ps.toString : X, gs = function () {
      function n () { } return function (t) { if (!fc(t)) return {}; if (Sl) return Sl(t); n.prototype = t; var r = new n; return n.prototype = X, r }
    }(); Z.templateSettings = { escape: kt, evaluate: Ot, interpolate: It, variable: "", imports: { _: Z } }, Z.prototype = J.prototype, Z.prototype.constructor = Z, Y.prototype = gs(J.prototype), Y.prototype.constructor = Y, Ct.prototype = gs(J.prototype), Ct.prototype.constructor = Ct, Xt.prototype.clear = nr, Xt.prototype.delete = tr, Xt.prototype.get = rr, Xt.prototype.has = er, Xt.prototype.set = ur, ir.prototype.clear = or, ir.prototype.delete = fr,
      ir.prototype.get = cr, ir.prototype.has = ar, ir.prototype.set = lr, sr.prototype.clear = hr, sr.prototype.delete = pr, sr.prototype.get = _r, sr.prototype.has = vr, sr.prototype.set = gr, yr.prototype.add = yr.prototype.push = dr, yr.prototype.has = br, wr.prototype.clear = mr, wr.prototype.delete = xr, wr.prototype.get = jr, wr.prototype.has = Ar, wr.prototype.set = kr; var ys = Pu(ue), ds = Pu(oe, !0), bs = qu(), ws = qu(!0), ms = os ? function (n, t) { return os.set(n, t), n } : La, xs = Tl ? function (n, t) {
        return Tl(n, "toString", {
          configurable: !0, enumerable: !1, value: Sa(t),
          writable: !0
        })
      } : La, js = uu, As = $l || function (n) { return re.clearTimeout(n) }, ks = es && 1 / P(new es([, -0]))[1] == Sn ? function (n) { return new es(n) } : Da, Os = os ? function (n) { return os.get(n) } : Da, Is = Pl ? function (n) { return null == n ? [] : (n = ll(n), i(Pl(n), function (t) { return Wl.call(n, t) })) } : Pa, Rs = Pl ? function (n) { for (var t = []; n;)a(t, Is(n)), n = El(n); return t } : Pa, zs = we; (ns && zs(new ns(new ArrayBuffer(1))) != ct || ts && zs(new ts) != Gn || rs && zs(rs.resolve()) != Qn || es && zs(new es) != tt || us && zs(new us) != it) && (zs = function (n) {
        var t = we(n), r = t == Yn ? n.constructor : X, e = r ? to(r) : "";
        if (e) switch (e) { case cs: return ct; case as: return Gn; case ls: return Qn; case ss: return tt; case hs: return it }return t
      }); var Es = yl ? uc : qa, Ss = Qi(ms), Ws = Ml || function (n, t) { return re.setTimeout(n, t) }, Ls = Qi(xs), Cs = Pi(function (n) { var t = []; return 46 === n.charCodeAt(0) && t.push(""), n.replace(Et, function (n, r, e, u) { t.push(e ? u.replace(Mt, "$1") : r || n) }), t }), Us = uu(function (n, t) { return Jf(n) ? Hr(n, ee(t, 1, Jf, !0)) : [] }), Bs = uu(function (n, t) { var r = jo(t); return Jf(r) && (r = X), Jf(n) ? Hr(n, ee(t, 1, Jf, !0), mi(r, 2)) : [] }), Ts = uu(function (n, t) {
        var r = jo(t); return Jf(r) && (r = X), Jf(n) ? Hr(n, ee(t, 1, Jf, !0), X, r) : []
      }), $s = uu(function (n) { var t = c(n, ju); return t.length && t[0] === n[0] ? ke(t) : [] }), Ds = uu(function (n) { var t = jo(n), r = c(n, ju); return t === jo(r) ? t = X : r.pop(), r.length && r[0] === n[0] ? ke(r, mi(t, 2)) : [] }), Ms = uu(function (n) { var t = jo(n), r = c(n, ju); return t = "function" == typeof t ? t : X, t && r.pop(), r.length && r[0] === n[0] ? ke(r, X, t) : [] }), Fs = uu(Oo), Ns = gi(function (n, t) { var r = null == n ? 0 : n.length, e = Tr(n, t); return nu(n, c(t, function (n) { return Ci(n, r) ? +n : n }).sort(Lu)), e }), Ps = uu(function (n) {
        return gu(ee(n, 1, Jf, !0))
      }), qs = uu(function (n) { var t = jo(n); return Jf(t) && (t = X), gu(ee(n, 1, Jf, !0), mi(t, 2)) }), Zs = uu(function (n) { var t = jo(n); return t = "function" == typeof t ? t : X, gu(ee(n, 1, Jf, !0), X, t) }), Ks = uu(function (n, t) { return Jf(n) ? Hr(n, t) : [] }), Vs = uu(function (n) { return mu(i(n, Jf)) }), Gs = uu(function (n) { var t = jo(n); return Jf(t) && (t = X), mu(i(n, Jf), mi(t, 2)) }), Hs = uu(function (n) { var t = jo(n); return t = "function" == typeof t ? t : X, mu(i(n, Jf), X, t) }), Js = uu(Go), Ys = uu(function (n) {
        var t = n.length, r = t > 1 ? n[t - 1] : X; return r = "function" == typeof r ? (n.pop(),
          r) : X, Ho(n, r)
      }), Qs = gi(function (n) { var t = n.length, r = t ? n[0] : 0, e = this.__wrapped__, u = function (t) { return Tr(t, n) }; return !(t > 1 || this.__actions__.length) && e instanceof Ct && Ci(r) ? (e = e.slice(r, +r + (t ? 1 : 0)), e.__actions__.push({ func: nf, args: [u], thisArg: X }), new Y(e, this.__chain__).thru(function (n) { return t && !n.length && n.push(X), n })) : this.thru(u) }), Xs = Fu(function (n, t, r) { bl.call(n, r) ? ++n[r] : Br(n, r, 1) }), nh = Ju(ho), th = Ju(po), rh = Fu(function (n, t, r) { bl.call(n, r) ? n[r].push(t) : Br(n, r, [t]) }), eh = uu(function (t, r, e) {
        var u = -1, i = "function" == typeof r, o = Hf(t) ? il(t.length) : [];
        return ys(t, function (t) { o[++u] = i ? n(r, t, e) : Ie(t, r, e) }), o
      }), uh = Fu(function (n, t, r) { Br(n, r, t) }), ih = Fu(function (n, t, r) { n[r ? 0 : 1].push(t) }, function () { return [[], []] }), oh = uu(function (n, t) { if (null == n) return []; var r = t.length; return r > 1 && Ui(n, t[0], t[1]) ? t = [] : r > 2 && Ui(t[0], t[1], t[2]) && (t = [t[0]]), He(n, ee(t, 1), []) }), fh = Dl || function () { return re.Date.now() }, ch = uu(function (n, t, r) { var e = _n; if (r.length) { var u = N(r, wi(ch)); e |= bn } return ai(n, e, t, r, u) }), ah = uu(function (n, t, r) {
        var e = _n | vn; if (r.length) {
          var u = N(r, wi(ah)); e |= bn;
        } return ai(t, e, n, r, u)
      }), lh = uu(function (n, t) { return Gr(n, 1, t) }), sh = uu(function (n, t, r) { return Gr(n, Ic(t) || 0, r) }); Cf.Cache = sr; var hh = js(function (t, r) { r = 1 == r.length && bh(r[0]) ? c(r[0], z(mi())) : c(ee(r, 1), z(mi())); var e = r.length; return uu(function (u) { for (var i = -1, o = Hl(u.length, e); ++i < o;)u[i] = r[i].call(this, u[i]); return n(t, this, u) }) }), ph = uu(function (n, t) { return ai(n, bn, X, t, N(t, wi(ph))) }), _h = uu(function (n, t) { return ai(n, wn, X, t, N(t, wi(_h))) }), vh = gi(function (n, t) { return ai(n, xn, X, X, X, t) }), gh = ii(me), yh = ii(function (n, t) {
        return n >= t
      }), dh = Re(function () { return arguments }()) ? Re : function (n) { return cc(n) && bl.call(n, "callee") && !Wl.call(n, "callee") }, bh = il.isArray, wh = ce ? z(ce) : ze, mh = ql || qa, xh = ae ? z(ae) : Ee, jh = le ? z(le) : Le, Ah = se ? z(se) : Be, kh = he ? z(he) : Te, Oh = pe ? z(pe) : $e, Ih = ii(Ne), Rh = ii(function (n, t) { return n <= t }), zh = Nu(function (n, t) { if (Mi(t) || Hf(t)) return $u(t, Pc(t), n), X; for (var r in t) bl.call(t, r) && Sr(n, r, t[r]) }), Eh = Nu(function (n, t) { $u(t, qc(t), n) }), Sh = Nu(function (n, t, r, e) { $u(t, qc(t), n, e) }), Wh = Nu(function (n, t, r, e) {
        $u(t, Pc(t), n, e);
      }), Lh = gi(Tr), Ch = uu(function (n, t) { n = ll(n); var r = -1, e = t.length, u = e > 2 ? t[2] : X; for (u && Ui(t[0], t[1], u) && (e = 1); ++r < e;)for (var i = t[r], o = qc(i), f = -1, c = o.length; ++f < c;) { var a = o[f], l = n[a]; (l === X || Gf(l, gl[a]) && !bl.call(n, a)) && (n[a] = i[a]) } return n }), Uh = uu(function (t) { return t.push(X, si), n(Mh, X, t) }), Bh = Xu(function (n, t, r) { null != t && "function" != typeof t.toString && (t = xl.call(t)), n[t] = r }, Sa(La)), Th = Xu(function (n, t, r) { null != t && "function" != typeof t.toString && (t = xl.call(t)), bl.call(n, t) ? n[t].push(r) : n[t] = [r] }, mi), $h = uu(Ie), Dh = Nu(function (n, t, r) {
        Ke(n, t, r)
      }), Mh = Nu(function (n, t, r, e) { Ke(n, t, r, e) }), Fh = gi(function (n, t) { var r = {}; if (null == n) return r; var e = !1; t = c(t, function (t) { return t = ku(t, n), e || (e = t.length > 1), t }), $u(n, di(n), r), e && (r = Fr(r, an | ln | sn, hi)); for (var u = t.length; u--;)yu(r, t[u]); return r }), Nh = gi(function (n, t) { return null == n ? {} : Je(n, t) }), Ph = ci(Pc), qh = ci(qc), Zh = Vu(function (n, t, r) { return t = t.toLowerCase(), n + (r ? fa(t) : t) }), Kh = Vu(function (n, t, r) { return n + (r ? "-" : "") + t.toLowerCase() }), Vh = Vu(function (n, t, r) { return n + (r ? " " : "") + t.toLowerCase() }), Gh = Ku("toLowerCase"), Hh = Vu(function (n, t, r) {
        return n + (r ? "_" : "") + t.toLowerCase()
      }), Jh = Vu(function (n, t, r) { return n + (r ? " " : "") + Qh(t) }), Yh = Vu(function (n, t, r) { return n + (r ? " " : "") + t.toUpperCase() }), Qh = Ku("toUpperCase"), Xh = uu(function (t, r) { try { return n(t, X, r) } catch (n) { return rc(n) ? n : new fl(n) } }), np = gi(function (n, t) { return r(t, function (t) { t = no(t), Br(n, t, ch(n[t], n)) }), n }), tp = Yu(), rp = Yu(!0), ep = uu(function (n, t) { return function (r) { return Ie(r, n, t) } }), up = uu(function (n, t) { return function (r) { return Ie(n, r, t) } }), ip = ti(c), op = ti(u), fp = ti(h), cp = ui(), ap = ui(!0), lp = ni(function (n, t) {
        return n + t
      }, 0), sp = fi("ceil"), hp = ni(function (n, t) { return n / t }, 1), pp = fi("floor"), _p = ni(function (n, t) { return n * t }, 1), vp = fi("round"), gp = ni(function (n, t) { return n - t }, 0); return Z.after = If, Z.ary = Rf, Z.assign = zh, Z.assignIn = Eh, Z.assignInWith = Sh, Z.assignWith = Wh, Z.at = Lh, Z.before = zf, Z.bind = ch, Z.bindAll = np, Z.bindKey = ah, Z.castArray = Nf, Z.chain = Qo, Z.chunk = uo, Z.compact = io, Z.concat = oo, Z.cond = za, Z.conforms = Ea, Z.constant = Sa, Z.countBy = Xs, Z.create = Sc, Z.curry = Ef, Z.curryRight = Sf, Z.debounce = Wf, Z.defaults = Ch, Z.defaultsDeep = Uh,
        Z.defer = lh, Z.delay = sh, Z.difference = Us, Z.differenceBy = Bs, Z.differenceWith = Ts, Z.drop = fo, Z.dropRight = co, Z.dropRightWhile = ao, Z.dropWhile = lo, Z.fill = so, Z.filter = lf, Z.flatMap = sf, Z.flatMapDeep = hf, Z.flatMapDepth = pf, Z.flatten = _o, Z.flattenDeep = vo, Z.flattenDepth = go, Z.flip = Lf, Z.flow = tp, Z.flowRight = rp, Z.fromPairs = yo, Z.functions = $c, Z.functionsIn = Dc, Z.groupBy = rh, Z.initial = mo, Z.intersection = $s, Z.intersectionBy = Ds, Z.intersectionWith = Ms, Z.invert = Bh, Z.invertBy = Th, Z.invokeMap = eh, Z.iteratee = Ca, Z.keyBy = uh, Z.keys = Pc, Z.keysIn = qc,
        Z.map = yf, Z.mapKeys = Zc, Z.mapValues = Kc, Z.matches = Ua, Z.matchesProperty = Ba, Z.memoize = Cf, Z.merge = Dh, Z.mergeWith = Mh, Z.method = ep, Z.methodOf = up, Z.mixin = Ta, Z.negate = Uf, Z.nthArg = Ma, Z.omit = Fh, Z.omitBy = Vc, Z.once = Bf, Z.orderBy = df, Z.over = ip, Z.overArgs = hh, Z.overEvery = op, Z.overSome = fp, Z.partial = ph, Z.partialRight = _h, Z.partition = ih, Z.pick = Nh, Z.pickBy = Gc, Z.property = Fa, Z.propertyOf = Na, Z.pull = Fs, Z.pullAll = Oo, Z.pullAllBy = Io, Z.pullAllWith = Ro, Z.pullAt = Ns, Z.range = cp, Z.rangeRight = ap, Z.rearg = vh, Z.reject = mf, Z.remove = zo, Z.rest = Tf,
        Z.reverse = Eo, Z.sampleSize = jf, Z.set = Jc, Z.setWith = Yc, Z.shuffle = Af, Z.slice = So, Z.sortBy = oh, Z.sortedUniq = $o, Z.sortedUniqBy = Do, Z.split = da, Z.spread = $f, Z.tail = Mo, Z.take = Fo, Z.takeRight = No, Z.takeRightWhile = Po, Z.takeWhile = qo, Z.tap = Xo, Z.throttle = Df, Z.thru = nf, Z.toArray = jc, Z.toPairs = Ph, Z.toPairsIn = qh, Z.toPath = Ha, Z.toPlainObject = Rc, Z.transform = Qc, Z.unary = Mf, Z.union = Ps, Z.unionBy = qs, Z.unionWith = Zs, Z.uniq = Zo, Z.uniqBy = Ko, Z.uniqWith = Vo, Z.unset = Xc, Z.unzip = Go, Z.unzipWith = Ho, Z.update = na, Z.updateWith = ta, Z.values = ra, Z.valuesIn = ea,
        Z.without = Ks, Z.words = Ra, Z.wrap = Ff, Z.xor = Vs, Z.xorBy = Gs, Z.xorWith = Hs, Z.zip = Js, Z.zipObject = Jo, Z.zipObjectDeep = Yo, Z.zipWith = Ys, Z.entries = Ph, Z.entriesIn = qh, Z.extend = Eh, Z.extendWith = Sh, Ta(Z, Z), Z.add = lp, Z.attempt = Xh, Z.camelCase = Zh, Z.capitalize = fa, Z.ceil = sp, Z.clamp = ua, Z.clone = Pf, Z.cloneDeep = Zf, Z.cloneDeepWith = Kf, Z.cloneWith = qf, Z.conformsTo = Vf, Z.deburr = ca, Z.defaultTo = Wa, Z.divide = hp, Z.endsWith = aa, Z.eq = Gf, Z.escape = la, Z.escapeRegExp = sa, Z.every = af, Z.find = nh, Z.findIndex = ho, Z.findKey = Wc, Z.findLast = th, Z.findLastIndex = po,
        Z.findLastKey = Lc, Z.floor = pp, Z.forEach = _f, Z.forEachRight = vf, Z.forIn = Cc, Z.forInRight = Uc, Z.forOwn = Bc, Z.forOwnRight = Tc, Z.get = Mc, Z.gt = gh, Z.gte = yh, Z.has = Fc, Z.hasIn = Nc, Z.head = bo, Z.identity = La, Z.includes = gf, Z.indexOf = wo, Z.inRange = ia, Z.invoke = $h, Z.isArguments = dh, Z.isArray = bh, Z.isArrayBuffer = wh, Z.isArrayLike = Hf, Z.isArrayLikeObject = Jf, Z.isBoolean = Yf, Z.isBuffer = mh, Z.isDate = xh, Z.isElement = Qf, Z.isEmpty = Xf, Z.isEqual = nc, Z.isEqualWith = tc, Z.isError = rc, Z.isFinite = ec, Z.isFunction = uc, Z.isInteger = ic, Z.isLength = oc, Z.isMap = jh,
        Z.isMatch = ac, Z.isMatchWith = lc, Z.isNaN = sc, Z.isNative = hc, Z.isNil = _c, Z.isNull = pc, Z.isNumber = vc, Z.isObject = fc, Z.isObjectLike = cc, Z.isPlainObject = gc, Z.isRegExp = Ah, Z.isSafeInteger = yc, Z.isSet = kh, Z.isString = dc, Z.isSymbol = bc, Z.isTypedArray = Oh, Z.isUndefined = wc, Z.isWeakMap = mc, Z.isWeakSet = xc, Z.join = xo, Z.kebabCase = Kh, Z.last = jo, Z.lastIndexOf = Ao, Z.lowerCase = Vh, Z.lowerFirst = Gh, Z.lt = Ih, Z.lte = Rh, Z.max = Ya, Z.maxBy = Qa, Z.mean = Xa, Z.meanBy = nl, Z.min = tl, Z.minBy = rl, Z.stubArray = Pa, Z.stubFalse = qa, Z.stubObject = Za, Z.stubString = Ka,
        Z.stubTrue = Va, Z.multiply = _p, Z.nth = ko, Z.noConflict = $a, Z.noop = Da, Z.now = fh, Z.pad = ha, Z.padEnd = pa, Z.padStart = _a, Z.parseInt = va, Z.random = oa, Z.reduce = bf, Z.reduceRight = wf, Z.repeat = ga, Z.replace = ya, Z.result = Hc, Z.round = vp, Z.runInContext = p, Z.sample = xf, Z.size = kf, Z.snakeCase = Hh, Z.some = Of, Z.sortedIndex = Wo, Z.sortedIndexBy = Lo, Z.sortedIndexOf = Co, Z.sortedLastIndex = Uo, Z.sortedLastIndexBy = Bo, Z.sortedLastIndexOf = To, Z.startCase = Jh, Z.startsWith = ba, Z.subtract = gp, Z.sum = el, Z.sumBy = ul, Z.template = wa, Z.times = Ga, Z.toFinite = Ac, Z.toInteger = kc,
        Z.toLength = Oc, Z.toLower = ma, Z.toNumber = Ic, Z.toSafeInteger = zc, Z.toString = Ec, Z.toUpper = xa, Z.trim = ja, Z.trimEnd = Aa, Z.trimStart = ka, Z.truncate = Oa, Z.unescape = Ia, Z.uniqueId = Ja, Z.upperCase = Yh, Z.upperFirst = Qh, Z.each = _f, Z.eachRight = vf, Z.first = bo, Ta(Z, function () { var n = {}; return ue(Z, function (t, r) { bl.call(Z.prototype, r) || (n[r] = t) }), n }(), { chain: !1 }), Z.VERSION = nn, r(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (n) { Z[n].placeholder = Z }), r(["drop", "take"], function (n, t) {
          Ct.prototype[n] = function (r) {
            r = r === X ? 1 : Gl(kc(r), 0); var e = this.__filtered__ && !t ? new Ct(this) : this.clone(); return e.__filtered__ ? e.__takeCount__ = Hl(r, e.__takeCount__) : e.__views__.push({ size: Hl(r, Un), type: n + (e.__dir__ < 0 ? "Right" : "") }), e
          }, Ct.prototype[n + "Right"] = function (t) { return this.reverse()[n](t).reverse() }
        }), r(["filter", "map", "takeWhile"], function (n, t) { var r = t + 1, e = r == Rn || r == En; Ct.prototype[n] = function (n) { var t = this.clone(); return t.__iteratees__.push({ iteratee: mi(n, 3), type: r }), t.__filtered__ = t.__filtered__ || e, t } }), r(["head", "last"], function (n, t) {
          var r = "take" + (t ? "Right" : ""); Ct.prototype[n] = function () { return this[r](1).value()[0] }
        }), r(["initial", "tail"], function (n, t) { var r = "drop" + (t ? "" : "Right"); Ct.prototype[n] = function () { return this.__filtered__ ? new Ct(this) : this[r](1) } }), Ct.prototype.compact = function () { return this.filter(La) }, Ct.prototype.find = function (n) { return this.filter(n).head() }, Ct.prototype.findLast = function (n) { return this.reverse().find(n) }, Ct.prototype.invokeMap = uu(function (n, t) {
          return "function" == typeof n ? new Ct(this) : this.map(function (r) {
            return Ie(r, n, t)
          })
        }), Ct.prototype.reject = function (n) { return this.filter(Uf(mi(n))) }, Ct.prototype.slice = function (n, t) { n = kc(n); var r = this; return r.__filtered__ && (n > 0 || t < 0) ? new Ct(r) : (n < 0 ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== X && (t = kc(t), r = t < 0 ? r.dropRight(-t) : r.take(t - n)), r) }, Ct.prototype.takeRightWhile = function (n) { return this.reverse().takeWhile(n).reverse() }, Ct.prototype.toArray = function () { return this.take(Un) }, ue(Ct.prototype, function (n, t) {
          var r = /^(?:filter|find|map|reject)|While$/.test(t), e = /^(?:head|last)$/.test(t), u = Z[e ? "take" + ("last" == t ? "Right" : "") : t], i = e || /^find/.test(t);
          u && (Z.prototype[t] = function () { var t = this.__wrapped__, o = e ? [1] : arguments, f = t instanceof Ct, c = o[0], l = f || bh(t), s = function (n) { var t = u.apply(Z, a([n], o)); return e && h ? t[0] : t }; l && r && "function" == typeof c && 1 != c.length && (f = l = !1); var h = this.__chain__, p = !!this.__actions__.length, _ = i && !h, v = f && !p; if (!i && l) { t = v ? t : new Ct(this); var g = n.apply(t, o); return g.__actions__.push({ func: nf, args: [s], thisArg: X }), new Y(g, h) } return _ && v ? n.apply(this, o) : (g = this.thru(s), _ ? e ? g.value()[0] : g.value() : g) })
        }), r(["pop", "push", "shift", "sort", "splice", "unshift"], function (n) {
          var t = _l[n], r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", e = /^(?:pop|shift)$/.test(n); Z.prototype[n] = function () { var n = arguments; if (e && !this.__chain__) { var u = this.value(); return t.apply(bh(u) ? u : [], n) } return this[r](function (r) { return t.apply(bh(r) ? r : [], n) }) }
        }), ue(Ct.prototype, function (n, t) { var r = Z[t]; if (r) { var e = r.name + ""; bl.call(fs, e) || (fs[e] = []), fs[e].push({ name: t, func: r }) } }), fs[Qu(X, vn).name] = [{ name: "wrapper", func: X }], Ct.prototype.clone = $t, Ct.prototype.reverse = Yt, Ct.prototype.value = Qt, Z.prototype.at = Qs,
        Z.prototype.chain = tf, Z.prototype.commit = rf, Z.prototype.next = ef, Z.prototype.plant = of, Z.prototype.reverse = ff, Z.prototype.toJSON = Z.prototype.valueOf = Z.prototype.value = cf, Z.prototype.first = Z.prototype.head, Ul && (Z.prototype[Ul] = uf), Z
  }, be = de(); "function" == typeof define && "object" == typeof define.amd && define.amd ? (re._ = be, define(function () { return be })) : ue ? ((ue.exports = be)._ = be, ee._ = be) : re._ = be
}).call(this);
// prettier-ignore