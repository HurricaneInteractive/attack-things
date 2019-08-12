import Inventory from "@/class/Inventory";
import Item from "@/class/Item";

describe("Inventory", () => {
  const inven = new Inventory();
  const Potion = new Item("Potion", "UPDATE_PLAYER_HP", 100);

  test("Inventory is empty", () => {
    expect(inven.isInventoryEmpty()).toBeTruthy();
  });

  describe("Adding Items to the Inventory", () => {
    test("Add item to inventory", () => {
      expect(inven.setItem(Potion)).toBeTruthy();
    });

    test("Inventory has 1 item", () => {
      expect(inven.getNumberOfItems()).toBe(1);
    });

    test("Inserting item at index 3 to succeed", () => {
      expect(inven.setItem(Potion, 3)).toBeTruthy();
    });

    test("Inserting item at index 4 to fail", () => {
      expect(inven.setItem(Potion, 4)).toBeFalsy();
    });

    test("Inventory has 2 items", () => {
      expect(inven.getNumberOfItems()).toBe(2);
    });

    test("Replacing item 0 with a new Item", () => {
      expect(inven.setItem(Potion, 0)).toBeTruthy();
    });

    test("Adding item without setting index after index 3 has been set", () => {
      expect(inven.setItem(Potion)).toBeTruthy();
    });
  });

  describe("Getting items from the Inventory", () => {
    test("Can retrieve the first item", () => {
      expect(inven.getItem(0)).toBeTruthy();
    });

    test("Can't retrieve the third item", () => {
      expect(inven.getItem(2)).toBeNull();
    });
  });

  describe("Change item quantity", () => {
    test("Increase the quantity by 1", () => {
      inven.incrementQuantity(0);
      expect(inven.getItemQuantity(0)).toBe(2);
    });

    test("Decrease the quantity by 2", () => {
      inven.decreaseQuantity(0, 2);
      expect(inven.getItemQuantity(0)).toBe(0);
    });

    test("Item 0's quantity should be 0", () => {
      expect(inven.getItemQuantity(0)).toBe(0);
    });

    test("Decreasing item 0's quantity should do nothing, because it is 0", () => {
      inven.decreaseQuantity(0);
      expect(inven.getItemQuantity(0)).toBe(0);
    });

    test("Set item 0' quantity to 5", () => {
      inven.incrementQuantity(0, 5);
      expect(inven.getItemQuantity(0)).toBe(5);
    });

    test("Increasing item 0's quantity should do nothing, because it is at capacity", () => {
      inven.incrementQuantity(0);
      expect(inven.getItemQuantity(0)).toBe(5);
    });

    test("Item 2's quantity to be -1", () => {
      expect(inven.getItemQuantity(2)).toBe(-1);
    });
  });

  describe("Full inventory", () => {
    test("Add another item to the Inventory", () => {
      expect(inven.setItem(Potion)).toBeTruthy();
    });

    test("Inventory is full, adding another item will fail", () => {
      expect(inven.setItem(Potion)).toBeFalsy();
    });
  });

  describe("New Inventory Item", () => {
    const item = inven.newItem(Potion);

    test("Creating new item", () => {
      expect(item.item.name).toBe(Potion.name);
    });

    test("Item quantity should be 1", () => {
      expect(item.quantity).toBe(1);
    });

    test("Item capacity should be 5", () => {
      expect(item.capacity).toBe(5);
    });

    test("Item with custom quantity has the specified quantity", () => {
      const itemWithQuantity = inven.newItem(Potion, 5);
      expect(itemWithQuantity.quantity).toBe(5);
    });

    test("Settings quantity to large number than capacity should return capacity", () => {
      const itemWithLargeQuan = inven.newItem(Potion, 100);
      expect(itemWithLargeQuan.quantity).toBe(5);
    });
  });
});
