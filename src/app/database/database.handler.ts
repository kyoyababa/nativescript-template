// import { Injectable } from '@angular/core';

import { COUNTRIES } from './countries';
import { Country } from '../services/quiz-text-generator';


// @Injectable()
// export class DatabaseHandler {
  export function getRandomCountry(): Country {
    return COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
  }

  export function getSimilarCountries(country: Country): Array<Country> {
    const sameRegionCountries = COUNTRIES.filter(c => {
      return c.countryCode !== country.countryCode && c.regionCode === country.regionCode;
    });
    return fisherYatesShuffle(sameRegionCountries).splice(0, 3);
  }

  export function fisherYatesShuffle(array: Array<any>): Array<any> {
    let n: number = array.length;
    let t: any;
    let i: any;

    while (n) {
      i = Math.floor(Math.random() * n--);
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }

    return array;
  }
// }
