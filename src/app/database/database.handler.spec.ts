import * as DatabaseHandler from './database.handler';


describe('getRandomCountry', () => {
  describe('100回実行したとき', () => {
    for (let i = 0; i < 100; i++) {
      it('ランダムな国データが返されること', () => {
        const actual = DatabaseHandler.getRandomCountry();
        expect(actual.nameJpS).toBeDefined();
      });
    }
  });
});

describe('getRandomLockedCountry', () => {
  describe('100回実行したとき', () => {
    for (let i = 0; i < 100; i++) {
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

describe('getRandomLockedSubCountry', () => {
  describe('100回実行したとき', () => {
    for (let i = 0; i < 100; i++) {
      const actual = DatabaseHandler.getRandomLockedSubCountry();

      it('ランダムな国データが返されること', () => {
        expect(actual.nameJpS).toBeDefined();
      });

      it('返された国データが準内陸国であること', () => {
        const isLandLockedSub = actual.landLocked === 'Sub';
        expect(isLandLockedSub).toBeTruthy();
      });
    }
  });
});

describe('getRandomLockedDoubleCountry', () => {
  describe('100回実行したとき', () => {
    for (let i = 0; i < 100; i++) {
      const actual = DatabaseHandler.getRandomLockedDoubleCountry();

      it('ランダムな国データが返されること', () => {
        expect(actual.nameJpS).toBeDefined();
      });

      it('返された国データが二重内陸国であること', () => {
        const isLandLockedDouble = actual.landLocked === 'Double';
        expect(isLandLockedDouble).toBeTruthy();
      });
    }
  });
});

describe('getRandomKanjiAbbribiatableCountry', () => {
  describe('100回実行したとき', () => {
    for (let i = 0; i < 100; i++) {
      const actual = DatabaseHandler.getRandomKanjiAbbribiatableCountry();

      it('ランダムな国データが返されること', () => {
        expect(actual.nameJpS).toBeDefined();
      });

      it('返された国データの漢字略称が存在すること', () => {
        const isKanjiAbbribiatable = actual.nameJpBAbbr !== '';
        expect(isKanjiAbbribiatable).toBeTruthy();
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
          it(`任意の${country.regionCode}リージョンの国が返されること`, () => {
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
      const country = DatabaseHandler.getRandomLockedCountry();

      describe(`${country.nameJpS}データを渡したとき`, () => {
        const actual = DatabaseHandler.getSimilarUnlockedCountries(country);

        actual.forEach(a => {
          it(`任意の${country.regionCode}リージョンの国が返されること`, () => {
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

describe('getSimilarUnlockedsubCountries', () => {
  describe('100回実行したとき', () => {
    for (let i = 0; i < 100; i++) {
      const country = DatabaseHandler.getRandomLockedSubCountry();

      describe(`${country.nameJpS}データを渡したとき`, () => {
        const actual = DatabaseHandler.getSimilarUnlockedsubCountries(country);

        actual.forEach(a => {
          it(`任意の${country.regionCode}リージョンの国が返されること`, () => {
            expect(a.regionCode).toBe(country.regionCode);
          });

          it(`${country.nameJpS}とは異なる国が返されていること`, () => {
            expect(a.countryCode).not.toBe(country.countryCode);
          });

          it(`landLockedが"Sub"ではない国が返されていること`, () => {
            const isLandLockedSub = a.landLocked === 'Sub';
            expect(isLandLockedSub).toBeFalsy();
          });
        });
      });
    }
  });
});

describe('getSimilarUnlockeddoubleCountries', () => {
  describe('100回実行したとき', () => {
    for (let i = 0; i < 100; i++) {
      const country = DatabaseHandler.getRandomLockedDoubleCountry();

      describe(`${country.nameJpS}データを渡したとき`, () => {
        const actual = DatabaseHandler.getSimilarUnlockeddoubleCountries(country);

        actual.forEach(a => {
          it(`任意の${country.regionCode}リージョンの国が返されること`, () => {
            expect(a.regionCode).toBe(country.regionCode);
          });

          it(`${country.nameJpS}とは異なる国が返されていること`, () => {
            expect(a.countryCode).not.toBe(country.countryCode);
          });

          it(`landLockedが"Double"ではない国が返されていること`, () => {
            const isLandLockedDouble = a.landLocked === 'Double';
            expect(isLandLockedDouble).toBeFalsy();
          });
        });
      });
    }
  });
});

describe('getSimilarKanjiAbbrCountries', () => {
  describe('100回実行したとき', () => {
    for (let i = 0; i < 100; i++) {
      const country = DatabaseHandler.getRandomKanjiAbbribiatableCountry();

      describe(`${country.nameJpS}データを渡したとき`, () => {
        const actual = DatabaseHandler.getSimilarKanjiAbbrCountries(country);

        actual.forEach(a => {
          it(`任意の${country.regionCode}リージョンの国が返されること`, () => {
            expect(a.regionCode).toBe(country.regionCode);
          });

          it(`${country.nameJpS}とは異なる国が返されていること`, () => {
            expect(a.countryCode).not.toBe(country.countryCode);
          });

          it(`nameJpBAbbr が "${country.nameJpBAbbr}" ではない国が返されていること`, () => {
            expect(a.nameJpBAbbr).not.toBe(country.nameJpBAbbr);
          });
        });
      });
    }
  });
});
