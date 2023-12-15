<script setup lang="ts">
import TypingText from "@/components/TypingText.vue";
import { scrollTo } from "@/assets/script/scroll";
import type { Ref } from "vue";
import { ref } from "vue";
import Github from "@/components/icons/github.vue";
import Twitter from "@/components/icons/twitter.vue";
import Blog from "@/components/icons/blog.vue";
import Arrow from "@/components/icons/arrow.vue";
import Bilibili from "@/components/icons/bilibili.vue";
import Site from "@/components/icons/site.vue";

const main: Ref<HTMLElement | null> = ref(null);
const degree = ref(0);

function rotate() {
  const pos = main.value?.scrollTop || 0;
  degree.value = (pos / document.body.clientHeight) * 180;
}

function scroll() {
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
      <div class="avatar"><img src="/avatar/zmh-program.webp" alt="zmh-program" /></div>
      <TypingText content="Nothing is impossible." class="quote" />
    </div>
    <div class="arrow" @click="scroll"><arrow :degree="degree" /></div>
    <div class="circle" />
    <div class="container">
      <div class="column about">
        <h2>关于</h2>
        <div class="lang" style="transform: translateY(12px)">
          <span>Go</span>
          <span>Pascal</span>
          <span>Python</span>
          <span>C</span>
          <span>Arduino</span>
          <span>VB</span>
        </div>
        <div class="lang">
          <span>PHP</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>Vue</span>
          <span>React</span>
        </div>
        <p>我是 <span>zmh-program</span>，生于 <span>2009</span> 年。</p>
        <p>热爱深度强化学习、喜爱钻研网络相关的知识，</p>
        <p>对前后端有独特的见解，涉猎大数据、爬虫、网络攻防、云原生和云计算等领域。</p>
        <p>喜欢哪个就学哪个！热衷探索，喜爱信息技术的一切！</p>
        <p>前方的道路还很长，请多指教！</p>
        <div class="tag">
          <span>全栈开发</span>
          <span>机器学习</span>
          <span>云</span>
          <span>一言不合造轮子</span>
        </div>
        <a href="https://github.com/zmh-program" class="stats"><img src="https://stats.deeptrain.net/user/zmh-program" alt="zmh-program's Github Stats"></a>
        <a href="https://github.com/Deeptrain-Community" class="stats"><img src="https://stats.deeptrain.net/user/Deeptrain-Community" alt="Deeptrain's Github Stats"></a>
        <div class="icons">
          <a href="https://github.com/zmh-program" target="_blank"><github /></a>
          <a href="https://twitter.com/ProgramZmh" target="_blank"><twitter /></a>
          <a href="https://zmh-program.blog.csdn.net" target="_blank"><blog /></a>
          <a href="https://space.bilibili.com/1984532193" target="_blank"><bilibili /></a>
        </div>
      </div>

      <div class="column project">
        <h2>我的作品</h2>
        <div class="box">
          <a class="element" href="https://deeptrain.net">
            <img src="/project/deeptrain.webp" alt="">
            <h3>Deeptrain</h3>
            <p>🔥 Deeptrain, 一个开源深度强化学习训练平台</p>
          </a>
          <a class="element" href="https://fystart.com">
            <img src="/project/fystart.webp" alt="">
            <h3>Fystart</h3>
            <p>🍏 一个简洁的起始页，为你所想</p>
          </a>
          <a class="element" href="https://chatnio.net">
            <img src="/project/chatnio.png" alt="">
            <h3>Chat Nio</h3>
            <p>👋 一个简洁、美观、轻量的开源 AI 聊天助手</p>
          </a>
          <a class="element" href="https://stats.deeptrain.net">
            <img src="/project/stats.webp" alt="">
            <h3>Code Statistic</h3>
            <p>⚡ 动态生成你的 GitHub 统计卡片！</p>
          </a>
          <a class="element" href="https://github.com/zmh-program/web-chatgpt-qq-bot">
            <img src="/project/webchatgpt.webp" alt="" style="border-radius: 12px">
            <h3>Web ChatGPT QQ Bot</h3>
            <p>🍉 图形化界面一键配置 ChatGPT Mirai QQ Bot 机器人</p>
          </a>
          <a class="element" href="https://github.com/zmh-program/turbowarp-clipx">
            <img src="/project/clipx.webp" alt="">
            <h3>TurboWarp ClipX</h3>
            <p>📦 TurboWarp 高效开发扩展插件，为您提供更好的开发体验</p>
          </a>
          <a class="element" href="https://admin-pages.deeptrain.net">
            <img src="/project/admin.webp" alt="">
            <h3>Admin Pages</h3>
            <p>🥗 更完美的原生前端管理员界面</p>
          </a>
          <a class="element" href="https://github.com/zmh-program/fymonitor">
            <img src="/project/fymonitor.webp" alt="" style="border-radius: 40%">
            <h3>Fymonitor</h3>
            <p>⚡ 高性能高扩展性分布式web监控系统</p>
          </a>
          <a class="element" href="https://b.deeptrain.net">
            <img src="/project/bilibili.webp" alt="">
            <h3>BiliBili Stats</h3>
            <p>🍇 动态生成B站用户简介SVG图像</p>
          </a>
          <a class="element" href="https://github.com/zmh-program/vokkot">
            <img src="/project/vokkot.webp" alt="" style="border-radius: 12px">
            <h3>Vokkot</h3>
            <p>🚀 你的下一代文件存储分发系统</p>
          </a>
          <a class="element" href="https://notes.lightxi.com">
            <img src="/project/lightnotes.ico" alt="">
            <h3>Light Notes</h3>
            <p>📝 一个极简、美观、多端同步的轻量化在线便签</p>
          </a>
          <a class="element" href="https://github.com/zmh-program/kylin-go">
            <h3>Kylin Go</h3>
            <div style="height: 6px" />
            <p>🐉 一款基于 Golang 的跨平台高效的编程语言 (Go解释器)。可使用中文等语言进行编程。面相过程，直译式编程语言。</p>
          </a>
        </div>
      </div>

      <div class="column link">
        <h2>友情链接</h2>
        <p>感谢你们的支持！</p>
        <div class="box">
          <div class="element friend">
            <img src="/friend/sh1n3zz.webp" alt="">
            <h3>Sh1n3zZ</h3>
            <p>
              Baka zZ！<br>
              擅长 C / C++<br>
              对云计算，网络安全有较深造诣<br><br>
              晞云（珠海市晞云云科技有限公司）の 首席执行官
            </p>
            <div class="social">
              <a href="https://github.com/Sh1n3zZ"><github /><span>Sh1n3zZ</span></a>
              <a href="https://lightxi.com"><site /><span>lightxi.com</span></a>
            </div>
          </div>
          <div class="element friend">
            <img src="/friend/wmz1024.webp" alt="">
            <h3>wmz1024</h3>
            <p>喜欢 Web 开发</p>
            <div class="social">
              <a href="https://github.com/wmz1024"><github /><span>wmz1024</span></a>
              <a href="https://space.bilibili.com/403083793"><bilibili /><span>wmz1024</span></a>
              <a href="https://wmza.cn"><site /><span>wmza.cn</span></a>
            </div>
          </div>
          <div class="element friend">
            <img src="/friend/creeper.webp" alt="">
            <h3>航小怕</h3>
            <p>
              “我会一点 <span>easyx</span> 和 <span>ue5, unity</span> 的游戏制作”<br>
              ——来自航小怕
            </p>
            <div class="social">
              <a href="https://github.com/Hangxiaopa"><github /><span>Hangxiaopa</span></a>
              <a href="https://space.bilibili.com/415488188"><bilibili /><span>蛐蛐航小怕</span></a>
            </div>
          </div>
          <div class="element friend">
            <img src="/friend/what.webp" alt="">
            <h3>what</h3>
            <p>
              <span>前端 / Nodejs</span> 开发<br>
            </p>
            <div class="social">
              <a href="https://github.com/52black"><github /><span>52black</span></a>
              <a href="https://space.bilibili.com/444298188"><bilibili /><span>40code</span></a>
              <a href="https://40code.com"><site /><span>40code.com</span></a>
            </div>
          </div>
          <div class="element friend">
            <img src="/friend/linwin.webp" alt="">
            <h3>Linwin-Cloud</h3>
            <p>开源软件贡献者，热爱开源的开发者。<br>初三，擅长 Java 开发和 Linux。</p>
            <div class="social">
              <a href="https://github.com/Linwin-Cloud"><github /><span>Linwin-Cloud</span></a>
              <a href="https://space.bilibili.com/1012391123"><bilibili /><span>LinWinCloud 联沃云</span></a>
            </div>
          </div>
          <div class="element friend">
            <img src="/friend/mq.webp" alt="">
            <h3>麻雀.</h3>
            <p>
              学海无涯 回头是岸
            </p>
            <div class="social">
              <a href="https://github.com/Dayanshifu"><github /><span>Dayanshifu</span></a>
              <a href="https://www.littleyan.tk"><site /><span>littleyan.tk</span></a>
            </div>
          </div>
        </div>
      </div>

      <RouterLink to="/donate" class="donate">捐助</RouterLink>
      <a class="icp" href="https://beian.miit.gov.cn" target="_blank">
        <img src="/gov.webp" alt="icp" />
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

.tag {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0 20px;
  flex-wrap: wrap;
}

.tag span {
  font-size: 12px;
  font-weight: 500;
  color: rgba(16, 110, 234);
  margin: 4px 6px;
  padding: 4px 8px;
  border-radius: 4px;
  background: rgba(231, 241, 253);
  backdrop-filter: blur(2px);
  transition: .35s;
  user-select: none;
  cursor: pointer;
  font-family: "PingFang SC", "Microsoft Yahei", "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
}

.tag span:hover {
  background: rgba(16, 110, 234, .8);
  color: #fff;
}

.lang {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px 0 20px;
}

.lang span {
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, .6);
  margin: 4px 6px;
  padding: 4px 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, .1);
  backdrop-filter: blur(2px);
  transition: .35s;
  user-select: none;
  cursor: pointer;
  font-family: "PingFang SC", "Microsoft Yahei", "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
}

.lang span:hover {
  background: rgba(255, 255, 255, .2);
  color: #fff;
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
  max-width: 100%;
  background: none !important;
}

.stats img {
  max-width: 100%;
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
  white-space: nowrap;
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

.donate {
  font-size: 14px;
  width: max-content;
  height: max-content;
  color: rgba(255,255,255,.6);
  text-align: center;
  margin-top: 160px;
  transition: 1s;
}

.donate:hover {
  color: #fff;
}

.icp {
  color: rgba(255,255,255,.6);
  font-size: 14px;
  font-weight: 500;
  margin: 20px 0 40px;
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
  min-height: 370px;
}

.element.friend p {
  max-width: 400px;
}

.element.friend img {
  border-radius: 50%;
}
.social {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
}
.social a {
  background-color: inherit !important;
  color: #fff !important;
  text-decoration: unset;
  text-underline-offset: 2px;
  transition: .25s;
}
.social a:hover {
  text-decoration: underline;
}
.social svg {
  fill: #fff;
  width: 24px;
  height: 24px;
  transform: translate(-4px, 6px);
}
.social span {
  font-size: 16px;
}
</style>
