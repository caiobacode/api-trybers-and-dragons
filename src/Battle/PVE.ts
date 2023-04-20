import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(public player: Fighter, public enemies: Fighter[]) {
    super(player);
  }

  fight(): number {
    while (
      this.player.lifePoints !== -1
      && !this.enemies.every((e) => e.lifePoints === -1)
    ) {
      this.enemies.forEach((e) => {
        e.attack(this.player);
        this.player.attack(e);
      });
    }
    const fightResult = super.fight();
    return fightResult;
  }
}