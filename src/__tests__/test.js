import iterable from '../app/iterable';
import Team from '../app/Team';
import Character from '../app/Character';

describe(('Check iterable function'), () => {
  const bowman = new Character('Лучник', 'Bowman');
  const demon = new Character('Демон', 'Demon');
  const team = new Team();
  team.addAll(bowman, demon);
  test(('Check correct result'), () => {
    const arr = [];
    const expectedResult = [{
      name: 'Лучник',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 100,
      defence: 100,
    }, {
      name: 'Демон',
      type: 'Demon',
      health: 100,
      level: 1,
      attack: 100,
      defence: 100,
    }];
    for (const hero of iterable(team)) {
      arr.push(hero);
    }
    expect(arr).toEqual(expectedResult);
  });
});
