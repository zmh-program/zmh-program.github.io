<script setup lang="ts">

</script>

<template>
  <main>
    <div class="donate">
      <h2>Donate</h2>
      <p>如果您觉得我的开源项目对您有帮助，欢迎捐助！<br>感谢您的支持！</p><br>
      <div class="pay">
        <div><p>支付宝</p><img class="pay" src="/donate/alipay.jpg" alt="支付宝"></div>
        <div><p>微信</p><img class="pay" src="/donate/wechat.jpg" alt="微信"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background: url("/donate/wallpaper.webp");
}

main * {
  user-select: none;
}

.donate {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 620px;
  min-height: 400px;
  background: rgba(30,30,30,.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 20px 10px;
  animation: FadeInAnimation 1.2s ease-out;
}

h2 {
  position: relative;
  color: #00aaff;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  cursor: pointer;
  background: -webkit-linear-gradient(-70deg, #9867f0 0%, #ed4e50 100%);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0;
  height: 3px;
  background: #ff7170;
  transition: 0.5s;
}
h2:hover::before {
  width: 100%;
}

p {
  color: white;
  padding: 6px;
  font-family: "PingFang SC","Microsoft Yahei","Helvetica Neue",Helvetica,"Segoe UI",Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  max-width: 400px;
}

.pay {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}
.pay p {
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin: 10px;
}
.pay img {
  width: 200px;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  margin: 10px;
  animation-delay: 1.2s;
  animation: FadeInAnimation .6s ease-in-out;
}
</style>
