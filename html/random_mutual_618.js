// const json =     // 放入魔法变量
const data = json.items
let blacklist = []

// 选出有 url 的元素
const filterData = _.filter(data, v => v.urls[0])
// const filterData = _.filter(data, v => v.text.match(/^[\w-]*$/g))
// 统计所有用户的消息情况
const statisticData = _.groupBy(filterData, v => v.fromUser)
console.log(statisticData);
// 重复发消息的用户数据
const repeatData = _.pickBy(statisticData, v => v.length > 1)
console.log(repeatData);
// 唯一消息的用户数据
const uniqueData = _.pickBy(statisticData, v => v.length == 1)
console.log(uniqueData);
// 随机选取出 3 个助力 url - 考虑到助力已满情况和无效链接的情况
const sampleData = _.sampleSize(uniqueData, 3)
console.log(sampleData);
const list = sampleData.map(v => v[0].text)

// 屏蔽名单
for (const key in repeatData) {
  if (Object.hasOwnProperty.call(repeatData, key)) {
    const element = repeatData[key];
    const username = json.lookups?.users[key]?.username
    const avatarUrl = json.lookups?.users[key]?.avatarUrl
    const chatUrl = json.lookups?.users[key]?.url ? 'https://gitter.im' + json.lookups?.users[key]?.url : `https://gitter.im/matrix/60b8caef6da03739847e0d8d/@${json.lookups?.users[key]?.username}`
    const repeatNum = element.length
    blacklist.push({ username, avatarUrl, chatUrl, repeatNum })
    console.log(username, repeatNum);
  }
}

// 屏蔽名单前10榜
blacklist = _.sortBy(blacklist, v => -v.repeatNum)
blacklist = _.slice(blacklist, 0, 10)

const task = { list, blacklist }
document.write(JSON.stringify(task))