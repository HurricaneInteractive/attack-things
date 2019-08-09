<template>
  <div class="stats">
    <PlayerName
      v-if="creationStep === 1"
      v-on:changeStep="changeCreationStep"
    />
    <PlayerStats v-if="creationStep === 2" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PlayerName from "@/components/intro/PlayerName.vue";
import PlayerStats from "@/components/intro/PlayerStats.vue";

export default Vue.extend({
  name: "stats",
  components: {
    PlayerName,
    PlayerStats
  },
  data: () => ({
    creationStep: 1
  }),
  methods: {
    changeCreationStep(step: number) {
      this.creationStep = step;
    }
  }
});
</script>

<style lang="scss" scoped>
.stats {
  width: 100%;
  height: 100%;
}
</style>
