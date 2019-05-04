import * as I from '../models/quiz.d';

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

export const focusedSuffixPatterns = [
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
export const excludedSuffixPatterns = [
  '',
  '民主共和国',
  '民主人民共和国',
  '東方共和国',
  '社会主義共和国',
  '連邦民主共和国',
  '民主社会主義共和国',
  '・イスラム共和国',
  '・アラブ共和国',
  'グレートブリテン・北アイルランド連合王国',
  'セントクリストファー・ネイビス連邦',
  '・ダルサラーム国',
  '・ボリバル共和国',
  '多民族国',
  '旧ユーゴスラビア共和国',
  '・ハシミテ王国',
  '人民民主共和国',
  '中華人民共和国',
  '・トルコ共和国',
  '朝鮮民主主義人民共和国',
  '中華民国',
  '大韓民国',
];

export function getCountryNameSuffix(country: I.Country): string {
  return country.nameJp.replace(country.nameJpS, '');
}
