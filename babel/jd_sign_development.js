/**
 * name: 京东签到
 * author: @leeco
 * modified: @NobyDa
 * apply: shortcuts
 * activity: https://bean.m.jd.com/bean/signIndex.action
 * tips: Only for learning and communication, strictly prohibited for commercial use, please delete within 24 hours
 */

// 618 种草街 
// https://prodev.m.jd.com/mall/active/U18CGRp9tTnAkH1HfHnhBEWrfrr/index.html


// 到指令里运行需要注释掉
// const $ = {}

// $.inviteList = [];
// $.pkInviteList = [];
// $.secretpInfo = {};
// $.innerPkInviteList = [];

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

  // 处理红包码
  $.rebateCode = []

  // 任务流程初始化
  $.taskStep = 1

  // 生成随机 UA UUID
  $.uuid = $.Utils.randomString(40)
  $.UA = `jdapp;iPhone;10.2.0;13.1.2;${$.uuid};M/5.0;network/wifi;ADID/;model/iPhone8,1;addressid/2308460611;appBuild/167853;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;`

  // 自变量
  $.self = {}

  $.message = `本指令作为自动化方案开源分享，并不保证他带来的任何副作用，任何副作用请自行负责，如不同意请停止使用！`
  document.write(JSON.stringify($))
}


/**
 * 云端推送提示
 */
function cloudTip () {
  $.message = `指令已运行完毕！\n其他功能和任务正在开发中，上线将自动推送到指令中，无需任何操作~`
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
    takeRequest('JDSecKillingNext')
    // return
    // 这里的逻辑是在 next 里面的，而 next 不是一个函数，所以不能使用 return 来中断
    // 对于 next next 这种嵌套需要单独隔离，只在运行到的时候调用，判断是否有页面内容为好的方式

    // next next 
    if (!document.body.innerText) {
      $.callback = ''
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
      }
      break;
    case 3:
      // 当天首登奖励
      do618ZCReward()
      break;
    case 4:
      // 做浏览内容任务
      $.self.count = 0
      do618ZCBrowseTask()
      break;
    case 5:
      // 做任务列表任务
      do618ZCRecommendTask()
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


  if ($.self.count >= 20) {
    // 循环完成重新设置 call
    $.call.pop()
    $.next = 0 // 清空 Next.key
    $.self.count = 0
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
  $.oneActivityInfo = $.taskList.shift()
  if (!$.oneActivityInfo || $.activityInfoList.status != 0) {
    // 循环完成重新设置 call
    $.call.pop()
    $.next = 0 // 清空 Next.key
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
      let arr = [];
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
      body = `appid=wh5&area=5_274_49707_49973&body={"dataSource":"babelInteractive"method":"customDoInteractiveAssignmentForBabel","reqParams":"{\"itemId\":\"${$.itemId}\",\"encryptProjectId\":\"${$.projectId}\",\"encryptAssignmentId\":\"${$.assignmentId}\"}"}&build=167283&client=apple&clientVersion=9.1.0`;
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
  let json = $.Utils.stringify(data)

  switch (type) {
    case 'JingDongBean':
      if (data.code === 3) {
        $.message = '京东商城-京豆: 失败, 原因: Cookie失效‼️'
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
        } else if (data.match(/人数较多|S101/)) {
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
      } else {
        $.message = `任务失败~`
      }
      break;
    case 'do618ZCReward':
      if (data.code == 0) {
        $.message = `当天首登有奖：${data.message || JSON.stringify(data.data)}`
      } else {
        $.message = `当天首登有奖：出错原因${SON.stringify(data)}`
      }
      break;
    case 'do618ZCBrowseTask':
      $.callbackInfo = data
      break;
    case 'do618ZCLottery':
      if (data.code == 0 && data.data?.reward) {
        $.message = `抽奖成功：${data.data?.rewardMsg}`
      } else {
        $.call.pop() // 结束抽奖
        $.message = `抽奖失败：原因${data}`
      }
      break;
    case 'qryViewkitCallbackResult':
      if (data.code == 0 && data.msg == 'query success!') {
        $.message = `完成任务：浏览成功`
      } else {
        $.message = `任务失败：原因${JSON.stringify(data)}`
      }
      break;
    default:
      console.log(`未判断的异常${type} `);
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
    }
  }
}