import { countries } from '../database/countries';
import * as QuizTextGenerator from './quiz-text-generator';

const japan = countries.find(c => c.countryCode === 'JP');
const usa = countries.find(c => c.countryCode === 'US');


describe('countryToCapital', () => {
  describe('日本のデータが渡されたとき、', () => {
    it('「日本」の首都はどこ？ と返されること', () => {
      const actual = QuizTextGenerator.countryToCapital(japan);
      expect(actual).toBe('「日本」の首都はどこ？');
    });
  });

  describe('アメリカのデータが渡されたとき、', () => {
    it('「アメリカ」の首都はどこ？ と返されること', () => {
      const actual = QuizTextGenerator.countryToCapital(usa);
      expect(actual).toBe('「アメリカ」の首都はどこ？');
    });
  });
});

describe('capitalToCountry', () => {
  describe('日本のデータが渡されたとき、', () => {
    it('首都を「東京」におく国はどこ？ と返されること', () => {
      const actual = QuizTextGenerator.capitalToCountry(japan);
      expect(actual).toBe('首都を「東京」におく国はどこ？');
    });
  });

  describe('アメリカのデータが渡されたとき、', () => {
    it('首都を「ワシントンD.C.」におく国はどこ？ と返されること', () => {
      const actual = QuizTextGenerator.capitalToCountry(usa);
      expect(actual).toBe('首都を「ワシントンD.C.」におく国はどこ？');
    });
  });
});

describe('countryToFlag', () => {
  describe('日本のデータが渡されたとき、', () => {
    it('「日本」の国旗はどれ？ と返されること', () => {
      const actual = QuizTextGenerator.countryToFlag(japan);
      expect(actual).toBe('「日本」の国旗はどれ？');
    });
  });

  describe('アメリカのデータが渡されたとき、', () => {
    it('「アメリカ」の国旗はどれ？ と返されること', () => {
      const actual = QuizTextGenerator.countryToFlag(usa);
      expect(actual).toBe('「アメリカ」の国旗はどれ？');
    });
  });
});

describe('countryToKanjiAbbr', () => {
  // 日本は略称記号を持たないため値として渡されることはない
  describe('アメリカのデータが渡されたとき、', () => {
    it('次のうち、「アメリカ」を漢字一文字で表したものはどれ？ と返されること', () => {
      const actual = QuizTextGenerator.countryToKanjiAbbr(usa);
      expect(actual).toBe('次のうち、「アメリカ」を漢字一文字で表したものはどれ？');
    });
  });
});

describe('kanjiAbbrToCountry', () => {
  // 日本は略称記号を持たないため値として渡されることはない
  describe('アメリカのデータが渡されたとき、', () => {
    it('次のうち、漢字一文字で「米」と表す国はどれ？ と返されること', () => {
      const actual = QuizTextGenerator.kanjiAbbrToCountry(usa);
      expect(actual).toBe('次のうち、漢字一文字で「米」と表す国はどれ？');
    });
  });
});

describe('countryNameSuffix', () => {
  describe('日本のデータが渡されたとき、', () => {
    it('「日本」の正式名称はどれ？ と返されること', () => {
      const actual = QuizTextGenerator.countryNameSuffix(japan);
      expect(actual).toBe('「日本」の正式名称はどれ？');
    });
  });

  describe('アメリカのデータが渡されたとき、', () => {
    it('「アメリカ」の正式名称はどれ？ と返されること', () => {
      const actual = QuizTextGenerator.countryNameSuffix(usa);
      expect(actual).toBe('「アメリカ」の正式名称はどれ？');
    });
  });
});
