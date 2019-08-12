import Item from "./Item";

export interface Slot {
  item: Item;
  quantity: number;
  capacity: number;
}

class Inventory {
  private slots: number = 4;
  public items: Slot[] = [];

  public isInventoryEmpty(): boolean {
    return this.items.length === 0;
  }

  public getItem(idx: number): Slot | null {
    return this.items[idx] || null;
  }

  private findFirstEmptySlot(): number {
    const empty = this.items.findIndex(
      (item): boolean => typeof item === "undefined"
    );

    return empty;
  }

  public getNumberOfItems(): number {
    return this.items.filter(
      (item: Slot | undefined): boolean => typeof item !== "undefined"
    ).length;
  }

  private newItem(item: Item, quantity: number = 1): Slot {
    return {
      item,
      quantity: quantity,
      capacity: 5
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

  private checkSlotCapacity(idx: number, operation: number): boolean {
    const item = this.items[idx];
    const check =
      operation > 0 ? item.quantity < item.capacity : item.quantity > 0;

    return check;
  }

  public incrementQuantity(idx: number, by: number = 1): void {
    if (this.items[idx] && this.checkSlotCapacity(idx, by)) {
      this.items[idx].quantity += by;
    }
  }

  public decreaseQuantity(idx: number, by: number = 1): void {
    if (this.items[idx] && this.checkSlotCapacity(idx, by)) {
      this.items[idx].quantity -= by;
    }
  }
}

export default Inventory;
