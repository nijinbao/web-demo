window.addEventListener("load",function(){
  // 获取元素
  let container=document.querySelector(".container")
  let imgList=document.querySelector(".liList");
  let prev=document.querySelector(".prev");
  let next=document.querySelector(".next");
  let num=0;
  let circleList=document.querySelector(".circleList");

for(let i=0;i<circleList.children.length;i++){
  // 给每一个小圆点绑定单击响应事件，点击对应索引的小圆点显示对应索引的图片
  circleList.children[i].addEventListener("click",function(){
    change(i)
  })
// 鼠标移入小圆圈，对应的小圆圈显示排他
circleList.children[i].addEventListener("mouseenter",function(){
  for(let i=0;i<circleList.children.length;i++){
  circleList.children[i].children[0].className="";
  }
  this.children[0].className="active";
})
}
// 给左右箭头绑定单击响应函数
prev.addEventListener("click",function(){
  if(num==0){
    num=imgList.children.length-1;
  };
  num--;
change(num);
})
next.addEventListener("click",function(){
  if(num==imgList.children.length-1){
    num=0;
  };
  num++;
change(num);
})
function change(num1){
  num1=num1<0?-num1:num1;
  num=num1;
  imgList.style.left=-(num*1226)+'px';
for(let i=0;i<circleList.children.length;i++){
  circleList.children[i].children[0].className=""
}
if(num==imgList.children.length-1){num1=0}
circleList.children[num1].children[0].className="active";
}
// 设置定时器自动播放轮播图
function fn(){
  if(num==imgList.children.length-1){
    num=0;
  };
change(num);
num++;
}
let timer=setInterval(fn,1000)
// 鼠标移入关闭定时器
container.addEventListener("mouseenter",function(){
  clearInterval(timer);
})
// 鼠标移出开启定时器
container.addEventListener("mouseleave",function(){
  timer=setInterval(fn,1000);
})
})