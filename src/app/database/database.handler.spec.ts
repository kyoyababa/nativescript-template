import * as DatabaseHandler from './database.handler';


for (let i = 0; i < 100; i++) {
  describe('getRandomCountry', () => {
    describe('100回実行したとき', () => {
      it('ランダムな国データが返されること', () => {
        const actual = DatabaseHandler.getRandomCountry();
        expect(actual.nameJpS).toBeDefined();
      });
    });
  });

  describe('getRandomLockedCountry', () => {
    describe('100回実行したとき', () => {
      const actual = DatabaseHandler.getRandomLockedCountry();

      it('ランダムな国データが返されること', () => {
        expect(actual.nameJpS).toBeDefined();
      });

      it('返された国データが内陸国であること', () => {
        const isLandLocked = actual.landLocked === 'Single' || actual.landLocked === 'Double';
        expect(isLandLocked).toBeTruthy();
      });
    });
  });

  describe('getRandomLockedSubCountry', () => {
    describe('100回実行したとき', () => {
      const actual = DatabaseHandler.getRandomLockedSubCountry();

      it('ランダムな国データが返されること', () => {
        expect(actual.nameJpS).toBeDefined();
      });

      it('返された国データが準内陸国であること', () => {
        const isLandLockedSub = actual.landLocked === 'Sub';
        expect(isLandLockedSub).toBeTruthy();
      });
    });
  });

  describe('getRandomLockedDoubleCountry', () => {
    describe('100回実行したとき', () => {
      const actual = DatabaseHandler.getRandomLockedDoubleCountry();

      it('ランダムな国データが返されること', () => {
        expect(actual.nameJpS).toBeDefined();
      });

      it('返された国データが二重内陸国であること', () => {
        const isLandLockedDouble = actual.landLocked === 'Double';
        expect(isLandLockedDouble).toBeTruthy();
      });
    });
  });

  describe('getRandomKanjiAbbribiatableCountry', () => {
    describe('100回実行したとき', () => {
      const actual = DatabaseHandler.getRandomKanjiAbbribiatableCountry();

      it('ランダムな国データが返されること', () => {
        expect(actual.nameJpS).toBeDefined();
      });

      it('返された国データの漢字略称が存在すること', () => {
        const isKanjiAbbribiatable = actual.nameJpBAbbr !== '';
        expect(isKanjiAbbribiatable).toBeTruthy();
      });
    });
  });
}

DatabaseHandler.COUNTRIES.forEach(c => {
  fdescribe(`${c.nameJp} のデータに対して`, () => {
    describe('getSimilarCountries を実行したとき', () => {
      const actual = DatabaseHandler.getSimilarCountries(c);

      actual.forEach(a => {
        it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
          expect(a.regionCode).toBe(c.regionCode);
        });

        it(`${c.nameJpS}とは異なる国が返されていること`, () => {
          expect(a.countryCode).not.toBe(c.countryCode);
        });
      });
    });

    describe('getSimilarCapitalCountries を実行したとき', () => {
      const actual = DatabaseHandler.getSimilarCapitalCountries(c);

      actual.forEach(a => {
        it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
          expect(a.regionCode).toBe(c.regionCode);
        });

        it(`${c.capitalJp}とは異なる首都の国が返されていること`, () => {
          expect(a.capitalJp).not.toBe(c.capitalJp);
        });
      })
    });

    describe('getSimilarUnlockedCountries を実行したとき', () => {
      const actual = DatabaseHandler.getSimilarUnlockedCountries(c);

      actual.forEach(a => {
        it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
          expect(a.regionCode).toBe(c.regionCode);
        });

        it(`${c.nameJpS}とは異なる国が返されていること`, () => {
          expect(a.countryCode).not.toBe(c.countryCode);
        });

        it(`landLockedが"Single"でも"Double"でもない国が返されていること`, () => {
          const isLandLocked = a.landLocked === 'Single' || a.landLocked === 'Double';
          expect(isLandLocked).toBeFalsy();
        });
      });
    });

    describe('getSimilarUnlockedsubCountries を実行したとき', () => {
      const actual = DatabaseHandler.getSimilarUnlockedsubCountries(c);

      actual.forEach(a => {
        it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
          expect(a.regionCode).toBe(c.regionCode);
        });

        it(`${c.nameJpS}とは異なる国が返されていること`, () => {
          expect(a.countryCode).not.toBe(c.countryCode);
        });

        it(`landLockedが"Sub"ではない国が返されていること`, () => {
          const isLandLockedSub = a.landLocked === 'Sub';
          expect(isLandLockedSub).toBeFalsy();
        });
      });
    });

    describe('getSimilarUnlockeddoubleCountries を実行したとき', () => {
      const actual = DatabaseHandler.getSimilarUnlockeddoubleCountries(c);

      actual.forEach(a => {
        it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
          expect(a.regionCode).toBe(c.regionCode);
        });

        it(`${c.nameJpS}とは異なる国が返されていること`, () => {
          expect(a.countryCode).not.toBe(c.countryCode);
        });

        it(`landLockedが"Double"ではない国が返されていること`, () => {
          const isLandLockedDouble = a.landLocked === 'Double';
          expect(isLandLockedDouble).toBeFalsy();
        });
      });
    });

    describe('getSimilarKanjiAbbrCountries を実行したとき', () => {
      const actual = DatabaseHandler.getSimilarKanjiAbbrCountries(c);

      actual.forEach(a => {
        it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
          expect(a.regionCode).toBe(c.regionCode);
        });

        it(`${c.nameJpS}とは異なる国が返されていること`, () => {
          expect(a.countryCode).not.toBe(c.countryCode);
        });

        it(`nameJpBAbbr が "${c.nameJpBAbbr}" ではない国が返されていること`, () => {
          expect(a.nameJpBAbbr).not.toBe(c.nameJpBAbbr);
        });
      });
    });
  });
});
