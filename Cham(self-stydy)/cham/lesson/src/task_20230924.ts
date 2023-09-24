// 課題１
// 偶数かつ 1000 未満 の項を全て足した値を求め，表示させよ

function Lolo(number: number): number {
  if (number % 2 === 0) {
    return number;
  }
  return 0;
}

function sumLolo() {
  let sum: number = 0;
  for (let i = 0; i < 1000; i++) {
    sum += Lolo(i);
  }
  console.log(sum);
}
