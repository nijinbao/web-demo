$(function(){
  // 1 将全选按钮的状态和其他物品的状态进行绑定，两个全选按钮其中之一选中，另一个也需要被选中
  $(".checkall").change(function(){
    $(".j-checkbox,.checkall").prop("checked",$(this).prop("checked"));
    if($(".checkall").prop("checked")){
      $(".cart-item").addClass("check-cart-item");
    }else{
      $(".cart-item").removeClass("check-cart-item");

    }
  })
// 2将商品选择按钮绑定change事件，当被选择商品按钮的个数==商品按钮的个数，全选按钮被选中
$(".j-checkbox").change(function(){
  if($(".j-checkbox:checked").length===$(".j-checkbox").length){
    $(".checkall").prop("checked",true);
  }else {
    $(".checkall").prop("checked",false);
  }
  if($(this).prop("checked")){
    $(this).parents(".cart-item").addClass("check-cart-item")
  }else {
    $(this).parents(".cart-item").removeClass("check-cart-item")

  }

})
// 3 点击加号商品数量加1，点击减号商品数量减1，商品数量为1时，停止

$(".increment").click(function(){

  let n=$(this).siblings(".itxt").val();
  n++;
  $(this).siblings(".itxt").val(n);
  // 点击加号商品的小记也需要变化：商品的数量*商品的价格
  // 获取商品的价格
  let price=$(this).parents(".p-num").siblings(".p-price").text().substring(1);
 let sum=$(this).parents(".p-num").siblings(".p-sum").text().substring(1);
sum=(price*n).toFixed(2);
$(this).parents(".p-num").siblings(".p-sum").html("¥ "+sum);
getSum()
})
$(".decrement").click(function(){

  let n=$(this).siblings(".itxt").val();
  if(n==1){
    return false;
  }
  n--;
  $(this).siblings(".itxt").val(n);
  // 点击加号商品的小记也需要变化：商品的数量*商品的价格
  // 获取商品的价格
  let price=$(this).parents(".p-num").siblings(".p-price").text().substring(1);
 let sum=$(this).parents(".p-num").siblings(".p-sum").text().substring(1);
sum=(price*n).toFixed(2);
$(this).parents(".p-num").siblings(".p-sum").html("¥ "+sum)
  
})
// 用户修改文本框的值，重新计算小记模块的价格
$(".itxt").change(function(){
  let n=$(this).val();
  let price=$(this).parents(".p-num").siblings(".p-price").text().substring(1);
  let sum=$(this).parents(".p-num").siblings(".p-sum").text().substring(1);
 sum=(price*n).toFixed(2);
 $(this).parents(".p-num").siblings(".p-sum").html("¥ "+sum);
 getSum()
})

// 封装函数获取总件数和总价格
function getSum(){
  let num=0;
  let price=0;
  $(".itxt").each(function(i,ele){
    num+=parseInt($(ele).val());
  })
  $(".p-sum").each(function(i,ele){
    price+=parseFloat($(ele).text().substring(1))
  })
  $(".amount-sum em").text(num);
  $(".price-sum em").text("¥" +price.toFixed(2));
}
// 初始化时调用getSum
getSum()
// 清理购物车清除所有的商品详细模块
$(".clear-all").click(function(){
  $(".cart-item").remove();
  getSum()
})
// 点击商品详细模块中的删除按钮，删除对应的模块，同时改变总件数和总价格
$(".p-action a").click(function(){
  $(this).parents(".cart-item").remove();
  getSum()
})
// 选择好商品点击删除选中的商品，删除对应的商品模块同时修改总件数和总价格
$(".remove-batch").click(function(){
  $(".j-checkbox:checked").parents(".cart-item").remove();
  getSum()
})
})