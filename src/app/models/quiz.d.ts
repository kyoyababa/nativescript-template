export interface Country {
  countryCode: string;
  nameJp: string;
  nameJpS: string;
  nameJpB: string;
  nameJpBAbbr: string;
  capitalJp: string;
  secondCapitalJp: string;
  regionCode: string;
  isIsland: 'true' | 'false';
  landLocked: '' | 'Single' | 'Double' | 'Sub';
  lat: string; // 0.0000000
  lon: string; // 0.0000000
}

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
  correct: boolean;
}

export type AnswerSelection = 'COUNTRY_TO_CAPITAL'
                            | 'CAPITAL_TO_COUNTRY'
                            | 'COUNTRY_TO_FLAG'
                            | 'FLAG_TO_COUNTRY'
                            | 'IS_LAND_LOCKED'
                            | 'IS_LAND_LOCKED_SUB'
                            | 'IS_LAND_LOCKED_DOUBLE'
                            | 'COUNTRY_TO_KANJI_ABBR'
                            | 'KANJI_ABBR_TO_COUNTRY'
                            | 'COUNTRY_NAME_SUFFIX';
