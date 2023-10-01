// 課題７
// 数字の階乗を求める: 数字の階乗を求めるプログラムを作成してください。数字の階乗とは、その数以下すべての正の整数のかけ算のことです。例えば、5の階乗は120です。これは、120は1、2、3、4、5のかけ算だからです。
function factorial(number: number): number {
  let result: number = 1;
  for (let i = number; i > 0; i--) {
    result = result * i;
  }
  return result;
}
