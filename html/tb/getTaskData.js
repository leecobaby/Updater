// const app = `1111`
// const data = ``
// const loopTime = ``
const $ = {}
const items = []
// 共用与云端已送的 fromToken
let fromToken = ''
if (data.ret && data.ret[0] == "SUCCESS::调用成功" && data.data && data.data.model) {
  for (const item of data.data.model) {
    if (item.progress.needTimes !== '0') {
      let times = Number(item.progress.needTimes)
      for (let i = 0; i < times; i++) {
        let deliveryId = item.taskParams.deliveryId
        if (deliveryId == '18734' || deliveryId == '18735') continue;
        let title = item.assets.title
        let implId = item.taskParams.implId.match(/(.*)_/g) + i
        fromToken = item.taskParams.fromToken
        items.push(`${deliveryId}-${title} fromToken=${fromToken}&deliveryId=${deliveryId}&implId=${implId}`)
        '1 '
      }
    }
  }
} else {
  $.error = `出错了请检查 Cookie 是否正确且未过期，也可以运行普通模式 ${JSON.stringify(data)}`
}
console.log(items);
let task = taskBaseData()[app]
const firstTask = [
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

task.task[0].main.item = items
loopTime == '1' && (task.task = task.task.concat(firstTask))
$.task = task
document.write(JSON.stringify($))

function taskBaseData () {
  return {
    "1111": {
      "version": "数据最后更新于:11.9.1",
      "pv": {
        "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.f6MJdVL",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.f6MJdVL",
        "taobaolite": "taobaolite://m.tb.cn/h.f6MJdVL"
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
      "version": "数据最后更新于:11.24.1",
      "image": "https://gitee.com/leecogit/Updater/raw/master/image/tjb.png",
      "pv": {
        "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.f63aAiO",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.f63aAiO",
        "taobaolite": "taobaolite://m.tb.cn/h.f63aAiO"
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
            "title": "攒能量",
            "type": "energy",
            "urlScheme": "HTTPS://lancome.m.tmall.com/?shop_id=115862174&shopSourceChannel=tao_ji_mu%3A4117002&adScene=202012-ad-card-wall-1&fromToken=r2rz1GgTooK0qw0XurNhR1KTgUBUPUr&spm=a217e.xzrwy.1.1&sceneId=1946&sourceType=other&hd_from_id=100089&deliveryId=",
            "textEnd": "str1&implId=str2"
          }
        }
      ]
    },
  }
}