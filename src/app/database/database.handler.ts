import * as I from '../models/quiz.d';
import { countries } from './countries';
const COUNTRIES = <Array<I.Country>>countries;


export function getRandomCountry(isLandLocked?: boolean): I.Country {
  return getRandom(COUNTRIES);
}

export function getRandomLockedCountry(): I.Country {
  const landLockedCountries = COUNTRIES.filter(c => {
    return c.landLocked === 'Single' || c.landLocked === 'Double';
  });
  return getRandom(landLockedCountries);
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
