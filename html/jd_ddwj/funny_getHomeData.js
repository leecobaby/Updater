// next
$.callback = ''
dealReturn('funny_getHomeData', $.data)
$.userInfo = $.homeData.result.homeMainInfo
$.success = 1
$.message = `当前分红：${$.userInfo.raiseInfo.redNum}份，当前等级:${$.userInfo.raiseInfo.scoreLevel}\n当前金币${$.userInfo.raiseInfo.remainScore}，下一关需要${$.userInfo.raiseInfo.nextLevelScore - $.userInfo.raiseInfo.curLevelStartScore}`
document.write(JSON.stringify($))
console.log($.message);