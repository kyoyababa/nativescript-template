import * as QuizTextGenerator from './quiz-text-generator';


describe('countryToCapital', () => {
  describe('日本のデータが渡されたとき、', () => {
    const data = {"nameJp":"日本国","nameJpS":"日本","countryCode":"JP","regionCode":"Asia","capitalJp":"東京","secondCapitalJp":"大阪","isIsland":"true","lat":"35.689568","lon":"139.691717","landLocked":"","nameJpB":"","nameJpBAbbr":""};

    it('「日本」の首都はどこ？ と返されること', () => {
      const actual = QuizTextGenerator.countryToCapital(data);
      expect(actual).toBe('「日本」の首都はどこ？');
    });
  });

  describe('アメリカのデータが渡されたとき、', () => {
    const data = {"nameJp":"アメリカ合衆国","nameJpS":"アメリカ","countryCode":"US","regionCode":"NorthAmerica","capitalJp":"ワシントンD. C.","secondCapitalJp":"ロサンゼルス","isIsland":"false","lat":"38.8951118","lon":"-77.0363658","landLocked":"","nameJpB":"亜米利加","nameJpBAbbr":"米"};

    it('「アメリカ」の首都はどこ？ と返されること', () => {
      const actual = QuizTextGenerator.countryToCapital(data);
      expect(actual).toBe('「アメリカ」の首都はどこ？');
    });
  });
});
