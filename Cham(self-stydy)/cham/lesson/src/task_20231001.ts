// 課題５
// リスト内の一番大きい数字を見つける: 数字のリスト内の一番大きい数字を見つけるプログラムを作成してください。
let numberArr: number[] = [
  12, 25, 396, 42, 61, 52, 795, 134, 1085, 2348, 1, 24, 98, 75, 563, 3645, 845,
  9756, 178, 126,
];
let maxValue: number = Math.max(...numberArr); //最小値　Math.min()

// 課題６
// 素数かどうかを確認する: 数字が素数かどうかを確認するプログラムを作成してください。素数とは、1と自分自身以外に約数を持たない数のことです。
function prime(number: number) {
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (let i: number = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
      if (i + 1 === number) {
        return true;
      }
    }
  }
}

// 課題７
// 数字の階乗を求める: 数字の階乗を求めるプログラムを作成してください。数字の階乗とは、その数以下すべての正の整数のかけ算のことです。例えば、5の階乗は120です。これは、120は1、2、3、4、5のかけ算だからです。
function factorial(number: number): number {
  let result: number = 1;
  for (let i = number; i > 0; i--) {
    result = result * i;
  }
  return result;
}
