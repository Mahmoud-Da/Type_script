// // 課題　22
// ユーザーからの入力として文字列を受け入れ、入力された文字列の最初の2文字を表示するプログラムを作成します。
// 文字列の長さが2文字未満の場合、存在する文字列を表示し、空の文字列は空の文字列を表示します。

// Hello -> He

// Write a program that accepts a String from the user as an input and display first two characters of the string entered.
// If the String is shorter than length 2, display whatever there is and the empty string yields an empty string.

function greeting(string: string): string {
  if (!string) {
    return "Enter string here, please!";
  }
  switch (true) {
    case string.length === 0:
      return "";
    case string.length >= 2:
      return string.substring(0, 2);
    default:
      return string;
  }
}

// test
greeting("");
greeting("Hello");
greeting("He");
greeting("H");
