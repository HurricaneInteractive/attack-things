<template>
  <div class="fade-in">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FadeIn"
});
</script>

<style lang="scss" scoped>
.fade-in {
  animation-name: fadeInUp;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    transform: translate3d(0, 30px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
</style>
