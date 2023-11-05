// 課題26
// 文字列と文字を入力として受け取り、文字列からその文字を削除するプログラムを書いてください。

// 例-1：
// もし与えられた文字列が「HelloWorld」で、削除する文字が 'l' である場合、出力は次のようになります：
// HeoWord
// 例-2：
// もし与えられた文字列が「McDonalds」で、削除する文字が 's' である場合、出力は次のようになります：
// McDonald」

// Write a program which takes a string and a character as inputs and remove the character from the string.
function removeCharacterString(string: string, character: string): string {
  if (
    typeof string != "string" ||
    typeof character != "string" ||
    string.length === 0 ||
    character.length === 0
  ) {
    return "Enter string here, please!";
  }
  let array: string[] = string.split("");
  let newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== character) {
      newArray.push(array[i]);
    }
  }
  return newArray.join("");
}

// text
removeCharacterString("", "");
removeCharacterString("HelloWorld", "");
removeCharacterString("", "l");
removeCharacterString("HelloWorld", "l");
removeCharacterString("McDonalds", "s");
