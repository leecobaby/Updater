// const app = `FarmSingle`
// data 形式为 [{},{},...]
// const data = ``
// const loopTime = ``
const $ = {}
$.Utils = Utils()
const items = []
// 共用与云端推送的 fromToken
let fromToken = ''
// 排除的任务 id
// prettier-ignore
let excludeIds = ['15901', '18735', '23176', '21317', '17695', '32774', '36509', '47035', '46600','48270','46809','48921','46751','46805','46808','46813','45322','14975','29148','45322']
// 格式化数据
let dataArr = $.Utils.formatToArray(data.arr || data)
let task = getBaseTaskData()
const onceTask = getOnceTaskData(app)

for (let i = 0; i < dataArr.length; i++) {
  items.length = 0
  const data = dataArr[i]
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

function taskHandle(data, excludeIds) {
  if (data.ret && data.ret[0] == 'SUCCESS::调用成功' && data.data && data.data.model) {
    for (const item of data.data.model) {
      if (item.progress.needTimes !== '0') {
        let needTimes = +item.progress.needTimes && +item.progress.maxTimes
        let times = +item.progress.times || 0
        for (let i = times; i < needTimes; i++) {
          let deliveryId = item.taskParams.deliveryId
          if (excludeIds.includes(deliveryId)) continue
          let title = (item.assets && item.assets.title) || 'null'
          let implId = item.taskParams.implId.match(/(.*)_/g) + i
          fromToken = item.taskParams.fromToken
          items.push(
            `${deliveryId}-${title} fromToken=${fromToken}&deliveryId=${deliveryId}&implId=${implId}`
          )
          // 淘金币无法直接做同id的第二个任务
          if (app == 'Taojb') break
        }
      }
    }
  } else {
    $.error = `出错了请检查 Cookie 是否正确，如果提示 Session过期，请重新抓取 Cookie，并重新授权。也可以运行普通模式。 ${JSON.stringify(
      data
    )}`
  }
}

// 获取基础任务数据
function getBaseTaskData() {
  return {
    1111: {
      version: '数据最后更新于:10.24.1',
      pv: {
        taobao: 'taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.UCTxpwL',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.UCTxpwL',
        taobaolite: 'taobaolite://m.tb.cn/h.UCTxpwL'
      },
      main: {
        taobao: 'taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.taobao.com',
        tmall: 'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fwww.tmall.com%2F',
        taobaolite:
          'taobaolite://m.ltao.com/open/index.html?action=ali.open.nav&h5Url=taobaolite%3A%2F%2Fm.ltao.com%2Fhomepage%3F'
      },
      home: {
        taobao:
          'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2F2022d11%2Fsinglegame%3Fwh_biz%3Dtm%26sourceType%3Dother%26disableNav%3DYES',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2F2022d11%2Fsinglegame%3Fwh_biz%3Dtm%26sourceType%3Dother%26disableNav%3DYES',
        taobaolite:
          'taobaolite://pages.tmall.com/wow/z/hdwk/hd2023618/home?&sourceType=other&disableNav=YES'
      },
      end: {
        taobao:
          'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2F2022d11%2Fsinglegame%3Fwh_biz%3Dtm%26sourceType%3Dother%26disableNav%3DYES',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2F2022d11%2Fsinglegame%3Fwh_biz%3Dtm%26sourceType%3Dother%26disableNav%3DYES',
        taobaolite:
          'taobaolite://pages.tmall.com/wow/z/hdwk/2022d11/singlegame?wh_biz=tm&sourceType=other&disableNav=YES'
      },
      app: {
        淘宝: 'taobao',
        天猫: 'tmall',
        淘宝特价版: 'taobaolite'
      },
      help: {
        gitter:
          'https://gitter.im/api/v1/rooms/6170e0576da03739848855d7/chatMessages?lookups%5B%5D=user&includeThreads=false&limit=100',
        code: 'https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/random_mutual_1111.js',
        link: 'https://gitter.im/leecobaby-shortcuts/1111?utm_source=share-link&utm_medium=link&utm_campaign=share-link',
        lodash: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'
      },
      code: {
        getCookieData:
          'https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/tb/getCookieData.js'
      },
      task: []
    },
    '618cat': {
      version: '数据最后更新于:6.3.1',
      pv: {
        taobao: 'taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.UCTxpwL',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.UCTxpwL',
        taobaolite: 'taobaolite://m.tb.cn/h.UCTxpwL'
      },
      main: {
        taobao: 'taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.taobao.com',
        tmall: 'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fwww.tmall.com%2F',
        taobaolite:
          'taobaolite://m.ltao.com/open/index.html?action=ali.open.nav&h5Url=taobaolite%3A%2F%2Fm.ltao.com%2Fhomepage%3F'
      },
      home: {
        taobao:
          'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2Fhd2023618%2Fhome%3F%26sourceType%3Dother%26disableNav%3DYES',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2Fhd2023618%2Fhome%3F%26sourceType%3Dother%26disableNav%3DYES',
        taobaolite:
          'taobaolite://pages.tmall.com/wow/z/hdwk/hd2023618/home?&sourceType=other&disableNav=YES'
      },
      end: {
        taobao:
          'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2Fhd2023618%2Fhome%3F%26sourceType%3Dother%26disableNav%3DYES',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2Fhd2023618%2Fhome%3F%26sourceType%3Dother%26disableNav%3DYES',
        taobaolite:
          'taobaolite://pages.tmall.com/wow/z/hdwk/hd2023618/home?&sourceType=other&disableNav=YES'
      },
      app: {
        淘宝: 'taobao',
        天猫: 'tmall',
        淘宝特价版: 'taobaolite'
      },
      help: {
        gitter:
          'https://gitter.im/api/v1/rooms/6170e0576da03739848855d7/chatMessages?lookups%5B%5D=user&includeThreads=false&limit=100',
        code: 'https://gitee.com/leecobaby/Updater/raw/master/html/random_mutual_618.js',
        link: 'https://gitter.im/leecobaby-shortcuts/618cat?utm_source=share-link&utm_medium=link&utm_campaign=share-link',
        lodash: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'
      },
      code: {
        getCookieData: 'https://gitee.com/leecobaby/Updater/raw/master/dist/tb/getCookieData.js',
        getTaskData: 'https://gitee.com/leecobaby/Updater/raw/master/dist/tb/getTaskData.js',
        updateCookie: 'https://gitee.com/leecobaby/Updater/raw/master/dist/tb/updateCookie.js'
      },
      task: []
    },
    Taojb: {
      version: '数据最后更新于:12.31.1',
      image: 'https://gitee.com/leecogit/Updater/raw/master/image/tjb.png',
      pv: {
        taobao: 'taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.UCTxpwL',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.UCTxpwL',
        taobaolite: 'taobaolite://m.tb.cn/h.UCTxpwL'
      },
      main: {
        taobao: 'taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.taobao.com',
        tmall: 'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fwww.tmall.com%2F',
        taobaolite:
          'taobaolite://m.ltao.com/open/index.html?action=ali.open.nav&h5Url=taobaolite%3A%2F%2Fm.ltao.com%2Fhomepage%3F'
      },
      home: {
        taobao: 'taobao://pages.tmall.com/wow/z/tmtjb/town/home?disableNav=YES',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Ftmtjb%2Ftown%2Fhome%3FdisableNav%3DYES',
        taobaolite: 'taobaolite://pages.tmall.com/wow/z/tmtjb/town/home?disableNav=YES'
      },
      end: {
        taobao: 'taobao://pages.tmall.com/wow/z/tmtjb/town/task?wh_biz=tm&disableNav=YES',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Ftmtjb%2Ftown%2Ftask%3Fwh_biz%3Dtm%26disableNav%3DYES',
        taobaolite: 'taobaolite://pages.tmall.com/wow/z/tmtjb/town/task?wh_biz=tm&disableNav=YES'
      },
      app: {
        淘宝: 'taobao',
        天猫: 'tmall',
        淘宝特价版: 'taobaolite'
      },
      task: []
    },
    FarmSingle: {
      version: '数据最后更新于:10.13.1',
      pv: {
        taobao: 'taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.UCTxpwL',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.UCTxpwL',
        taobaolite: 'taobaolite://m.tb.cn/h.UCTxpwL'
      },
      main: {
        taobao: 'taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.taobao.com',
        tmall: 'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fwww.tmall.com%2F',
        taobaolite:
          'taobaolite://m.ltao.com/open/index.html?action=ali.open.nav&h5Url=taobaolite%3A%2F%2Fm.ltao.com%2Fhomepage%3F'
      },
      home: {
        taobao: 'taobao://pages.tmall.com/wow/hdwk/act/2020nhj-single?wh_biz=tm&disableNav=YES',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fhdwk%2Fact%2F2020nhj-single%3Fwh_biz%3Dtm%26disableNav%3DYES',
        taobaolite:
          'taobaolite://pages.tmall.com/wow/hdwk/act/2020nhj-single?wh_biz=tm&disableNav=YES'
      },
      end: {
        taobao: 'taobao://pages.tmall.com/wow/hdwk/act/2020nhj-single?wh_biz=tm&disableNav=YES',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fhdwk%2Fact%2F2020nhj-single%3Fwh_biz%3Dtm%26disableNav%3DYES',
        taobaolite:
          'taobaolite://pages.tmall.com/wow/hdwk/act/2020nhj-single?wh_biz=tm&disableNav=YES'
      },
      help: {
        gitter:
          'https://gitter.im/api/v1/rooms/6170e0576da03739848855d7/chatMessages?lookups%5B%5D=user&includeThreads=false&limit=100',
        code: 'https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/random_mutual_1111.js',
        link: 'https://gitter.im/leecobaby-shortcuts/1111?utm_source=share-link&utm_medium=link&utm_campaign=share-link',
        lodash: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'
      },
      code: {
        getCookieData:
          'https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/tb/getCookieData-nian.js',
        getTaskData:
          'https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/tb/getTaskData.js'
      },
      app: {
        淘宝: 'taobao',
        天猫: 'tmall',
        淘宝特价版: 'taobaolite'
      },
      task: []
    },
    Jhs: {
      version: '数据最后更新于:11.13.1',
      pv: {
        taobao: 'taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.UCTxpwL',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.UCTxpwL',
        taobaolite: 'taobaolite://m.tb.cn/h.UCTxpwL'
      },
      main: {
        taobao: 'taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.taobao.com',
        tmall: 'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fwww.tmall.com%2F',
        taobaolite:
          'taobaolite://m.ltao.com/open/index.html?action=ali.open.nav&h5Url=taobaolite%3A%2F%2Fm.ltao.com%2Fhomepage%3F'
      },
      home: {
        taobao:
          'taobao://pages.tmall.com/wow/a/act/ju/dailygroup/1583/wupr?wh_pid=daily-253613&status_bar_transparent=true&disableNav=YES&sourceType=other',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fa%2Fact%2Fju%2Fdailygroup%2F1583%2Fwupr%3Fwh_pid%3Ddaily-253613%26status_bar_transparent%3Dtrue%26disableNav%3DYES%26sourceType%3Dother',
        taobaolite:
          'taobaolite://pages.tmall.com/wow/a/act/ju/dailygroup/1583/wupr?wh_pid=daily-253613&status_bar_transparent=true&disableNav=YES&sourceType=other'
      },
      end: {
        taobao:
          'taobao://pages.tmall.com/wow/a/act/ju/dailygroup/1583/wupr?ut_sk=1.X7c7EQcMz0gDAGYKcRv9hLW2_21380790_1631361971008.Copy.common&wh_pid=daily-253613',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fa%2Fact%2Fju%2Fdailygroup%2F1583%2Fwupr%3Fut_sk%3D1.X7c7EQcMz0gDAGYKcRv9hLW2_21380790_1631361971008.Copy.common%26wh_pid%3Ddaily-253613',
        taobaolite:
          'taobaolite://pages.tmall.com/wow/a/act/ju/dailygroup/1583/wupr?ut_sk=1.X7c7EQcMz0gDAGYKcRv9hLW2_21380790_1631361971008.Copy.common&wh_pid=daily-253613'
      },
      app: {
        淘宝: 'taobao',
        天猫: 'tmall',
        淘宝特价版: 'taobaolite'
      },
      code: {
        getCookieData: 'https://gitee.com/leecobaby/Updater/raw/master/dist/tb/getCookieData.js',
        getTaskData: 'https://gitee.com/leecobaby/Updater/raw/master/dist/tb/getTaskData.js',
        updateCookie: 'https://gitee.com/leecobaby/Updater/raw/master/dist/tb/updateCookie.js'
      },
      task: []
    },
    tb_worldcup: {
      version: '数据最后更新于:10.24.1',
      pv: {
        taobao: 'taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.UCTxpwL',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.UCTxpwL',
        taobaolite: 'taobaolite://m.tb.cn/h.UCTxpwL'
      },
      main: {
        taobao: 'taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.taobao.com',
        tmall: 'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fwww.tmall.com%2F',
        taobaolite:
          'taobaolite://m.ltao.com/open/index.html?action=ali.open.nav&h5Url=taobaolite%3A%2F%2Fm.ltao.com%2Fhomepage%3F'
      },
      home: {
        taobao:
          'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2Fgame2020v2%2Fworldcupzw%3FdisableNav%3DYES%26sourceType%3Dother',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2Fgame2020v2%2Fworldcupzw%3FdisableNav%3DYES%26sourceType%3Dother',
        taobaolite:
          'taobaolite://pages.tmall.com/wow/z/hdwk/game2020v2/worldcupzw?disableNav=YES&sourceType=other'
      },
      end: {
        taobao:
          'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2Fgame2020v2%2Fworldcupzw%3FdisableNav%3DYES%26sourceType%3Dother',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2Fgame2020v2%2Fworldcupzw%3FdisableNav%3DYES%26sourceType%3Dother',
        taobaolite:
          'taobaolite://pages.tmall.com/wow/z/hdwk/game2020v2/worldcupzw?disableNav=YES&sourceType=other'
      },
      app: {
        淘宝: 'taobao',
        天猫: 'tmall',
        淘宝特价版: 'taobaolite'
      },
      help: {
        gitter:
          'https://gitter.im/api/v1/rooms/6170e0576da03739848855d7/chatMessages?lookups%5B%5D=user&includeThreads=false&limit=100',
        code: 'https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/random_mutual_1111.js',
        link: 'https://gitter.im/leecobaby-shortcuts/1111?utm_source=share-link&utm_medium=link&utm_campaign=share-link',
        lodash: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'
      },
      task: []
    }
  }
}

// 获取云端推送的任务数据
function getOnceTaskData(app) {
  const data = {
    FarmSingle: [
      {
        tmall: {
          title: '云端推送',
          type: 'other',
          urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.1212.tasklist.0&sceneId=5568&sourceType=other&hd_from_id=100085&deliveryId=`,
          textEnd: 'str1&implId=str2',
          item: [
            '45295 other_912_82028_45295_0',
            '45365 other_74_1_45365_0',
            '45365 other_74_1_45365_1',
            '45300 other_908_984002_45300_0',
            '46315 cloudsail_160_125400501040003_46315_0',
            '46315 cloudsail_160_125400501040003_46315_1',
            '46315 cloudsail_160_125400501040003_46315_2',
            '46315 cloudsail_160_125400501040003_46315_3',
            '46316 cloudsail_160_2979925364959636639_46316_0',
            '46316 cloudsail_160_2979925364959636639_46316_1',
            '46316 cloudsail_160_2979925364959636639_46316_2',
            '46316 cloudsail_160_2979925364959636639_46316_3',
            '46316 cloudsail_160_2979925364959636639_46316_4'
          ]
        }
      },
      {
        tmall: {
          title: '微博集肥料',
          type: 'other',
          urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.1212.tasklist.0&sceneId=978&sourceType=other&hd_from_id=100085&deliveryId=`,
          textEnd: 'str1&implId=str2',
          item: [
            '9046 other_0_0_9046_0',
            '8015 other_213_0_8015_0',
            '8016 other_0_105008_8016_0',
            '8950 other_0_98013_8950_0',
            '8950 other_0_98013_8950_1',
            '8950 other_0_98013_8950_2',
            '10386 other_0_100016_10386_0',
            '10385 other_0_100015_10385_0',
            '8855 other_0_68018_8855_0'
          ]
        }
      },
      {
        tmall: {
          title: '其他任务',
          type: 'other',
          urlScheme: `HTTPS://`,
          textEnd: 'str2',
          item: [
            `1 zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.1212.tasklist.0&sceneId=5387&sourceType=other&hd_from_id=100004&deliveryId=45308&implId=other_694_424002_45308_0'`
          ]
        }
      }
    ],
    Taojb: [
      {
        other: {
          title: '做其他任务',
          type: 'other',
          urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.xzrwy.1.1&sceneId=2239&sourceType=other&hd_from_id=100089&deliveryId=`,
          textEnd: 'str1&implId=str2',
          item: ['17746 other_101_490008_17746_0', '17749 other_101_455007_17749_0']
        }
      },
      {
        cloud: {
          title: '云端推送',
          type: 'cloud',
          urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.xzrwy.1.1&sceneId=1946&sourceType=other&hd_from_id=100089&deliveryId=`,
          textEnd: 'str1&implId=str2',
          item: [
            '21275 cloudsail_20_3452898728_21275_0',
            '17542 cloudsail_120_125400501040001_17542_0',
            '14556 tpp_195_339581503446_14556_0'
          ]
        }
      },
      {
        shop: {
          title: '逛店铺',
          type: 'shop',
          urlScheme:
            'HTTPS://pages.tmall.com/wow/z/tmtjb/tjbshop/coin_shops_task?wh_biz=tm&disableNav=YES&shopId=316875470&wh_dataservice=false&topIds=627271339615,606672835326,625829607411&spm=a217e.17632374&sourceId=',
          textEnd: 'str1',
          item: [
            '2027551265 0',
            '3173651031 0',
            '767303689 0',
            '439649406 0',
            '3081047815 0',
            '1803764140 0',
            '3055672510 0',
            '304639978 0'
          ]
        }
      }
    ],
    1111: [
      {
        tmall: {
          title: '云端推送',
          type: 'other',
          urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.1212.tasklist.0&sceneId=4276&sourceType=other&hd_from_id=100165&deliveryId=`,
          textEnd: 'str1&implId=str2',
          item: ['35483 cloudsail_23_465634000430001_35483_0']
        }
      },
      {
        tmall: {
          title: '做复活卡任务',
          type: 'other',
          urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.1212.tasklist.0&sceneId=4285&sourceType=other&hd_from_id=100165&deliveryId=`,
          textEnd: 'str1&implId=str2',
          item: [
            '34734 other_0_1_34734_0',
            '35041 other_0_1170004_35041_0',
            '36376 other_2_1176006_36376_0',
            '34753 other_30_1_34753_0',
            '36154 other_6_1176078_36154_0',
            '36377 other_2_0_36377_0'
          ]
        }
      },
      {
        tmall: {
          title: '逛店铺得惊喜',
          type: 'other',
          urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.1212.tasklist.0&sceneId=4296&sourceType=other&hd_from_id=100165&deliveryId=`,
          textEnd: 'str1&implId=str2',
          item: ['35484 icpmAd_0_382159996946_35484_0', '35561 icpmAd_0_1730_35561_0']
        }
      },
      {
        tmall: {
          title: '去支付宝任务',
          type: 'other',
          urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.1212.tasklist.0&sceneId=4289&sourceType=other&hd_from_id=100165&deliveryId=`,
          textEnd: 'str1&implId=str2',
          item: ['34970 other_24_1093043_34970_0']
        }
      },
      {
        tmall: {
          title: '开箱任务',
          type: 'other',
          urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.1212.tasklist.0&sceneId=4299&sourceType=other&hd_from_id=100165&deliveryId=`,
          textEnd: 'str1&implId=str2',
          item: ['34969 cloudsail_25_467344501160001_34969_0']
        }
      },
      {
        tmall: {
          title: '支付宝内任务',
          type: 'other',
          urlScheme: `HTTPS://`,
          textEnd: 'str2',
          item: [
            '1 pages.tmall.com/wow/z/hdwk/2022d11/singlegame?disableNav=YES&qd_from=zfbbanner&bc_fl_src=zfb_banner&slk_gid=gid_er_er%7Cgid_er_evoke_ui_0%7Cgid_er_af_pop%7Cgid_er_sidebar_1&',
            '1 pages.tmall.com/wow/z/hdwk/2022d11/singlegame?disableNav=YES&qd_from=zfbsurprise&bc_fl_src=zfb_surprise&slk_gid=gid_er_er%7Cgid_er_evoke_ui_0%7Cgid_er_af_pop%7Cgid_er_sidebar_1&'
          ]
        }
      }
    ],
    '618cat': [
      {
        tmall: {
          title: '云端推送',
          type: 'other',
          urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.1212.tasklist.0&sceneId=5562&sourceType=other&hd_from_id=100178&deliveryId=`,
          textEnd: 'str1&implId=str2',
          item: [
            '49039 cloudsail_161_1173926758795885405_49039_0',
            '49039 cloudsail_161_1173926758795885405_49039_1',
            '49039 cloudsail_161_1173926758795885405_49039_2',
            '49039 cloudsail_161_1173926758795885405_49039_3'
          ]
        }
      },
      {
        tmall: {
          title: '支付宝任务 - 没有请不要选择',
          type: 'other',
          urlScheme: ``,
          textEnd: 'str2',
          item: [
            '1 alipays://platformapi/startapp?appId=60000002&source=2023618GYG&chInfo=2023618GYG&autoShowTask=1&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fyuyan%2F180020010001247580%2Fhome.html%3FcaprMode%3Dsync',
            '1 alipays://platformapi/startapp?appId=66666674&source=618jrzy2023&appClearTop=false&startMultApp=YES',
            '1 alipays://platformapi/startapp?appId=60000002&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fyuyan%2F180020010001247580%2Fexchange.html%3FcaprMode%3Dsync%26source%3D2023618DHRW%26chInfo%3D2023618DHRW%26projectId%3D7500082&',
            '1 alipays://platformapi/startapp?appId=68687805&sceneCode=KF_HZHD&chInfo=ch_taobao&pikshemo=YES&subSceneCode=taobao_membertask_20230618&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fyuyan%2F180020380000000023%2Fpoint-sign-in.html%26sceneCode%3DKF_HZHD%26chInfo%3Dch_taobao20230618%26pikshemo%3DYES%26subSceneCode%3Dtaobao_membertask_20230618&'
          ]
        }
      }
    ],
    Jhs: [],
    tb_worldcup: []
  }
  return data[app]
}

// 获取个人任务数据
function getTokenTaskData(app, title, sceneId, hd_from_id) {
  const data = {
    FarmSingle: {
      main: {
        title: title,
        type: 'other',
        urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&spm=a217e.xzrwy.1.1&sceneId=${sceneId}&sourceType=other&hd_from_id=${hd_from_id}&`,
        textEnd: 'str2'
      }
    },
    Taojb: {
      main: {
        title: title,
        type: 'other',
        urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&spm=a217e.xzrwy.1.1&sceneId=${sceneId}&sourceType=other&hd_from_id=${hd_from_id}&`,
        textEnd: 'str2'
      }
    },
    1111: {
      main: {
        title: title,
        type: 'other',
        urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&spm=a217e.xzrwy.1.1&sceneId=${sceneId}&sourceType=other&hd_from_id=${hd_from_id}&`,
        textEnd: 'str2'
      }
    },
    '618cat': {
      main: {
        title: title,
        type: 'other',
        urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&spm=a217e.xzrwy.1.1&sceneId=${sceneId}&sourceType=other&hd_from_id=${hd_from_id}&`,
        textEnd: 'str2'
      }
    },
    Jhs: {
      main: {
        title: title,
        type: 'other',
        urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&spm=a217e.xzrwy.1.1&sceneId=${sceneId}&sourceType=other&hd_from_id=${hd_from_id}&`,
        textEnd: 'str2'
      }
    },
    tb_worldcup: {
      main: {
        title: title,
        type: 'other',
        urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&spm=a217e.xzrwy.1.1&sceneId=${sceneId}&sourceType=other&hd_from_id=${hd_from_id}&`,
        textEnd: 'str2'
      }
    }
  }
  return data[app]
}

// 获取令牌任务相关参数
function getTaskParams(app, index) {
  const data = {
    FarmSingle: [
      { title: '淘宝集肥料①', sceneId: 5387, hd_from_id: 100085 },
      { title: '淘宝集肥料②', sceneId: 5568, hd_from_id: 100085 },
      { title: '支付宝任务', sceneId: 972, hd_from_id: 100085 },
      { title: '闲鱼任务', sceneId: 2488, hd_from_id: 100085 }
    ],
    Taojb: [{ title: '每日任务', sceneId: 2141, hd_from_id: 100089 }],
    1111: [{ title: '赚喵果', sceneId: 4276, hd_from_id: 100165 }],
    '618cat': [{ title: '赚喵币', sceneId: 5562, hd_from_id: 100178 }],
    Jhs: [
      { title: '攒星星', sceneId: 107, hd_from_id: 100027 },
      { title: 'NPC任务', sceneId: 3421, hd_from_id: 100027 }
    ],
    tb_worldcup: [{ title: '每日任务', sceneId: 4428, hd_from_id: 100095 }]
  }
  return data[app][index]
}

/**
 * 工具类对象 - 写成函数封装形式，是想利用函数申明提前
 * @returns object
 */
function Utils() {
  return {
    randomString(e) {
      e = e || 32
      let t = 'abcdef0123456789',
        a = t.length,
        n = ''
      for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a))
      return n
    },
    stringify(data) {
      try {
        if (typeof JSON.stringify(data) == 'string') {
          return JSON.stringify(data)
        }
      } catch (e) {
        console.log(e)
        return data
      }
    },
    randomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    },
    formatToArray(p = []) {
      return Array.isArray(p) ? p : [p]
    },
    filterArray(arr = []) {
      return arr.filter((v) => !!v)
    },
    getParam(url, key) {
      const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i')
      const r = url.match(reg)
      if (r != null) return decodeURIComponent(r[2])
      return null
    }
  }
}
