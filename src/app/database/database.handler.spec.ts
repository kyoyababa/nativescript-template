import * as DatabaseHandler from './database.handler';


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

describe('getRandomLockedCountry', () => {
  describe('300回実行したとき', () => {
    for (let i = 0; i < 300; i++) {
      const actual = DatabaseHandler.getRandomLockedCountry();

      it('ランダムな国データが返されること', () => {
        expect(actual.nameJpS).toBeDefined();
      });

      it('返された国データが内陸国であること', () => {
        const isLandLocked = actual.landLocked === 'Single' || actual.landLocked === 'Double';
        expect(isLandLocked).toBeTruthy();
      });
    }
  });
});

describe('getSimilarCountries', () => {
  describe('100回実行したとき', () => {
    for (let i = 0; i < 100; i++) {
      const country = DatabaseHandler.getRandomCountry();

      describe(`${country.nameJpS}データを渡したとき`, () => {
        const actual = DatabaseHandler.getSimilarCountries(country);

        actual.forEach(a => {
          it(`任意の${country.countryCode}リージョンの国が返されること`, () => {
            expect(a.regionCode).toBe(country.regionCode);
          });

          it(`${country.nameJpS}とは異なる国が返されていること`, () => {
            expect(a.countryCode).not.toBe(country.countryCode);
          });
        })
      });
    }
  });
});

describe('getSimilarUnlockedCountries', () => {
  describe('100回実行したとき', () => {
    for (let i = 0; i < 100; i++) {
      const country = DatabaseHandler.getRandomCountry();

      describe(`${country.nameJpS}データを渡したとき`, () => {
        const actual = DatabaseHandler.getSimilarUnlockedCountries(country);

        actual.forEach(a => {
          it(`任意の${country.countryCode}リージョンの国が返されること`, () => {
            expect(a.regionCode).toBe(country.regionCode);
          });

          it(`${country.nameJpS}とは異なる国が返されていること`, () => {
            expect(a.countryCode).not.toBe(country.countryCode);
          });

          it(`landLockedが"Single"でも"Double"でもない国が返されていること`, () => {
            const isLandLocked = a.landLocked === 'Single' || a.landLocked === 'Double';
            expect(isLandLocked).toBeFalsy();
          });
        });
      });
    }
  });
});
