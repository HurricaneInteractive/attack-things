import Inventory from "@/class/Inventory";

export type Stats = "attack" | "defence" | "stamina" | "magic";

export interface Player {
  name: string;
  stats: Record<Stats, number>;
  gold: number;
  inventory: Inventory;
  hp: number;
  mp: number;
}

export interface RootState {
  player: Player;
  currentLvl: number;
}

export type MutationPayload = {
  readonly [P in keyof Player]?: Player[P];
};
