<template>
<body style="background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);">
            <div class="circle" style="--x:0"></div>
            <div class="circle" style="--x:1"></div>
            <div class="circle" style="--x:2"></div>
            <div class="circle" style="--x:3"></div>
            <div class="circle" style="--x:4"></div>
              <div class="message-card">
                  <img class="img-prof" src="{{ image|default:'/static/images/chat_user.png' }}" alt="">
                  <strong class="username">{{ name|default:"user" }}</strong>
                  <br>
                  <div><img class="{{id|default:'User' }}" alt="">&nbsp;<span class="{{id|default:'User' }}">{{ id|default:"User" }}</span></div>
                  <span id="profileContent" class="profile-content">{{ profile|default:"" }}&nbsp;</span>
              </div>
</body>
</template>
<style scoped>
*{font-family:"Consolas", Monospace, monospace;margin:0;padding:0;}
.username{font-size: 16pt;}
</style>