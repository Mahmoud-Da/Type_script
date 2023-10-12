// ユーザーから入力された文字列内の指定した文字の出現回数をカウントするプログラムを作成してください。
// 使用例：
// count_occurrences("my name is lili") // output: 文字数は:12

// Write a program which takes in a string and count the number of occurrence of a character chosen by the user.

function countLetters(string: string): number {
  let array: string[] = string.split(" ");
  let newArray: string = array.join("");
  return newArray.length;
}

// test
countLetters("My name is Cham");

function countString(string: string): number {
  let countLetters1: number = 0;
  let countSpace: number = string.split(" ").length - 1;
  if (countSpace > 0) {
    return countLetters1 + string.length - countSpace;
  } else {
    return string.length;
  }
}
// test
countString("My name is Cham");
