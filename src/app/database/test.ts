import * as I from '../models/quiz.d';
import { countries } from './countries';
export const COUNTRIES = <Array<I.Country>>countries;

export const regionCodes = [
  'Europe',
  'Africa',
  'Asia',
  'Oceania',
  'NorthAmerica',
  'SouthAmerica'
];

export const landLockedPatterns = [
  '',
  'Single',
  'Double',
  'Sub'
];

export function filterDuplicateValues(str: Array<string>): Array<string> {
  return str.filter((x: string, i: number, self: Array<string>) => {
    return x !== "" && self.indexOf(x) !== self.lastIndexOf(x);
  });
};
