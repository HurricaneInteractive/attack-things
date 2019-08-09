<template>
  <div class="home">
    <FadeIn>
      <span class="grit">Let's start</span>
      <h1 class="grit">Attacking Things</h1>
      <router-link class="grit btn" :to="statRoute">Get Started</router-link>
    </FadeIn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FadeIn from "@/components/effects/FadeIn.vue";

import { ROUTES } from "@/types/routes";

export default Vue.extend({
  name: "home",
  components: {
    FadeIn
  },
  data: () => ({
    statRoute: ROUTES.STATS
  })
});
</script>

<style lang="scss" scoped>
@import "@/scss/_variable.scss";

.home {
  width: 100%;
  span {
    font-size: 0.875rem;
    text-transform: uppercase;
  }
  h1 {
    margin: 0 0 40px;
  }
}
</style>
