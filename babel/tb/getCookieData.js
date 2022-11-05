// const cookieStr = ``
// const activityId = ``

function handleCookie () {
  const Cookie = cookieStr.replace(/\s/g, '')
  try {
    const tk = Cookie.match(/_m_h5_tk=(\w+)/)[1]
    const url = `https://service-daubfate-1251309300.gz.apigw.tencentcs.com/release/api?activityId=${activityId}&tk=${tk}`
    document.write(JSON.stringify({ Cookie, url }))
  } catch (error) {
    document.write(JSON.stringify({ error: `Cookie错误，请检查！` }))
  }
}

function handeleStreamCookie () {
  const cookie = cookieStr.match(/Cookie: (.+)/)[1]
  const setCookieArr = cookieStr.match(/Set-Cookie: (.+)/g)
  console.log(setCookieArr);

  if (setCookieArr) {
    let cookieArr = cookie.split(';')
    let obj = {}
    cookieArr.forEach(v => {
      const [key, value] = v.split('=')
      obj[key] = value
    })

    setCookieArr.forEach(v => {
      const [key, value] = v.slice(12).split(';')[0].split('=')
      console.log(key, value);
      obj[key] = value
    })
    document.write(cookieObjToStr(obj))
  } else {
    document.write(cookie)
  }



}

function cookieObjToStr (obj) {
  let str = ''
  Object.keys(obj).forEach(v => {
    str += `${v}=${obj[v]};`
  })
  return str
}
