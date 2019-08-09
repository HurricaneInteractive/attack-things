type Stats = "attack" | "defence" | "stamina" | "magic";
type EnemyStats = Record<Stats, number>;

class Enemy {
  public name: string;
  public image: string;
  public stats: EnemyStats;

  public hp: number = 100;
  private minStat: number = 2;
  private maxStat: number = 8;
  private availablePoints: number = 15;

  public constructor(name: string, image: string) {
    this.name = name;
    this.image = image;
    this.stats = this.generateStats();
  }

  private getRandomIntInclusive(
    min: number = this.minStat,
    max: number = this.maxStat
  ): number {
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

  private generateStats(): EnemyStats {
    let shuffled: Stats[] = this.shuffle([
      "attack",
      "defence",
      "stamina",
      "magic"
    ]);
    let stats = [];

    for (let i = 0; i < shuffled.length; i++) {
      let stat: number = this.getRandomIntInclusive(0, this.availablePoints);
      this.availablePoints -= stat;
      stats.push(stat);
    }

    let overTen = stats.findIndex(s => s > 10);
    if (overTen !== -1) {
      const val = stats[overTen];
      const dif = val - 10;
      let underThree = stats.findIndex(s => s < 3);
      stats[underThree] += dif;
      stats[overTen] = 10;
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
