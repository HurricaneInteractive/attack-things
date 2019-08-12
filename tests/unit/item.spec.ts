import { Potion, ManaPotion } from "../data/MockItem";
import { MUTATIONS } from "@/types/mutations";

describe("Item", () => {
  it("Has a name attribute", () => {
    expect(Potion.name).toBeTruthy();
  });

  test("Potion has a sell price half the buy price", () => {
    expect(Potion.sellPrice).toBe(Potion.setSellPrice());
  });

  test("Mana Potion has a sell price of 10", () => {
    expect(ManaPotion.sellPrice).toBe(10);
  });

  test("Potion has the default image", () => {
    expect(Potion.image).toBe(Potion.getDefaultImage());
  });

  test("Mana Potion has a custom image path", () => {
    expect(ManaPotion.image).toBe("custom-image.path");
  });

  test("Able to consume Potion and get correct Mutation and Payload", () => {
    const mutate = MUTATIONS.UPDATE_PLAYER_HP;
    function callback(mutation: MUTATIONS, payload: { hp: number }) {
      expect(mutation).toBe(mutate);
      expect(payload).toEqual({
        hp: 10
      });
    }

    Potion.consume(callback);
  });
});
