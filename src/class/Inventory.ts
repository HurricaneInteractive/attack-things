import Item from "./Item";

export interface Slot {
  item: Item;
  quantity: number;
  capacity: number;
}

class Inventory {
  public slots: number = 4;
  public capacity: number = 5;
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

  public newItem(item: Item, quantity: number = 1): Slot {
    return {
      item,
      quantity: quantity > this.capacity ? this.capacity : quantity,
      capacity: this.capacity
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
    if (this.items[idx] && this.checkSlotCapacity(idx, by * -1)) {
      this.items[idx].quantity -= by;
    }
  }

  public getItemQuantity(idx: number): number {
    const item = this.getItem(idx);
    if (item) {
      return item.quantity;
    }

    return -1;
  }
}

export default Inventory;
