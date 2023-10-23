// 課題19
// 2つの文字列を比較し、最初の2つの一致しない文字の違いを表示するプログラムを書いてください。
// 使用例：
// const str1 = "Hello, world!";
// const str2 = "Hello, worlds!";

// const difference = compareStrings(str1, str2);

// console.log(difference); // "マッチしたいない文字列は 'i' と 's'"

// Write a program to compare two strings and display the difference between first two non-matching characters.

function stringDifference(string1: string, string2: string): unknown {
  const common: string[] = [];
  const differences: string[] = [];

  for (let char of string1) {
    if (string2.includes(char) && !common.includes(char)) {
      common.push(char);
    }
  }

  for (let char of string1) {
    if (!string2.includes(char) && !differences.includes(char)) {
      differences.push(char);
    }
  }

  for (let char of string2) {
    if (!string1.includes(char) && !differences.includes(char)) {
      differences.push(char);
    }
  }

  return {
    common: common.join(""),
    differences: differences.join(""),
  };
}

function showDifferenceArray(array1: string[], array2: string[]) {
  const diff1 = array1.filter((item: string) => !array2.includes(item));
  const diff2 = array2.filter((item: string) => !array1.includes(item));

  const differences = [...diff1, ...diff2];
  return differences;
}

stringDifference("abc", "abc");
showDifferenceArray(["a", "b", "c"], ["a", "b", "b"]);
