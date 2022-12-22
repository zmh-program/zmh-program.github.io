<script setup>
$().ready(function() {
  $("#loginform").validate({
    rules: {
      username: {
        required: true,
        minlength: 3,
        maxlength: 12
      },
      password: {
        required: true,
        minlength:6,
        maxlength:14
      }
    },
    messages: {
      username: {
        required: "请输入您的账户名",
        minlength: "账户名不能小于3位, 请输入3~12位账户名",
        maxlength: "账户名不能大于12位, 请输入3~12位账户名"
      },
      password: {
        required: "请输入密码",
        minlength: "密码不能小于6位, 请输入6~14位密码",
        maxlength: "密码不能大于14位, 请输入6~14位密码"
      }
    }
  });
});

</script>
<template>
  <main>
      <section class="login-section">
          <!-- 背景颜色 -->
          <div class="color"></div>
          <div class="color"></div>
          <div class="color"></div>
          <div class="box">
              <!-- 背景圆 -->
              <div class="circle" style="--x:0"></div>
              <div class="circle" style="--x:1"></div>
              <div class="circle" style="--x:2"></div>
              <div class="circle" style="--x:3"></div>
              <div class="circle" style="--x:4"></div>
              <!-- 登录框 -->
              <div class="container">
                  <div class="form">
                      <div class="title-div"><h2>Login</h2></div>
                      <form id = "loginform" action="/login/" method="post">
                          {% csrf_token %}
                          <div class="inputBox"><input type="text" placeholder="账户" name="username" id="username"></div>
                          <div class="inputBox"><input type="password" placeholder="密码" name="password" id="password"></div>
                          <div class="error" align="center"><br></div>
                          <div class="inputBox"><input type="submit" value="login" id="input1"></div>
                      </form>
                      <p class="forget">没有账户?<a href="/register/">注册</a></p>
                      <br>
                      <div><img src="images/info.png" alt="[i]:" height="12px" width="12px">本网站需使用Cookies.</div>
                  </div>
              </div>
          </div>
      </section>
  </main>
</template>
<style scoped>
.error{
  color:red;
}
*{
  font-family: "Consolas", Monospace, monospace;}
</style>
