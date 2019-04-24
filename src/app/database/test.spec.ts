import * as Test from './test';
const COUNTRIES = Test.COUNTRIES;

describe('checkCountriesDataValid', () => {
  const numberRegexp = /^[\-0-9.]*$/;
  const alphabetRegexp = /^[A-Z.]*$/;
  const katakanaOrKanjiRegexp = /^[ァ-ヴー一-龠・＝]*$/;
  const kanjiRegexp = /^[一-龠]*$/;

  describe(`COUNTRIES データにおいて`, () => {
    it('countryCode はいずれも重複がないこと', () => {
      expect(Test.filterDuplicateValues(COUNTRIES.map(c => c.countryCode)).length).toBe(0);
    });

    it('nameJp はいずれも重複がないこと', () => {
      expect(Test.filterDuplicateValues(COUNTRIES.map(c => c.nameJp)).length).toBe(0);
    });

    it('nameJpS はいずれも重複がないこと', () => {
      expect(Test.filterDuplicateValues(COUNTRIES.map(c => c.nameJpS)).length).toBe(0);
    });

    it('nameJpB はいずれも既知の重複以外の重複がないこと', () => {
      const duplicates = Test.filterDuplicateValues(COUNTRIES.map(c => c.nameJpB));
      const knownDuplicates = ['公果'];
      expect(duplicates.filter(d => knownDuplicates.indexOf(d) < 0).length).toBe(0);
    });

    it('nameJpBAbbr はいずれも既知の重複以外の重複がないこと', () => {
      const duplicates = Test.filterDuplicateValues(COUNTRIES.map(c => c.nameJpBAbbr));
      const knownDuplicates = ['公', '瑞', '波'];
      expect(duplicates.filter(d => knownDuplicates.indexOf(d) < 0).length).toBe(0);
    });

    it('capitalJp はいずれも重複がないこと', () => {
      const duplicates = Test.filterDuplicateValues(COUNTRIES.map(c => c.capitalJp));
      const knownDuplicates = ['ニコシア'];
      expect(duplicates.filter(d => knownDuplicates.indexOf(d) < 0).length).toBe(0);
    });

    it('secondCapitalJp はいずれも重複がないこと', () => {
      expect(Test.filterDuplicateValues(COUNTRIES.map(c => c.secondCapitalJp)).length).toBe(0);
    });
  });

  COUNTRIES.forEach(c => {
    describe(`${c.nameJp} のデータにおいて`, () => {
      it('countryCode が２文字の半角英字（大文字）であること', () => {
        expect(c.countryCode.length).toBe(2);
        expect(c.countryCode.match(alphabetRegexp)).not.toBe(null);
      });

      it('nameJp が１文字以上で、全角カタカナまたは漢字であること', () => {
        expect(c.nameJp.length > 0).toBeTruthy();
        expect(c.nameJp.match(katakanaOrKanjiRegexp)).not.toBe(null);
      });

      it('nameJpS が１文字以上で、全角カタカナまたは漢字であること', () => {
        expect(c.nameJpS.length > 0).toBeTruthy();
        expect(c.nameJpS.match(katakanaOrKanjiRegexp)).not.toBe(null);
      });

      it('nameJpB が "" か、または漢字であること', () => {
        expect(c.nameJpB === '' || c.nameJpB.match(kanjiRegexp) !== null).toBeTruthy();
      });

      it('nameJpBAbbr が "" か、または漢字１文字であること', () => {
        expect(c.nameJpBAbbr === '' || (c.nameJpBAbbr.match(kanjiRegexp) !== null && c.nameJpBAbbr.length === 1)).toBeTruthy();
      });

      it('capitalJp が１文字以上で、全角カタカナまたは漢字、またはアルファベットであること', () => {
        expect(c.capitalJp.length > 0).toBeTruthy();
        const alphabetOrKatakanaOrKanjiRegexp = /^[A-Z.ァ-ヴー一-龠・＝]*$/;
        expect(c.capitalJp.match(alphabetOrKatakanaOrKanjiRegexp)).not.toBe(null);
      });

      it('secondCapitalJp が "" か、または全角カタカナまたは漢字であること', () => {
        expect(c.secondCapitalJp === '' || c.secondCapitalJp.match(katakanaOrKanjiRegexp) !== null).toBeTruthy();
      });

      it('regionCode が I.RegionCode 型のいずれかであること', () => {
        expect(Test.regionCodes.indexOf(c.regionCode) >= 0).toBeTruthy();
      });

      it('isIsland が "true" または "false" のいずれかであること', () => {
        const isIsland = ['true', 'false'];
        expect(isIsland.indexOf(c.isIsland) >= 0).toBeTruthy();
      });

      it('landLocked が I.LandLocked 型のいずれかであること', () => {
        expect(Test.landLockedPatterns.indexOf(c.landLocked) >= 0).toBeTruthy();
      });

      it('latとlon が 半角数字の浮動小数点型であること', () => {
        expect(c.lat.match(numberRegexp) !== null).toBeTruthy();
        expect(c.lon.match(numberRegexp) !== null).toBeTruthy();
      });
    });
  });
});
