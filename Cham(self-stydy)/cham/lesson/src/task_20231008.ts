// 課題10
// 文字列に重複する文字がないかどうかを確認するプログラムは次のようになります。

// 使用例：

// const str1 = "Hello, world!";
// const str2 = "abcdefghijklmnopqrstuvwxyz";

// console.log(hasUniqueCharacters(str1)); // false
// console.log(hasUniqueCharacters(str2)); // true

// Write a program to check if a string has unique characters or not

function existsSameValue(string: string) {
  function arrayIsUnique(array: string[], size: number) {
    let flag: number = 0;
    for (let i = 0; i < size - 1; ++i) {
      for (let j = i + 1; j < size; ++j) {
        if (array[i] === array[j]) {
          flag = 1;
          break;
        }
      }
    }
    return flag;
  }
  let array: string[] = Array.from(string);
  let check: number = arrayIsUnique(array, array.length);
  if (check === 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// test
existsSameValue("cham");
existsSameValue("lili");
