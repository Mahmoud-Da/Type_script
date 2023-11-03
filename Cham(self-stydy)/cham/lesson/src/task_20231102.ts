//課題25

// 特定の上限までのすべての奇数の合計を計算するプログラムを書いてください。
// 上限はプログラムへの入力になります。

// 例１：
// 10の場合は、1 + 3 + 5 + 7 + 9 = 25 で結果は25

// 例２：
// 64の場合は1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 = 64 結果は 64

// Write a program which calculates the sum of all odd numbers upto a particular limit.
// The limit will be an input to the program.
function sumOddNumber(number: number): number | string {
  if (!number) {
    return "Enter number, please!";
  }
  function arrayNumber(number: number): number[] {
    let array: number[] = [];
    for (let i = 3; i <= number; i++) {
      for (let j = 0; j < number - 2; j++) {
        if (i % 2 === 1) {
          array.push(i);
          break;
        }
      }
    }
    return array;
  }
  let sum: number = 1;
  for (let k = 0; k < arrayNumber.length; k++) {
    number1 = sum += arrayNumber[k];
  }
  if (number1 === number) {
    return number;
  }
  return number1;
}

sumOddNumber(10);
sumOddNumber(64);
