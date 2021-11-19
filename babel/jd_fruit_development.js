/**
 * name: 东东农场
 * author: @leeco
 * apply: shortcuts
 * activity: https://h5.m.jd.com/babelDiy/Zeus/3KSjXqQabiTuD1cJ28QskrpWoBKT/index.html
 * tips: Only for learning and communication, strictly prohibited for commercial use, please delete within 24 hours
 */

// 到指令里运行需要注释掉
// const $ = {}

// $.inviteList = [];
// $.pkInviteList = [];
// $.secretpInfo = {};
// $.innerPkInviteList = [];

let JD_API_HOST = `https://api.m.jd.com/client.action?functionId=`;
$.Utils = Utils()

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

  // 任务流程初始化 或 次数循环任务初始化
  $.taskStep = 1

  // 生成随机 UA UUID
  $.uuid = $.Utils.randomString(40)
  $.UA = `jdapp;iPhone;10.2.0;13.1.2;${$.uuid};M/5.0;network/wifi;ADID/;model/iPhone8,1;addressid/2308460611;appBuild/167853;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;`

  $.message = `本指令作为自动化方案开源分享，并不保证他带来的任何副作用，任何副作用请自行负责，如不同意请停止使用！`
  document.write(JSON.stringify($))
}

/**
 * 云端推送提示
 */
function cloudTip () {
  $.message = `其他功能和任务正在开发中，上线将自动推送到指令中，无需任何操作~`
  document.write(JSON.stringify($))
}

/**
 * 初始化农场, 可获取果树及用户信息API 还需优化
 */
function initForFarm () {
  $.callback = 'Func.request'
  takeRequest('initForFarm');
  return

  // next
  $.callback = ''
  dealReturn('initForFarm', $.data)
  document.write(JSON.stringify($))
}

/**
 * 获取农场状态
 */
function treeState () {
  if ($.farmInfo.treeState === 2 || $.farmInfo.treeState === 3) {
    $.error = `【⏰ 提醒】${$.farmInfo.farmUserPro?.name}已可领取\n请去京东APP或微信小程序查看`
  } else if ($.farmInfo.treeState === 1) {
    $.message = `${$.farmInfo.farmUserPro?.name}种植中...`
  } else if ($.farmInfo.treeState === 0) {
    //已下单购买, 但未开始种植新的水果
    $.error = `【⏰ 提醒】您忘了种植新的水果\n请去京东APP或微信小程序选购并种植新的水果`
  }
  document.write(JSON.stringify($))
}

/**
 * 获取农场任务信息
 */
function taskInitForFarm () {
  $.callback = 'Func.request'
  takeRequest('taskInitForFarm');
  return

  // next
  $.callback = ''
  dealReturn('taskInitForFarm', $.data)
  document.write(JSON.stringify($))
}

/**
 * 获取好友列表
 */
function friendListInitForFarm () {
  $.callback = 'Func.request'
  takeRequest('friendListInitForFarm');
  return

  // next
  $.callback = ''
  dealReturn('friendListInitForFarm', $.data)
  document.write(JSON.stringify($))
}

/**
 * 好友助力
 */
function help () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['help']
  $.inviteList = Array.isArray($.inviteList) ? $.inviteList : [$.inviteList]

  $.inviteId = $.inviteList.shift()
  if (!$.inviteId || $.selfHelpMax) {
    // 循环完成重新设置 to,call
    $.to = '', $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  $.message = `${$.UserName}去助力，对方助力码:\n${$.inviteId}`
  $.callback = 'Func.request'
  takeRequest('helpInvite');
  return

  // next
  $.callback = ''
  dealReturn('helpInvite', $.data)
  document.write(JSON.stringify($))
}

/**
 * 做签到任务
 */
function signForFarm () {
  if (!$.farmTask.signInit?.todaySigned) {
    $.callback = 'Func.request'
    takeRequest('signForFarm');
    return

    // next
    dealReturn('signForFarm', $.data)
    // 被水滴砸中
    if ($.farmInfo.todayGotWaterGoalTask.canPop) {
      takeRequest('gotWaterGoalTaskForFarm');
      // return
      // 这里的逻辑是在 next 里面的，而 next 不是一个函数，所以不能使用 return 来中断

      // 对于 next next 这种嵌套需要单独隔离，只在运行到的时候调用，判断是否有页面内容为好的方式

      // next next
      if (!document.body.innerText) {
        $.callback = ''
        dealReturn('gotWaterGoalTaskForFarm', $.data)
        document.write(JSON.stringify($))
      }
    } else {
      $.callback = ''
      document.write(JSON.stringify($))
    }
  } else {
    $.message = `今天已签到,连续签到${$.farmTask.signInit?.totalSigned},下次签到可得${$.farmTask.signInit?.signEnergyEachAmount}g`
    document.write(JSON.stringify($))
  }
}

/**
 * 做浏览任务
 */
function browseAdTaskForFarm () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['browseAdTaskForFarm']

  // 利用队列取代循环
  $.oneTask = $.farmTask.gotBrowseTaskAdInit?.userBrowseTaskAds?.shift()
  $.advertId = $.oneTask?.advertId;
  if ($.farmTask.gotBrowseTaskAdInit?.f || !$.oneTask) {
    // 循环完成重新设置 to,call
    $.to = '', $.call.pop()
    $.message = `浏览任务已经全部完成~`
    document.write(JSON.stringify($))
    return
  }

  // 做过的任务则跳过重新执行
  if ($.oneTask.hadFinishedTimes >= $.oneTask.limit) {
    document.write(JSON.stringify($))
  }

  $.taskType = 0 // 做任务
  $.message = `做任务：${$.oneTask.mainTitle} 等待完成...`
  $.callback = 'Func.request'
  takeRequest('browseAdTaskForFarm');
  return

  // next 
  $.callback = ''
  dealReturn('browseAdTaskForFarm', $.data)
  if ($.browseResult.code === '0') {
    $.wait = 6
    $.next = 1 // 覆盖前面的 0
    $.taskType = 1 // 领奖励
    $.callback = 'Func.request'
    takeRequest('browseAdTaskForFarm')
    // return
    // 这里的逻辑是在 next 里面的，而 next 不是一个函数，所以不能使用 return 来中断

    // 对于 next next 这种嵌套需要单独隔离，只在运行到的时候调用，判断是否有页面内容为好的方式

    // next next
    if (!document.body.innerText) {
      $.callback = ''
      $.wait = 1
      dealReturn('browseAdTaskForFarmHandle', $.data)
      document.write(JSON.stringify($))
    }
  } else {
    $.message = `浏览任务结果: ${JSON.stringify($.data)}`
    document.write(JSON.stringify($))
  }
}

/**
 * 做浇水十次任务
 */
function doTenWater () {
  // 暂时不做水滴换豆逻辑
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['doTenWater']

  $.waterCount = ($.waterCount || 0);
  if ($.waterCount + $.farmTask.totalWaterTaskInit.totalWaterTaskTimes < $.farmTask.totalWaterTaskInit.totalWaterTaskLimit) {
    $.callback = 'Func.request'
    takeRequest('waterGoodForFarm');
    return

    // next
    $.callback = ''
    dealReturn('waterGoodForFarm', $.data)
    document.write(JSON.stringify($))
  } else {
    // 循环完成重新设置 to,call
    $.to = '', $.call.pop()
    $.message = `今日已完成10次浇水任务`
    document.write(JSON.stringify($))
    return
  }
}

/**
 * 领取阶段性水滴奖励 可能存在问题，原型是每次浇水都会运行一次
 */
function gotStageAwardForFarm () {
  if ($.waterResult?.waterStatus === 0 && $.waterResult?.treeEnergy === 10) {
    $.callback = 'Func.request'
    $.taskType = '1'
    $.waterResult.waterStatusMsg = '果树发芽了'
    takeRequest('gotStageAwardForFarm');
    return
  } else if ($.waterResult?.waterStatus === 1) {
    $.callback = 'Func.request'
    $.taskType = '2'
    $.waterResult.waterStatusMsg = '果树开花了'
    takeRequest('gotStageAwardForFarm');
    return
  } else if ($.waterResult?.waterStatus === 2) {
    $.callback = 'Func.request'
    $.taskType = '3'
    $.waterResult.waterStatusMsg = '果树结果了'
    takeRequest('gotStageAwardForFarm');
    return
  } else {
    $.message = '暂无阶段奖励'
    document.write(JSON.stringify($))
    return
  }

  // next
  $.callback = ''
  dealReturn('gotStageAwardForFarm', $.data)
  document.write(JSON.stringify($))
}

/**
 * 领取首次浇水奖励
 */
function firstWaterTaskForFarm () {
  // 此处调用别的函数，并不会执行调用函数里的 next 而是执行这里的 next,所以 next 逻辑要移过来
  taskInitForFarm()
  return

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
    if (!document.body.innerText) {
      $.callback = ''
      dealReturn('firstWaterTaskForFarm', $.data)
      document.write(JSON.stringify($))
    }
  } else {
    $.message = '首次浇水奖励已领取'
    document.write(JSON.stringify($))
  }
}

/**
 * 领取十次浇水奖励
 */
function totalWaterTaskForFarm () {
  if (!$.farmTask.totalWaterTaskInit.f && $.farmTask.totalWaterTaskInit.totalWaterTaskTimes >= $.farmTask.totalWaterTaskInit.totalWaterTaskLimit) {
    $.callback = 'Func.request'
    takeRequest('totalWaterTaskForFarm');
    return

    // next
    $.callback = ''
    dealReturn('totalWaterTaskForFarm', $.data)
    document.write(JSON.stringify($))
  } else if ($.farmTask.totalWaterTaskInit.totalWaterTaskTimes < $.farmTask.totalWaterTaskInit.totalWaterTaskLimit) {
    $.message = `【十次浇水奖励】任务未完成，今日浇水${$.farmTask.totalWaterTaskInit.totalWaterTaskTimes}次`
  }
  document.write(JSON.stringify($))
}

/**
 * 做定时领水
 */
function gotThreeMealForFarm () {
  if (!$.farmTask.gotThreeMealInit.f) {
    $.callback = 'Func.request'
    takeRequest('gotThreeMealForFarm');
    return

    // next
    $.callback = ''
    dealReturn('gotThreeMealForFarm', $.data)
    document.write(JSON.stringify($))
  } else {
    $.message = '当前不在定时领水时间断或者已经领过'
    document.write(JSON.stringify($))
  }
}

/**
 * 给两个好友浇水 还未上线
 */
function waterFriendForFarm () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['waterFriendForFarm']

  if (!$.needWaterFriends && $.friendList.friends?.length > 0) {
    $.needWaterFriends = $.friendList.friends.filter(v => v.friendState === 1)
  } else if ($.friendList.friends?.length <= 0) {
    // 循环完成重新设置 to,call
    $.to = '', $.call.pop()
    $.message = '您的好友列表暂无好友,快去邀请您的好友吧!'
    document.write(JSON.stringify($))
    return
  }

  if ($.farmTask.waterFriendTaskInit?.waterFriendCountKey < 2) {
    $.shareCode = $.needWaterFriends[$.farmTask.waterFriendTaskInit?.waterFriendCountKey].shareCode
    $.callback = 'Func.request'
    takeRequest('waterFriendForFarm');
    return

    // next
    $.callback = ''
    $.farmTask.waterFriendTaskInit.waterFriendCountKey++
    dealReturn('waterFriendForFarm', $.data)
    document.write(JSON.stringify($))
  }
  else {
    // 循环完成重新设置 to,call
    $.to = '', $.call.pop()
    $.message = `今日已经为两个好友浇水`
    document.write(JSON.stringify($))
    return
  }
}

/**
 * 做小鸭子游戏
 */
function getFullCollectionReward () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['getFullCollectionReward']

  if ($.taskStep <= 10) {
    $.callback = 'Func.request'
    takeRequest('getFullCollectionReward');
    return

    // next
    $.callback = ''
    dealReturn('getFullCollectionReward', $.data)
    document.write(JSON.stringify($))
  } else if ($.friendList.friends?.length <= 0) {
    // 循环完成重新设置 to,call
    $.to = '', $.call.pop(), $.taskStep = 1
    $.message = '小鸭子游戏已完成~'
    document.write(JSON.stringify($))
  }

}

/**
 * 提交请求信息
 */
function takeRequest (type) {
  let { log, random } = $.signList?.shift() || {}
  let body = ``;
  let myRequest = ``;
  let otherUrl = ``;
  switch (type) {
    case 'initForFarm':
      body = `body=${encodeURIComponent(JSON.stringify({ "version": 4 }))}&appid=wh5&clientVersion=9.1.0;`
      myRequest = getRequest(`initForFarm`, body);
      break;
    case 'taskInitForFarm':
      body = `{"version":14,"channel":1,"babelChannel":"120"}`;
      myRequest = getRequest(`taskInitForFarm`, body, 'GET');
      break;
    case 'signForFarm':
      body = `{}`;
      myRequest = getRequest(`signForFarm`, body, 'GET');
      break;
    case 'browseAdTaskForFarm':
      body = `{"advertId":"${$.advertId}","type":"${$.taskType}"}`;
      myRequest = getRequest(`browseAdTaskForFarm`, body, 'GET');
      break;
    case 'waterGoodForFarm':
      body = `{}`;
      myRequest = getRequest(`waterGoodForFarm`, body, 'GET');
      break;
    case 'helpInvite':
      body = `{"imageUrl":"","nickName":"","shareCode":"${$.inviteId}","babelChannel":"3","version":2,"channel":1}`;
      myRequest = getRequest(`initForFarm`, body, 'GET');
      break;
    case 'gotStageAwardForFarm':
      body = `{"type":${$.taskType}}`;
      myRequest = getRequest(`gotStageAwardForFarm`, body, 'GET');
      break;
    case 'firstWaterTaskForFarm':
      body = `{}`;
      myRequest = getRequest(`firstWaterTaskForFarm`, body, 'GET');
      break;
    case 'totalWaterTaskForFarm':
      body = `{}`;
      myRequest = getRequest(`totalWaterTaskForFarm`, body, 'GET');
      break;
    case 'gotWaterGoalTaskForFarm':
      body = `{"type":3}`;
      myRequest = getRequest(`gotWaterGoalTaskForFarm`, body, 'GET');
      break;
    case 'gotThreeMealForFarm':
      body = `{}`;
      myRequest = getRequest(`gotThreeMealForFarm`, body, 'GET');
      break;
    case 'friendListInitForFarm':
      body = `{"version":4,"channel":1}`;
      myRequest = getRequest(`friendListInitForFarm`, body, 'GET');
      break;
    case 'waterFriendForFarm':
      body = `{"shareCode":${$.shareCode},"version":6,"channel":1}`;
      myRequest = getRequest(`waterFriendForFarm`, body, 'GET');
      break;
    case 'getFullCollectionReward':
      otherUrl = `${JD_API_HOST}${type}&appid=wh5&body=${encodeURIComponent(`{"type":2,"version":6,"channel":2}`)}`
      myRequest = getRequest(`getFullCollectionReward`, body, 'POST', otherUrl);
      break;
    case 'zoo_shopLotteryInfo':
      body = `functionId=zoo_shopLotteryInfo&body={"shopSign":"${$.shopSign}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getRequest(`zoo_shopLotteryInfo`, body);
      break;
    case 'zoo_bdCollectScore':
      body = getPostBody(type);
      myRequest = getRequest(`zoo_bdCollectScore`, body);
      break;
    case 'qryCompositeMaterials':
      body = `functionId=qryCompositeMaterials&body={"qryParam":"[{\\"type\\":\\"advertGroup\\",\\"mapTo\\":\\"resultData\\",\\"id\\":\\"05371960\\"}]","activityId":"2s7hhSTbhMgxpGoa9JDnbDzJTaBB","pageId":"","reqSrc":"","applyKey":"jd_star"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getRequest(`qryCompositeMaterials`, body);
      break;
    case 'zoo_boxShopLottery':
      body = `functionId=zoo_boxShopLottery&body={"shopSign":"${$.shopSign}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getRequest(`zoo_boxShopLottery`, body);
      break;
    case `zoo_wishShopLottery`:
      body = `functionId=zoo_wishShopLottery&body={"shopSign":"${$.shopSign}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getRequest(`zoo_boxShopLottery`, body);
      break;
    case `zoo_myMap`:
      body = `functionId=zoo_myMap&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getRequest(`zoo_myMap`, body);
      break;
    case 'zoo_getWelfareScore':
      body = getPostBody(type);
      myRequest = getRequest(`zoo_getWelfareScore`, body);
      break;
    case 'jdjrTaskDetail':
      body = `reqData={"eid":"","sdkToken":"jdd014JYKVE2S6UEEIWPKA4B5ZKBS4N6Y6X5GX2NXL4IYUMHKF3EEVK52RQHBYXRZ67XWQF5N7XB6Y2YKYRTGQW4GV5OFGPDPFP3MZINWG2A01234567"}`;
      myRequest = getRequest(`listTask`, body);
      break;
    case 'jdjrAcceptTask':
      body = `reqData={"eid":"","sdkToken":"jdd014JYKVE2S6UEEIWPKA4B5ZKBS4N6Y6X5GX2NXL4IYUMHKF3EEVK52RQHBYXRZ67XWQF5N7XB6Y2YKYRTGQW4GV5OFGPDPFP3MZINWG2A01234567","id":"${$.taskId}"}`;
      myRequest = getRequest(`acceptTask`, body);
      break;
    case 'add_car':
      body = `functionId=funny_collectScore&body={"taskId":${$.taskId},"taskToken":"${$.taskToken}","ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"HWJhPageh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}","actionType":1}&client=wh5&clientVersion=1.0.0&uuid=c67093f5dd58d33fc5305cdc61e46a9741e05c5b&appid=o2_act`;
      myRequest = getRequest(`funny_collectScore`, body);
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
function getRequest (type, body = {}, method = 'POST', otherUrl) {
  let url = JD_API_HOST + type;
  if (type === 'listTask' || type === 'acceptTask') {
    url = `https://ms.jr.jd.com/gw/generic/hy/h5/m/${type}`;
  }
  if (method === 'GET') {
    url = `${JD_API_HOST}${type}&appid=wh5&body=${encodeURIComponent(body)}`
  }
  url = otherUrl || url
  const headers = {
    'Accept': `application/json, text/plain, */*`,
    'Origin': `https://h5.m.jd.com`,
    'Accept-Encoding': `gzip, deflate, br`,
    "Cache-Control": "no-cache",
    'Cookie': $.cookie,
    'Content-Type': `application/x-www-form-urlencoded`,
    'Host': `api.m.jd.com`,
    'Connection': `keep-alive`,
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    'User-Agent': $.UA || "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
    'Referer': `https://home.m.jd.com/myJd/newhome.action`,
    'Accept-Language': `zh-cn`
  };
  return { url: url, method: method, headers: headers, body: body };
}

// 组织请求 body
function getPostBody (type) {
  let taskBody = '';
  if (type === 'helpInvite') {
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
    case 'initForFarm':
      if (data) {
        $.farmInfo = data
        if ($.farmInfo.farmUserPro) {
          $.success = 1
          $.message = `【你的好友互助码】:\n${$.farmInfo?.farmUserPro?.shareCode || '助力已满，获取助力码失败'}\n【已兑换水果】${$.farmInfo.farmUserPro?.winTimes}次`
        } else {
          $.error = `【数据异常】请手动登录京东app查看是否已选择了水果种植，Cookie是否正确且未过期 ，返回的数据: ${JSON.stringify($.farmInfo)} `
        }
      } else {
        $.error = `服务器返回数据异常，请检查原因~`
      }
      break;
    case 'taskInitForFarm':
      if (data) { $.farmTask = data } else { $.error = `服务器返回数据异常，请检查原因~` }
      break;
    case 'friendListInitForFarm':
      $.friendList = data
      break
    case 'signForFarm':
      if (data.code === "0") {
        $.message = `【签到成功】获得${data.amount}g💧`
      } else {
        $.message = `签到结果:  ${JSON.stringify(data)}`
      }
      break;
    case 'gotWaterGoalTaskForFarm':
      if (data.code === "0") {
        $.message = `【被水滴砸中】获得${data.addEnergy}g💧`
      }
      break;
    case 'browseAdTaskForFarm':
      // $.message = `测试 ${JSON.stringify(data)}`
      $.browseResult = data
      break;
    case 'browseAdTaskForFarmHandle':
      if (data.code === '0') {
        $.message = `完成任务，获得${data?.amount}g💧`
      } else {
        $.message = `浏览任务结果: ${JSON.stringify(data)}`
      }
      break;
    case 'helpInvite':
      switch (data.helpResult?.code) {
        case '0':
          $.message = `助力成功，获得${data.helpResult.salveHelpAddWater}g水滴`
          break;
        case '8':
          $.message = `助力失败，您今天助力次数已耗尽`
          $.selfHelpMax = true;
          break;
        case '9':
          $.message = `助力失败，已经助力过该好友`
          break;
        case '10':
          $.message = `助力失败，该好友已满五人助力`
          break;
        default:
          $.message = `助力失败：${JSON.stringify(data.message)}`
      }
      break;
    case 'waterGoodForFarm':
      $.waterResult = data
      if ($.waterResult.code === '0') {
        $.message = `成功浇水 ${++$.waterCount} 次，剩余水滴${$.waterResult.totalEnergy}g`
        if ($.waterResult.finished) {
          // 已证实，waterResult.finished为true，表示水果可以去领取兑换了
          $.error = `【⏰ 提醒】${$.farmInfo.farmUserPro?.name}已可领取\n请去京东APP或微信小程序查看`
          break
        } else {
          if ($.waterResult.totalEnergy < 10) {
            $.message = `水滴不够，结束浇水`
            $.to = '', $.call.pop()
            break
          }
        }
      } else {
        $.message = '浇水出现失败异常,跳出不在继续浇水'
        $.to = '', $.call.pop()
      }
      break;
    case 'gotStageAwardForFarm':
      data.code === '0' && ($.message = `【${$.waterResult.waterStatusMsg}】奖励${data.addEnergy}g💧`)
      break
    case 'firstWaterTaskForFarm':
      if (data.code === '0') {
        $.message = `【首次浇水奖励】获得${data.amount}g💧`
      } else {
        $.message = `领取首次浇水奖励结果：${JSON.stringify(data.message)}`
      }
      break
    case 'totalWaterTaskForFarm':
      if (data.code === '0') {
        $.message = `【十次浇水奖励】获得${data.totalWaterTaskEnergy}g💧`
      } else {
        $.message = `领取10次浇水奖励结果：${JSON.stringify(data.message)}`
      }
      break
    case 'gotThreeMealForFarm':
      if (data.code === '0') {
        $.message = `【定时领水】获得${data.amount}g💧`
      } else {
        $.message = `定时领水成功结果：${JSON.stringify(data.message)}`
      }
      break
    case 'waterFriendForFarm':
      if (data.code === '0') {
        $.message = `为第${$.farmTask.waterFriendTaskInit?.waterFriendCountKey}个好友浇水成功`
      } else if (data.code === '11') {
        $.message = '浇水失败：水滴不够'
      }
      break
    case 'getFullCollectionReward':
      $.taskStep++;
      if (data.code === '0') {
        data.hasLimit ? $.message = `小鸭子游戏:${data.title}` : $.message = `${data.title}`
      } else if (data.code === '10') {
        $.taskStep = 11 // 跳出循环
        $.message = '【游戏失败】小鸭子游戏达到上限'
      }
      break
    default:
      $.error = `未判断的异常${type}`
  }
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
    }
  }
}
