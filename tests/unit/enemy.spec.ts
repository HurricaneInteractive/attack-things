import Enemy, { Probability } from "@/class/Enemy";

describe("Enemy", () => {
  test("Successfully creates a new Enemy", () => {
    const e = new Enemy("Bob", "url");
    expect(e.name).toBe("Bob");
    expect(e.image).toBe("url");
    expect(Object.keys(e.stats).length).toBe(4);
  });

  test("Stat points are equal to available points", () => {
    const e = new Enemy("Bob", "url");
    const points = 15;
    let sum = 0;
    for (let [key, value] of Object.entries(e.stats)) {
      sum += value;
    }

    expect(sum).toBe(points);
  });

  test("Generates 50 enemies without errors", () => {
    for (let i = 0; i < 50; i++) {
      const e = new Enemy("Bob", "url");
      const points = 15;
      let sum = 0;
      for (let [key, value] of Object.entries(e.stats)) {
        sum += value;
      }

      expect(sum).toBe(points);
    }
  });

  test("Available Points is more than 0", () => {
    const e = new Enemy("Bob", "url");
    expect(e.getAvailablePoints(1)).toBe(1);
  });

  test("Available Points is 0", () => {
    const e = new Enemy("Bob", "url");
    expect(e.getAvailablePoints(-1)).toBe(0);
  });

  describe("Stat Probability", () => {
    const e = new Enemy("Bob", "url");

    test("Change probability to match second value", () => {
      const probability: Probability = [[10, 0], [0, 4]];
      const newProbability = e.setProbabilitySequence(probability, 3, 1);
      expect(newProbability[1][0]).toBe(4);
    });

    test("Keep probability the same", () => {
      const probability: Probability = [[10, 0], [0, 4]];
      const newProbability = e.setProbabilitySequence(probability, 5, 1);
      expect(newProbability[1][0]).toBe(5);
    });
  });
});
