import { Mutate } from "@/types/mutations";

class Item {
  public name: string;
  public mutates: Mutate;
  public price: number;

  public constructor(name: string, mutates: Mutate, price: number) {
    this.name = name;
    this.mutates = mutates;
    this.price = price;
  }
}

export default Item;
