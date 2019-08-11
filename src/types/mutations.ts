export enum MUTATIONS {
  UPDATE_PLAYER_NAME = "update_player_name",
  UPDATE_PLAYER_STAT = "update_player_stat",
  UPDATE_PLAYER_HP = "update_player_hp"
}

export type Mutate = keyof typeof MUTATIONS;
