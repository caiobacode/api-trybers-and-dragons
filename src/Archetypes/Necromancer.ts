import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static __instances = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.__instances += 1;
  }

  override get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number { return this.__instances; }
}