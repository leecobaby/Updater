// const cookieStr = ``
// const activityId = ``
// const activityId2 = `` // 只针对淘金币新旧任务能同时做时

const Cookie = cookieStr.replace(/\s/g, '')

try {
  const tk = Cookie.match(/_m_h5_tk=(\w+)/)[1]
  const url = `https://service-lv90ws2p-1251309300.sh.apigw.tencentcs.com/release/api?activityId=${activityId}&tk=${tk}`
  const url2 = `https://service-lv90ws2p-1251309300.sh.apigw.tencentcs.com/release/api?activityId=${activityId2}&tk=${tk}`
  document.write(JSON.stringify({ Cookie, url, url2 }))
} catch (error) {
  document.write(JSON.stringify({ error: `Cookie错误，请检查！` }))
}