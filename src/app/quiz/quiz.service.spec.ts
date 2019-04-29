import { getQuizTextAndAnswerSelections } from './quiz.service';


describe('getQuizTextAndAnswerSelections', () => {
  for (let i = 0; i < 100; i++) {
    // describe(`selectedQuizPattern が COUNTRY_TO_CAPITAL のとき`, () => {
    //   describe('100回実行したら', () => {
    //     const actual = getQuizTextAndAnswerSelections('COUNTRY_TO_CAPITAL');
    //
    //     it('answerSelectionPattern が TEXT になること', () => {
    //       expect(actual.answerSelectionPattern).toBe('TEXT');
    //     });
    //
    //     it('quizImage が "" であること', () => {
    //       expect(actual.quizImage).toBe('');
    //     });
    //
    //     it('answerSelections が ４つの配列であること', () => {
    //       expect(actual.answerSelections.length).toBe(4);
    //     });
    //
    //     it('answerSelections が いずれも capitalJp を持っていること', () => {
    //       actual.answerSelections.forEach(a => {
    //         expect(a.capitalJp).toBeDefined();
    //         expect(a.capitalJp).not.toBe('');
    //       });
    //     });
    //   });
    // });

    // describe(`selectedQuizPattern が CAPITAL_TO_COUNTRY のとき`, () => {
    //   describe('100回実行したら', () => {
    //     const actual = getQuizTextAndAnswerSelections('CAPITAL_TO_COUNTRY');
    //
    //     it('answerSelectionPattern が TEXT になること', () => {
    //       expect(actual.answerSelectionPattern).toBe('TEXT');
    //     });
    //
    //     it('quizImage が "" であること', () => {
    //       expect(actual.quizImage).toBe('');
    //     });
    //
    //     it('answerSelections が ４つの配列であること', () => {
    //       expect(actual.answerSelections.length).toBe(4);
    //     });
    //
    //     it('answerSelections が いずれも nameJpS を持っていること', () => {
    //       actual.answerSelections.forEach(a => {
    //         expect(a.nameJpS).toBeDefined();
    //         expect(a.nameJpS).not.toBe('');
    //       });
    //     });
    //   });
    // });

    // describe(`selectedQuizPattern が FLAG_TO_COUNTRY のとき`, () => {
    //   describe('100回実行したら', () => {
    //     const actual = getQuizTextAndAnswerSelections('FLAG_TO_COUNTRY');
    //
    //     it('answerSelectionPattern が TEXT になること', () => {
    //       expect(actual.answerSelectionPattern).toBe('TEXT');
    //     });
    //
    //     it('quizImage が "" ではないこと', () => {
    //       expect(actual.quizImage).not.toBe('');
    //     });
    //
    //     it('answerSelections が ４つの配列であること', () => {
    //       expect(actual.answerSelections.length).toBe(4);
    //     });
    //
    //     it('answerSelections が いずれも nameJpS を持っていること', () => {
    //       actual.answerSelections.forEach(a => {
    //         expect(a.nameJpS).toBeDefined();
    //         expect(a.nameJpS).not.toBe('');
    //       });
    //     });
    //   });
    // });

    // describe(`selectedQuizPattern が COUNTRY_TO_FLAG のとき`, () => {
    //   describe('100回実行したら', () => {
    //     const actual = getQuizTextAndAnswerSelections('COUNTRY_TO_FLAG');
    //
    //     it('answerSelectionPattern が IMAGE になること', () => {
    //       expect(actual.answerSelectionPattern).toBe('IMAGE');
    //     });
    //
    //     it('quizImage が "" であること', () => {
    //       expect(actual.quizImage).toBe('');
    //     });
    //
    //     it('answerSelections が ４つの配列であること', () => {
    //       expect(actual.answerSelections.length).toBe(4);
    //     });
    //
    //     it('answerSelections が いずれも countryCode を持っていること', () => {
    //       actual.answerSelections.forEach(a => {
    //         expect(a.countryCode).toBeDefined();
    //         expect(a.countryCode).not.toBe('');
    //       });
    //     });
    //   });
    // });

    // describe(`selectedQuizPattern が IS_LAND_LOCKED のとき`, () => {
    //   describe('100回実行したら', () => {
    //     const actual = getQuizTextAndAnswerSelections('IS_LAND_LOCKED');
    //
    //     it('answerSelectionPattern が TEXT になること', () => {
    //       expect(actual.answerSelectionPattern).toBe('TEXT');
    //     });
    //
    //     it('quizImage が "" であること', () => {
    //       expect(actual.quizImage).toBe('');
    //     });
    //
    //     it('answerSelections が ４つの配列であること', () => {
    //       expect(actual.answerSelections.length).toBe(4);
    //     });
    //
    //     it('answerSelections が ひとつだけ landLocked="Single" または landLocked="Double" であること', () => {
    //       const landLocked = actual.answerSelections.filter(a => {
    //         return a.landLocked === 'Single' || a.landLocked === 'Double';
    //       });
    //       expect(landLocked.length).toBe(1);
    //     });
    //
    //     it('answerSelections が ひとつ以外 landLocked="" または landLocked="Sub" であること', () => {
    //       const landUnlocked = actual.answerSelections.filter(a => {
    //         return a.landLocked === '' || a.landLocked === 'Sub';
    //       });
    //       expect(landUnlocked.length).toBe(3);
    //     });
    //   });
    // });

    // describe(`selectedQuizPattern が IS_LAND_LOCKED_SUB のとき`, () => {
    //   describe('100回実行したら', () => {
    //     const actual = getQuizTextAndAnswerSelections('IS_LAND_LOCKED_SUB');
    //
    //     it('answerSelectionPattern が TEXT になること', () => {
    //       expect(actual.answerSelectionPattern).toBe('TEXT');
    //     });
    //
    //     it('quizImage が "" であること', () => {
    //       expect(actual.quizImage).toBe('');
    //     });
    //
    //     it('answerSelections が ４つの配列であること', () => {
    //       expect(actual.answerSelections.length).toBe(4);
    //     });
    //
    //     it('answerSelections が ひとつだけ landLocked="Sub" であること', () => {
    //       const landLocked = actual.answerSelections.filter(a => a.landLocked === 'Sub');
    //       expect(landLocked.length).toBe(1);
    //     });
    //
    //     it('answerSelections が ひとつ以外 landLocked="" または landLocked="Single" または landLocked="Double" であること', () => {
    //       const landUnlocked = actual.answerSelections.filter(a => {
    //         return a.landLocked === '' || a.landLocked === 'Single' || a.landLocked === 'Double';
    //       });
    //       expect(landUnlocked.length).toBe(3);
    //     });
    //   });
    // });

    // describe(`selectedQuizPattern が IS_LAND_LOCKED_DOUBLE のとき`, () => {
    //   describe('100回実行したら', () => {
    //     const actual = getQuizTextAndAnswerSelections('IS_LAND_LOCKED_DOUBLE');
    //
    //     it('answerSelectionPattern が TEXT になること', () => {
    //       expect(actual.answerSelectionPattern).toBe('TEXT');
    //     });
    //
    //     it('quizImage が "" であること', () => {
    //       expect(actual.quizImage).toBe('');
    //     });
    //
    //     it('answerSelections が ４つの配列であること', () => {
    //       expect(actual.answerSelections.length).toBe(4);
    //     });
    //
    //     it('answerSelections が ひとつだけ landLocked="Sub" であること', () => {
    //       const landLocked = actual.answerSelections.filter(a => a.landLocked === 'Double');
    //       expect(landLocked.length).toBe(1);
    //     });
    //
    //     it('answerSelections が ひとつ以外 landLocked="" または landLocked="Single" または landLocked="Sub" であること', () => {
    //       const landUnlocked = actual.answerSelections.filter(a => {
    //         return a.landLocked === '' || a.landLocked === 'Single' || a.landLocked === 'Sub';
    //       });
    //       expect(landUnlocked.length).toBe(3);
    //     });
    //   });
    // });

    // describe(`selectedQuizPattern が COUNTRY_TO_KANJI_ABBR のとき`, () => {
    //   describe('100回実行したら', () => {
    //     const actual = getQuizTextAndAnswerSelections('COUNTRY_TO_KANJI_ABBR');
    //
    //     it('answerSelectionPattern が TEXT になること', () => {
    //       expect(actual.answerSelectionPattern).toBe('TEXT');
    //     });
    //
    //     it('quizImage が "" であること', () => {
    //       expect(actual.quizImage).toBe('');
    //     });
    //
    //     it('answerSelections が ４つの配列であること', () => {
    //       expect(actual.answerSelections.length).toBe(4);
    //     });
    //
    //     it('answerSelections がすべて nameJpBAbbr を持っていること', () => {
    //       actual.answerSelections.forEach(a => {
    //         expect(a.nameJpBAbbr).toBeDefined();
    //         expect(a.nameJpBAbbr).not.toBe('');
    //       });
    //     });
    //   });
    // });

    // describe(`selectedQuizPattern が KANJI_ABBR_TO_COUNTRY のとき`, () => {
    //   describe('100回実行したら', () => {
    //     const actual = getQuizTextAndAnswerSelections('KANJI_ABBR_TO_COUNTRY');
    //
    //     it('answerSelectionPattern が TEXT になること', () => {
    //       expect(actual.answerSelectionPattern).toBe('TEXT');
    //     });
    //
    //     it('quizImage が "" であること', () => {
    //       expect(actual.quizImage).toBe('');
    //     });
    //
    //     it('answerSelections が ４つの配列であること', () => {
    //       expect(actual.answerSelections.length).toBe(4);
    //     });
    //
    //     it('answerSelections がすべて nameJpBAbbr を持っていること', () => {
    //       actual.answerSelections.forEach(a => {
    //         expect(a.nameJpBAbbr).toBeDefined();
    //         expect(a.nameJpBAbbr).not.toBe('');
    //       });
    //     });
    //   });
    // });

    // describe(`selectedQuizPattern が COUNTRY_NAME_SUFFIX のとき`, () => {
    //   describe('100回実行したら', () => {
    //     const actual = getQuizTextAndAnswerSelections('COUNTRY_NAME_SUFFIX');
    //
    //     it('answerSelectionPattern が TEXT になること', () => {
    //       expect(actual.answerSelectionPattern).toBe('TEXT');
    //     });
    //
    //     it('quizImage が "" であること', () => {
    //       expect(actual.quizImage).toBe('');
    //     });
    //
    //     it('answerSelections が ４つの配列であること', () => {
    //       expect(actual.answerSelections.length).toBe(4);
    //     });
    //
    //     it('answerSelections がすべて 異なる nameJp を持っていること', () => {
    //       actual.answerSelections.forEach(a => {
    //         expect(a.nameJp).toBeDefined();
    //         expect(a.nameJp).not.toBe('');
    //       });
    //
    //       const duplicationRemovedNames = actual.answerSelections.map(a => a.nameJp).filter((x, i, self) => {
    //         return self.indexOf(x) === i;
    //       });
    //
    //       expect(duplicationRemovedNames.length).toBe(4);
    //     });
    //   });
    // });
  }
});
