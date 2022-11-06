"use strict";function _createForOfIteratorHelper(a,b){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!c){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=c.call(a)},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c["return"]||c["return"]()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}for(var $={Utils:Utils()},items=[],fromToken="",excludeIds=["15901","18735","23176","21317","34751","34682","36459","34814","34970","36073"],dataArr=$.Utils.formatToArray(data.arr||data),task=getBaseTaskData(),onceTask=getOnceTaskData(app),i=0;i<dataArr.length;i++){items.length=0;var _data=dataArr[i];taskHandle(_data,excludeIds);var _getTaskParams=getTaskParams(app,i),title=_getTaskParams.title,sceneId=_getTaskParams.sceneId,hd_from_id=_getTaskParams.hd_from_id,tokenTask=getTokenTaskData(app,title,sceneId,hd_from_id);tokenTask.main.item=[].concat(items),task[app].task[i]=_objectSpread({},tokenTask)}$.task=task,"1"==loopTime&&(task[app].task=task[app].task.concat(onceTask)),document.body.outerHTML=JSON.stringify($);function taskHandle(a,b){if(a.ret&&"SUCCESS::\u8C03\u7528\u6210\u529F"==a.ret[0]&&a.data&&a.data.model){var c,d=_createForOfIteratorHelper(a.data.model);try{for(d.s();!(c=d.n()).done;){var k=c.value;if("0"!==k.progress.needTimes)for(var e,f=+k.progress.needTimes&&+k.progress.maxTimes,g=+k.progress.times||0,h=g;h<f;h++)if(e=k.taskParams.deliveryId,!b.includes(e)){var i=k.assets&&k.assets.title||"null",j=k.taskParams.implId.match(/(.*)_/g)+h;if(fromToken=k.taskParams.fromToken,items.push("".concat(e,"-").concat(i," fromToken=").concat(fromToken,"&deliveryId=").concat(e,"&implId=").concat(j)),"Taojb"==app)break}}}catch(a){d.e(a)}finally{d.f()}}else $.error="\u51FA\u9519\u4E86\u8BF7\u68C0\u67E5 Cookie \u662F\u5426\u6B63\u786E\uFF0C\u5982\u679C\u63D0\u793A Session\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u6293\u53D6 Cookie\uFF0C\u5E76\u91CD\u65B0\u6388\u6743\u3002\u4E5F\u53EF\u4EE5\u8FD0\u884C\u666E\u901A\u6A21\u5F0F\u3002 ".concat(JSON.stringify(a))}function getBaseTaskData(){return{1111:{version:"\u6570\u636E\u6700\u540E\u66F4\u65B0\u4E8E:10.24.1",pv:{taobao:"taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.UUVQVPq",tmall:"tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.UUVQVPq",taobaolite:"taobaolite://m.tb.cn/h.UUVQVPq"},main:{taobao:"taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.taobao.com",tmall:"tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fwww.tmall.com%2F",taobaolite:"taobaolite://m.ltao.com/open/index.html?action=ali.open.nav&h5Url=taobaolite%3A%2F%2Fm.ltao.com%2Fhomepage%3F"},home:{taobao:"taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2F2022d11%2Fsinglegame%3Fwh_biz%3Dtm%26sourceType%3Dother%26disableNav%3DYES",tmall:"tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2F2022d11%2Fsinglegame%3Fwh_biz%3Dtm%26sourceType%3Dother%26disableNav%3DYES",taobaolite:"taobaolite://pages.tmall.com/wow/z/hdwk/2022d11/singlegame?wh_biz=tm&sourceType=other&disableNav=YES"},end:{taobao:"taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2F2022d11%2Fsinglegame%3Fwh_biz%3Dtm%26sourceType%3Dother%26disableNav%3DYES",tmall:"tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2F2022d11%2Fsinglegame%3Fwh_biz%3Dtm%26sourceType%3Dother%26disableNav%3DYES",taobaolite:"taobaolite://pages.tmall.com/wow/z/hdwk/2022d11/singlegame?wh_biz=tm&sourceType=other&disableNav=YES"},app:{淘宝:"taobao",天猫:"tmall",淘宝特价版:"taobaolite"},help:{gitter:"https://gitter.im/api/v1/rooms/6170e0576da03739848855d7/chatMessages?lookups%5B%5D=user&includeThreads=false&limit=100",code:"https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/random_mutual_1111.js",link:"https://gitter.im/leecobaby-shortcuts/1111?utm_source=share-link&utm_medium=link&utm_campaign=share-link",lodash:"https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"},code:{getCookieData:"https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/tb/getCookieData.js"},task:[]},Taojb:{version:"\u6570\u636E\u6700\u540E\u66F4\u65B0\u4E8E:12.31.1",image:"https://gitee.com/leecogit/Updater/raw/master/image/tjb.png",pv:{taobao:"taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.UUVQVPq",tmall:"tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.UUVQVPq",taobaolite:"taobaolite://m.tb.cn/h.UUVQVPq"},main:{taobao:"taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.taobao.com",tmall:"tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fwww.tmall.com%2F",taobaolite:"taobaolite://m.ltao.com/open/index.html?action=ali.open.nav&h5Url=taobaolite%3A%2F%2Fm.ltao.com%2Fhomepage%3F"},home:{taobao:"taobao://pages.tmall.com/wow/z/tmtjb/town/home?disableNav=YES",tmall:"tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Ftmtjb%2Ftown%2Fhome%3FdisableNav%3DYES",taobaolite:"taobaolite://pages.tmall.com/wow/z/tmtjb/town/home?disableNav=YES"},end:{taobao:"taobao://pages.tmall.com/wow/z/tmtjb/town/task?wh_biz=tm&disableNav=YES",tmall:"tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Ftmtjb%2Ftown%2Ftask%3Fwh_biz%3Dtm%26disableNav%3DYES",taobaolite:"taobaolite://pages.tmall.com/wow/z/tmtjb/town/task?wh_biz=tm&disableNav=YES"},app:{淘宝:"taobao",天猫:"tmall",淘宝特价版:"taobaolite"},task:[]},FarmSingle:{version:"\u6570\u636E\u6700\u540E\u66F4\u65B0\u4E8E:10.13.1",pv:{taobao:"taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.UUVQVPq",tmall:"tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.UUVQVPq",taobaolite:"taobaolite://m.tb.cn/h.UUVQVPq"},main:{taobao:"taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.taobao.com",tmall:"tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fwww.tmall.com%2F",taobaolite:"taobaolite://m.ltao.com/open/index.html?action=ali.open.nav&h5Url=taobaolite%3A%2F%2Fm.ltao.com%2Fhomepage%3F"},home:{taobao:"taobao://pages.tmall.com/wow/hdwk/act/2020nhj-single?wh_biz=tm&disableNav=YES",tmall:"tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fhdwk%2Fact%2F2020nhj-single%3Fwh_biz%3Dtm%26disableNav%3DYES",taobaolite:"taobaolite://pages.tmall.com/wow/hdwk/act/2020nhj-single?wh_biz=tm&disableNav=YES"},end:{taobao:"taobao://pages.tmall.com/wow/hdwk/act/2020nhj-single?wh_biz=tm&disableNav=YES",tmall:"tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fhdwk%2Fact%2F2020nhj-single%3Fwh_biz%3Dtm%26disableNav%3DYES",taobaolite:"taobaolite://pages.tmall.com/wow/hdwk/act/2020nhj-single?wh_biz=tm&disableNav=YES"},help:{gitter:"https://gitter.im/api/v1/rooms/6170e0576da03739848855d7/chatMessages?lookups%5B%5D=user&includeThreads=false&limit=100",code:"https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/random_mutual_1111.js",link:"https://gitter.im/leecobaby-shortcuts/1111?utm_source=share-link&utm_medium=link&utm_campaign=share-link",lodash:"https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"},code:{getCookieData:"https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/tb/getCookieData-nian.js",getTaskData:"https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/tb/getTaskData.js"},app:{淘宝:"taobao",天猫:"tmall",淘宝特价版:"taobaolite"},task:[]}}}function getOnceTaskData(a){var b={FarmSingle:[{tmall:{title:"\u4E91\u7AEF\u63A8\u9001",type:"other",urlScheme:"HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=".concat(fromToken,"&spm=a217e.1212.tasklist.0&sceneId=971&sourceType=other&hd_from_id=100085&deliveryId="),textEnd:"str1&implId=str2",item:["12359 other_568_911025_12359_0","12585 expo_691_123083_12585_0","31813 cloudsail_691_-540022504_31813_0","15891 other_678_398011_15891_0","17734 cloudsail_431_465305002790001_17734_0","29020 other_5_926037_29020_0"]}},{tmall:{title:"\u505A\u4E0B\u5355\u4EFB\u52A1 - \u4E0D\u4E00\u5B9A\u6709\u5956\u52B1",type:"other",urlScheme:"HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=".concat(fromToken,"&spm=a217e.1212.tasklist.0&sceneId=1143&sourceType=other&hd_from_id=100085&deliveryId="),textEnd:"str1&implId=str2",item:["29660 expo_678_123084_29660_0","29660 expo_678_123084_29660_1"]}},{tmall:{title:"\u5FAE\u535A\u96C6\u80A5\u6599",type:"other",urlScheme:"HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=".concat(fromToken,"&spm=a217e.1212.tasklist.0&sceneId=978&sourceType=other&hd_from_id=100085&deliveryId="),textEnd:"str1&implId=str2",item:["9046 other_0_0_9046_0","8015 other_213_0_8015_0","8016 other_0_105008_8016_0","8950 other_0_98013_8950_0","8950 other_0_98013_8950_1","8950 other_0_98013_8950_2","10386 other_0_100016_10386_0","10385 other_0_100015_10385_0","8855 other_0_68018_8855_0"]}},{tmall:{title:"\u901B\u901B\u652F\u4ED8\u5B9D\u82AD\u82AD\u519C\u573A",type:"other",urlScheme:"HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=".concat(fromToken,"&spm=a217e.1212.tasklist.0&sceneId=2349&sourceType=other&hd_from_id=100004&deliveryId="),textEnd:"str1&implId=str2",item:["20700 other_468_662005_20700_0"]}},{tmall:{title:"\u901B\u901B\u652F\u4ED8\u5B9D\u82AD\u82AD\u519C\u573A \u2461",type:"other",urlScheme:"HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=".concat(fromToken,"&spm=a217e.1212.tasklist.0&sceneId=3671&sourceType=other&hd_from_id=100159&deliveryId="),textEnd:"str1&implId=str2",item:["20700 other_468_662005_20700_0"]}}],Taojb:[{other:{title:"\u505A\u5176\u4ED6\u4EFB\u52A1",type:"other",urlScheme:"HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=".concat(fromToken,"&spm=a217e.xzrwy.1.1&sceneId=2239&sourceType=other&hd_from_id=100089&deliveryId="),textEnd:"str1&implId=str2",item:["17746 other_101_490008_17746_0","17749 other_101_455007_17749_0"]}},{cloud:{title:"\u4E91\u7AEF\u63A8\u9001",type:"cloud",urlScheme:"HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=".concat(fromToken,"&spm=a217e.xzrwy.1.1&sceneId=1946&sourceType=other&hd_from_id=100089&deliveryId="),textEnd:"str1&implId=str2",item:["21275 cloudsail_20_3452898728_21275_0","17542 cloudsail_120_125400501040001_17542_0","14556 tpp_195_339581503446_14556_0"]}},{shop:{title:"\u901B\u5E97\u94FA",type:"shop",urlScheme:"HTTPS://pages.tmall.com/wow/z/tmtjb/tjbshop/coin_shops_task?wh_biz=tm&disableNav=YES&shopId=316875470&wh_dataservice=false&topIds=627271339615,606672835326,625829607411&spm=a217e.17632374&sourceId=",textEnd:"str1",item:["2027551265 0","3173651031 0","767303689 0","439649406 0","3081047815 0","1803764140 0","3055672510 0","304639978 0"]}}],1111:[{tmall:{title:"\u4E91\u7AEF\u63A8\u9001",type:"other",urlScheme:"HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=".concat(fromToken,"&spm=a217e.1212.tasklist.0&sceneId=4276&sourceType=other&hd_from_id=100165&deliveryId="),textEnd:"str1&implId=str2",item:["35483 cloudsail_23_465634000430001_35483_0"]}},{tmall:{title:"\u505A\u590D\u6D3B\u5361\u4EFB\u52A1",type:"other",urlScheme:"HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=".concat(fromToken,"&spm=a217e.1212.tasklist.0&sceneId=4285&sourceType=other&hd_from_id=100165&deliveryId="),textEnd:"str1&implId=str2",item:["34734 other_0_1_34734_0","35041 other_0_1170004_35041_0","36376 other_2_1176006_36376_0","34753 other_30_1_34753_0","36154 other_6_1176078_36154_0","36377 other_2_0_36377_0"]}},{tmall:{title:"\u901B\u5E97\u94FA\u5F97\u60CA\u559C",type:"other",urlScheme:"HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=".concat(fromToken,"&spm=a217e.1212.tasklist.0&sceneId=4296&sourceType=other&hd_from_id=100165&deliveryId="),textEnd:"str1&implId=str2",item:["35484 icpmAd_0_382159996946_35484_0","35561 icpmAd_0_1730_35561_0"]}},{tmall:{title:"\u53BB\u652F\u4ED8\u5B9D\u4EFB\u52A1",type:"other",urlScheme:"HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=".concat(fromToken,"&spm=a217e.1212.tasklist.0&sceneId=4289&sourceType=other&hd_from_id=100165&deliveryId="),textEnd:"str1&implId=str2",item:["34970 other_24_1093043_34970_0"]}},{tmall:{title:"\u5F00\u7BB1\u4EFB\u52A1",type:"other",urlScheme:"HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=".concat(fromToken,"&spm=a217e.1212.tasklist.0&sceneId=4299&sourceType=other&hd_from_id=100165&deliveryId="),textEnd:"str1&implId=str2",item:["34969 cloudsail_25_467344501160001_34969_0"]}},{tmall:{title:"\u652F\u4ED8\u5B9D\u5185\u4EFB\u52A1",type:"other",urlScheme:"HTTPS://",textEnd:"str2",item:["1 pages.tmall.com/wow/z/hdwk/2022d11/singlegame?disableNav=YES&qd_from=zfbbanner&bc_fl_src=zfb_banner&slk_gid=gid_er_er%7Cgid_er_evoke_ui_0%7Cgid_er_af_pop%7Cgid_er_sidebar_1&","1 pages.tmall.com/wow/z/hdwk/2022d11/singlegame?disableNav=YES&qd_from=zfbsurprise&bc_fl_src=zfb_surprise&slk_gid=gid_er_er%7Cgid_er_evoke_ui_0%7Cgid_er_af_pop%7Cgid_er_sidebar_1&"]}}]};return b[a]}function getTokenTaskData(a,b,c,d){var e={FarmSingle:{main:{title:b,type:"other",urlScheme:"HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&spm=a217e.xzrwy.1.1&sceneId=".concat(c,"&sourceType=other&hd_from_id=").concat(d,"&"),textEnd:"str2"}},Taojb:{main:{title:b,type:"other",urlScheme:"HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&spm=a217e.xzrwy.1.1&sceneId=".concat(c,"&sourceType=other&hd_from_id=").concat(d,"&"),textEnd:"str2"}},1111:{main:{title:b,type:"other",urlScheme:"HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&spm=a217e.xzrwy.1.1&sceneId=".concat(c,"&sourceType=other&hd_from_id=").concat(d,"&"),textEnd:"str2"}}};return e[a]}function getTaskParams(a,b){return{FarmSingle:[{title:"\u6DD8\u5B9D\u96C6\u80A5\u6599",sceneId:971,hd_from_id:100085},{title:"\u652F\u4ED8\u5B9D\u4EFB\u52A1",sceneId:972,hd_from_id:100085},{title:"\u95F2\u9C7C\u4EFB\u52A1",sceneId:2488,hd_from_id:100085}],Taojb:[{title:"\u6BCF\u65E5\u4EFB\u52A1",sceneId:2141,hd_from_id:100089}],1111:[{title:"\u8D5A\u55B5\u679C",sceneId:4276,hd_from_id:100165}]}[a][b]}function Utils(){return{randomString:function randomString(b){b=b||32;for(var c="abcdef0123456789",d=c.length,a="",f=0;f<b;f++)a+=c.charAt(Math.floor(Math.random()*d));return a},stringify:function stringify(a){try{if("string"==typeof JSON.stringify(a))return JSON.stringify(a)}catch(b){return a}},randomInt:function randomInt(a,b){return a=Math.ceil(a),b=Math.floor(b),Math.floor(Math.random()*(b-a))+a},formatToArray:function formatToArray(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[];return Array.isArray(a)?a:[a]},filterArray:function filterArray(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[];return a.filter(function(a){return!!a})},getParam:function getParam(a,b){var c=new RegExp("(^|&)"+b+"=([^&]*)(&|$)","i"),d=a.match(c);return null==d?null:decodeURIComponent(d[2])}}}