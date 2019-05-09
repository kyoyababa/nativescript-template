export type DisplayMode = 'PRETITLE' | 'DISPLAY' | 'RESULT';

export type RegionalBlocks = 'UN'
                           | 'SAARC'
                           | 'AU'
                           | 'CEFTA'
                           | 'AL'
                           | 'USAN'
                           | 'EEU'
                           | 'CARICOM'
                           | 'EU'
                           | 'CAIS'
                           | 'ASEAN'
                           | 'NAFTA'
                           | 'EFTA'
                           | 'PA';

export interface Country {
  countryCode: string;
  nameJp: string;
  nameJpS: string;
  nameJpB: string;
  nameJpBAbbr: string;
  capitalJp: string;
  secondCapitalJp: string;
  regionCode: string;
  isIsland: boolean;
  landLocked: LandLocked;
  lat: number;
  lon: number;
  population: number;
  area: number;
  borders: Array<string>;
  regionalBlocks: Array<RegionalBlocks>;
}

export type LandLocked = '' | 'Single' | 'Double' | 'Sub';

export interface QuizModel {
  answerSelectionPattern: 'TEXT' | 'IMAGE';
  quizText: string;
  quizImage: string | null;
  answerSelections: Array<Country>;
}

export interface AnswerOfCountry extends Country {
  isCorrect: boolean;
}

export interface AnswerHistory {
  isCorrect: boolean;
}

export type AnswerSelection = 'COUNTRY_TO_CAPITAL'
                            | 'CAPITAL_TO_COUNTRY'
                            | 'COUNTRY_TO_SECOND_CAPITAL'
                            | 'SECOND_CAPITAL_TO_COUNTRY'
                            | 'COUNTRY_TO_FLAG'
                            | 'FLAG_TO_COUNTRY'
                            | 'IS_LAND_LOCKED'
                            | 'IS_LAND_LOCKED_SUB'
                            | 'IS_LAND_LOCKED_DOUBLE'
                            | 'COUNTRY_TO_KANJI_ABBR'
                            | 'KANJI_ABBR_TO_COUNTRY'
                            | 'COUNTRY_NAME_SUFFIX'
                            | 'COUNTRY_TO_REGIONAL_BLOCK'
                            | 'REGIONAL_BLOCK_TO_COUNTRY';
