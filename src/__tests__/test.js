import iterable from '../app/iterable';
import Team from '../app/Team';
import Character from '../app/Character';

describe(('Check iterable function'), () => {
  const bowman = new Character('Лучник', 'Bowman');
  const demon = new Character('Демон', 'Demon');
  const mag = new Character('Маг', 'Mag');
  const warrior = new Character('Воин', 'Warrior');
  const team = new Team();
  team.addAll(bowman, demon, mag, warrior);
  test(('Check correct result'), () => {
    
  });
});
