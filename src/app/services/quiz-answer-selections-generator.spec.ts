import * as QuizAnswerSelectionsGenerator from './quiz-answer-selections-generator';


describe('getAnswerSelections', () => {
  describe('日本が正解のとき', () => {
    const correctData = {"nameJp":"日本国","nameJpS":"日本","countryCode":"JP","regionCode":"Asia","capitalJp":"東京","secondCapitalJp":"大阪","isIsland":"true","lat":"35.689568","lon":"139.691717","landLocked":"","nameJpB":"","nameJpBAbbr":""};
    const wrongData = [
      {"nameJp":"アゼルバイジャン共和国","nameJpS":"アゼルバイジャン","countryCode":"AZ","regionCode":"Asia","capitalJp":"バクー","secondCapitalJp":"ギャンジャ","isIsland":"false","lat":"40.4349504","lon":"49.8676232","landLocked":"","nameJpB":"亜塞爾拝然","nameJpBAbbr":""},
      {"nameJp":"アフガニスタン・イスラム共和国","nameJpS":"アフガニスタン","countryCode":"AF","regionCode":"Asia","capitalJp":"カブール","secondCapitalJp":"カンダハール","isIsland":"false","lat":"34.528455","lon":"69.1717029","landLocked":"Single","nameJpB":"亜加業坦","nameJpBAbbr":""},
      {"nameJp":"アブハジア自治共和国","nameJpS":"アブハジア","countryCode":"AB","regionCode":"Asia","capitalJp":"スフミ","secondCapitalJp":"","isIsland":"false","lat":"43.003333","lon":"41.015278","landLocked":"","nameJpB":"","nameJpBAbbr":""}
    ]
    const actual = QuizAnswerSelectionsGenerator.getAnswerSelections(correctData, wrongData);

    it('1つ目に日本が返され、isCorrectがtrueになっていること', () => {
      expect(actual[0].nameJpS).toBe('日本');
      expect(actual[0].isCorrect).toBeTruthy();
    });

    it('2つ目から4つ目にアジアの国データが返され、isCorrectがfalseになっていること', () => {
      for (let i = 1; i < 4; i++) {
        expect(actual[i].regionCode).toBe('Asia');
        expect(actual[i].isCorrect).toBeFalsy();
      }
    });
  });
});
