import { Mutate, MUTATIONS } from "@/types/mutations";

interface ItemSpec<T> {
  name: string;
  description: string;
  mutates: MUTATIONS;
  payload: T;
  buyPrice: number;
  sellPrice?: number;
  image?: string;
}

class Item<T> implements ItemSpec<T> {
  public name: string;
  public description: string;
  public mutates: MUTATIONS;
  public payload: T;
  public buyPrice: number;
  public sellPrice: number;
  public image: string;

  public constructor(
    name: string,
    description: string,
    mutates: Mutate,
    payload: T,
    buyPrice: number,
    sellPrice: number = -1,
    image: string = ""
  ) {
    this.name = name;
    this.mutates = MUTATIONS[mutates];
    this.buyPrice = buyPrice;
    this.payload = payload;
    this.description = description;
    this.sellPrice = sellPrice <= 0 ? this.setSellPrice() : sellPrice;
    this.image = image ? image : this.getDefaultImage();
  }

  public setSellPrice(): number {
    return this.buyPrice - this.buyPrice * 0.5;
  }

  public getDefaultImage(): string {
    return "@/assets/item.svg";
  }

  public consume(fn: (mutation: MUTATIONS, payload: T) => void): void {
    fn(this.mutates, this.payload);
  }
}

export default Item;
