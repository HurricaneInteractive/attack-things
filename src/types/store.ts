export type Stats = "attack" | "defence" | "stamina" | "magic";

interface Player {
  name: string;
  stats: Record<Stats, number>;
  gold: number;
}

export interface RootState {
  player: Player;
  currentLvl: number;
}
