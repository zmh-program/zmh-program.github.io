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
    <div class="container">
      <h2>About</h2>
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

.container {
  position: relative;
  transform: translateY(100%);
  background: #1E1E1EFF;
  width: 100%;
  height: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.container h2 {
  font-size: 32px;
  font-weight: bold;
  margin: 20px 0;
  position: relative;
  color: #fff;
  transition: .25s;
  user-select: none;
}

.container h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 3px;
  background: #149ddd;
  bottom: 1px;
  left: 0;
}

.container h2:hover {
  color: #149ddd;
}
</style>
