<script setup>
let cardId = "0";
let chatInterfaceClicked = false;
const chat_message = document.getElementById("message-box");
let chat_time_stamp = 0;
const stride_sec = 150;
const message_window = document.getElementById("message-window");
const send_message = $('#send_message');
const chat_length = document.getElementById("chat-length");
const websocket_address = `ws://${window.location.host}/chat/{{ token }}/`;
function clicked(id){
  id = String(id)
  if (id !== cardId){
    document.getElementById(cardId).classList.remove("active");document.getElementById("page"+cardId).hidden=true;
    document.getElementById(id).classList.add("active");document.getElementById("page"+id).hidden=false;
    cardId = id;
  }
  if (id === "1" && !chatInterfaceClicked){
    chatInterfaceClicked = true;
    new_socket();
  }
}
function edit_profile(){
  document.getElementById("textEdit").innerText = document.getElementById("profileContent").innerText;
  document.getElementById("textForm").hidden=false;document.getElementById("profileContent").hidden=true;
  alerts(["alert-info", "message-data"], "请输入0~100字符的介绍内容\n超出部分自动删去.", message_window);
}
function cancel() {
  document.getElementById("textForm").hidden=true;document.getElementById("profileContent").hidden=false;
}
send_message.on('propertychange input', function(event) {
  chat_length.innerText = $.trim($(this).val()).length + " / 500";
});
function add_identity(identity, name){
  const span = document.createElement("span");span.innerText = name;span.className="name";
  const img = document.createElement("img");img.alt = "";img.className = identity;span.appendChild(img);
  img.style.height = "14px";img.style.width = "14px";
  return span;
}
function add_message(username,id,image_path,content,self,is_html,identity,time){
  const main_div = document.createElement("div");main_div.classList.add("chat-line");
  if (chat_time_stamp + stride_sec <= time){chat_time_stamp = time;let dt = new Date(time * 1000).toLocaleTimeString();/*stamp s -> ms*/ const date = document.createElement("p"); date.classList.add("chat-time"); date.innerText = dt; main_div.appendChild(date);}
  const link = document.createElement("a");link.href = "/profile/id="+id;link.target='_blank';
  const obj = document.createElement("div");obj.classList.add("chat-object");
  const content_div = document.createElement("div");content_div.classList.add("chat-content-auto"); const id_div = add_identity(identity, username); content_div.appendChild(id_div);
  const content_span = document.createElement("span");content_span.classList.add("chat-content");
  if (is_html){content_span.innerHTML = content}else{content_span.innerText = content} /* 防止 XSS 攻击 innerHtml -> innerText */
  content_div.appendChild(content_span);obj.appendChild(content_div);
  const image = document.createElement("img");image.src = image_path;image.alt = "";image.classList.add("user-image");link.appendChild(image);obj.appendChild(link);
  const clearfix = document.createElement("div");clearfix.className="clearfix";obj.appendChild(clearfix); const clearfix_main = document.createElement("div");clearfix_main.className="clearfix";
  if (self){link.classList.add("right"); content_div.classList.add("left"); content_span.classList.add("right-chat");obj.classList.add("right")}
  else {link.classList.add("left"); content_div.classList.add("right"); content_span.classList.add("left-chat");obj.classList.add("left")}
  main_div.appendChild(obj);main_div.appendChild(clearfix_main);chat_message.append(main_div);if (id_div.offsetWidth > content_span.offsetWidth){content_span.style.width=id_div.offsetWidth+2+"px"}; chat_message.scrollTop = chat_message.scrollHeight;
}
let ChatSocket = undefined;
function new_socket() {
  ChatSocket = new WebSocket(websocket_address);
  ChatSocket.onopen = function (e) {
    alerts(["alert-success", "message-data"], `服务器 ${window.location.host} 连接成功!`, message_window);
  }
  ChatSocket.onclose = function(e) {
    alerts(["alert-danger", "message-data"], `服务器 ${window.location.host} 断开连接!`, message_window);
  }
  ChatSocket.onmessage = function(e) {
    const data = JSON.parse(e.data);
    add_message(data["username"], data["id"], data["image_path"], data["content"], data["self"], data["is_html"], data["identity"], data["time"]);
  }
}

function send() {
  let content = $.trim(send_message.val());
  let length = content.length;
  if (length < 1){alerts(["alert-info", "message-data"], "请输入内容!", message_window);}
  else {
    if (length > 500){alerts(["alert-warning", "message-data"], "最多输入500个字符!", message_window)}
    else {
      ChatSocket.send(JSON.stringify({'message': content}));
      send_message.val("");
    }
  }
}
</script>
<template>
    <main style="background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);">
    <div id="message-window" class="message-window"></div>
    <main>
      <div id="menu" class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width:65px;height:100%;float:left;z-index: 3;">
        <a href="/public" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <img src="/favicon.ico" alt class="icon" style="width: 40px; height: 40px; align-self: center;">
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto menu">
          <li>
              <a  id="0" class=" nav-link card  text-white active" onclick="clicked(0)"><img class="icon" src="{% static 'images/home.png' %}" alt>
                  <span>主页</span></a>
          </li>
          <li>
              <a id="1" class="nav-link card  text-white" onclick="clicked(1)"><img class="icon" src="https://cdn-icons-png.flaticon.com/128/724/724715.png" alt>
                  <span>聊天室</span></a>
          </li>
          <li>
              <a id="2" class="nav-link card  text-white" onclick="clicked(2)"><img class="icon" src="https://cdn-icons-png.flaticon.com/128/3133/3133883.png" alt>
                  <span>网站应用</span></a></li>
          <li><a id="3" class="nav-link card  text-white" onclick="clicked(3)"><img class="icon" src="{% static 'images/file-transfer.png' %}" alt>
              <span>文件</span></a></li>
          <li><a id="4" class="nav-link card  text-white" onclick="clicked(4)">...</a>
        </ul>
        <hr>
        <div class="dropdown">
          <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/src/assets/images/chat_user.png" alt width="32" height="32" class="rounded-circle me-2">
          </a>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#" style="color: black;">更改密码</a></li>
            <li><a class="dropdown-item" href="/logout/" style="color: black;">登出</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" style="color: black;"></a></li>
          </ul>
        </div>
      </div>
      <div id="main" style="float:right;width:calc(100% - 65px);margin:0 auto;height:100%;display: inline-block;">
          <div id="page0" class="full box">
            <div class="circle" style="--x:0"></div>
            <div class="circle" style="--x:1"></div>
            <div class="circle" style="--x:2"></div>
            <div class="circle" style="--x:3"></div>
            <div class="circle" style="--x:4"></div>
              <div class="message-card">
                  <img class="img-prof" src="" alt>
                  <strong class="username"></strong>
                  <br>
                  <div><img class="" alt>&nbsp;<span class=""></span></div>
                  <span id="profileContent" class="profile-content"><img src="https://cdn-icons-png.flaticon.com/128/1250/1250221.png" class="icon" alt onclick="edit_profile()"></span>
                  <form id="textForm" action="/home/" method="post" style="width: 100%;" hidden>
                      <textarea id="textEdit" name="text"></textarea>
                      <div style="width: 60%;margin: 0 auto;">
                          <input style="float: left" class="img-button ok" type="submit" value="" id="submit-content" src="https://cdn-icons-png.flaticon.com/128/3814/3814305.png">
                          <input style="float: right" class="img-button cancel" type="button" onclick="cancel()">
                      </div>
                  </form>
              </div>
          </div>
          <div id="page1" class="chat-interface" hidden>
              <div id="message-box" class="message-box"></div>
              <hr style="max-height: 2%">
              <div class="operation-box">
                  <textarea placeholder="请输入1~500个字符" class="message" id="send_message"></textarea>
                  <span class="message-length" id="chat-length">0 / 500</span>
                  <button class="btn btn-success btn-xs send" onclick="send()">发送</button>
              </div>
          </div>
          <iframe id="page2" class="full" src="/applications/" hidden></iframe>
          <iframe id="page3" class="full" src="/public" onload="console.log('选择时间')" hidden></iframe>
          <div id="page4" class="full" hidden>...</div>
      </div>
    </main>

    </main>
</template>
<style scoped>
*{margin:0;padding:0;}
.card{margin:3px;background-color:black;}
.icon{height:22px;width:22px;}
.full{height:100%;width:100%;}
.username{font-size: 16pt;}
.nav>li>a{
  padding: 2px 3px;
  margin-left: 5px;
}
</style>