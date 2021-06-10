
const $ = {}
// $.from = ``
// $.to = ``
// $.call = ``
// $.callback = ``
// $.data = ``

// $.secretpInfo = {}
// $.innerPkInviteList = []
// $.signSingle = {}
// $.homeData = {}
// $.secretp = ``
// $.taskList = []
// $.shopSign = ``


/** 下方放 call 文本，来控制函数执行 **/


/** 下方放 next 文本，来控制逻辑执行 **/



//   form 来源   to 目标   callback 回调 call 调用
//   当回调有值则执行回调，没有则去往目标，没有目标则去往来源

//   func.xxx -> logicHandler($) -> func.http -> logicHandler($) -> func.xxx
//   回调完执行 next，视情况来清空 callback


// zoo_signSingle
// zoo_getHomeData
// zoo_getSignHomeData
// zoo_getTaskDetail
// zoo_sign
// zoo_raise
// doTask




// 获取活动接口验证
function zoo_signSingle () {
  $.callback = 'Func.request'
  takePostRequest('zoo_signSingle')
  return

  // next
  $.callback = ''
  dealReturn('zoo_signSingle', $.data)
  if (JSON.stringify($.signSingle) === `{}` || $.signSingle.bizCode !== 0) {
    $.error = 'zoo_signSingle' + $.signSingle.bizMsg
    document.write(JSON.stringify($))
    console.log($.signSingle.bizMsg);
  } else {
    $.success = 1
    $.message = '获取活动信息'
    document.write(JSON.stringify($))
    console.log($.message);
  }
}

// 获取活动大厅信息
function zoo_getHomeData () {
  $.callback = 'Func.request'
  takePostRequest('zoo_getHomeData');
  return

  // next
  $.callback = ''
  dealReturn('zoo_getHomeData', $.data)
  $.userInfo = $.homeData.result.homeMainInfo
  $.success = 1
  $.message = `当前分红：${$.userInfo.raiseInfo.redNum}份，当前等级:${$.userInfo.raiseInfo.scoreLevel}\n当前金币${$.userInfo.raiseInfo.remainScore}，下一关需要${$.userInfo.raiseInfo.nextLevelScore - $.userInfo.raiseInfo.curLevelStartScore}`
  document.write(JSON.stringify($))
  console.log($.message);
}

// 获取签到信息
function zoo_getSignHomeData () {
  $.callback = 'Func.request'
  takePostRequest('zoo_getSignHomeData');
  return

  // next
  $.callback = ''
  dealReturn('zoo_getSignHomeData', $.data)
  $.success = 1
  $.message = '获取签到信息'
  document.write(JSON.stringify($))
}

// 签到
function zoo_sign () {
  if ($.signHomeData.todayStatus === 0) {
    $.callback = 'Func.request'
    takePostRequest('zoo_sign');
    return

    $.callback = ''
    dealReturn('zoo_sign', $.data)
    document.write(JSON.stringify($))
  } else {
    $.callback = ''
    $.success = 1
    $.message = `已签到`
    document.write(JSON.stringify($))
    console.log($.message);
  }
}

// 升级
function zoo_raise () {
  let raiseInfo = $.homeData.result.homeMainInfo.raiseInfo;
  if (Number(raiseInfo.totalScore) > Number(raiseInfo.nextLevelScore) && raiseInfo.buttonStatus === 1) {
    $.callback = 'Func.request'
    $.message = `满足升级条件，去升级`
    takePostRequest('zoo_raise');
    console.log($.message);
    return

    // next
    $.callback = ''
    dealReturn('zoo_raise', $.data)
    document.write(JSON.stringify($))
  } else {
    $.success = 1
    $.message = `未满足升级条件`
    document.write(JSON.stringify($))
  }
}

//收金币
function zoo_collectProduceScore () {
  $.callback = 'Func.request'
  takePostRequest('zoo_collectProduceScore');
  return

  // next
  $.callback = ''
  dealReturn('zoo_collectProduceScore', $.data)
  document.write(JSON.stringify($))
}

// 获取任务列表
function zoo_getTaskDetail () {
  $.callback = 'Func.request'
  takePostRequest('zoo_getTaskDetail');
  return

  // next
  $.callback = ''
  dealReturn('zoo_getTaskDetail', $.data)
  document.write(JSON.stringify($))
}

// 做任务
function doTask () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['doTask']

  // 利用队列取代循环
  $.oneTask = $.taskList.shift()
  if (!$.oneTask) {
    // 循环完成重新设置 to,call
    $.to = '', $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  if ([1, 3, 5, 7, 9, 26].includes($.oneTask.taskType) && $.oneTask.status === 1) {
    $.activityInfoList = $.oneTask.shoppingActivityVos || $.oneTask.brandMemberVos || $.oneTask.followShopVo || $.oneTask.browseShopVo;

    oneActivityInfo()

  } else if ($.oneTask.taskType === 2 && $.oneTask.status === 1) {

    zoo_getFeedDetail()

  }

  document.write(JSON.stringify($))
}

//  处理任务列表单类型任务
function oneActivityInfo () {
  // 循环逻辑单独设置 to,call  嵌套调用里面用数组形式 push
  $.to = 'Func.logicHandler'
  $.call[$.call.length - 1] == 'oneActivityInfo' || $.call.push('oneActivityInfo')

  // 利用队列取代循环
  $.oneActivityInfo = $.activityInfoList.shift()
  if (!$.oneActivityInfo) {
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

  $.callbackInfo = {};
  $.message = `做任务：${$.oneActivityInfo.title || $.oneActivityInfo.taskName || $.oneActivityInfo.shopName};等待完成`
  $.callback = 'Func.request'
  takePostRequest('zoo_collectScore');
  console.log($.message);
  return

  // next 
  $.callback = ''
  dealReturn('zoo_collectScore', $.data)
  if ($.callbackInfo.code === 0 && $.callbackInfo.data?.result?.taskToken) {
    let sendInfo = encodeURIComponent(`{"dataSource":"newshortAward","method":"getTaskAward","reqParams":"{\\"taskToken\\":\\"${$.callbackInfo.data.result.taskToken}\\"}","sdkVersion":"1.0.0","clientLanguage":"zh"}`)

    // 等待 8s
    $.wait = 8
    $.callback = 'Func.request'
    callbackResult(sendInfo)
    return

    // next next
    $.callback = ''
    $.wait = 1
    $.success = 1
    $.message = `完成任务： ${$.data.toast?.subTitle}`
    console.log($.message)
    document.write(JSON.stringify($))

  } else if ($.oneTask.taskType === 5 || $.oneTask.taskType === 3 || $.oneTask.taskType === 26) {
    $.success = 1
    $.message = `任务完成`
    console.log($.message);
  } else {
    $.error = `oneActivityInfo 任务失败`
    console.log($.error);
  }

  // Activity Task Finish
  document.write(JSON.stringify($))
}

// 处理购物车任务信息
function zoo_getFeedDetail () {
  // 嵌套调用里面用数组形式 push
  $.call[$.call.length - 1] == 'zoo_getFeedDetail' || $.call.push('zoo_getFeedDetail')

  $.taskId = $.oneTask.taskId;
  $.feedDetailInfo = {};
  $.callback = 'Func.request'
  $.message = `做任务：${$.oneTask.taskName};等待完成 (实际不会添加到购物车)`
  takePostRequest('zoo_getFeedDetail');
  document.write(JSON.stringify($))
  return

  // next
  $.callback = ''
  dealReturn('zoo_getFeedDetail', $.data)
  $.productList = $.feedDetailInfo.productInfoVos;
  $.needTime = Number($.feedDetailInfo.maxTimes) - Number($.feedDetailInfo.times);
  $.call.pop()
  add_car()
}

// 加购物车
function add_car () {
  // 循环逻辑单独设置 to,call  嵌套调用里面用数组形式 push
  $.to = 'Func.logicHandler'
  $.call[$.call.length - 1] == 'add_car' || $.call.push('add_car')

  $.addCarInfo = $.productList.shift()
  if ($.needTime <= 0) {
    // 循环完成重新设置 to,call
    $.to = '', $.call.pop()
    document.write(JSON.stringify($))
    return
  }

  if ($.addCarInfo.status !== 1) {
    document.write(JSON.stringify($))
    return
  }
  $.taskToken = $.addCarInfo.taskToken;
  $.needTime--;
  $.message = `加购：${$.addCarInfo.skuName}`
  $.callback = 'Func.request'
  takePostRequest('add_car');
  document.write(JSON.stringify($))
  return

  // next
  $.callback = ''
  dealReturn('add_car', $.data)
  document.write(JSON.stringify($))
}




/** Base Tool **/

//领取奖励
function callbackResult (info) {

  let url = `https://api.m.jd.com/?functionId=qryViewkitCallbackResult&client=wh5&clientVersion=1.0.0&body=${info}&_timestamp=` + Date.now()
  let method = 'GET'
  let headers = {
    'Origin': `https://bunearth.m.jd.com`,
    'Cookie': $.cookie,
    'Connection': `keep-alive`,
    'Accept': `*/*`,
    'Host': `api.m.jd.com`,
    'User-Agent': "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
    'Accept-Encoding': `gzip, deflate, br`,
    'Accept-Language': `zh-cn`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Referer': 'https://bunearth.m.jd.com'
  }


  $.request = { url, method, headers }
  // document.write(JSON.stringify($))
}

function takePostRequest (type) {
  let body = ``;
  let myRequest = ``;
  switch (type) {
    case 'zoo_signSingle':
      body = `functionId=zoo_signSingle&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_signSingle`, body);
      break;
    case 'zoo_getHomeData':
      body = `functionId=zoo_getHomeData&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_getHomeData`, body);
      break;
    case 'helpHomeData':
      body = `functionId=zoo_getHomeData&body={"inviteId":"${$.inviteId}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_getHomeData`, body);
      break;
    case 'zoo_collectProduceScore':
      body = getBody(type);
      myRequest = getPostRequest(`zoo_collectProduceScore`, body);
      break;
    case 'zoo_getFeedDetail':
      body = `functionId=zoo_getFeedDetail&body={"taskId":"${$.taskId}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_getFeedDetail`, body);
      break;
    case 'zoo_getTaskDetail':
      body = `functionId=zoo_getTaskDetail&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_getTaskDetail`, body);
      break;
    case 'zoo_collectScore':
      body = getBody(type);
      //console.log(body);
      myRequest = getPostRequest(`zoo_collectScore`, body);
      break;
    case 'zoo_raise':
      body = `functionId=zoo_raise&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_raise`, body);
      break;
    case 'help':
      body = getBody(type);
      //console.log(body);
      myRequest = getPostRequest(`zoo_collectScore`, body);
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
      body = getBody(type);
      //console.log(body);
      myRequest = getPostRequest(`zoo_pk_collectScore`, body);
      break;
    case 'zoo_pk_doPkSkill':
      body = `functionId=zoo_pk_doPkSkill&body={"skillType":"${$.skillCode}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_pk_doPkSkill`, body);
      break;
    case 'pkHelp':
      body = getBody(type);
      myRequest = getPostRequest(`zoo_pk_assistGroup`, body);
      break;
    case 'zoo_getSignHomeData':
      body = `functionId=zoo_getSignHomeData&body={"notCount":"1"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_getSignHomeData`, body);
      break;
    case 'zoo_sign':
      body = `functionId=zoo_sign&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_sign`, body);
      break;
    case 'wxTaskDetail':
      body = `functionId=zoo_getTaskDetail&body={"appSign":"2","channel":1,"shopSign":""}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_getTaskDetail`, body);
      break;
    case 'zoo_shopLotteryInfo':
      body = `functionId=zoo_shopLotteryInfo&body={"shopSign":"${$.shopSign}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getPostRequest(`zoo_shopLotteryInfo`, body);
      break;
    case 'zoo_bdCollectScore':
      body = getBody(type);
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
      body = getBody(type);
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
    case 'add_car':
      body = getBody(type);
      myRequest = getPostRequest(`zoo_collectScore`, body);
      break;
    default:
      $.error = `takePostRequest 错误${type}`
      console.log(`错误${type}`);
  }

  $.request = myRequest
  document.write(JSON.stringify($))
}

function dealReturn (type, data) {
  switch (type) {
    case 'zoo_signSingle':
      if (data.code === 0) $.signSingle = data.data
      break;
    case 'zoo_getHomeData':
      if (data.code === 0) {
        if (data.data['bizCode'] === 0) {
          $.homeData = data.data;
          $.secretp = data.data.result.homeMainInfo.secretp;
          // $.secretpInfo[$.UserName] = $.secretp;
        }
      }
      break;
    case 'helpHomeData':
      console.log(data)
      if (data.code === 0) {
        $.secretp = data.data.result.homeMainInfo.secretp;
        //console.log(`$.secretp：${$.secretp}`);
      }
      break;
    case 'zoo_collectProduceScore':
      if (data.code === 0 && data.data && data.data.result) {
        $.success = 1
        $.message = `收取成功，获得：${data.data.result.produceScore}`
        console.log($.message);
      } else {
        $.error = 'zoo_collectProduceScore 收取失败'
        console.log($.error);
      }
      if (data.code === 0 && data.data && data.data.bizCode === -1002) {
        $.hotFlag = true;
        $.error = `该账户脚本执行任务火爆，暂停执行任务，请手动做任务或者等待解决火爆问题`
        console.log($.error)
      }
      break;
    case 'zoo_getTaskDetail':
      if (data.code === 0) {
        $.success = 1
        $.message = `好友互助码:${data.data.result.inviteId || '助力已满，获取助力码失败'}`
        console.log($.message);
        // if (data.data.result.inviteId) {
        //   $.inviteList.push({
        //     'ues': $.UserName,
        //     'secretp': $.secretp,
        //     'inviteId': data.data.result.inviteId,
        //     'max': false
        //   });
        // }
        $.taskList = data.data.result.taskVos;
      }
      break;
    case 'zoo_collectScore':
      $.callbackInfo = data;
      break;
    case 'zoo_raise':
      if (data.code === 0) {
        $.success = 1
        $.message = `升级成功`
      } else { $.error = 'zoo_raise 升级失败' }
      break;
    case 'help':
    case 'pkHelp':
      //console.log(data);
      switch (data.data.bizCode) {
        case 0:
          console.log(`助力成功`);
          break;
        case -201:
          console.log(`助力已满`);
          $.oneInviteInfo.max = true;
          break;
        case -202:
          console.log(`已助力`);
          break;
        case -8:
          console.log(`已经助力过该队伍`);
          break;
        case -6:
        case 108:
          console.log(`助力次数已用光`);
          $.canHelp = false;
          break;
        default:
          console.log(`怪兽大作战助力失败：${JSON.stringify(data)}`);
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
    case 'zoo_getFeedDetail':
      if (data.code === 0) {
        $.feedDetailInfo = data.data.result.addProductVos[0];
      }
      break;
    case 'zoo_pk_collectScore':
      break;
    case 'zoo_pk_doPkSkill':
      if (data.data.bizCode === 0) console.log(`使用成功`);
      if (data.data.bizCode === -2) {
        console.log(`队伍任务已经完成，无法释放技能!`);
        $.doSkillFlag = false;
      } else if (data.data.bizCode === -2003) {
        console.log(`现在不能打怪兽`);
        $.doSkillFlag = false;
      }
      break;
    case 'zoo_getSignHomeData':
      if (data.code === 0) {
        $.signHomeData = data.data.result;
      }
      break;
    case 'zoo_sign':
      if (data.code === 0 && data.data.bizCode === 0) {
        $.success = 1
        $.message = `去签到：签到成功`
        console.log($.message);
        if (data.data.result.redPacketValue) $.message = `签到获得：${data.data.result.redPacketValue} 红包`;
      } else {
        $.error = `zoo_sign 签到失败`
        console.log($.error);
      }
      break;
    case 'wxTaskDetail':
      if (data.code === 0) {
        $.wxTaskList = data.data.result.taskVos;
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
    case 'add_car':
      if (data.code === 0) {
        let acquiredScore = data.data.result.acquiredScore;
        if (Number(acquiredScore) > 0) {
          $.message = `加购成功,获得金币:${acquiredScore}`
        } else {
          $.message = `加购成功`
        }
      } else {
        $.error = `加购失败`
      }
      break
    default:
      $.error = `未判断的异常${type}`
  }
}

function getPostRequest (type, body) {
  let url = `https://api.m.jd.com/client.action?functionId=${type}`;
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
    'User-Agent': "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
    'Referer': `https://wbbny.m.jd.com`,
    'Accept-Language': `zh-cn`
  };
  return { url, method, headers, body };
}

function getBody (type) {
  let rnd = Math.floor(1e6 + 9e6 * Math.random()).toString()
  let ss = JSON.stringify({ "extraData": { "log": "-1", "sceneid": "QD216hPageh5" }, "secretp": $.secretp, "random": rnd.toString() });
  let taskBody = '';
  if (type === 'help') {
    taskBody = `functionId=zoo_collectScore&body=${JSON.stringify({ "taskId": 2, "inviteId": $.inviteId, "actionType": 1, "ss": ss })}&client=wh5&clientVersion=1.0.0`
  } else if (type === 'pkHelp') {
    taskBody = `functionId=zoo_pk_assistGroup&body=${JSON.stringify({ "confirmFlag": 1, "inviteId": $.pkInviteId, "ss": ss })}&client=wh5&clientVersion=1.0.0`;
  } else if (type === 'zoo_collectProduceScore') {
    taskBody = `functionId=zoo_collectProduceScore&body=${JSON.stringify({ "ss": ss })}&client=wh5&clientVersion=1.0.0`;
  } else if (type === 'zoo_getWelfareScore') {
    taskBody = `functionId=zoo_getWelfareScore&body=${JSON.stringify({ "type": 2, "currentScence": $.currentScence, "ss": ss })}&client=wh5&clientVersion=1.0.0`;
  } else if (type === 'add_car') {
    taskBody = `functionId=zoo_collectScore&body=${JSON.stringify({ "taskId": $.taskId, "taskToken": $.taskToken, "actionType": 1, "ss": ss })}&client=wh5&clientVersion=1.0.0`
  } else {
    taskBody = `functionId=${type}&body=${JSON.stringify({ "taskId": $.oneTask.taskId, "actionType": 1, "taskToken": $.oneActivityInfo.taskToken, "ss": ss })}&client=wh5&clientVersion=1.0.0`
  }
  return taskBody
}
