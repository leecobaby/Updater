// const app = `FarmSingle`
// const data = ``
// const loopTime = ``
const $ = {}
const items = []
// 共用与云端已送的 fromToken
let fromToken = ''

let task = taskBaseData()
const firstTask = [
  {
    "tmall": {
      "title": "年货节集福气 - 云端推送",
      "type": "other",
      "urlScheme": `HTTPS://lancome.m.tmall.com/?shop_id=115862174&shopSourceChannel=tao_ji_mu%3A4117002&adScene=202012-ad-card-wall-1&fromToken=${fromToken}&spm=a217e.1212.tasklist.0&sceneId=2672&sourceType=other&hd_from_id=100145&deliveryId=`,
      "textEnd": "str1&implId=str2",
      "item": [
        "23289 cloudsail_8_222443004330001_23289_0",
        "23642 cloudsail_1_214893503000001_23642_0",
        "23695 cloudsail_0_219981001860001_23695_0",
        "23639 cloudsail_1_216112503620001_23639_0",
        "23639 cloudsail_1_216112503620001_23639_1"
      ]
    }
  },
  {
    "tmall": {
      "title": "淘宝集肥料",
      "type": "other",
      "urlScheme": "HTTPS://lancome.m.tmall.com/?shop_id=115862174&shopSourceChannel=tao_ji_mu%3A4117002&adScene=202012-ad-card-wall-1&fromToken=r2rz1GgTooK0qw0XurNhR1KTgUBUPUr&spm=a217e.1212.tasklist.0&sceneId=971&sourceType=other&hd_from_id=100085&deliveryId=",
      "textEnd": "str1&implId=str2",
      "item": [
        "8349 other_375_0_8349_0",
        "22356 other_377_652011_22356_0",
        "21634 other_279_1_21634_0",
        "21634 other_279_1_21634_1",
        "7936 cloudsail_390_125400501040001_7936_0",
        "12359 other_360_642008_12359_0",
        "18823 cloudsail_373_201921503940001_18823_0",
        "18822 cloudsail_373_125400501040001_18822_0",
        "12080 other_360_633010_12080_0",
        "17065 other_76_1_17065_0",
        "18744 other_0_163002_18744_0",
        "7932 linked_274_0_7932_0",
        "12080 expo_261_122021_12080_0",
        "8479 other_261_68006_8479_0",
        "8351 other_259_0_8351_0",
        "16847 other_47_424002_16847_0",
        "11984 other_163_79046_11984_0",
        "11984 other_163_79046_11984_1",
        "12768 other_9_173001_12768_0",
        "12585 expo_283_123083_12585_0",
        "18501 other_270_62010_18501_0",
        "16868 other_270_440001_16868_0",
        "12322 expo_283_326009_12322_0",
        "12322 expo_283_326009_12322_1",
        "12322 expo_283_326009_12322_2",
        "15891 other_270_398011_15891_0",
        "18125 cloudsail_283_142772500400001_18125_35",
        "8273 other_270_62009_8273_0",
        "8273 other_270_62009_8273_1",
        "11705 cloudsail_284_147490003950001_11705_0",
        "16847 other_58_424002_16847_0",
        "17304 other_40_476003_17304_0",
        "18822 cloudsail_333_3168730831_18822_0",
        "17734 cloudsail_73_177558002010001_17734_35"
      ]
    }
  },
  {
    "tmall": {
      "title": "微博集肥料",
      "type": "other",
      "urlScheme": "HTTPS://lancome.m.tmall.com/?shop_id=115862174&shopSourceChannel=tao_ji_mu%3A4117002&adScene=202012-ad-card-wall-1&fromToken=r2rz1GgTooK0qw0XurNhR1KTgUBUPUr&spm=a217e.1212.tasklist.0&sceneId=978&sourceType=other&hd_from_id=100085&deliveryId=",
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
      "title": "直播间任务",
      "type": "other",
      "urlScheme": "HTTPS://lancome.m.tmall.com/?shop_id=115862174&shopSourceChannel=tao_ji_mu%3A4117002&adScene=202012-ad-card-wall-1&fromToken=r2rz1GgTooK0qw0XurNhR1KTgUBUPUr&spm=a217e.1212.tasklist.0&sceneId=406&sourceType=other&hd_from_id=100004&deliveryId=",
      "textEnd": "str1&implId=str2",
      "item": ["2482 other_365_0_2482_0"]
    }
  },
  {
    "tmall": {
      "title": "集阳光任务",
      "type": "other",
      "urlScheme": "HTTPS://pages.tmall.com/wow/tmallfarm/act/b-browser?wh_biz=tm&spm=farm.newfarm.task.browser&disableNav=YES",
      "textEnd": "",
      "item": ["1 0"]
    }
  }
]

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
          if (deliveryId == '15901' || deliveryId == '18735' || deliveryId == '23175') continue;
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
        "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.fQfRBJO",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.fQfRBJO",
        "taobaolite": "taobaolite://m.tb.cn/h.fQfRBJO"
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
        "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.fQfRBJO",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.fQfRBJO",
        "taobaolite": "taobaolite://m.tb.cn/h.fQfRBJO"
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
        }
      ]
    },
    "FarmSingle": {
      "version": "数据最后更新于:1.7.1",
      "pv": {
        "taobao": "taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.fQfRBJO",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.fQfRBJO",
        "taobaolite": "taobaolite://m.tb.cn/h.fQfRBJO"
      },
      "gd": {
        "taobao": "taobao://m.tb.cn/h.fQfRBJO",
        "tmall": "tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.fQfRBJO",
        "taobaolite": "taobaolite://m.tb.cn/h.fQfRBJO"
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
      "task": [
        {
          "main": {
            "title": "年货节集福气 - 部分任务可能需要令牌模式",
            "type": "other",
            "urlScheme": "HTTPS://lancome.m.tmall.com/?shop_id=115862174&shopSourceChannel=tao_ji_mu%3A4117002&adScene=202012-ad-card-wall-1&spm=a217e.xzrwy.1.1&sceneId=2672&sourceType=other&hd_from_id=100145&",
            "textEnd": "str1&implId=str2"
          }
        }
      ]
    },
  }
}