// 課題23

// 入力文字列を受け取り、文字列内の各単語の最初の文字だけを大文字にし、
// 他の文字には影響を与えないプログラムを書いてください。

// 使用例：
//  "jon skeet" => "Jon Skeet".

//  "old mcdonald" => "Old Mcdonald".

//  "miles o'Brien" => "Miles O'Brien".

// Write a program which takes an input string and capitalizes only the first character of each word in the string,
// and does not affect the others.

// string
function upper_case_first_character_of_word(string: string): string {
  if (!string && string.length === 0) {
    return "Enter string here, please!";
  }
  return string.replace(/\w\S*/g, (w) =>
    w.replace(/^\w/, (c) => c.toUpperCase())
  );
}

// test
upper_case_first_character_of_word("my house");
upper_case_first_character_of_word("this is my pen");
upper_case_first_character_of_word("");
// toUpperCase(): 文字列の文字は大文字に変更するメソッド　><.toLowerCase()メソッド
// 正規表現：/\w\S*/➞　小文字、空白じゃない、前の文字は0回または数回が振り返される
// 修飾子：g➞全部string
// .replace(search_value, new_value)

// array
function upper_case(str: string): string {
  if (!str && str.length === 0) {
    return "Enter string here, please!";
  }
  let array: string[] = str.split(" ");
  let new_array: string[] = [];
  for (let i = 0; i < array.length; i++) {
    new_array.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  }
  return new_array.join(" ");
}

// test
upper_case("my house");
upper_case("this is my pen");
upper_case("");
// .charAt(): 配列のインデックスを指定し、文字のインデックスを呼び出し
// .slice(): 文字列や配列からデータの一部分を切り抜くメソッド
