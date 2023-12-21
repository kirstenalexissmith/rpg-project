import Combat from "../src/combat.js"

describe('Combat', () => {

  beforeEach(() => {
    function Player() {
      this.dex = Math.trunc(Math.random() * 100) + 1;
    }
    let p1 = new Player();
    let p2 = new Player();
    let combat = new Combat();
  });

  test('testing to check that player constructor is functional', () => {

    let p1dex = p1.dex;
    expect(p1.dex).toEqual(p1dex);
    expect(combat.roundCount).toEqual(0);
  });

  //   test('when combat occurs this system rolls random numbers from each character & when one characters total >= 100 they win', () => {
  //     let combat = new Combat();
  //     expect(combat.winner[0] != combat.winner[1]).toBeTruthy();
  //   });

})