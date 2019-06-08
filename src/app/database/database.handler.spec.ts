import * as _ from 'lodash';
import * as DatabaseHandler from './database.handler';


describe('DatabaseHandlerの正解データ生成において', () => {
  for (let i = 0; i < 10; i++) {
    // describe('getRandomCountry', () => {
    //   describe('10回実行したとき', () => {
    //     it('ランダムな国データが返されること', () => {
    //       const actual = DatabaseHandler.getRandomCountry();
    //       expect(actual.nameJpS).toBeDefined();
    //       expect(actual.nameJpS).not.toBe('');
    //     });
    //   });
    // });
    //
    // describe('getRandomSecondCapitalCountry', () => {
    //   describe('10回実行したとき', () => {
    //     const actual = DatabaseHandler.getRandomSecondCapitalCountry();
    //
    //     it('ランダムな国データが返されること', () => {
    //       expect(actual.nameJpS).toBeDefined();
    //       expect(actual.nameJpS).not.toBe('');
    //     });
    //
    //     it('secondCapitalJp が定義されていること', () => {
    //       expect(actual.secondCapitalJp).toBeDefined();
    //       expect(actual.secondCapitalJp).not.toBe('');
    //     });
    //   });
    // });
    //
    // describe('getRandomLockedCountry', () => {
    //   describe('10回実行したとき', () => {
    //     const actual = DatabaseHandler.getRandomLockedCountry();
    //
    //     it('ランダムな国データが返されること', () => {
    //       expect(actual.nameJpS).toBeDefined();
    //       expect(actual.nameJpS).not.toBe('');
    //     });
    //
    //     it('返された国データが内陸国であること', () => {
    //       const isLandLocked = actual.landLocked === 'Single' || actual.landLocked === 'Double';
    //       expect(isLandLocked).toBe(true);
    //     });
    //   });
    // });
    //
    // describe('getRandomLockedSubCountry', () => {
    //   describe('10回実行したとき', () => {
    //     const actual = DatabaseHandler.getRandomLockedSubCountry();
    //
    //     it('ランダムな国データが返されること', () => {
    //       expect(actual.nameJpS).toBeDefined();
    //       expect(actual.nameJpS).not.toBe('');
    //     });
    //
    //     it('返された国データが準内陸国であること', () => {
    //       expect(actual.landLocked).toBe('Sub');
    //     });
    //   });
    // });
    //
    // describe('getRandomLockedDoubleCountry', () => {
    //   describe('10回実行したとき', () => {
    //     const actual = DatabaseHandler.getRandomLockedDoubleCountry();
    //
    //     it('ランダムな国データが返されること', () => {
    //       expect(actual.nameJpS).toBeDefined();
    //       expect(actual.nameJpS).not.toBe('');
    //     });
    //
    //     it('返された国データが二重内陸国であること', () => {
    //       expect(actual.landLocked).toBe('Double');
    //     });
    //   });
    // });
    //
    // describe('getRandomKanjiAbbribiatableCountry', () => {
    //   describe('10回実行したとき', () => {
    //     const actual = DatabaseHandler.getRandomKanjiAbbribiatableCountry();
    //
    //     it('ランダムな国データが返されること', () => {
    //       expect(actual.nameJpS).toBeDefined();
    //       expect(actual.nameJpS).not.toBe('');
    //     });
    //
    //     it('返された国データの漢字略称が存在すること', () => {
    //       expect(actual.nameJpBAbbr).toBeDefined();
    //       expect(actual.nameJpBAbbr).not.toBe('');
    //     });
    //   });
    // });
    //
    // describe('getRandomSuffixableCountry', () => {
    //   describe('10回実行したとき', () => {
    //     const actual = DatabaseHandler.getRandomSuffixableCountry();
    //
    //     it('ランダムな国データが返されること', () => {
    //       expect(actual.nameJpS).toBeDefined();
    //       expect(actual.nameJpS).not.toBe('');
    //     });
    //
    //     it('返された国データの正式名称と略称が異なること', () => {
    //       expect(actual.nameJp).toBeDefined();
    //       expect(actual.nameJpS).toBeDefined();
    //       expect(actual.nameJp).not.toBe('');
    //       expect(actual.nameJpS).not.toBe('');
    //       expect(actual.nameJp).not.toBe(actual.nameJpS);
    //     });
    //
    //     it('返された国データの正式名称と略称の差分が、想定されている文字列であること', () => {
    //       const focusedSuffixes = [
    //         '国',
    //         '王国',
    //         '公国',
    //         '大公国',
    //         '共和国',
    //         '自治共和国',
    //         '連合共和国',
    //         '連邦共和国',
    //         '人民共和国',
    //         '連邦',
    //         '連合',
    //         '諸島',
    //         '独立国',
    //         '合衆国',
    //       ];
    //       const suffixPatterns = focusedSuffixes.map(s => actual.nameJpS + s);
    //       const isValidCountry = suffixPatterns.some(p => p === actual.nameJp);
    //       expect(isValidCountry).toBe(true);
    //     });
    //   });
    // });

    describe('getRandomRegionalBlocksCountry', () => {
      describe('10回実行したとき', () => {
        const actual = DatabaseHandler.getRandomRegionalBlocksCountry();

        it('ランダムな国データが返されること', () => {
          expect(actual.nameJpS).toBeDefined();
          expect(actual.nameJpS).not.toBe('');
        });

        it('返された国データに、regionalBlocksがひとつ以上存在していること', () => {
          expect(actual.regionalBlocks.length).toBeGreaterThan(0);
        });

        it('regionalBlocks の値はRegionalBlocksタイプに指定されている文字列であること', () => {
          const regionalBlocksType = [
            '',
            'UN',
            'SAARC',
            'AU',
            'CEFTA',
            'AL',
            'USAN',
            'EEU',
            'CARICOM',
            'EU',
            'CAIS',
            'ASEAN',
            'NAFTA',
            'EFTA',
            'PA'
          ];
          const matchedRegionalBlocksLength = actual.regionalBlocks.filter(b => regionalBlocksType.indexOf(b) >= 0).length;
          expect(matchedRegionalBlocksLength).toBe(actual.regionalBlocks.length);
        });
      });
    });
  }
});

// describe('無作為に抽出した10個の国データのうち、', () => {
//   _.sampleSize(DatabaseHandler.countries, 10).forEach(c => {
//     describe(`${c.nameJp} のデータに対して`, () => {
//       describe('getSimilarCountries を実行したとき', () => {
//         const actual = DatabaseHandler.getSimilarCountries(c);
//
//         actual.forEach(a => {
//           it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
//             expect(a.regionCode).toBe(c.regionCode);
//           });
//
//           it(`${c.nameJpS}とは異なる国が返されていること`, () => {
//             const isValidCountryCode = typeof a.countryCode !== 'undefined' && a.countryCode !== '' && a.countryCode !== c.countryCode;
//             expect(isValidCountryCode).toBe(true);
//           });
//         });
//       });
//
//       describe('getSimilarCapitalCountries を実行したとき', () => {
//         const actual = DatabaseHandler.getSimilarCapitalCountries(c);
//
//         actual.forEach(a => {
//           it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
//             expect(a.regionCode).toBe(c.regionCode);
//           });
//
//           it(`${c.capitalJp}とは異なる首都の国が返されていること`, () => {
//             const isValidCapitalJp = typeof a.capitalJp !== 'undefined' && a.capitalJp !== '' && a.capitalJp !== c.capitalJp;
//             expect(isValidCapitalJp).toBe(true);
//           });
//         })
//       });
//     });
//   });
// });

// describe('無作為に抽出した10個の第二首都データを持つ国データのうち、', () => {
//   _.sampleSize(DatabaseHandler.countries.filter(c => c.secondCapitalJp !== ''), 10).forEach(c => {
//     describe(`${c.nameJp} のデータに対して`, () => {
//       describe('getSimilarSecondCapitalCountries を実行したとき', () => {
//         const actual = DatabaseHandler.getSimilarSecondCapitalCountries(c);
//
//         actual.forEach(a => {
//           it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
//             expect(a.regionCode).toBe(c.regionCode);
//           });
//
//           it(`${c.capitalJp}とは異なる国が返されていること`, () => {
//             const isValidCountryCode = typeof a.countryCode !== 'undefined' && a.countryCode !== '' && a.countryCode !== c.countryCode;
//             expect(isValidCountryCode).toBe(true);
//           });
//
//           it(`${c.secondCapitalJp}とは異なる第二首都が返されていること`, () => {
//             const isValidSecondCapitalJp = typeof a.secondCapitalJp !== 'undefined' && a.secondCapitalJp !== '' && a.secondCapitalJp !== c.secondCapitalJp;
//             expect(isValidSecondCapitalJp).toBe(true);
//           });
//         })
//       });
//     });
//   });
// });

// describe('無作為に抽出した10個のlandLockedがSingleまたはDoubleの国データのうち、', () => {
//   _.sampleSize(DatabaseHandler.countries.filter(c => c.landLocked === 'Single' || c.landLocked === 'Double'), 10).forEach(c => {
//     describe(`${c.nameJp} のデータに対して`, () => {
//       describe('getSimilarUnlockedCountries を実行したとき', () => {
//         const actual = DatabaseHandler.getSimilarUnlockedCountries(c);
//
//         actual.forEach(a => {
//           it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
//             expect(a.regionCode).toBe(c.regionCode);
//           });
//
//           it(`${c.nameJpS}とは異なる国が返されていること`, () => {
//             const isValidCountryCode = typeof a.countryCode !== 'undefined' && a.countryCode !== '' && a.countryCode !== c.countryCode;
//             expect(isValidCountryCode).toBe(true);
//           });
//
//           it(`landLockedが"Single"でも"Double"でもない国が返されていること`, () => {
//             const isLandLocked = a.landLocked === 'Single' || a.landLocked === 'Double';
//             expect(isLandLocked).toBe(false);
//           });
//         });
//       });
//     });
//   });
// });

// describe('無作為に抽出した10個のlandLockedがSubの国データのうち、', () => {
//   _.sampleSize(DatabaseHandler.countries.filter(c => c.landLocked === 'Sub'), 10).forEach(c => {
//     describe(`${c.nameJp} のデータに対して`, () => {
//       describe('getSimilarUnlockedsubCountries を実行したとき', () => {
//         const actual = DatabaseHandler.getSimilarUnlockedsubCountries(c);
//
//         actual.forEach(a => {
//           it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
//             expect(a.regionCode).toBe(c.regionCode);
//           });
//
//           it(`${c.nameJpS}とは異なる国が返されていること`, () => {
//             const isValidCountryCode = typeof a.countryCode !== 'undefined' && a.countryCode !== '' && a.countryCode !== c.countryCode;
//             expect(isValidCountryCode).toBe(true);
//           });
//
//           it(`landLockedが"Sub"ではない国が返されていること`, () => {
//             expect(a.landLocked).not.toBe('Sub');
//           });
//         });
//       });
//     });
//   });
// });

// describe('landLockedがDoubleの国データのうち、', () => {
//   DatabaseHandler.countries.filter(c => c.landLocked === 'Double').forEach(c => {
//     describe(`${c.nameJp} のデータに対して`, () => {
//       describe('getSimilarUnlockeddoubleCountries を実行したとき', () => {
//         const actual = DatabaseHandler.getSimilarUnlockeddoubleCountries(c);
//
//         actual.forEach(a => {
//           it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
//             expect(a.regionCode).toBe(c.regionCode);
//           });
//
//           it(`${c.nameJpS}とは異なる国が返されていること`, () => {
//             const isValidCountryCode = typeof a.countryCode !== 'undefined' && a.countryCode !== '' && a.countryCode !== c.countryCode;
//             expect(isValidCountryCode).toBe(true);
//           });
//
//           it(`landLockedが"Double"ではない国が返されていること`, () => {
//             expect(a.landLocked).not.toBe('Double');
//           });
//         });
//       });
//     });
//   });
// });

// describe('無作為に抽出した10個の漢字略称を持つ国データのうち、', () => {
//   _.sampleSize(DatabaseHandler.countries.filter(c => c.nameJpBAbbr !== ''), 10).forEach(c => {
//     describe(`${c.nameJp} のデータに対して`, () => {
//       describe('getSimilarKanjiAbbrCountries を実行したとき', () => {
//         const actual = DatabaseHandler.getSimilarKanjiAbbrCountries(c);
//
//         actual.forEach(a => {
//           it(`${c.nameJpS}とは異なる国が返されていること`, () => {
//             const isValidCountryCode = typeof a.countryCode !== 'undefined' && a.countryCode !== '' && a.countryCode !== c.countryCode;
//             expect(isValidCountryCode).toBe(true);
//           });
//
//           it(`nameJpBAbbr が "${c.nameJpBAbbr}" ではない国が返されていること`, () => {
//             const isExpectedNameJpBAbbe = a.nameJpBAbbr !== c.nameJpBAbbr && a.nameJpBAbbr !== '';
//             expect(isExpectedNameJpBAbbe).toBe(true);
//           });
//         });
//       });
//     });
//   });
// });

// describe('無作為に抽出したnameJpとnameJpSとの差分が特定のsuffixとなる10個の国データのうち、', () => {
//   const sampleCountries = Array(10).fill(DatabaseHandler.getRandomSuffixableCountry());
//
//   sampleCountries.forEach(c => {
//     describe(`${c.nameJp} のデータに対して`, () => {
//       describe('getDummySuffixCountryNames を実行したとき', () => {
//         const actual = DatabaseHandler.getDummySuffixCountries(c);
//
//         actual.forEach(a => {
//           it(`nameJp 以外は ${c.nameJp} と同じ値が入っていること`, () => {
//             expect(a.countryCode).toBe(c.countryCode);
//             expect(a.nameJpS).toBe(c.nameJpS);
//             expect(a.nameJpB).toBe(c.nameJpB);
//             expect(a.nameJpBAbbr).toBe(c.nameJpBAbbr);
//             expect(a.capitalJp).toBe(c.capitalJp);
//             expect(a.secondCapitalJp).toBe(c.secondCapitalJp);
//             expect(a.regionCode).toBe(c.regionCode);
//             expect(a.isIsland).toBe(c.isIsland);
//             expect(a.landLocked).toBe(c.landLocked);
//             expect(a.lat).toBe(c.lat);
//             expect(a.lon).toBe(c.lon);
//             expect(a.population).toBe(c.population);
//             expect(a.area).toBe(c.area);
//             expect(a.borders).toEqual(c.borders);
//             expect(a.regionalBlocks).toEqual(c.regionalBlocks);
//           });
//
//           it(`nameJp に ${c.nameJp} と異なる値が入っていること`, () => {
//             expect(a.nameJp).toBeDefined();
//             expect(a.nameJp).not.toBe('');
//             expect(a.nameJp).not.toBe(c.nameJp);
//           });
//
//           it('nameJp データと国名略称の差分が、想定されている文字列であること', () => {
//             const focusedSuffixes = [
//               '国',
//               '王国',
//               '公国',
//               '大公国',
//               '共和国',
//               '自治共和国',
//               '連合共和国',
//               '連邦共和国',
//               '人民共和国',
//               '連邦',
//               '連合',
//               '諸島',
//               '独立国',
//               '合衆国',
//             ];
//             const suffixPatterns = focusedSuffixes.map(s => a.nameJpS + s);
//             const isValidCountry = suffixPatterns.some(p => p === a.nameJp);
//             expect(isValidCountry).toBe(true);
//           });
//         });
//       });
//     });
//   });
// });

describe('無作為に抽出したregionalBlockを持つ10個の国データのうち、', () => {
  const sampleCountries = Array(10).fill(DatabaseHandler.getRandomRegionalBlocksCountry());

  sampleCountries.forEach(c => {
    describe(`${c.nameJp} のデータに対して`, () => {
      describe('getSimilarRegionalBlocks を実行したとき', () => {
        const actual = DatabaseHandler.getSimilarRegionalBlocks(c);

        // it('返り値が３つの国データであること', () => {
        //   expect(actual.length).toBe(3);
        // });

        actual.forEach(a => {
          // it(`regionalBlocks 以外は ${c.regionalBlocks} と同じ値が入っていること`, () => {
          //   expect(a.countryCode).toBe(c.countryCode);
          //   expect(a.nameJp).toBe(c.nameJp);
          //   expect(a.nameJpS).toBe(c.nameJpS);
          //   expect(a.nameJpB).toBe(c.nameJpB);
          //   expect(a.nameJpBAbbr).toBe(c.nameJpBAbbr);
          //   expect(a.capitalJp).toBe(c.capitalJp);
          //   expect(a.secondCapitalJp).toBe(c.secondCapitalJp);
          //   expect(a.regionCode).toBe(c.regionCode);
          //   expect(a.isIsland).toBe(c.isIsland);
          //   expect(a.landLocked).toBe(c.landLocked);
          //   expect(a.lat).toBe(c.lat);
          //   expect(a.lon).toBe(c.lon);
          //   expect(a.population).toBe(c.population);
          //   expect(a.area).toBe(c.area);
          //   expect(a.borders).toEqual(c.borders);
          // });

          it(`regionalBlocks の値には、${c.nameJpS} が実際に持つ値とは異なる値がひとつだけ含まれていること`, () => {
            const dummyRegionalBlocks = a.regionalBlocks;
            expect(dummyRegionalBlocks.length).toBe(1);
            expect(dummyRegionalBlocks[0]).toBeTruthy();
            expect(c.regionalBlocks.some(b => dummyRegionalBlocks[0] === b)).toBeFalsy();
          });
        });

        it(`値として含まれている regionalBlocks はそれぞれ異なる値であること`, () => {
          const filterDuplicateValues = (str) => {
            return str.filter((x, i, self) => {
              return x !== "" && self.indexOf(x) !== self.lastIndexOf(x);
            });
          };
          const dummyRegionalBlocks = actual.map(a => a.regionalBlocks[0]);
          expect(filterDuplicateValues(dummyRegionalBlocks).length).toBe(3);
        });
      });

      describe('getSimilarRegionalBlocksCountries を実行したとき', () => {
        const actual = DatabaseHandler.getSimilarRegionalBlocksCountries(c);

        // it('返り値が３つ以上の国データであること', () => {
        //   expect(actual.length >= 3).toBe(true);
        // });

        actual.forEach(a => {
          // it(`任意の${c.regionCode}リージョンの国が返されること`, () => {
          //   expect(a.regionCode).toBe(c.regionCode);
          // });

          // it(`${c.nameJpS}とは異なる国が返されていること`, () => {
          //   const isValidCountryCode = typeof a.countryCode !== 'undefined' && a.countryCode !== '' && a.countryCode !== c.countryCode;
          //   expect(isValidCountryCode).toBe(true);
          // });

          // it(`regionalBlocks の値には、${c.nameJpS} が実際に持つ値とは異なる値が含まれているか、ひとつもregionalBlocksを持たないこと`, () => {
          //   const dummyRegionalBlocks = a.regionalBlocks;
          //   const hasDifferentRegionalBlocks = !c.regionalBlocks.some(b => dummyRegionalBlocks[0] === b);
          //   const hasRegionalBlocks = a.regionalBlocks.length > 0;
          //   expect(hasDifferentRegionalBlocks || !hasRegionalBlocks).toBe(true);
          // });
        });
      });
    });
  });
});
