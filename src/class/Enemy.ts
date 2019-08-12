import { Stats } from "@/types/store";

type EnemyStats = Record<Stats, number>;

export type Probability = Array<[number, number]>;

class Enemy {
  public name: string;
  public image: string;
  public stats: EnemyStats;

  public hp: number = 100;
  private availablePoints: number = 15;

  public constructor(name: string, image: string) {
    this.name = name;
    this.image = image;
    this.stats = this.generateStats();
  }

  private getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private shuffle<T>(array: Array<T>): Array<T> {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  public getAvailablePoints(points: number): number {
    return points < 0 ? 0 : points;
  }

  public setProbabilitySequence(
    probability: Probability,
    available: number,
    index: number
  ): Probability {
    let second = probability[index][1];
    let first = available < second ? second : available;
    probability[index][0] = first;
    return probability;
  }

  private generateStats(): EnemyStats {
    let shuffled: Stats[] = this.shuffle([
      "attack",
      "defence",
      "stamina",
      "magic"
    ]);
    let stats = new Array(shuffled.length).fill(0);
    let probability: Probability = [[10, 5], [0, 2], [0, 1], [0, 0]];
    let available = this.availablePoints;

    for (let i = 0; i < stats.length; i++) {
      const stat = this.getRandomIntInclusive(
        probability[i][0],
        probability[i][1]
      );

      if (i < stats.length - 1) {
        stats[i] = stat;
        available -= stat;
        available = this.getAvailablePoints(available);
        probability = this.setProbabilitySequence(
          probability,
          available,
          i + 1
        );
      } else {
        stats[i] = this.getAvailablePoints(available);
      }
    }

    const result: EnemyStats = {
      attack: 0,
      defence: 0,
      stamina: 0,
      magic: 0
    };

    stats.forEach((stat: number, i: number): void => {
      result[shuffled[i]] = stat;
    });

    return result;
  }
}

export default Enemy;
