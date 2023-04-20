import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(public player1: Fighter, public player2: Fighter) {
    super(player1);
  }

  fight(): number {
    // While both players have life points greather than -1, the fight continues.
    for (let stopfight = 100; stopfight !== -1; stopfight += 0) {
      this.player1.attack(this.player2);
      stopfight = this.player2.lifePoints;

      this.player2.attack(this.player1);
      if (stopfight !== -1) stopfight = this.player1.lifePoints;
    }

    const fightResult = super.fight();
    return fightResult;
  }
}