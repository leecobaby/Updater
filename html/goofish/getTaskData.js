// const app = `FarmSingle`
// data 形式为 [{},{},...]
// const data = ``
// const loopTime = ``
const $ = {}
$.Utils = Utils()
const items = []
// 共用与云端推送的 fromToken
let fromToken = ''
let token = 'X8FBZM0X7'
// 排除的任务 id
let excludeIds = ['15901']
// 格式化数据
let dataArr = $.Utils.formatToArray(data.arr || data)
let task = getBaseTaskData()
const onceTask = getOnceTaskData(app)

for (let i = 0; i < dataArr.length; i++) {
  items.length = 0
  const data = dataArr[i];
  taskHandle(data, excludeIds)
  // 第一组的任务数据无需进行传统拼接
  if (i != 0) {
    const { title, sceneId, hd_from_id } = getTaskParams(app, i)
    let tokenTask = getTokenTaskData(app, title, sceneId, hd_from_id)
    tokenTask.main.item = [...items]
    task[app].task[i] = { ...tokenTask }
  }
}

$.task = task
loopTime == '1' && (task[app].task = task[app].task.concat(onceTask))
document.body.outerHTML = JSON.stringify($)




function taskHandle (data, excludeIds) {
  if (data.ret && data.ret[0] == "SUCCESS::调用成功" && data.data && (data.data.model || data.data.taskList)) {
    const dataList = data.data.model || data.data.taskList
    for (const item of dataList) {
      if (item.progress && item.progress.needTimes !== '0') {
        let times = Number(item.progress.needTimes)
        for (let i = 0; i < times; i++) {
          let deliveryId = item.taskParams.deliveryId
          if (excludeIds.includes(deliveryId)) continue;
          let title = item.assets && item.assets.title || 'null'
          let implId = item.taskParams.implId.match(/(.*)_/g) + i
          fromToken = item.taskParams.fromToken
          items.push(`${deliveryId}-${title} fromToken=${fromToken}&deliveryId=${deliveryId}&implId=${implId}`)
        }
      }
      token = $.Utils.getQueryString(item.materialDTO.action, 'token') || token
      console.log(token);
    }
  } else {
    $.error = `出错了请检查 Cookie 是否正确且未过期，也可以运行普通模式 ${JSON.stringify(data)}`
  }
}

// 获取基础任务数据
function getBaseTaskData () {
  return {
    "goofish_sign": {
      "version": "数据最后更新于:10.1.1",
      "pv": {
        "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.fCvjYxu",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.fCvjYxu",
        "taobaolite": "taobaolite://m.tb.cn/h.fCvjYxu"
      },
      "main": {
        "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.taobao.com",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fwww.tmall.com%2F",
        "taobaolite": "taobaolite://m.ltao.com/open/index.html?action=ali.open.nav&h5Url=taobaolite%3A%2F%2Fm.ltao.com%2Fhomepage%3F"
      },
      "home": {
        "taobao": "fleamarket://fish_coin_game?flutter=true",
        "tmall": "fleamarket://fish_coin_game?flutter=true",
        "taobaolite": "fleamarket://fish_coin_game?flutter=true"
      },
      "end": {
        "taobao": "fleamarket://fish_coin_game?flutter=true",
        "tmall": "tfleamarket://fish_coin_game?flutter=true",
        "taobaolite": "fleamarket://fish_coin_game?flutter=true"
      },
      "help": {
        "gitter": "https://gitter.im/api/v1/rooms/6170e0576da03739848855d7/chatMessages?lookups%5B%5D=user&includeThreads=false&limit=100",
        "code": "https://gitee.com/leecobaby/Updater/raw/master/html/random_mutual_1111.js",
        "link": "https://gitter.im/leecobaby-shortcuts/1111?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
        "lodash": "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
      },
      "code": {
        "getCookieData": "https://gitee.com/leecobaby/Updater/raw/master/html/goofish/getCookieData.js",
        "getTaskData": "https://gitee.com/leecobaby/Updater/raw/master/html/goofish/getTaskData.js"
      },
      "app": {
        "淘宝": "taobao",
        "天猫": "tmall",
        "淘宝特价版": "taobaolite"
      },
      "task": []
    },
  }
}

// 获取云端推送的任务数据
function getOnceTaskData (app) {
  const data = {
    "goofish_sign": [
      {
        "tmall": {
          "title": "闲鱼任务",
          "type": "other",
          "urlScheme": `HTTPS://pages.tmall.com/wow/z/wt/rax/sheep-wake?disableNav=YES&subSource=xmzx&sceneId=496&token=${token}&deliveryId=`,
          "textEnd": "str1&implId=str2",
          "item": [
            "29839 other_357_1_29839_0",
            "29839 other_357_1_29839_1",
            "29839 other_357_1_29839_2",
            "29839 other_357_1_29839_3",
            "29839 other_357_1_29839_4",
            "29839 other_357_1_29839_5",
            "29839 other_357_1_29839_6",
            "29839 other_357_1_29839_7",
            "29839 other_357_1_29839_8",
            "29839 other_357_1_29839_9",
            "31566 other_410_1_31566_0",
            "24377 other_277_1_24377_0",
            "3141 other_785_1_3141_0",
            "3140 other_785_1_3140_0",
            "3137 other_785_1_3137_0",
            "11240 other_785_1_11240_0",
            "26194 other_340_1_26194_0",
            "26195 other_340_1_26195_0"
          ]
        }
      },
      // {
      //   "tmall": {
      //     "title": "其他任务",
      //     "type": "other",
      //     "urlScheme": `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.1212.tasklist.0&sceneId=496&sourceType=other&hd_from_id=100104&deliveryId=`,
      //     "textEnd": "str1&implId=str2",
      //     "item": [
      //       "20430 other_282_1_20430_0",
      //       "25044 other_156_776013_25044_0",
      //     ]
      //   }
      // }
    ]
  }
  return data[app]
}

// 获取单任务的链接数据
function getTokenTaskData (app, title, sceneId, hd_from_id) {
  const data = {
    "goofish_sign": {
      "main": {
        "title": title,
        "type": "other",
        "urlScheme": `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&spm=a217e.xzrwy.1.1&sceneId=${sceneId}&sourceType=other&hd_from_id=${hd_from_id}&`,
        "textEnd": "str2"
      }
    },
  }
  return data[app]
}

// 获取单任务相关参数
function getTaskParams (app, index) {
  const data = {
    "FarmSingle": [
      { title: '闲鱼个人任务', sceneId: 496, hd_from_id: 100104 }
    ]
  }
  return data[app][index]
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
    getQueryString (url, key) {
      const reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i")
      const r = url.match(reg)
      if (r != null) return decodeURIComponent(r[2]);
      return null;
    }
  }
}