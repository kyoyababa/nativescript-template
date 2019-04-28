import * as DatabaseHandler from './database.handler';


// describe('DatabaseHandlerの正解データ生成において', () => {
//   for (let i = 0; i < 100; i++) {
//     describe('getRandomCountry', () => {
//       describe('100回実行したとき', () => {
//         it('ランダムな国データが返されること', () => {
//           const actual = DatabaseHandler.getRandomCountry();
//           expect(actual.nameJpS).toBeDefined();
//         });
//       });
//     });
//
//     describe('getRandomLockedCountry', () => {
//       describe('100回実行したとき', () => {
//         const actual = DatabaseHandler.getRandomLockedCountry();
//
//         it('ランダムな国データが返されること', () => {
//           expect(actual.nameJpS).toBeDefined();
//         });
//
//         it('返された国データが内陸国であること', () => {
//           const isLandLocked = actual.landLocked === 'Single' || actual.landLocked === 'Double';
//           expect(isLandLocked).toBeTruthy();
//         });
//       });
//     });
//
//     describe('getRandomLockedSubCountry', () => {
//       describe('100回実行したとき', () => {
//         const actual = DatabaseHandler.getRandomLockedSubCountry();
//
//         it('ランダムな国データが返されること', () => {
//           expect(actual.nameJpS).toBeDefined();
//         });
//
//         it('返された国データが準内陸国であること', () => {
//           expect(actual.landLocked).toBe('Sub');
//         });
//       });
//     });
//
//     describe('getRandomLockedDoubleCountry', () => {
//       describe('100回実行したとき', () => {
//         const actual = DatabaseHandler.getRandomLockedDoubleCountry();
//
//         it('ランダムな国データが返されること', () => {
//           expect(actual.nameJpS).toBeDefined();
//         });
//
//         it('返された国データが二重内陸国であること', () => {
//           expect(actual.landLocked).toBe('Double');
//         });
//       });
//     });
//
//     describe('getRandomKanjiAbbribiatableCountry', () => {
//       describe('100回実行したとき', () => {
//         const actual = DatabaseHandler.getRandomKanjiAbbribiatableCountry();
//
//         it('ランダムな国データが返されること', () => {
//           expect(actual.nameJpS).toBeDefined();
//         });
//
//         it('返された国データの漢字略称が存在すること', () => {
//           expect(actual.nameJpBAbbr).not.toBe('');
//         });
//       });
//     });
//
//     describe('getRandomSuffixableCountry', () => {
//       describe('100回実行したとき', () => {
//         const actual = DatabaseHandler.getRandomSuffixableCountry();
//
//         it('ランダムな国データが返されること', () => {
//           expect(actual.nameJpS).toBeDefined();
//         });
//
//         it('返された国データの正式名称と略称が異なること', () => {
//           expect(actual.nameJp).not.toBe(actual.nameJpS);
//         });
//
//         it('返された国データの正式名称と略称の差分が、想定されている文字列であること', () => {
//           const focusedSuffixes = [
//             '',
//             '国',
//             '王国',
//             '公国',
//             '大公国',
//             '共和国',
//             '自治共和国',
//             '連合共和国',
//             '連邦共和国',
//             '人民共和国',
//             '連邦',
//             '連合',
//             '諸島',
//             '独立国',
//             '合衆国',
//           ];
//           const suffixPatterns = focusedSuffixes.map(s => actual.nameJpS + s);
//           const isValidCountry = suffixPatterns.some(p => p === actual.nameJp);
//           expect(isValidCountry).toBeTruthy();
//         });
//       });
//     });
//   }
// });

// DatabaseHandler.COUNTRIES.forEach(c => {
//   describe(`${c.nameJp} のデータに対して`, () => {
//     describe('getSimilarCountries を実行したとき', () => {
//       const actual = DatabaseHandler.getSimilarCountries(c);
//
//       actual.forEach(a => {
//         it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
//           expect(a.regionCode).toBe(c.regionCode);
//         });
//
//         it(`${c.nameJpS}とは異なる国が返されていること`, () => {
//           expect(a.countryCode).not.toBe(c.countryCode);
//         });
//       });
//     });
//
//     describe('getSimilarCapitalCountries を実行したとき', () => {
//       const actual = DatabaseHandler.getSimilarCapitalCountries(c);
//
//       actual.forEach(a => {
//         it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
//           expect(a.regionCode).toBe(c.regionCode);
//         });
//
//         it(`${c.capitalJp}とは異なる首都の国が返されていること`, () => {
//           expect(a.capitalJp).not.toBe(c.capitalJp);
//         });
//       })
//     });
//
//     describe('getSimilarUnlockedCountries を実行したとき', () => {
//       const actual = DatabaseHandler.getSimilarUnlockedCountries(c);
//
//       actual.forEach(a => {
//         it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
//           expect(a.regionCode).toBe(c.regionCode);
//         });
//
//         it(`${c.nameJpS}とは異なる国が返されていること`, () => {
//           expect(a.countryCode).not.toBe(c.countryCode);
//         });
//
//         it(`landLockedが"Single"でも"Double"でもない国が返されていること`, () => {
//           const isLandLocked = a.landLocked === 'Single' || a.landLocked === 'Double';
//           expect(isLandLocked).toBeFalsy();
//         });
//       });
//     });
//
//     describe('getSimilarUnlockedsubCountries を実行したとき', () => {
//       const actual = DatabaseHandler.getSimilarUnlockedsubCountries(c);
//
//       actual.forEach(a => {
//         it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
//           expect(a.regionCode).toBe(c.regionCode);
//         });
//
//         it(`${c.nameJpS}とは異なる国が返されていること`, () => {
//           expect(a.countryCode).not.toBe(c.countryCode);
//         });
//
//         it(`landLockedが"Sub"ではない国が返されていること`, () => {
//           expect(a.landLocked).not.toBe('Sub');
//         });
//       });
//     });
//
//     describe('getSimilarUnlockeddoubleCountries を実行したとき', () => {
//       const actual = DatabaseHandler.getSimilarUnlockeddoubleCountries(c);
//
//       actual.forEach(a => {
//         it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
//           expect(a.regionCode).toBe(c.regionCode);
//         });
//
//         it(`${c.nameJpS}とは異なる国が返されていること`, () => {
//           expect(a.countryCode).not.toBe(c.countryCode);
//         });
//
//         it(`landLockedが"Double"ではない国が返されていること`, () => {
//           expect(a.landLocked).not.toBe('Double');
//         });
//       });
//     });
//
//     describe('getSimilarKanjiAbbrCountries を実行したとき', () => {
//       const actual = DatabaseHandler.getSimilarKanjiAbbrCountries(c);
//
//       actual.forEach(a => {
//         it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
//           expect(a.regionCode).toBe(c.regionCode);
//         });
//
//         it(`${c.nameJpS}とは異なる国が返されていること`, () => {
//           expect(a.countryCode).not.toBe(c.countryCode);
//         });
//
//         it(`nameJpBAbbr が "${c.nameJpBAbbr}" ではない国が返されていること`, () => {
//           const isExpectedNameJpBAbbe = a.nameJpBAbbr !== c.nameJpBAbbr && a.nameJpBAbbr !== '';
//           expect(isExpectedNameJpBAbbe).toBeTruthy();
//         });
//       });
//     });
//
//     describe('getDummySuffixCountryNames を実行したとき', () => {
//       const actual = DatabaseHandler.getDummySuffixCountries(c);
//
//       actual.forEach(a => {
//         it(`nameJp 以外は ${c.nameJp} と同じ値が入っていること`, () => {
//           expect(a.countryCode).toBe(c.countryCode);
//           expect(a.nameJpS).toBe(c.nameJpS);
//           expect(a.nameJpB).toBe(c.nameJpB);
//           expect(a.nameJpBAbbr).toBe(c.nameJpBAbbr);
//           expect(a.capitalJp).toBe(c.capitalJp);
//           expect(a.secondCapitalJp).toBe(c.secondCapitalJp);
//           expect(a.regionCode).toBe(c.regionCode);
//           expect(a.isIsland).toBe(c.isIsland);
//           expect(a.landLocked).toBe(c.landLocked);
//           expect(a.lat).toBe(c.lat);
//           expect(a.lon).toBe(c.lon);
//         });
//
//         it(`nameJp に ${c.nameJp} と異なる値が入っていること`, () => {
//           expect(a.nameJp).not.toBe(c.nameJp);
//         });
//
//         it('nameJp データと国名略称の差分が、想定されている文字列であること', () => {
//           const focusedSuffixes = [
//             '国',
//             '王国',
//             '公国',
//             '大公国',
//             '共和国',
//             '自治共和国',
//             '連合共和国',
//             '連邦共和国',
//             '人民共和国',
//             '連邦',
//             '連合',
//             '諸島',
//             '独立国',
//             '合衆国',
//           ];
//           const suffixPatterns = focusedSuffixes.map(s => a.nameJpS + s);
//           const isValidCountry = suffixPatterns.some(p => p === a.nameJp);
//           expect(isValidCountry).toBeTruthy();
//         });
//       });
//     });
//   });
// });
