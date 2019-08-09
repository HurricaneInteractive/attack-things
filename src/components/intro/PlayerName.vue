<template>
  <FadeIn>
    <div class="step-1">
      <h2>Welcome</h2>
      <p>Let's start with your name</p>
      <input
        type="text"
        name="player_name"
        id="player_name"
        autofocus
        class="grit"
        :value="name"
        v-on:input="onNameChange($event)"
        autocomplete="off"
      />
      <FadeIn v-if="name.length > 0">
        <a
          href="#"
          class="btn grit"
          v-on:click.prevent="$emit('changeStep', 2)"
        >
          Continue
        </a>
      </FadeIn>
    </div>
  </FadeIn>
</template>

<script lang="ts">
import Vue from "vue";
import FadeIn from "@/components/effects/FadeIn.vue";

import { MUTATIONS } from "@/store/mutations";

export default Vue.extend({
  name: "PlayerName",
  components: {
    FadeIn
  },
  props: {
    creationStep: Number
  },
  methods: {
    onNameChange($event: any): void {
      this.$store.commit(MUTATIONS.UPDATE_PLAYER_NAME, $event.target.value);
    }
  },
  computed: {
    name(): string {
      return this.$store.state.player.name;
    }
  }
});
</script>

<style lang="scss" scoped>
.step-1 {
  position: relative;
  padding-bottom: 5rem;
  /deep/ .fade-in {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}

h2 {
  margin: 0;
}

p {
  margin: 0 0 30px;
}

input[type="text"] {
  font-weight: bold;
}
</style>
