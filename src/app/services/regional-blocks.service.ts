export const RegionalBlocks = [
  { code: 'UN', name: '国際連合' },
  { code: 'SAARC', name: '南アジア地域協力連合' },
  { code: 'AU', name: 'アフリカ連合' },
  { code: 'CEFTA', name: '中欧自由貿易協定' },
  { code: 'AL', name: 'アラブ連盟' },
  { code: 'USAN', name: '南米諸国連合' },
  { code: 'EEU', name: 'ユーラシア経済連合' },
  { code: 'CARICOM', name: 'カリブ共同体' },
  { code: 'EU', name: '欧州連合' },
  { code: 'CAIS', name: '中米統合機構' },
  { code: 'ASEAN', name: '東南アジア諸国連合' },
  { code: 'NAFTA', name: '北米自由貿易協定' },
  { code: 'EFTA', name: '欧州自由貿易連合' },
  { code: 'PA', name: '太平洋同盟' }
];

export function convertRegionalBlockCodeToName(code: string): string {
  return RegionalBlocks.filter(b => b.code === code)[0].name;
}
