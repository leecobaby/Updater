/**
 * 将自写 json 转义压缩成 ios15.1 快捷指令可识别的 json
 */

const fs = require('fs');

var tb = JSON.parse(fs.readFileSync('tb2.json'))
var jd = JSON.parse(fs.readFileSync('jd2.json'))

fs.writeFileSync('tb.json', JSON.stringify(tb).replace(/\//g, '\\/'))
fs.writeFileSync('jd.json', JSON.stringify(tb).replace(/\//g, '\\/'))
