import { shallowMount, createLocalVue, Wrapper } from "@vue/test-utils";
import Vuex from "vuex";

import PlayerName from "@/components/intro/PlayerName.vue";
import FadeIn from "@/components/effects/FadeIn.vue";
import { MUTATIONS } from "@/types/mutations";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("PlayerName", () => {
  let store: any;
  let wrapper: Wrapper<PlayerName>;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        player: {
          name: ""
        }
      },
      mutations: {
        [MUTATIONS.UPDATE_PLAYER_NAME]: jest.fn()
      }
    });
    wrapper = shallowMount(PlayerName, { store, localVue });
  });

  it("Has a FadeIn component", () => {
    expect(wrapper.contains(FadeIn)).toBeTruthy();
  });

  it("Contains step-1 div", () => {
    expect(wrapper.contains("div.step-1")).toBeTruthy();
  });
});
