$(function(){
  // 重置滚动条的位置
  resetui();
  // 给发送按钮绑定点击事件
  $("#btnSend").on("click",function(){
    let txt=$("#ipt").val().trim()
   if(txt.length<=0){
    $("#ipt").val("");
    return alert("请输入内容!")
   }
   getMsg(txt);
   $("#ipt").val("");

  })
  function getMsg(txt){
    $.ajax({
      type:"GET",
      url:"http://www.liulongbin.top:3006/api/robot",
      data:{spoken:txt},
      success:function(res){
        if(res.message!=="success"){
          return alert("获取信息失败")
        }else {
          // 发送信息成功将用户输入信息渲染到页面中
          $("#talk_list").append(`
          <li class="right_word">
            <img src="img/person02.png" /> <span>${txt}</span>
          </li>
          
          `)
         resetui();
     let text=res.data.info.text
         getvioce(text)
        }
      }
    })
  }
  // 将服务器返回给我们的信息渲染到页面中，同时转换为语音播放
  function getvioce(text){
    $.ajax(
      {
      type:"GET",
      url:"http://www.liulongbin.top:3006/api/synthesize",
      data:{
        text:text
      },
      success:function(res){
   if(res.status!==200){
    return alert("获取信息失败")
   }else {
    // 将回答的消息渲染到页面中
    $("#talk_list").append(`
    <li class="left_word">
    <img src="img/person01.png" /> <span>${text}</span>
  </li>
    `)
    resetui();
    console.log(res);
    // 将获取到的音频地址添加到audio的src属性中
    $("#voice").attr("src",res.voiceUrl);
   }
      }
    })
  }

  // 给input输入框绑定keyup事件
  $("#ipt").on("keyup",function(e){
    if(e.keyCode==13){
      // 人工模拟点击事件
      $("#btnSend").click()
    }
  })
          
})