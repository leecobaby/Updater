// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: file-download;
/**
 * 专们在快捷指令里运行的京东登录授权获取cookie脚本，短信版本
 * @Author leecobaby https://github.com/leecobaby
 * @Last Modified by: leecobaby
 * @Last Modified time: 2021-09-22
 */
let notice = new Notification()
const webView = new WebView();
const url = 'https://mcr.jd.com/credit_home/pages/index.html?btPageType=BT&channelName=024';
await webView.loadURL(url);
notice.body = '已为你打开京东短信登录页，请授权登录之后点击左上角关闭~\n下一次无需登录可直接关闭~'
notice.sound = 'event'
notice.schedule()
await webView.present(true);

const req = new Request('https://ms.jr.jd.com/gw/generic/bt/h5/m/firstScreenNew',);
req.method = 'POST';
req.body = 'reqData={"clientType":"ios","clientVersion":"13.2.3","deviceId":"","environment":"3"}';
await req.loadJSON();
const cookies = req.response.cookies;
const account = { username: '', cookie: '' };
const cookie = [];
cookies.forEach((item) => {
  const value = `${item.name}=${item.value}`;
  if (item.name === 'pt_key') cookie.push(value);
  if (item.name === 'pt_pin') {
    account.username = item.value
    cookie.push(value)
  }
});

if (cookie.length != 0) {
  account.cookie = cookie.join(';');
  console.log(account.cookie + ";");
  Pasteboard.copy(account.cookie);
  notice.body = '成功获取到cookie,已拷贝至粘贴版，请去往指令输入~'
  notice.sound = 'complete'
  notice.schedule()
  Safari.open("shortcuts://");
} else {
  notice.body = '获取cookie失败'
  notice.sound = 'failure'
  notice.schedule()
}

Script.complete()