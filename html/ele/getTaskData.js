// const app = `FarmSingle`
// const tk = `tk`
// data 形式为 [{},{},...]
// const data = ``
let asac
const $ = {}, items = [], simpleItems = []
$.Utils = Utils()
// 格式化数据
let dataArr = $.Utils.formatToArray(data.arr || data)
let task = getBaseTaskData()
const onceTask = getOnceTaskData(app)
console.log(onceTask);
const couponTask = [
  {
    "main": {
      "title": "领券",
      "type": "other",
      "activateUrl": "https://tb.ele.me/wow/alsc/mod/d5275789de46503ba0908a9d?e=1&open_type=miniapp&inviterId=74f86c&actId=1&_ltracker_f=hjb_app_grzx&chInfo=ch_app_chsub_Photo5",
      "taskUrl": "https://s.click.ele.me/t?union_lens=lensId%3AOPT%401657087648%40210577ba_096a_181d21ee457_04fb%4001%3BeventPageId%3A20150318020002597&&e=-s021uyd907PwzH0fP4X7J0VVdm8XOjt7X8Tg0YkqOtNojQnIq4wH1EUFwnvni7FlblFaXL7LxGyvT7ivaZVsdM4FuO4pbSj05WiFojqUmJcHK3I6n0J27rvJVJngVOpA5lYxToeYtasa6k4taGKCfMrDwSg6gCtwhUGiILSmaEdYWzYaHRsZ7BYMSkbLZ4XNHreA1NpPFHRZrvbGioJDf3VzOC4fp6rAK2IGld8XKsOMmpvYBRTdUYgfYT4SfNzSOTh6pckTvk9RchP4GaZWotaPpqOACzfzgvAY12elaoYsLhSpEh4yhv08mJXcrZ3r3eYrBWDFAi80yhSajaFbc5fs7tcQUVm0Z320yY0AOPXyCGKRoH7121dDulNRhv78GLg0byLgRUpxscopZZfxxLtT11goZwqrMHl4dEi0ViNKRYF9B8GhxfsRnWkP1mKnKhppKcwapP5kFg6Lm9&",
      "textEnd": "str1",
      "item": ["1 null PAGEVIEW null"]
    }
  }
]

taskHandle(dataArr[0])
// 添加签到任务
simpleItems.unshift({
  title: '每日签到',
  point: 'x',
  url: `https://service-daubfate-1251309300.gz.apigw.tencentcs.com/release/api?activityId=${app}&tk=${tk}&api=mtop.koubei.interactioncenter.sign.component.recordsignin&app=ele&data=${encodeURIComponent(JSON.stringify({ "bizScene": "svip_sign_scene", "latitude": "28.754654", "asac": "2A227051WYEVFLNT5WTFAM", "unionId": "o_PVDuCKkboOwNx_9xFOO2OM8f3c", "longitude": "118.639297" }))}`
})
// 追加云端任务
simpleItems.push(...getSimpleTaskPutData())
// 后面会对数组对象进行操作，则需要进行深拷贝
task[app].task[0].main.item = [...items]


task[app].task = [].concat(couponTask, task[app].task, onceTask)
$.task = task
$.simpleTask = [...simpleItems]
document.body.outerHTML = JSON.stringify($)

function taskHandle (data) {
  if (data.ret && data.ret[0] == "SUCCESS::调用成功" && data.data && data.data.data && data.data.data['224166'] && data.data.data['224166'].data) {
    const tasklist = data.data.data['224166'].data
    for (const item of tasklist) {
      const { missionDefId, missionCollectionId, missionType, pageSpm, receiveStatus, showTitle, costFoodiePea } = item
      asac = item.asac
      if (receiveStatus === 'TORECEIVE') {
        if (missionType === 'PAGEVIEW') {
          items.push(`${missionDefId} ${missionCollectionId} ${missionType} ${pageSpm}`)
        } else {
          simpleItems.push({
            title: showTitle,
            point: costFoodiePea,
            url: `https://service-daubfate-1251309300.gz.apigw.tencentcs.com/release/api?activityId=${app}&tk=${tk}&api=mtop.alibaba.svip.langrisser.act&app=ele&data=${encodeURIComponent(JSON.stringify({ "callSource": "biz_code_main", "latitude": "28.754654", "longitude": "118.639297", "resId": "223166", "extra": `{\"missionDefId\":${missionDefId},\"missionCollectionId\":${missionCollectionId},\"missionType\":\"SIMPLESIGNIN\",\"source\":\"mtop\"}` }))}`
          })
        }
      }
    }
  } else {
    $.error = `出错了请检查 Cookie 是否正确且未过期，也可以运行普通模式 ${JSON.stringify(data)}`
  }
}

function getBaseTaskData () {
  return {
    "ele_dou": {
      "version": "数据最后更新于:7.25.1",
      "pv": {
        "taobao": "taobao://huodong.m.taobao.com/act/snipcodeupdate.html?_ariver_appid=8251537&x_object_type=miniapp&x_miniapp_id=8251537",
        "alipay": "alipays://platformapi/startapp?appId=2021001110676437&page=pages/my/index",
        "eleme": "eleme://userCenter"
      },
      "main": {
        "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.taobao.com",
        "alipay": "alipays://platformapi/startapp?appId=20000001",
        "eleme": "eleme://userCenter"
      },
      "home": {
        "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https://h5.ele.me/svip/task-list",
        "alipay": "alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Fh5.ele.me%2Fsvip%2Ftask-list",
        "eleme": "eleme://web?url=https%3A%2F%2Fh5.ele.me%2Fsvip%2Ftask-list"
      },
      "end": {
        "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https://h5.ele.me/svip/task-list",
        "alipay": "alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Fh5.ele.me%2Fsvip%2Ftask-list",
        "eleme": "eleme://web?url=https%3A%2F%2Fh5.ele.me%2Fsvip%2Ftask-list"
      },
      "help": {
        "gitter": "https://gitter.im/api/v1/rooms/6170e0576da03739848855d7/chatMessages?lookups%5B%5D=user&includeThreads=false&limit=100",
        "code": "https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/random_mutual_1111.js",
        "link": "https://gitter.im/leecobaby-shortcuts/1111?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
        "lodash": "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
      },
      "code": {
        "getCookieData": "https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/tb/getCookieData-nian.js",
        "getTaskData": "https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/tb/getTaskData.js"
      },
      "app": {
        "淘宝": "taobao",
        "支付宝": "alipay",
        "饿了么": "eleme"
      },
      "task": [
        {
          "main": {
            "title": "逛逛任务",
            "type": "other",
            "activateUrl": "https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params%5B%5D=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:占位符1,%22missionCollectionId%22:占位符2,%22missionType%22:%22占位符3%22%7D%7D&bizCode=biz_code_main&longitude=121.35623168945312&latitude=41.17439270019531&o2o_page_id=xc539zecsy89e96dwzdebha2634lgqf6_1623400808977",
            "taskUrl": "https://tb.ele.me/wow/alsc/mod/156e0df0c951c793ab121f2e?missionid=占位符1&missioncollectid=占位符2&taskfrom=占位符4&bizscene=svip&taskpageviewasac=2A21119A45TTVAEXP40N7N&spm=a2ogi.chihuo_home_tasklist.tasklayer_scantask.3",
            "textEnd": "str1"
          }
        }
      ]
    },
  }
}

function getOnceTaskData (app) {
  const data = {
    "ele_dou": [
      {
        "eleme": {
          "title": "云端推送",
          "type": "other",
          "activateUrl": "https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params%5B%5D=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:占位符1,%22missionCollectionId%22:占位符2,%22missionType%22:%22占位符3%22%7D%7D&bizCode=biz_code_main&longitude=121.35623168945312&latitude=41.17439270019531&o2o_page_id=xc539zecsy89e96dwzdebha2634lgqf6_1623400808977",
          "taskUrl": "https://tb.ele.me/wow/alsc/mod/156e0df0c951c793ab121f2e?missionid=占位符1&missioncollectid=占位符2&taskfrom=占位符4&bizscene=svip&taskpageviewasac=2A21119A45TTVAEXP40N7N&spm=a2ogi.chihuo_home_tasklist.tasklayer_scantask.3",
          "textEnd": "str1",
          "item": [
            "6242001 36 PAGEVIEW a2ogi.15063444",
            "3780001 36 PAGEVIEW a2ogi.15063444",
            "3062001 95 PAGEVIEW page.spm",
            "4506001 95 PAGEVIEW page.spm",
            "6130001 95 PAGEVIEW a2ogi.15063444"
          ]
        }
      }
    ]
  }
  return data[app]
}

function getSimpleTaskPutData () {
  const items = [
    { 'missionDefId': 7064001, 'missionCollectionId': 36, 'costFoodiePea': 5 },
    { 'missionDefId': 4242001, 'missionCollectionId': 36, 'costFoodiePea': 5 },
    { 'missionDefId': 4098001, 'missionCollectionId': 36, 'costFoodiePea': 5 },
    { 'missionDefId': 6280001, 'missionCollectionId': 36, 'costFoodiePea': 5 },
    { 'missionDefId': 3030001, 'missionCollectionId': 36, 'costFoodiePea': 5 },
    { 'missionDefId': 1150001, 'missionCollectionId': 36, 'costFoodiePea': 5 },
    { 'missionDefId': 4182001, 'missionCollectionId': 36, 'costFoodiePea': 5 },
    { 'missionDefId': 4238001, 'missionCollectionId': 36, 'costFoodiePea': 5 },
    { 'missionDefId': 4648001, 'missionCollectionId': 36, 'costFoodiePea': 5 },
    { 'missionDefId': 5792002, 'missionCollectionId': 36, 'costFoodiePea': 5 },
    { 'missionDefId': 4624002, 'missionCollectionId': 36, 'costFoodiePea': 5 },
    { 'missionDefId': 5634001, 'missionCollectionId': 36, 'costFoodiePea': 5 },
  ]

  return items.map(item => {
    const { costFoodiePea, missionDefId, missionCollectionId } = item
    return {
      title: '云端推送 - 隐藏任务',
      point: costFoodiePea,
      url: `https://service-daubfate-1251309300.gz.apigw.tencentcs.com/release/api?activityId=${app}&tk=${tk}&api=mtop.alibaba.svip.langrisser.act&app=ele&data=${encodeURIComponent(JSON.stringify({ "callSource": "biz_code_main", "latitude": "28.754654", "longitude": "118.639297", "resId": "223166", "extra": `{\"missionDefId\":${missionDefId},\"missionCollectionId\":${missionCollectionId},\"missionType\":\"SIMPLESIGNIN\",\"source\":\"mtop\"}` }))}`
    }
  })

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
    }
  }
}