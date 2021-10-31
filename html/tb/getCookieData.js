// const cookieStr = ``
// const activityId = ``
const Cookie = cookieStr.replace(/\s/g, '')
const tk = Cookie.match(/_m_h5_tk=\w+/g)[0]
const url = `https://service-lv90ws2p-1251309300.sh.apigw.tencentcs.com/release/api?activityId=${activityId}&tk=${tk}`
document.write(JSON.stringify({ Cookie, url }))