// next
$.callback = ''
dealReturn('tigernian_getFeedDetail', $.data)
$.productList = $.feedDetailInfo.productInfoVos || $.feedDetailInfo.browseShopVo
$.needTime = Number($.feedDetailInfo.maxTimes) - Number($.feedDetailInfo.times);
$.call.pop()
$.next = 0 // 衔接下一个函数前，重置 next 防止获取 next 失败
browseProducts()