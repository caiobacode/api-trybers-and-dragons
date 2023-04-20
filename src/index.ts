import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';

const player1 = new Character('Caio');
player1.levelUp();

const player2 = new Character('Lucas');
const player3 = new Character('Rafael');

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => battle.fight());
}

export { 
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};