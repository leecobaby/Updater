// const data = ``
// const loopTime = ``
const $ = {}
const items = []
// 共用与云端已送的 fromToken
let fromToken = ''
if (data.ret && data.ret[0] == "SUCCESS::调用成功" && data.data?.model) {
  for (const item of data.data?.model) {
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
let task = {
  "1111": {
    "version": "数据最后更新于:10.31.1",
    "pv": {
      "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.f5wXuj4",
      "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.f5wXuj4",
      "taobaolite": "taobaolite://m.tb.cn/h.f5wXuj4"
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
}
const firstTask = [
  {
    "stars": {
      "title": "云端推送",
      "type": "stars",
      "urlScheme": `HTTPS://pages.tmall.com/wow/z/hdwk/20211111/pk20211111?disableNav=YES&shop_router_ignore=true&fromToken=${fromToken}&sceneId=2368&hd_from_id=100136&deliveryId=`,
      "textEnd": "str1&implId=str2",
      "item": [
        "20904 cloudsail_1_171340004590001_20904_0",
        "20904 cloudsail_1_171340004590001_20904_1",
        "20904 cloudsail_1_171340004590001_20904_2"
      ]
    }
  },
  {
    "stars": {
      "title": "去往支付宝任务",
      "type": "stars",
      "urlScheme": "alipays://platformapi/startapp?appId=68687635&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F18orxwq9ap1c&ttb=always&titlePenetrate=YES&abv=NO&chInfo=TAOBAO_TASK",
      "textEnd": "",
      "item": ["1 1"]
    }
  },
  {
    "stars": {
      "title": "去往淘宝任务",
      "type": "stars",
      "urlScheme": "taobao://pages.tmall.com/wow/z/hdwk/20211111/pk20211111?disableNav=YES&qd_from=zfbbanner&bc_fl_src=zfb_banner&qd_dice=aliPayTaskBanner&async=false&idfa=00000000-0000-0000-0000-000000000000&surge_ssr=true&afcflow=unkown",
      "textEnd": "",
      "item": ["1 1"]
    }
  },
  {
    "stars": {
      "title": "惊喜宝箱 - 会去往支付宝",
      "type": "stars",
      "urlScheme": "",
      "textEnd": "str2",
      "item": [
        "1 alipays://platformapi/startapp?appId=68687791&url=%2Fwww%2Findex.html%3Fsource%3Dtb2021d11e",
        "1 taobao://pages.tmall.com/wow/z/hdwk/20211111/pk20211111?disableNav=YES&qd_from=zfbsurprise&bc_fl_src=zfb_surprise&async=false&idfa=00000000-0000-0000-0000-000000000000&surge_ssr=true&afcflow=unkown"
      ]
    }
  },
  {
    "stars": {
      "title": "超级糖果任务",
      "type": "stars",
      "urlScheme": `HTTPS://pages.tmall.com/wow/z/hdwk/20211111/pk20211111?disableNav=YES&shop_router_ignore=true&fromToken=${fromToken}&sceneId=2380&hd_from_id=100136&deliveryId=`,
      "textEnd": "str1&implId=str2",
      "item": ["18874 other_37_1_18874_0"]
    }
  }
]

task['1111'].task[0].main.item = items
loopTime == '1' && (task['1111'].task = task['1111'].task.concat(firstTask))
$.task = task
document.write(JSON.stringify($))