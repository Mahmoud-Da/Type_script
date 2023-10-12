// 課題　13
// ユーザーから入力された文字列内の指定した言葉の出現回数をカウントするプログラムを作成してください。
// 使用例：
// count_occurrences("my name is lili") // output: 言葉数は:4

// Write a program which takes in a string and count the number of words chosen by the user.

function countWords(string: string): number {
  let array: string[] | null = string.match(/\w[a-z]{0,}/gim);
  if (array === null) {
    return 0;
  }
  return array.length;
}

// test
countWords("Hi, my name is Jame");
