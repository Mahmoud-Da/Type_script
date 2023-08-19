// var避けた方がいい理由
// 1
// scope　の範囲
function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar); // Foo Bar

  {
    var moo = "Mooo";
    let baz = "Bazz";
    console.log(moo, baz); // Mooo Bazz
  }

  console.log(moo); // Mooo
  console.log(baz); // ReferenceError
}

run();

// 2
// var 変数が呼ぶ後に定義してもエラー発生しない
// let 変数定義してから呼ばないとエラー発生する
function run() {
  console.log(foo); // undefined
  var foo = "Foo";
  console.log(foo); // Foo
}

run();

function checkHoisting() {
  console.log(foo); // ReferenceError
  let foo = "Foo";
  console.log(foo); // Foo
}

checkHoisting();

// 3
// globalscopeにアクセスしてしまう
var foo = "Foo"; // globally scoped
let bar = "Bar"; // not allowed to be globally scoped

console.log(window.foo); // Foo
console.log(window.bar); // undefined

// 4
// var　再定義させてします
// let 再定義させない
var foo = "foo1";
var foo = "foo2"; // No problem, 'foo1' is replaced with 'foo2'.

let bar = "bar1";
let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared
