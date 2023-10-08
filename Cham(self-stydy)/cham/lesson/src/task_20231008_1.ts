// 課題１１
// 文中の最長の単語を見つけるプログラムを書いてください
// 使用例：
// the_longest_word("hi madam lili") //output: madam

function findLongestWord(string: string): string {
  let array: any = string.match(/\w[a-z]{0,}/gi);
  let result: string = array[0];

  for (let i = 1; i < array.length; i++) {
    if (result.length < array[i].length) {
      result = array[i];
    }
  }
  return result;
}

// test
findLongestWord("I am LiLi, and I am a guinea pig");
