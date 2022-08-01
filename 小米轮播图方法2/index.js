window.onload=function(){
  // 获取元素
  // 注意：生成定时器的速度快于消除定时器的速度
  let container=document.querySelector('.container')
  let imgList=document.querySelectorAll('img')
  let spanList=document.querySelectorAll('span')
  let arrList=document.querySelectorAll('.arr')
for (let i = 0; i < spanList.length; i++) {
spanList[i].onclick=function(){
change(i)
}
}
// 图片自动定时播放效果实现
let num=0
let time=null
function change(info){
  for (let j = 0; j < spanList.length; j++) {
    spanList[j].className=''
    imgList[j].style.zIndex=0 
    }
    spanList[info].className='active'
    imgList[info].style.zIndex=1
}
function timer() {
  // 首先清除定时器
  clearInterval(time)
  time=null
  // 如果定时器为空开启定时器
    time=setInterval(()=>{
      if (num>5) {
        num=0
      }
     change(num)
     num++
  },1000)
}
// 页面加载完毕开启定时器
timer()
// 点击左箭头实现轮播效果
arrList[0].onclick=function(){
if (num<0) {
    num=5
  }
  change(num)
    num--
      }
// 点击右箭头实现轮播效果
arrList[1].onclick=function(){
  if (num>5) {
    num=0
  }
  change(num)
  num++ 
}
// 鼠标移入取消定时器
container.addEventListener('mouseenter',function () {
  clearInterval(time)
  time=null
})
// 鼠标移出开启定时器
container.addEventListener('mouseleave',function(){
 timer()
  })
}

