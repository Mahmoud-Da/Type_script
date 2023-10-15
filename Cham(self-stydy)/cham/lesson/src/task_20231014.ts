// ユーザーからの入力として文字列を受け入れるTypeScriptプログラムを作成してください。
// 文字列内で "lili" がインデックス0または1で始まる場合には「True」と表示し、それ以外の場合には「False」と表示してください。
// 使用例：
// input: bada => 結果: True

// input: xbad => 結果: True

// input: mabadi => 結果: True

// Make a TypeScript program that accepts a string from the user as an input.
// Display "True" if "lili" appears starting at index 0 or 1 in the string, otherwise display "False".

function liliSearch(name: string): boolean | string {
  if (!name) {
    return "文書を記入して下さい！";
  }
  let array: RegExpMatchArray = name.match(/\w[a-z]{0,}/gi)!;
  let search: number = array.indexOf("lili");
  if (search === 0) {
    return true;
  }
  if (search === 1) {
    return true;
  }
  return false;
}

// test
liliSearch("my dog's name is mada"); // false
liliSearch("lili is my guinea pig"); // true
liliSearch("my lili is a female guinea pig"); // true
liliSearch("my mama love lili so much"); // false
