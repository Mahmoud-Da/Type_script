//let
// 再宣言:   不可能
// 再代入:   可能
// スコープ:   ブロックスコープ
// 繰り返し構文:   可能

//var
// 再宣言: 可能;
// 再代入: 可能;
// スコープ: 関数スコープ;
// 繰り返し構文: 可能;

//const
// 再宣言: 不可能;
// 再代入: 不可能;
// スコープ: ブロックスコープ;
// 繰り返し構文: 不可能;

// var避けた方がいい理由
// 1. scope　の範囲

function run() {
  var a = "lili";
  let b = "hana";
  console.log(a, b); // lili hana

  {
    var a = "haha";
    let c = "mama";
    console.log(a, c); // haha mama
  }

  console.log(a); // haha
  // console.log(c); // ReferenceError
}

run();

function run1() {
  var a = "lili";
  let b = "hana";
  console.log(a, b); // lili hana

  {
    var a = "haha";
    let b = "mama";
    console.log(a, b); // haha mama
  }

  console.log(a); // haha
  console.log(b); // hana
}

run1();

// 2
// let: 変数を定義してから、呼び出せる。
// var：変数を呼び出し、定義してもエラー発生しない。

function ⅹ() {
  // console.log(a); // undefined
  var a = "Hana";
  console.log(a); // Hana
}
ⅹ();

function x() {
  // console.log(b); // ReferenceError
  let b = "Mama";
  console.log(b); // Mama
}

x();

// 3
// globalscopeにアクセスしてしまう
var a1 = "lili"; // グローバルにスコープされた
let b1 = "hana"; // グローバルにスコープすることは許可されていない

console.log(window.a1); // lili
// console.log(window.b1); // undefined

// 4
// var　再定義させてします
// let 再定義させない
var a2 = "lili";
var a2 = "mama"; // 変数aはmamaに再定義された

let b2 = "Haha";
let b3 = "HAHA"; // 構文エラー発生する
