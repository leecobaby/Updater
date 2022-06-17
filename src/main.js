import { format } from "date-fns";

const txt = 'txt'
function Func (params) {
  console.log(txt);
}

const time = Date.now
const timestamp = format(time, "yyyyMMddHHmmssSSS")
console.log(timestamp);