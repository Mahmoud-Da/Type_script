// 課題4
// 文字列を逆順にする: 文字列内の文字の順序を逆にするプログラムを作成してください。
// .sort()
let stringArr: string[] = ["hello", "hi", "mama", "papa"];
stringArr.sort(function () {
  return -1;
});

let stringArr1: string[] = ["hello", "hi", "mama", "papa"];
stringArr1.sort(() => -1); //Arrow funtion
// test:['papa', 'mama', 'hi', 'hello']

// .reverse()
let stringArr2: string[] = ["hello", "hi", "mama", "papa"];
stringArr2.reverse();
// test:['papa', 'mama', 'hi', 'hello']
