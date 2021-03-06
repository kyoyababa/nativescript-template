import * as I from '../models/quiz.d';
import { convertRegionalBlockCodeToName } from './regional-blocks.service';

export function countryToCapital(country: I.Country): string {
  return `「${country.nameJpS}」の首都はどこ？`;
}

export function capitalToCountry(country: I.Country): string {
  return `首都を「${country.capitalJp}」におく国はどこ？`;
}

export function countryToSecondCapital(country: I.Country): string {
  return `「${country.nameJpS}」の第二首都と呼ばれる都市はどこ？`;
}

export function secondCapitalToCountry(country: I.Country): string {
  return `「${country.secondCapitalJp}」が第二首都と呼ばれる国はどこ？`;
}

export function countryToFlag(country: I.Country): string {
  return `「${country.nameJpS}」の国旗はどれ？`;
}

export function flagToCountry(): string {
  return `この国旗はどの国のもの？`;
}

export function isLandLocked(): string {
  return `次のうち、国土が海と面していない内陸国はどれ？`;
}

export function isLandLockedSub(): string {
  return `次のうち、国境線の５％未満しか海岸線に接していない「準内陸国」はどれ？`;
}

export function isLandLockedDouble(): string {
  return `次のうち、自身が内陸国で、さらに国境を接するすべての国も内陸国である「二重内陸国」はどれ？`;
}

export function countryToKanjiAbbr(country: I.Country): string {
  return `次のうち、「${country.nameJpS}」を漢字一文字で表したものはどれ？`;
}

export function kanjiAbbrToCountry(country: I.Country): string {
  return `次のうち、漢字一文字で「${country.nameJpBAbbr}」と表す国はどれ？`;
}

export function countryNameSuffix(country: I.Country): string {
  return `「${country.nameJpS}」の正式名称はどれ？`;
}

export function countryToRegionalBlock(country: I.Country): string {
  return `次のうち、「${country.nameJpS}」が加盟しているのはどれ？`;
}

export function regionalBlockToCountry(country: I.Country): string {
  const regionalBlock = convertRegionalBlockCodeToName(country.regionalBlocks[0]);
  return `次のうち、${regionalBlock}に加盟している国はどれ？`;
}


export function getQuizText(selectedQuizPattern: I.AnswerSelection, correctAnswer: I.Country): string {
  switch (selectedQuizPattern) {
    case 'COUNTRY_TO_CAPITAL':
      return countryToCapital(correctAnswer)

    case 'CAPITAL_TO_COUNTRY':
      return capitalToCountry(correctAnswer);

    case 'COUNTRY_TO_SECOND_CAPITAL':
      return countryToSecondCapital(correctAnswer)

    case 'SECOND_CAPITAL_TO_COUNTRY':
      return secondCapitalToCountry(correctAnswer)

    case 'COUNTRY_TO_FLAG':
      return countryToFlag(correctAnswer);

    case 'FLAG_TO_COUNTRY':
      return flagToCountry();

    case 'IS_LAND_LOCKED':
      return isLandLocked();

    case 'IS_LAND_LOCKED_SUB':
      return isLandLockedSub();

    case 'IS_LAND_LOCKED_DOUBLE':
      return isLandLockedDouble();

    case 'COUNTRY_TO_KANJI_ABBR':
      return countryToKanjiAbbr(correctAnswer);

    case 'KANJI_ABBR_TO_COUNTRY':
      return kanjiAbbrToCountry(correctAnswer);

    case 'COUNTRY_NAME_SUFFIX':
      return countryNameSuffix(correctAnswer);

    case 'COUNTRY_TO_REGIONAL_BLOCK':
      return countryToRegionalBlock(correctAnswer);

    case 'REGIONAL_BLOCK_TO_COUNTRY':
      return regionalBlockToCountry(correctAnswer);
  }
}
