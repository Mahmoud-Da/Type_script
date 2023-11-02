// 課題　24
// 変数sumが100を超えている場合に例外を発生させる独自の例外を作成してください。
// 注意: 出力には「その数は100を超えています。」と表示されるべきです。

// Create an own exception such that if variable sum is greater than 100 it should raise an exception.
// Note: the output should print "The number is greater than 100.".
function sumNumber(...args: number[]): number | string {
  if (typeof args !== "number" && args.length === 0) {
    return "数字を記入してください。";
  }
  let sum: number = 0;
  for (let i = 0; i < args.length; i++) {
    result = sum += args[i];
  }
  if (result > 100) {
    let exlain: string = "その数は100を超えています。3つの数値の平均は";
    return exlain + result / args.length;
  }
  return result;
}
// test
sumNumber(1, 2, 5);
sumNumber();
sumNumber(18, 45, 40);
sumNumber(8, 45, 40);
