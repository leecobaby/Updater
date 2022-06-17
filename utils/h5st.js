/**
 * 此库 Shortcut 专用
 */
import { format } from "date-fns"
import * as CryptoJS from 'crypto-js'
import require from "axios";

class H5ST {
  tk = $.algo.tk,
  timestamp = $.algo.tk,
  rd = $.algo.tk,
  appId = $.algo.tk,
  fp = $.algo.tk,
  time = $.algo.tk,
  enc = $.algo.tk,

  constructor(appId, time, timestamp) {
    this.appId = appId
    this.time = time
    this.timestamp = timestamp
  }

  // 在获取算法之前就要调用
  _getFp () {
    let e = "0123456789";
    let a = 13;
    let i = '';
    for (; a--;)
      i += e[Math.random() * e.length | 0];
    return (i + this.time).slice(0, 16)
  }

  // 返回接口返回的算法数据
  _setBackData (tk, rd, enc) {
    this.tk = tk
    this.rd = rd
    this.enc = enc
  }

  _getKey (tk, fp, ts, ai, algo) {
    let str = `${tk}${fp}${ts}${ai}${this.rd}`;
    return algo[this.enc](str, tk)
  }

  _getH5st (body) {
    let y = this._getKey(this.tk, this.fp, this.timestamp, this.appId, CryptoJS).toString(CryptoJS.enc.Hex)
    let s = ''
    for (let key of Object.keys(body)) {
      key === 'body' ? s += `${key}:${CryptoJS.SHA256(body[key]).toString(CryptoJS.enc.Hex)}&` : s += `${key}:${body[key]}&`
    }
    s = s.slice(0, -1)
    s = CryptoJS.HmacSHA256(s, y).toString(CryptoJS.enc.Hex)
    return encodeURIComponent(`${this.timestamp};${this.fp};${this.appId.toString()};${this.tk};${s};3.0;${this.time.toString()}`)
  }
}

export {
  H5ST
}
