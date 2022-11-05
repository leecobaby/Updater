// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: purple; icon-glyph: magic;
!(function init () {
  //   console.log(args.shortcutParameter)
})()

let cookie = (args.shortcutParameter && args.shortcutParameter + '') || args.plainTexts[0] || ''
console.log(1)

const req = new Request(
  'https://h5api.m.taobao.com/h5/mtop.cloudsail.ad.get/1.0/?jsv=2.6.1&appKey=12574478'
)
req.method = 'GET'
req.headers = {
  'User-Agent':
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1',
  Accept: '*/*',
  'Accept-Language': 'zh-cn',
  'Accept-Encoding': 'gzip, deflate, br',
  Connection: 'keep-alive',
  Referer: 'https://h5.m.taobao.com/',
  Host: 'h5api.m.taobao.com',
  Cookie: cookie
}
console.log(req.method)
const res = await req.loadJSON()
console.log(res)
const cookies = req.response.cookies || []
console.log(cookies)
const _m_h5_tk = getCookieValue('_m_h5_tk')
const _m_h5_tk_enc = getCookieValue('_m_h5_tk_enc')
if (_m_h5_tk && _m_h5_tk_enc) {
  cookie = cookie.replace(/(_m_h5_tk=)(.*?)(;)/, `$1${_m_h5_tk}$3`)
  cookie = cookie.replace(/(_m_h5_tk_enc=)(.*?)(;)/, `$1${_m_h5_tk_enc}$3`)
  console.log(cookie)
}

function getCookieValue (name) {
  const cookie = cookies.find((item) => item.name === name)
  return cookie ? cookie.value : ''
}

Script.setShortcutOutput(cookie + '')
Script.complete()