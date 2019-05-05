export type DisplayMode = 'PRETITLE' | 'DISPLAY' | 'RESULT';

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
                            | 'COUNTRY_NAME_SUFFIX';
