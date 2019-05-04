import { getAnswerImageSrc, getAnswerCountDisplay, getQuizTextAndAnswerSelections } from './quiz.service';


describe('getAnswerImageSrc', () => {
  describe('CORRECT が渡されたとき', () => {
    it('正解を示す画像が表示されること', () => {
      const actual = getAnswerImageSrc('CORRECT');
      expect(actual).toBe('~/app/images/answer/icon-correct.png');
    });
  });

  describe('INCORRECT が渡されたとき', () => {
    it('不正解を示す画像が表示されること', () => {
      const actual = getAnswerImageSrc('INCORRECT');
      expect(actual).toBe('~/app/images/answer/icon-incorrect.png');
    });
  });
});


describe('getAnswerCountDisplay', () => {
  describe('０問目（まだ１問目に回答する前）のとき', () => {
    it('空文字が返されること', () => {
      const actual = getAnswerCountDisplay([]);
      expect(actual).toBe('');
    });
  });

  function generateAnswersHistoryArray(boolList) {
    return boolList.map(b => {
      return { isCorrect: b }
    });
  }

  describe('１問目に回答し、正解だった場合', () => {
    it('1/1 が返されること', () => {
      const answersHistory = generateAnswersHistoryArray([true]);
      const actual = getAnswerCountDisplay(answersHistory);
      expect(actual).toBe('1/1');
    });
  });

  describe('１〜３問目に回答し、４〜６問目が不正解だった場合', () => {
    it('3/6 が返されること', () => {
      const answersHistory = generateAnswersHistoryArray([true, true, true, false, false, false]);
      const actual = getAnswerCountDisplay(answersHistory);
      expect(actual).toBe('3/6');
    });
  });

  describe('１・３・６・７・９・１２問目に回答し、２・４・５・８・１０・１１・１３問目が不正解だった場合', () => {
    it('3/6 が返されること', () => {
      const answersHistory = generateAnswersHistoryArray([
        true, false, true, false, false, true, true, false, true, false, false, true, false
      ]);
      const actual = getAnswerCountDisplay(answersHistory);
      expect(actual).toBe('6/13');
    });
  });

  describe('２０問すべてに正解している場合', () => {
    it('20/20 が返されること', () => {
      const answersHistory = generateAnswersHistoryArray(Array(20).fill(true));
      const actual = getAnswerCountDisplay(answersHistory);
      expect(actual).toBe('20/20');
    });
  });

  describe('２０問すべてに不正解の場合', () => {
    it('0/20 が返されること', () => {
      const answersHistory = generateAnswersHistoryArray(Array(20).fill(false));
      const actual = getAnswerCountDisplay(answersHistory);
      expect(actual).toBe('0/20');
    });
  });
});


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
