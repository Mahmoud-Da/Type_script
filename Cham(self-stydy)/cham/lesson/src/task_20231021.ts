// 課題18
// 以下のプログラムを作成してください。
// ユーザーから文字列を受け取った場合、文字列の前半部分を後半部分と交換します。
// 文字列の長さが奇数の場合、下位の前半部分を交換します。そして、文字列の長さが1の場合、そのままにします
// 使用例：

// input: hilili // output: lilihi

// Given a string from user, swap the first half with second half.If the string length is odd,
// take the lower first half and swap. And if the string length is 1, leave it alone.

function swapEvenStringPosition(string: string): string {
  if (string.length === 1) {
    return string;
  }

  if (string.length === 0 || typeof string !== "string") {
    return "Enter even string, please!";
  }

  let str1: string = string.slice(0, -string.length / 2);
  let str2: string = string.slice(-string.length / 2);

  return str2 + str1;
}

// test
swapEvenStringPosition("");
swapEvenStringPosition("lilil");
swapEvenStringPosition("cham");
swapEvenStringPosition("c");
swapEvenStringPosition("cham1");
