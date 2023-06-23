<script setup lang="ts">

import TypingText from "@/components/TypingText.vue";
</script>

<template>
  <main>
    <img class="background" src="/background.webp" alt />
    <TypingText content="Nothing is impossible." class="quote" />
  </main>
</template>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
