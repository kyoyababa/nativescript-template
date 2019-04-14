import { DatabaseHandler } from './database.handler';

const databaseHelper = new DatabaseHandler();

describe('getRandomCountry', () => {
  describe('300回実行したとき', () => {
    for (let i = 0; i < 300; i++) {
      it('ランダムな国データが返されること', () => {
        const actual = databaseHelper.getRandomCountry();
        expect(actual.nameJpS).toBeDefined();
      });
    }
  });
});
