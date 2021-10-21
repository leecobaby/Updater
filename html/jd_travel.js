/**
 * name: 京东-双11环游记
 * author: @leeco
 * apply: shortcuts
 * activity: https://wbbny.m.jd.com/babelDiy/Zeus/2vVU4E7JLH9gKYfLQ5EVW6eN2P7B/index.html
 * tips: Only for learning and communication, strictly prohibited for commercial use, please delete within 24 hours
 */

// 到指令里运行需要注释掉
// const $ = {}

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
 * 云端推送提示
 */
function cloudTip () {
  $.message = `指令已运行完毕！\n其他功能和任务正在开发中，上线将自动推送到指令中，无需任何操作~`
  document.write(JSON.stringify($))
}
/**
 * 云端推送提示
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
  dealReturn('travel_getHomeData', $.data)
  document.write(JSON.stringify($))
}

// 获取任务列表
function travel_getTaskDetail () {
  $.callback = 'Func.request'
  takePostRequest('travel_getTaskDetail');
  return

  // next
  $.callback = ''
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

// 好友助力
function help () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['help']
  $.inviteList = Array.isArray($.inviteList) ? $.inviteList : [$.inviteList]

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

// 组队助力
function pkHelp () {
  $.callback = 'Func.request'
  takePostRequest('travel_pk_joinGroup');
  return

  // next
  $.callback = ''
  dealReturn('pkHelp', $.data)
  document.write(JSON.stringify($))
}

// pk助力
function travel_pk_collectPkExpandScore () {
  $.callback = 'Func.request'
  takePostRequest('travel_pk_collectPkExpandScore');
  return

  //next
  $.callback = ''
  dealReturn('travel_pk_collectPkExpandScore', $.data)
  document.write(JSON.stringify($))
}

// 多次做任务控制器
function doTaskController () {
  switch (key) {
    case value:

      break;

    default:
      break;
  }
}

// 做主任务
function doTask () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['doTask']

  // 利用队列取代循环
  $.oneTask = $.taskList.shift()
  $.taskId = $.oneTask?.taskId;
  if (!$.oneTask) {
    // 循环完成重新设置 to,call
    $.to = '', $.call.pop()
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

// 领累计任务降级
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
    $.message = `任务已全都完成~`
    document.write(JSON.stringify($))
    return
  }

  if ($.oneTask.status === 4) {
    document.write(JSON.stringify($))
    return
  }

  $.callback = 'Func.request'
  takePostRequest('travel_getBadgeAward');

  // next
  $.callback = ''
  dealReturn('travel_getBadgeAward', $.data)
  document.write(JSON.stringify($))
}

// taskType = 0 的任务
function oneTaskHandle () {
  // 嵌套调用里面用数组形式 push
  ($.call[$.call.length - 1] == 'oneTaskHandle') || $.call.push('oneActivityInfo')
  $.taskId = $.oneTask.taskId
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

//领取奖励
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

// 提交请求信息
function takePostRequest (type) {
  let { log, random } = $.signList?.shift() || {}
  let body = ``;
  let myRequest = ``;
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
    case 'zoo_pk_getHomeData':
      body = `functionId=zoo_pk_getHomeData&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_pk_getHomeData`, body);
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
      body = `functionId=travel_pk_collectPkExpandScore&body={"ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"HYGJZYh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}","inviteId":"PKASTT0195L6r47PBTNYCtIMjDX0CjRWnIaRzTIjeQOc"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`travel_pk_collectPkExpandScore`, body);
      break;
    case 'travel_pk_joinGroup':
      body = `functionId=travel_collectScore&body={"confirmFlag":"1","ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"HYGJZYh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}","inviteId":"${$.pkHelpCode}"}&client=wh5&clientVersion=1.0.0`
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
    case 'zoo_bdCollectScore':
      body = getPostBody(type);
      myRequest = getPostRequest(`zoo_bdCollectScore`, body);
      break;
    case 'qryCompositeMaterials':
      body = `functionId=qryCompositeMaterials&body={"qryParam":"[{\\"type\\":\\"advertGroup\\",\\"mapTo\\":\\"resultData\\",\\"id\\":\\"05371960\\"}]","activityId":"2s7hhSTbhMgxpGoa9JDnbDzJTaBB","pageId":"","reqSrc":"","applyKey":"jd_star"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`qryCompositeMaterials`, body);
      break;
    case 'zoo_boxShopLottery':
      body = `functionId=zoo_boxShopLottery&body={"shopSign":"${$.shopSign}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_boxShopLottery`, body);
      break;
    case `zoo_wishShopLottery`:
      body = `functionId=zoo_wishShopLottery&body={"shopSign":"${$.shopSign}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_boxShopLottery`, body);
      break;
    case `zoo_myMap`:
      body = `functionId=zoo_myMap&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_myMap`, body);
      break;
    case 'zoo_getWelfareScore':
      body = getPostBody(type);
      myRequest = getPostRequest(`zoo_getWelfareScore`, body);
      break;
    case 'jdjrTaskDetail':
      body = `reqData={"eid":"","sdkToken":"jdd014JYKVE2S6UEEIWPKA4B5ZKBS4N6Y6X5GX2NXL4IYUMHKF3EEVK52RQHBYXRZ67XWQF5N7XB6Y2YKYRTGQW4GV5OFGPDPFP3MZINWG2A01234567"}`;
      myRequest = getPostRequest(`listTask`, body);
      break;
    case 'jdjrAcceptTask':
      body = `reqData={"eid":"","sdkToken":"jdd014JYKVE2S6UEEIWPKA4B5ZKBS4N6Y6X5GX2NXL4IYUMHKF3EEVK52RQHBYXRZ67XWQF5N7XB6Y2YKYRTGQW4GV5OFGPDPFP3MZINWG2A01234567","id":"${$.taskId}"}`;
      myRequest = getPostRequest(`acceptTask`, body);
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
function getPostRequest (type, body) {
  let url = JD_API_HOST + type;
  if (type === 'listTask' || type === 'acceptTask') {
    url = `https://ms.jr.jd.com/gw/generic/hy/h5/m/${type}`;
  }
  const method = `POST`;
  const headers = {
    'Accept': `application/json, text/plain, */*`,
    'Origin': `https://wbbny.m.jd.com`,
    'Accept-Encoding': `gzip, deflate, br`,
    'Cookie': $.cookie,
    'Content-Type': `application/x-www-form-urlencoded`,
    'Host': `api.m.jd.com`,
    'Connection': `keep-alive`,
    'User-Agent': $.UA || "jdapp;iPhone;10.0.6;14.4;c67093f5dd58d33fc5305cdc61e46a9741e05c5b;network/4g;model/iPhone12,1;addressid/2377723269;appBuild/167724;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
    'Referer': `https://wbbny.m.jd.com/`,
    'Accept-Language': `zh-CN`
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
  !data && ($.error = '接口返回数据为空，检查账号cookie是否过期或错误')
  switch (type) {
    case 'travel_getHomeData':
      if (data?.data?.bizCode === 0) {
        $.homeData = data.data;
        $.secretp = data.data.result.homeMainInfo.secretp;
        $.userInfo = $.homeData.result.homeMainInfo
        const point = $.userInfo.raiseInfo.cityConfig.points[$.userInfo.raiseInfo.scoreLevel % 5 - 2] || '无'
        $.message = `当前玩家进度: ${$.userInfo.raiseInfo.cityConfig.cityName}-${point} ${$.userInfo.curCity}/20\n剩余汪汪币${$.userInfo.raiseInfo.remainScore}，下一关需要${$.userInfo.raiseInfo.nextLevelScore - $.userInfo.raiseInfo.curLevelStartScore}`
        // $.secretpInfo[$.UserName] = $.secretp;
      }
      break;
    case 'travel_getTaskDetail':
      if (data.code === 0) {
        $.message = `你的好友互助码为:\n${data.data?.result?.inviteId || '你已被助力满，获取助力码失败'}`
        // 这里将来需要做 多账号运行 账号相互之间助力功能
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
        $.error = `该账户脚本执行任务火爆，暂停执行任务，请手动做任务或者等待解决脚本火爆问题`
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
    case 'zoo_pk_getHomeData':
      if (data.code === 0) {
        console.log(`PK互助码：${data.data.result.groupInfo.groupAssistInviteId}`);
        if (data.data.result.groupInfo.groupAssistInviteId) $.pkInviteList.push(data.data.result.groupInfo.groupAssistInviteId);
        $.pkHomeData = data.data;
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
      // data.code === 0 && ($.message = data.data?.bizMsg)
      break;
    case 'oneTaskHandle':
      if (data.code === 0 && data.data?.bizCode === 0) {
        $.message = `完成任务：获得 ${data.data?.result?.acquiredScore} 汪汪币`
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
    case 'zoo_shopLotteryInfo':
      if (data.code === 0) {
        $.shopResult = data.data.result;
      }
      break;
    case 'zoo_bdCollectScore':
      if (data.code === 0) {
        console.log(`签到获得：${data.data.result.score}`);
      }
      break;
    case 'qryCompositeMaterials':
      //console.log(data);
      if (data.code === '0') {
        $.shopInfoList = data.data.resultData.list;
        console.log(`获取到${$.shopInfoList.length}个店铺`);
      }
      break
    case 'zoo_boxShopLottery':
      let result = data.data.result;
      switch (result.awardType) {
        case 8:
          console.log(`获得金币：${result.rewardScore}`);
          break;
        case 5:
          console.log(`获得：adidas能量`);
          break;
        case 2:
        case 3:
          console.log(`获得优惠券：${result.couponInfo.usageThreshold} 优惠：${result.couponInfo.quota}，${result.couponInfo.useRange}`);
          break;
        default:
          console.log(`抽奖获得未知`);
          console.log(JSON.stringify(data));
      }
      break
    case 'zoo_wishShopLottery':
      console.log(JSON.stringify(data));
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
        $.jdjrTaskList = data.resultData.top;
      }
      break;
    case 'jdjrAcceptTask':
      if (data.resultCode === 0) {
        console.log(`领任务成功`);
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
      console.log(`未判断的异常${type}`);
  }
}