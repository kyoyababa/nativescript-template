import * as _ from '../util/lodash.util';
import * as I from '../models/quiz.d';
import { COUNTRIES } from './countries';
export const countries = COUNTRIES.map(c => {
  return {
    countryCode: c.countryCode,
    nameJp: c.nameJp,
    nameJpS: c.nameJpS,
    nameJpB: c.nameJpB,
    nameJpBAbbr: <string>c.nameJpBAbbr,
    capitalJp: c.capitalJp,
    secondCapitalJp: c.secondCapitalJp,
    regionCode: c.regionCode,
    isIsland: c.isIsland === 'true',
    landLocked: <I.LandLocked>c.landLocked,
    lat: parseFloat(c.lat),
    lon: parseFloat(c.lon)
  }
});


export function getRandomCountry(isLandLocked?: boolean): I.Country {
  return <I.Country>_.sample(countries);
}

export function getRandomSecondCapitalCountry(): I.Country {
  const secondCapitalCountries = countries.filter(c => c.secondCapitalJp !== '');
  return <I.Country>_.sample(secondCapitalCountries);
}

export function getRandomLockedCountry(): I.Country {
  const isLandLocked = (c: I.Country) => c.landLocked === 'Single' || c.landLocked === 'Double';
  const landLockedCountries = countries.filter(c => isLandLocked(c));
  return <I.Country>_.sample(landLockedCountries);
}

export function getRandomLockedSubCountry(): I.Country {
  const isLandLockedSub = (c: I.Country) => c.landLocked === 'Sub';
  const landLockedSubCountries = countries.filter(c => isLandLockedSub(c));
  return <I.Country>_.sample(landLockedSubCountries);
}

export function getRandomLockedDoubleCountry(): I.Country {
  const isLandLockedDouble = (c: I.Country) => c.landLocked === 'Double';
  const landLockedDoubleCountries = countries.filter(c => isLandLockedDouble(c));
  return <I.Country>_.sample(landLockedDoubleCountries);
}

export function getRandomKanjiAbbribiatableCountry(): I.Country {
  const isKanjiAbbribiatable = (c: I.Country) => c.nameJpBAbbr !== '';
  const kanjiAbbribiatableCountries = countries.filter(c => isKanjiAbbribiatable(c));
  return <I.Country>_.sample(kanjiAbbribiatableCountries);
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
  const focusedCountries = countries.filter(c => {
    return focusedSuffixes.some(s => c.nameJp.replace(c.nameJpS, '') === s);
  });
  return _.sample(focusedCountries);
}

export function getSimilarCountries(country: I.Country): Array<I.Country> {
  const sameRegionCountries = countries.filter(c => {
    return c.countryCode !== country.countryCode && c.regionCode === country.regionCode;
  });
  return _.shuffle(sameRegionCountries);
}

export function getSimilarCapitalCountries(country: I.Country): Array<I.Country> {
  const knownDuplicates = ['ニコシア'];
  const sameRegionCountries = getSimilarCountries(country).filter(c => {
    const isDuplicateChar = knownDuplicates.some(d => d === country.capitalJp) && knownDuplicates.some(d => d === c.capitalJp);
    return c.capitalJp !== '' && !isDuplicateChar;
  });
  return _.shuffle(sameRegionCountries);
}

export function getSimilarSecondCapitalCountries(country: I.Country): Array<I.Country> {
  const sameRegionCountries = countries.filter(c => {
    return c.countryCode !== country.countryCode && c.regionCode === country.regionCode && c.secondCapitalJp;
  });
  return _.shuffle(sameRegionCountries);
}

export function getSimilarUnlockedCountries(country: I.Country): Array<I.Country> {;
  const sameRegionCountries = getSimilarCountries(country).filter(c => {
    return c.landLocked !== 'Single' && c.landLocked !== 'Double';
  });
  return _.shuffle(sameRegionCountries);
}

export function getSimilarUnlockedsubCountries(country: I.Country): Array<I.Country> {
  const sameRegionCountries = getSimilarCountries(country).filter(c => {
    return c.landLocked !== 'Sub';
  });
  return _.shuffle(sameRegionCountries);
}

export function getSimilarUnlockeddoubleCountries(country: I.Country): Array<I.Country> {
  const sameRegionCountries = getSimilarCountries(country).filter(c => {
    return c.landLocked !== 'Double';
  });
  return _.shuffle(sameRegionCountries);
}

export function getSimilarKanjiAbbrCountries(country: I.Country): Array<I.Country> {
  const knownDuplicates = ['公', '瑞', '波'];
  const sameRegionCountries = countries.filter(c => {
    const isDuplicateChar = knownDuplicates.some(d => d === country.nameJpBAbbr) && knownDuplicates.some(d => d === c.nameJpBAbbr);
    return c.countryCode !== country.countryCode && c.nameJpBAbbr !== '' && !isDuplicateChar;
  });
  return _.shuffle(sameRegionCountries);
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
  const dummySuffixPatterns = _.shuffle(focusedSuffixPatterns);

  return [
    { ...country, nameJp: country.nameJpS + dummySuffixPatterns[0] },
    { ...country, nameJp: country.nameJpS + dummySuffixPatterns[1] },
    { ...country, nameJp: country.nameJpS + dummySuffixPatterns[2] },
  ];
}
