import * as Test from './test';
import { COUNTRIES } from './countries';

describe('checkCountriesDataValid', () => {
  const numberRegexp = /^[\-0-9.]*$/;
  const alphabetRegexp = /^[A-Z.]*$/;
  const katakanaOrKanjiRegexp = /^[ァ-ヴー一-龠・＝]*$/;
  const kanjiRegexp = /^[一-龠]*$/;

  describe(`COUNTRIES データにおいて`, () => {
    // it('countryCode はいずれも重複がないこと', () => {
    //   expect(Test.filterDuplicateValues(COUNTRIES.map(c => c.countryCode)).length).toBe(0);
    // });
    //
    // it('countryCodeThreeLetter はいずれも重複がないこと', () => {
    //   console.log(Test.filterDuplicateValues(COUNTRIES.map(c => c.countryCodeThreeLetter)));
    //   expect(Test.filterDuplicateValues(COUNTRIES.map(c => c.countryCodeThreeLetter)).length).toBe(0);
    // });
    //
    // it('nameJp はいずれも重複がないこと', () => {
    //   expect(Test.filterDuplicateValues(COUNTRIES.map(c => c.nameJp)).length).toBe(0);
    // });
    //
    // it('nameJpS はいずれも重複がないこと', () => {
    //   expect(Test.filterDuplicateValues(COUNTRIES.map(c => c.nameJpS)).length).toBe(0);
    // });
    //
    // it('nameJpB はいずれも既知の重複以外の重複がないこと', () => {
    //   const duplicates = Test.filterDuplicateValues(COUNTRIES.map(c => c.nameJpB));
    //   const knownDuplicates = ['公果'];
    //   expect(duplicates.filter(d => knownDuplicates.indexOf(d) < 0).length).toBe(0);
    // });
    //
    // it('nameJpBAbbr はいずれも既知の重複以外の重複がないこと', () => {
    //   const duplicates = Test.filterDuplicateValues(COUNTRIES.map(c => c.nameJpBAbbr));
    //   const knownDuplicates = ['公', '瑞', '波'];
    //   expect(duplicates.filter(d => knownDuplicates.indexOf(d) < 0).length).toBe(0);
    // });
    //
    // it('capitalJp はいずれも重複がないこと', () => {
    //   const duplicates = Test.filterDuplicateValues(COUNTRIES.map(c => c.capitalJp));
    //   const knownDuplicates = ['ニコシア'];
    //   expect(duplicates.filter(d => knownDuplicates.indexOf(d) < 0).length).toBe(0);
    // });
    //
    // it('secondCapitalJp はいずれも重複がないこと', () => {
    //   expect(Test.filterDuplicateValues(COUNTRIES.map(c => c.secondCapitalJp)).length).toBe(0);
    // });

    it('capitalJp と secondCapitalJp が重複した値であるデータがないこと', () => {
      const sameCapitalsCountries = COUNTRIES.filter(c => c.capitalJp === c.secondCapitalJp);
      const knownDuplicates = [''];
      expect(sameCapitalsCountries.filter(c => knownDuplicates.indexOf(c.capitalJp) < 0).length).toBe(0);
    });
  });

  COUNTRIES.forEach(c => {
    describe(`${c.nameJp} のデータにおいて`, () => {
      // it('countryCode が２文字の半角英字（大文字）であること', () => {
      //   expect(c.countryCode.length).toBe(2);
      //   expect(c.countryCode.match(alphabetRegexp)).not.toBe(null);
      // });
      //
      // it('nameJp が１文字以上で、全角カタカナまたは漢字・特定の記号であること', () => {
      //   expect(c.nameJp.length > 0).toBe(true);
      //   expect(c.nameJp.match(katakanaOrKanjiRegexp)).not.toBe(null);
      // });
      //
      // it('nameJpS が１文字以上で、全角カタカナまたは漢字・特定の記号であること', () => {
      //   expect(c.nameJpS.length > 0).toBe(true);
      //   expect(c.nameJpS.match(katakanaOrKanjiRegexp)).not.toBe(null);
      // });
      //
      // it('nameJpB が "" か、または漢字であること', () => {
      //   expect(c.nameJpB === '' || c.nameJpB.match(kanjiRegexp) !== null).toBe(true);
      // });
      //
      // it('nameJpBAbbr が "" か、または漢字１文字であること', () => {
      //   expect(c.nameJpBAbbr === '' || (c.nameJpBAbbr.match(kanjiRegexp) !== null && c.nameJpBAbbr.length === 1)).toBe(true);
      // });
      //
      // it('capitalJp が１文字以上で、全角カタカナまたは漢字、またはアルファベット・特定の記号であること', () => {
      //   expect(c.capitalJp.length > 0).toBe(true);
      //   const alphabetOrKatakanaOrKanjiRegexp = /^[A-Z.ァ-ヴー一-龠・＝]*$/;
      //   expect(c.capitalJp.match(alphabetOrKatakanaOrKanjiRegexp)).not.toBe(null);
      // });
      //
      // it('secondCapitalJp が "" か、または全角カタカナまたは漢字・特定の記号であること', () => {
      //   expect(c.secondCapitalJp === '' || c.secondCapitalJp.match(katakanaOrKanjiRegexp) !== null).toBe(true);
      // });
      //
      // it('regionCode が I.RegionCode 型のいずれかであること', () => {
      //   expect(Test.regionCodes.indexOf(c.regionCode) >= 0).toBe(true);
      // });
      //
      // it('isIsland が "true" または "false" のいずれかであること', () => {
      //   const isIsland = ['true', 'false'];
      //   expect(isIsland.indexOf(c.isIsland) >= 0).toBe(true);
      // });
      //
      // it('landLocked が I.LandLocked 型のいずれかであること', () => {
      //   expect(Test.landLockedPatterns.indexOf(c.landLocked) >= 0).toBe(true);
      // });
      //
      // it('latとlon が 半角数字の浮動小数点型であること', () => {
      //   expect(c.lat.match(numberRegexp) !== null).toBe(true);
      //   expect(c.lon.match(numberRegexp) !== null).toBe(true);
      // });
      //
      // it('正式国名から短縮国名を除くと、想定した接尾辞または空文字のみが残ること', () => {
      //   const actual = Test.getCountryNameSuffix(c);
      //   const suffixPatterns = Array().concat(Test.focusedSuffixPatterns, Test.excludedSuffixPatterns)
      //   const isValidSuffix = suffixPatterns.indexOf(actual) >= 0;
      //   expect(isValidSuffix).toBe(true);
      // });

      // it('population, area はともに0より大きい整数値であること', () => {
      //   expect(c.population.match(/^[\-0-9]*$/) !== null).toBe(true);
      //   expect(c.population).toBeGreaterThan(0);
      //   expect(c.area.match(/^[\-0-9]*$/) !== null).toBe(true);
      //   expect(c.area).toBeGreaterThan(0);
      // });
      //
      // it('borders は15個の文字列の配列であること', () => {
      //   expect(c.borders.length).toBe(15);
      //   expect(c.borders.filter(b => typeof b === 'string').length).toBe(15);
      // });

      it('regionalBlocks は3個の文字列の配列であること', () => {
        expect(c.regionalBlocks.length).toBe(3);
        expect(c.regionalBlocks.filter(b => typeof b === 'string').length).toBe(3);
      });
    });
  });
});
