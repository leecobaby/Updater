var timestamp = Math.round(new Date().getTime()).toString()
var _ss_log = '0',
  _cs = '',
  _fpb = '',
  _secretp = '',
  _sceneid = '',
  _joyytoken = $.joyytoken || '',
  _rjbb = '',
  _azbb = '',
  _uuid = '',
  _jk = '',
  _xinghao = '',
  _nav = '',
  _time = timestamp
var pinjie =
  '{"tm":[],"tnm":["d5-69,DA,1IX,1.000,t","d7-69,DH,1JZ,1.000,t","d8-6A,DN,1RV,u,t"],"grn":1,"ss":"' +
  timestamp +
  '9250","wed":"tttttfuf","wea":"ffttttua","pdn":[9,41,2,3,1,5],"jj":1,"cs":"39710915a734dacc5dba2f8e8b964987","np":"Linux i686","t":1642319530621,"jk":"f78382db5b9f46445838e8bca26b6441","fpb":"016c95c8a80f4ab5ca3ffd8b1","nv":"Apple Computer, Inc.","nav":"727652","scr":[854,480],"ro":["iPhone10,1","iOS","11.3.3","10.1.8","727652","f78382db5b9f46445838e8bca26b6441","a"],"ioa":"fffffftt","aj":"u","ci":"w3.4.0","cf_v":"02","bd":"random=53554918","mj":[1,0,0],"blog":"a","msg":"a"}'
function getSs(secretp) {
  $.random = 53554918
  $.sceneid = $.subSceneid ?? 'RAhomePageh5'
  const extraData = getBody(53554918)
  return {
    extraData,
    secretp,
    random: $.random
  }
}

function getBody(_random) {
  if (_random == '') {
    _random = 53554918
  }
  let _suijizifu = _0x3ae16b(![], 0xa)
  //let _time = Date['now']();
  let _key = getkey(_suijizifu, _time['toString']())
  let _cankey =
    'random=' +
    _random +
    '&token=' +
    _joyytoken +
    '&time=' +
    _time +
    '&nonce_str=' +
    _suijizifu +
    '&key=' +
    _key +
    '&is_trust=1'
  console.log(_cankey)
  let _keyjiami = keyjiami(_cankey)['toUpperCase']()
  let _0x1e9fe6 = _0x37a6aa(_keyjiami)['toString'](0x24)
  _0x1e9fe6 = _0x36e8da(_0x1e9fe6, 0x7)
  //let _data = '{"tm":[],"tnm":["d5-6L,ES,2EY,1.000,t","d7-6L,ES,2GB,1.000,t","d1-6M,ES,2H8,u,t"],"grn":1,"ss":"' + _time['toString']() + '5987","wed":"tttttfuf","wea":"ffttttua","pdn":[8,16,2,3,1,5],"jj":1,"cs":"' + _cs + '","np":"Linux i686","t":' + _time['toString']() + ',"jk":"' + _jk + '","fpb":"' + _fpb + '","nv":"Google Inc.","nav":"' + _nav + '","scr":[854,480],"ro":["' + _xinghao + '","android","' + _azbb + '","' + _rjbb + '","' + _nav + '","' + _uuid + '","a"],"ioa":"fffffftt","aj":"u","ci":"w3.2.4","cf_v":"01","bd":"random=' + _random + '","mj":[1,0,0],"blog":"a","msg":"a"}'
  let _data = pinjie
  let _jiamidata1 = CryptoJS['enc']['Utf8']['parse'](
    unescape(encodeURIComponent(_zhuanzifu(_data, _key)))
  )
  _jiamidata1 = CryptoJS['enc']['Base64']['stringify'](_jiamidata1)
  let _0x2f3398 = _0x37a6aa(_jiamidata1)['toString'](0x24)
  _0x2f3398 = _0x36e8da(_0x2f3398, 0x7)
  _keyjiami =
    _time['toString']() +
    '~1' +
    _suijizifu +
    _joyytoken +
    '~9,1~' +
    _keyjiami +
    '~' +
    _0x1e9fe6 +
    '~C~' +
    _jiamidata1 +
    '~' +
    _0x2f3398
  s = JSON['stringify']({
    extraData: {
      log: encodeURIComponent(_keyjiami),
      sceneid: _sceneid
    },
    secretp: _secretp,
    random: _random['toString']()
  })
  if (_ss_log == '1') {
    return s
  } else {
    return encodeURIComponent(_keyjiami)
  }
}

function _0x3ae16b(_0x5a3e57, _0x14e9cd, _0x5c6201) {
  var _0x246eb8 = {
    AJxuL: '2|3|0|4|1',
    Dbsnw: function (_0xa072dc, _0x1f093e) {
      return _0xa072dc >> _0x1f093e
    },
    QkbcW: function (_0x47a39e, _0x3ff673) {
      return _0x47a39e - _0x3ff673
    },
    PCclX: function (_0x396af4, _0x150d27) {
      return _0x396af4 % _0x150d27
    },
    YXFak: function (_0x4a1414, _0x2bf484) {
      return _0x4a1414 + _0x2bf484
    },
    zlqgX: function (_0x44ad08, _0x55e887) {
      return _0x44ad08 << _0x55e887
    },
    ebLRE: function (_0x451844, _0x2ab79c) {
      return _0x451844 >>> _0x2ab79c
    },
    HDahn: function (_0x1d79ee, _0x4642bb) {
      return _0x1d79ee + _0x4642bb
    },
    LzNNV: function (_0x4e7c93, _0xf89d40) {
      return _0x4e7c93(_0xf89d40)
    },
    iiVpi: function (_0xb960fa, _0xf463c) {
      return _0xb960fa(_0xf463c)
    },
    DyzqP: function (_0x269a4e, _0x2c4762) {
      return _0x269a4e * _0x2c4762
    },
    kiGQQ: function (_0x266a67, _0x58ea41) {
      return _0x266a67 < _0x58ea41
    },
    QbYpJ: function (_0x32d0e4, _0x4ed47b) {
      return _0x32d0e4 < _0x4ed47b
    },
    JAWHp: function (_0x4e2455, _0x42e2c4) {
      return _0x4e2455 + _0x42e2c4
    },
    FjIUk: function (_0x4b6281, _0x25d16d) {
      return _0x4b6281 ^ _0x25d16d
    },
    QddEN: function (_0x4134a3, _0x102520) {
      return _0x4134a3 ^ _0x102520
    },
    GMYEG: function (_0x49a99b, _0x19b88b) {
      return _0x49a99b ^ _0x19b88b
    },
    fumQT: function (_0x4aaa7e, _0x67d23e) {
      return _0x4aaa7e - _0x67d23e
    },
    OBXZF: function (_0x54d561, _0x1fda6d) {
      return _0x54d561 | _0x1fda6d
    },
    kjvjR: function (_0x3f372a, _0x369915) {
      return _0x3f372a + _0x369915
    },
    gaTAt: function (_0x36391f, _0x286a1d) {
      return _0x36391f >>> _0x286a1d
    },
    PtTaG: function (_0x1b0f41, _0x3a1d33) {
      return _0x1b0f41 >>> _0x3a1d33
    },
    VSzoS: function (_0x1f7c95, _0x33bb4f) {
      return _0x1f7c95 & _0x33bb4f
    },
    fEwuO: function (_0x4be3b3, _0x276c20) {
      return _0x4be3b3 + _0x276c20
    },
    BWuqJ: function (_0x1d62c6, _0x4dabf4) {
      return _0x1d62c6 ^ _0x4dabf4
    },
    Lpfuc: function (_0x40caec, _0x127671) {
      return _0x40caec - _0x127671
    },
    OUGyN: function (_0x1ec0dd, _0x57bae3) {
      return _0x1ec0dd | _0x57bae3
    },
    TMqAw: function (_0x3426b4, _0x53507d) {
      return _0x3426b4 & _0x53507d
    },
    AZGei: function (_0xf39963, _0x571451) {
      return _0xf39963 | _0x571451
    },
    BmKIn: function (_0x87889f, _0xafb6a7) {
      return _0x87889f !== _0xafb6a7
    },
    CaqeM: 'IHdXZ',
    tnAKq: 'yUVEs',
    eCYad: 'MTfuu'
  }
  let _0x30957c = '',
    _0x39bf9a = _0x14e9cd,
    _0x8a637d = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ]
  if (_0x5a3e57) {
    if (_0x246eb8['BmKIn'](_0x246eb8['CaqeM'], _0x246eb8['CaqeM'])) {
      var _0x14e623 = _0x246eb8['AJxuL']['split']('|'),
        _0x3d37b6 = 0x0
      while (!![]) {
        switch (_0x14e623[_0x3d37b6++]) {
          case '0':
            ;(_0x5c13e7[_0x246eb8['Dbsnw'](_0x207247, 0x5)] |=
              0x80 << _0x246eb8['QkbcW'](0x18, _0x246eb8['PCclX'](_0x207247, 0x20))),
              (_0x5c13e7[
                _0x246eb8['YXFak'](
                  0xf,
                  _0x246eb8['zlqgX'](
                    _0x246eb8['ebLRE'](_0x246eb8['HDahn'](_0x207247, 0x40), 0x9),
                    0x4
                  )
                )
              ] = _0x207247)
            continue
          case '1':
            return [_0x449093, _0x5eba36, _0xed3673, _0x30fa76, _0x13c89a]
          case '2':
            t = _0x246eb8['LzNNV'](_0x492c17, t)
            continue
          case '3':
            var _0x5c13e7 = _0x246eb8['iiVpi'](bytesToWords, t),
              _0x207247 = _0x246eb8['DyzqP'](0x8, t['length']),
              _0x5daa7f = [],
              _0x449093 = 0x67452301,
              _0x5eba36 = -0x10325477,
              _0xed3673 = -0x67452302,
              _0x30fa76 = 0x10325476,
              _0x13c89a = -0x3c2d1e10
            continue
          case '4':
            for (var _0x4dcfb4 = 0x0; _0x4dcfb4 < _0x5c13e7['length']; _0x4dcfb4 += 0x10) {
              for (
                var _0x3dfabb = _0x449093,
                  _0x302b34 = _0x5eba36,
                  _0x15f9aa = _0xed3673,
                  _0x53c51c = _0x30fa76,
                  _0x41c128 = _0x13c89a,
                  _0x196d20 = 0x0;
                _0x246eb8['kiGQQ'](_0x196d20, 0x50);
                _0x196d20++
              ) {
                if (_0x246eb8['QbYpJ'](_0x196d20, 0x10))
                  _0x5daa7f[_0x196d20] = _0x5c13e7[_0x246eb8['JAWHp'](_0x4dcfb4, _0x196d20)]
                else {
                  var _0x5b8e7c = _0x246eb8['FjIUk'](
                    _0x246eb8['QddEN'](
                      _0x246eb8['GMYEG'](
                        _0x5daa7f[_0x246eb8['QkbcW'](_0x196d20, 0x3)],
                        _0x5daa7f[_0x246eb8['QkbcW'](_0x196d20, 0x8)]
                      ),
                      _0x5daa7f[_0x246eb8['fumQT'](_0x196d20, 0xe)]
                    ),
                    _0x5daa7f[_0x196d20 - 0x10]
                  )
                  _0x5daa7f[_0x196d20] = _0x246eb8['OBXZF'](_0x5b8e7c << 0x1, _0x5b8e7c >>> 0x1f)
                }
                var _0x2701f8 =
                  _0x246eb8['kjvjR'](
                    _0x246eb8['kjvjR'](
                      _0x246eb8['OBXZF'](
                        _0x246eb8['zlqgX'](_0x449093, 0x5),
                        _0x246eb8['gaTAt'](_0x449093, 0x1b)
                      ),
                      _0x13c89a
                    ),
                    _0x246eb8['PtTaG'](_0x5daa7f[_0x196d20], 0x0)
                  ) +
                  (_0x246eb8['QbYpJ'](_0x196d20, 0x14)
                    ? 0x5a827999 +
                      _0x246eb8['OBXZF'](
                        _0x5eba36 & _0xed3673,
                        _0x246eb8['VSzoS'](~_0x5eba36, _0x30fa76)
                      )
                    : _0x196d20 < 0x28
                    ? _0x246eb8['fEwuO'](
                        0x6ed9eba1,
                        _0x246eb8['BWuqJ'](_0x246eb8['BWuqJ'](_0x5eba36, _0xed3673), _0x30fa76)
                      )
                    : _0x196d20 < 0x3c
                    ? _0x246eb8['Lpfuc'](
                        _0x246eb8['OUGyN'](
                          _0x246eb8['OUGyN'](
                            _0x246eb8['TMqAw'](_0x5eba36, _0xed3673),
                            _0x246eb8['TMqAw'](_0x5eba36, _0x30fa76)
                          ),
                          _0x246eb8['TMqAw'](_0xed3673, _0x30fa76)
                        ),
                        0x70e44324
                      )
                    : _0x246eb8['Lpfuc'](_0x5eba36 ^ _0xed3673 ^ _0x30fa76, 0x359d3e2a))
                ;(_0x13c89a = _0x30fa76),
                  (_0x30fa76 = _0xed3673),
                  (_0xed3673 = _0x246eb8['AZGei'](
                    _0x246eb8['zlqgX'](_0x5eba36, 0x1e),
                    _0x246eb8['PtTaG'](_0x5eba36, 0x2)
                  )),
                  (_0x5eba36 = _0x449093),
                  (_0x449093 = _0x2701f8)
              }
              ;(_0x449093 += _0x3dfabb),
                (_0x5eba36 += _0x302b34),
                (_0xed3673 += _0x15f9aa),
                (_0x30fa76 += _0x53c51c),
                (_0x13c89a += _0x41c128)
            }
            continue
        }
        break
      }
    } else {
      _0x39bf9a = _0x246eb8['fEwuO'](
        Math['round'](
          _0x246eb8['DyzqP'](Math['random'](), _0x246eb8['Lpfuc'](_0x5c6201, _0x14e9cd))
        ),
        _0x14e9cd
      )
    }
  }
  for (let _0x579cce = 0x0; _0x579cce < _0x39bf9a; _0x579cce++) {
    if (_0x246eb8['tnAKq'] === _0x246eb8['eCYad']) {
      var _0x19a303 = t[e],
        _0xbe175f = /[a-zA-Z]/['test'](_0x19a303)
      if (t['hasOwnProperty'](e))
        if (_0xbe175f) n += _0x296732(_0x19a303)
        else n += _0x19a303
    } else {
      pos = Math['round'](_0x246eb8['DyzqP'](Math['random'](), _0x8a637d['length'] - 0x1))
      _0x30957c += _0x8a637d[pos]
    }
  }
  return _0x30957c
}

function _0x36e8da(_0x164f9b, _0x11098b) {
  return (Array(_0x11098b)['join']('0') + _0x164f9b)['slice'](-_0x11098b)
}

function _0x296732(_0x247c5b) {
  var _0x2d30f3 = _0x247c5b['charCodeAt'](0x0)['toString']()
  return _0x2d30f3[_0x2d30f3['length'] - 0x1]
}

function _0x492c17(_0x6fe761) {
  _0x6fe761 = unescape(encodeURIComponent(_0x6fe761))
  for (var _0x4613e3 = [], _0x55d77b = 0x0; _0x55d77b < _0x6fe761['length']; _0x55d77b++)
    _0x4613e3['push'](0xff & _0x6fe761['charCodeAt'](_0x55d77b))
  return _0x4613e3
}

function _0x37a6aa(_0x9f40d3) {
  var _0xc223b4 = {
    bFDjm: function (_0x3a95fa, _0x5899d0) {
      return _0x3a95fa + _0x5899d0
    },
    AHpKF: function (_0x3d56ce, _0x4436a7) {
      return _0x3d56ce - _0x4436a7
    },
    XrdsW: function (_0x308a26, _0x8c366c) {
      return _0x308a26 ^ _0x8c366c
    },
    iRNjg: function (_0x3ead64, _0x1f18fe) {
      return _0x3ead64 < _0x1f18fe
    },
    MdjrP: function (_0x5bf48b, _0x299607) {
      return _0x5bf48b & _0x299607
    },
    kTshg: function (_0xfc8d9b, _0x5c5c47) {
      return _0xfc8d9b | _0x5c5c47
    },
    HLgKD: function (_0x2d12ab, _0x356820) {
      return _0x2d12ab << _0x356820
    },
    zFVgN: function (_0xf70724, _0x431262) {
      return _0xf70724 - _0x431262
    },
    NFXHB: function (_0x3c9bee, _0x3f731e) {
      return _0x3c9bee * _0x3f731e
    },
    TYvmE: function (_0x4bc9fe, _0x31a953) {
      return _0x4bc9fe - _0x31a953
    },
    ldqsK: function (_0x4e166e, _0x5e1bfd) {
      return _0x4e166e < _0x5e1bfd
    },
    wRYnR: function (_0x388a41, _0x4abb34) {
      return _0x388a41 === _0x4abb34
    },
    Geimp: 'UszxO',
    EAAYv: 'BjaoJ',
    Kvzjn: function (_0x50257c, _0x579a51) {
      return _0x50257c < _0x579a51
    },
    MxiWL: 'GNqMB',
    BJGcH: function (_0x40a4ff, _0xacd3ad) {
      return _0x40a4ff | _0xacd3ad
    },
    CKsbW: function (_0x3d0216, _0x4998af) {
      return _0x3d0216 >> _0x4998af
    },
    vzjDv: function (_0x4ef9f8, _0x414884) {
      return _0x4ef9f8 & _0x414884
    },
    AFkCt: function (_0x12ae06, _0x155687) {
      return _0x12ae06(_0x155687)
    },
    nrgzW: function (_0x1c1dbc, _0xa06115) {
      return _0x1c1dbc < _0xa06115
    },
    jwnlL: function (_0x50da32, _0xbaca9e) {
      return _0x50da32 ^ _0xbaca9e
    },
    EkTLg: function (_0x523c74, _0x3f8a7a) {
      return _0x523c74 & _0x3f8a7a
    },
    ZoeCp: function (_0x420891, _0x58cfa9) {
      return _0x420891 >>> _0x58cfa9
    }
  }

  function _0x577ce3(_0x115ee8) {
    var _0x3ca9cf = {
      cYqyv: function (_0x4618aa, _0x491309) {
        return _0xc223b4['bFDjm'](_0x4618aa, _0x491309)
      },
      YITZr: function (_0x3a6cae, _0x57180b) {
        return _0xc223b4['AHpKF'](_0x3a6cae, _0x57180b)
      },
      YmKFs: function (_0x29414e, _0x5089da) {
        return _0x29414e < _0x5089da
      },
      ODygq: function (_0x515a5b, _0x3c81a2) {
        return _0x515a5b + _0x3c81a2
      },
      AMjdt: function (_0xd58b55, _0xbd65a4) {
        return _0xc223b4['XrdsW'](_0xd58b55, _0xbd65a4)
      },
      hYOIf: function (_0x14c0be, _0x6980d9) {
        return _0x14c0be - _0x6980d9
      },
      TZicU: function (_0x5d9935, _0x3ea097) {
        return _0x5d9935 + _0x3ea097
      },
      quAvl: function (_0x533bf7, _0x322cc0) {
        return _0x533bf7 | _0x322cc0
      },
      JjJJx: function (_0x3a2046, _0x56df5d) {
        return _0x3a2046 << _0x56df5d
      },
      huUzX: function (_0x1e4684, _0x306cca) {
        return _0x1e4684 >>> _0x306cca
      },
      tVKXk: function (_0x2958da, _0xb97a34) {
        return _0xc223b4['iRNjg'](_0x2958da, _0xb97a34)
      },
      JcTTg: function (_0x22e90d, _0x227433) {
        return _0xc223b4['MdjrP'](_0x22e90d, _0x227433)
      },
      TpHCm: function (_0x4abc0a, _0x36ff74) {
        return _0xc223b4['XrdsW'](_0x4abc0a, _0x36ff74)
      },
      nVfQO: function (_0xc13c2d, _0x582867) {
        return _0xc223b4['kTshg'](_0xc13c2d, _0x582867)
      },
      FZqxk: function (_0xd776fd, _0x4971c1) {
        return _0xd776fd ^ _0x4971c1
      },
      DYHVB: function (_0x36d052, _0x48d51c) {
        return _0xc223b4['XrdsW'](_0x36d052, _0x48d51c)
      },
      Xzlqe: function (_0x317558, _0x519d35) {
        return _0xc223b4['HLgKD'](_0x317558, _0x519d35)
      },
      iFtgP: function (_0x55b295, _0x1f194d) {
        return _0xc223b4['zFVgN'](_0x55b295, _0x1f194d)
      },
      eUrnD: function (_0x50d416, _0x39f89e) {
        return _0xc223b4['NFXHB'](_0x50d416, _0x39f89e)
      },
      Gokrz: function (_0x573bf9, _0x7b6d9b) {
        return _0xc223b4['TYvmE'](_0x573bf9, _0x7b6d9b)
      }
    }
    _0x115ee8 = _0x115ee8['replace'](/\r\n/g, '\x0a')
    var _0x16554e = ''
    for (var _0x49a2ae = 0x0; _0xc223b4['ldqsK'](_0x49a2ae, _0x115ee8['length']); _0x49a2ae++) {
      if (_0xc223b4['wRYnR'](_0xc223b4['Geimp'], _0xc223b4['EAAYv'])) {
        range = _0x3ca9cf['cYqyv'](
          Math['round'](Math['random']() * _0x3ca9cf['YITZr'](max, min)),
          min
        )
      } else {
        var _0x16c125 = _0x115ee8['charCodeAt'](_0x49a2ae)
        if (_0xc223b4['Kvzjn'](_0x16c125, 0x80)) {
          if (_0xc223b4['MxiWL'] !== 'GNqMB') {
            for (
              var _0x196626 = s,
                _0x6e1cae = u,
                _0x23cbc2 = _0x16c125,
                _0x3e8f57 = f,
                _0x4b94ff = h,
                _0x42a4e6 = 0x0;
              _0x3ca9cf['YmKFs'](_0x42a4e6, 0x50);
              _0x42a4e6++
            ) {
              if (_0x42a4e6 < 0x10) a[_0x42a4e6] = e[_0x3ca9cf['ODygq'](l, _0x42a4e6)]
              else {
                var _0x5a28ff =
                  _0x3ca9cf['AMjdt'](
                    a[_0x3ca9cf['hYOIf'](_0x42a4e6, 0x3)] ^ a[_0x3ca9cf['hYOIf'](_0x42a4e6, 0x8)],
                    a[_0x42a4e6 - 0xe]
                  ) ^ a[_0x42a4e6 - 0x10]
                a[_0x42a4e6] = (_0x5a28ff << 0x1) | (_0x5a28ff >>> 0x1f)
              }
              var _0x29e50a = _0x3ca9cf['ODygq'](
                _0x3ca9cf['ODygq'](
                  _0x3ca9cf['TZicU'](_0x3ca9cf['quAvl'](_0x3ca9cf['JjJJx'](s, 0x5), s >>> 0x1b), h),
                  _0x3ca9cf['huUzX'](a[_0x42a4e6], 0x0)
                ),
                _0x3ca9cf['tVKXk'](_0x42a4e6, 0x14)
                  ? _0x3ca9cf['TZicU'](
                      0x5a827999,
                      _0x3ca9cf['quAvl'](
                        _0x3ca9cf['JcTTg'](u, _0x16c125),
                        _0x3ca9cf['JcTTg'](~u, f)
                      )
                    )
                  : _0x3ca9cf['tVKXk'](_0x42a4e6, 0x28)
                  ? _0x3ca9cf['TZicU'](0x6ed9eba1, _0x3ca9cf['TpHCm'](u ^ _0x16c125, f))
                  : _0x42a4e6 < 0x3c
                  ? _0x3ca9cf['hYOIf'](
                      _0x3ca9cf['nVfQO'](
                        _0x3ca9cf['JcTTg'](u, _0x16c125),
                        _0x3ca9cf['JcTTg'](u, f)
                      ) | _0x3ca9cf['JcTTg'](_0x16c125, f),
                      0x70e44324
                    )
                  : _0x3ca9cf['FZqxk'](_0x3ca9cf['DYHVB'](u, _0x16c125), f) - 0x359d3e2a
              )
              ;(h = f),
                (f = _0x16c125),
                (_0x16c125 = _0x3ca9cf['nVfQO'](_0x3ca9cf['Xzlqe'](u, 0x1e), u >>> 0x2)),
                (u = s),
                (s = _0x29e50a)
            }
            ;(s += _0x196626),
              (u += _0x6e1cae),
              (_0x16c125 += _0x23cbc2),
              (f += _0x3e8f57),
              (h += _0x4b94ff)
          } else {
            _0x16554e += String['fromCharCode'](_0x16c125)
          }
        } else if (_0x16c125 > 0x7f && _0x16c125 < 0x800) {
          _0x16554e += String['fromCharCode'](
            _0xc223b4['BJGcH'](_0xc223b4['CKsbW'](_0x16c125, 0x6), 0xc0)
          )
          _0x16554e += String['fromCharCode'](
            _0xc223b4['BJGcH'](_0xc223b4['vzjDv'](_0x16c125, 0x3f), 0x80)
          )
        } else {
          if ('VxSlu' !== 'LMRBy') {
            _0x16554e += String['fromCharCode'](_0xc223b4['CKsbW'](_0x16c125, 0xc) | 0xe0)
            _0x16554e += String['fromCharCode'](
              _0xc223b4['BJGcH'](_0xc223b4['vzjDv'](_0x16c125 >> 0x6, 0x3f), 0x80)
            )
            _0x16554e += String['fromCharCode'](
              _0xc223b4['BJGcH'](_0xc223b4['vzjDv'](_0x16c125, 0x3f), 0x80)
            )
          } else {
            let _0x5273f7 = '',
              _0x19adaa = min,
              _0x350057 = [
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                'a',
                'b',
                'c',
                'd',
                'e',
                'f',
                'g',
                'h',
                'i',
                'j',
                'k',
                'l',
                'm',
                'n',
                'o',
                'p',
                'q',
                'r',
                's',
                't',
                'u',
                'v',
                'w',
                'x',
                'y',
                'z',
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'I',
                'J',
                'K',
                'L',
                'M',
                'N',
                'O',
                'P',
                'Q',
                'R',
                'S',
                'T',
                'U',
                'V',
                'W',
                'X',
                'Y',
                'Z'
              ]
            if (randomFlag) {
              _0x19adaa = _0x3ca9cf['TZicU'](
                Math['round'](Math['random']() * _0x3ca9cf['iFtgP'](max, min)),
                min
              )
            }
            for (let _0x110cba = 0x0; _0x110cba < _0x19adaa; _0x110cba++) {
              pos = Math['round'](
                _0x3ca9cf['eUrnD'](Math['random'](), _0x3ca9cf['Gokrz'](_0x350057['length'], 0x1))
              )
              _0x5273f7 += _0x350057[pos]
            }
            return _0x5273f7
          }
        }
      }
    }
    return _0x16554e
  }
  _0x9f40d3 = _0xc223b4['AFkCt'](_0x577ce3, _0x9f40d3)
  var _0x5ba5d0 = [
    0x0, 0x77073096, 0xee0e612c, 0x990951ba, 0x76dc419, 0x706af48f, 0xe963a535, 0x9e6495a3,
    0xedb8832, 0x79dcb8a4, 0xe0d5e91e, 0x97d2d988, 0x9b64c2b, 0x7eb17cbd, 0xe7b82d07, 0x90bf1d91,
    0x1db71064, 0x6ab020f2, 0xf3b97148, 0x84be41de, 0x1adad47d, 0x6ddde4eb, 0xf4d4b551, 0x83d385c7,
    0x136c9856, 0x646ba8c0, 0xfd62f97a, 0x8a65c9ec, 0x14015c4f, 0x63066cd9, 0xfa0f3d63, 0x8d080df5,
    0x3b6e20c8, 0x4c69105e, 0xd56041e4, 0xa2677172, 0x3c03e4d1, 0x4b04d447, 0xd20d85fd, 0xa50ab56b,
    0x35b5a8fa, 0x42b2986c, 0xdbbbc9d6, 0xacbcf940, 0x32d86ce3, 0x45df5c75, 0xdcd60dcf, 0xabd13d59,
    0x26d930ac, 0x51de003a, 0xc8d75180, 0xbfd06116, 0x21b4f4b5, 0x56b3c423, 0xcfba9599, 0xb8bda50f,
    0x2802b89e, 0x5f058808, 0xc60cd9b2, 0xb10be924, 0x2f6f7c87, 0x58684c11, 0xc1611dab, 0xb6662d3d,
    0x76dc4190, 0x1db7106, 0x98d220bc, 0xefd5102a, 0x71b18589, 0x6b6b51f, 0x9fbfe4a5, 0xe8b8d433,
    0x7807c9a2, 0xf00f934, 0x9609a88e, 0xe10e9818, 0x7f6a0dbb, 0x86d3d2d, 0x91646c97, 0xe6635c01,
    0x6b6b51f4, 0x1c6c6162, 0x856530d8, 0xf262004e, 0x6c0695ed, 0x1b01a57b, 0x8208f4c1, 0xf50fc457,
    0x65b0d9c6, 0x12b7e950, 0x8bbeb8ea, 0xfcb9887c, 0x62dd1ddf, 0x15da2d49, 0x8cd37cf3, 0xfbd44c65,
    0x4db26158, 0x3ab551ce, 0xa3bc0074, 0xd4bb30e2, 0x4adfa541, 0x3dd895d7, 0xa4d1c46d, 0xd3d6f4fb,
    0x4369e96a, 0x346ed9fc, 0xad678846, 0xda60b8d0, 0x44042d73, 0x33031de5, 0xaa0a4c5f, 0xdd0d7cc9,
    0x5005713c, 0x270241aa, 0xbe0b1010, 0xc90c2086, 0x5768b525, 0x206f85b3, 0xb966d409, 0xce61e49f,
    0x5edef90e, 0x29d9c998, 0xb0d09822, 0xc7d7a8b4, 0x59b33d17, 0x2eb40d81, 0xb7bd5c3b, 0xc0ba6cad,
    0xedb88320, 0x9abfb3b6, 0x3b6e20c, 0x74b1d29a, 0xead54739, 0x9dd277af, 0x4db2615, 0x73dc1683,
    0xe3630b12, 0x94643b84, 0xd6d6a3e, 0x7a6a5aa8, 0xe40ecf0b, 0x9309ff9d, 0xa00ae27, 0x7d079eb1,
    0xf00f9344, 0x8708a3d2, 0x1e01f268, 0x6906c2fe, 0xf762575d, 0x806567cb, 0x196c3671, 0x6e6b06e7,
    0xfed41b76, 0x89d32be0, 0x10da7a5a, 0x67dd4acc, 0xf9b9df6f, 0x8ebeeff9, 0x17b7be43, 0x60b08ed5,
    0xd6d6a3e8, 0xa1d1937e, 0x38d8c2c4, 0x4fdff252, 0xd1bb67f1, 0xa6bc5767, 0x3fb506dd, 0x48b2364b,
    0xd80d2bda, 0xaf0a1b4c, 0x36034af6, 0x41047a60, 0xdf60efc3, 0xa867df55, 0x316e8eef, 0x4669be79,
    0xcb61b38c, 0xbc66831a, 0x256fd2a0, 0x5268e236, 0xcc0c7795, 0xbb0b4703, 0x220216b9, 0x5505262f,
    0xc5ba3bbe, 0xb2bd0b28, 0x2bb45a92, 0x5cb36a04, 0xc2d7ffa7, 0xb5d0cf31, 0x2cd99e8b, 0x5bdeae1d,
    0x9b64c2b0, 0xec63f226, 0x756aa39c, 0x26d930a, 0x9c0906a9, 0xeb0e363f, 0x72076785, 0x5005713,
    0x95bf4a82, 0xe2b87a14, 0x7bb12bae, 0xcb61b38, 0x92d28e9b, 0xe5d5be0d, 0x7cdcefb7, 0xbdbdf21,
    0x86d3d2d4, 0xf1d4e242, 0x68ddb3f8, 0x1fda836e, 0x81be16cd, 0xf6b9265b, 0x6fb077e1, 0x18b74777,
    0x88085ae6, 0xff0f6a70, 0x66063bca, 0x11010b5c, 0x8f659eff, 0xf862ae69, 0x616bffd3, 0x166ccf45,
    0xa00ae278, 0xd70dd2ee, 0x4e048354, 0x3903b3c2, 0xa7672661, 0xd06016f7, 0x4969474d, 0x3e6e77db,
    0xaed16a4a, 0xd9d65adc, 0x40df0b66, 0x37d83bf0, 0xa9bcae53, 0xdebb9ec5, 0x47b2cf7f, 0x30b5ffe9,
    0xbdbdf21c, 0xcabac28a, 0x53b39330, 0x24b4a3a6, 0xbad03605, 0xcdd70693, 0x54de5729, 0x23d967bf,
    0xb3667a2e, 0xc4614ab8, 0x5d681b02, 0x2a6f2b94, 0xb40bbe37, 0xc30c8ea1, 0x5a05df1b, 0x2d02ef8d
  ]
  var _0x250abb = 0x0
  var _0x3a6852 = 0x0
  _0x3a6852 = _0xc223b4['XrdsW'](_0x3a6852, -0x1)
  for (
    var _0x8af020 = 0x0, _0xc611eb = _0x9f40d3['length'];
    _0xc223b4['nrgzW'](_0x8af020, _0xc611eb);
    _0x8af020++
  ) {
    _0x250abb = _0x9f40d3['charCodeAt'](_0x8af020)
    _0x3a6852 = _0xc223b4['jwnlL'](
      _0x5ba5d0[_0xc223b4['EkTLg'](0xff, _0x3a6852 ^ _0x250abb)],
      _0xc223b4['ZoeCp'](_0x3a6852, 0x8)
    )
  }
  return (-0x1 ^ _0x3a6852) >>> 0x0
}

function keyjiami(e) {
  return _e(e)['toString']()['toUpperCase']()
}

function _e(e, t) {
  return (
    (e = wordsToBytes(
      (function (e) {
        e = Array.prototype.slice.call(stringToBytes(e), 0)
        var t = bytesToWords(e),
          n = [],
          r = 1732584193,
          a = -271733879,
          o = -1732584194,
          i = 271733878,
          s = -1009589776
        ;(t[(e = 8 * e.length) >> 5] |= 128 << (24 - (e % 32))),
          (t[15 + (((64 + e) >>> 9) << 4)] = e)
        for (var u = 0; u < t.length; u += 16) {
          for (var c = r, l = a, d = o, f = i, p = s, m = 0; m < 80; m++) {
            m < 16
              ? (n[m] = t[u + m])
              : ((h = n[m - 3] ^ n[m - 8] ^ n[m - 14] ^ n[m - 16]), (n[m] = (h << 1) | (h >>> 31)))
            var h =
                ((r << 5) | (r >>> 27)) +
                s +
                (n[m] >>> 0) +
                (m < 20
                  ? 1518500249 + ((a & o) | (~a & i))
                  : m < 40
                  ? 1859775393 + (a ^ o ^ i)
                  : m < 60
                  ? ((a & o) | (a & i) | (o & i)) - 1894007588
                  : (a ^ o ^ i) - 899497514),
              s = i,
              i = o,
              o = (a << 30) | (a >>> 2),
              a = r,
              r = h
          }
          ;(r += c), (a += l), (o += d), (i += f), (s += p)
        }
        return [r, a, o, i, s]
      })(e)
    )),
    bytesToHex(e)
  )
}

function wordsToBytes(e) {
  for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push((e[n >>> 5] >>> (24 - (n % 32))) & 255)
  return t
}

function stringToBytes(e) {
  e = unescape(encodeURIComponent(e))
  for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n))
  return t
}

function bytesToWords(e) {
  for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << (24 - (r % 32))
  return t
}

function bytesToHex(e) {
  for (var t = [], n = 0; n < e.length; n++)
    t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16))
  return t.join('')
}

function getkey(e, t) {
  try {
    for (
      var i = t['toString'](),
        s = e.split('')['reverse']()['join']('')['slice'](0, 5),
        u = (String(t) + '000000')['slice'](0, 13)['slice'](-5),
        c = '',
        l = 0;
      l < s['length'];
      l++
    )
      'PLKft' !== 'PLKft' || (c += ''['concat'](s['charAt'](l))['concat'](u['charAt'](l)))
    c += c['slice'](0, i['length'] - c['length'])
    for (var d = [], f = 0; f < i.length; f++) {
      var p = (i['charCodeAt'](f) ^ c['charCodeAt'](f))['toString'](16)
      d.push(p)
    }
    return d['join']('')
  } catch (e) {
    return null
  }
}

function _zhuanzifu(canshu1, canshu2) {
  for (
    var _0x2ddc2d = canshu2['length'], _0x1117fa = '', ju_i = 0x0;
    ju_i < canshu1['length'];
    ju_i++
  )
    _0x1117fa += String['fromCharCode'](
      canshu1[ju_i]['charCodeAt']() ^ canshu2[ju_i % _0x2ddc2d]['charCodeAt']()
    )
  return _0x1117fa
}
