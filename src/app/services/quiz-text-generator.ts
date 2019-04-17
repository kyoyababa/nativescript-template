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

export function countryToCapital(country: Country): string {
  return `「${country.nameJpS}」の首都はどこ？`;
}

export function capitalToCountry(country: Country): string {
  return `首都を「${country.capitalJp}」におく国はどこ？`;
}

export function countryToFlag(country: Country): string {
  return `「${country.nameJpS}」の国旗はどれ？`;
}

export function flagToCountry(country: Country): string {
  return `この国旗はどの国のもの？`;
}
