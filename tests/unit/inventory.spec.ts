import Inventory from "@/class/Inventory";
import Item from "@/class/Item";

describe("Inventory", () => {
  const inven = new Inventory();
  const Potion = new Item("Potion", "UPDATE_PLAYER_HP");

  test("Inventory is empty", () => {
    expect(inven.isInventoryEmpty()).toBeTruthy();
  });

  describe("Adding Items to the Inventory", () => {
    test("Add item to inventory", () => {
      expect(inven.setItem(Potion)).toBeTruthy();
    });

    test("Inventory has 1 item", () => {
      expect(inven.items.length).toBe(1);
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
  });

  describe("Getting items from the Inventory", () => {
    test("Can retrieve the first item", () => {
      expect(inven.getItem(0)).toBeTruthy();
    });

    test("Can't retrieve the second item", () => {
      expect(inven.getItem(1)).toBeNull();
    });
  });
});
