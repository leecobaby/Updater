// const json =     // 放入魔法变量
(() => {
  const data = json.item
  // 过滤重复的 user id
  const uniqData = _.uniqBy(data, v => v.fromUser.id)
  // 随机选取出 10 个助力 url - 考虑到助力已满情况和无链接的情况
  const sampleData = _.sampleSize(uniqData, 10)
  const urls = sampleData.map(v => v.urls[0])
  document.write(JSON.stringify(urls))
})()