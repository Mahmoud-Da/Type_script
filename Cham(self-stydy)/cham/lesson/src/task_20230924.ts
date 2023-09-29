// 課題１
// 偶数かつ 1000 未満 の項を全て足した値を求め，表示させよ

function EvenNumber(number: number): number {
  if (number % 2 === 0) {
    return number;
  }
  return 0;
}

function SumEvenNumber() {
  let sum: number = 0;
  for (let i = 0; i < 1000; i++) {
    sum += EvenNumber(i);
  }
  return sum;
}

// 課題２
// 100, 255, 92, -324, 1982 を要素に持つリストを，大きい順に並び替えたリストを表示させよ

let numArr = [100, 255, 92, -324, 1982];
numArr.sort(function (x: number, y: number): number {
  return y - x;
});
