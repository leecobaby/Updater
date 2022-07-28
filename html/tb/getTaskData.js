// const app = `FarmSingle`
// data 形式为 [{},{},...]
// const data = ``
// const loopTime = ``
const $ = {}
$.Utils = Utils()
const items = []
// 共用与云端已送的 fromToken
let fromToken = ''
// 排除的任务 id
let excludeIds = ['15901', '18735', '23176', '21317']
// 格式化数据
let dataArr = $.Utils.formatToArray(data.arr || data)
let task = getBaseTaskData()
const onceTask = getOnceTaskData(app)

for (let i = 0; i < dataArr.length; i++) {
  items.length = 0
  const data = dataArr[i];
  taskHandle(data, excludeIds)
  const { title, sceneId, hd_from_id } = getTaskParams(app, i)
  let tokenTask = getTokenTaskData(app, title, sceneId, hd_from_id)
  // 后面会对数组对象进行操作，则需要进行深拷贝
  tokenTask.main.item = [...items]
  task[app].task[i] = { ...tokenTask }
}

$.task = task
loopTime == '1' && (task[app].task = task[app].task.concat(onceTask))
document.body.outerHTML = JSON.stringify($)




function taskHandle (data, excludeIds) {
  if (data.ret && data.ret[0] == "SUCCESS::调用成功" && data.data && data.data.model) {
    for (const item of data.data.model) {
      if (item.progress.needTimes !== '0') {
        let times = Number(item.progress.needTimes)
        for (let i = 0; i < times; i++) {
          let deliveryId = item.taskParams.deliveryId
          if (excludeIds.includes(deliveryId)) continue;
          let title = item.assets && item.assets.title || 'null'
          let implId = item.taskParams.implId.match(/(.*)_/g) + i
          fromToken = item.taskParams.fromToken
          items.push(`${deliveryId}-${title} fromToken=${fromToken}&deliveryId=${deliveryId}&implId=${implId}`)
          // 淘金币无法直接做同id的第二个任务
          if (app == 'Taojb') break;
        }
      }
    }
  } else {
    $.error = `出错了请检查 Cookie 是否正确且未过期，也可以运行普通模式 ${JSON.stringify(data)}`
  }
}

function getBaseTaskData () {
  return {
    "1111": {
      "version": "数据最后更新于:11.9.1",
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
        "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2F20211111%2Fpk20211111%3FdisableNav%3DYES",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2F20211111%2Fpk20211111%3FdisableNav%3DYES",
        "taobaolite": "taobaolite://pages.tmall.com/wow/z/hdwk/20211111/pk20211111?disableNav=YES"
      },
      "end": {
        "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2F20211111%2Fpk20211111%3FdisableNav%3DYES",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2F20211111%2Fpk20211111%3FdisableNav%3DYES",
        "taobaolite": "taobaolite://pages.tmall.com/wow/z/hdwk/20211111/pk20211111?disableNav=YES"
      },
      "app": {
        "淘宝": "taobao",
        "天猫": "tmall",
        "淘宝特价版": "taobaolite"
      },
      "help": {
        "gitter": "https://gitter.im/api/v1/rooms/6170e0576da03739848855d7/chatMessages?lookups%5B%5D=user&includeThreads=false&limit=100",
        "code": "https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/random_mutual_1111.js",
        "link": "https://gitter.im/leecobaby-shortcuts/1111?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
        "lodash": "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
      },
      "code": {
        "getCookieData": "https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/tb/getCookieData.js"
      },
      "task": [
        {
          "main": {
            "title": "做主任务 - 部分任务异常不用理会",
            "type": "main",
            "urlScheme": "HTTPS://pages.tmall.com/wow/z/hdwk/20211111/pk20211111?disableNav=YES&shop_router_ignore=true&sceneId=2368&hd_from_id=100136&",
            "textEnd": "str2"
          }
        },
      ],
    },
    "Taojb": {
      "version": "数据最后更新于:12.31.1",
      "image": "https://gitee.com/leecogit/Updater/raw/master/image/tjb.png",
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
        "taobao": "taobao://pages.tmall.com/wow/z/tmtjb/town/home?disableNav=YES",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Ftmtjb%2Ftown%2Fhome%3FdisableNav%3DYES",
        "taobaolite": "taobaolite://pages.tmall.com/wow/z/tmtjb/town/home?disableNav=YES"
      },
      "end": {
        "taobao": "taobao://pages.tmall.com/wow/z/tmtjb/town/task?wh_biz=tm&disableNav=YES",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Ftmtjb%2Ftown%2Ftask%3Fwh_biz%3Dtm%26disableNav%3DYES",
        "taobaolite": "taobaolite://pages.tmall.com/wow/z/tmtjb/town/task?wh_biz=tm&disableNav=YES"
      },
      "app": {
        "淘宝": "taobao",
        "天猫": "tmall",
        "淘宝特价版": "taobaolite"
      },
      "task": []
    },
    "FarmSingle": {
      "version": "数据最后更新于:1.19.1",
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
        "taobao": "taobao://pages.tmall.com/wow/hdwk/act/2020nhj-single?wh_biz=tm&disableNav=YES",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fhdwk%2Fact%2F2020nhj-single%3Fwh_biz%3Dtm%26disableNav%3DYES",
        "taobaolite": "taobaolite://pages.tmall.com/wow/hdwk/act/2020nhj-single?wh_biz=tm&disableNav=YES"
      },
      "end": {
        "taobao": "taobao://pages.tmall.com/wow/hdwk/act/2020nhj-single?wh_biz=tm&disableNav=YES",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fhdwk%2Fact%2F2020nhj-single%3Fwh_biz%3Dtm%26disableNav%3DYES",
        "taobaolite": "taobaolite://pages.tmall.com/wow/hdwk/act/2020nhj-single?wh_biz=tm&disableNav=YES"
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
        "天猫": "tmall",
        "淘宝特价版": "taobaolite"
      },
      "task": []
    },
  }
}

function getOnceTaskData (app) {
  const data = {
    "FarmSingle": [
      {
        "tmall": {
          "title": "云端推送",
          "type": "other",
          "urlScheme": `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.1212.tasklist.0&sceneId=971&sourceType=other&hd_from_id=100085&deliveryId=`,
          "textEnd": "str1&implId=str2",
          "item": [
            "12359 other_568_911025_12359_0",
            "8479 other_568_82028_8479_0",
            "16847 other_354_424002_16847_1",
            "12585 expo_576_123083_12585_0",
            "18822 cloudsail_576_125400501040001_18822_0",
            "17734 cloudsail_316_348075504690001_17734_0",
            "10946 other_563_703018_10946_0"
          ]
        }
      },
      {
        "tmall": {
          "title": "微博集肥料",
          "type": "other",
          "urlScheme": `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.1212.tasklist.0&sceneId=978&sourceType=other&hd_from_id=100085&deliveryId=`,
          "textEnd": "str1&implId=str2",
          "item": [
            "9046 other_0_0_9046_0",
            "8015 other_213_0_8015_0",
            "8016 other_0_105008_8016_0",
            "8950 other_0_98013_8950_0",
            "8950 other_0_98013_8950_1",
            "8950 other_0_98013_8950_2",
            "10386 other_0_100016_10386_0",
            "10385 other_0_100015_10385_0",
            "8855 other_0_68018_8855_0"
          ]
        }
      },
      {
        "tmall": {
          "title": "逛逛支付宝芭芭农场",
          "type": "other",
          "urlScheme": `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.1212.tasklist.0&sceneId=2349&sourceType=other&hd_from_id=100004&deliveryId=`,
          "textEnd": "str1&implId=str2",
          "item": ["20700 other_468_662005_20700_0"]
        }
      }
    ],
    "Taojb": [
      {
        "other": {
          "title": "做其他任务",
          "type": "other",
          "urlScheme": `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.xzrwy.1.1&sceneId=2239&sourceType=other&hd_from_id=100089&deliveryId=`,
          "textEnd": "str1&implId=str2",
          "item": [
            "17746 other_101_490008_17746_0",
            "17749 other_101_455007_17749_0"
          ]
        }
      },
      {
        "cloud": {
          "title": "云端推送",
          "type": "cloud",
          "urlScheme": `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.xzrwy.1.1&sceneId=1946&sourceType=other&hd_from_id=100089&deliveryId=`,
          "textEnd": "str1&implId=str2",
          "item": [
            "21275 cloudsail_20_3452898728_21275_0",
            "17542 cloudsail_120_125400501040001_17542_0",
            "14556 tpp_195_339581503446_14556_0"
          ]
        }
      },
      {
        "shop": {
          "title": "逛店铺",
          "type": "shop",
          "urlScheme": "HTTPS://pages.tmall.com/wow/z/tmtjb/tjbshop/coin_shops_task?wh_biz=tm&disableNav=YES&shopId=316875470&wh_dataservice=false&topIds=627271339615,606672835326,625829607411&spm=a217e.17632374&sourceId=",
          "textEnd": "str1",
          "item": [
            "2027551265 0",
            "3173651031 0",
            "767303689 0",
            "439649406 0",
            "3081047815 0",
            "1803764140 0",
            "3055672510 0",
            "304639978 0"
          ]
        }
      }
    ]
  }
  return data[app]
}

function getTokenTaskData (app, title, sceneId, hd_from_id) {
  const data = {
    "FarmSingle": {
      "main": {
        "title": title,
        "type": "other",
        "urlScheme": `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&spm=a217e.xzrwy.1.1&sceneId=${sceneId}&sourceType=other&hd_from_id=${hd_from_id}&`,
        "textEnd": "str2"
      }
    },
    "Taojb": {
      "main": {
        "title": title,
        "type": "other",
        "urlScheme": `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&spm=a217e.xzrwy.1.1&sceneId=${sceneId}&sourceType=other&hd_from_id=${hd_from_id}&`,
        "textEnd": "str2"
      }
    }
  }
  return data[app]
}

function getTaskParams (app, index) {
  const data = {
    "FarmSingle": [
      { title: '淘宝集肥料', sceneId: 971, hd_from_id: 100085 },
      { title: '支付宝任务', sceneId: 972, hd_from_id: 100085 },
      { title: '闲鱼任务', sceneId: 2488, hd_from_id: 100085 }
    ],
    "Taojb": [
      { title: '每日任务(旧)', sceneId: 1946, hd_from_id: 100089 },
      { title: '每日任务(新)', sceneId: 2141, hd_from_id: 100089 }
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
    getParam (url, key) {
      const reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i")
      const r = url.match(reg)
      if (r != null) return decodeURIComponent(r[2]);
      return null;
    }
  }
}