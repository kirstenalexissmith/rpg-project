export default class Character {
  constructor(profession) {
    this.profession = profession;
    this.level = 1;
    this.xp = 0;
    this.str = Math.trunc(Math.random() * 100) + 1;
    this.dex = Math.trunc(Math.random() * 100) + 1;
    this.int = Math.trunc(Math.random() * 100) + 1;
  }
  levelUp() {
    this.level = this.level + 1;
    this.str = this.str + 5;
    this.dex = this.dex + 5;
    this.int = this.int + 5;
  }
  levelUpCheck() {
    /* istanbul ignore else */
    if (this.xp >= 100) {
      this.levelUp();
      this.xp = 0;
    }
  }
  addXP(n) {
    this.xp = this.xp + n;
  }

}

