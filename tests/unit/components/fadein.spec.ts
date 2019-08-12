import { shallowMount } from "@vue/test-utils";
import FadeIn from "@/components/effects/FadeIn.vue";

describe("FadeIn", () => {
  it("renders a div", () => {
    const wrapper = shallowMount(FadeIn);
    expect(wrapper.contains("div")).toBe(true);
  });

  it("renders a div with the fade-in class", () => {
    const wrapper = shallowMount(FadeIn);
    expect(wrapper.contains("div.fade-in")).toBe(true);
  });
});
