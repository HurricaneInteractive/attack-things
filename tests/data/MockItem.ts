import Item from "@/class/Item";

export const Potion: Item = new Item(
  "Potion",
  "Heals a players hp",
  "UPDATE_PLAYER_HP",
  { hp: 10 },
  10
);

export const ManaPotion: Item = new Item(
  "Mana Potion",
  "Restores a players MP",
  "UPDATE_PLAYER_HP",
  { mp: 10 },
  15,
  10,
  "custom-image.path"
);