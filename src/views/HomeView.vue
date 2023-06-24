<script setup lang="ts">
import TypingText from "@/components/TypingText.vue";
import { scrollTo } from "@/assets/script/scroll";
import type { Ref } from "vue";
import { ref } from "vue";

const main: Ref<HTMLElement | null> = ref(null);
const degree = ref(0);

function rotate() {
  const pos = main.value?.scrollTop || 0;
  degree.value = (pos / document.body.clientHeight) * 180;
}

function scroll() {
  console.log(main.value)
  if (main.value) scrollTo(
    main.value?.scrollTop || 0,
    document.body.clientHeight,
      main.value,
      1000,
      rotate,
  );
}
</script>

<template>
  <main ref="main" @scroll="rotate">
    <div class="fabric">
      <img src="/background.webp" class="background" alt="" />
      <div class="avatar"><img src="/avatar/zmh-program.png" alt="zmh-program" /></div>
      <TypingText content="Nothing is impossible." class="quote" />
    </div>
    <div class="arrow" @click="scroll">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
           :style="{'transform': `rotate(${degree}deg)`}">
        <path d="m12 15.586-4.293-4.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414z"></path>
        <path d="m17.707 7.707-1.414-1.414L12 10.586 7.707 6.293 6.293 7.707 12 13.414z"></path>
      </svg>
    </div>
    <div class="circle" />
    <div class="container">
      <div class="column about">
        <h2>关于</h2>
        <p>我是 <span>zmh-program</span>，生于 <span>2009</span> 年。</p>
        <p>热爱深度强化学习、喜爱钻研网络相关的知识，</p>
        <p>对前后端有独特的见解，涉猎大数据、爬虫、网络攻防、云原生和云计算等领域。</p>
        <p>喜欢哪个就学哪个！热衷探索，喜爱信息技术的一切！</p>
        <p>前方的道路还很长，请多指教！</p>
        <a href="https://github.com/zmh-program" class="stats"><img src="https://stats.deeptrain.net/user/zmh-program" alt="zmh-program's Github Stats"></a>
        <div class="icons">
          <a href="https://github.com/zmh-program" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
          </a>
          <a href="https://twitter.com/ProgramZmh" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
          </a>
          <a href="https://zmh-program.blog.csdn.net" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-1 4v2h-5V7h5zm-5 4h5v2h-5v-2zM4 19V5h7v14H4z"></path></svg>
          </a>
        </div>
      </div>

      <div class="column project">
        <h2>我的作品</h2>
        <div class="box">
          <a class="element" href="https://deeptrain.net">
            <img src="/project/deeptrain.png" alt="">
            <h3>Deeptrain</h3>
            <p>🔥 Deeptrain, 一个开源深度强化学习训练平台</p>
          </a>
          <a class="element" href="https://stats.deeptrain.net">
            <img src="/project/stats.png" alt="">
            <h3>Code Statistic</h3>
            <p>⚡ 动态生成你的 GitHub 统计卡片！</p>
          </a>
          <a class="element" href="https://fystart.deeptrain.net">
            <img src="/project/fystart.ico" alt="">
            <h3>Fystart</h3>
            <p>🍏 一个简洁的起始页，为你所想</p>
          </a>
          <a class="element" href="https://github.com/zmh-program/web-chatgpt-qq-bot">
            <img src="/project/webchatgpt.ico" alt="">
            <h3>Web ChatGPT QQ Bot</h3>
            <p>🍉 图形化界面一键配置 ChatGPT Mirai QQ Bot 机器人</p>
          </a>
          <a class="element" href="https://github.com/zmh-program/turbowarp-clipx">
            <img src="/project/clipx.png" alt="">
            <h3>TurboWarp ClipX</h3>
            <p>📦 TurboWarp 高效开发扩展插件，为您提供更好的开发体验</p>
          </a>
          <a class="element" href="https://admin-pages.deeptrain.net">
            <img src="/project/admin.png" alt="">
            <h3>Admin Pages</h3>
            <p>🥗 更完美的原生前端管理员界面</p>
          </a>
          <a class="element" href="https://github.com/zmh-program/fymonitor">
            <img src="/project/fymonitor.jpg" alt="" style="border-radius: 40%">
            <h3>Fymonitor</h3>
            <p>⚡ 高性能高扩展性分布式web监控系统</p>
          </a>
          <a class="element" href="https://b.deeptrain.net">
            <img src="/project/bilibili.png" alt="">
            <h3>BiliBili Stats</h3>
            <p>🍇 动态生成B站用户简介SVG图像</p>
          </a>
          <a class="element" href="https://github.com/zmh-program/vokkot">
            <img src="/project/vokkot.jpg" alt="" style="border-radius: 12px">
            <h3>Vokkot</h3>
            <p>🚀 你的下一代文件存储分发系统</p>
          </a>
        </div>
      </div>

      <div class="column link">
        <h2>友情链接</h2>
        <p>感谢你们的支持！</p>
        <div class="box">
          <div class="element friend">
            <img src="/friend/linwin.png" alt="">
            <h3>Linwin-Cloud</h3>
            <p>开源软件贡献者。专注网络安全和计算机开源软件。擅长社会工程学。初二，热爱开源的开发者。著有多款开源软件。对于计算机网络安全有独特的见解。擅长进行社会工程学，善于对钓鱼网站的开发，也擅长Linux运维，懂得Linux服务器维护和网站。Java造诣极深，非常擅长前端开发。</p>
          </div>
          <div class="element friend">
            <img src="/friend/wmz1024.jpg" alt="">
            <h3>wmz1024</h3>
            <p>精通前后端（<span>Vue, React, Next, Golang, PHP, Python</span> 等），<br>对云开发，云原生，云计算，网络有独特的见解。<br>一个目前在读小学五年级的一个小学生 是一个小小白（小白：指全栈）</p>
          </div>
          <div class="element friend">
            <img src="/friend/sh1n3zz.jpg" alt="">
            <h3>Sh1n3zZ</h3>
            <p>
              全能型人才<br>
              对网络攻防，网络安全有极高造诣<br><br>
              晞云（珠海市晞云云科技有限公司）创始人<br>
              星穹CDN <span>(Star Waf)</span> 创始人<br>
              <span>LeSun IDC</span> 创始人
            </p>
          </div>
          <div class="element friend">
            <img src="/friend/kernel.jpg" alt="">
            <h3>主核kernel</h3>
            <p>
              “创新是我们基因的一部分。”
            </p>
          </div>
          <div class="element friend">
            <img src="/friend/creeper.jpg" alt="">
            <h3>航小怕</h3>
            <p>
              小学生，在学高数（<br><br>
              “我偏向竞赛的，最多就拿了个 <span>CSP-J</span> 广西一等奖<br>
              我会一点easyx，和ue5,unity的游戏制作（真的一点点）”<br>
              ——来自航小怕
            </p>
          </div>
          <div class="element friend">
            <img src="/friend/what.jpg" alt="">
            <h3>what</h3>
            <p>
              擅长 <span>Vue</span>，原生前端，<span>NodeJS</span> 开发<br>
              <a href="https://40code.com"><span>40code</span></a> 站长<br>
            </p>
          </div>
        </div>
      </div>

      <a class="icp" href="https://beian.miit.gov.cn/" target="_blank">
        <img src="/gov.png" alt="icp" />
        <span>鲁ICP备2022034318号-1</span>
      </a>
    </div>
  </main>
</template>

<style scoped>
main {
  overflow-x: hidden;
  width: 100%;
  height: 100%;
}

.fabric {
  position: absolute;
  user-select: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

@keyframes ScaleInAnimation {
  0% {
    transform: scale(1.1);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes FadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fabric .background {
  width: 100%;
  height: 100%;
  user-select: none;
  object-fit: cover;
  animation: ScaleInAnimation 1s ease-in-out;
}

.fabric .avatar {
  position: relative;
  top: -70vh;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  background: rgba(0,0,0,.15);
  box-shadow: 0 2px 2px rgba(0,0,0,.1);
  width: 86px;
  height: 86px;
  backdrop-filter: blur(2px);
  animation: FadeInAnimation 1.5s ease-in-out;
}

.fabric .avatar img {
  width: 82px;
  height: 82px;
  border-radius: 6px;
  transform: translate(2px, 2px);
  opacity: .9;
}

.fabric .quote {
  position: relative;
  top: calc(-70vh + 28px);
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0,0,0,.8);
  user-select: none;
  z-index: 1;
  width: max-content;
  animation: FadeInAnimation 2s ease-in-out;
}

.arrow {
  position: absolute;
  top: calc(100vh - 64px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  padding: 2px;
  background: rgba(255,255,255,.1);
  backdrop-filter: blur(2px);
  border-radius: 50%;
  animation-delay: .5s;
  animation: FadeInAnimation 2.5s ease-in-out;
  transition: .25s ease-in;
}

.arrow svg {
  fill: #eee;
  width: 32px;
  height: 32px;
  transition: .2s;
}

.arrow:hover {
  background: rgba(255,255,255,.15);
}

.arrow:hover svg {
  fill: #fff;
}

.stats {
  display: block;
  width: max-content;
  height: max-content;
  left: 50%;
  transform: translateX(-50%);
}

.circle {
  position: absolute;
  top: 100vh;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 36px;
  height: 36px;
  background: rgb(30,30,30,.8);
  z-index: -1;
}

.container {
  position: relative;
  transform: translateY(100vh);
  background: rgb(30,30,30,.8);
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.container .column {
  width: 100%;
  padding: 40px 20px;
  height: max-content;
}

.container h2 {
  font-size: 26px;
  font-weight: bold;
  width: max-content;
  margin: 20px auto 40px;
  position: relative;
  color: #fff;
  transition: .25s;
  user-select: none;
  font-family: "PingFang SC", "Microsoft Yahei", "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
  cursor: pointer;
}

.container h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  background: #106eea;
  bottom: -6px;
  left: 0;
}

.container .project h2::after {
  background: #70c000;
}

.container .link h2::after {
  background: #ff8c00;
}

.project {
  background: #282828FF;
}

.container p {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255,255,255,.8);
  margin: 0 0 20px;
  text-align: center;
  user-select: none;
  transition: .25s;
  font-family: "PingFang SC", "Microsoft Yahei", "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
}

.container span {
  font-family: Ubuntu, "PingFang SC", "Microsoft Yahei", "Helvetica Neue", Helvetica, Consolas, "Comic Sans MS", "Segoe UI", Arial, sans-serif;
}

.icp {
  color: rgba(255,255,255,.6);
  font-size: 14px;
  font-weight: 500;
  margin: 160px 0 40px;
  text-decoration: none;
  background: none;
  transition: .5s;
  user-select: none;
}

.icp img {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  opacity: .8;
  transition: .5s;
}

.icp:hover {
  color: #fff;
}

.icp:hover img {
  opacity: 1;
}

.icons {
  width: max-content;
  margin: 10px auto 0;
  transform: translateY(10px);
}

.icons a {
  background: none !important;
  margin: 6px;
}

.icons svg {
  width: 32px;
  height: 32px;
  fill: #ccc;
  transition: .25s;
}

.icons svg:hover {
  fill: #fff;
}

.box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: min(1080px, 100%);
  width: max-content;
  margin: 0 auto;
  gap: 32px;
  box-sizing: border-box;
  justify-content: center;
}

.box .element {
  width: 300px;
  height: 200px;
  background: rgb(30,30,30);
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0,0,0,.03) 0 5px 10px;
  text-align: center;
  align-items: center;
  overflow: hidden;
  transition: .25s;
  cursor: pointer;
  border-radius: 8px;
  padding: 20px 10px;
}

.element img {
  height: 60px;
  width: 60px;
}
.element h3 {
  color: #fff;
}
.element p {
  margin-top: 6px;
  max-width: 200px;
}


.element.friend {
  background: #282828FF;
  width: 460px;
  height: max-content;
}

.element.friend p {
  max-width: 400px;
}

.element.friend img {
  border-radius: 50%;
}
</style>
