// 課題20

// ユーザーから入力された文字列内の指定した文字の出現回数をカウントするプログラムを作成してください。
// 使用例：
// This is a test string.　結果：内の文字sの出現回数は4です。

// Write a program which takes in a string and count the number of occurrance of a character chosen by the user.

function countWord(string: string, words: string): number {
  let result: number = string.split(words).length - 1;
  return result;
}

// test
countWord("I love you and our son", "ou");
countWord("I love you and our son", "o");
