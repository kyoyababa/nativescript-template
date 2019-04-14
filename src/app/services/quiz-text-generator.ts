// import { Injectable } from '@angular/core';

export type Country = {
  countryCode: string;
  nameJp: string;
  nameJpS: string;
  nameJpB: string;
  nameJpBAbbr: string;
  capitalJp: string;
  secondCapitalJp: string;
  regionCode: string;
  isIsland: string; // 'true' | 'false';
  landLocked: string; // '' | 'Single' | 'Double' | 'Sub';
  lat: string; // 0.0000000
  lon: string; // 0.0000000
}

// @Injectable()
// export class QuizTextGenerator {
export function countryToCapital(country: Country): string {
  return `「${country.nameJpS}」の首都はどこ？`;
}
// }
