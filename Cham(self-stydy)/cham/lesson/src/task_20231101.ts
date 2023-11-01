// 課題　24
// 変数sumが100を超えている場合に例外を発生させる独自の例外を作成してください。
// 注意: 出力には「その数は100を超えています。」と表示されるべきです。

// Create an own exception such that if variable sum is greater than 100 it should raise an exception.
// Note: the output should print "The number is greater than 100.".
function sumNumber(
  number1: number,
  number2: number,
  number3: number
): number | string {
  let sum: number = number1 + number2 + number3;
  if (
    typeof number1 !== "number" &&
    typeof number2 !== "number" &&
    typeof number3 !== "number"
  ) {
    return "数字を記入してください。";
  } else if (sum > 100) {
    let result: number = (number1 + number2 + number3) / 3;
    let exlain: string = "その数は100を超えています。3つの数値の平均は";
    return exlain + result;
  }
  return sum;
}

// test
sumNumber(1, 3, 0);
sumNumber(0, 0, 0);
sumNumber(18, 45, 40);
sumNumber(8, 45, 40);
