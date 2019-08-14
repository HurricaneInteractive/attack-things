import { MUTATIONS } from "@/types/mutations";
import { MutationPayload } from "@/types/store";

export interface ItemSpec {
  name: string;
  description: string;
  mutates: keyof typeof MUTATIONS;
  payload: MutationPayload;
  buyPrice: number;
  sellPrice?: number;
  image?: string;
}

class Item implements ItemSpec {
  public name: string;
  public description: string;
  public mutates: keyof typeof MUTATIONS;
  public payload: any;
  public buyPrice: number;
  public sellPrice: number;
  public image: string;

  public constructor({
    name,
    description,
    mutates,
    payload,
    buyPrice,
    sellPrice = -1,
    image = ""
  }: ItemSpec) {
    this.name = name;
    this.mutates = mutates;
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
    fn(MUTATIONS[this.mutates], this.payload);
  }
}

export default Item;
