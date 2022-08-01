$(function(){
  // 节流阀 解决我们点击电梯导航时触发window的scroll事件
  let flag=true;
  // 封装一个函数
  function toggleScroll(){
    if($(document).scrollTop()>=$(".recommend").offset().top){
      $(".fixedtool ").fadeIn()
    }else{
      $(".fixedtool").fadeOut()
    }
  }
  toggleScroll()
  $(window).scroll(function(){
   toggleScroll()
  //  页面滚动到什么模块，电梯导航也给添加对应的类
  if(flag){
    $(".floor .w").each(function(i,ele){
      if($(document).scrollTop()>=$(ele).offset().top){
   
     $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current")
      }
    })
  }
  })
  // 点击固定电梯导航点击对应的li我们的页面滚动到对应的模块
  $(".fixedtool li").click(function(){
    flag=false;
  let current=  $(".floor .w").eq($(this).index()).offset().top;
  $("html,body").stop().animate({
    scrollTop:current
  },function(){
    flag=true
  })
  $(this).addClass("current").siblings("li").removeClass("current")
  
  })
})