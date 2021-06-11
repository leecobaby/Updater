let n = {
  rotl: function (e, t) { return e << t | e >>> 32 - t },
  rotr: function (e, t) { return e << 32 - t | e >>> t },
  endian: function (e) { if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24); for (var t = 0; t < e.length; t++)e[t] = n.endian(e[t]); return e },
  randomBytes: function (e) { for (var t = []; 0 < e; e--)t.push(Math.floor(256 * Math.random())); return t },
  bytesToWords: function (e) { for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8)t[r >>> 5] |= e[n] << 24 - r % 32; return t },
  wordsToBytes: function (e) { for (var t = [], n = 0; n < 32 * e.length; n += 8)t.push(e[n >>> 5] >>> 24 - n % 32 & 255); return t },
  bytesToHex: function (e) { for (var t = [], n = 0; n < e.length; n++)t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16)); return t.join("") },
  hexToBytes: function (e) { for (var t = [], n = 0; n < e.length; n += 2)t.push(parseInt(e.substr(n, 2), 16)); return t },
  bytesToBase64: function (e) { for (var t = [], n = 0; n < e.length; n += 3)for (var r = e[n] << 16 | e[n + 1] << 8 | e[n + 2], o = 0; o < 4; o++)8 * n + 6 * o <= 8 * e.length ? t.push(a.charAt(r >>> 6 * (3 - o) & 63)) : t.push("="); return t.join("") },
  base64ToBytes: function (e) { e = e.replace(/[^A-Z0-9+\/]/gi, ""); for (var t = [], n = 0, r = 0; n < e.length; r = ++n % 4)0 != r && t.push((a.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | a.indexOf(e.charAt(n)) >>> 6 - 2 * r); return t }
};
