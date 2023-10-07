// 課題８
// 文字列を入力として受け取り、逆の文字列を返す関数を作成してください。この関数は再帰的であり、問題を解決するために自身を呼び出します。
function reverseString(string: string): string {
  let newString: string = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}
reverseString("Hello");
