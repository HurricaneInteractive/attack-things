import Item, { ItemSpec } from "@/class/Item";
import { Stats } from "@/types/store";

interface WeaponSpec extends ItemSpec {
  attribute: Stats;
  boost: number;
}

class Weapon extends Item implements WeaponSpec {
  public attribute: Stats;
  public boost: number;

  public constructor({ attribute, boost, ...props }: WeaponSpec) {
    super(props);
    this.attribute = attribute;
    this.boost = boost;
  }
}

export default Weapon;
