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

/** 下方放 call 文本，来控制函数执行 **/


/** 下方放 next 文本，来控制逻辑执行 **/


//   form 来源   to 目标   callback 回调   call 调用
//   当回调有值则执行回调，没有则去往目标，没有目标则去往来源

//   func.xxx -> logicHandler($) -> func.http -> logicHandler($) -> func.xxx
//   回调完执行 next，视情况来清空 callback
//   error 为错误信息，会终止当前账号在指令中的运行，直接运行输出log开始下一个账号或结束


/**
 * 初始化农场, 可获取果树及用户信息API
 */
function initForFarm () {
  $.callback = 'Func.request'
  takeRequest('initForFarm');
  return

  // next
  $.callback = ''
  dealReturn('initForFarm', $.data)
  document.write(JSON.stringify($))
  console.log($.message);
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
  // 暂时没做被水滴砸中逻辑
}

/**
 * 好友助力
 */
function help () {
  // 循环逻辑单独设置 to,call
  $.to = 'Func.logicHandler'
  $.call = ['helpInvite']
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
    $.callback = ''
    dealReturn('signForFarm', $.data)
    document.write(JSON.stringify($))
  } else {
    $.message = `今天已签到,连续签到${$.farmTask.signInit?.totalSigned},下次签到可得${$.farmTask.signInit?.signEnergyEachAmount}g`
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
  if (!$.farmTask.gotBrowseTaskAdInit?.f || !$.oneTask) {
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
    $.wait = 8
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
      if ($.data.code === '0') {
        $.message = `完成任务,获得${$.data?.amount}g💧`
      } else {
        $.message = `浏览任务结果: ${JSON.stringify(data)}`
      }
      document.write(JSON.stringify($))
    }
  } else {
    $.message = `浏览任务结果: ${JSON.stringify(data)}`
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
    case 'funny_collectScore':
      body = `functionId=funny_collectScore&body={"taskId":${$.taskId},"taskToken":"${$.taskToken}","ss":"{\\"extraData\\":{\\"log\\":\\"${log}\\",\\"sceneid\\":\\"HWJhPageh5\\"},\\"secretp\\":\\"${$.secretp}\\",\\"random\\":\\"${random}\\"}","actionType":1}&client=wh5&clientVersion=1.0.0&uuid=c67093f5dd58d33fc5305cdc61e46a9741e05c5b&appid=o2_act`;
      myRequest = getRequest(`funny_collectScore`, body);
      break;
    case 'helpInvite':
      body = `{imageUrl:"",nickName:"",shareCode:"${$.inviteId}",babelChannel:"3",version:2,channel:1}`;
      myRequest = getRequest(`initForFarm`, body, 'GET');
      break;
    case 'zoo_pk_getHomeData':
      body = `functionId=zoo_pk_getHomeData&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getRequest(`zoo_pk_getHomeData`, body);
      break;
    case 'zoo_pk_getTaskDetail':
      body = `functionId=zoo_pk_getTaskDetail&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getRequest(`zoo_pk_getTaskDetail`, body);
      break;
    case 'zoo_pk_collectScore':
      body = getPostBody(type);
      //console.log(body);
      myRequest = getRequest(`zoo_pk_collectScore`, body);
      break;
    case 'zoo_pk_doPkSkill':
      body = `functionId=zoo_pk_doPkSkill&body={"skillType":"${$.skillCode}"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getRequest(`zoo_pk_doPkSkill`, body);
      break;
    case 'pkHelp':
      body = getPostBody(type);
      myRequest = getRequest(`zoo_pk_assistGroup`, body);
      break;
    case 'zoo_getSignHomeData':
      body = `functionId=zoo_getSignHomeData&body={"notCount":"1"}&client=wh5&clientVersion=1.0.0`;
      myRequest = getRequest(`zoo_getSignHomeData`, body);
      break;
    case 'zoo_sign':
      body = `functionId=zoo_sign&body={}&client=wh5&clientVersion=1.0.0`;
      myRequest = getRequest(`zoo_sign`, body);
      break;
    case 'wxTaskDetail':
      body = `functionId=funny_getTaskDetail&body={"appSign":"2","channel":1,"shopSign":""}&client=wh5&clientVersion=1.0.0`;
      myRequest = getRequest(`funny_getTaskDetail`, body);
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
function getRequest (type, body = {}, method = 'POST') {
  let url = JD_API_HOST + type;
  if (type === 'listTask' || type === 'acceptTask') {
    url = `https://ms.jr.jd.com/gw/generic/hy/h5/m/${type}`;
  }
  if (method === 'GET') {
    url = `${JD_API_HOST}${type}&appid=wh5&body=${encodeURIComponent(body)}`
  }
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
  switch (type) {
    case 'initForFarm':
      if (data) {
        $.farmInfo = data
        if ($.farmInfo.farmUserPro) {
          $.success = 1
          $.message = `【好友互助码】:\n${$.farmInfo?.farmUserPro?.shareCode || '助力已满，获取助力码失败'}\n【已兑换水果】${$.farmInfo.farmUserPro?.winTimes}次`
        } else {
          $.error = `【数据异常】请手动登录京东app查看此账号是否正常，农场初始化数据: ${JSON.stringify($.farmInfo)} `
        }
      } else {
        $.error = `服务器返回数据异常，请检查原因~`
      }
      break;
    case 'taskInitForFarm':
      if (data) { $.farmTask = data } else { $.error = `服务器返回数据异常，请检查原因~` }
      break;
    case 'signForFarm':
      if (data.code === "0") {
        $.message = `【签到成功】获得${data.amount}g💧`
      } else {
        $.message = `签到结果:  ${JSON.stringify(data)}`
      }
      break;
    case 'browseAdTaskForFarm':
      $.browseResult = data
      break;
    case 'funny_collectScore':
      $.callbackInfo = data;
      break;
    case 'zoo_raise':
      if (data.code === 0) console.log(`升级成功`);
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
    case 'funny_getFeedDetail':
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
        console.log(`签到获得成功`);
        if (data.data.result.redPacketValue) console.log(`签到获得：${data.data.result.redPacketValue} 红包`);
      } else {
        console.log(`签到失败`);
        console.log(data);
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
        let acquiredScore = data.data?.result?.acquiredScore;
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
      console.log(`未判断的异常${type}`);
  }
}