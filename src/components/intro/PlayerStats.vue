<template>
  <FadeIn>
    <div class="step-2">
      <h2 class="grit">Alright {{ name }}, let's see what your made of.</h2>
      <p>Distribute your points into your character statistics</p>
      <div class="stat-wrapper">
        <div class="stats-inputs grit">
          <template v-for="stat in stats">
            <div class="stat-input" :key="stat">
              <h3>{{ stat }}</h3>
              <div class="inputs">
                <button
                  v-on:click.prevent="updatePlayerStats(stat, -1)"
                  :class="minusButtonClass(stat)"
                >
                  -
                </button>
                <p>{{ getStatDetails(stat) }}</p>
                <button
                  v-on:click.prevent="updatePlayerStats(stat, 1)"
                  :class="plusButtonClass(stat)"
                >
                  +
                </button>
              </div>
            </div>
          </template>
        </div>
        <div class="available-points grit">{{ availablePoints }}</div>
      </div>
      <router-link :class="btnClass" to="/">Complete</router-link>
    </div>
  </FadeIn>
</template>

<script lang="ts">
import Vue from "vue";
import FadeIn from "@/components/effects/FadeIn.vue";

import { MUTATIONS } from "@/types/mutations";
import { Stats } from "@/types/store";

interface PlayerStatsData {
  stats: Stats[];
}

export default Vue.extend({
  name: "PlayerStats",
  components: {
    FadeIn
  },
  data: (): PlayerStatsData => ({
    stats: ["attack", "defence", "stamina", "magic"]
  }),
  methods: {
    getStatDetails(key: Stats): number {
      return this.$store.state.player.stats[key];
    },
    updatePlayerStats(key: Stats, value: number = 1) {
      const cur = this.getStatDetails(key);
      if ((value > 0 && cur === 10) || (value < 0 && cur === 0)) {
        return false;
      }

      if (value > 0 && this.availablePoints === 0) {
        return false;
      }

      this.$store.commit(MUTATIONS.UPDATE_PLAYER_STAT, {
        key,
        stat: value
      });
    },
    plusButtonClass(key: Stats): string {
      const cur = this.getStatDetails(key);
      if (cur === 10 || this.availablePoints === 0) {
        return "hide";
      }

      return "";
    },
    minusButtonClass(key: Stats): string {
      const cur = this.getStatDetails(key);
      if (cur === 0) {
        return "hide";
      }

      return "";
    }
  },
  computed: {
    name(): string {
      return this.$store.state.player.name;
    },
    availablePoints(): number {
      let ap = 15;
      const stats = this.$store.state.player.stats;
      const total = Object.keys(stats).reduce((prev, cur) => {
        return prev + stats[cur];
      }, 0);

      return ap - total;
    },
    btnClass(): string {
      let c = "btn grit";
      if (this.availablePoints === 0) {
        c += " reveal";
      }

      return c;
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/scss/_variable.scss";

.fade-in {
  height: 100%;
}

.step-2 {
  height: 100%;
  display: flex;
  flex-direction: column;
  h2 {
    margin: 0;
    line-height: 1;
  }

  .stat-wrapper {
    flex-grow: 2;
    position: relative;
    margin-top: 20px;
    margin-bottom: 10px;
    .stats-inputs {
      border: 2px solid $text;
      padding: 30px 15px;
      height: 100%;
      .stat-input {
        &:not(:last-of-type) {
          margin-bottom: 25px;
        }
        h3 {
          margin: 0 0 5px;
          text-transform: uppercase;
          font-weight: normal;
          font-size: 0.875rem;
        }
        .inputs {
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            margin: 0;
            font-weight: bold;
          }
          button {
            border: 1px solid $text;
            border-radius: 0;
            color: $text;
            background: transparent;
            font-size: 1.25rem;
            padding: 0;
            width: 40px;
            line-height: 38px;
            &.hide {
              pointer-events: none;
              opacity: 0;
            }
          }
        }
      }
    }
    .available-points {
      position: absolute;
      bottom: calc(100% - 17px);
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      line-height: 30px;
      display: inline-block;
      padding: 0 5px;
      border: 2px solid $text;
      background: $body;
      text-align: center;
      max-width: 100px;
      width: 100%;
      font-weight: bold;
    }
  }

  .btn {
    text-align: center;
    transition: all 300ms ease-in-out;
    &:not(.reveal) {
      opacity: 0;
      pointer-events: none;
    }
  }
}
</style>
