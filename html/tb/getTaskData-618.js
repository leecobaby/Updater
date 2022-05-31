// const app = `618cat`
// const data = ``
// const loopTime = ``
const $ = {}
const items = []
// 共用与云端已送的 fromToken
let fromToken = ''

let task = taskBaseData()
const firstTask = [
  {
    "cloud": {
      "title": "云端推送",
      "type": "cloud",
      "urlScheme": `HTTPS://lancome.m.tmall.com/?shop_id=115862174&shopSourceChannel=tao_ji_mu%3A4117002&adScene=202012-ad-card-wall-1&fromToken=${fromToken}&spm=a217e.xzrwy.1.1&sceneId=3399&sourceType=other&hd_from_id=100155&deliveryId=`,
      "textEnd": "str1&implId=str2",
      "item": [
        "29445 cloudsail_1_312890001830001_29445_0",
        "29445 cloudsail_1_312890001830002_29445_0",
        "29445 cloudsail_1_312890001830003_29445_0",
        "29445 cloudsail_1_312890001830004_29445_0",
        "29445 cloudsail_1_312890001830005_29445_0",
        "29445 cloudsail_1_312890001830006_29445_0",
        "29445 cloudsail_1_312890001830007_29445_0",
        "29445 cloudsail_1_312890001830008_29445_0",
        "29444 cloudsail_1_313704502970001_29444_0",
        "29444 cloudsail_1_313704502970002_29444_0",
        "29444 cloudsail_1_313704502970003_29444_0",
        "29444 cloudsail_1_313704502970004_29444_0",
        "29444 cloudsail_1_313704502970005_29444_0",
        "28572 cloudsail_14_316722004310001_28572_0",
        "28572 cloudsail_14_316722004310002_28572_0",
        "28572 cloudsail_14_316722004310003_28572_0",
        "28572 cloudsail_14_316722004310004_28572_0",
        "28572 cloudsail_14_316722004310005_28572_0",
        "28572 cloudsail_14_316722004310006_28572_0",
        "28572 cloudsail_14_316722004310007_28572_0",
        "28572 cloudsail_14_316722004310008_28572_0",
        "28572 cloudsail_14_316722004310009_28572_0",
        "28572 cloudsail_14_316722004310000_28572_0",
      ]
    }
  }
];

taskHandle(data)
// 后面会对数组对象进行操作，则需要进行深拷贝
task[app].task[0].main.item = [...items]
loopTime == '1' && (task[app].task = task[app].task.concat(firstTask))
$.task = task
document.write(JSON.stringify($))

function taskHandle (data) {
  if (data.ret && data.ret[0] == "SUCCESS::调用成功" && data.data && data.data.model) {
    for (const item of data.data.model) {
      if (item.progress.needTimes !== '0') {
        let times = Number(item.progress.needTimes)
        for (let i = 0; i < times; i++) {
          let deliveryId = item.taskParams.deliveryId
          if (deliveryId == '28646' || deliveryId == '28228' || deliveryId == '23176') continue;
          let title = item.assets && item.assets.title || 'null'
          let implId = item.taskParams.implId.match(/(.*)_/g) + i
          fromToken = item.taskParams.fromToken
          items.push(`${deliveryId}-${title} fromToken=${fromToken}&deliveryId=${deliveryId}&implId=${implId}`)
          if (app == 'Taojb') break;
        }
      }
    }
  } else {
    $.error = `出错了请检查 Cookie 是否正确且未过期，也可以运行普通模式 ${JSON.stringify(data)}`
  }
}

function taskBaseData () {
  return {
    "618cat": {
      "version": "数据最后更新于:5.29.1",
      "pv": {
        "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.ftJSz3R",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.ftJSz3R",
        "taobaolite": "taobaolite://m.tb.cn/h.ftJSz3R"
      },
      "main": {
        "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.taobao.com",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fwww.tmall.com%2F",
        "taobaolite": "taobaolite://m.ltao.com/open/index.html?action=ali.open.nav&h5Url=taobaolite%3A%2F%2Fm.ltao.com%2Fhomepage%3F"
      },
      "home": {
        "taobao": "taobao://pages.tmall.com/wow/z/hdwk/20220618/gamehome?disableNav=YES",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2F20220618%2Fgamehome%3FdisableNav%3DYES",
        "taobaolite": "taobaolite://pages.tmall.com/wow/z/hdwk/20220618/gamehome?disableNav=YES"
      },
      "end": {
        "taobao": "taobao://pages.tmall.com/wow/z/hdwk/20220618/gamehome?disableNav=YES",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2F20220618%2Fgamehome%3FdisableNav%3DYES",
        "taobaolite": "taobaolite://pages.tmall.com/wow/z/hdwk/20220618/gamehome?disableNav=YES"
      },
      "app": {
        "淘宝": "taobao",
        "天猫": "tmall",
        "淘宝特价版": "taobaolite"
      },
      "help": {
        "gitter": "https://gitter.im/api/v1/rooms/6170e0576da03739848855d7/chatMessages?lookups%5B%5D=user&includeThreads=false&limit=100",
        "code": "https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/random_mutual_618.js",
        "link": "https://gitter.im/leecobaby-shortcuts/1111?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
        "lodash": "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
      },
      "code": {
        "getCookieData": "https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/tb/getCookieData-618.js",
        "getTaskData": "https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/tb/getTaskData-618.js"
      },
      "task": [
        {
          "main": {
            "title": "领喵币",
            "type": "stars",
            "urlScheme": "HTTPS://lancome.m.tmall.com/?shop_id=115862174&shopSourceChannel=tao_ji_mu%3A4117002&adScene=202012-ad-card-wall-1&spm=a217e.1212.tasklist.0&prismFrom=null&sceneId=3399&sourceType=other&hd_from_id=100155&",
            "textEnd": "str1&implId=str2"
          }
        }
      ]
    },
  }
}