import Item from "@/class/Item";

export const Potion = new Item({
  name: "Potion",
  description: "Restores a player's health points",
  mutates: "UPDATE_PLAYER_HP",
  payload: {
    hp: 20
  },
  buyPrice: 20
});

export const ManaPotion = new Item({
  name: "Potion",
  description: "Restores a player's health points",
  mutates: "UPDATE_PLAYER_HP",
  payload: {
    mp: 20
  },
  buyPrice: 25
});
