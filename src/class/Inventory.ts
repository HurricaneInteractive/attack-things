import Item from "./Item";

interface Slot {
  item: Item;
  quantity: number;
}

class Inventory {
  private slots: number = 4;
  public items: Slot[] = [];

  public getItem(idx: number): Slot | null {
    return this.items[idx] || null;
  }

  private findFirstEmptySlot(): number {
    const empty = this.items.findIndex(
      (item): boolean => typeof item === "undefined"
    );

    return empty;
  }

  private newItem(item: Item, quantity: number = 1): Slot {
    return {
      item,
      quantity: quantity
    };
  }

  public setItem(item: Item, idx: number = -1): boolean {
    if (idx === -1) {
      if (this.items.length < this.slots) {
        this.items.push(this.newItem(item));
        return true;
      } else {
        const empty = this.findFirstEmptySlot();
        if (empty !== -1) {
          this.items[empty] = this.newItem(item);
          return true;
        }
      }
    } else {
      if (idx < this.slots) {
        this.items[idx] = this.newItem(item);
        return true;
      }
    }

    return false;
  }
}

export default Inventory;
