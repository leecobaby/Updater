"use strict";function _createForOfIteratorHelper(a,b){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!c){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=c.call(a)},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c["return"]||c["return"]()}finally{if(h)throw f}}}}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var asac,$={},items=[],simpleItems=[];$.Utils=Utils();var dataArr=$.Utils.formatToArray(data.arr||data),task=getBaseTaskData();taskHandle(dataArr[0]),simpleItems.unshift({title:"\u6BCF\u65E5\u7B7E\u5230",point:"x",url:"https://service-daubfate-1251309300.gz.apigw.tencentcs.com/release/api?activityId=".concat(app,"&tk=").concat(tk,"&api=mtop.koubei.interactioncenter.sign.component.recordsignin&app=ele&data=").concat(encodeURIComponent(JSON.stringify({bizScene:"svip_sign_scene",latitude:"28.754654",asac:"2A227051WYEVFLNT5WTFAM",unionId:"o_PVDuCKkboOwNx_9xFOO2OM8f3c",longitude:"118.639297"})))}),simpleItems.push.apply(simpleItems,_toConsumableArray(getSimpleTaskPutData())),$.coupon={couponUrl1:"eleme://web?url=".concat(encodeURIComponent("https://tb.ele.me/wow/alsc/mod/d5275789de46503ba0908a9d?e=1&open_type=miniapp&inviterId=74f86c&actId=1&_ltracker_f=hjb_app_grzx&chInfo=ch_app_chsub_Photo5")),couponUrl2:"eleme://web?url=".concat(encodeURIComponent("https://m.tb.cn/h.Ue8jS7Q"))},$.simpleTask=[].concat(simpleItems),document.body.outerHTML=JSON.stringify($);function taskHandle(a){if(a.ret&&"SUCCESS::\u8C03\u7528\u6210\u529F"==a.ret[0]&&a.data&&a.data.data&&a.data.data[224166]&&a.data.data[224166].data){var b,c=a.data.data[224166].data,d=_createForOfIteratorHelper(c);try{for(d.s();!(b=d.n()).done;){var e=b.value,f=e.missionDefId,g=e.missionCollectionId,h=e.missionType,i=e.missionXId,j=e.pageSpm,k=e.receiveStatus,l=e.showTitle,m=e.costFoodiePea;asac=e.asac,"TORECEIVE"===k&&simpleItems.push({title:l,point:m,url:"PAGEVIEW"===h?"https://service-daubfate-1251309300.gz.apigw.tencentcs.com/release/api?activityId=".concat(app,"&tk=").concat(tk,"&api=mtop.tmall.kangaroo.core.service.route.pagerecommendsmallbizdece&app=ele&data=").concat(encodeURIComponent(JSON.stringify({cookie:"",device:"phone",backupParams:"device",url:"https://tb.ele.me/wow/alsc/mod/156e0df0c951c793ab121f2e?missioncollectid=".concat(g,"&missionid=").concat(f,"&taskfrom=").concat(j,"&bizscene=svip&taskpageviewasac=2A21119A45TTVAEXP40N7N&miniAppFrom=elmc&latitude=28.754654&longitude=118.639297&spm-pre=a2f6g.14291182.Play.2&spm=a2ogi.bx105771.tasklayer_scantask.0&preloadId=alsc-mod_1668683305384_37B7DQ19BNE1AP"),location:"[{\"latitude\":28.754654,\"longitude\":118.639297,\"locationType\":\"realTime\"}]"}))):"https://service-daubfate-1251309300.gz.apigw.tencentcs.com/release/api?activityId=".concat(app,"&tk=").concat(tk,"&api=mtop.alibaba.svip.langrisser.act&app=ele&data=").concat(encodeURIComponent(JSON.stringify({callSource:"biz_code_main",latitude:"28.754654",longitude:"118.639297",resId:"223166",extra:"{\"missionDefId\":".concat(f,",\"missionCollectionId\":").concat(g,",\"missionType\":\"").concat(h,"\",\"missionXId\":\"").concat(i,"\",\"source\":\"mtop\"}")}))),url2:"PAGEVIEW"===h?"eleme://web?url=".concat(encodeURIComponent("https://tb.ele.me/wow/alsc/mod/156e0df0c951c793ab121f2e?missionid=".concat(f,"&missioncollectid=").concat(g,"&taskfrom=").concat(j,"&bizscene=svip&taskpageviewasac=2A21119A45TTVAEXP40N7N&spm-pre=a2f6g.14291182.Play.2&spm=a2ogi.bx105771.tasklayer_scantask.0&preloadId=alsc-mod_1668683305384_37B7DQ19BNE1AP"))):void 0})}}catch(a){d.e(a)}finally{d.f()}}else $.error="\u51FA\u9519\u4E86\u8BF7\u68C0\u67E5 Cookie \u662F\u5426\u6B63\u786E\u4E14\u672A\u8FC7\u671F\uFF0C\u4E5F\u53EF\u4EE5\u8FD0\u884C\u666E\u901A\u6A21\u5F0F ".concat(JSON.stringify(a))}function getBaseTaskData(){return{ele_dou:{version:"\u6570\u636E\u6700\u540E\u66F4\u65B0\u4E8E:7.25.1",pv:{taobao:"taobao://huodong.m.taobao.com/act/snipcodeupdate.html?_ariver_appid=8251537&x_object_type=miniapp&x_miniapp_id=8251537",alipay:"alipays://platformapi/startapp?appId=2021001110676437&page=pages/my/index",eleme:"eleme://userCenter"},main:{taobao:"taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.taobao.com",alipay:"alipays://platformapi/startapp?appId=20000001",eleme:"eleme://userCenter"},home:{taobao:"taobao://m.taobao.com/tbopen/index.html?h5Url=https://h5.ele.me/svip/task-list",alipay:"alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Fh5.ele.me%2Fsvip%2Ftask-list",eleme:"eleme://web?url=https%3A%2F%2Fh5.ele.me%2Fsvip%2Ftask-list"},end:{taobao:"taobao://m.taobao.com/tbopen/index.html?h5Url=https://h5.ele.me/svip/task-list",alipay:"alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Fh5.ele.me%2Fsvip%2Ftask-list",eleme:"eleme://web?url=https%3A%2F%2Fh5.ele.me%2Fsvip%2Ftask-list"},help:{gitter:"https://gitter.im/api/v1/rooms/6170e0576da03739848855d7/chatMessages?lookups%5B%5D=user&includeThreads=false&limit=100",code:"https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/random_mutual_1111.js",link:"https://gitter.im/leecobaby-shortcuts/1111?utm_source=share-link&utm_medium=link&utm_campaign=share-link",lodash:"https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"},code:{getCookieData:"https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/tb/getCookieData-nian.js",getTaskData:"https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/tb/getTaskData.js"},app:{淘宝:"taobao",支付宝:"alipay",饿了么:"eleme"},task:[{main:{title:"\u901B\u901B\u4EFB\u52A1",type:"other",activateUrl:"https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params%5B%5D=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:\u5360\u4F4D\u7B261,%22missionCollectionId%22:\u5360\u4F4D\u7B262,%22missionType%22:%22\u5360\u4F4D\u7B263%22%7D%7D&bizCode=biz_code_main&longitude=121.35623168945312&latitude=41.17439270019531&o2o_page_id=xc539zecsy89e96dwzdebha2634lgqf6_1623400808977",taskUrl:"https://tb.ele.me/wow/alsc/mod/156e0df0c951c793ab121f2e?missionid=\u5360\u4F4D\u7B261&missioncollectid=\u5360\u4F4D\u7B262&taskfrom=\u5360\u4F4D\u7B264&bizscene=svip&taskpageviewasac=2A21119A45TTVAEXP40N7N&spm=a2ogi.chihuo_home_tasklist.tasklayer_scantask.3",textEnd:"str1"}}]}}}function getOnceTaskData(a){return{ele_dou:[{eleme:{title:"\u4E91\u7AEF\u63A8\u9001",type:"other",activateUrl:"https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params%5B%5D=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:\u5360\u4F4D\u7B261,%22missionCollectionId%22:\u5360\u4F4D\u7B262,%22missionType%22:%22\u5360\u4F4D\u7B263%22%7D%7D&bizCode=biz_code_main&longitude=121.35623168945312&latitude=41.17439270019531&o2o_page_id=xc539zecsy89e96dwzdebha2634lgqf6_1623400808977",taskUrl:"https://tb.ele.me/wow/alsc/mod/156e0df0c951c793ab121f2e?missionid=\u5360\u4F4D\u7B261&missioncollectid=\u5360\u4F4D\u7B262&taskfrom=\u5360\u4F4D\u7B264&bizscene=svip&taskpageviewasac=2A21119A45TTVAEXP40N7N&spm=a2ogi.chihuo_home_tasklist.tasklayer_scantask.3",textEnd:"str1",item:["3780001 36 PAGEVIEW a2ogi.15063444","3062001 95 PAGEVIEW page.spm","4506001 95 PAGEVIEW page.spm","6130001 95 PAGEVIEW a2ogi.15063444"]}}]}[a]}function getSimpleTaskPutData(){return[{missionDefId:4242001,missionCollectionId:36,costFoodiePea:5,missionType:"SIMPLESIGNIN",pageSpm:""},{missionDefId:6280001,missionCollectionId:36,costFoodiePea:5,missionType:"SIMPLESIGNIN",pageSpm:""},{missionDefId:4182001,missionCollectionId:36,costFoodiePea:5,missionType:"SIMPLESIGNIN",pageSpm:""},{missionDefId:4648001,missionCollectionId:36,costFoodiePea:5,missionType:"SIMPLESIGNIN",pageSpm:""},{missionDefId:3780001,missionCollectionId:36,costFoodiePea:5,missionType:"PAGEVIEW",pageSpm:"a2ogi.15063444"},{missionDefId:3062001,missionCollectionId:95,costFoodiePea:5,missionType:"PAGEVIEW",pageSpm:"page.spm"},{missionDefId:4506001,missionCollectionId:95,costFoodiePea:5,missionType:"PAGEVIEW",pageSpm:"page.spm"},{missionDefId:6130001,missionCollectionId:95,costFoodiePea:5,missionType:"PAGEVIEW",pageSpm:"a2ogi.15063444"}].map(function(a){var b=a.costFoodiePea,c=a.missionDefId,d=a.missionCollectionId,e=a.missionType,f=a.pageSpm,g=a.missionXId;return"PAGEVIEW"===e?{title:"\u4E91\u7AEF\u63A8\u9001 - \u9690\u85CF\u4EFB\u52A1",point:b,oldTask:!0,url:"eleme://web?url=".concat(encodeURIComponent("https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params%5B%5D=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:".concat(c,",%22missionCollectionId%22:").concat(d,",%22missionType%22:%22").concat(e,"%22%7D%7D&bizCode=biz_code_main&longitude=121.35623168945312&latitude=41.17439270019531&o2o_page_id=xc539zecsy89e96dwzdebha2634lgqf6_1623400808977"))),url2:"eleme://web?url=".concat(encodeURIComponent("https://tb.ele.me/wow/alsc/mod/156e0df0c951c793ab121f2e?missionid=".concat(c,"&missioncollectid=").concat(d,"&taskfrom=").concat(f,"&bizscene=svip&taskpageviewasac=2A21119A45TTVAEXP40N7N&spm=a2ogi.chihuo_home_tasklist.tasklayer_scantask.3")))}:{title:"\u4E91\u7AEF\u63A8\u9001 - \u9690\u85CF\u4EFB\u52A1",point:b,url:"https://service-daubfate-1251309300.gz.apigw.tencentcs.com/release/api?activityId=".concat(app,"&tk=").concat(tk,"&api=mtop.alibaba.svip.langrisser.act&app=ele&data=").concat(encodeURIComponent(JSON.stringify({callSource:"biz_code_main",latitude:"28.754654",longitude:"118.639297",resId:"223166",extra:"{\"missionDefId\":".concat(c,",\"missionCollectionId\":").concat(d,",\"missionType\":\"SIMPLESIGNIN\",\"missionXId\":\"").concat(g,"\",\"source\":\"mtop\"}")})))}})}function Utils(){return{randomString:function randomString(b){b=b||32;for(var c="abcdef0123456789",d=c.length,a="",f=0;f<b;f++)a+=c.charAt(Math.floor(Math.random()*d));return a},stringify:function stringify(a){try{if("string"==typeof JSON.stringify(a))return JSON.stringify(a)}catch(b){return a}},randomInt:function randomInt(a,b){return a=Math.ceil(a),b=Math.floor(b),Math.floor(Math.random()*(b-a))+a},formatToArray:function formatToArray(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[];return Array.isArray(a)?a:[a]},filterArray:function filterArray(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[];return a.filter(function(a){return!!a})},getParam:function getParam(a,b){var c=new RegExp("(^|&)"+b+"=([^&]*)(&|$)","i"),d=a.match(c);return null==d?null:decodeURIComponent(d[2])}}}