import { Mutate, MUTATIONS } from "@/types/mutations";
import { MutationPayload } from "@/types/store";

interface ItemSpec {
  name: string;
  description: string;
  mutates: MUTATIONS;
  payload: MutationPayload;
  buyPrice: number;
  sellPrice?: number;
  image?: string;
}

class Item implements ItemSpec {
  public name: string;
  public description: string;
  public mutates: MUTATIONS;
  public payload: any;
  public buyPrice: number;
  public sellPrice: number;
  public image: string;

  public constructor(
    name: string,
    description: string,
    mutates: Mutate,
    payload: MutationPayload,
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

  public consume(
    fn: (mutation: MUTATIONS, payload: MutationPayload) => void
  ): void {
    fn(this.mutates, this.payload);
  }
}

export default Item;
