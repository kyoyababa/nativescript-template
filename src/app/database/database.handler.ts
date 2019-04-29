import * as I from '../models/quiz.d';
import { countries } from './countries';
export const COUNTRIES = <Array<I.Country>>countries;


export function getRandomCountry(isLandLocked?: boolean): I.Country {
  return getRandom(COUNTRIES);
}

export function getRandomSecondCapitalCountry(): I.Country {
  const secondCapitalCountries = COUNTRIES.filter(c => c.secondCapitalJp !== '');
  return getRandom(secondCapitalCountries);
}

export function getRandomLockedCountry(): I.Country {
  const isLandLocked = (c: I.Country) => c.landLocked === 'Single' || c.landLocked === 'Double';
  const landLockedCountries = COUNTRIES.filter(c => isLandLocked(c));
  return getRandom(landLockedCountries);
}

export function getRandomLockedSubCountry(): I.Country {
  const isLandLockedSub = (c: I.Country) => c.landLocked === 'Sub';
  const landLockedSubCountries = COUNTRIES.filter(c => isLandLockedSub(c));
  return getRandom(landLockedSubCountries);
}

export function getRandomLockedDoubleCountry(): I.Country {
  const isLandLockedDouble = (c: I.Country) => c.landLocked === 'Double';
  const landLockedDoubleCountries = COUNTRIES.filter(c => isLandLockedDouble(c));
  return getRandom(landLockedDoubleCountries);
}

export function getRandomKanjiAbbribiatableCountry(): I.Country {
  const isKanjiAbbribiatable = (c: I.Country) => c.nameJpBAbbr !== '';
  const kanjiAbbribiatableCountries = COUNTRIES.filter(c => isKanjiAbbribiatable(c));
  return getRandom(kanjiAbbribiatableCountries);
}

export function getRandomSuffixableCountry(): any {
  const focusedSuffixes = [
    '国',
    '王国',
    '公国',
    '大公国',
    '共和国',
    '自治共和国',
    '連合共和国',
    '連邦共和国',
    '人民共和国',
    '連邦',
    '連合',
    '諸島',
    '独立国',
    '合衆国',
  ];
  const focusedCountries = COUNTRIES.filter(c => {
    return focusedSuffixes.some(s => c.nameJp.replace(c.nameJpS, '') === s);
  });
  return getRandom(focusedCountries);
}

export function getSimilarCountries(country: I.Country): Array<I.Country> {
  const sameRegionCountries = COUNTRIES.filter(c => {
    return c.countryCode !== country.countryCode && c.regionCode === country.regionCode;
  });
  return fisherYatesShuffle(sameRegionCountries);
}

export function getSimilarCapitalCountries(country: I.Country): Array<I.Country> {
  const knownDuplicates = ['ニコシア'];
  const sameRegionCountries = getSimilarCountries(country).filter(c => {
    const isDuplicateChar = knownDuplicates.some(d => d === country.capitalJp) && knownDuplicates.some(d => d === c.capitalJp);
    return c.capitalJp !== '' && !isDuplicateChar;
  });
  return fisherYatesShuffle(sameRegionCountries);
}

export function getSimilarSecondCapitalCountries(country: I.Country): Array<I.Country> {
  const sameRegionCountries = COUNTRIES.filter(c => {
    return c.countryCode !== country.countryCode && c.regionCode === country.regionCode && c.secondCapitalJp;
  });
  return fisherYatesShuffle(sameRegionCountries);
}

export function getSimilarUnlockedCountries(country: I.Country): Array<I.Country> {;
  const sameRegionCountries = getSimilarCountries(country).filter(c => {
    return c.landLocked !== 'Single' && c.landLocked !== 'Double';
  });
  return fisherYatesShuffle(sameRegionCountries);
}

export function getSimilarUnlockedsubCountries(country: I.Country): Array<I.Country> {
  const sameRegionCountries = getSimilarCountries(country).filter(c => {
    return c.landLocked !== 'Sub';
  });
  return fisherYatesShuffle(sameRegionCountries);
}

export function getSimilarUnlockeddoubleCountries(country: I.Country): Array<I.Country> {
  const sameRegionCountries = getSimilarCountries(country).filter(c => {
    return c.landLocked !== 'Double';
  });
  return fisherYatesShuffle(sameRegionCountries);
}

export function getSimilarKanjiAbbrCountries(country: I.Country): Array<I.Country> {
  const knownDuplicates = ['公', '瑞', '波'];
  const sameRegionCountries = COUNTRIES.filter(c => {
    const isDuplicateChar = knownDuplicates.some(d => d === country.nameJpBAbbr) && knownDuplicates.some(d => d === c.nameJpBAbbr);
    return c.countryCode !== country.countryCode && c.nameJpBAbbr !== '' && !isDuplicateChar;
  });
  return fisherYatesShuffle(sameRegionCountries);
}

export function getDummySuffixCountries(country: I.Country): Array<I.Country> {
  const correctSuffix = country.nameJp.replace(country.nameJpS, '');
  const focusedSuffixPatterns = [
    '国',
    '王国',
    '公国',
    '大公国',
    '共和国',
    '自治共和国',
    '連合共和国',
    '連邦共和国',
    '人民共和国',
    '連邦',
    '連合',
    '諸島',
    '独立国',
    '合衆国',
  ].filter(s => s !== correctSuffix);
  const dummySuffixPatterns = fisherYatesShuffle(focusedSuffixPatterns);

  return [
    { ...country, nameJp: country.nameJpS + dummySuffixPatterns[0] },
    { ...country, nameJp: country.nameJpS + dummySuffixPatterns[1] },
    { ...country, nameJp: country.nameJpS + dummySuffixPatterns[2] },
  ];
}

export function fisherYatesShuffle(array: Array<any>): Array<any> {
  let n = array.length;
  let t: any;
  let i: number;

  while (n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }

  return array;
}

export function getRandom(array: Array<any>): any {
  if (!array || !array.length) return;
  return array[Math.floor(Math.random() * array.length)];
}
