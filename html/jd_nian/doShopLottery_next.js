// next
$.callback = ''
// 如果抽奖机会用光，则 pop() 逻辑写在 dealReturn 利于维护
dealReturn('doShopLottery', $.data)
document.write(JSON.stringify($))