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

export interface AnswerOfCountry extends Country {
  isCorrect: boolean;
}

export interface AnswerHistory {
  correct: boolean;
}

export type AnswerSelection = 'countryToCapital' | 'capitalToCountry' | 'countryToFlag' | 'flagToCountry' | 'isLandLocked';
