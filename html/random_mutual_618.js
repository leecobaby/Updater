// const json =     // 放入魔法变量
const data = json.items
// 选出有 url 的元素
const filterData = _.filter(data, v => v.urls[0])
// 过滤重复的 user id
const uniqData = _.uniqBy(filterData, v => v.fromUser)
// 随机选取出 5 个助力 url - 考虑到助力已满情况和无效链接的情况
const sampleData = _.sampleSize(uniqData, 5)
const urls = sampleData.map(v => v.urls[0].url)

// urls.unshift('https://m.tb.cn/h.ffnIm0m')

const task = { urls }

document.write(JSON.stringify(task))