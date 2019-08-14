import Item from "@/class/Item";

export const Potion = new Item(
  "Potion",
  "Restores a player's health points",
  "UPDATE_PLAYER_HP",
  {
    hp: 20
  },
  20
);

export const ManaPotion = new Item(
  "Mana Potion",
  "Restores a player's magic points",
  "UPDATE_PLAYER_MP",
  {
    mp: 20
  },
  25
);
