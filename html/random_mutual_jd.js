// const json = 
const data = json.items
// 选出有 url 的元素
const filterData = _.filter(data, v => v.text.match(/\d.*\/.*\W[A-Za-z0-9]{10,15}\W/g))
// 过滤重复的 user id
const uniqData = _.uniqBy(filterData, v => v.fromUser)
// 随机选取出 5 个助力 url - 考虑到助力已满情况和无效链接的情况
const sampleData = _.sampleSize(uniqData, 5)
let token = sampleData.map(v => v.text)
token.unshift(`15:/抢紅包，购痛快~最高19618元紅包等你来！【亰ぃD○ōδng】 ！X6yQR8y9Ux！`)
const task = token.join('<br>')

document.write(task)