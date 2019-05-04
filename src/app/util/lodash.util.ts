// NOTE: lodash がビルドエラーになりプロダクションコードで使えないため、
// 必要なもののみutilとして抜き出している

export const sample = (arr: Array<any>) => {
  const len = arr == null ? 0 : arr.length;
  return len ? arr[Math.floor(Math.random() * len)] : undefined;
}

export function shuffle(array: Array<any>): Array<any> {
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
