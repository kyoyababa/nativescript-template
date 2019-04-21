import * as I from '../models/quiz.d';
import { countries } from './countries';
const COUNTRIES = <Array<I.Country>>countries;


export function getRandomCountry(isLandLocked?: boolean): I.Country {
  return getRandom(COUNTRIES);
}

export function getRandomLockedCountry(): I.Country {
  const isLandLocked = (c: I.Country) => c.landLocked === 'Single' || c.landLocked === 'Double';
  const landLockedCountries = COUNTRIES.filter(c => isLandLocked(c));
  return getRandom(landLockedCountries);
}

export function getRandomLockedSubCountry(): any {
  const isLandLockedSub = (c: I.Country) => c.landLocked === 'Sub';
  const landLockedSubCountries = COUNTRIES.filter(c => isLandLockedSub(c));
  return getRandom(landLockedSubCountries);
}

export function getRandomLockedDoubleCountry(): any {
  const isLandLockedDouble = (c: I.Country) => c.landLocked === 'Double';
  const landLockedDoubleCountries = COUNTRIES.filter(c => isLandLockedDouble(c));
  return getRandom(landLockedDoubleCountries);
}

export function getRandomKanjiAbbribiatableCountry(): any {
  const isKanjiAbbribiatable = (c: I.Country) => c.nameJpBAbbr !== '';
  const kanjiAbbribiatableCountries = COUNTRIES.filter(c => isKanjiAbbribiatable(c));
  return getRandom(kanjiAbbribiatableCountries);
}

export function getRandomSuffixableCountry(): any {

}

export function getSimilarCountries(country: I.Country): Array<I.Country> {
  const sameRegionCountries = COUNTRIES.filter(c => {
    return c.countryCode !== country.countryCode && c.regionCode === country.regionCode;
  });
  return fisherYatesShuffle(sameRegionCountries).splice(0, 3);
}

export function getSimilarUnlockedCountries(country: I.Country): Array<I.Country> {;
  const sameRegionCountries = getSimilarCountries(country).filter(c => {
    return c.landLocked !== 'Single' && c.landLocked !== 'Double';
  });
  return fisherYatesShuffle(sameRegionCountries).splice(0, 3);
}

export function getSimilarUnlockedsubCountries(country: I.Country): any {
  const sameRegionCountries = getSimilarCountries(country).filter(c => {
    return c.landLocked !== 'Sub';
  });
  return fisherYatesShuffle(sameRegionCountries).splice(0, 3);
}

export function getSimilarUnlockeddoubleCountries(country: I.Country): any {
  const sameRegionCountries = getSimilarCountries(country).filter(c => {
    return c.landLocked !== 'Double';
  });
  return fisherYatesShuffle(sameRegionCountries).splice(0, 3);
}

export function getSimilarKanjiAbbrCountries(country: I.Country): any {
  const sameRegionCountries = getSimilarCountries(country).filter(c => {
    return c.nameJpBAbbr !== '';
  });
  return fisherYatesShuffle(sameRegionCountries).splice(0, 3);
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
