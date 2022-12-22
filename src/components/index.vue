<script setup>
import VanillaTilt from './vanilla-tilt.vue'
import message from './message.vue';
set_animation_delay("list", 0.25, 0.5);
for (let elements = document.getElementsByClassName("glass-box"),i = 0,length=elements.length; i < length; i++) {
  VanillaTilt.init(elements[i], {reverse:true});
}
</script>

<style scoped>
.clearfix{zoom: 1;}  .clearfix:after{content: "\20";display: block;height: 0;clear: both;}
</style>