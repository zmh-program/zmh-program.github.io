<script setup lang="ts">
import TypingText from "@/components/TypingText.vue";
import type { Ref } from "vue";
import { ref, watch } from "vue";

const main: Ref<HTMLElement | null> = ref(null);
const degree = ref(0);

function scroll() {
  const pos = main.value?.scrollTop || 0;
  degree.value = (pos / document.body.clientHeight) * 360;
}
</script>

<template>
  <main ref="main" @scroll="scroll">
    <div class="fabric">
      <img src="/background.webp" class="background" alt="" />
      <div class="avatar">
        <img src="/avatar/zmh-program.png" alt="zmh-program" />
      </div>
      <TypingText content="Nothing is impossible." class="quote" />
      <div class="arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :style="{'transform': `rotate(${degree}deg)`}">
          <path d="m12 15.586-4.293-4.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414z"></path>
          <path d="m17.707 7.707-1.414-1.414L12 10.586 7.707 6.293 6.293 7.707 12 13.414z"></path>
        </svg>
      </div>
    </div>
    <div class="container">
      hi
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
}

.fabric .arrow {
  position: relative;
  top: calc(-20vh - 56px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  padding: 2px;
  background: rgba(255,255,255,.1);
  backdrop-filter: blur(2px);
  border-radius: 50%;
}

.fabric .arrow svg {
  fill: #fff;
  width: 32px;
  height: 32px;
  transition: transform .2s ease-in-out;
}

.container {
  position: relative;
  transform: translateY(100%);
  background: #1E1E1EFF;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

@keyframes ScaleInAnimation {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
