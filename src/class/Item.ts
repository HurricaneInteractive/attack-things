import { Mutate } from "@/types/mutations";

class Item {
  public name: string;
  public mutates: Mutate;

  public constructor(name: string, mutates: Mutate) {
    this.name = name;
    this.mutates = mutates;
  }
}

const Potion = new Item("Potion", "UPDATE_PLAYER_HP");

export default Item;
