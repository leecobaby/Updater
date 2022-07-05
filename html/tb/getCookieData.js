// const cookieStr = ``
// const activityId = ``

const Cookie = cookieStr.replace(/\s/g, '')

try {
  const tk = Cookie.match(/_m_h5_tk=(\w+)/)[1]
  const url = `https://service-lv90ws2p-1251309300.sh.apigw.tencentcs.com/release/api?activityId=${activityId}&tk=${tk}`
  document.write(JSON.stringify({ Cookie, url }))
} catch (error) {
  document.write(JSON.stringify({ error: `Cookie错误，请检查！` }))
}