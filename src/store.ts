import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

import { MUTATIONS } from "./types/mutations";
import { RootState, Stats } from "./types/store";
import Inventory from "@/class/Inventory";

const store: StoreOptions<RootState> = {
  state: {
    player: {
      name: "",
      stats: {
        attack: 0,
        defence: 0,
        stamina: 0,
        magic: 0
      },
      gold: 100,
      inventory: new Inventory(),
      hp: 100,
      mp: 100
    },
    currentLvl: 1
  },
  mutations: {
    [MUTATIONS.UPDATE_PLAYER_NAME](state, name) {
      state.player.name = name;
    },
    [MUTATIONS.UPDATE_PLAYER_STAT](
      state,
      payload: { key: Stats; stat: number }
    ) {
      state.player.stats[payload.key] += payload.stat;
    }
  },
  actions: {}
};

Vue.use(Vuex);

export default new Vuex.Store<RootState>(store);
