import * as I from '../models/quiz.d';

export function countryToCapital(country: I.Country): string {
  return `「${country.nameJpS}」の首都はどこ？`;
}

export function capitalToCountry(country: I.Country): string {
  return `首都を「${country.capitalJp}」におく国はどこ？`;
}

export function countryToFlag(country: I.Country): string {
  return `「${country.nameJpS}」の国旗はどれ？`;
}

export function flagToCountry(): string {
  return `この国旗はどの国のもの？`;
}

export function isLandLocked(): string {
  return `次のうち、国土が海と面していない内陸国はどれ？`;
}

export function isLandLockedDouble(): string {
  return `次のうち、自身が内陸国で、さらに国境を接するすべての国も内陸国である「二重内陸国」はどれ？`;
}
