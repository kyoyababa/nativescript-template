import * as DatabaseHandler from './database.handler';

// const databaseHelper = new DatabaseHandler();

describe('getRandomCountry', () => {
  describe('300回実行したとき', () => {
    for (let i = 0; i < 300; i++) {
      it('ランダムな国データが返されること', () => {
        const actual = DatabaseHandler.getRandomCountry();
        expect(actual.nameJpS).toBeDefined();
      });
    }
  });
});

describe('getSimilarCountries', () => {
  for (let i = 0; i < 100; i++) {
    const country = DatabaseHandler.getRandomCountry();

    describe(`${country.nameJpS}データを渡したとき`, () => {
      const actual = DatabaseHandler.getSimilarCountries(country);

      it(`任意の${country.countryCode}リージョンの国が返されること`, () => {
        for (let i = 0; i < 3; i++) {
          expect(actual[i].regionCode).toBe(country.regionCode);
        }
      });

      it(`${country.nameJpS}とは異なる国が返されていること`, () => {
        for (let i = 0; i < 3; i++) {
          expect(actual[i].countryCode).not.toBe(country.countryCode);
        }
      });
    });
  }
});
