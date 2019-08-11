import Inventory from "@/class/Inventory";

export type Stats = "attack" | "defence" | "stamina" | "magic";

export interface Player {
  name: string;
  stats: Record<Stats, number>;
  gold: number;
  inventory: Inventory;
  hp: number;
}

export interface RootState {
  player: Player;
  currentLvl: number;
}
