// const data = {}
const $ = {}
const data1 = JSON.parse(data.d)
if (data1.retcode === 1001) {
  $.overdue = 'Cookie 已过期，请去往指令设置重新授权登录！'
}
else {
  $.nickname = data1.data?.userInfo?.baseInfo?.nickname
  $.beanNum = data1.data?.assetInfo?.beanNum
}
document.write(JSON.stringify($))

function isJsonString (str) {
  try {
    if (typeof JSON.parse(str) == "object") {
      return true;
    }
  } catch (e) {
  }
  return false;
}

