// const json =     // 放入魔法变量
const data = json.items
// 选出有 url 的元素
const filterData = _.filter(data, v => v.urls[0])
// 过滤重复的 user id
const uniqData = _.uniqBy(filterData, v => v.fromUser)
// 随机选取出 10 个助力 url - 考虑到助力已满情况和无链接的情况
const sampleData = _.sampleSize(uniqData, 10)
const urls = sampleData.map(v => v.urls[0].url)

const item = urls.map(v => v.match(/(?<=https:\/\/).*/)[0] + ' 0');
document.write(JSON.stringify(item))
// const task = {
//   "help": {
//     "title": "帮助助力",
//     "type": "help",
//     "urlScheme": "HTTPS://",
//     "textEnd": "str1",
//     "item": item || ['1 0']
//   }
// }

// document.write(JSON.stringify(task))