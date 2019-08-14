import Item from "@/class/Item";

export const Potion = new Item({
  name: "Potion",
  description: "Restores a player's health points",
  mutates: "UPDATE_PLAYER_HP",
  payload: {
    hp: 10
  },
  buyPrice: 10
});

export const ManaPotion = new Item({
  name: "Potion",
  description: "Restores a player's health points",
  mutates: "UPDATE_PLAYER_HP",
  payload: {
    mp: 10
  },
  buyPrice: 15,
  sellPrice: 10,
  image: "custom-image.path"
});
