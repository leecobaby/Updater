"use strict";$.Utils=Utils();function init(){$.inviteList?($.inviteList=Array.isArray($.inviteList)?$.inviteList:[$.inviteList],$.inviteList=$.inviteList.filter(function(a){return""!==a})):$.inviteList=[],$.rebateCode=[],$.taskStep=1,$.uuid=$.Utils.randomString(40),$.UA="jdapp;iPhone;10.2.0;13.1.2;".concat($.uuid,";M/5.0;network/wifi;ADID/;model/iPhone8,1;addressid/2308460611;appBuild/167853;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;"),$.message="\u672C\u6307\u4EE4\u4F5C\u4E3A\u81EA\u52A8\u5316\u65B9\u6848\u5F00\u6E90\u5206\u4EAB\uFF0C\u5E76\u4E0D\u4FDD\u8BC1\u4ED6\u5E26\u6765\u7684\u4EFB\u4F55\u526F\u4F5C\u7528\uFF0C\u4EFB\u4F55\u526F\u4F5C\u7528\u8BF7\u81EA\u884C\u8D1F\u8D23\uFF0C\u5982\u4E0D\u540C\u610F\u8BF7\u505C\u6B62\u4F7F\u7528\uFF01",document.write(JSON.stringify($))}function cloudTip(){$.message="\u6307\u4EE4\u5DF2\u8FD0\u884C\u5B8C\u6BD5\uFF01\n\u5176\u4ED6\u529F\u80FD\u548C\u4EFB\u52A1\u6B63\u5728\u5F00\u53D1\u4E2D\uFF0C\u4E0A\u7EBF\u5C06\u81EA\u52A8\u63A8\u9001\u5230\u6307\u4EE4\u4E2D\uFF0C\u65E0\u9700\u4EFB\u4F55\u64CD\u4F5C~",document.write(JSON.stringify($))}function JingDongBean(){return $.callback="Func.request",void takeRequest("JingDongBean")}function JingDongStore(){return $.callback="Func.request",void takeRequest("JingDongStore")}function JingDongTurn(){return $.callback="Func.request",void takeRequest("JingDongTurn")}function JDFlashSale(){return $.callback="Func.request",void takeRequest("JDFlashSale")}function FlashSaleDivide(){return $.callback="Func.request",void takeRequest("FlashSaleDivide")}function JingDongCash(){return $.callback="Func.request",void takeRequest("JingDongCash")}function JDMagicCube(){return $.callback="Func.request",void takeRequest("JDMagicCube")}function JingDongSubsidy(){return $.callback="Func.request",void takeRequest("JingDongSubsidy")}function JingDongGetCash(){return $.callback="Func.request",void takeRequest("JingDongGetCash")}function JingDongShake(){return $.callback="Func.request",void takeRequest("JingDongShake")}function JDSecKilling(){return $.callback="Func.request",void takeRequest("JDSecKilling")}function friendListInitForFarm(){return $.callback="Func.request",void takeRequest("friendListInitForFarm")}function help(){document.write(JSON.stringify($))}function doNHSign(){switch($.to="Func.logicHandler",$.call=["doNHSign"],$.taskStep++){case 1:$.self.show=!1,getNHSignInfo();break;default:$.to="",$.call.pop(),$.taskStep=1,$.message="test",document.write(JSON.stringify($));}}function getNHSignInfo(){return"getNHSignInfo"==$.call[$.call.length-1]||$.call.push("getNHSignInfo"),$.callback="Func.request",void takeRequest("getNHSignInfo")}function takeRequest(a){var b,c=(null===(b=$.signList)||void 0===b?void 0:b.shift())||{},d=c.log,e=c.random,f="",g="",h="";"JingDongBean"===a?(g="https://api.m.jd.com/client.action",f="functionId=signBeanIndex&appid=ld",h=getRequest(g,f)):"JingDongStore"===a?(g="https://api.m.jd.com/api?appid=jdsupermarket&functionId=smtg_sign&clientVersion=8.0.0&client=m&body=%7B%7D",headers={Origin:"https://jdsupermarket.jd.com"},h=getRequest(g,f,"GET",headers)):"JingDongTurn"===a?(g="https://api.m.jd.com/client.action?functionId=babelGetLottery",f="body=%7B%22enAwardK%22%3A%2295d235f2a09578c6613a1a029b26d12d%22%2C%22riskParam%22%3A%7B%7D%7D&client=wh5",h=getRequest(g,f)):"JDFlashSale"===a?(g="https://api.m.jd.com/client.action?functionId=partitionJdSgin",f="body=%7B%22version%22%3A%22v2%22%7D&client=apple&clientVersion=9.0.8&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&sign=6768e2cf625427615dd89649dd367d41&st=1597248593305&sv=121",h=getRequest(g,f)):"FlashSaleDivide"===a?(g="https://api.m.jd.com/client.action?functionId=partitionJdShare",f="body=%7B%22version%22%3A%22v2%22%7D&client=apple&clientVersion=9.0.8&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&sign=49baa3b3899b02bbf06cdf41fe191986&st=1597682588351&sv=111",h=getRequest(g,f)):"JingDongCash"===a?(g="https://api.m.jd.com/client.action?functionId=ccSignInNew",f="body=%7B%22pageClickKey%22%3A%22CouponCenter%22%2C%22eid%22%3A%22O5X6JYMZTXIEX4VBCBWEM5PTIZV6HXH7M3AI75EABM5GBZYVQKRGQJ5A2PPO5PSELSRMI72SYF4KTCB4NIU6AZQ3O6C3J7ZVEP3RVDFEBKVN2RER2GTQ%22%2C%22shshshfpb%22%3A%22v1%5C%2FzMYRjEWKgYe%2BUiNwEvaVlrHBQGVwqLx4CsS9PH1s0s0Vs9AWk%2B7vr9KSHh3BQd5NTukznDTZnd75xHzonHnw%3D%3D%22%2C%22childActivityUrl%22%3A%22openapp.jdmobile%253a%252f%252fvirtual%253fparams%253d%257b%255c%2522category%255c%2522%253a%255c%2522jump%255c%2522%252c%255c%2522des%255c%2522%253a%255c%2522couponCenter%255c%2522%257d%22%2C%22monitorSource%22%3A%22cc_sign_ios_index_config%22%7D&client=apple&clientVersion=8.5.0&d_brand=apple&d_model=iPhone8%2C2&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&scope=11&screen=1242%2A2208&sign=1cce8f76d53fc6093b45a466e93044da&st=1581084035269&sv=102",h=getRequest(g,f)):"JDMagicCube"===a?(g="https://api.m.jd.com/client.action?functionId=getNewsInteractionInfo&appid=smfe&body=".concat(encodeURIComponent("{\"sign\":2}")),h=getRequest(g,f,"GET")):"JingDongSubsidy"===a?(g="https://ms.jr.jd.com/gw/generic/uc/h5/m/signIn7",headers={Referer:"https://active.jd.com/forever/cashback/index"},h=getRequest(g,f,"GET",headers)):"JingDongGetCash"===a?(g="https://api.m.jd.com/client.action?functionId=cash_sign&body=%7B%22remind%22%3A0%2C%22inviteCode%22%3A%22%22%2C%22type%22%3A0%2C%22breakReward%22%3A0%7D&client=apple&clientVersion=9.0.8&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&sign=7e2f8bcec13978a691567257af4fdce9&st=1596954745073&sv=111",h=getRequest(g,f,"GET")):"JingDongShake"===a?(g="https://api.m.jd.com/client.action?appid=vip_h5&functionId=vvipclub_shaking",h=getRequest(g,f,"GET")):"JDSecKilling"===a?(g="https://api.m.jd.com/client.action",headers={Origin:"https://h5.m.jd.com"},f="functionId=homePageV2&appid=SecKill2020",h=getRequest(g,f,"POST",headers)):"JDSecKillingNext"===a?(g="https://api.m.jd.com/client.action",headers={Origin:"https://h5.m.jd.com"},f="functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22".concat($.taskType.projectId,"%22%2C%22encryptAssignmentId%22%3A%22").concat($.taskType.taskId,"%22%2C%22completionFlag%22%3Atrue%7D&client=wh5&appid=SecKill2020"),h=getRequest(g,f,"POST",headers)):"getNHSignInfo"===a?(g="https://prodev.m.jd.com/mall/active/fARfxZh3zdMqs4tkFBhpqaQKTGA/index.html",h=getRequest(g,f,"GET")):"wxTaskDetail"===a?(f="functionId=funny_getTaskDetail&body={\"appSign\":\"2\",\"channel\":1,\"shopSign\":\"\"}&client=wh5&clientVersion=1.0.0",h=getRequest("funny_getTaskDetail",f)):"zoo_shopLotteryInfo"===a?(f="functionId=zoo_shopLotteryInfo&body={\"shopSign\":\"".concat($.shopSign,"\"}&client=wh5&clientVersion=1.0.0"),h=getRequest("zoo_shopLotteryInfo",f)):"zoo_bdCollectScore"===a?(f=getPostBody(a),h=getRequest("zoo_bdCollectScore",f)):"qryCompositeMaterials"===a?(f="functionId=qryCompositeMaterials&body={\"qryParam\":\"[{\\\"type\\\":\\\"advertGroup\\\",\\\"mapTo\\\":\\\"resultData\\\",\\\"id\\\":\\\"05371960\\\"}]\",\"activityId\":\"2s7hhSTbhMgxpGoa9JDnbDzJTaBB\",\"pageId\":\"\",\"reqSrc\":\"\",\"applyKey\":\"jd_star\"}&client=wh5&clientVersion=1.0.0",h=getRequest("qryCompositeMaterials",f)):"zoo_boxShopLottery"===a?(f="functionId=zoo_boxShopLottery&body={\"shopSign\":\"".concat($.shopSign,"\"}&client=wh5&clientVersion=1.0.0"),h=getRequest("zoo_boxShopLottery",f)):"zoo_wishShopLottery"===a?(f="functionId=zoo_wishShopLottery&body={\"shopSign\":\"".concat($.shopSign,"\"}&client=wh5&clientVersion=1.0.0"),h=getRequest("zoo_boxShopLottery",f)):"zoo_myMap"===a?(f="functionId=zoo_myMap&body={}&client=wh5&clientVersion=1.0.0",h=getRequest("zoo_myMap",f)):"zoo_getWelfareScore"===a?(f=getPostBody(a),h=getRequest("zoo_getWelfareScore",f)):"jdjrTaskDetail"===a?(f="reqData={\"eid\":\"\",\"sdkToken\":\"jdd014JYKVE2S6UEEIWPKA4B5ZKBS4N6Y6X5GX2NXL4IYUMHKF3EEVK52RQHBYXRZ67XWQF5N7XB6Y2YKYRTGQW4GV5OFGPDPFP3MZINWG2A01234567\"}",h=getRequest("listTask",f)):"jdjrAcceptTask"===a?(f="reqData={\"eid\":\"\",\"sdkToken\":\"jdd014JYKVE2S6UEEIWPKA4B5ZKBS4N6Y6X5GX2NXL4IYUMHKF3EEVK52RQHBYXRZ67XWQF5N7XB6Y2YKYRTGQW4GV5OFGPDPFP3MZINWG2A01234567\",\"id\":\"".concat($.taskId,"\"}"),h=getRequest("acceptTask",f)):"add_car"===a?(f="functionId=funny_collectScore&body={\"taskId\":".concat($.taskId,",\"taskToken\":\"").concat($.taskToken,"\",\"ss\":\"{\\\"extraData\\\":{\\\"log\\\":\\\"").concat(d,"\\\",\\\"sceneid\\\":\\\"HWJhPageh5\\\"},\\\"secretp\\\":\\\"").concat($.secretp,"\\\",\\\"random\\\":\\\"").concat(e,"\\\"}\",\"actionType\":1}&client=wh5&clientVersion=1.0.0&uuid=c67093f5dd58d33fc5305cdc61e46a9741e05c5b&appid=o2_act"),h=getRequest("funny_collectScore",f)):($.error="takeRequest \u9519\u8BEF".concat(a),void 0);$.request=h,document.write(JSON.stringify($))}function getRequest(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:"POST",d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{},e={Accept:"application/json, text/plain, */*",Origin:d.Origin||"https://h5.m.jd.com","Accept-Encoding":"gzip, deflate, br","Cache-Control":"no-cache",Cookie:$.cookie,"Content-Type":"application/x-www-form-urlencoded",Host:"api.m.jd.com",Connection:"keep-alive","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site","User-Agent":$.UA||"jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",Referer:d.Referer||"https://home.m.jd.com/myJd/newhome.action","Accept-Language":"zh-cn"};return{url:a,method:c,headers:e,body:b}}function getPostBody(a){var b="";return b="helpInvite"===a?"functionId=funny_collectScore&body=".concat(JSON.stringify({taskId:2,inviteId:$.inviteId,actionType:1,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"pkHelp"===a?"functionId=zoo_pk_assistGroup&body=".concat(JSON.stringify({confirmFlag:1,inviteId:$.pkInviteId,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"zoo_collectProduceScore"===a?"functionId=zoo_collectProduceScore&body=".concat(JSON.stringify({ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"zoo_getWelfareScore"===a?"functionId=zoo_getWelfareScore&body=".concat(JSON.stringify({type:2,currentScence:$.currentScence,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"add_car"===a?"functionId=funny_collectScore&body=".concat(JSON.stringify({taskId:$.taskId,taskToken:$.taskToken,actionType:1,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"functionId=".concat(a,"&body=").concat(JSON.stringify({taskId:$.oneTask.taskId,actionType:1,taskToken:$.oneActivityInfo.taskToken,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"),b}function dealReturn(a,b){var c,d,e,f,g,h,i,j,k,l;b||($.error="\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\uFF0C\u68C0\u67E5\u8D26\u53F7cookie\u662F\u5426\u8FC7\u671F\u6216\u9519\u8BEF");var m=$.Utils.stringify(b);switch(a){case"JingDongBean":if(3===b.code)$.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u5931\u8D25, \u539F\u56E0: Cookie\u5931\u6548\u203C\uFE0F";else if(m.match(/跳转至拼图/))$.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u5931\u8D25, \u9700\u8981\u62FC\u56FE\u9A8C\u8BC1 \u26A0\uFE0F";else if(!m.match(/\"status\":\"?1\"?/))$.message=m.match(/(已签到|新人签到)/)?"\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u5931\u8D25, \u539F\u56E0: \u5DF2\u7B7E\u8FC7 \u26A0\uFE0F":b.match(/人数较多|S101/)?"\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u5931\u8D25, \u7B7E\u5230\u4EBA\u6570\u8F83\u591A \u26A0\uFE0F":"\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u5931\u8D25, \u539F\u56E0: \u672A\u77E5 \u26A0\uFE0F";else if(m.match(/dailyAward/)){var n,o,p;$.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u6210\u529F, \u660E\u7EC6: "+(null===(n=b.data)||void 0===n||null===(o=n.dailyAward)||void 0===o||null===(p=o.beanAward)||void 0===p?void 0:p.beanCount)+"\u4EAC\u8C46 \uD83D\uDC36"}else if(m.match(/continuityAward/)){var q,r,s;$.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u6210\u529F, \u660E\u7EC6: "+(null===(q=b.data)||void 0===q||null===(r=q.continuityAward)||void 0===r||null===(s=r.beanAward)||void 0===s?void 0:s.beanCount)+"\u4EAC\u8C46 \uD83D\uDC36"}else if(m.match(/新人签到/)){var L=m.match(/beanCount\":\"(\d+)\".+今天/);$.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u6210\u529F, \u660E\u7EC6: "+(L?L[1]:"\u65E0")+"\u4EAC\u8C46 \uD83D\uDC36"}else $.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u6210\u529F, \u660E\u7EC6: \u65E0\u4EAC\u8C46 \uD83D\uDC36";break;case"JingDongStore":if(!0===(null===(c=b.data)||void 0===c?void 0:c.success)&&0===(null===(d=b.data)||void 0===d?void 0:d.bizCode)){var M=b.data.result.jdBeanCount||0;$.message="\u4EAC\u4E1C\u5546\u57CE-\u8D85\u5E02: \u6210\u529F, \u660E\u7EC6: ".concat(M||"\u65E0","\u4EAC\u8C46 \uD83D\uDC36")}else{b.data||(b.data={});var N=811==b.data.bizCode?"\u5DF2\u7B7E\u8FC7":300==b.data.bizCode?"Cookie\u5931\u6548":"".concat(b.data.bizMsg||"\u672A\u77E5");$.message="\u4EAC\u4E1C\u5546\u57CE-\u8D85\u5E02: \u5931\u8D25, \u539F\u56E0: ".concat(N).concat(300==b.data.bizCode?"\u203C\uFE0F":" \u26A0\uFE0F")}break;case"JingDongTurn":if(3==b.code)$.message="\u4EAC\u4E1C\u5546\u57CE-\u8F6C\u76D8: \u5931\u8D25, \u539F\u56E0: Cookie\u5931\u6548\u203C\uFE0F";else if(m.match(/(\"T216\"|活动结束)/))$.message="\u4EAC\u4E1C\u5546\u57CE-\u8F6C\u76D8: \u5931\u8D25, \u539F\u56E0: \u6D3B\u52A8\u7ED3\u675F \u26A0\uFE0F";else if(m.match(/\d+京豆/)){var O=b.prizeName&&b.prizeName.split(/(\d+)/)[1]||0;$.message+="\u4EAC\u4E1C\u5546\u57CE-\u8F6C\u76D8: \u6210\u529F, \u660E\u7EC6: ".concat(O||"\u65E0","\u4EAC\u8C46 \uD83D\uDC36")}else m.match(/未中奖|擦肩而过/)?$.message+="\u4EAC\u4E1C\u5546\u57CE-\u8F6C\u76D8: \u6210\u529F, \u72B6\u6001: \u672A\u4E2D\u5956 \uD83D\uDC36":$.message=m.match(/(机会已用完|次数为0)/)?"\u4EAC\u4E1C\u5546\u57CE-\u8F6C\u76D8: \u5931\u8D25, \u539F\u56E0: \u5DF2\u8F6C\u8FC7 \u26A0\uFE0F":m.match(/(T210|密码)/)?"\u4EAC\u4E1C\u5546\u57CE-\u8F6C\u76D8: \u5931\u8D25, \u539F\u56E0: \u65E0\u652F\u4ED8\u5BC6\u7801 \u26A0\uFE0F":"\u4EAC\u4E1C\u5546\u57CE-\u8F6C\u76D8: \u5931\u8D25, \u539F\u56E0: \u672A\u77E5 \u26A0\uFE0F";break;case"JDFlashSale":if(0==(null===(e=b.result)||void 0===e?void 0:e.code)){var P=b.result.jdBeanNum||0;$.message="\u4EAC\u4E1C\u5546\u57CE-\u95EA\u8D2D: \u6210\u529F, \u660E\u7EC6: "+(P||"\u65E0")+"\u4EAC\u8C46 \uD83D\uDC36"}else if(m.match(/(已签到|已领取|\"2005\")/))$.message="\u4EAC\u4E1C\u5546\u57CE-\u95EA\u8D2D: \u5931\u8D25, \u539F\u56E0: \u5DF2\u7B7E\u8FC7 \u26A0\uFE0F";else{if(m.match(/不存在|已结束|\"2008\"|\"3001\"/))return;if(m.match(/(\"code\":\"3\"|\"1003\")/))$.message="\u4EAC\u4E1C\u5546\u57CE-\u95EA\u8D2D: \u5931\u8D25, \u539F\u56E0: Cookie\u5931\u6548\u203C\uFE0F";else{var Q=m.match(/\"msg\":\"([\u4e00-\u9fa5].+?)\"/);$.message="\u4EAC\u4E1C\u5546\u57CE-\u95EA\u8D2D: \u5931\u8D25, ".concat(Q?Q[1]:"\u539F\u56E0: \u672A\u77E5"," \u26A0\uFE0F")}}break;case"FlashSaleDivide":if(0==(null===(f=b.result)||void 0===f?void 0:f.code)){var R=b.result.jdBeanNum||0;$.message="\u4EAC\u4E1C\u95EA\u8D2D-\u74DC\u5206: \u6210\u529F, \u660E\u7EC6: "+(R||"\u65E0")+"\u4EAC\u8C46 \uD83D\uDC36"}else if(m.match(/已参与|已领取|\"2006\"/))$.message="\u4EAC\u4E1C\u95EA\u8D2D-\u74DC\u5206: \u5931\u8D25, \u539F\u56E0: \u5DF2\u74DC\u5206 \u26A0\uFE0F";else if(m.match(/不存在|已结束|未开始|\"2008\"|\"2012\"/))$.message="\u4EAC\u4E1C\u95EA\u8D2D-\u74DC\u5206: \u5931\u8D25, \u539F\u56E0: \u6D3B\u52A8\u5DF2\u7ED3\u675F \u26A0\uFE0F";else if(m.match(/\"code\":\"1003\"|未获取/))$.message="\u4EAC\u4E1C\u95EA\u8D2D-\u74DC\u5206: \u5931\u8D25, \u539F\u56E0: Cookie\u5931\u6548\u203C\uFE0F";else{var S=m.match(/\"msg\":\"([\u4e00-\u9fa5].+?)\"/);$.message="\u4EAC\u4E1C\u95EA\u8D2D-\u74DC\u5206: \u5931\u8D25, ".concat(S?S[1]:"\u539F\u56E0: \u672A\u77E5"," \u26A0\uFE0F")}break;case"JingDongCash":if("0"==b.busiCode){var T=b.result.signResult.signData.amount||0;$.message="\u4EAC\u4E1C\u73B0\u91D1-\u7EA2\u5305: \u6210\u529F, \u660E\u7EC6: ".concat(T||"\u65E0","\u7EA2\u5305 \uD83E\uDDE7")}else if(m.match(/(\"busiCode\":\"1002\"|完成签到)/))$.message="\u4EAC\u4E1C\u73B0\u91D1-\u7EA2\u5305: \u5931\u8D25, \u539F\u56E0: \u5DF2\u7B7E\u8FC7 \u26A0\uFE0F";else if(m.match(/(不存在|已结束)/))$.message="\u4EAC\u4E1C\u73B0\u91D1-\u7EA2\u5305: \u5931\u8D25, \u539F\u56E0: \u6D3B\u52A8\u5DF2\u7ED3\u675F \u26A0\uFE0F";else if(m.match(/(\"busiCode\":\"3\"|未登录)/))$.message="\u4EAC\u4E1C\u73B0\u91D1-\u7EA2\u5305: \u5931\u8D25, \u539F\u56E0: Cookie\u5931\u6548\u203C\uFE0F";else{var U=m.split(/\"msg\":\"([\u4e00-\u9fa5].+?)\"/)[1];$.message="\u4EAC\u4E1C\u73B0\u91D1-\u7EA2\u5305: \u5931\u8D25, ".concat(U||"\u539F\u56E0: \u672A\u77E5"," \u26A0\uFE0F")}break;case"JingDongSubsidy":if(null!==(g=b.resultData)&&void 0!==g&&null!==(h=g.data)&&void 0!==h&&h.thisAmount){b.resultData.data.thisAmountStr;$.message="\u4EAC\u4E1C\u5546\u57CE-\u91D1\u8D34: \u6210\u529F, \u660E\u7EC6: ".concat(ubsidy||"\u65E0","\u91D1\u8D34 \uD83D\uDCB0")}else if(m.match(/已存在|"thisAmount":0/))$.message="\u4EAC\u4E1C\u5546\u57CE-\u91D1\u8D34: \u5931\u8D25, \u539F\u56E0: \u65E0\u91D1\u8D34 \u26A0\uFE0F";else if(m.match(/请先登录/))$.message="\u4EAC\u4E1C\u5546\u57CE-\u91D1\u8D34: \u5931\u8D25, \u539F\u56E0: Cookie\u5931\u6548\u203C\uFE0F";else{var V=m.split(/\"msg\":\"([\u4e00-\u9fa5].+?)\"/)[1];$.message="\u4EAC\u4E1C\u5546\u57CE-\u91D1\u8D34: \u5931\u8D25, ".concat(V||"\u539F\u56E0: \u672A\u77E5"," \u26A0\uFE0F")}break;case"JingDongGetCash":if(null!==(i=b.data)&&void 0!==i&&i.success&&null!==(j=b.data)&&void 0!==j&&j.result){var t,u;$.message="\u4EAC\u4E1C\u5546\u57CE-\u73B0\u91D1: \u6210\u529F, \u660E\u7EC6: ".concat((null===(t=b.data)||void 0===t||null===(u=t.result)||void 0===u?void 0:u.signCash)||"\u65E0","\u73B0\u91D1 \uD83D\uDCB0")}else $.message=m.match(/\"bizCode\":201|已经签过/)?"\u4EAC\u4E1C\u5546\u57CE-\u73B0\u91D1: \u5931\u8D25, \u539F\u56E0: \u5DF2\u7B7E\u8FC7 \u26A0\uFE0F":m.match(/\"code\":300|退出登录/)?"\u4EAC\u4E1C\u5546\u57CE-\u73B0\u91D1: \u5931\u8D25, \u539F\u56E0: Cookie\u5931\u6548\u203C\uFE0F":"\u4EAC\u4E1C\u5546\u57CE-\u73B0\u91D1: \u5931\u8D25, \u539F\u56E0: \u672A\u77E5 \u26A0\uFE0F";break;case"JingDongShake":if(m.match(/prize/)){var v,w,x,y;if(null!==(v=b.data)&&void 0!==v&&v.prizeBean){var z,A,B=(null===(z=b.data)||void 0===z||null===(A=z.prizeBean)||void 0===A?void 0:A.count)||0;$.message="\u4EAC\u4E1C\u5546\u57CE-\u6447\u6447: \u6210\u529F, \u660E\u7EC6: ".concat(B||"\u65E0","\u4EAC\u8C46 \uD83D\uDC36")}else if(null!==(w=b.data)&&void 0!==w&&w.prizeCoupon){var C,D,E,F,G,H;$.message="\u4EAC\u4E1C\u5546\u57CE-\u6447\u6447: \u83B7\u5F97\u6EE1".concat(null===(C=b.data)||void 0===C||null===(D=C.prizeCoupon)||void 0===D?void 0:D.quota,"\u51CF").concat(null===(E=b.data)||void 0===E||null===(F=E.prizeCoupon)||void 0===F?void 0:F.discount,"\u4F18\u60E0\u5238\u2192 ").concat(null===(G=b.data)||void 0===G||null===(H=G.prizeCoupon)||void 0===H?void 0:H.limitStr)}else $.message="\u4EAC\u4E1C\u5546\u57CE-\u6447\u6447: \u6210\u529F, \u660E\u7EC6: \u672A\u77E5 \u26A0\uFE0F";if(0!=(null===(x=b.data)||void 0===x||null===(y=x.luckyBox)||void 0===y?void 0:y.freeTimes))return $.next=0,void JingDongShake()}else if(m.match(/true/)){var I,J;if($.message="\u4EAC\u4E1C\u5546\u57CE-\u6447\u6447: \u6210\u529F, \u660E\u7EC6: \u65E0\u5956\u52B1 \uD83D\uDC36",0!=(null===(I=b.data)||void 0===I||null===(J=I.luckyBox)||void 0===J?void 0:J.freeTimes))return $.next=0,void JingDongShake()}else m.match(/(无免费|8000005|9000005)/)?$.message="\u4EAC\u4E1C\u5546\u57CE-\u6447\u6447: \u5931\u8D25, \u539F\u56E0: \u5DF2\u6447\u8FC7 \u26A0\uFE0F":m.match(/(未登录|101)/)?$.message="\u4EAC\u4E1C\u5546\u57CE-\u6447\u6447: \u5931\u8D25, \u539F\u56E0: Cookie\u5931\u6548\u203C\uFE0F":$.message+="\u4EAC\u4E1C\u5546\u57CE-\u6447\u6447: \u5931\u8D25, \u539F\u56E0: \u672A\u77E5 \u26A0\uFE0F";$.next=1;break;case"JDSecKilling":203==b.code||3==b.code||101==b.code?$.message="\u4EAC\u4E1C\u79D2\u6740-\u7EA2\u5305: \u5931\u8D25, \u539F\u56E0: Cookie\u5931\u6548\u203C\uFE0F":null!==(k=b.result)&&void 0!==k&&k.projectId&&null!==(l=b.result)&&void 0!==l&&l.taskId?$.taskType={projectId:b.result.projectId,taskId:b.result.taskId}:$.message="\u4EAC\u4E1C\u79D2\u6740-\u7EA2\u5305: \u5931\u8D25, \u6682\u65E0\u6709\u6548\u6D3B\u52A8 \u26A0\uFE0F";break;case"JDSecKillingNext":if(0==b.code&&0==b.subCode){var W=m.match(/"discount":(\d.*?),/)[2];$.message="\u4EAC\u4E1C\u79D2\u6740-\u7EA2\u5305: \u6210\u529F, \u660E\u7EC6: ".concat(W||"\u65E0","\u7EA2\u5305 \uD83E\uDDE7")}else $.message="\u4EAC\u4E1C\u79D2\u6740-\u7EA2\u5305: \u5931\u8D25, ".concat(103==b.subCode?"\u539F\u56E0: \u5DF2\u9886\u53D6":b.msg?b.msg:"\u539F\u56E0: \u672A\u77E5"," \u26A0\uFE0F");break;case"getNHSignInfo":try{$.encryptProjectId=m.match(/"projectId":"(.*?)"/)[1],$.message="\u4EAC\u4E1C\u5E74\u8D27-\u62BD\u7B7E: \u6210\u529F, \u660E\u7EC6: \u6D4B\u8BD5\u6210\u529F"}catch(a){$.message="\u4EAC\u4E1C\u5E74\u8D27-\u62BD\u7B7E: \u5931\u8D25, \u660E\u7EC6: \u65E0\u6CD5\u83B7\u53D6\u6D3B\u52A8ID \u26A0\uFE0F"}$.message="0"===b.code?"\u3010\u5B9A\u65F6\u9886\u6C34\u3011\u83B7\u5F97".concat(b.amount,"g\uD83D\uDCA7"):"\u5B9A\u65F6\u9886\u6C34\u6210\u529F\u7ED3\u679C\uFF1A".concat(JSON.stringify(b.message));break;case"waterFriendForFarm":if("0"===b.code){var K;$.message="\u4E3A\u7B2C".concat(null===(K=$.farmTask.waterFriendTaskInit)||void 0===K?void 0:K.waterFriendCountKey,"\u4E2A\u597D\u53CB\u6D47\u6C34\u6210\u529F")}else"11"===b.code&&($.message="\u6D47\u6C34\u5931\u8D25\uFF1A\u6C34\u6EF4\u4E0D\u591F");break;default:}}function Utils(){return{randomString:function randomString(b){b=b||32;for(var c="abcdef0123456789",d=c.length,a="",f=0;f<b;f++)a+=c.charAt(Math.floor(Math.random()*d));return a},stringify:function stringify(a){try{if("String"==typeof JSON.stringify(a))return JSON.stringify(a)}catch(b){return a}}}}