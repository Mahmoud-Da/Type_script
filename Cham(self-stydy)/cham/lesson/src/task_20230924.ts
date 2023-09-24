// 課題１
// 偶数かつ 1000 未満 の項を全て足した値を求め，表示させよ

function Lolo(i: number): number {
  if (i % 2 === 0) {
    return i;
  }
  return 0;
}

function sumLolo(): number[] {
  let sum: number = 0;
  for (let i = 0; i < 1000; i++) {
    sum += Lolo(i);
  }
  console.log(sum);
}
