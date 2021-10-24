// const data = ``
// const from = ``
const $ = {}
const check = isJsonString(data)
if (check) {
  $.data = JSON.parse(data)
  if (from == 'Func.main') {
    if ($.data.retcode === 1001) {
      $.overdue = 'Cookie 已过期，请去往指令设置重新授权登录！'
    } else {
      $.nickname = $.data.data?.userInfo?.baseInfo?.nickname
      $.beanNum = $.data.data?.assetInfo?.beanNum
    }
  }
} else {
  $.error = '服务器返回的居然不是json值,内容为:' + (data || '空')
  $.data = data
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
