// 課題17
// 与えられた文字列と非負の整数 n がある場合、元の文字列の n 個のコピーを含む大きな文字列を返すプログラムを作成してください。

// createLargeString("hi", 3) // output: hihihi
// createLargeString("hi", 4) // output: hihihihi
// Given a string and a non-negative int n, return a larger string that is n copies of the original string.

function largerString(string: string, number: number): string {
  if (number <= 0) {
    return "Enter number, please!";
  } else {
    let length: number = string.length * number;
    let sub: string = string;
    return string.padEnd(length, sub);
  }
}

// test
largerString("ha", 0);
largerString("ha", 5);
