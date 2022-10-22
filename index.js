/**
 * 将自写 json 转义压缩成 ios15.1 快捷指令可识别的 json
 */

const fs = require('fs')

var tb = JSON.parse(fs.readFileSync('tb2.json'))
var jd = JSON.parse(fs.readFileSync('jd2.json'))
var shortcuts = JSON.parse(fs.readFileSync('shortcuts2.json'))
var test = JSON.parse(fs.readFileSync('test2.json'))
test = test.data.recommend.resultList.map((item) => item.url)

fs.writeFileSync('tb.json', JSON.stringify(tb).replace(/\//g, '\\/'))
fs.writeFileSync('jd.json', JSON.stringify(jd).replace(/\//g, '\\/'))
fs.writeFileSync('shortcuts.json', JSON.stringify(shortcuts).replace(/\//g, '\\/'))
fs.writeFileSync('test.json', JSON.stringify(test))
