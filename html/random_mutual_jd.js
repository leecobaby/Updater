// const json = {}    // 放入魔法变量
const data = json.items
// 选出有 url 的元素
const filterData = _.filter(data, v => v.text.match(/\d{1,2}:\/\W[A-Za-z0-9_]{10,15}\W/g))
// 过滤重复的 user id
const uniqData = _.uniqBy(filterData, v => v.fromUser)
// 随机选取出 5 个助力 url - 考虑到助力已满情况和无效链接的情况
const sampleData = _.sampleSize(uniqData, 5)
const token = sampleData.map(v => v.urls[0].url)
// const item = urls.map(v => '1 ' + v.match(/https:\/\/(.*)/)[1] + '&1');

const task = token.join('<br>')

document.write(JSON.stringify(task))