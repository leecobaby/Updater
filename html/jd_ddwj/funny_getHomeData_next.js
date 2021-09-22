$.callback = ''
dealReturn('funny_getHomeData', $.data)
$.userInfo = $.homeData.result.homeMainInfo
$.success = 1
$.message = `当前已解锁宝物进度:${$.userInfo.raiseInfo.userEarthInfo.userUnlockedPlaceNum}/15\n剩余好玩豆${$.userInfo.raiseInfo.remainScore}，下一关需要${$.userInfo.raiseInfo.nextLevelScore - $.userInfo.raiseInfo.curLevelStartScore}`
document.write(JSON.stringify($))
console.log($.message);