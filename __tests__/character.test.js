import Character from "../src/character.js";

describe('Character', () => {
  test('should create character class object', () => {
    let amyChar = new Character(1)
    expect(amyChar.profession).toEqual(1);
  })

  test('should check to see if leveling up works', () => {
    let amyChar = new Character(1);
    let strTest = amyChar.str;
    amyChar.levelUp();
    expect(amyChar.str).toBeGreaterThan(strTest);
  })

  test('level up should increase level by 1', () => {
    let amyChar = new Character(1);
    let amyLevel = amyChar.level;
    amyChar.levelUp();
    expect(amyChar.level).toBeGreaterThan(amyLevel);
  })

  test('going to check xp levels and run the level up method on that character, and resets xp to zero', () => {
    let amyChar = new Character(1);
    amyChar.xp = 101;
    let amyLevel = amyChar.level;
    amyChar.levelUpCheck();
    expect(amyChar.level).toBeGreaterThan(amyLevel);
    expect(amyChar.xp).toEqual(0);
  })

  test('should check to see if the characters xp increases', () => {
    let amyChar = new Character(1)
    let amyXP = amyChar.xp;
    let xp = Math.trunc(Math.random() * 100) + 1;
    amyChar.addXP(xp)
    expect(amyChar.xp).toBeGreaterThan(amyXP);
  })

})