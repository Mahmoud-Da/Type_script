// 課題１１
// 文中の最長の単語を見つけるプログラムを書いてください
// 使用例：
// the_longest_word("hi madam lili") //output: madam

function findLongestWord(string: string): unknown | string {
  let array: string[] | null | undefined = string.match(/\w[a-z]{0,}/gi);
  if (array === null) {
    return "401";
  }
  if (array === undefined) {
    return "404";
  } else {
    let result: string = array[0];
    for (let i = 1; i < array.length; i++) {
      if (result.length < array[i].length) {
        result = array[i];
      }
    }
    return result;
  }
}

// test
findLongestWord("I am LiLi, and I am a guinea pig");
