// next
$.callback = ''
dealReturn('getShopHomeData', $.data)
$.call.pop()
$.next = 0 // 衔接下一个函数前，重置 next 防止获取 next 失败
doOneShopTask()