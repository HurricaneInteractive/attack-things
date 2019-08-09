export type PlayerStats = "attack" | "defence" | "stamina" | "magic";

interface Player {
  name: string;
  stats: Record<PlayerStats, number>;
}

export interface RootState {
  player: Player;
}
