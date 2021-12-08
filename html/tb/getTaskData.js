// const app = `1111`
// const data = ``
// const data2 = `` // 只针对淘金币新旧任务能同时做时
// const data3 = `` // 只针对淘金币1212任务
// const loopTime = ``
const $ = {}
const items = []
// 共用与云端已送的 fromToken
let fromToken = ''

let task = taskBaseData()
const firstTask = [
  {
    "other": {
      "title": "做其他任务",
      "type": "other",
      "urlScheme": `HTTPS://lancome.m.tmall.com/?shop_id=115862174&shopSourceChannel=tao_ji_mu%3A4117002&adScene=202012-ad-card-wall-1&fromToken=${fromToken}&spm=a217e.xzrwy.1.1&sceneId=2239&sourceType=other&hd_from_id=100089&deliveryId=`,
      "textEnd": "str1&implId=str2",
      "item": [
        "17746 other_101_490008_17746_0",
        "17749 other_101_455007_17749_0"
      ]
    }
  },
  {
    "other": {
      "title": "双十二任务云推送",
      "type": "other",
      "urlScheme": `HTTPS://lancome.m.tmall.com/?shop_id=115862174&shopSourceChannel=tao_ji_mu%3A4117002&adScene=202012-ad-card-wall-1&fromToken=${fromToken}&spm=a217e.xzrwy.1.1&sceneId=2496&sourceType=other&hd_from_id=100143&deliveryId=`,
      "textEnd": "str1&implId=str2",
      "item": [
        "21566 other_15_609027_21566_0",
        "21722 other_9_628010_21722_0"
      ]
    }
  },
  {
    "cloud": {
      "title": "云端推送",
      "type": "cloud",
      "urlScheme": "HTTPS://lancome.m.tmall.com/?shop_id=115862174&shopSourceChannel=tao_ji_mu%3A4117002&adScene=202012-ad-card-wall-1&fromToken=r2rz1GgTooK0qw0XurNhR1KTgUBUPUr&spm=a217e.xzrwy.1.1&sceneId=1946&sourceType=other&hd_from_id=100089&deliveryId=",
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

taskHandle(data)
// 后面会对数组对象进行操作，则需要进行深拷贝
task[app].task[0].main.item = [...items]
if (data2) {
  // 清空 items
  items.length = 0
  taskHandle(data2)
  task[app].task[1].main.item = [...items]
}
if (data3) {
  // 清空 items
  items.length = 0
  taskHandle(data3)
  task[app].task[2].main.item = [...items]
}
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
          if (deliveryId == '15901' || deliveryId == '18735') continue;
          let title = item.assets.title
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
    "1111": {
      "version": "数据最后更新于:11.9.1",
      "pv": {
        "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.fSXs7nL",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.fSXs7nL",
        "taobaolite": "taobaolite://m.tb.cn/h.fSXs7nL"
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
      "version": "数据最后更新于:12.2.1",
      "image": "https://gitee.com/leecogit/Updater/raw/master/image/tjb.png",
      "pv": {
        "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.fSXs7nL",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.fSXs7nL",
        "taobaolite": "taobaolite://m.tb.cn/h.fSXs7nL"
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
      "task": [
        {
          "main": {
            "title": "每日任务(旧)",
            "type": "energy",
            "urlScheme": "HTTPS://lancome.m.tmall.com/?shop_id=115862174&shopSourceChannel=tao_ji_mu%3A4117002&adScene=202012-ad-card-wall-1&spm=a217e.xzrwy.1.1&sceneId=1946&sourceType=other&hd_from_id=100089&",
            "textEnd": "str2"
          }
        },
        {
          "main": {
            "title": "每日任务(新)",
            "type": "energy",
            "urlScheme": "HTTPS://lancome.m.tmall.com/?shop_id=115862174&shopSourceChannel=tao_ji_mu%3A4117002&adScene=202012-ad-card-wall-1&spm=a217e.xzrwy.1.1&sceneId=2141&sourceType=other&hd_from_id=100089&",
            "textEnd": "str2"
          }
        },
        {
          "main": {
            "title": "双十二任务",
            "type": "energy",
            "urlScheme": "HTTPS://lancome.m.tmall.com/?shop_id=115862174&shopSourceChannel=tao_ji_mu%3A4117002&adScene=202012-ad-card-wall-1&spm=a217e.xzrwy.1.1&sceneId=2496&sourceType=other&hd_from_id=100143&",
            "textEnd": "str2"
          }
        }
      ]
    },
  }
}