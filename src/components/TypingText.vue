<script lang="ts" setup>
import { TypingEffect } from "@/assets/script/typing";

const props = defineProps<{
  content: string,
}>();

const effect = new TypingEffect(props.content, 800, true).run();
</script>

<template>
  <div class="text">
    <p>{{ effect }}</p>
  </div>
</template>

<style scoped>
.text {
  text-align: center;
  z-index: -1;
  color: #fff;
  transition: .45s;
  background: rgba(0,0,0,.2);
  backdrop-filter: blur(2px);
  text-shadow: 0 2px 20px rgba(0,0,0,.8);
  border-radius: 8px;
  padding: 6px 8px;
  user-select: none;
}

.text:hover {
  text-shadow: 0 2px 20px rgba(0,0,0,.9);
  background: rgba(60,60,60,.3);
}
</style>
